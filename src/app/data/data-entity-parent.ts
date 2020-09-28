import { EnumEntityType } from './data-entity-types';
import { DataService } from './data.service';

export class RecordUpdate {
  key: number;
  entityTypeKey: EnumEntityType;
  entityKey: number;
  recordDate: Date;
  fieldName: string;
  value: any;
}

export class HistoryArray extends Array {
  private getMostRecentDate() {
    if (super.length == 0) return null;
    else return this[super.length - 1].recordDate;
  }

  push(record: RecordUpdate) {
    let d = this.getMostRecentDate();
    let L = super.push(record);
    if (d > record.recordDate)
      super.sort((a, b) => {
        return b.recordDate - a.recordDate; //most recent first
      });
    return L;
  }

  getMostRecent(fieldName: string): RecordUpdate{
    let r: RecordUpdate
    if (super.length>0)
      r = super[super.length-1]
    return r
  }
}

export class Entity {
  public key: number = 0; //corresponds to the database key, retrieved with JSON from the API
  public entityTypeKey = EnumEntityType.Entity;
  public description = '';
  public activeIs = false;
  public suffix = '';
  listeners: any[] = []
  protected _headingsMap: Map<string, string>;
  private _name: string;
  historyArray = new HistoryArray();
  //constructor(public name: string, public tasksCount: number, public suffix: string, public country: string, public isActive: boolean){}
  constructor(name: string, public data?: DataService) {
    if (!this._headingsMap) this._headingsMap = this.getHeadingsMap();
    this._name = name;
  }

  parseString(text: string): boolean {
    if (text) {
      let o = eval(text);
      let attrs = Object.keys(o)
      attrs.forEach((att)=>{
        this[att] = o[att]
      })
      return true;
    }
    return false;
  }

  updateFieldValue(record: RecordUpdate) {
    this.historyArray.push(record)
    let recent = this.historyArray.getMostRecent(record.fieldName)
    this[recent.fieldName] = recent.value
  }

  get name() {
    return this._name;
  }

  set name(v: string) {
    this._name = v;
  }

  setValue(fieldName:string,value: any){
    this[fieldName] = value
    this.notify(this,fieldName)
  }

  addListener(e:any){
    if (this.listeners.indexOf(e)<0)
      this.listeners.push(e)
  }

  notify(...args:any){
    this.listeners.forEach(e=>{
      e.notify(args)
    })
  }

  get headingsMap() {
    return this._headingsMap;
  }

  get allName() {
    if (this.suffix) {
      return this.name + ' - ' + this.suffix;
    } else return this.name;
  }

  getHeadingsMap(): Map<string, string> {
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

  public click(){
    //child may overwrite this method to execute an action
    // e.g. generate a report, download a file...
    console.log('Clicked',this);
    
  }

  

}
