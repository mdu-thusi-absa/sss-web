import { Injectable } from '@angular/core';
import * as K from './data-entity-kids';
import * as W from './data-workflow-builder';
import * as WC from './data-workflow-classes';
import * as E from './data-entity-types';
import { Entities, AnyEntity } from './data-entities';
import { Entity } from './data-entity-parent';
import { environment } from 'src/environments/environment';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
// import * as T from '../templates/doc-build';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public lg = false;
  entityTypes = new Entities<K.EntityType>(K.EntityType);

  shareHolderTypes = new Entities<Entity>(Entity);
  menus = new Entities<Entity>(Entity);
  workFlow: WC.TaskWalker;
  progress = 0;

  constructor() {
    // T.genTemplate()
    this.loadEntityTypes();
    this.loadEntityTypes_Init();
    this.loadMenus();
    this.loadCanHoldSharesIs();
    this.workFlow = this.initWorkFlow();
  }

  private loadEntityTypes() {
    // static and DB entities
    try {
      this.entityTypes.fromJSON(E.jsonEntityTypes); //load entityTypes constituents will be later to bootstrap other entities
    } catch (e) {
      console.log('dataService', 'Loading entityTypes from JSON', e);
      throw e;
    }
  }

  private loadMenus() {
    let mTemp = new Map();
    this.entityTypes.forEach((value, key, map) => {
      if (value['dashboardIndex'] > -1) {
        mTemp.set(value['dashboardIndex'], value);
      }
    });
    for (let i = 0; i < mTemp.size; i++) {
      let menu = mTemp.get(i);
      this.menus.set(menu['key'], menu);
    }
  }

  private loadCanHoldSharesIs() {
    this.entityTypes.forEach((value, key, map) => {
      if (value['canHoldSharesIs']) this.shareHolderTypes.set(key, value);
    });
  }
  private loadEntityTypes_Init() {
    this.entityTypes.forEach((value, key, map) => {
      value.init(this);
    });
  }

  expandValues(data: object): object {
    let r = {};
    for (let fieldName in data) {
      _expandValues_forEachField(r, data, fieldName, '', this.entityTypes);
    }
    r = _sunitiseMembers(r);
    return r;

    function _sunitiseMembers(value: object): object {
      let keys = Object.keys(value);
      keys.forEach((mem) => {
        if (value[mem] == null) value[mem] = '';
        value[mem] = _dealDate(value, mem);
        value[mem] = _dealAddress(value, mem);
        value[mem] = _dealBoolean(value, mem);
      });

      let target = {};
      keys.forEach((mem) => {
        if (mem.indexOf('._') > -1) {
          _dealUnderScore(target,value, mem);
        } else {
          target[mem] = value[mem]
        }
      });

      return target

      function _dealUnderScore(target: object, source: object, member: string) {
        let fieldName = member.replace('._', '.');
        target[fieldName] = source[member];
      }

      function _dealDate(o: object, member: string): string {
        if (o[member]) {
          if (member.slice(-4) == 'Date')
            return value[member].toISOString().slice(0, 10);
          else return o[member];
        }
        return '';
      }

      function _dealAddress(o: object, member: string): string {
        if (o[member]) {
          if (member.slice(-7) == 'Address') return value[member].toString();
          else return o[member];
        }
        return '';
      }

      function _dealBoolean(o: object, member: string): string {
        if (typeof o[member] == 'boolean') return o[member] ? 'Yes' : 'No';
        return o[member];
      }
    }

    function _expandValues_forEachField(
      targetObject: object,
      sourceObject,
      fieldName: string,
      prefix: string,
      entityTypes: Entities<K.EntityType>
    ) {
      if (fieldName.slice(-3) == 'Key' && fieldName.slice(-4) != '_Key') {
        // get the relevant object
        let entityType = entityTypes.selectFirst(
          'keyName',
          fieldName
        ) as K.EntityType;
        if (entityType) {
          if (_expandValues_forEachField_isValidValue(sourceObject, fieldName))
            targetObject = _expandValues_forEachField_ifValidValue(
              targetObject,
              sourceObject,
              fieldName,
              entityType,
              prefix
            );
        }
      } else {
        targetObject[(prefix ? '.' : '') + fieldName] = sourceObject[fieldName];
      }
      return targetObject;

      function _expandValues_forEachField_isValidValue(
        sourceObject: object,
        fieldName: string
      ): boolean {
        return sourceObject[fieldName] || sourceObject[fieldName] == 0;
      }

      function _expandValues_forEachField_ifValidValue(
        targetObject: object,
        sourceObject: object,
        fieldName: string,
        entityType: K.EntityType,
        prefix: string
      ) {
        let subSourceObject = entityType.entities.get(sourceObject[fieldName]);
        // add its properties to
        for (let subField in subSourceObject) {
          if (subField.slice(-3) == 'Key') {
            targetObject = _expandValues_forEachField(
              targetObject,
              subSourceObject,
              subField,
              fieldName.slice(0, fieldName.length - 3),
              entityTypes
            );
          } else
            targetObject = _expandValues_forEachField_ifValidValue_popValue(
              targetObject,
              subSourceObject,
              fieldName,
              prefix,
              subField
            );
        }
        return targetObject;

        function _expandValues_forEachField_ifValidValue_popValue(
          targetObject: object,
          sourceObject: object,
          fieldName: string,
          prefix: string,
          subField: string
        ) {
          targetObject[
            (prefix ? prefix + '.' : '') +
              fieldName.slice(0, fieldName.length - 3) +
              '.' +
              subField
          ] = sourceObject[subField];
          return targetObject;
        }
      }
    }
  }

  getEntityFieldTextOrEntity(
    entity: AnyEntity,
    fieldName: string
  ): string | Entities<AnyEntity> | K.EntityAddress {
    if (entity) {
      let v = entity[fieldName];
      if (fieldName.slice(-3) == 'Key') {
        let d = this.getEntitiesByKeyField(fieldName);
        if (d) {
          if (d.has(+v)) {
            return d.get(+v).name;
          } else return 'Not set';
        } else {
          return 'Empty list';
        }
      } else if (fieldName.slice(-4) == 'Keys') {
        let keyArray = entity[fieldName];
        let d = null;
        if (keyArray) {
          //console.log(fieldName,keyArray);
          d = this.getEntitiesByKeyField(fieldName, {}, keyArray);
        } else {
          let entityKeyName = this._getEntityKeyName(entity.entityTypeKey);
          let o = {};
          o[entityKeyName] = entity.key;
          d = this.getEntitiesByKeyField(fieldName, o);
        }

        if (d) return d;
        console.log('Entities for key not found:', fieldName);
      } else if (fieldName.slice(-4) == 'Set') {
        let d = this.getEntitiesByKeyField(fieldName, {}, [0, 1]);
        if (d) return d;
        console.log('Entities for key not found:', fieldName);
      } else if (fieldName.slice(-2) == 'Is') {
        if (v) return 'Yes';
        else return 'No';
      } else if (fieldName.slice(-4) == 'Date') {
        if (v) {
          let d: Date;
          if (typeof v == 'string') d = new Date(v);
          else d = v;
          let s = d.toISOString().slice(0, 10);
          return s;
        } else return '';
      } else if (fieldName.slice(-7) == 'Address') {
        if (v) {
          let a = new K.EntityAddress(this);
          a.text = v.text;
          a.cityKey = v.cityKey;
          return a;
        } else return new K.EntityAddress(this);
      } else {
        if (v != null) return v + '';
        else return 'Not set';
      }
    }
    return '';
  }

  getEntityTypeForName(entityTypeName: string): E.EnumEntityType {
    this.entityTypes.forEach((value, key, map) => {
      if (value.name == entityTypeName) {
        return key;
      }
    });
    return null;
  }

  private _getEntityEnumType(fieldNameKey: string) {
    let s: E.EnumEntityType;
    this.entityTypes.forEach((value, key, map) => {
      let keyName = value['keyName'];
      let keysName = keyName + 's';
      let L = fieldNameKey.length;
      if (fieldNameKey.slice(L - 3) == 'Set') {
        //TODO: test, set
        keysName = fieldNameKey.slice(0, L - 3) + 'Key';
      }
      if (keyName == fieldNameKey || keysName == fieldNameKey) {
        s = key;
      }
    });
    return s;
  }

  private _getEntityKeyName(enumType: E.EnumEntityType): string {
    let s = '';
    let e = this.entityTypes.get(enumType);
    return e['keyName'];
  }

  public getEntitiesByKeyField(
    fieldNameKey: string,
    optionsObject?: object,
    keysArray?: any[]
  ) {
    let s: E.EnumEntityType;

    s = this._getEntityEnumType(fieldNameKey);
    let d = this.getEntities(s, optionsObject, keysArray);

    if (d) return d;
    else console.log('Store not found, field: ' + fieldNameKey);
    return;
  }

  private getEntities_SelectSubKeys(
    entities: Entities<AnyEntity>,
    keysArray: number[]
  ): Entities<AnyEntity> {
    let r = entities.getClearCopy();
    for (let i = 0; i < keysArray.length; i++) {
      const key = keysArray[i];
      let o = entities.get(key);
      r.set(key, o);
    }
    return r;
  }

  private getEntities_PopulateEntitiesFromType_ForFunctionName(
    storeName: string,
    optionsObject: object
  ): Entities<AnyEntity> {
    try {
      // must be a function
      if (optionsObject) {
        return this[storeName](optionsObject);
      } else {
        return this[storeName]();
      }
    } catch (e) {
      console.log('getEntities', storeName, e);
      throw e;
    }
  }

  private getEntities_PopulateEntitiesFromType(
    source: K.EntityType,
    enumSource: E.EnumEntityType,
    optionsObject: object
  ): Entities<AnyEntity> {
    let v: Entities<AnyEntity>;
    let sourceType = source.sourceType;
    v = this.entityTypes.get(enumSource).entities;
    if (sourceType == 'redirect') v = this[source.storeName];
    else if (sourceType == 'json')
      v = this.entityTypes.get(enumSource).entities;
    //has been preloaded from JSON stream in dataService constructor
    else if (sourceType == 'function') {
      return this.getEntities_PopulateEntitiesFromType_ForFunctionName(
        source.storeName,
        optionsObject
      );
    }
    return v;
  }

  public getEntities(
    enumSource: E.EnumEntityType,
    optionsObject?: object,
    keysArray?: any[] // used to get a subset of the Model.Entities
  ): Entities<AnyEntity> {
    let v: Entities<AnyEntity>;
    let source = this.entityTypes.get(enumSource);
    if (source)
      v = this.getEntities_PopulateEntitiesFromType(
        source,
        enumSource,
        optionsObject
      );

    if (v) {
      if (keysArray) {
        return this.getEntities_SelectSubKeys(v, keysArray);
      } else {
        return v;
      }
    } else {
      console.log('Error: Source not found, type:' + enumSource);
    }
    return v;
  }

  initWorkFlow(): WC.TaskWalker {
    let workFlow = W.buildWorkFlow(this);
    workFlow.start();
    return workFlow;
  }

  getCountriesWithTasks() {
    return this.getEntities(E.EnumEntityType.CountryWithTasks);
  }

  getDefault(key: string): any {
    let r = 0;
    if (key == 'countryKey') r = 70;
    return r;
  }

  dataID = environment.production ? 0 : Math.round(Math.random() * 10000);

  public getID(title?: string, prefix?: string): string {
    //console.log(this.dataID);
    if (title) {
      let t = title;
      t = _replace(t, / /g);
      t = _replace(t, /\//g);
      t = _replace(t, /\:/g);
      t = _replace(t, /\,/g);
      t = _replace(t, /\-\-/g);
      t = _replace(t, /\(/g);
      t = _replace(t, /\)/g);

      return t;
    } else if (prefix) {
      this.dataID += 1;
      return prefix + '-' + this.dataID;
    } else {
      this.dataID += 1;
      return this.dataID + '';
    }

    function _replace(text: string, pattern: any) {
      return text.toLowerCase().replace(pattern, '-');
    }
  }

  getFieldTypeForFieldName(fieldName: string): string {
    let v = 'text'; //Class,Code,Name,...
    let lastWord = this.getLastWord(fieldName);
    switch (lastWord) {
      case 'Amount':
      case 'Weight':
      case 'Count':
        v = 'number';
        break;
      case 'Index':
      case 'Set':
        v = 'select-checkbox';
        break;
      case 'Key':
        v = 'select-entity';
        break;
      case 'Keys':
        v = ''; //TODO: add select checkbox element for Keys attribute
        break;
      case 'Address':
        v = 'address';
        break;
      case 'Date':
        v = 'date';
        break;
      case 'Desc':
        v = 'textarea';
        break;
      case 'Is':
        v = 'checkbox';
        break;
    }
    return v;
  }

  getLastWord(text: string): string {
    let L = text.length;
    let k = L - 1;
    for (let i = L - 1; i > -1; i--) {
      const a = text[i];
      if (a == a.toUpperCase()) {
        k = i;
        break;
      }
    }
    return text.slice(k);
  }

  // data getters:

  get countries() {
    return this.getEntities(E.EnumEntityType.Country);
  }
  get months() {
    return this.getEntities(E.EnumEntityType.Month);
  }

  get businessAreas() {
    return this.getEntities(E.EnumEntityType.BusinessArea);
  }

  get businessDivisions() {
    return this.getEntities(E.EnumEntityType.BusinessDivision);
  }

  get legalClasses() {
    return this.getEntities(E.EnumEntityType.LegalClass);
  }

  get entityStatuses() {
    return this.getEntities(E.EnumEntityType.EntityStatus);
  }

  get entityStatusTiers() {
    return this.getEntities(E.EnumEntityType.EntityStatusTier);
  }

  get cities(): Entities<K.EntityCity> {
    return this.getEntities(E.EnumEntityType.City) as Entities<K.EntityCity>;
  }

  getCitiesForCountry(countryKey: number) {
    return this.cities.select('countryKey', countryKey);
  }

  yesNo() {
    return this.getEntities(E.EnumEntityType.YesNo);
  }

  get periods() {
    return this.getEntities(E.EnumEntityType.Period);
  }

  get contactPreferences() {
    return this.getEntities(E.EnumEntityType.ContactPreference);
  }

  get portfolios(): Entities<Entity> {
    return this.getEntities(E.EnumEntityType.Portfolio);
  }

  get accountingClasses(): Entities<Entity> {
    return this.getEntities(E.EnumEntityType.AccountingClass);
  }

  get industries() {
    return this.getEntities(E.EnumEntityType.Industry);
  }

  get sercetaries() {
    return this.individuals.select('secreatryIs', true);
  }
  customTypes = new Entities<Entity>(Entity)
    .add(new Entity('text'))
    .add(new Entity('date'))
    .add(new Entity('checkbox'))
    .add(new Entity('textarea'))
    .add(new Entity('person'))
    .add(new Entity('address'))
    .add(new Entity('file'))
    .add(new Entity('number'))
    .add(new Entity('contact'));

  getIndividualsForCountries(data: object) {
    return this.getEntities(E.EnumEntityType.Individual).select(
      'countryKey',
      data['countryKey']
    );
  }

  getIndividualsInternalEmployeeStatus(data: object) {
    return this.getEntities(E.EnumEntityType.Individual).select(
      'internalEmployeeIs',
      data['internalEmployeeIs']
    );
  }

  getCompaniesForCountry(data: object) {
    let d = this.getEntities(E.EnumEntityType.Company).select(
      'countryKey',
      data['countryKey']
    );
    return d;
  }

  get individuals() {
    return this.getEntities(E.EnumEntityType.Individual);
  }

  get users() {
    return this.getEntities(E.EnumEntityType.User);
  }

  get meetings() {
    return this.getEntities(E.EnumEntityType.Meeting);
  }

  get reports() {
    return this.getEntities(E.EnumEntityType.Report);
  }

  get files() {
    return this.getEntities(E.EnumEntityType.File);
  }

  get attendances() {
    return this.getEntities(E.EnumEntityType.Attendance);
  }

  get accountingClassTiers() {
    return this.getEntities(E.EnumEntityType.AccountingClassTier);
  }

  get companies() {
    return this.getEntities(E.EnumEntityType.Company);
  }

  get capacities() {
    return this.getEntities(E.EnumEntityType.Capacity);
  }

  get templates() {
    return this.getEntities(E.EnumEntityType.Template);
  }

  get taskStatuses() {
    return this.getEntities(E.EnumEntityType.TaskStatus);
  }
  get taskTypes() {
    return this.getEntities(E.EnumEntityType.TaskType);
  }
  get customFields() {
    return this.getEntities(E.EnumEntityType.Custom);
  }

  get secretaries() {
    //possibly filter for secretaryIs in individuals
    return this.individuals.select('secretaryIs', true);
  }

  getTasksForCountry(data: object) {
    return this.getEntities(E.EnumEntityType.Task).select(
      'countryKey',
      data['countryKey']
    );
  }

  getTaskTypesForCountry(data: object) {
    return this.getEntities(E.EnumEntityType.TaskType).select(
      'countryKey',
      data['countryKey']
    );
  }

  getTaskTypesActive(data: object) {
    return this.getEntities(E.EnumEntityType.TaskType).select('activeIs', true);
  }

  getWorkflowForParent(data: object) {
    return this.getEntities(E.EnumEntityType.Workflow).select(
      'parentKey',
      data['parentKey']
    );
  }

  getCommitteeTypesForCountry(data: object) {
    return this.getEntities(E.EnumEntityType.CommitteeType).select(
      'countryKey',
      data['countryKey']
    );
  }

  getCountriesForTask(data: object) {
    let that = this;
    let d = _WorkflowForLastMenuChoice(data);
    let countryKeys = _ListOfCountriesForWorkflow(d);
    return _CountriesForCountryKeys(countryKeys);

    function _WorkflowForLastMenuChoice(data: object): K.EntityWorkflow {
      let lastMenuKey = _LastMenuKey(data);
      let lastWorkFlowKey = data[lastMenuKey];
      let d = that
        .getEntities(E.EnumEntityType.Workflow)
        .get(lastWorkFlowKey) as K.EntityWorkflow;
      return d;

      function _LastMenuKey(data: object) {
        let keys = Object.keys(data);
        let lastMenuKey = -1;
        keys.forEach((value) => {
          if (value.slice(-4) == '_Key') {
            let part = value.slice(0, value.length - 4) as string;
            if (Number(part)) {
              let n = Number(part);
              if (n > lastMenuKey) {
                lastMenuKey = n;
              }
            }
          }
        });

        return lastMenuKey + '_Key';
      }
    }

    function _ListOfCountriesForWorkflow(workflow: K.EntityWorkflow) {
      return workflow.countryKeys;
    }

    function _CountriesForCountryKeys(countryKeys: number[]) {
      let countries = that.getEntities(E.EnumEntityType.Country);
      let countryForTasks = countries.getClearCopy();
      countryKeys.forEach((value) => {
        countryForTasks.add(countries.get(value));
      });
      return countryForTasks;
    }
  }

  getCountryForName(data: object) {
    return this.getEntities(E.EnumEntityType.Country).select(
      'name',
      data['1_Key']
    );
  }

  getCommitteesForCompany(data: object) {
    return this.getEntities(E.EnumEntityType.Committee).select(
      'companyKey',
      data['companyKey']
    );
  }

  getAppointmentsForCommittee(data: object) {
    return this.getEntities(E.EnumEntityType.CommitteeAppointment).select(
      'committeeKey',
      data['committeeKey']
    ) as Entities<K.EntityCommitteeAppointment>;
  }

  getCommitteeAppointmentsForCommittee(data: object) {
    return this.getEntities(E.EnumEntityType.CommitteeAppointment).select(
      'committeeKey',
      data['committeeKey']
    ) as Entities<K.EntityCommitteeAppointment>;
  }

  getCommitteeAppointmentActiveForCommittee(data: object) {
    let d = this.getEntities(E.EnumEntityType.CommitteeAppointment).select(
      'committeeKey',
      data['committeeKey']
    ) as Entities<K.EntityCommitteeAppointment>;
    return d.select('endDate', (value) => {
      return !value;
    });
  }

  getCommitteeAppointmentNotActiveForCommittee(data: object) {
    let d = this.getEntities(E.EnumEntityType.CommitteeAppointment).select(
      'committeeKey',
      data['committeeKey']
    ) as Entities<K.EntityCommitteeAppointment>;
    return d.select('endDate', (value) => {
      return value;
    });
  }

  getIndividualsForCommittee(data: object) {
    let d = this.getEntities(E.EnumEntityType.CommitteeAppointment).select(
      'committeeKey',
      data['committeeKey']
    ) as Entities<K.EntityCommitteeAppointment>;
    let e = d.select('endDate', (value) => {
      return !value;
    });
    let inds = this.getEntities(E.EnumEntityType.Individual) as Entities<
      K.EntityIndividual
    >;
    let r = new Entities<K.EntityIndividual>(K.EntityIndividual);
    e.forEach((value, key, map) => {
      let ind = inds.get(value.individualKey);
      r.add(ind);
    });
    return r;
  }

  getIndividualsNotForCommittee(data: object) {
    let d = this.getIndividualsForCommittee(data);
    let inds = this.getEntities(E.EnumEntityType.Individual) as Entities<
      K.EntityIndividual
    >;
    let r = new Entities<K.EntityIndividual>(K.EntityIndividual);
    inds.forEach((value, key, map) => {
      if (!d.has(value.key)) r.add(value);
    });
    return r;
  }
}
