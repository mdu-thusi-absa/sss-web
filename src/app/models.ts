import { Capability } from 'protractor';
import { MapType } from '@angular/compiler';
import { EntityMessageComponent } from './panels/entity-message/entity-message.component';
import { maxHeaderSize } from 'http';

export class Entity {
  public type = 'entity';
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
  public type = 'country';
  cities = new Entities();
  constructor(public name: string) {
    super(name);
  }

  addCity(city: City): Country{
    this.cities.add(city);
    return this;
  }
}

export class City extends Entity {
  public type = 'city';
  constructor(public name) {
    super(name);
  }
}
export class FileEntity extends Entity{
  public type = 'file';
  title = '';
  description = '';
}
export class FunctionalEntity extends Entity {
  public type = 'functional';
  public suffix = '';
  public tasksCount = 0;
  public isActive = true;
}
export class LegalEntity extends FunctionalEntity {
  public type = 'legal';
}

export class Company extends LegalEntity{
  public type = 'company'
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
  //private suffix_: string = '';
  // public firstName: string;
  // public suffix: string;
  constructor(surname: string, firstName: string, suffix: string) {
    super(surname + ', ' + firstName);
    super.name = surname + ', ' + firstName;
    this.surname_ = surname;
    this.firstName_ = firstName;
    super.suffix = suffix;
  }

  // public set surname(v: string){

  // }
  get fullName(): string {
    let s =
      this.surname_ +
      ', ' +
      this.firstName_ +
      (this.suffix ? ' - ' + this.suffix : '');
    //console.log(s);
    return s;
  }

  set surname(v: string) {
    this.surname_ = v;
    super.name = this.surname_ + ', ' + this.firstName_;
    //console.log(this.surname_,this.name);
  }

  get surname(): string {
    return this.surname_;
  }

  set firstName(v: string) {
    this.firstName_ = v;
    super.name = this.surname_ + ', ' + this.firstName_;
  }

  get firstName(): string {
    return this.firstName_;
  }

  set suffix(v: string) {
    super.suffix = v;
    //this.name_ = this.surname_ + ', ' + this.firstName_;
  }

  get suffix(): string {
    return super.suffix;
  }

  get name(): string {
    return super.name;
  }

  set name(v: string) {
    super.name = v;
  }
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
  public type = 'user';
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
  | Country
  | City
  | FunctionalEntity
  | User
  | LegalEntity
  | NaturalEntity
  | Company;

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

  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      let o = this.createEntity();
      let a = entitiesArray[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      o.type = type;
      this.add(o);
    }
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

export class FileEntities extends Map<number, FileEntity>{
  currentKey_ = -1;
  currentValue_: EveryEntity = null;
  
  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      let o = this.createEntity();
      let a = entitiesArray[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      o.type = type;
      this.add(o);
    }
  }

  createEntity(){
    return new FileEntity('');
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

  add(value: FileEntity): FileEntities {
    super.set(super.size, value);
    return this;
  }

  edit(key: number, value: FileEntity): FileEntities {
    super.set(key, value);
    return this;
  }

  del(key: number): FileEntities {
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
  
  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      let o = this.createEntity();
      let a = entitiesArray[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      o.type = type;
      this.add(o);
    }
  }

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
  
  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      let o = this.createEntity();
      let a = entitiesArray[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      o.type = type;
      this.add(o);
    }
  }

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
  
  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, activeOnly: boolean, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      //let o = this.createEntity();
      let a = entitiesArray[i];
      let o = Object.assign(a);
      let propName = '';
      // for (propName in a)  
      // {  
      //   //console.log(propName,a[propName]);
      //   o[propName] = a[propName];
      // } 
      o.type = type;
      if (activeOnly){
        if (o["isActive"])
           this.add(o);
      }else{
        this.add(o);
      }

    }
  }

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
  
  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      let o = this.createEntity();
      let a = entitiesArray[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      o.type = type;
      this.add(o);
    }
  }

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

// export class Companies extends Array<LegalEntity>{
//   currentKey_ = -1;
//   currentValue_: EveryEntity = null;

//   createEntity(){
//     return new LegalEntity('');
//   }

//   get currentKey(){
//     return this.currentKey_;
//   }

//   set currentKey(v: number){
//     this.currentKey_ = v;
//     this.currentValue_ = super[this.currentKey_];
//   }

//   get currentValue(){
//     if (this.currentKey_==-1 && this.size>0){
//       this.currentKey_ = 0;
//     }
//     return this.currentValue_;
//   }

//   add(value: LegalEntity): Companies {
//     super.push(value);
//     return this;
//   }

//   edit(key: number, value: LegalEntity): Companies {
//     super[key] = value;
//     return this;
//   }

//   del(key: number): Companies {
//     super.splice(key,1);
//     return this;
//   }
//   get size(): number {
//     return super.length;
//   }

//   // get all_keys() {
//   //   return [...super.keys()];
//   // }

//   // get all_values() {
//   //   return [...super.values()];
//   // }

//   // get all_entries() {
//   //   return [...super.entries()];
//   // }
// }

export class LegalEntities extends Map<number, LegalEntity> {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;

  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      let o = this.createEntity();
      let a = entitiesArray[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      o.type = type;
      this.add(o);
    }
  }
  
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

// export class Companies extends LegalEntities{}

export class NaturalEntities extends Map<number, NaturalEntity> {
  currentKey_ = -1;
  currentValue_: EveryEntity = null;

  fromJSONArray(array: any[]){
    //expects array of objects with: name, tasksCount, isActive
    for (let i=0;i<array.length;i++){
      let o = this.createEntity();
      let a = array[i];
      let propName = '';
      
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      this.add(o);
    }
  }

  fromArray(type: string, entitiesArray: EveryEntity[]){
    for (let i=0;i<entitiesArray.length;i++){
      let o = this.createEntity();
      let a = entitiesArray[i];
      let propName = '';
      for (propName in a)  
      {  
        o[propName] = a[propName];
      } 
      o.type = type;
      this.add(o);
    }
  }
  
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
