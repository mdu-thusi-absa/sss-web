import { EnumEntityType } from './data-entity-types';
import { Entity } from './data-entity-parent';
import * as J from './data-json';
import { Entities, AnyEntity } from './data-entities';
import { makeDocForName } from './doc-build';
import { DataService } from './data.service';
import { IfStmt } from '@angular/compiler';
// import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';

export class EntityTask extends Entity {
  who = '';
  when: Date;
  workFlowObject = {};
}

export class EntityType extends Entity {
  public jsonSource = '';
  public sourceType = 'json'; //or function for on the fly or from DB
  public storeName = ''; //name of a variable to store data in

  public entities: Entities<AnyEntity>;
  init() {
    if (!this.entities) this.entities = initEntities(this.key);

    if (this.sourceType == 'json') {
      this.init_loadJSON();
    }
  }

  init_loadJSON() {
    try {
      this.entities.fromJSON(J[this.jsonSource]);
    } catch (e) {
      console.log(
        'EntityType.init',
        'failed to load JSON, type:',
        this.key,
        this.jsonSource
      );
      throw e;
    }
  }
}

export class EntityCity extends Entity {
  public entityTypeKey = EnumEntityType.City;
  public countryKey = -1;
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['countryKey', 'Country'],
    ]);
    return h;
  }
}
export class EntityFile extends Entity {
  public entityTypeKey = EnumEntityType.File;
  fileName = '';
  dateTime: Date;
  public clone() {
    let t = new EntityFile(this.name);
    t = Object.assign(t, this);
    return t;
  }
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['fileName', 'File name'],
      ['description', 'Description'],
    ]);
    return h;
  }
}

export class EntityFileDownload extends EntityFile {
  public entityTypeKey = EnumEntityType.FileDownload;
  dataObject = {};
  click() {
    // console.log('Downloading...',this.name, this.dataObject);
    this.dataObject['currentDate'] = new Date().toISOString().slice(0, 10);
    makeDocForName(this.name, this.dataObject);
  }
}

export class EntityFileUpload extends EntityFile {
  public entityTypeKey = EnumEntityType.FileUpload;
  click() {
    console.log('Upload...');
  }
}

export class EntityTemplateInput extends Entity {
  heading: string = '';
}

export class EntityTemplate extends EntityFile {
  templateInputKeys: EntityTemplateInput[] = [];
  //headingsMap: Map<string, string>;
}

export class EntityMeeting extends Entity {
  public entityTypeKey = EnumEntityType.Meeting;
  start: Date;
  end: Date;
  where = '';
  notesDesc = '';
  attendances = new Entities<EntityAttendance>(EntityAttendance);
  files = new Entities<EntityFile>(EntityFile);
  public clone() {
    let t = new EntityFile(this.name);
    t = Object.assign(t, this);
    return t;
  }
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Subject'],
      ['where', 'Share certificate number'],
      ['start', 'Start'],
      ['end', 'End'],
      ['notesDesc', 'Notes'],
      ['fileKeys', 'Files'],
    ]);
    return h;
  }
}

export class EntityFunctional extends Entity {
  public entityTypeKey = EnumEntityType.Functional;
  public tasksCount = 0;
  public activeIs = true;
  public countryKey = -1;

  public clone() {
    let t = new EntityFunctional(this.name);
    t = Object.assign(t, this);
    return t;
  }

  // contactDetails: Entities<ContactEntity>;
  customFields: Entities<EntityCustomField>;
  entityFiles: Entities<EntityFile>;
}

export class EntityCustomField extends Entity {
  //name = title
  //type = entity type name
  public entityTypeKey = EnumEntityType.Custom;
  value: any; //literal or entityKey
  public clone() {
    let t = new EntityCustomField(this.name);
    t = Object.assign(t, this);
    return t;
  }
}

export class EntityLegal extends EntityFunctional {
  public entityTypeKey = EnumEntityType.Legal;
  countryKey: number = -1;
  //customFields: CustomFields;
  //entityFiles: FileEntities;

  public clone() {
    let t = new EntityLegal(this.name);
    t = Object.assign(t, this);
    return t;
  }

  get name() {
    return super.name;
  }

  set name(v: string) {
    super.name = v;
    if (v) {
      let name = v;
      if (v.length > 4)
        if (v.toUpperCase() == v) {
          name = Entity.capitalise(v);
          super.name = name;
        }
    }
  }
}

export class EntityCommitteeIndividuals extends EntityLegal{
  entityTypeKey = EnumEntityType.CommitteeIndividuals;
  companyKey = -1
  committeeTypeKey = -1
  individualKey = -1
}


export class EntityWorkflow extends Entity {
  public entityTypeKey = EnumEntityType.Workflow;
  functionName = '';
  parentKey = -1;
  conditionKey = '';
  conditionValue = -1;
  conditionOperator = '==';
  requireAuthIs = false;
  activeIs = false;
  countryKeys: number[] = [];
}

//todo: Appointments, ShareCertificates, Shareholders collections
export class EntityCompany extends EntityLegal {
  public entityTypeKey = EnumEntityType.Company;
  leeKey: number = -1;
  //countryKey: number = -1;
  auditorKey: number = -1;
  industryKey: number;
  fyeMonthKey: number;
  companyTypeKey: number = 0;
  secretaryKey: number = -1;
  legalClassKey: number = -1;
  secretariatKey: number = -1;
  businessAreaKey: number = -1;
  entityStatusKey: number = -1;
  auditPartnerKey: number = -1;
  consolidationKey: number = -1; //Math.floor(Math.random() * 2); ;
  publicOfficerKey: number = -1;
  accountingClassKey: number = -1;
  entityStatusTierKey: number = -1;
  businessDivisionKey: number = -1;
  financialOfficerKey: number = -1;
  anniversaryMonthKey: number;
  accountingClassTierKey: number = -1;
  // parentHoldingCompanyKey: number = -1;
  // clientHoldingCompanyKey: number = -1;
  // clientInterconnectedEntityKey: number = -1

  groupCompanyIs: boolean = true;
  foreignBranchIs: boolean = false;
  representativeOfficeIs: boolean = false;
  holdsCertificatesIs: boolean;
  connectedEntityIs: boolean;

  internalCode: string = '';
  leCode: string = '';
  registrationCode: string = '';
  incomeTax: string = '';
  vatCode: string = '';
  consolidateUnder: string = '';
  piScore: number = 0;
  listedCode: string = '';
  isinCode: string = '';
  leiCode: string = '';
  reutersCode: string = '';
  prevName: string;
  regulatorClientCode = '';

  parentHoldingWeight: number = 0;
  clientHoldingWeight: number = 0;

  connectedEntityDesc: string;
  objectiveRegisteredDesc: string = '';
  objectivePublishedDesc: string = '';

  publicOfficerAppointedDate: Date = null;
  incorporationDate: Date = null;
  leeAppointedDate: Date = null;
  foAppointedDate: Date = null;
  auditorAppointedDate: Date = null;
  auditAppointedDate: Date = null;
  businessStartDate: Date;
  currNameEffDate: Date;
  prevNameEffDate: Date;

  regulatorKeys: number[] = [0, 1];
  contactKeys: number[] = [];
  portfolioKeys: number[] = [1, 2];
  propertyKeys: number[];
  shareCertificateKeys: number[];
  appointmentKeys: number[];
  shareholderKeys: number[];

  postalAddress: EntityAddress;
  physicalAddress: EntityAddress;

  /*TODO: to add with source
  ['clientHoldingCompanyKey', 'Absa shareholding in entity - Shareholder'],
      ['clientInterconnectedEntityKey','Absa interconnected entity'],
      ['parentCompanyKey', 'Direct Parent/Ownership (Major Shareholder)'],
      ['parentHolding', 'Direct Parent - % ownership -'],
  */
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['description','Short description'],
      ['companyTypeKey', 'Company type'],
      ['internalCode', 'Internal code'],
      ['leCode', 'LE number'],
      ['registrationCode', 'Entity registration number'],
      ['countryKey', 'Country of Incorporation'],
      ['representativeOfficeIs', 'Representative Office'],
      ['foreignBranchIs', 'Foreign Branch'],
      ['businessAreaKey', 'Business area'],
      ['legalClassKey', 'Legal classification'],
      ['entityStatusKey', 'Entity status'],
      ['entityStatusTierKey', 'Entity status tiering'],
      ['incomeTax', 'Income tax number'],
      ['vatCode', 'Value added tax (VAT) number'],
      ['businessDivisionKey', 'Business division'],
      ['consolidationKey', 'Consolidated/non-consolidated'],
      ['consolidateUnder', 'Consolidate under (Bank/Group)'],
      ['accountingClassKey', 'Accounting classification'],
      ['accountingClassTierKey', 'Accounting classification tiering'],
      ['parentHoldingWeight', 'Direct parent shareholding in the entity – %'],
      ['clientHoldingWeight', 'Absa shareholding in the entity – %'],
      ['groupCompanyIs', 'Absa group company'],
      [
        'objectivePublishedDesc',
        'Business objective/Nature of business activities per Annual Financial Statements',
      ],
      [
        'objectiveRegisteredDesc',
        'Business objective/Nature of business activities per Memorandum of Incorporation',
      ],
      ['piScore', 'PI Score'],
      ['secretariatKey', 'Appointed company secretary'],
      ['secretaryKey', 'Absa group secretariat representative'],
      ['leeKey', 'Legal entity executive (LEE)'],
      ['leeAppointedDate', 'LEE appointed date'],
      ['financialOfficerKey', 'Entity financial officer'],
      ['foAppointedDate', 'Entity financial officer appointed date'],
      ['publicOfficerKey', 'Public officer (income tax)'],
      ['publicOfficerAppointedDate', 'Public officer appointment date'],
      ['auditorKey', 'Auditors'],
      ['auditorAppointedDate', 'Auditor appointment date'],
      ['auditPartnerKey', 'Audit Parner'],
      ['auditAppointedDate', 'Audit partner appointment date'],
      ['listedCode', 'Share code'],
      ['isinCode', 'ISIN code'],
      ['leiCode', 'LEI Number (Bloomberg)'],
      ['reutersCode', 'Reuters code'],
      ['industryKey', 'Industry'],
      ['keepingCertificatesIs', 'Certificates are kept'],
      ['connectedEntityIs', 'Interconnected within group'],
      ['connectedEntityName', 'Interconnected entity name'],
      ['currNameEffDate', 'Current name effective date'],
      ['prevName', 'Previous name'],
      ['prevNameEffDate', 'Previous name effective date'],
      ['regulatorClientCode', 'Regulator client code'],
      ['incorporationDate', 'Incorporation date'],
      ['anniversaryMonthKey', 'Anniversary  month'],
      ['businessStartDate', 'Business start date'],
      ['fyeMonthKey', 'Financial year end month'],
      ['postalAddress', 'Postal address'],
      ['physicalAddress', 'Physical address'],
      ['suffix', 'Suffix'],
      ['regulatorKeys', 'Regulators'],
      ['portfolioKeys', 'Portfolios'],
      ['propertyKeys', 'Properties'],
      ['appointmentKeys', 'Appointments'],
      ['shareholdingKeys', 'Shareholding'],
      ['shareCertificateKeys', 'Allotments'],
    ]);
    return h;
  }
}

export class EntityContact extends Entity {
  public entityTypeKey = EnumEntityType.Contact;
  contactTypeKey = -1; //entity, such as Company Primary Contact...
  key: 0;
  individualKey = -1;
  onLeaveIs = false;
  comingBackDate = null;
  contactPreferenceKey = -1;
  email = '';
  cellphone = '';
  landline = '';
  noteDesc = '';
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['individualKey', 'Individual'],
      ['onLeaveIs', 'On leave?'],
      ['comingBackDate', 'Coming back date'],
      ['contactPreferenceKey', 'Contact preference'],
      ['email', 'Email'],
      ['landline', 'Landline'],
      ['notesDesc', 'Notes'],
    ]);
    return h;
  }
}

export class EntityProperty extends EntityFunctional {
  public entityTypeKey = EnumEntityType.Property;
  physicalAddressKey = -1;
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['physicalAddressKey', 'Address'],
    ]);
    return h;
  }
}

export class EntityAppointment extends Entity {
  public entityTypeKey = EnumEntityType.Appointment;
  companyKey = -1;
  individualKey = -1;
  startDate: Date = null;
  endDate: Date = null;
  capacityKey = -1;
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['individualKey', 'Individual'],
      ['capacityKey', 'Designation'],
      ['startDate', 'Appointment Start'],
      ['endDate', 'Appointment End'],
    ]);
    return h;
  }
}

//let company = new Company('a');
export class EntityNatural extends EntityFunctional {
  public entityTypeKey = EnumEntityType.Natural;
  public email: string;
  public cellNumber: string;
  public birthOfDate: Date;
  public deathOfDate: Date;
  private surname_ = '';
  private firstName_ = '';
  constructor(surname: string, firstName: string, suffix: string) {
    super(surname + ', ' + firstName);
    super.name = surname + ', ' + firstName;
    this.surname_ = surname;
    this.firstName_ = firstName;
    super.suffix = suffix;
  }

  public clone() {
    let t = new EntityNatural(this.surname, this.firstName, this.suffix);
    t = Object.assign(t, this);
    return t;
  }
  // public set surname(v: string){

  // }
  get fullName(): string {
    let s =
      this.surname_ +
      ', ' +
      this.firstName_ +
      (this.suffix ? ' - ' + this.suffix : '');
    return s;
  }

  set surname(v: string) {
    this.surname_ = Entity.capitalise(v);
    super.name = this.surname_ + ', ' + this.firstName_;
  }

  get surname(): string {
    return this.surname_;
  }

  set firstName(v: string) {
    this.firstName_ = Entity.capitalise(v);
    super.name = this.surname_ + ', ' + this.firstName_;
  }

  get firstName(): string {
    return this.firstName_;
  }

  get name(): string {
    if (!super.name && (this.surname_ || this.firstName_))
      super.name = this.surname_ + ', ' + this.firstName_;
    return super.name;
  }

  set name(v: string) {
    super.name = v;
  }
}

export class EntityAttendance extends Entity {
  individualKey: number;
  meetingKey: number;
  attendedIs: boolean;
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['attendedIs', 'Attended?'],
      ['meetingKey', 'Meeting details'],
    ]);
    return h;
  }
}

export class EntityIndividual extends EntityNatural {
  entityTypeKey = EnumEntityType.Individual;
  secretaryIs = false;
  audutorIs = false;
  internalEmployeeIs = false;
  public clone() {
    let t = new EntityIndividual(this.surname, this.firstName, this.suffix);
    t = Object.assign(t, this);
    return t;
  }
  preferredFormalName: string;
  preferredInformalName: string;
  currNameEffectiveDate: Date;
  prevNameEffectiveDate: Date;
  prevSurname: string;
  prevFirstName: string;
  entityGroups: Entities<EntityPortfolio>;
  entityCompanies: Entities<EntityCompany>;
  IDCode: string;
  SAPassportCode: string;
  incomeTaxCode: string;
  vatCode: string;
  countryKey = -1;
  passportCode: string;
  employeeCode: string;
  position: string;
  currentEmployerKey = -1; //company
  title = '';
  addressKey = -1;
  filesKeys: number[] = [];

  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['fullName', 'Full name'],
      ['title', 'Title'],
      ['countryKey', 'Nationality'],
      ['IDCode', 'ID code'],
      ['passportCode', 'Passport code'],
      ['employeeCode', 'Employee code'],
      ['position', 'Position'],
      ['occupation', 'Occupation'],
      ['addressKey', 'Address'],
      ['companyKey', 'Employer'],
      ['fileKeys', 'Files'],
      ['capacityKey', 'Designation'],
      ['startDate', 'Appointment Start'],
      ['endDate', 'Appointment End'],
    ]);
    return h;
  }
}

export class EntityShareholding extends Entity {
  public entityTypeKey = EnumEntityType.Shareholding;
  shareTypeKey = -1;
  individualKey = -1;
  companyKey = -1;
  shareCount = 0;
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['companyKey', 'Company'],
      ['individualKey', 'Individual'],
      ['shareCount', 'Number of shares'],
    ]);
    return h;
  }
}

export class EntityPortfolio extends EntityFunctional {
  public entityTypeKey = EnumEntityType.Portfolio;
  public clone() {
    let t = new EntityPortfolio(this.name);
    t = Object.assign(t, this);
    return t;
  }
  companies: Entities<EntityCompany>;
  usersManagers: Entities<EntityUser>;
  userAdmins: Entities<EntityUser>;
}

export class EntityTrust extends EntityLegal {
  public entityTypeKey = EnumEntityType.Trust;
  public clone() {
    let t = new EntityTrust(this.name);
    t = Object.assign(t, this);
    return t;
  }
  //todo: trusteesAppointments: Entities<User>;
}

export class EntityTaskType extends Entity {
  entityTypeKey = EnumEntityType.TaskType;
  suffix = '';
  countryKey = -1;
  requireAuthIs = true;
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['countryKey', 'Country'],
      ['requireAuthIs', 'Is authorisation required'],
    ]);
    return h;
  }
}

export class EntityRegulator extends EntityLegal {
  public entityTypeKey = EnumEntityType.Regulator;
  public clone() {
    let t = new EntityRegulator(this.name);
    t = Object.assign(t, this);
    return t;
  }
  countryKey = -1;
  regulatorTypeKeys: number[] = [];
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['countryKey', 'Country'],
      ['regulatorTypeKeys', 'Regulator type'],
    ]);
    return h;
  }
}

export class EntityAuditor extends EntityLegal {
  public entityTypeKey = EnumEntityType.Auditor;
  public clone() {
    let t = new EntityAuditor(this.name);
    t = Object.assign(t, this);
    return t;
  }
  professionalCode: string;
  individualKeys = -1;
  //todo: partners: Entities<NaturalEntity>
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['prefessionalCode', 'Professional number'],
      ['individualKeys', 'Partners'],
    ]);
    return h;
  }
}

export class EntitySecretariat extends EntityLegal {
  public entityTypeKey = EnumEntityType.Secretariat;
  public clone() {
    let t = new EntitySecretariat(this.name);
    t = Object.assign(t, this);
    return t;
  }
  // professionalNumber: string;
  // partnerKey = -1;
  //todo: partners: Entities<NaturalEntity>
}

export class EntityRegulation extends EntityFunctional {
  public entityTypeKey = EnumEntityType.Regulation;
  public clone() {
    let t = new EntityRegulation(this.name);
    t = Object.assign(t, this);
    return t;
  }
  countryKey = -1;
  regulatorKey = -1;
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['countryKey', 'Country'],
      ['regulatorKey', 'Regulator'],
    ]);
    return h;
  }
  // regulatorEntities: Entities<EntityRegulator>;
}

export class EntityUser extends EntityNatural {
  public entityTypeKey = EnumEntityType.User;
  startDate: Date;
  endDate: Date;
  employeeNumber: string;
  position: string;
  accessKey = -1;
  enabledIs = true;
  constructor(surname: string, firstName: string, suffix: string) {
    super(surname, firstName, suffix);
  }
  public clone() {
    let t = new EntityUser(this.surname, this.firstName, this.suffix);
    t = Object.assign(t, this);
    return t;
  }
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['fullName', 'Full name'],
      ['countryKey', 'Country'],
      ['accessKey', 'User access'],
      ['enabledIs', 'Active'],
    ]);
    return h;
  }
}

export class EntityShareCertificate extends Entity {
  public entityTypeKey = EnumEntityType.ShareCertificate;
  keptIs = true;
  certificateCode = '';
  issuedDate: Date = null;
  shareholderKey = 0;
  shareholderType = 9; // company or individual
  holdingCount = 0; //number of shares
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['keptIs', 'Original share certificates kept'],
      ['certificateCode', 'Share certificate number'],
      ['shareholderKey', 'Shareholder name'],
      ['holdingCount', 'Number of shares'],
    ]);
    return h;
  }
}

export class EntityAddress extends Entity {
  _cities: Entities<EntityCity>;
  _cityKey = -1;
  _countryKey = -1
  _text = '';
  _city: EntityCity;
  _country: Entity;
  constructor(public data: DataService) {
    super('address');
  }
  set cityKey(v: number){
    this._cityKey = v
    this._countryKey = this.city.countryKey
  }

  set countryKey(v:number){
    this._countryKey = v
    this._cities = this.data.getCitiesForCountry(v);
    this._cityKey = this._cities.firstKey
  }
  get cities(){
    return this._cities
  }
  get text(){
    return this._text
  }
  set text(v: string){
    this._text = v.trim()
  }
  toString() {
    let r = ''
    if (this._countryKey>-1 && this._cityKey>-1)
      r = this._countryName + (this._cityName?', ' + this._cityName:'') + (this._text?', ' + this._text:'')
    else 
      r = this._text;
    return r
  }

  private get _cityName() {
    if (this.city) return this.city.name;
    return '';
  }
  private get _countryName() {
    if (this.country) return this.country.name;
    return '';
  }

  get countryKey() {
    if (this.city) return this.city.countryKey;
    else return -1;
    // return this.data.getDefault('countryKey')
  }
  get cityKey(){
    return this._cityKey
  }
  

  private get country(): Entity {
    return this.data
      .getEntities(EnumEntityType.Country)
      .get(this.countryKey) as Entity;
  }
  private get city(): EntityCity {
    if (this._cityKey<0) return null;
    this._city = this.data
      .getEntities(EnumEntityType.City)
      .get(this._cityKey) as EntityCity;
    return this._city;
  }
}

//#getInitEntities#//
function initEntities(entityTypeKey: EnumEntityType){ switch (entityTypeKey){
	case EnumEntityType.AccountingClass: return new Entities<Entity>(Entity); break;
	case EnumEntityType.AccountingClassTier: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Appointment: return new Entities<EntityAppointment>(EntityAppointment); break;
	case EnumEntityType.Auditor: return new Entities<EntityAuditor>(EntityAuditor); break;
	case EnumEntityType.BusinessArea: return new Entities<Entity>(Entity); break;
	case EnumEntityType.BusinessDivision: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Capacity: return new Entities<Entity>(Entity); break;
	case EnumEntityType.City: return new Entities<EntityCity>(EntityCity); break;
	case EnumEntityType.Company: return new Entities<EntityCompany>(EntityCompany); break;
	case EnumEntityType.CompaniesForCountry: return new Entities<EntityCompany>(EntityCompany); break;
	case EnumEntityType.CompanyType: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Consolidation: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Contact: return new Entities<EntityContact>(EntityContact); break;
	case EnumEntityType.Country: return new Entities<Entity>(Entity); break;
	case EnumEntityType.CountryWithTasks: return new Entities<Entity>(Entity); break;
	case EnumEntityType.CountryForTask: return new Entities<Entity>(Entity); break;
	case EnumEntityType.CountryForName: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Custom: return new Entities<EntityCustomField>(EntityCustomField); break;
	case EnumEntityType.Dashboard: return new Entities<Entity>(Entity); break;
	case EnumEntityType.EntityStatus: return new Entities<Entity>(Entity); break;
	case EnumEntityType.EntityStatusTier: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Individual: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.IndividualForCountries: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.IndividualInternalEmployeeStatus: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.IndividualForCompanyForCommitteType: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.IndividualNotForCompanyForCommitteType: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.Industry: return new Entities<Entity>(Entity); break;
	case EnumEntityType.LegalClass: return new Entities<EntityLegal>(EntityLegal); break;
	case EnumEntityType.Month: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Portfolio: return new Entities<EntityPortfolio>(EntityPortfolio); break;
	case EnumEntityType.Property: return new Entities<EntityProperty>(EntityProperty); break;
	case EnumEntityType.Regulation: return new Entities<EntityRegulation>(EntityRegulation); break;
	case EnumEntityType.Regulator: return new Entities<EntityRegulator>(EntityRegulator); break;
	case EnumEntityType.Search: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Secretariat: return new Entities<EntitySecretariat>(EntitySecretariat); break;
	case EnumEntityType.Setting: return new Entities<Entity>(Entity); break;
	case EnumEntityType.ShareCertificate: return new Entities<EntityShareCertificate>(EntityShareCertificate); break;
	case EnumEntityType.Shareholding: return new Entities<EntityShareholding>(EntityShareholding); break;
	case EnumEntityType.Template: return new Entities<EntityTemplate>(EntityTemplate); break;
	case EnumEntityType.Trust: return new Entities<EntityTrust>(EntityTrust); break;
	case EnumEntityType.User: return new Entities<EntityUser>(EntityUser); break;
	case EnumEntityType.Entity: return new Entities<Entity>(Entity); break;
	case EnumEntityType.File: return new Entities<EntityFile>(EntityFile); break;
	case EnumEntityType.Meeting: return new Entities<EntityMeeting>(EntityMeeting); break;
	case EnumEntityType.Functional: return new Entities<EntityFunctional>(EntityFunctional); break;
	case EnumEntityType.Legal: return new Entities<EntityLegal>(EntityLegal); break;
	case EnumEntityType.Natural: return new Entities<EntityNatural>(EntityNatural); break;
	case EnumEntityType.AnniversaryMonth: return new Entities<Entity>(Entity); break;
	case EnumEntityType.ParentCompany: return new Entities<EntityCompany>(EntityCompany); break;
	case EnumEntityType.EntityType: return new Entities<EntityType>(EntityType); break;
	case EnumEntityType.HoldingParentCompany: return new Entities<EntityCompany>(EntityCompany); break;
	case EnumEntityType.Secretary: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.Lee: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.FinancialOfficer: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.PublicOfficer: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.AuditPartner: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.FyeMonth: return new Entities<Entity>(Entity); break;
	case EnumEntityType.TasksForCountry: return new Entities<EntityTask>(EntityTask); break;
	case EnumEntityType.TaskType: return new Entities<EntityTaskType>(EntityTaskType); break;
	case EnumEntityType.TasksForEntityType: return new Entities<EntityTask>(EntityTask); break;
	case EnumEntityType.TasksForEntityTypeForCountry: return new Entities<EntityTask>(EntityTask); break;
	case EnumEntityType.YesNo: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Period: return new Entities<Entity>(Entity); break;
	case EnumEntityType.ContactPreference: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Report: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Attendance: return new Entities<EntityAttendance>(EntityAttendance); break;
	case EnumEntityType.TaskStatus: return new Entities<Entity>(Entity); break;
	case EnumEntityType.TemplateInput: return new Entities<EntityTemplateInput>(EntityTemplateInput); break;
	case EnumEntityType.TaskTypesForCountry: return new Entities<EntityTaskType>(EntityTaskType); break;
	case EnumEntityType.Task: return new Entities<EntityTemplate>(EntityTemplate); break;
	case EnumEntityType.DestinationType: return new Entities<Entity>(Entity); break;
	case EnumEntityType.RegulatorType: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Workflow: return new Entities<EntityWorkflow>(EntityWorkflow); break;
	case EnumEntityType.WorkflowForParent: return new Entities<EntityWorkflow>(EntityWorkflow); break;
	case EnumEntityType.DirectorType: return new Entities<Entity>(Entity); break;
	case EnumEntityType.AppointmentAction: return new Entities<Entity>(Entity); break;
	case EnumEntityType.FileDownload: return new Entities<EntityFileDownload>(EntityFileDownload); break;
	case EnumEntityType.FileUpload: return new Entities<EntityFileUpload>(EntityFileUpload); break;
	case EnumEntityType.CommitteeType: return new Entities<EntityLegal>(EntityLegal); break;
	case EnumEntityType.CommitteeTypeForCountry: return new Entities<EntityLegal>(EntityLegal); break;
	case EnumEntityType.CommitteeIndividuals: return new Entities<EntityCommitteeIndividuals>(EntityCommitteeIndividuals); break;}}
