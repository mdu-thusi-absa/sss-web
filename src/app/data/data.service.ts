import { Injectable } from '@angular/core';
import * as M from './data-models';
import * as W from './data-workflow';
import * as MW from './data-models-workflow';
import * as H from './data-headings';
import * as E from './data-entityTypes';
import { MatOptgroup } from '@angular/material/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public lg = false;
  entityTypes = new M.Entities<M.EntityType>(M.EntityType);

  shareHolderTypes = new M.Entities<M.Entity>(M.Entity);
  menus = new M.Entities<M.Entity>(M.Entity);
  workFlow: MW.WorkFlow;
  progress = 0;

  getEntityFieldValue(
    entity: M.AnyEntity,
    fieldName: string
  ): string | M.Entities<M.AnyEntity> {
    if (entity) {
      let v = entity[fieldName];
      if (fieldName.slice(-3) == 'Key') {
        // console.log('getEntityFieldValue', fieldName);
        let d = this.getEntitiesByKeyField(fieldName);
        if (d) {
          if (d.has(+v)) {
            return d.get(+v).name;
          } else return 'Not set';
        } else {
          return 'Empty list';
        }
      } else if (fieldName.slice(-4) == 'Keys') {
        // console.log('getEntityFieldValue', fieldName, '[0,1]');
        let d = this.getEntitiesByKeyField(fieldName, {}, [0, 1]);
        
        if (d) return d;
        console.log('Entities for key not found:', fieldName);
      } else if (fieldName.slice(-2) == 'Is') {
        if (v) return 'Yes';
        else return 'No';
      } else {
        if (v != null) return v + '';
        else return 'Not set';
      }
    }
    return '';
  }

  loadEntityTypes() {
    // static and DB entities
    try {
      this.entityTypes.fromJSON(E.jsonEntityTypes);
    } catch (e) {
      console.log('dataService', 'Loading entityTypes from JSON', e);
      throw e;
    }
    this.entityTypes.forEach((value, key, map) => {
      //let sourceType = value.sourceType;
      value.init();
    });
  }

  loadMenus() {
    let mTemp = new Map();
    this.entityTypes.forEach((value, key, map) => {
      if (value['dashboardIndex'] > -1) {
        mTemp.set(value['dashboardIndex'], value);
        //this.menus.set(key,value)
      }
    });
    for (let i = 0; i < mTemp.size; i++) {
      let menu = mTemp.get(i);
      // console.log(menu);
      this.menus.set(menu['key'], menu);
    }
  }

  loadCanHoldSharesIs() {
    this.entityTypes.forEach((value, key, map) => {
      if (value['canHoldSharesIs']) this.shareHolderTypes.set(key, value);
    });
  }

  constructor() {
    // console.log (D['jsonAccountingClasses'])
    this.loadEntityTypes();
    this.loadMenus();
    this.loadCanHoldSharesIs();
    this.workFlow = this.getWorkFlow();
  }

  public getEntityHeadingsMap(
    enumEntityType: E.EnumEntityType
  ): Map<string, string> {
    let m: Map<string, string>;

    m = this.entityTypes.get(enumEntityType).headingsMap;

    if (!m) {
      m = new Map(eval(`[['name','Name'],['suffix','Suffix']]`));
    }
    return m;
  }

  getEntityTypeForName(entityTypeName: string): E.EnumEntityType {
    this.entityTypes.forEach((value, key, map) => {
      if (value.name == entityTypeName) {
        return key;
      }
    });
    return null;
  }

  public getEntitiesByKeyField(
    fieldNameKey: string,
    optionsObject?: object,
    keysArray?: any[]
  ) {
    let f = fieldNameKey;
    let s: E.EnumEntityType;

    this.entityTypes.forEach((value, key, map) => {
      let keyName = value['keyName'];
      let keysName = keyName + 's';
      if (keyName == fieldNameKey || keysName == fieldNameKey) {
        s = key;
      }
    });
    let d = this.getEntities(s, optionsObject, keysArray);
    if (d) return d;
    else console.log('Store not found, field:' + fieldNameKey);
    return;
  }

  public getEntities(
    enumSource: E.EnumEntityType,
    optionsObject?: object,
    keysArray?: any[] // used to get a subset of the Model.Entities
  ): M.Entities<M.AnyEntity> {
    let v: M.Entities<M.AnyEntity>;
    let source = this.entityTypes.get(enumSource);
    if (source) {
      let sourceType = source.sourceType;
      // let v = eval('this.' + source.storeName);
      // v = this[source.storeName];
      v = this.entityTypes.get(enumSource).entities;
      if (sourceType == 'redirect') v = this[source.storeName];
      else if (sourceType == 'json')
        v = this.entityTypes.get(enumSource).entities;
      else if (sourceType == 'function') {
        try {
          // must be a function
          if (optionsObject) {
            return this[source.storeName](optionsObject);
          } else {
            return this[source.storeName]();
          }
        } catch (e) {
          console.log(
            'getEntities',
            enumSource,
            optionsObject,
            keysArray,
            source,
            e
          );
          throw e;
        }
      }
    } else {
      console.log('Error: Source not found, type:' + enumSource);
    }

    if (v) {
      let r = v.getClearCopy(); // just the structure
      
      
      if (keysArray) {
        for (let i = 0; i < keysArray.length; i++) {
          const key = keysArray[i];
          let o = v.get(key);
          r.set(key, o);
        }
        return r;
      } else {
        return v;
      }
    } else {
      // entities not found
      console.log('Not found entities for type:' + enumSource);
    }
    //if (!v) console.log('Dataset not found, type:', E.EnumEntityType)
    return v;
  }

  getWorkFlow(): MW.WorkFlow {
    let workFlow = new MW.WorkFlow(this, 'workflow');
    //workFlow.name = 'Workflow';
    
    workFlow.description = 'Execute a company secretarial task';
    workFlow = W.getWorkFlow(workFlow, this);
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

  dataID = 0;
  public getID(title?: string, prefix?: string): string {
    if (title) {
      let s = / /g;
      let t = title.toLowerCase().replace(s, '-');
      s = /\//g;
      t = t.toLowerCase().replace(s, '-');
      s = /\:/g;
      t = t.toLowerCase().replace(s, '-');
      s = /\,/g;
      t = t.toLowerCase().replace(s, '-');
      s = /\-\-/g;
      t = t.toLowerCase().replace(s, '-');
      s = /\(/g;
      t = t.toLowerCase().replace(s, '-');
      s = /\)/g;
      t = t.toLowerCase().replace(s, '-');
      return t;
    } else if (prefix) {
      this.dataID += 1;
      return prefix + '-' + this.dataID;
    } else {
      this.dataID += 1;
      return this.dataID + '';
    }
  }

  getFieldTypeForName(fieldName: string): string {
    let v = 'text'; //Class,Code,Name,...
    let lastWord = this.getLastWord(fieldName);
    switch (lastWord) {
      case 'Amount':
      case 'Weight':
      case 'Count':
        v = 'number';
        break;
      case 'Index':
      case 'Key':
        v = 'select-entity';
        break;
      case 'Keys':
        v = '';
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

  // getEntityTypes() {
  //   return this.entityTypes;
  // }

  //Business Area
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

  get cities(): M.Entities<M.EntityCity> {
    return this.getEntities(E.EnumEntityType.City) as M.Entities<M.EntityCity>;
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

  get portfolios(): M.Entities<M.Entity> {
    return this.getEntities(E.EnumEntityType.Portfolio);
  }

  get accountingClasses(): M.Entities<M.Entity> {
    return this.getEntities(E.EnumEntityType.AccountingClass);
  }

  get industries() {
    return this.getEntities(E.EnumEntityType.Industry);
  }

  get sercetaries() {
    return this.individuals.select('secreatryIs', true);
  }
  customTypes = new M.Entities<M.Entity>(M.Entity)
    .add(new M.Entity('text'))
    .add(new M.Entity('date'))
    .add(new M.Entity('checkbox'))
    .add(new M.Entity('textarea'))
    .add(new M.Entity('person'))
    .add(new M.Entity('address'))
    .add(new M.Entity('file'))
    .add(new M.Entity('number'))
    .add(new M.Entity('contact'));

  getIndividualsForCountries(countriesArray: number[]) {
    let ps = this.individuals;
    let e = new M.Entities<M.EntityIndividual>(M.EntityIndividual);
    ps.forEach((value, key, map) => {
      if (countriesArray.indexOf(value['countryKey']) > -1) {
        e.add(value as M.EntityIndividual);
      }
    });
    return e;
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

  getEntityTypesForCountry(data: object) {
    let d = this.entityTypes.getClearCopy();
    let countryKey = -1;
    if (typeof data == 'object') {
      countryKey = data['countryKey'];
    } else {
      countryKey = data as number;
    }
    this.getEntities(E.EnumEntityType.TaskType).forEach((value, key, map) => {
      // console.log(value.countryKey);

      if (countryKey == value['countryKey']) {
        if (!d.has(value['countryKey'])) {
          d.add(this.entityTypes.get(value['entityTypeKey']));
        }
      }
    });
    return d;
  }

  getTasksForEntityType(data: object) {
    let d = this.getEntities(E.EnumEntityType.TaskType).select(
      'entityTypeKey',
      data['entityTypeKey']
    );
    console.log(d, data);

    return d;
  }

  getTasksForCountry(data: object) {
    return this.getEntities(E.EnumEntityType.TaskType).select(
      'countryKey',
      data['countryKey']
    );
  }
}
