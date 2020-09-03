import { Capability, ExpectedConditions } from 'protractor';
import { MapType } from '@angular/compiler';
import { EntityMessageComponent } from '../panels/entity-message/entity-message.component';
import { maxHeaderSize } from 'http';
// import { LoginOptions } from 'angular-oauth2-oidc';
import { etLocale } from 'ngx-bootstrap/chronos';
import { data } from 'jquery';
import { DataService } from './data.service';
import { EnumEntityType } from './data-entityTypes';

export class Entity {
  public key: number = 0; //corresponds to the database key, retrieved with JSON from the API
  public type = EnumEntityType.Entity;
  public description = '';
  public isActive = false;
  public suffix = '';
  public jsonSource = '';
  public sourceType = 'json'; //or function for on the fly or from DB
  public storeName = ''; //name of a variable to store data in
  //constructor(public name: string, public tasksCount: number, public suffix: string, public country: string, public isActive: boolean){}
  constructor(public name: string) {}

  get allName() {
    if (this.suffix == '') return this.name;
    else {
      return this.name + ' - ' + this.suffix;
    }
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
// export class Country extends Entity {
//   public type = 'country';
//   public cities = new Entities<City>(City);

//   constructor(public name: string) {
//     super(name);
//     this.cities.add(new City('-NA-'));
//   }

//   public clone() {
//     let t = new Country(this.name);
//     t = Object.assign(t, this);
//     return t;
//   }

//   addCity(city: City): Country {
//     if (this.cities.size > 0) {
//       if ((this.cities.get(0).name = '-NA-')) {
//         this.cities.del(0);
//       }
//     }
//     this.cities.add(city);
//     return this;
//   }
// }
export class EntityCity extends Entity {
  public type = EnumEntityType.City;
  public countryKey = -1;
  // public clone() {
  //   let t = new City(this.name);
  //   t = Object.assign(t, this);
  //   return t;
  // }
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
export class EntityMeeting extends Entity {
  public type = EnumEntityType.Meeting;
  dateTime: Date;
  attendees = new Entities<EntityNatural>(EntityNatural);
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
// export class ContactEntity extends Entity {
//   contactPersonKey: number;
//   isOnLeave: boolean;
//   comingBackDate: Date;
//   contactPreferenceKey: number;
//   email: string;
//   cellPhone: string;
//   landLine: string;
//   public clone() {
//     let t = new ContactEntity(this.name);
//     t = Object.assign(t, this);
//     return t;
//   }
// }
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

  // constructor(protected name: string){
  //   super(name);
  //   this.name_ = super.capitalise(name);
  //   super.name = this.name;
  // }

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

// export class Shareholder extends EntityLegal {
//   sharesHolding: number; //only current, todo: historic record, types of shares
//   public clone() {
//     return new Shareholder(this.name);
//   }
// }
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

export class EntityIndividual extends EntityNatural {
  type = EnumEntityType.Individual;

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
// export class Person extends NaturalEntity{
//   constructor(
//     public surname: string,
//     public firstName: string,
//     public suffix: string,
//   ) {
//     super(surname,firstName,suffix);
//   }
// }
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
  | EntityAddress;

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
    let array = JSON.parse(json);

    if (setType) this.fromArray(array, maxToLoad, setType);
    else this.fromArray(array, maxToLoad);
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

  // fromArray(type: string, entitiesArray: T[]) {
  //   for (let i = 0; i < entitiesArray.length; i++) {
  //     let a = entitiesArray[i];
  //     // a = Object.assign(a,entitiesArray[i]);
  //     a.type = type;
  //     this.add(a);
  //   }
  // }

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
}

// export class Countries extends Entities<Country> {
//   add(value: Country): Countries {
//     if (!value.cities == null) value.cities = new Entities<City>(Country);
//     super.set(super.size, value);
//     return this;
//   }
// }

export class TaskFlowSubTaskCondition {
  constructor(
    public fieldName: string,
    public value: any,
    public operator: string,
    public type: string //'number', or string, or Date, or...
  ) {}

  assert(data: object): boolean {
    let r = false;
    let v = data[this.fieldName];
    if (v) {
      let mO = ['>', '<', '==', '!='];
      let mS = ['in', 'notin'];
      if (mO.indexOf(this.operator)) {
        let f = v + this.operator + this.value
        return eval(f);
      } else if (mS.indexOf(this.operator)) {
        if (this.operator == 'in') {
          return this.value.indexOf(v) > -1;
        } else if (this.operator == 'notin') {
          return this.value.indexOf(v) == -1;
        }
      }
      return r;
    }
  }
}

export class TaskFlowSubTask {
  // '' means no operator; can be: ==, >, <, maybe(in, not in)
  constructor(
    public taskFlow: TaskFlow,
    public conditions: TaskFlowSubTaskCondition[] = []
  ) {}

  assert(data: object):boolean{
    let r = true
    for (let i = 0; i < this.conditions.length; i++) {
      const e = this.conditions[i];
      r = r && e.assert(data)
      if (!r) break;
    }    
    return r
  }
}

export class TaskFlow {
  type = 'task flow type'; // to differenciate task types, and JSON names
  name = 'Task Flow name for labels etc.';
  description = '';
  value: any = '';
  whenStarted = new Date();
  whenDone = new Date();
  whoCreated = '';
  isDone = false;
  isCurrent = false;
  isEnd = false;
  notes = '';
  parent: TaskFlow = null;
  workflowValuesObject: any = '';
  subTasks: TaskFlowSubTask[] = [];
  hasFork = false;
  errorMessage = ''
  entityFieldKey = '' //to set the fieldNameKey to get entity to be worked on in the step

  constructor(protected data: DataService, public fieldName) {}
  init() {} // to be implemented by child classes, if they need to initialise data
  /*
    subTasks are there to provide the next task
  */
  addNext(taskFlow: TaskFlow) {
    taskFlow.parent = this;
    let s = new TaskFlowSubTaskCondition('', 0, '', '');
    let t = new TaskFlowSubTask(taskFlow, [s]);
    this.subTasks.push(t);
  }

  addNextFork(subTask: TaskFlowSubTask) {
    subTask.taskFlow.parent = this;
    this.hasFork = true;
    this.subTasks.push(subTask);
  }

  // getNext(): TaskFlow {
  //   let t: TaskFlow = null;
  //   if (this.subTasks.length > 0) {
  //     t = this.subTasks[0].taskFlow;
  //   } else {
  //     for (let i = 0; i < this.subTasks.length; i++) {
  //       let s = this.subTasks[i];
  //       if (eval(this.value + s.conditionalOperator + s.conditionalValue)) {
  //         t = this.subTasks[0].taskFlow;
  //       }
  //     }
  //   }
  //   return t;
  // }

  // getPrev(): TaskFlow {
  //   return this.parent;
  // }
}

export class TaskFlowSelect extends TaskFlow {
  type = 'select';
  sourceType: EnumEntityType;
  value = 0; //the key of the selected item
  customEntities: Entities<Entity> = null;
  values: Entities<AnyEntity>;
  init() {
    this.values = this.data.getEntities(
      this.sourceType,
      this.workflowValuesObject
    );
  }
}

export class TaskFlowConfirm extends TaskFlow {
  type = 'confirm';
  value: boolean;
}

export class TaskFlowDoc extends TaskFlow {
  type = 'doc';
  doc: string; // file name
}

export class TaskFlowUploadDocs extends TaskFlow {
  type = 'upload-docs';
  docs: TaskFlowDoc[] = []; // file name
  addInput(fieldName: string, type: string, name: string, description: string) {
    let d = new TaskFlowDoc(this.data, fieldName);
    d.type = type;
    d.name = name;
    d.description = description;
    this.docs.push;
  }
}

export class TaskFlowSubmitDocs extends TaskFlow {
  type = 'submit-docs';
  whoTo: string; //submit to whom
  docs: TaskFlowDoc[] = []; // file name
  addInput(fieldName: string, type: string, name: string, description: string) {
    let d = new TaskFlowDoc(this.data, fieldName);
    d.type = type;
    d.name = name;
    d.description = description;
    this.docs.push;
  }
}

export class TaskFlowReminder extends TaskFlow {
  type = 'set-reminder';
  reminderDate_ = new Date();
  offsetDays_ = 0;

  set offsetDays(v: number) {
    this.offsetDays_ = v;
    this.addDays();
  }

  get reminderDate() {
    return this.reminderDate_;
  }

  public addDays() {
    let date = new Date(new Date().valueOf());
    date.setDate(date.getDate() + this.offsetDays_);
    this.reminderDate_ = date;
  }
}

export class TaskFlowFormInput {
  type = 'text';
  title = 'Input';
  fieldName = 'fieldName';
  description = '';
  value: any = '';
}

export class TaskFlowForm extends TaskFlow {
  type = 'form';
  inputs: TaskFlowFormInput[] = [];

  addInput(
    fieldName: string,
    type: string,
    title: string,
    description: string
  ): TaskFlowForm {
    let inp = new TaskFlowFormInput();
    inp.fieldName = fieldName;
    inp.type = type;
    inp.title = title;
    inp.description = description;
    this.inputs.push(inp);
    return this;
  }
}

export class TaskFlowMessage extends TaskFlow {
  type = 'message';
}

export class TaskFlowError extends TaskFlow {
  type = 'error';
  text = '';
}

// tasks[]: maintains the current state of the workflow/path, with each node = TaskFlow.
// getNext, getPrev: Follows the path with
// rootTask: first TaskFlow. Build tree by using TaskFlow object add..., then assign to rootTask;
export class WorkFlow extends TaskFlow {
  type = 'workflow'
  name = 'Workflow';
  private rootTask: TaskFlow = null;
  private currentTask: TaskFlow = null;
  //private lastAddedTask: TaskFlow = null;
  private currentTaskIndex_ = -1;
  public tasks: TaskFlow[] = [];
  public que: TaskFlow[] = []; // que of tasks to come back to when isEnd taskFlow is true

  addNext(taskFlow: TaskFlow){
    this.rootTask = taskFlow
  }

  // loads the rootTask, and builds the obvious branch, until the first fork
  public start(): boolean {
    //this.rootTask.init()
    this.tasks = [this.rootTask];
    this.currentTask = this.rootTask;
    this.currentTask.isCurrent = true;
    if (this.currentTask) this.currentTaskIndex_ = 0;
    return this.build(this.rootTask);
  }
  public loopFromQue() {
    //todo: test
    let q = this.que.pop();
    this.tasks.push(q);
    this.currentTask = q;
    this.currentTask.isCurrent = true;
    this.currentTaskIndex_++;
    return this.build(this.currentTask);
  }

  private build(fromTask: TaskFlow): boolean {
    let t: TaskFlow = null;

    if (this.currentTaskIndex_ == this.tasks.length - 1) {
      if (fromTask) {
        fromTask.workflowValuesObject = this.collectValues();
        fromTask.init();
        let t = fromTask;
        // while (!t.hasFork && t.subTasks.length>0 && t.entityFieldKey=='') {
        //   t = t.subTasks[0].taskFlow;
        //   t.workflowValuesObject = this.collectValues();
        //   t.init();
        //   this.tasks.push(t);
        // }
        if (t.isDone && !t.hasFork && t.subTasks.length==1) {
          t = t.subTasks[0].taskFlow;
          t.workflowValuesObject = this.collectValues();
          console.log(t.workflowValuesObject);
          
          t.init();
          this.tasks.push(t);
        }
        else if (t.isDone && t.hasFork) {
          let notAdded = true
          console.log('in fork', t.subTasks.length);
          for (let i = 0; i < t.subTasks.length; i++) {
            if (t.subTasks[i].assert(t.workflowValuesObject)) {
              // console.log(fromTask.value + sOp + sV + ' is true');
              t = t.subTasks[i].taskFlow;
              t.workflowValuesObject = this.collectValues();
              t.init();
              this.tasks.push(t);
              this.build(t);
              notAdded = false
              break;
            }
          }
          // check if a new task has been added
          // if not: show message
          if (notAdded) t.errorMessage = 'No further steps are available for this option, please select another one'
          else t.errorMessage = ''
        }
        return true;
      }
      return false;
    }
    return true;
  }

  collectValues(): object {
    //returns JSON
    let o = {};
    this.tasks.forEach((e) => {
      o[e.fieldName] = e.value;
    });
    return o;
  }

  public moveToNext(): TaskFlow {
    this.currentTask.isDone = true;
    if (this.currentTask.isEnd) {
      if (this.que.length == 0) this.isEnd = true;
      else {
        // todo: test. set currentTask from que
        this.loopFromQue();
        return this.currentTask;
      }
    } else {
      if (this.build(this.currentTask)) {
        if (this.currentTaskIndex_ < this.tasks.length - 1) {
          this.currentTaskIndex_++;
          this.currentTask.isCurrent = false;
          this.currentTask = this.tasks[this.currentTaskIndex_];
          this.currentTask.isCurrent = true;
          this.build(this.currentTask);
        }
        return this.currentTask;
      }
    }
    return null;
  }

  public moveToPrev(): TaskFlow {
    if (this.currentTask.parent) {
      this.currentTask.isCurrent = false;
      this.currentTaskIndex_--;
      // this.tasks = this.tasks.slice(0,this.currentTaskIndex_); //delete
      this.currentTask = this.tasks[this.currentTaskIndex_];
      this.currentTask.isCurrent = true;
      if (this.currentTask.hasFork ) {
        let v = this.tasks.slice(0, this.currentTaskIndex_ + 1);
        this.tasks = v;
      }

      // if (this.currentTask.subTasks.length > 1) {
      //   console.log(1,this.tasks);
      //   console.log(2,this.currentTaskIndex_);
      //   let v = this.tasks.slice(0, this.currentTaskIndex_ + 1);
      //   this.tasks = v;
      //   console.log(3,this.tasks);
      //   this.build(this.currentTask);
      // }
      return this.currentTask;
    }
    return null;
  }

  public get currentTaskIndex(): number {
    return this.currentTaskIndex_;
  }

  public get countTasks(): number {
    return this.tasks.length;
  }
}

