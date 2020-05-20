import { Capability } from 'protractor';
import { MapType } from '@angular/compiler';
import { EntityMessageComponent } from './panels/entity-message/entity-message.component';
import { maxHeaderSize } from 'http';

export class Entity {
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

  // static makeMap(map: any, entities: Entity[]) {
  //   for (let i = 0; i < entities.length; i++) {
  //     map.set(i, entities[i]);
  //   }
  // }
  // static makeNameMap(map: any, entities: Entity[]) {
  //   for (let i = 0; i < entities.length; i++) {
  //     map.set(i, entities[i].name);
  //   }
  // }
}

export class Country extends Entity {
  cities = new Entities();
  constructor(public name: string) {
    super(name);
  }
}

export class City extends Entity {
  constructor(public name) {
    super(name);
  }
}
export class FunctionalEntity extends Entity {
  public type: string;
  public suffix = '';
  public tasksCount = 0;
  public isActive = true;
}
export class LegalEntity extends FunctionalEntity {
  public type = 'legal';
}
export class NaturalEntity extends FunctionalEntity {
  public type = 'natural';
  public email: string;
  public cellNumber: string;
  public birthDate: Date;
  public deathDate: Date;
  //public residentialAddress: string;
  private surname_: string = '';
  private firstName_: string = '';
  private suffix_: string = '';
  // public firstName: string;
  // public suffix: string;
  constructor(surname: string, firstName: string, suffix: string) {
    super(surname + ', ' + firstName + (suffix ? ' - ' + suffix : ''));
    this.surname_ = surname;
    this.firstName_ = firstName;
    this.suffix_ = suffix;

    // this.surname = surname;
    // this.firstName = firstName;
    // this.suffix = suffix;
  }

  // public set surname(v: string){

  // }
  get fullName(): string {
    let s =
      this.surname_ +
      ', ' +
      this.firstName_ +
      (this.suffix_ ? ' - ' + this.suffix_ : '');
    //console.log(s);
    return s;
  }

  set surname(v: string) {
    this.surname_ = v;
    this.name = this.surname_ + ', ' + this.firstName_;
  }

  get surname(): string {
    return this.surname_;
  }

  set firstName(v: string) {
    this.firstName_ = v;
    this.name = this.surname_ + ', ' + this.firstName_;
  }

  get firstName(): string {
    return this.firstName_;
  }

  set suffix(v: string) {
    this.suffix_ = v;
    this.name = this.surname_ + ', ' + this.firstName_;
  }

  get suffix(): string {
    return this.suffix_;
  }

  get name(): string {
    return this.surname_ + ', ' + this.firstName_;
  }

  set name(v: string) {
    //super.name = v;
  }

  // public set name(value: string){
  //   super.name = this.surname + ', ' + this.firstName + (this.suffix ? ' - ' + this.suffix:'')
  // }

  // get fullName() {
  //   return this.surname + ', ' + this.firstName + (this.suffix ? ' - ' + this.suffix:'');
  // }

  // get name() {
  //   return this.surname + ', ' + this.firstName + (this.suffix ? ' - ' + this.suffix:'');
  // }
}
export class GroupEntity extends FunctionalEntity {
  public type = 'group';
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
  public isActive: boolean;
  public role: string;
  constructor(
    public surname: string,
    public firstName: string,
    public suffix: string
  ) {
    super(surname, firstName, suffix);
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
    if (dy.length == 1) dy = '0' + dy;
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
    if (stepDateType == StepDateType.Created) d = this.whenCreated;
    if (stepDateType == StepDateType.Warn) d = this.whenWarn;
    if (stepDateType == StepDateType.Due) d = this.whenDue;
    if (stepDateType == StepDateType.Done) d = this.whenDone;

    let dy: string = d.getDate().toString();
    if (dy.length == 1) dy = '0' + dy;
    let m = d;
    //return '-'
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
    if (dy.length == 1) dy = '0' + dy;
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

// export type AllCollections =
//   Entities
//   | Countries
//   | Cities
//   | FunctionalEntities
//   | Users
//   | LegalEntities
//   | NaturalEntities;
export type EveryEntity =
  Entity
  | NaturalEntity
  | Country
  | City
  | FunctionalEntity
  | User
  | LegalEntity
  | NaturalEntity;

// export interface ICollection<T> {
//   add(value: T): ICollection<T>;
//   edit(key: number, value: T): ICollection<T>;
//   del(key: number): ICollection<T>;
//   get(key: number): T;
//   size: number;
//   all_keys: number[];
//   all_values: T[];
//   all_entries: [number, T][];
// }

export class Entities extends Map<number, EveryEntity> {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;

  createEntity(){
    return new Entity('');
  }

  get currentKey(){
    return this.currentKey_;
  }

  set currentKey(v: number){
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue(){
    if (this.currentKey_==-1 && this.size>0){
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  add(value: EveryEntity): Entities {
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: EveryEntity): Entities{
    super.set(key, value);
    return this;
  }

  del(key: number): Entities {
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
}

export class Countries extends Map<number, Country>{
  currentKey_ = -1;
  currentValue_: EveryEntity = null;
  
  createEntity(){
    let c = new Country('') 
    c.cities.add(new City('-NA-'))
    return c;
  }

  get currentKey(){
    return this.currentKey_;
  }

  set currentKey(v: number){
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue(){
    if (this.currentKey_==-1 && this.size>0){
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  cities = new Cities();
  add(value: Country): Countries {
    if (!value.cities==null) value.cities = new Cities();
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: Country): Countries {
    super.set(key, value);
    return this;
  }

  del(key: number): Countries {
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
}

export class Cities extends Map<number, City> {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;
  
  createEntity(){
    return new City('');
  }

  get currentKey(){
    return this.currentKey_;
  }

  set currentKey(v: number){
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue(){
    if (this.currentKey_==-1 && this.size>0){
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  add(value: City): Cities {
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: City): Cities {
    super.set(key, value);
    return this;
  }

  del(key: number): Cities {
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
}


export class FunctionalEntities extends Map<number, FunctionalEntity> {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;
  
  createEntity(){
    return new FunctionalEntity('');
  }

  get currentKey(){
    return this.currentKey_;
  }

  set currentKey(v: number){
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue(){
    if (this.currentKey_==-1 && this.size>0){
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  add(value: FunctionalEntity): FunctionalEntities {
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: FunctionalEntity): FunctionalEntities {
    super.set(key, value);
    return this;
  }

  del(key: number): FunctionalEntities {
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
}

export class Users extends Map<number, User>  {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;
  
  createEntity(){
    return new User('','','');
  }

  get currentKey(){
    return this.currentKey_;
  }

  set currentKey(v: number){
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue(){
    if (this.currentKey_==-1 && this.size>0){
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  add(value: User): Users {
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: User): Users {
    super.set(key, value);
    return this;
  }

  del(key: number): Users {
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
}

export class LegalEntities extends Map<number, LegalEntity> {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;

  
  createEntity(){
    return new LegalEntity('');
  }


  get currentKey(){
    return this.currentKey_;
  }

  set currentKey(v: number){
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue(){
    if (this.currentKey_==-1 && this.size>0){
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  add(value: LegalEntity): LegalEntities {
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: LegalEntity): LegalEntities {
    super.set(key, value);
    return this;
  }

  del(key: number): LegalEntities {
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
}

export class NaturalEntities extends Map<number, NaturalEntity> {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;

  
  createEntity(){
    return new NaturalEntity('','','');
  }


  get currentKey(){
    return this.currentKey_;
  }

  set currentKey(v: number){
    this.currentKey_ = v;
    this.currentValue_ = this.get(this.currentKey_);
  }

  get currentValue(){
    if (this.currentKey_==-1 && this.size>0){
      this.currentKey = this.all_keys[0];
    }
    return this.currentValue_;
  }

  add(value: NaturalEntity): NaturalEntities {
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: NaturalEntity): NaturalEntities {
    super.set(key, value);
    return this;
  }

  del(key: number): NaturalEntities {
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
}
