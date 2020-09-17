import { Entity } from './data-entity-parent';
import {
  EntityCity,
  EntityFunctional,
  EntityUser,
  EntityLegal,
  EntityNatural,
  EntityCompany,
  EntityContact,
  EntityPostalAddress,
  EntityPhysicalAddress,
  EntityType,
  EntityMeeting,
  EntityWorkflow,
  EntityShareCertificate,
  EntityFile,EntityFileDownload, EntityFileUpload
} from './data-entity-kids';

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
  | EntityWorkflow
  | EntityFile
  | EntityFileDownload
  | EntityFileUpload

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

  selectFirst(fieldName: string, equalTo: any):AnyEntity{
    let ets = this.select(fieldName, equalTo)
    return ets.firstValue
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

  get firstValue(){
    return this.get(this.firstKey)
  }

  add(value: T): Entities<T> {
    let key = this.lastKey + 1;
    if (value.key) key = value.key;
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

// export class EntitiesFile extends Entities<EntityFile>{
//   constructor(public fieldName: string, public heading: string) {
//     super(EntityFile)
//   }
// }
