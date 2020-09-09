import { EnumEntityType } from './data-entity-types';
import * as J from './data-json';

export class Entity {
  public key: number = 0; //corresponds to the database key, retrieved with JSON from the API
  public entityTypeKey = EnumEntityType.Entity;
  public description = '';
  public activeIs = false;
  public suffix = '';
  protected headingsMap_: Map<string,string>
  //constructor(public name: string, public tasksCount: number, public suffix: string, public country: string, public isActive: boolean){}
  constructor(public name: string) {
    if (!this.headingsMap_) this.headingsMap_ = this.getHeadingsMap()
  }

  get headingsMap(){
    return this.headingsMap_
  }

  get allName() {
    if (this.suffix) {
      return this.name + ' - ' + this.suffix;
    } else return this.name;
  }

  getHeadingsMap():Map<string,string> {
    let h = new Map([
      ['name', 'Name'],
      ['description', 'Description'],
    ]);
    return h;
  }

  inFilter(filterText: string, onlyActive: boolean): boolean {
    if (onlyActive && !this.activeIs) return false;
    else if (filterText.length == 0) return true;
    else {
      let f = filterText.toLowerCase();
      let inName = this.name.toLowerCase().indexOf(f) > -1;
      let inDescription = this.description.toLowerCase().indexOf(f) > -1;
      let inSuffix = this.suffix.toLowerCase().indexOf(f) > -1;
      return inName || inDescription || inSuffix;
    }
  }

  set(propertyName: string, value: any) {
    this[propertyName] = value;
    return this;
  }

  static compare(v: Entity, w: Entity): number {
    let r = 0;
    if (v.name > w.name) r = 1;
    else if (v.name < w.name) r = -1;
    return r;
  }

  public copy() {
    let t = Object.prototype.constructor(this);
    t = Object.assign(t, this);
    return t;
  }

  static capitalise(text: string): string {
    if (!text) return text;
    let words = text.split(' ');
    if (words.length > 1) {
      let s = '';
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word)
          s = s + ' ' + word[0].toUpperCase() + word.substr(1).toLowerCase();
      }
      return s.trim();
    } else {
      return text[0].toUpperCase() + text.substr(1).toLowerCase();
    }
  }

  static sentanceCase(text: string) {
    if (!text) return text;
    let words = text.split(' ');
    if (words.length > 1) {
      let s = '';
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word)
          if (word == word.toUpperCase()) s = s + ' ' + word;
          else {
            if (i == 0) {
              s =
                s + ' ' + word[0].toUpperCase() + word.substr(1).toLowerCase();
            } else if (words[i - 1][words[i - 1].length - 1] === ':') {
              s =
                s + ' ' + word[0].toUpperCase() + word.substr(1).toLowerCase();
            } else {
              s = s + ' ' + word.toLowerCase();
            }
          }
      }
      return s.trim();
    } else {
      return text[0].toUpperCase() + text.substr(1).toLowerCase();
    }
  }
}

export class EntityTask extends Entity {
  who = '';
  when: Date;
  workFlowObject = {};
}

export class EntityType extends Entity {
  public jsonSource = '';
  public sourceType = 'json'; //or function for on the fly or from DB
  public storeName = ''; //name of a variable to store data in
  // public headingsSource = '';
  // public headingsMap: Map<string, string>; // map of fieldName, heading/label
  public entities: Entities<AnyEntity>;
  init() {
    if (!this.entities) this.entities = getInitEntities(this.key)
    
    if (this.sourceType == 'json') {
      this.init_loadJSON()    
    }
  }

  init_loadJSON(){
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
  //customFields: CustomFields;
  //entityFiles: FileEntities;

  public clone() {
    let t = new EntityLegal(this.name);
    t = Object.assign(t, this);
    return t;
  }
  private name_: string;

  get name() {
    return this.name_;
  }

  set name(v: string) {
    if (v) {
      this.name_ = v;
      if (v.length > 4)
        if (v.toUpperCase() == v) {
          this.name_ = Entity.capitalise(v);
          super.name = this.name_;
        }
    }
  }
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
}

//todo: Appointments, ShareCertificates, Shareholders collections
export class EntityCompany extends EntityLegal {
  public entityTypeKey = EnumEntityType.Company;
  companyTypeKey: number = 0;
  internalCode: string = '';
  leCode: string = '';
  registrationCode: string = '';
  countryKey: number = -1;
  RepresentativeOfficeIs: boolean = false;
  ForeignBranchIs: boolean = false;
  incorporationDate: Date = null;
  businessAreaKey: number = -1;
  legalClassKey: number = -1;
  entityStatusKey: number = -1;
  entityStatusTierKey: number = -1;
  incomeTax: string = '';
  vatCode: string = '';
  businessDivisionKey: number = -1;
  consolidationKey: number = -1; //Math.floor(Math.random() * 2); ;
  consolidateUnder: string = '';
  accountingClassKey: number = -1;
  accountingClassTierKey: number = -1;
  parentCompanyKey: number = -1;
  parentHoldingWeight: number = 0;
  holdingParentCompanyKey: number = -1;
  holdingHoldingWeight: number = 0;
  objectivePublishedDesc: string = '';
  objectiveRegisteredDesc: string = '';
  picScore: string = '';
  secretariatKey: number = -1;
  secretaryKey: number = -1;
  leeKey: number = -1;
  leeAppointedDate: Date = null;
  financialOfficerKey: number = -1;
  foAppointedDate: Date = null;
  publicOfficerKey: number = -1;
  publicOfficerAppointedDate: Date = null;
  auditorKey: number = -1;
  auditorAppointedDate: Date = null;
  auditPartnerKey: number = -1;
  auditAppointedDate: Date = null;
  listedCode: string = '';
  isinCode: string = '';
  leiCode: string = '';
  reutersCode: string = '';
  industryKey: number;
  anniversaryMonthKey: number;
  businessStartDate: Date;
  fyeMonthKey: number;
  holdsCertificatesIs: boolean;
  connectedEntityIs: boolean;
  connectedEntityDesc: string;
  currNameEffDate: Date;
  prevName: string;
  prevNameEffDate: Date;
  regulatoryClientCode = '';

  regulatorKeys: number[] = [0, 1];
  contactKeys: number[] = [];
  portfolioKeys: number[] = [1, 2];
  propertyKeys: number[];
  shareCertificateKeys: number[];
  appointmentKeys: number[];
  shareholderKeys: number[];
  postalAddressKey: number = 0;
  physicalAddressKey: number = 0;

  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['name', 'Name'],
      ['companyTypeKey', 'Entity type'],
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
      ['parentCompanyKey', 'Direct Parent/Ownership (Major Shareholder)'],
      ['parentHolding', 'Direct Parent - % ownership -'],
      ['holdingParentCompanyKey', 'Absa shareholding in entity - Shareholder'],
      ['holdingHolding', 'Absa shareholding in the entity – %'],
      [
        'objectivePublishedDesc',
        'Business objective/Nature of business activities per Annual Financial Statements',
      ],
      [
        'objectiveRegisteredDesc',
        'Business objective/Nature of business activities per Memorandum of Incorporation',
      ],
      ['picScore', 'PI Score'],
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
      ['regulatoryClientCode', 'Regulator client code'],
      ['incorporationDate', 'Incorporation date'],
      ['anniversaryMonthKey', 'Anniversary  month'],
      ['businessStartDate', 'Business start date'],
      ['fyeMonthKey', 'Financial year end month'],
      ['postalAddressKey', 'Postal address'],
      ['physicalAddressKey', 'Physical address'],
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

export class EntityPostalAddress extends Entity {
  public entityTypeKey = EnumEntityType.PostalAddress;
  addressTypeKey: number = 0;
  countryKey: number = -1;
  cityKey: number = -1;
  textDesc = '';
  getHeadingsMap(): Map<string, string> {
    let h = new Map([
      ['addressTypeKey', 'Type'],
      ['countryKey', 'Country'],
      ['cityKey', 'cityKey'],
      ['textDesc', 'Text'],
    ]);
    return h;
  }
}

export class EntityPhysicalAddress extends Entity {
  public entityTypeKey = EnumEntityType.PhysicalAddress;
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
  constructor(
    public surname: string,
    public firstName: string,
    public suffix: string
  ) {
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

export type AnyEntity =
  | Entity
  | EntityCity
  | EntityFunctional
  | EntityUser
  | EntityLegal
  | EntityNatural
  | EntityCompany
  | EntityContact
  | EntityPostalAddress
  | EntityPhysicalAddress
  | EntityType
  | EntityMeeting
  | EntityShareCertificate
  | EntityWorkflow;

export class Entities<T extends AnyEntity> extends Map<number, T> {
  currentKey_ = -1;
  currentValue_: T = null;
  staticIs = true; //should not allow changes, otherwise redirect to DB
  private inFilterMap = new Map();
  private filterText_ = '';
  private onlyActive_ = true;
  private countInFilter_ = 0;
  private version_ = 0;
  private firstKey_ = -1;
  private lastKey_ = -1;
  private firstKeyInFilter_ = -1;
  private lastKeyInFilter_ = -1;

  constructor(private EntityType) {
    super();
  }

  select(fieldName: string, equalTo: any): Entities<T> {
    let ets = new Entities<T>(this.EntityType);
    this.forEach((value, key, map) => {
      if (value[fieldName] === equalTo) {
        let a = this.createEntity();
        a = Object.assign(a, value);
        ets.add(a);
      }
    });
    return ets;
  }

  get firstKey() {
    return this.firstKey_;
  }

  get lastKey() {
    return this.lastKey_;
  }

  get firstKeyInFilter() {
    return this.firstKeyInFilter_ == -1
      ? this.firstKey
      : this.firstKeyInFilter_;
  }

  get lastKeyInFilter() {
    return this.lastKeyInFilter_ == -1 ? this.lastKey : this.lastKeyInFilter_;
  }

  get version() {
    return this.version_;
  }
  //increment version
  versionUp() {
    this.version_ += 1;
  }

  getClearCopy() {
    let e = new Entities<T>(this.EntityType);
    return e;
  }

  clone() {
    let e = new Entities<T>(this.EntityType);
    this.forEach((value, key, map) => {
      e.add(value);
    });
    return e;
  }

  get countInFilter() {
    if (this.filterText_ == '') return this.size;
    else {
      return this.countInFilter_;
    }
  }

  filter(filterText: string, onlyActive: boolean): Entities<T> {
    this.filterText_ = filterText;
    this.onlyActive_ = onlyActive;
    let ets = new Entities<T>(this.EntityType);
    this.inFilterMap = new Map();
    this.countInFilter_ = 0;
    this.forEach((value, key, map) => {
      if (value.inFilter(this.filterText_, this.onlyActive_)) {
        let a = this.createEntity();
        a = Object.assign(a, value);
        ets.add(a);
        this.inFilterMap.set(key, true);
        this.countInFilter_ += 1;
        if (this.firstKeyInFilter_ == -1) this.firstKeyInFilter_ = key;
        this.lastKeyInFilter_ = key;
      } else {
        this.inFilterMap.set(key, false);
      }
    });
    return ets;
  }

  inFilter(key: number, viewAll: boolean) {
    if (this.filterText_ == '') {
      if (viewAll) return true;
      else {
        return key < 10; //load only first 10 entities into a list, until required
      }
    } else {
      return this.inFilterMap.get(key);
    }
  }

  json() {
    return this.all_keys.toString();
    //return JSON.stringify(this);
  }

  createEntity() {
    return new this.EntityType();
  }

  fromJSON(json: string, maxToLoad?: number, setType?: string) {
    try {
      let array = JSON.parse(json);
      if (setType) this.fromArray(array, maxToLoad, setType);
      else this.fromArray(array, maxToLoad);
    } catch (e) {
      console.log('fromJSON', this.EntityType, 'did not load');
      throw e;
    }
  }

  fromArray(data: any[], maxToLoad: number = -1, setType?: string) {
    let array = data;
    let L = array.length;
    if (maxToLoad > -1) {
      L = maxToLoad > L ? L : maxToLoad;
    }
    for (let i = 0; i < L; i++) {
      let a = this.createEntity();
      a = Object.assign(a, array[i]);
      if (setType) a.type = setType;
      this.add(a);
    }
  }

  get(key: number) {
    return super.get(key);
  }

  fromEntities(type: string, entities: Entities<T>) {
    entities.forEach((value, key, map) => {
      let a = entities.createEntity();
      a = Object.assign(a, value);
      a.type = type;
      this.add(a);
    });
  }

  get currentKey() {
    if (this.size > 0 && this.currentKey_ < 0) {
      this.currentKey_ = this.all_keys[0];
    }
    return this.currentKey_;
  }

  set currentKey(v: number) {
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue() {
    if (this.currentKey_ == -1 && this.size > 0) {
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  add(value: T): Entities<T> {
    let key = value.key;
    if (this.firstKey_ == -1) this.firstKey_ = value.key;
    this.lastKey_ = key;
    super.set(key, value);
    return this;
  }

  edit(key: number, value: T): Entities<T> {
    super.set(key, value);
    return this;
  }

  del(key: number): Entities<T> {
    super.delete(key);
    return this;
  }

  get size(): number {
    return super.size;
  }

  get all_keys() {
    return [...super.keys()];
  }

  get all_values() {
    return [...super.values()];
  }

  get all_entries() {
    return [...super.entries()];
  }

  public sort() {
    let v = this.all_values;
    v.sort(Entity.compare);
    super.clear();
    for (let i = 0; i < v.length; i++) {
      this.add(v[i]);
    }
    return this;
  }

  slice(fromKey: number, toKey: number): Entities<AnyEntity> {
    let ks = this.all_keys;
    let d = this.getClearCopy();
    for (let i = fromKey; i <= toKey; i++) {
      let v = this.get(i);
      d.add(v);
    }
    return d;
  }
}

//#getInitEntities#//
function getInitEntities(entityTypeKey: EnumEntityType){ switch (entityTypeKey){
	case EnumEntityType.AccountingClass: return new Entities<Entity>(Entity); break;
	case EnumEntityType.AccountingClassTier: return new Entities<Entity>(Entity); break;
	case EnumEntityType.PostalAddress: return new Entities<EntityPostalAddress>(EntityPostalAddress); break;
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
	case EnumEntityType.Custom: return new Entities<EntityCustomField>(EntityCustomField); break;
	case EnumEntityType.Dashboard: return new Entities<Entity>(Entity); break;
	case EnumEntityType.EntityStatus: return new Entities<Entity>(Entity); break;
	case EnumEntityType.EntityStatusTier: return new Entities<Entity>(Entity); break;
	case EnumEntityType.Individual: return new Entities<EntityIndividual>(EntityIndividual); break;
	case EnumEntityType.IndividualForCountries: return new Entities<EntityIndividual>(EntityIndividual); break;
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
	case EnumEntityType.CoR21_1: return new Entities<Entity>(Entity); break;
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
	case EnumEntityType.PhysicalAddress: return new Entities<EntityPhysicalAddress>(EntityPhysicalAddress); break;
	case EnumEntityType.Workflow: return new Entities<EntityWorkflow>(EntityWorkflow); break;
	case EnumEntityType.WorkflowForParent: return new Entities<EntityWorkflow>(EntityWorkflow); break;}}
