export class Entity {
  name: string;
  tasksCount: number;
  suffix: string;
  country: string;
  isActive: boolean;

  static compare(v: Entity, w: Entity): number {
      let r = 0;
      if (v.name > w.name) r = 1;
      else if (v.name < w.name) r = -1;
      return r;
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

export class FileDoc{
  constructor(when: Date, who: string, filePurpose: string, 
    isUsed: boolean,
    associations: FileDoc_Use[]
    ){}
}

export class FileDoc_Use{
  constructor(field: string, isLinked: boolean, isUsed: boolean){}
}

export class Person{
  surname = ''; firstName = ''; suffix = '';
  constructor(surname: string, firstName: string, suffix: string){
    this.surname = surname; this.firstName = firstName; this.suffix = suffix;
  }

  get fullName(){
    return this.surname + ', ' + this.firstName + ' - ' + this.suffix;
  }
  
}