import { Capability, ExpectedConditions } from 'protractor';
import { MapType } from '@angular/compiler';
import { EntityMessageComponent } from '../panels/entity-message/entity-message.component';
import { maxHeaderSize } from 'http';
// import { LoginOptions } from 'angular-oauth2-oidc';
// import { etLocale } from 'ngx-bootstrap/chronos';
// import { data } from 'jquery';
import { DataService } from './data.service';
import { EnumEntityType } from './data-entityTypes';
import * as H from './data-headings';
import * as J from './data-json';
// import { throwError } from 'rxjs';
// import { join } from 'path';

export class Entity {
  public key: number = 0; //corresponds to the database key, retrieved with JSON from the API
  public type = EnumEntityType.Entity;
  public description = '';
  public isActive = false;
  public suffix = '';
  //constructor(public name: string, public tasksCount: number, public suffix: string, public country: string, public isActive: boolean){}
  constructor(public name: string) {}

  get allName() {
    if (this.suffix){
      return this.name + ' - ' + this.suffix;
    } else return this.name;
  }

  inFilter(filterText: string, onlyActive: boolean): boolean {
    if (onlyActive && !this.isActive) return false;
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

class Test {
  name = 'test Class';
}

class More<T extends AnyEntity> {
  t: T;
  constructor(private EntityType) {
    let t = new EntityType();
  }
}

// let t = new Test()
// let s = Object.create(t)
// Object.prototype.constructor()
// console.log(s);

// class Extra{
//   t = window['Test']
//   constructor(){
//     //console.log(t);
//   }
// }

// let e = new Extra()
// console.log(e);

// let t = new Test()
// let s = eval('new Test()')
// console.log(t,s);

// let c = new Entity('entity name')
// let a = new More<Entity>(Entity);
// let b = eval('new More<Entity>(Entity)')
// console.log(a,b);

// class BeeKeeper {
//   hasMask = true;
// }

// class ZooKeeper {
//   nametag = 'Joe';
// }

// class Animal {
//   numLegs: number;
// }

// class Bee extends Animal {
//   keeper = new BeeKeeper();
// }

// class Lion extends Animal {
//   keeper = new ZooKeeper();
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c();
// }

// let c = eval('Lion')
// console.log(createInstance(Lion).keeper.nametag);
// console.log(createInstance(Bee).keeper.hasMask);

export class EntityType extends Entity {
  public jsonSource = '';
  public sourceType = 'json'; //or function for on the fly or from DB
  public storeName = ''; //name of a variable to store data in
  public headingsSource = '';
  public headingsMap: Map<string, string>; // map of fieldName, heading/label
  public entities: Entities<AnyEntity>;
  init() {
    switch (this.key) {
      case EnumEntityType.Address:
        this.entities = new Entities<EntityAddress>(EntityAddress);
        break;
      case EnumEntityType.Address:
        this.entities = new Entities<EntityAppointment>(EntityAppointment);
        break;
      case EnumEntityType.Auditor:
        this.entities = new Entities<EntityAuditor>(EntityAuditor);
        break;
      case EnumEntityType.Company:
        this.entities = new Entities<EntityCompany>(EntityCompany);
        break;
      case EnumEntityType.CompaniesForCountry:
        this.entities = new Entities<EntityCompany>(EntityCompany);
        break;
      case EnumEntityType.Contact:
        this.entities = new Entities<EntityContact>(EntityContact);
        break;
      case EnumEntityType.Custom:
        this.entities = new Entities<EntityCustomField>(EntityCustomField);
        break;
      case EnumEntityType.Individual:
      case EnumEntityType.IndividualForCountries:
        this.entities = new Entities<EntityIndividual>(EntityIndividual);
        break;
      case EnumEntityType.Portfolio:
        this.entities = new Entities<EntityPortfolio>(EntityPortfolio);
        break;
      case EnumEntityType.Portfolio:
        this.entities = new Entities<EntityPortfolio>(EntityPortfolio);
        break;
      case EnumEntityType.Property:
        this.entities = new Entities<EntityProperty>(EntityProperty);
        break;
      case EnumEntityType.Regulation:
        this.entities = new Entities<EntityRegulation>(EntityRegulation);
        break;
      case EnumEntityType.Regulator:
        this.entities = new Entities<EntityRegulator>(EntityRegulator);
        break;
      case EnumEntityType.Secretariat:
        this.entities = new Entities<EntitySecretariat>(EntitySecretariat);
        break;
      case EnumEntityType.ShareCertificate:
        this.entities = new Entities<EntityShareCertificate>(
          EntityShareCertificate
        );
        break;
      case EnumEntityType.Shareholding:
        this.entities = new Entities<EntityShareholding>(EntityShareholding);
        break;
      case EnumEntityType.Template:
        this.entities = new Entities<EntityTemplate>(EntityTemplate);
        break;
      case EnumEntityType.Trust:
        this.entities = new Entities<EntityTrust>(EntityTrust);
        break;
      case EnumEntityType.User:
        this.entities = new Entities<EntityUser>(EntityUser);
        break;
      case EnumEntityType.File:
        this.entities = new Entities<EntityFile>(EntityFile);
        break;
      case EnumEntityType.Meeting:
        this.entities = new Entities<EntityMeeting>(EntityMeeting);
        break;
      case EnumEntityType.Functional:
        this.entities = new Entities<EntityFunctional>(EntityFunctional);
        break;
      case EnumEntityType.Legal:
        this.entities = new Entities<EntityLegal>(EntityLegal);
        break;
      case EnumEntityType.Natural:
        this.entities = new Entities<EntityNatural>(EntityNatural);
        break;
      case EnumEntityType.Attendance:
        this.entities = new Entities<EntityAttendance>(EntityAttendance);
        break;
      case EnumEntityType.ParentCompany:
      case EnumEntityType.HoldingParentCompany:
        this.entities = new Entities<EntityCompany>(EntityCompany);
        break;
      case EnumEntityType.EntityType:
        this.entities = new Entities<EntityType>(EntityType);
        break;
      case EnumEntityType.TaskType:
        this.entities = new Entities<EntityTaskType>(EntityTaskType);
      case EnumEntityType.Secretary:
      case EnumEntityType.Lee:
      case EnumEntityType.FinancialOfficer:
      case EnumEntityType.PublicOfficer:
      case EnumEntityType.AuditPartner:
        this.entities = new Entities<EntityIndividual>(EntityIndividual);
        break;
      case EnumEntityType.Template:
        this.entities = new Entities<EntityTemplate>(EntityTemplate);
      case EnumEntityType.TemplateInput:
        this.entities = new Entities<EntityTemplateInput>(EntityTemplateInput);
      case EnumEntityType.Report:
      case EnumEntityType.Month:
      case EnumEntityType.FyeMonth:
      case EnumEntityType.AnniversaryMonth:
      default:
        this.entities = new Entities<Entity>(Entity);
        break;
    }
    if (this.sourceType == 'json') {
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
    if (this.headingsSource) {
      this.headingsMap = new Map(eval(H[this.headingsSource]));
      if (this.headingsMap.size == 0) {
        this.headingsMap = new Map([
          ['name', 'Name'],
          ['suffix', 'Suffix'],
        ]);
      }
    }
  }
}

export class EntityCity extends Entity {
  public type = EnumEntityType.City;
  public countryKey = -1;
}
export class EntityFile extends Entity {
  public type = EnumEntityType.File;
  fileName = '';
  dateTime: Date;
  public clone() {
    let t = new EntityFile(this.name);
    t = Object.assign(t, this);
    return t;
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
  public type = EnumEntityType.Meeting;
  start: Date;
  end: Date;
  where = '';
  notes = '';
  attendances = new Entities<EntityAttendance>(EntityAttendance);
  files = new Entities<EntityFile>(EntityFile);
  public clone() {
    let t = new EntityFile(this.name);
    t = Object.assign(t, this);
    return t;
  }
}
export class EntityFunctional extends Entity {
  public type = EnumEntityType.Functional;
  public tasksCount = 0;
  public isActive = true;
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
  public type = EnumEntityType.Custom;
  value: any; //literal or entityKey
  public clone() {
    let t = new EntityCustomField(this.name);
    t = Object.assign(t, this);
    return t;
  }
}

export class EntityLegal extends EntityFunctional {
  public type = EnumEntityType.Legal;
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

//todo: Appointments, ShareCertificates, Shareholders collections
export class EntityCompany extends EntityLegal {
  public type = EnumEntityType.Company;
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

  regulatorKeys: number[] = [0, 1];
  contactKeys: number[] = [];
  portfolioKeys: number[] = [1, 2];
  propertyKeys: number[];
  shareCertificateKeys: number[];
  appointmentKeys: number[];
  shareholderKeys: number[];
  addressKeys: number[];
}

export class EntityContact extends Entity {
  public type = EnumEntityType.Contact;
  contactTypeKey = -1; //entity, such as Company Primary Contact...
  key: 0;
  individualKey = -1;
  onLeaveIs = false;
  comingBackDate = null;
  contactPreferenceKey = -1;
  email = '';
  cellphone = '';
  landline = '';
  note = '';
}

export class EntityAddress extends Entity {
  public type = EnumEntityType.Address;
  addressTypeKey: number = 0;
  countryKey: number = -1;
  cityKey: number = -1;
  text = '';
}

export class EntityProperty extends EntityFunctional {
  public type = EnumEntityType.Property;
  addressKey = -1;
}

export class EntityAppointment extends Entity {
  public type = EnumEntityType.Appointment;
  companyKey = -1;
  individualKey = -1;
  startDate: Date = null;
  endDate: Date = null;
}

//let company = new Company('a');
export class EntityNatural extends EntityFunctional {
  public type = EnumEntityType.Natural;
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
}

export class EntityIndividual extends EntityNatural {
  type = EnumEntityType.Individual;
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
  SAIDnumber: string;
  SAPassportNumber: string;
  incomeTaxNumber: string;
  vatNumber: string;
  countryKey = -1;
  passportNumber: string;
  employeeNumber: string;
  position: string;
  currentEmployerKey = -1; //company
  //contact details
  //customFields
  //files
}

export class EntityShareholding extends Entity {
  public type = EnumEntityType.Shareholding;
  shareTypeKey = -1;
  individualKey = -1;
  companyKey = -1;
  shareCount = 0;
}

export class EntityPortfolio extends EntityFunctional {
  public type = EnumEntityType.Portfolio;
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
  public type = EnumEntityType.Trust;
  public clone() {
    let t = new EntityTrust(this.name);
    t = Object.assign(t, this);
    return t;
  }
  //todo: trusteesAppointments: Entities<User>;
}

export class EntityTaskType extends Entity {
  type = EnumEntityType.TaskType;
  suffix = ''
  entityTypeKey = -1;
  countryKey = -1;
}
export class EntityRegulator extends EntityLegal {
  public type = EnumEntityType.Regulator;
  public clone() {
    let t = new EntityRegulator(this.name);
    t = Object.assign(t, this);
    return t;
  }
  countryKey = -1;
  regulationEntities: Entities<EntityRegulation>;
}
export class EntityAuditor extends EntityLegal {
  public type = EnumEntityType.Auditor;
  public clone() {
    let t = new EntityAuditor(this.name);
    t = Object.assign(t, this);
    return t;
  }
  professionalNumber: string;
  partnerKey = -1;
  //todo: partners: Entities<NaturalEntity>
}
export class EntitySecretariat extends EntityLegal {
  public type = EnumEntityType.Secretariat;
  public clone() {
    let t = new EntitySecretariat(this.name);
    t = Object.assign(t, this);
    return t;
  }
  professionalNumber: string;
  partnerKey = -1;
  //todo: partners: Entities<NaturalEntity>
}
export class EntityRegulation extends EntityFunctional {
  public type = EnumEntityType.Regulation;
  public clone() {
    let t = new EntityRegulation(this.name);
    t = Object.assign(t, this);
    return t;
  }
  countryKey = -1;
  regulatorEntities: Entities<EntityRegulator>;
}

export class EntityUser extends EntityNatural {
  public type = EnumEntityType.User;
  activationDate: Date;
  deactivationDate: Date;
  employeeNumber: string;
  position: string;
  managerGroups: Entities<EntityPortfolio>;
  adminGroups: Entities<EntityPortfolio>;
  managerCompanies: Entities<EntityCompany>;
  adminCompanies: Entities<EntityCompany>;
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
}

export class EntityMeetingGuest extends EntityNatural {
  attended = false;
}

export class Message {
  constructor(
    public when: Date,
    public who: string,
    public title: string,
    public isRead: boolean,
    public text: string
  ) {}

  public whenString() {
    let d = this.when;
    let dy: string = d.getDate().toString();
    if (dy.length === 1) dy = '0' + dy;
    let m = d;
    return (
      m.getFullYear() +
      '/' +
      ('0' + (m.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + m.getDate()).slice(-2) +
      ' ' +
      ('0' + m.getHours()).slice(-2) +
      ':' +
      ('0' + m.getMinutes()).slice(-2)
    );
  }
}

export enum StepDateType {
  Created,
  Warn,
  Due,
  Done,
}

export class Step {
  constructor(
    public title: string,
    public whenCreated: Date,
    public whenWarn: Date,
    public whenDue: Date,
    public whenDone: Date,
    public whoCreated: string,
    public whoDone: string,
    public taskType: string,
    public text: string,
    public isDone: boolean
  ) {}

  public whenStringCreated() {
    return this.whenString(StepDateType.Created);
  }
  public whenStringWarn() {
    return this.whenString(StepDateType.Warn);
  }
  public whenStringDue() {
    return this.whenString(StepDateType.Due);
  }
  public whenStringDone() {
    return this.whenString(StepDateType.Done);
  }

  private whenString(stepDateType: StepDateType) {
    let d = new Date();
    if (stepDateType === StepDateType.Created) {
      d = this.whenCreated;
    }
    if (stepDateType === StepDateType.Warn) {
      d = this.whenWarn;
    }
    if (stepDateType === StepDateType.Due) {
      d = this.whenDue;
    }
    if (stepDateType === StepDateType.Done) {
      d = this.whenDone;
    }

    let dy: string = d.getDate().toString();
    if (dy.length === 1) {
      dy = '0' + dy;
    }
    const m = d;
    return (
      m.getFullYear() +
      '/' +
      ('0' + (m.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + m.getDate()).slice(-2) +
      ' ' +
      ('0' + m.getHours()).slice(-2) +
      ':' +
      ('0' + m.getMinutes()).slice(-2)
    );
  }
}

export class Task {
  constructor(public mainGoal: Step, public steps: Step[]) {}
}

export class Record {
  constructor(
    public when: Date,
    public who: string,
    public note: string,
    public entity: string,
    public prevValue: any,
    public currentValue: any
  ) {}

  public whenString() {
    let d = this.when;
    let dy: string = d.getDate().toString();
    if (dy.length === 1) dy = '0' + dy;
    let m = d;
    return (
      m.getFullYear() +
      '/' +
      ('0' + (m.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + m.getDate()).slice(-2) +
      ' ' +
      ('0' + m.getHours()).slice(-2) +
      ':' +
      ('0' + m.getMinutes()).slice(-2)
    );
  }
}

export class FileDoc {
  constructor(
    when: Date,
    who: string,
    filePurpose: string,
    isUsed: boolean,
    associations: FileDoc_Use[]
  ) {}
}

export class FileDoc_Use {
  constructor(field: string, isLinked: boolean, isUsed: boolean) {}
}

export class CustomField {
  constructor(name: string, type: string, value: any) {}
}

// export type EntityKey = number;

export class EntityShareCertificate extends Entity {
  public type = EnumEntityType.ShareCertificate;
  issuedDate: Date = null;
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
  | EntityAddress
  | EntityType
  | EntityMeeting;

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
      // if (a.key) {
      if (setType) a.type = setType;
      this.add(a);
      // }else{
      //   this.add(a);
      // }
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
    // let key = existingKey;
    // if (existingKey == -1) key = super.size;
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

