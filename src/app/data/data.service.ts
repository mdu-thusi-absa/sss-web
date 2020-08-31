import { Injectable } from '@angular/core';
import * as M from './models';
//import { EntityDetailsFilesComponent } from '../panels/entity-details-files/entity-details-files.component';
// import { JsonPipe } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
//import {jsonAccountingClasses, jsonAddresses, mapCompanyHeadings}  from './data-json.module';
import * as D from './data-json.module';
import { visitValue } from '@angular/compiler/src/util';
// import { data } from 'jquery';
//import { mapCompanyHeadings } from './data-json.module';
//import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public lg = false;
  entityTypes = new M.Entities<M.Entity>(M.Entity);
  accountingClasses = new M.Entities<M.Entity>(M.Entity);
  accountingClassTiers = new M.Entities<M.Entity>(M.Entity);
  addresses = new M.Entities<M.EntityAddress>(M.EntityAddress);
  attendees = new M.Entities<M.EntityMeetingGuest>(M.EntityMeetingGuest);
  auditors = new M.Entities<M.EntityLegal>(M.EntityLegal);
  businessAreas = new M.Entities<M.Entity>(M.Entity);
  businessDivisions = new M.Entities<M.Entity>(M.Entity);
  cities = new M.Entities<M.EntityCity>(M.EntityCity);
  companies = new M.Entities<M.EntityCompany>(M.EntityCompany);
  companyTypes = new M.Entities<M.Entity>(M.Entity);
  consolidation = new M.Entities<M.Entity>(M.Entity);
  contactPreferences = new M.Entities<M.Entity>(M.Entity);
  countries = new M.Entities<M.Entity>(M.Entity);
  countriesWithTasks = new M.Entities<M.Entity>(M.Entity);
  entityStatuses = new M.Entities<M.Entity>(M.Entity);
  entityStatusTiers = new M.Entities<M.Entity>(M.Entity);
  files = new M.Entities<M.EntityFile>(M.EntityFile);
  individuals = new M.Entities<M.EntityNatural>(M.EntityNatural);
  industries = new M.Entities<M.Entity>(M.Entity);
  legalClasses = new M.Entities<M.Entity>(M.Entity);
  meetings = new M.Entities<M.EntityMeeting>(M.EntityMeeting);
  months = new M.Entities<M.Entity>(M.Entity);
  periods = new M.Entities<M.Entity>(M.Entity);
  portfolios = new M.Entities<M.EntityPortfolio>(M.EntityPortfolio);
  regulations = new M.Entities<M.EntityRegulation>(M.EntityRegulation);
  reports = new M.Entities<M.Entity>(M.Entity);
  secretariats = new M.Entities<M.EntityLegal>(M.EntityLegal);
  taskStatuses = new M.Entities<M.Entity>(M.Entity);
  taskTypes = new M.Entities<M.Entity>(M.Entity);
  templates = new M.Entities<M.EntityFile>(M.EntityFile);
  users = new M.Entities<M.EntityUser>(M.EntityUser);
  yesNo = new M.Entities<M.Entity>(M.Entity);
  regulators = new M.Entities<M.EntityLegal>(M.EntityLegal);
  shareholdings = new M.Entities<M.EntityShareholding>(M.EntityShareholding);
  capacities = new M.Entities<M.Entity>(M.Entity);
  properties = new M.Entities<M.EntityProperty>(M.EntityProperty);
  appointments = new M.Entities<M.EntityAppointment>(M.EntityAppointment);
  contactTypes = new M.Entities<M.Entity>(M.Entity);
  contacts = new M.Entities<M.EntityContact>(M.EntityContact);
  custom = new M.Entities<M.Entity>(M.Entity);

  shareCertificates = new M.Entities<M.EntityShareCertificate>(
    M.EntityShareCertificate
  );
  anniversaryMonths = new M.Entities<M.Entity>(M.Entity);

  shareHolderTypes = new M.Entities<M.Entity>(M.Entity);
  menus = new M.Entities<M.Entity>(M.Entity);
  trusts = new M.Entities<M.EntityTrust>(M.EntityTrust);
  parentCompanies = this.companies;
  holdingParentCompanies = this.companies;
  countryWithTasks = new M.Entities<M.Entity>(M.Entity)

  progress = 0;

  // private capitaliseText(text: string){
  //   return text.slice(0,1).toUpperCase() + text.slice(1)
  // }
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
        let d = this.getEntitiesByKeyField(fieldName, [], [0, 1]);
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

  constructor() {
    // static and DB entities
    try {
      // console.log('trying entityTypes.fromJSON');
      
      this.entityTypes.fromJSON(D.jsonEntityTypes);
    } catch (e) {
      // console.log('Loading entityTypes from JSON', e);
    }
    this.entityTypes.forEach((value, key, map) => {
      let sourceType = value.sourceType;

      if (sourceType == 'json') {
        // console.log('trying fromJSON',value.storeName);
        let d = eval('this.' + value.storeName);
        try {
          d.fromJSON(D.mapJSON.get(key));
        } catch (e) {
          console.log('Loading from JSON: key, store', key, value.storeName, e);
        }
      }
    });

    // this.dataMap.forEach((value, key, map) => {
    //   let d = eval('this.' + key);
    //   d.fromJSON(value);
    // });

    // derivative entities
    // menus
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

    //
    this.entityTypes.forEach((value, key, map) => {
      if (value['canHoldSharesIs']) this.shareHolderTypes.set(key, value);
    });
  }

  getDashboards() {
    return this.menus;
  }

  getParentCompanies() {
    return this.companies;
  }

  getHoldingParentCompanies() {
    return this.companies;
  }

  getSecretaries() {
    return this.individuals;
  }

  getLee(){
    return this.individuals
  }

  // getAnniversaryMonths(){
  //   return this.months
  // }

  // variableName(varObj) {
  //   return Object.keys({ varObj: 0 })[0];
  // }

  public getEntityHeadingsMap(
    enumEntityType: M.EnumEntityType
  ): Map<string, string> {
    let m: Map<string, string>;

    switch (enumEntityType) {
      case M.EnumEntityType.Company:
        m = new Map(eval(D.mapCompanyHeadings));
        break;
      default:
        m = new Map(eval(`[['name','Name'],['suffix','Suffix']]`));
        break;
    }
    return m;
  }

  public getEntitiesByKeyField(
    fieldNameKey: string,
    optionsArray?: any[],
    keysArray?: any[]
  ) {
    let f = fieldNameKey;
    let s: M.EnumEntityType;

    this.entityTypes.forEach((value, key, map) => {
      let keyName = value['keyName'];
      let keysName = keyName + 's';
      if (keyName == fieldNameKey || keysName == fieldNameKey) {
        s = key;
      }
    });
    let d = this.getEntities(s, optionsArray, keysArray);
    if (d) return d;
    else console.log('Store not found, field:' + fieldNameKey);
    return;
  }

  public getEntities(
    enumSource: M.EnumEntityType,
    optionsArray?: any[],
    keysArray?: any[] // used to get a subset of the Model.Entities
  ): M.Entities<M.AnyEntity> {
    let v: M.Entities<M.AnyEntity>;
    let source = this.entityTypes.get(enumSource);
    if (source) {
      let sourceType = source.sourceType;
      if (sourceType == 'json' || sourceType == 'redirect') v = eval('this.' + source.storeName);
      else if (sourceType=='function'){
        // must be a function
        let f = 'this.' + source.storeName + '()';
        if (optionsArray)
          f = 'this.' + source.storeName + '(' + optionsArray + ')';
        v = eval(f);
      }
    } else {
      console.log('Source not found, type:' + enumSource);
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
      console.log('Not found entities for:' + enumSource);
    }
    //if (!v) console.log('Dataset not found, type:', M.EnumEntityType)
    return v;
  }

  public getWorkFlowSample(): M.WorkFlow {
    let workFlow = new M.WorkFlow(this);
    workFlow.name = 'Amend company registered address';
    workFlow.description = 'Execute a company secretariat task';

    let a = new M.TaskFlowSelect(this);
    a.name = 'Country of the company';
    a.sourceType = M.EnumEntityType.CountryWithTasks;
    workFlow.rootTask = a;

    let b1 = new M.TaskFlowMessage(this);
    b1.name = 'System message';
    b1.description = 'Tasks have not been setup for this country';
    a.addNextFork(b1, 83, '==');

    // let b2 = new M.TaskFlowMessage(this);
    // b2.name = '2 1';
    // b2.description = '0 1 Message';
    // b1.addNext(b2);

    let c1 = new M.TaskFlowMessage(this);
    c1.name = 'System message';
    c1.description = 'Tasks have not been setup for this country';
    a.addNextFork(c1, 111, '==');

    let c2 = new M.TaskFlowMessage(this);
    c2.name = '1 1';
    c1.description = '1 1 Message';
    c1.addNext(c2);

    let b = new M.TaskFlowSelect(this);
    b.name = 'Company to be amended';
    b.sourceType = M.EnumEntityType.CompaniesFromCountry;
    a.addNextFork(b, 29, '==');

    let c = new M.TaskFlowForm(this);
    c.name = 'New address';
    c.addInput('address', 'Amendment', 'New address for the company');
    b.addNext(c);

    let d = new M.TaskFlowUploadDocs(this);
    d.name = 'Upload supporting files';
    c.addNext(d);

    let e = new M.TaskFlowForm(this);
    e.name = 'CoR 21.1';
    e.addInput('date', 'Date of change of the address', '');
    e.addInput(
      'date',
      'Effective date',
      'At least five business days after filling'
    );
    d.addNext(e);

    let e1 = new M.TaskFlowConfirm(this);
    e1.name = 'Request approval';
    e.addNext(e1);

    let e2 = new M.TaskFlowConfirm(this);
    e2.name = 'Approval received';
    e2.value = true;
    e1.addNext(e2);

    let f = new M.TaskFlowSubmitDocs(this);
    f.name = 'Submit following files to CIPC';
    e2.addNext(f);

    let g = new M.TaskFlowForm(this);
    g.name = 'Submission to CIPC';
    g.addInput('text', 'Reference code', 'Reference code of the application');
    g.addInput('checkbox', 'Confirm submission', '');
    f.addNext(g);

    let h = new M.TaskFlowReminder(this);
    h.name = 'Set reminder to follow up CIPC';
    h.offsetDays = 10;
    g.addNext(h);

    let i = new M.TaskFlowConfirm(this);
    i.name = 'Confirm approval from CIPC';
    h.addNext(i);

    let j = new M.TaskFlowUploadDocs(this);
    j.name = 'Upload approval files from CIPC';
    i.addNext(j);

    let k = new M.TaskFlowConfirm(this);
    k.name = 'Confirm completion of task';
    j.addNext(k);

    let l = new M.TaskFlowMessage(this);
    l.name = 'End of task';
    l.description = 'Task has been completed';
    k.addNext(l);

    return workFlow;
  }

  getCountriesWithTasks() {
    return this.countriesWithTasks;
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

  getCountries() {
    return this.countries;
  }
  getMonths() {
    return this.months;
  }

  // getEntityTypes() {
  //   return this.entityTypes;
  // }

  //Business Area
  getBusinessAreas() {
    return this.businessAreas;
  }

  getBusinessDivisions() {
    return this.businessDivisions;
  }

  getLegalClasses() {
    return this.legalClasses;
  }

  getEntityStatuses() {
    return this.entityStatuses;
  }

  getEntityStatusTiers() {
    return this.entityStatusTiers;
  }

  // getAccountingTier() {
  //   return this.accountingTiers;
  // }

  // getRegulators() {
  //   return this.regulators;
  // }

  // getRegulations() {
  //   return this.regulations;
  // }

  // getTrusts(): Model.Entities<Model.EntityLegal> {
  //   return this.trusts;
  // }

  getYesNo() {
    return this.yesNo;
  }

  getPeriods() {
    return this.periods;
  }

  // getTaskStatus() {
  //   return this.taskStatus;
  // }

  getTaskTypes() {
    return this.taskTypes;
  }

  getContactPreferences() {
    return this.contactPreferences;
  }

  getPortfolios(): M.Entities<M.Entity> {
    return this.portfolios;
  }

  getAccountingClasses(): M.Entities<M.Entity> {
    return this.accountingClasses;
  }

  getIndustries() {
    return this.industries;
  }

  getCompanySercetaries() {
    return this.secretariats;
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

  // .add(new NaturalEntity('Froning', 'Richard', 'Mayham'))
  // .add(new NaturalEntity('Singundsdottir', 'Sara', 'Iceland'))
  // .add(new NaturalEntity('Fraser', 'Mat', 'ABSA'));

  getIndividualsFromCountries(countriesArray: number[]) {
    let ps = this.getIndividuals();
    let e = new M.Entities<M.EntityNatural>(M.EntityNatural);
    ps.forEach((value, key, map) => {
      if (countriesArray.indexOf(value.countryKey) > -1) {
        e.add(value);
      }
    });
    return e;
  }

  getCompaniesFromCountry(countryKey: number) {
    // let e = this.companies.getClearCopy()
    // this.companies.forEach((value, map) => {
    //   if (countrKey === value.countryKey) {
    //     e.add(value);
    //   }
    // });
    // return e;
    return this.companies.select('countryKey',countryKey);
  }

  getIndividuals() {
    return this.individuals;
  }

  getUsers() {
    return this.users;
  }

  // positions = new M.Entities<M.Entity>(M.Entity)
  //   .add(new M.Entity('Director'))
  //   .add(new M.Entity('Auditor'))
  //   .add(new M.Entity('Secretary'))
  //   .add(new M.Entity('Public Officer'));
  // getPositions() {
  //   return this.positions;
  // }
  //Regulatory Types
  //Accounty Classifications
  //...
}
