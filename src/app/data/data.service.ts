import { Injectable } from '@angular/core';
import {
  EntityNatural,
  Entity,
  EntityLegal,
  EntityUser,
  GroupEntity,
  EntityCity,
  Entities,
  EntityFunctional,
  EveryEntity,
  EntityCompany,
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
  jsonAccountingClassTier,
  jsonConsolidated,
  jsonLegalClass,
  jsonEntityStatus,
  jsonEntityStatusTier,
  jsonBusinessDivision,
  jsonCompanyTypes,
} from './data-json.module';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public lg = false;
  // regulators = new Entities<EntityLegal>(EntityLegal);
  // trusts = new Entities<EntityLegal>(EntityLegal);
  accountingClasses = new Entities<Entity>(Entity);
  accountingClassTiers = new Entities<Entity>(Entity);
  attendees = new Entities<MeetingGuestEntity>(MeetingGuestEntity);
  auditors = new Entities<EntityLegal>(EntityLegal);
  businessAreas = new Entities<Entity>(Entity);
  //businessAreas = new Entities<Entity>(Entity);
  businessDivisions = new Entities<Entity>(Entity);
  //businessDivisions = new Entities<Entity>(Entity);
  cities = new Entities<EntityCity>(EntityCity);
  companies = new Entities<EntityCompany>(EntityCompany);
  companyTypes = new Entities<Entity>(Entity);
  consolidated = new Entities<Entity>(Entity);
  contactPreferences = new Entities<Entity>(Entity);
  countries = new Entities<Entity>(Entity);
  countriesWithTasks = new Entities<Entity>(Entity);
  dashboards = new Entities<Entity>(Entity);
  dashboardsPlural = new Entities<Entity>(Entity);
  entityStatus = new Entities<Entity>(Entity);
  entityStatuses = new Entities<Entity>(Entity);
  // entityStatusTier = new Entities<Entity>(Entity);
  entityStatusTiers = new Entities<Entity>(Entity);
  entityTypes = new Entities<Entity>(Entity);
  entityTypesPlural = new Entities<Entity>(Entity);
  files = new Entities<FileEntity>(FileEntity);
  functionalEntities: Entities<EveryEntity>;
  individuals = new Entities<EntityNatural>(EntityNatural);
  industries = new Entities<Entity>(Entity);
  legalClasses = new Entities<Entity>(Entity);
  //legalClasses = new Entities<Entity>(Entity);
  meetings = new Entities<MeetingEntity>(MeetingEntity);
  months = new Entities<Entity>(Entity);
  periods = new Entities<Entity>(Entity);
  portfolios = new Entities<GroupEntity>(GroupEntity);
  progress = 0;
  regulations = new Entities<RegulationEntity>(RegulationEntity);
  reports = new Entities<Entity>(Entity);
  secretariats = new Entities<EntityLegal>(EntityLegal);
  taskStatuses = new Entities<Entity>(Entity);
  taskTypes = new Entities<Entity>(Entity);
  templates = new Entities<FileEntity>(FileEntity);
  users = new Entities<EntityUser>(EntityUser);
  yesNo = new Entities<Entity>(Entity);

  constructor() {
    this.dashboards.fromJSON(jsonDashboardsPlural);
    this.dashboardsPlural.fromJSON(jsonDashboardsPlural);
    this.entityTypes.fromJSON(jsonDashboards);
    this.months.fromJSON(jsonMonths);
    this.periods.fromJSON(jsonPeriods);
    this.yesNo.fromJSON(jsonYesNo);

    this.accountingClasses.fromJSON(jsonAccountingClasses);
    // this.accountingTiers.fromJSON(jsonAccountingTiers);

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
    // this.taskStatus.fromJSON(jsonTaskStatus);
    this.taskTypes.fromJSON(jsonTaskTypes);

    // this.attendees.fromJSON(jsonAttendees);
    this.auditors.fromJSON(jsonAuditors, -1, 'auditor');
    this.countries.fromJSON(jsonCountries);
    this.files.fromJSON(jsonFiles);
    this.individuals.fromJSON(jsonIndividuals);
    this.meetings.fromJSON(jsonMeetings);
    this.portfolios.fromJSON(jsonPortfolios);
    this.regulations.fromJSON(jsonRegulations);
    // this.regulators.fromJSON(jsonRegulators);
    this.reports.fromJSON(jsonReports);
    this.secretariats.fromJSON(jsonSecretariats, -1, 'secretariat');
    this.templates.fromJSON(jsonTemplates);
    // this.trusts.fromJSON(jsonTrusts);
    this.users.fromJSON(jsonUsers);
    this.companyTypes.fromJSON(jsonCompanyTypes);

    // this.accountingClass.fromJSON(jsonAccountingClasses);
    // this.accountingClassTier.fromJSON(jsonAccountingClassTier);
    // this.consolidated.fromJSON(jsonConsolidated);
    // this.businessArea.fromJSON(jsonBusinessAreas);
    // this.legalClass.fromJSON(jsonLegalClass);
    // this.entityStatus.fromJSON(jsonEntityStatus);
    // this.entityStatusTier.fromJSON(jsonEntityStatusTier);
    // this.businessDivision.fromJSON(jsonBusinessDivision);
    // this.companyType.fromJSON(jsonCompanyType);

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

  public getEntityHeadingsMap(
    enumEntityType: EnumEntityType
  ): Map<string, string> {
    let m = new Map();
    switch (enumEntityType) {
      case EnumEntityType.Company:
        m.set('suffix', 'Suffix')
          .set('companyTypeKey', 'Entity type')
          .set('internalCode', 'Internal code')
          .set('leCode', 'LE number')
          .set('registrationCode', 'Entity registration number')
          .set('portfolioKeys', 'Portfolios')
          .set('countryKey', 'Country of Incorporation')
          .set('isRepresentativeOffice', 'Representative Office ')
          .set('isForeignBranch', 'Foreign Branch ')
          .set('incorporationDate', 'Incorporation date')
          .set('businessAreaKey', 'Business area')
          .set('legalClassKey', 'Legal classification')
          .set('entityStatusKey', 'Entity status')
          .set('entityStatusTierKey', 'Entity status tiering')
          .set('incomeTax', 'Income tax number of the entity')
          .set('vatCode', 'Value added tax (VAT) number')
          .set('businessDivisionKey', 'Business division')
          .set('consolidatedKey', 'Consolidated/non-consolidated')
          .set('consolidateUnder', 'Consolidate under (Bank/Group)')
          .set('accountingClassKey', 'Accounting classification')
          .set('accountingClassTierKey', 'Accounting classification tiering')
          .set(
            'parentCompanyKey',
            'Direct Parent/Ownership (Major Shareholder)'
          )
          .set('parentHolding', 'Direct Parent - % ownership - ')
          .set(
            'holdingParentCompanyKey',
            'Absa shareholding in entity - Shareholder'
          )
          .set('holdingHolding', 'Absa shareholding in the entity – % ')
          .set(
            'objectivePublishedDesc',
            'Business objective/Nature of business activities per Annual Financial Statements'
          )
          .set(
            'objectiveRegisteredDesc',
            'Business objective/Nature of business activities per Memorandum of Incorporation'
          )
          .set('picScore', 'PI Score')
          .set('secretariatKey', 'Appointed company secretary')
          .set('secretaryKey', 'Absa group secretariat representative')
          .set('leeKey', 'Legal entity executive (LEE)')
          .set('leeAppointedDate', 'LEE appointed date')
          .set('foKey', 'Entity financial officer')
          .set('foAppointedDate', 'Entity financial officer appointed date')
          .set('publicOfficerKey', 'Public officer (income tax)')
          .set('publicOfficerAppointedDate', 'Public office appointment date')
          .set('auditorKey', 'Auditors')
          .set('auditorAppointedDate', 'Auditor appointment date')
          .set('auditPartnerKey', 'Audit Parner')
          .set('auditAppointedDate', 'Audit partner appointment date')
          .set('listedCode', 'Share code')
          .set('isinCode', 'ISIN code')
          .set('leiCode', 'LEI Number (Bloomberg code)')
          .set('reutersCode', 'Reuters code')
          .set('regulatorKyes', 'Regulators');
        break;
      default:
    }
    return m;
  }

  public getEntitiesByKeyField(fieldNameKey: string, optionsArray?: any[]) {
    let f = fieldNameKey;
    let s: EnumEntityType;
    switch (f) {
      case 'countryKey':
        s = EnumEntityType.Country;
        break;
      case 'parentCompanyKey':
        s = EnumEntityType.Company;
        break;
      case 'holdingParentCompanyKey':
        s = EnumEntityType.Company;
        break;
      case 'secretariatKey':
        s = EnumEntityType.Secretariat;
        break;
      case 'auditorKey':
        s = EnumEntityType.Auditor;
        break;
      case 'accountingClassKey':
        s = EnumEntityType.AccountingClass;
        break;
      case 'accountingClassTierKey':
        s = EnumEntityType.AccountingClassTier;
        break;
      case 'consolidatedKey':
        console.log('hello');

        s = EnumEntityType.Consolidated;
        break;
      case 'businessAreaKey':
        s = EnumEntityType.BusinessArea;
        break;
      case 'legalClassKey':
        s = EnumEntityType.LegalClass;
        break;
      case 'entityStatusKey':
        s = EnumEntityType.EntityStatus;
        break;
      case 'entityStatusTierKey':
        s = EnumEntityType.EntityStatusTier;
        break;
      case 'businessDivisionKey':
        s = EnumEntityType.BusinessDivision;
        break;
      case 'companyTypeKey':
        s = EnumEntityType.CompanyType;
        break;
      case 'secretaryKey':
        s = EnumEntityType.Secretariat;
        break;
      case 'leeKey':
        s = EnumEntityType.Individual;
        break;
      case 'foKey':
        s = EnumEntityType.Individual;
        break;
      case 'auditPartnerKey':
        s = EnumEntityType.Auditor;
        break;
      case 'publicOfficerKey':
        s = EnumEntityType.Individual;
        break;
    }

    return this.getEntities(s, optionsArray);
  }

  public getEntities(
    enumSource: EnumEntityType,
    optionsArray?: any[]
  ): Entities<Entity> {
    let v: Entities<Entity>;
    switch (enumSource) {
      case EnumEntityType.Company:
        return this.companies;
      case EnumEntityType.CompanyFromCountries:
        return this.getCompaniesFromCountries(optionsArray); //containing keys for countries
      case EnumEntityType.Country:
        return this.getCountries();
      case EnumEntityType.CountryWithTasks:
        return this.getCountriesWithTasks();
      case EnumEntityType.City:
        return this.cities;
      case EnumEntityType.Custom:
        let e = new Entities<Entity>(Entity);
        e.fromArray(optionsArray); //containing string[] of options
        return e;
      case EnumEntityType.Individual:
        return this.getIndividuals();
      case EnumEntityType.IndividualFromCountries:
        return this.getIndividualsFromCountries(optionsArray); //containing keys for the countries
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
      // case EnumEntityType.Trust:
      //   return this.trusts;
      case EnumEntityType.Auditor:
        return this.auditors;
      case EnumEntityType.Secretariat:
        return this.secretariats;
      // case EnumEntityType.Regulator:
      //   return this.regulators;
      case EnumEntityType.Regulation:
        return this.regulations;
      case EnumEntityType.DashboardsPlural:
        return this.dashboardsPlural;
      case EnumEntityType.Dashboard:
      case EnumEntityType.Search:
      case EnumEntityType.Template:
      case EnumEntityType.Setting:
        return this.dashboards;
      case EnumEntityType.BusinessArea:
        return this.businessAreas;
      case EnumEntityType.LegalClass:
        return this.legalClasses;
      case EnumEntityType.EntityStatus:
        return this.entityStatus;
      case EnumEntityType.EntityStatusTier:
        return this.entityStatusTiers;
      case EnumEntityType.BusinessDivision:
        return this.businessDivisions;
      case EnumEntityType.Consolidated:
        return this.consolidated;
      case EnumEntityType.AccountingClass:
        return this.accountingClasses;
      case EnumEntityType.AccountingClassTier:
        return this.accountingClassTiers;
      case EnumEntityType.CompanyType:
        return this.companyTypes;
      case EnumEntityType.Consolidated:
        return this.consolidated;
      default:
        return null;
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
    e2.value = true;
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

  // getAccountingTier() {
  //   return this.accountingTiers;
  // }

  // getRegulators() {
  //   return this.regulators;
  // }

  // getRegulations() {
  //   return this.regulations;
  // }

  // getTrusts(): Entities<EntityLegal> {
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
    let e = new Entities<EntityNatural>(EntityNatural);
    ps.forEach((value, key, map) => {
      if (countriesArray.indexOf(value.countryKey) > -1) {
        e.add(value);
      }
    });
    return e;
  }

  getCompaniesFromCountries(countriesArray: number[]) {
    console.log(countriesArray);
    let ps = this.getCompanies();
    let e = new Entities<EntityCompany>(EntityCompany);
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
