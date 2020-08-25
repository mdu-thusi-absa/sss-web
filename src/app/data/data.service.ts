import { Injectable } from '@angular/core';
import {
  NaturalEntity,
  Entity,
  LegalEntity,
  User,
  GroupEntity,
  City,
  Entities,
  FunctionalEntity,
  EveryEntity,
  Company,
  FileEntity,
  MeetingEntity,
  MeetingGuestEntity,
  WorkFlow,
  TaskFlowConfirm,
  TaskFlowSelect,
  TaskFlowReminder,
  TaskFlowSubmitDocs,
  TaskFlowUploadDocs,
  TaskFlowForm,
  TaskFlowFormInput,
  TaskFlowMessage,
  EnumEntityType,
  RegulationEntity,
} from './models';
import { EntityDetailsFilesComponent } from '../panels/entity-details-files/entity-details-files.component';
// import { JsonPipe } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import {
  jsonCompanies,
  jsonIndividuals,
  jsonDashboards,
  // jsonEntityTypes,
  // jsonEntityTypesPlural,
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
} from './data-json.module';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public lg = false;
  individuals = new Entities<NaturalEntity>(NaturalEntity);
  functionalEntities: Entities<EveryEntity>;
  dashboards = new Entities<Entity>(Entity);
  dashboardsPlural = new Entities<Entity>(Entity);
  entityTypes = new Entities<Entity>(Entity);

  months = new Entities<Entity>(Entity);
  periods = new Entities<Entity>(Entity);
  progress = 0;
  businessDivisions = new Entities<Entity>(Entity);
  entityStatuses = new Entities<Entity>(Entity);
  reports = new Entities<Entity>(Entity);
  
  users = new Entities<User>(User);
  businessAreas = new Entities<Entity>(Entity);
  legalClasses = new Entities<Entity>(Entity);
  entityStatusTiers = new Entities<Entity>(Entity);
  accountingClasses = new Entities<Entity>(Entity);
  accountingTiers = new Entities<Entity>(Entity);
  
  yesNo = new Entities<Entity>(Entity);
  taskStatus = new Entities<Entity>(Entity);
  taskTypes = new Entities<Entity>(Entity);
  contactPreferences = new Entities<Entity>(Entity);
  industries = new Entities<Entity>(Entity);
  entityTypesPlural = new Entities<Entity>(Entity);

  companies = new Entities<Company>(Company);
  countriesWithTasks = new Entities<Entity>(Entity);
  files = new Entities<FileEntity>(FileEntity);
  portfolios = new Entities<GroupEntity>(GroupEntity);
  meetings = new Entities<MeetingEntity>(MeetingEntity);
  attendees = new Entities<MeetingGuestEntity>(MeetingGuestEntity);
  templates = new Entities<FileEntity>(FileEntity);
  cities = new Entities<City>(City);
  regulations = new Entities<RegulationEntity>(RegulationEntity);
  regulators = new Entities<LegalEntity>(LegalEntity);
  trusts = new Entities<LegalEntity>(LegalEntity);
  auditors = new Entities<LegalEntity>(LegalEntity);
  secretariats = new Entities<LegalEntity>(LegalEntity);
  countries = new Entities<Entity>(Entity);

  constructor() {
    this.dashboards.fromJSON(jsonDashboards);
    this.dashboardsPlural.fromJSON(jsonDashboardsPlural);
    this.entityTypes.fromJSON(jsonDashboards);
    this.months.fromJSON(jsonMonths);
    this.periods.fromJSON(jsonPeriods);
    this.yesNo.fromJSON(jsonYesNo);

    this.accountingClasses.fromJSON(jsonAccountingClasses);
    this.accountingTiers.fromJSON(jsonAccountingTiers);
    
    this.businessAreas.fromJSON(jsonBusinessAreas);
    this.businessDivisions.fromJSON(jsonDivisions);
    this.cities.fromJSON(jsonCities);
    this.companies.fromJSON(jsonCompanies, 1000);
    this.countriesWithTasks.fromJSON(jsonCountriesWithTasks, 1000);
    // console.log(this.countriesWithTasks);
    
    this.contactPreferences.fromJSON(jsonContactPreferences);
    this.entityStatuses.fromJSON(jsonCompanyStatus);
    this.entityStatusTiers.fromJSON(jsonBusinessAreas);
    this.entityTypesPlural.fromJSON(jsonDashboardsPlural);
    this.legalClasses.fromJSON(jsonBusinessAreas);
    this.industries.fromJSON(jsonIndustries);
    this.taskStatus.fromJSON(jsonTaskStatus);
    this.taskTypes.fromJSON(jsonTaskTypes);

    this.attendees.fromJSON(jsonAttendees);
    this.auditors.fromJSON(jsonAuditors,-1,'auditor');
    this.countries.fromJSON(jsonCountries);
    this.files.fromJSON(jsonFiles);
    this.individuals.fromJSON(jsonIndividuals);
    this.meetings.fromJSON(jsonMeetings);
    this.portfolios.fromJSON(jsonPortfolios);
    this.regulations.fromJSON(jsonRegulations);
    this.regulators.fromJSON(jsonRegulators);
    this.reports.fromJSON(jsonReports);
    this.secretariats.fromJSON(jsonSecretariats,-1,'secretariat');
    this.templates.fromJSON(jsonTemplates);
    this.trusts.fromJSON(jsonTrusts);
    this.users.fromJSON(jsonUsers);

    // this.makeFunctionalEntities();
  }

  //   getEntities(enumEntityType: EnumEntityType){
  //   switch (enumEntityType) {
  //     case EnumEntityType.Company:
  //       return  this.companies;
  //     case EnumEntityType.Individual:
  //       return  this.individuals;
  //     case EnumEntityType.User:
  //       return  this.users;
  //     case EnumEntityType.Portfolio:
  //       return  this.portfolios;
  //     case EnumEntityType.Trust:
  //       return  this.trusts;
  //     case EnumEntityType.Auditor:
  //       return  this.auditors;
  //     case EnumEntityType.Secretariat:
  //       return  this.secretariats;
  //     case EnumEntityType.Regulator:
  //       return  this.regulators;
  //     case EnumEntityType.Regulation:
  //       return  this.regulations;
  //     default:
  //       return this.dashboards;
  //   }
  // }

  public getEntities(
    enumSource: EnumEntityType,
    customArray?: any[]
  ): Entities<Entity> {
    let v: Entities<Entity>;
    switch (enumSource) {
      case EnumEntityType.Company:
        return this.companies;
      case EnumEntityType.CompanyFromCountries:
        return this.getCompaniesFromCountries(customArray); //containing keys for countries
      case EnumEntityType.Country:
        return this.getCountries();
      case EnumEntityType.CountryWithTasks:
        return this.getCountriesWithTasks();
      case EnumEntityType.City:
        return this.cities;
      case EnumEntityType.Custom:
        let e = new Entities<Entity>(Entity);
        e.fromArray(customArray); //containing string[] of options
        return e;
      case EnumEntityType.Individual:
        return this.getIndividuals();
      case EnumEntityType.IndividualFromCountries:
        return this.getIndividualsFromCountries(customArray); //containing keys for the countries
      case EnumEntityType.User:
        return this.getUsers();
      case EnumEntityType.Company:
        return this.companies;
      case EnumEntityType.Individual:
        return this.individuals;
      case EnumEntityType.User:
        return this.users;
      case EnumEntityType.Portfolio:
        return this.portfolios;
      case EnumEntityType.Trust:
        return this.trusts;
      case EnumEntityType.Auditor:
        return this.auditors;
      case EnumEntityType.Secretariat:
        return this.secretariats;
      case EnumEntityType.Regulator:
        return this.regulators;
      case EnumEntityType.Regulation:
        return this.regulations;
      case EnumEntityType.Dashboard:
      case EnumEntityType.Search:
      case EnumEntityType.Template:
      case EnumEntityType.Setting:
        return this.dashboards;
      default:
        return null;
        break;
    }
  }

  public getWorkFlowSample(): WorkFlow {
    let workFlow = new WorkFlow(this);
    workFlow.name = 'Amend company registered address';
    workFlow.description = 'Execute a company secretariat task';

    let a = new TaskFlowSelect(this);
    a.name = 'Country of the company';
    a.sourceType = EnumEntityType.CountryWithTasks;
    workFlow.rootTask = a;

    let b1 = new TaskFlowMessage(this);
    b1.name = 'System message';
    b1.description = 'Tasks have not been setup for this country';
    a.addNextFork(b1, 83, '==');

    // let b2 = new TaskFlowMessage(this);
    // b2.name = '2 1';
    // b2.description = '0 1 Message';
    // b1.addNext(b2);

    let c1 = new TaskFlowMessage(this);
    c1.name = 'System message';
    c1.description = 'Tasks have not been setup for this country';
    a.addNextFork(c1, 111, '==');

    let c2 = new TaskFlowMessage(this);
    c2.name = '1 1';
    c1.description = '1 1 Message';
    c1.addNext(c2);

    let b = new TaskFlowSelect(this);
    b.name = 'Company to be amended';
    b.sourceType = EnumEntityType.CompanyFromCountries;
    a.addNextFork(b, 29, '==');

    let c = new TaskFlowForm(this);
    c.name = 'New address';
    c.addInput('address', 'Amendment', 'New address for the company');
    b.addNext(c);

    let d = new TaskFlowUploadDocs(this);
    d.name = 'Upload supporting files';
    c.addNext(d);

    let e = new TaskFlowForm(this);
    e.name = 'CoR 21.1';
    e.addInput('date', 'Date of change of the address', '');
    e.addInput(
      'date',
      'Effective date',
      'At least five business days after filling'
    );
    d.addNext(e);

    let e1 = new TaskFlowConfirm(this);
    e1.name = 'Request approval';
    e.addNext(e1);

    let e2 = new TaskFlowConfirm(this);
    e2.name = 'Approval received';
    e2.value = true
    e1.addNext(e2);

    let f = new TaskFlowSubmitDocs(this);
    f.name = 'Submit following files to CIPC';
    e2.addNext(f);

    let g = new TaskFlowForm(this);
    g.name = 'Submission to CIPC';
    g.addInput('text', 'Reference code', 'Reference code of the application');
    g.addInput('checkbox', 'Confirm submission', '');
    f.addNext(g);

    let h = new TaskFlowReminder(this);
    h.name = 'Set reminder to follow up CIPC';
    h.offsetDays = 10;
    g.addNext(h);

    let i = new TaskFlowConfirm(this);
    i.name = 'Confirm approval from CIPC';
    h.addNext(i);

    let j = new TaskFlowUploadDocs(this);
    j.name = 'Upload approval files from CIPC';
    i.addNext(j);

    let k = new TaskFlowConfirm(this);
    k.name = 'Confirm completion of task';
    j.addNext(k);

    let l = new TaskFlowMessage(this);
    l.name = 'End of task';
    l.description = 'Task has been completed';
    k.addNext(l);

    return workFlow;
  }

  // makeFunctionalEntities() {
  //   this.functionalEntities = new Entities<EveryEntity>(Entity);
  //   this.functionalEntities.fromEntities('dashboard', this.dashboards);
  //   this.functionalEntities.fromEntities('search', this.dashboards);
  // this.functionalEntities.fromEntities('setting', this.dashboards);
  // this.functionalEntities.fromEntities('template', this.dashboards);

  // this.functionalEntities.fromEntities('company', this.companies);
  // this.functionalEntities.fromEntities('individual', this.individuals);
  // this.functionalEntities.fromEntities('user', this.users);
  // this.functionalEntities.fromEntities('portfolio', this.portfolios);
  // this.functionalEntities.fromEntities('trust', this.trusts);
  // this.functionalEntities.fromEntities('auditor', this.auditors);
  // this.functionalEntities.fromEntities('secretariat', this.secretariats);
  // this.functionalEntities.fromEntities('regulator', this.regulators);
  // this.functionalEntities.fromEntities('regulation', this.regulations);
  //   if (this.lg) console.log('loaded');
  // }

  getEntity(entityKey: number) {
    return this.functionalEntities.get(entityKey);
  }

  // getFunctionalEntitiesAll(): Entities<EveryEntity> {
  //   return this.functionalEntities;
  // }

  getCompanies() {
    return this.companies;
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

  getPortfolios(): Entities<Entity> {
    return this.portfolios;
  }

  getAccountingClasses(): Entities<Entity> {
    return this.accountingClasses;
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
    console.log(countriesArray)
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
