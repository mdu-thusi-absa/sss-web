import { Capability } from 'protractor';
import { MapType } from '@angular/compiler';
import { EntityMessageComponent } from './panels/entity-message/entity-message.component';
import { maxHeaderSize } from 'http';
import { LoginOptions } from 'angular-oauth2-oidc';

export class Entity {
  public type = 'entity';
  public description: string;
  //constructor(public name: string, public tasksCount: number, public suffix: string, public country: string, public isActive: boolean){}
  constructor(public name: string) {}

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

  public clone() {
    let t = new Entity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  protected capitalise(text: string): string {
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
}
export class Country extends Entity {
  public type = 'country';
  public cities = new Entities<City>(City);

  constructor(public name: string) {
    super(name);
    this.cities.add(new City('-NA-'));
  }

  public clone() {
    let t = new Country(this.name);
    t = Object.assign(t, this);
    return t;
  }

  addCity(city: City): Country {
    if (this.cities.size > 0) {
      if ((this.cities.get(0).name = '-NA-')) {
        this.cities.del(0);
      }
    }
    this.cities.add(city);
    return this;
  }
}
export class City extends Entity {
  public type = 'city';
  public clone() {
    let t = new City(this.name);
    t = Object.assign(t, this);
    return t;
  }
}
export class FileEntity extends Entity {
  type = 'file';
  title = '';
  public clone() {
    let t = new FileEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
}
export class FunctionalEntity extends Entity {
  public type = 'functional';
  public suffix = '';
  public tasksCount = 0;
  public isActive = true;
  public clone() {
    let t = new FunctionalEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  contactDetails: Entities<ContactEntity>;
  customFields: Entities<CustomFieldEntity>;
  entityFiles: Entities<FileEntity>;
}
export class CustomFieldEntity extends Entity {
  //name = title
  //type = entity type name
  value: any; //literal or entityKey
  public clone() {
    let t = new CustomFieldEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
}
export class ContactEntity extends Entity {
  contactPersonKey: number;
  isOnLeave: boolean;
  comingBackDate: Date;
  contactPreferenceKey: number;
  email: string;
  cellPhone: string;
  landLine: string;
  public clone() {
    let t = new ContactEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
}
export class LegalEntity extends FunctionalEntity {
  public type = 'legal';
  //customFields: CustomFields;
  //entityFiles: FileEntities;
  public clone() {
    let t = new LegalEntity(this.name);
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
      if (v.length>4)
        if (v.toUpperCase() == v) this.name_ = super.capitalise(v);
    }
  }
}
export class Appointment {
  person: NaturalEntity;
  legalEntity: LegalEntity;
  appointmentDate: Date;
  resignationDate: Date;
}
export class Shareholder extends LegalEntity {
  sharesHolding: number; //only current, todo: historic record, types of shares
  public clone() {
    return new Shareholder(this.name);
  }
}
//todo: Appointments, ShareCertificates, Shareholders collections
export class Company extends LegalEntity {
  type = 'company';
  registrationNumber: string;
  currNameEffectiveDate: Date;
  prevName: string;
  prevNameEffectiveDate: Date;
  entityGroups: Entities<Entity>;
  countryKey: number;
  industryKey: number;
  representativeOffice: boolean;
  foreignBrunch: boolean;
  incorporationDate: Date;
  anniversaryMonthKey: number;
  businessStartDate: Date;
  financialYearEndMonthKey: number;
  incomeTaxNumber: string;
  vatNumber: string;
  businessAreaKey: number;
  businessDivisionKey: number;
  legalClassKey: number;
  consolidated: boolean;
  entityStatusKey: number;
  entityStatusTieringKey: number;
  accountingClassKey: number;
  accountingClassificationTieringKey: number;
  directParentKey: number;
  shareholdingInEntity: number;
  appointedCompanySecretariatKey: number;
  clientSecretarialRepresentativeKey: number;
  legalEntityExecutiveKey: number;
  entityFinancialOfficerKey: number;
  publicOfficerKey: number;
  shareCode: string;
  ISINCode: string;
  bloombergCode: string;
  reutersCode: string;
  // collection
  //appointments: Appointments;
  //shareCertificates: Certificates;
  //shareholders: Shareholders;

  // constructor(name: string) {
  //   super(name);
  //   super.name = this.capitalise(name);
  // }
}
//let company = new Company('a');
export class NaturalEntity extends FunctionalEntity {
  public type = 'natural';
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
    let t = new NaturalEntity(this.surname, this.firstName, this.suffix);
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
    this.surname_ = this.capitalise(v);
    super.name = this.surname_ + ', ' + this.firstName_;
  }

  get surname(): string {
    return this.surname_;
  }

  set firstName(v: string) {
    this.firstName_ = this.capitalise(v);
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
export class Individual extends NaturalEntity {
  public clone() {
    let t = new Individual(this.surname, this.firstName, this.suffix);
    t = Object.assign(t, this);
    return t;
  }
  preferredFormalName: string;
  preferredInformalName: string;
  currNameEffectiveDate: Date;
  prevNameEffectiveDate: Date;
  prevSurname: string;
  prevFirstName: string;
  entityGroups: Entities<GroupEntity>;
  entityCompanies: Entities<Company>;
  SAIDnumber: string;
  SAPassportNumber: string;
  incomeTaxNumber: string;
  vatNumber: string;
  countryKey: number;
  passportNumber: string;
  employeeNumber: string;
  position: string;
  currentEmployerKey: number; //company
  //contact details
  //customFields
  //files
}
export class GroupEntity extends FunctionalEntity {
  public type = 'group';
  public clone() {
    let t = new GroupEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  companies: Entities<Company>;
  usersManagers: Entities<User>;
  userAdmins: Entities<User>;
}
export class TrustEntity extends LegalEntity {
  public type = 'trust';
  public clone() {
    let t = new TrustEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  //todo: trusteesAppointments: Entities<User>;
}
export class RegulatorEntity extends LegalEntity {
  public type = 'regulator';
  public clone() {
    let t = new RegulatorEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  countryKey: number;
  regulationEntities: Entities<RegulationEntity>;
}
export class AuditorEntity extends LegalEntity {
  public type = 'auditor';
  public clone() {
    let t = new AuditorEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  professionalNumber: string;
  partnerKey: number;
  //todo: partners: Entities<NaturalEntity>
}
export class SecretariatEntity extends LegalEntity {
  public type = 'regulator';
  public clone() {
    let t = new SecretariatEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  professionalNumber: string;
  partnerKey: number;
  //todo: partners: Entities<NaturalEntity>
}
export class RegulationEntity extends FunctionalEntity {
  public type = 'regulation';
  public clone() {
    let t = new RegulationEntity(this.name);
    t = Object.assign(t, this);
    return t;
  }
  countryKey: number;
  regulatorEntities: Entities<RegulatorEntity>;
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
export class User extends NaturalEntity {
  activationDate: Date;
  deactivationDate: Date;
  employeeNumber: string;
  position: string;
  managerGroups: Entities<GroupEntity>;
  adminGroups: Entities<GroupEntity>;
  managerCompanies: Entities<Company>;
  adminCompanies: Entities<Company>;
  constructor(
    public surname: string,
    public firstName: string,
    public suffix: string
  ) {
    super(surname, firstName, suffix);
  }
  public clone() {
    let t = new User(this.surname, this.firstName, this.suffix);
    t = Object.assign(t, this);
    return t;
  }
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

export type EveryEntity =
  | Entity
  | Country
  | City
  | FunctionalEntity
  | User
  | LegalEntity
  | NaturalEntity
  | Company;

export class Entities<T extends EveryEntity> extends Map<number, T> {
  currentKey_ = -1;
  currentValue_: T = null;

  constructor(private EntityType) {
    super();
  }

  createEntity() {
    return new this.EntityType();
  }

  fromJSONArray(array: any[],maxToLoad?: number) {
    let L = array.length;
    if (maxToLoad) L = maxToLoad;
    for (let i = 0; i < L; i++) {
      let a = this.createEntity();
      a = Object.assign(a, array[i]);
      this.add(a);
    }
  }

  fromArray(type: string, entitiesArray: T[]) {
    for (let i = 0; i < entitiesArray.length; i++) {
      let a = entitiesArray[i];
      a.type = type;
      this.add(a);
    }
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
    super.set(super.size, value);
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
    //console.log(v);

    super.clear();
    for (let i = 0; i < v.length; i++) {
      this.add(v[i]);
    }
    return this;
  }
}

export class Countries extends Entities<Country> {
  add(value: Country): Countries {
    if (!value.cities == null) value.cities = new Entities<City>(Country);
    super.set(super.size, value);
    return this;
  }
}
