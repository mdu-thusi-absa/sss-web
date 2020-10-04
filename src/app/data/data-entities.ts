import { Entity } from './data-entity-parent';
import {
  EntityCity,
  EntityFunctional,
  EntityUser,
  EntityLegal,
  EntityNatural,
  EntityCompany,
  EntityContact,
  EntityType,
  EntityMeeting,
  EntityWorkflow,
  EntityShareCertificate,
  EntityFile,
  EntityFileDownload,
  EntityFileUpload,
  EntityAddress,
  EntityCommittee,
} from './data-entity-kids';
import { DataService } from './data.service';
import { objectHasAttribute } from './utils-scripts';

export type AnyEntity =
  | Entity
  | EntityCity
  | EntityFunctional
  | EntityUser
  | EntityLegal
  | EntityNatural
  | EntityCompany
  | EntityContact
  | EntityType
  | EntityMeeting
  | EntityShareCertificate
  | EntityWorkflow
  | EntityFile
  | EntityFileDownload
  | EntityFileUpload
  | EntityAddress
  | EntityCommittee;

export class Entities<T extends AnyEntity> extends Map<number, T> {
  _currentKey = -1;
  _currentValue: T = null;
  staticIs = true; //should not allow changes, otherwise redirect to DB
  private inFilterMap = new Map();
  private _filterText = '';
  private _onlyActive = true;
  private _countInFilter = 0;
  private _version = 0;
  private _firstKey = -1;
  private _lastKey = -1;
  private _firstKeyInFilter = -1;
  private _lastKeyInFilter = -1;

  constructor(private EntityType, public data?: DataService) {
    super();
  }

  select(
    fieldName: string,
    equalTo: any,
    doEqualOrNot: boolean = true
  ): Entities<T> {
    let ets = new Entities<T>(this.EntityType);
    ets.data = this.data;
    this.forEach((value, key, map) => {
      if (typeof equalTo == 'function') {
        if (equalTo(value[fieldName])) {
          let a = this.createEntity();
          a = Object.assign(a, value);
          ets.add(a);
        }
      } else {
        if (_doSelect(value, fieldName, equalTo, doEqualOrNot)) {
          let a = this.createEntity();
          a = Object.assign(a, value);
          ets.add(a);
        }
      }
    });
    return ets;

    function _doSelect(
      value: T,
      fieldName: string,
      equalTo: any,
      doEqualOrNot: boolean
    ): boolean {
      if (doEqualOrNot) {
        if (typeof equalTo == 'string') {
          return (
            (value[fieldName] as string).toLowerCase() === equalTo.toLowerCase()
          );
        } else return value[fieldName] === equalTo;
      } else return value[fieldName] !== equalTo;
    }
  }

  selectFirst(fieldName: string, equalTo: any): AnyEntity {
    let ets = this.select(fieldName, equalTo);
    return ets.firstValue;
  }

  get firstKey() {
    if (this._firstKey < 0 && this.size > 0) {
      this._firstKey = this.all_keys[0];
    }
    return this._firstKey;
  }

  get lastKey() {
    return this._lastKey;
  }

  get firstKeyInFilter() {
    return this._firstKeyInFilter == -1
      ? this.firstKey
      : this._firstKeyInFilter;
  }

  get lastKeyInFilter() {
    return this._lastKeyInFilter == -1 ? this.lastKey : this._lastKeyInFilter;
  }

  get version() {
    return this._version;
  }
  //increment version
  versionUp() {
    this._version += 1;
  }

  getClearCopy() {
    let e = new Entities<T>(this.EntityType);
    return e;
  }

  clone() {
    let e = new Entities<T>(this.EntityType);
    e.data = this.data;
    this.forEach((value, key, map) => {
      e.add(value);
    });
    return e;
  }

  get countInFilter() {
    if (this._filterText == '') return this.size;
    else {
      return this._countInFilter;
    }
  }

  filter(filterText: string, onlyActive: boolean): Entities<T> {
    this._filterText = filterText;
    this._onlyActive = onlyActive;
    let ets = new Entities<T>(this.EntityType);
    this.inFilterMap = new Map();
    this._countInFilter = 0;
    this.forEach((value, key, map) => {
      if (value.inFilter(this._filterText, this._onlyActive)) {
        let a = this.createEntity();
        a = Object.assign(a, value);
        ets.add(a);
        this.inFilterMap.set(key, true);
        this._countInFilter += 1;
        if (this._firstKeyInFilter == -1) this._firstKeyInFilter = key;
        this._lastKeyInFilter = key;
      } else {
        this.inFilterMap.set(key, false);
      }
    });
    return ets;
  }

  inFilter(key: number, viewAll: boolean) {
    if (this._filterText == '') {
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
    let o = new this.EntityType();
    o['data'] = this.data;
    return o;
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
      //deal with Dates
      if (setType) a.type = setType;
      this.add(a);
    }

    function _dealConvertJsonToObjects(
      that: Entities<AnyEntity>,
      entity: object
    ): object {
      let attrs = Object.keys(entity);
      attrs.forEach((att) => {
        if (_needsConvertingToDate(entity, att)) {
          entity[att] = _strToDate(entity[att]);
        } else if (_needsConvertingToAddress(entity, att)) {
          // entity[att] = _strToAddress(that,entity[att])
        }
      });
      return entity;
      function _needsConvertingToDate(entity: object, fieldName: string) {
        return (
          fieldName.slice(-4) == 'Date' && typeof entity[fieldName] == 'string'
        );
      }
      function _strToDate(text: string): Date {
        return new Date(text);
      }
      function _needsConvertingToAddress(entity: object, fieldName: string) {
        return (
          fieldName.slice(-4) == 'Date' && typeof entity[fieldName] == 'string'
        );
      }
      function _strToAddress(that: Entities<Entity>, text: string): Entity {
        let a = new Entity('');
        if (text) {
          a.parseString(text);
        }
        return a;
      }
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
    if (this.size > 0 && this._currentKey < 0) {
      this._currentKey = this.all_keys[0];
    }
    return this._currentKey;
  }

  set currentKey(v: number) {
    this._currentKey = v;
    this._currentValue = this.get(this._currentKey);
  }

  get currentValue() {
    if (this._currentKey == -1 && this.size > 0) {
      this.currentKey = this.all_keys[0];
    }
    return this._currentValue;
  }

  get firstValue() {
    return this.get(this.firstKey);
  }

  add(value: T): Entities<T> {
    let key = this.lastKey + 1;
    if (objectHasAttribute(value,'key'))
      key = value.key
    //if (value.key>-1) 
    else value.key = key;
    if (this._firstKey == -1) this._firstKey = value.key;
    value['data'] = this.data;
    this._lastKey = key;
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

  private _init() {
    super.clear();
    this._firstKey = -1;
    this._lastKey = -1;
    this._filterText = '';
    this._countInFilter = 0;
    this._version = 0;
    this._lastKey = -1;
    this._firstKeyInFilter = -1;
    this._lastKeyInFilter = -1;
  }

  public sort() {
    if (this.size > 1) {
      let v = this.all_values;
      v.sort(Entity.compare);
      this._init();
      v.forEach((value)=>{
        this.add(value);
      })
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

// export class EntitiesFile extends Entities<EntityFile>{
//   constructor(public fieldName: string, public heading: string) {
//     super(EntityFile)
//   }
// }
