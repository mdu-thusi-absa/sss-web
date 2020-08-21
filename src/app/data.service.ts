import { Injectable } from '@angular/core';
import {
  NaturalEntity,
  Entity,
  Country,
  LegalEntity,
  User,
  GroupEntity,
  City,
  Entities,
  FunctionalEntity,
  Countries,
  EveryEntity,
  Company,
  FileEntity,
  MeetingEntity,
  MeetingGuestEntity,
  WorkFlow,
  TaskFlowConfirm,
  TaskFlowSelect,
  enumTaskFlowSelectSource,
  TaskFlowReminder,
  TaskFlowSubmitDocs,
  TaskFlowUploadDocs,
  TaskFlowForm,
  TaskFlowFormInput,
  TaskFlowMessage,
} from './models';
import { EntityDetailsFilesComponent } from './panels/entity-details-files/entity-details-files.component';
// import { JsonPipe } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import {
  jsonCompanies,
  jsonIndividuals,
  jsonDashboards,
  jsonEntityTypes,
  jsonEntityTypesPlural,
  jsonMonths,
  jsonPeriods,
  jsonFiles,
  jsonDivisions,
  jsonCompanyStatus,
  jsonMeetings,
  jsonAttendees,
  jsonTemplates,
  jsonDashboardsPlural,
  jsonReports,
  jsonCountriesWithTasks,
  jsonCountries,
  jsonPortfolios,
  jsonCities,
  jsonUsers,
  jsonBusinessAreas,
  jsonAccountingClasses,
  jsonAccountingTiers,
  jsonRegulators,
  jsonRegulations,
  jsonTrusts,
  jsonYesNo,
  jsonTaskStatus,
  jsonTaskTypes,
  jsonContactPreferences,
  jsonAuditors,
  jsonSecretariats,
  jsonIndustries,
} from './data-json/data-json.module';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public lg = false;
  companies = new Entities<Company>(Company);
  companiesWithTasks = new Entities<Company>(Company);
  individuals = new Entities<NaturalEntity>(NaturalEntity);
  functionalEntities: Entities<EveryEntity>;
  dashboards = new Entities<Entity>(Entity);
  dashboardsPlural = new Entities<Entity>(Entity);
  entityTypes = new Entities<Entity>(Entity);
  portfolios = new Entities<Entity>(Entity);

  months = new Entities<Entity>(Entity);
  periods = new Entities<Entity>(Entity);
  files = new Entities<FileEntity>(FileEntity);
  progress = 0;
  businessDivisions = new Entities<Entity>(Entity);
  entityStatuses = new Entities<Entity>(Entity);
  meetings = new Entities<MeetingEntity>(MeetingEntity);
  attendees = new Entities<MeetingGuestEntity>(MeetingGuestEntity);
  templates = new Entities<FileEntity>(FileEntity);
  reports = new Entities<Entity>(Entity);
  cities = new Entities<Entity>(Entity);
  users = new Entities<User>(User);
  businessAreas = new Entities<Entity>(Entity);
  legalClasses = new Entities<Entity>(Entity);
  entityStatusTiers = new Entities<Entity>(Entity);
  accountingClasses = new Entities<Entity>(Entity);
  accountingTiers = new Entities<Entity>(Entity);
  regulations = new Entities<Entity>(Entity);
  yesNo = new Entities<Entity>(Entity);
  taskStatus = new Entities<Entity>(Entity);
  taskTypes = new Entities<Entity>(Entity);
  contactPreferences = new Entities<Entity>(Entity);
  industries = new Entities<Entity>(Entity);

  regulators = new Entities<LegalEntity>(LegalEntity);
  trusts = new Entities<LegalEntity>(LegalEntity);
  auditors = new Entities<LegalEntity>(LegalEntity);
  secretariats = new Entities<LegalEntity>(LegalEntity);

  constructor() {
    this.loadStatic();
    this.makeCountries();
    this.makeCompanies();
    this.makeIndividuals();
    this.makeFromJSON(this.portfolios, jsonPortfolios);
    this.makeFromJSON(this.cities, jsonCities);
    this.makeFromJSON(this.users, jsonUsers);
    this.makeFromJSON(this.businessAreas, jsonBusinessAreas);
    this.makeFromJSON(this.legalClasses, jsonBusinessAreas);
    this.makeFromJSON(this.entityStatusTiers, jsonBusinessAreas);
    this.makeFromJSON(this.accountingClasses, jsonAccountingClasses);
    this.makeFromJSON(this.accountingTiers, jsonAccountingTiers);
    this.makeFromJSON(this.regulators, jsonRegulators);
    this.makeFromJSON(this.regulations, jsonRegulations);
    this.makeFromJSON(this.trusts, jsonTrusts);
    this.makeFromJSON(this.yesNo, jsonYesNo);
    this.makeFromJSON(this.taskStatus, jsonTaskStatus);
    this.makeFromJSON(this.taskTypes, jsonTaskTypes);
    this.makeFromJSON(this.contactPreferences, jsonContactPreferences);
    this.makeFromJSON(this.auditors, jsonAuditors);
    this.makeFromJSON(this.secretariats, jsonSecretariats);
    this.makeFromJSON(this.industries, jsonIndustries);

    this.makeFunctionalEntities();
  }

  public getList(
    enumSource: enumTaskFlowSelectSource,
    customArray?: any[]
  ): Entities<Entity> {
    let v: Entities<Entity>;
    switch (enumSource) {
      case enumTaskFlowSelectSource.Companies:
        return this.getCompaniesFromCountries(customArray); //containing keys for countries
      case enumTaskFlowSelectSource.Countries:
        return this.getCountries();
      case enumTaskFlowSelectSource.CountriesWithTasks:
        return this.getCountriesWithTasks();
      case enumTaskFlowSelectSource.Custom:
        let e = new Entities<Entity>(Entity);
        e.fromArray(customArray); //containing string[] of options
        return e;
      case enumTaskFlowSelectSource.Individuals:
        return this.getIndividuals();
      case enumTaskFlowSelectSource.IndividualsFromCountries:
        return this.getIndividualsFromCountries(customArray); //containing keys for the countries
      case enumTaskFlowSelectSource.Users:
        return this.getUsers();
      default:
        return null;
        break;
    }
  }

  public getWorkFlowSample(): WorkFlow {
    let workFlow = new WorkFlow();
    workFlow.name = 'Amend company registered address';
    workFlow.description = 'Execute a company secretariat task';

    let a = new TaskFlowSelect();
    a.name = 'Country of the company';
    a.sourceType = enumTaskFlowSelectSource.CountriesWithTasks;
    workFlow.rootTask = a;

    let b1 = new TaskFlowMessage();
    b1.name = '2 0';
    b1.description = '0 0 Message';
    a.addNextFork(b1, 2, '==');

    let b2 = new TaskFlowMessage();
    b2.name = '2 1';
    b2.description = '0 1 Message';
    b1.addNext(b2);

    let c1 = new TaskFlowMessage();
    c1.name = '1 0';
    c1.description = '1 0 Message';
    a.addNextFork(c1, 1, '==');

    let c2 = new TaskFlowMessage();
    c2.name = '1 1';
    c1.description = '1 1 Message';
    c1.addNext(c2);

    let b = new TaskFlowSelect();
    b.name = 'Company to be amended';
    b.sourceType = enumTaskFlowSelectSource.CompaniesFromCountries;
    a.addNextFork(b, 0, '==');

    let c = new TaskFlowForm();
    c.name = 'New address';
    c.addInput('address', 'Amendment', 'New address for the company');
    b.addNext(c);

    let d = new TaskFlowUploadDocs();
    d.name = 'Upload supporting files';
    c.addNext(d);

    let e = new TaskFlowForm();
    e.name = 'CoR 21.1';
    e.addInput('date', 'Date of change of the address', '');
    e.addInput(
      'date',
      'Effective Date',
      'At least five business days after filling'
    );
    d.addNext(e);

    let f = new TaskFlowSubmitDocs();
    f.name = 'Submit following files to CIPC';
    e.addNext(f);

    let g = new TaskFlowForm();
    g.name = 'Submission to CIPC';
    g.addInput('text', 'Reference code', 'Reference code of the application');
    g.addInput('checkbox', 'Confirm submission', '');
    f.addNext(g);

    let h = new TaskFlowReminder();
    h.name = 'Set reminder to follow up CIPC';
    h.offsetDays = 10;
    g.addNext(h);

    let i = new TaskFlowConfirm();
    i.name = 'Confirm approval from CIPC';
    h.addNext(i);

    let j = new TaskFlowUploadDocs();
    j.name = 'Upload approval files from CIPC';
    i.addNext(j);

    let k = new TaskFlowConfirm();
    k.name = 'Confirm completion of task';
    j.addNext(k);

    let l = new TaskFlowMessage();
    l.name = 'End of task';
    l.description = 'Task has been completed';
    k.addNext(l);

    return workFlow;
  }

  loadStatic() {
    this.dashboards.fromJSON(jsonDashboards);
    this.dashboardsPlural.fromJSON(jsonDashboardsPlural);
    this.entityTypes.fromJSON(jsonEntityTypes);
    this.months.fromJSON(jsonMonths);
    this.periods.fromJSON(jsonPeriods);
    this.businessDivisions.fromJSON(jsonDivisions);
    this.entityStatuses.fromJSON(jsonCompanyStatus);

    this.files.fromJSON(jsonFiles);
    this.meetings.fromJSON(jsonMeetings);
    this.attendees.fromJSON(jsonAttendees);
    this.templates.fromJSON(jsonTemplates);
    this.reports.fromJSON(jsonReports);
  }

  makeIndividuals() {
    this.individuals.fromJSON(jsonIndividuals);
  }

  makeCompanies() {
    this.companies.fromJSON(jsonCompanies, 1000);
    this.companies.fromJSON(jsonCountriesWithTasks, 1000);
    //this.companies.sort();
  }

  makeFunctionalEntities() {
    this.functionalEntities = new Entities<EveryEntity>(Entity);
    this.functionalEntities.fromEntities('dashboard', this.dashboards);
    this.functionalEntities.fromEntities('search', this.dashboards);
    this.functionalEntities.fromEntities('setting', this.dashboards);
    this.functionalEntities.fromEntities('template', this.dashboards);

    this.functionalEntities.fromEntities('company', this.companies);
    this.functionalEntities.fromEntities('individual', this.individuals);
    this.functionalEntities.fromEntities('user', this.users);
    this.functionalEntities.fromEntities('portfolio', this.portfolios);
    this.functionalEntities.fromEntities('trust', this.trusts);
    this.functionalEntities.fromEntities('auditor', this.auditors);
    this.functionalEntities.fromEntities(
      'secretariat',
      this.secretariats
    );
    this.functionalEntities.fromEntities('regulator', this.regulators);
    this.functionalEntities.fromEntities('regulation', this.regulations);
    if (this.lg) console.log('loaded');
  }

  getEntity(entityKey: number) {
    return this.functionalEntities.get(entityKey);
  }

  getFunctionalEntitiesAll(): Entities<EveryEntity> {
    return this.functionalEntities;
  }

  makeCountries() {
    this.countries.fromJSON(jsonCountries);
  }

  getCompanies() {
    return this.companies;
  }

  getCountriesWithTasks() {
    return this.companiesWithTasks;
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

  countries = new Countries(Country);

  getCountries() {
    return this.countries;
  }
  getMonths() {
    return this.months;
  }

  getEntityTypes() {
    return this.entityTypes;
  }

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

  getAccountingTier() {
    return this.accountingTiers;
  }

  getRegulators() {
    return this.regulators;
  }


  getRegulations() {
    return this.regulations;
  }

  getTrusts(): Entities<LegalEntity> {
    return this.trusts;
  }


  getYesNo() {
    return this.yesNo;
  }

  getPeriods() {
    return this.periods;
  }

  getTaskStatus() {
    return this.taskStatus;
  }

  getTaskTypes() {
    return this.taskTypes;
  }

  getContactPreferences() {
    return this.contactPreferences;
  }

  private makeFromJSON(data: Entities<EveryEntity>, json: string) {
    data.fromJSON(json);
  }

  getPortfolios(): Entities<Entity> {
    return this.portfolios;
  }

  getIndustries() {
    return this.industries;
  }

  getCompanySercetaries() {
    return this.secretariats;
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

  // .add(new NaturalEntity('Froning', 'Richard', 'Mayham'))
  // .add(new NaturalEntity('Singundsdottir', 'Sara', 'Iceland'))
  // .add(new NaturalEntity('Fraser', 'Mat', 'ABSA'));

  getIndividualsFromCountries(countriesArray: number[]) {
    let ps = this.getIndividuals();
    let e = new Entities<NaturalEntity>(NaturalEntity);
    ps.forEach((value, key, map) => {
      if (countriesArray.indexOf(value.countryKey) > -1) {
        e.add(value);
      }
    });
    return e;
  }

  getCompaniesFromCountries(countriesArray: number[]) {
    let ps = this.getCompanies();
    let e = new Entities<Company>(Company);
    ps.forEach((value, map) => {
      if (countriesArray.indexOf(value.countryKey) > -1) {
        e.add(value);
      }
    });
    return e;
  }

  getIndividuals() {
    return this.individuals;
  }

  getUsers() {
    return this.users;
  }

  positions = new Entities<Entity>(Entity)
    .add(new Entity('Director'))
    .add(new Entity('Auditor'))
    .add(new Entity('Secretary'))
    .add(new Entity('Public Officer'));
  getPositions() {
    return this.positions;
  }
  //Regulatory Types
  //Accounty Classifications
  //...
}
