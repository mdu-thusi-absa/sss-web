import { Capability } from 'protractor';
import { MapType } from '@angular/compiler';
import { EntityMessageComponent } from './panels/entity-message/entity-message.component';

export class Entity {
  // name: string;
  // tasksCount: number;
  // suffix: string;
  // country: string;
  // isActive: boolean;

  //constructor(public name: string, public tasksCount: number, public suffix: string, public country: string, public isActive: boolean){}
  constructor(public name: string){}

  set(propertyName: string, value: any){
    this[propertyName] = value;
    return this;
  }

  static compare(v: Entity, w: Entity): number {
    let r = 0;
    if (v.name > w.name) r = 1;
    else if (v.name < w.name) r = -1;
    return r;
  }

  static makeMap(map: any, entities: Entity[]){
    for (let i=0; i<entities.length; i++){
      map.set(i,entities[i]);
    }
  }
  static makeNameMap(map: any, entities: Entity[]){
    for (let i=0; i<entities.length; i++){
      map.set(i,entities[i].name);
    }
  }
}

export class Country extends Entity{
}
export class City extends Entity{
  constructor(public name, countryId: number){
    super(name);
  }
}
export class FunctionalEntity extends Entity{
  public type: string;
  public suffix = '';
  public tasksCount = 0;
  public isActive = true;
}
export class LegalEntity extends FunctionalEntity{
  public type = 'legal';
}
export class NaturalEntity extends FunctionalEntity{
  public type = 'natural'
  public email: string;
  public cellNumber: string;
  public birthDate: Date;
  public deathDate: Date;
  //public residentialAddress: string;
  constructor(
    public surname: string,
    public firstName: string,
    public suffix: string
  ) {
    super(surname + ', ' + firstName);
  }

  get fullName() {
    return this.surname + ', ' + this.firstName + (this.suffix ? ' - ' + this.suffix:'');
  }
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
export class User extends NaturalEntity{
  public isActive: boolean;
  public role: string;
  constructor(
    public surname: string,
    public firstName: string,
    public suffix: string,
  ) {
    super(surname,firstName,suffix);
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

export class CountryCities {
  constructor(public name: string, public cities: string[]) {}
}

