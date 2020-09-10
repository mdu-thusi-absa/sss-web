import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import {EnumEntityType} from 'src/app/data/data-entity-types'
import { EntityNatural } from 'src/app/data/data-entity-kids';
import { Entities, AnyEntity } from 'src/app/data/data-entities';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css'],
})
export class EntityDetailsComponent implements OnInit {
  filterText = '';
  isCountryInput = false;
  isPositionInput = false;
  @Input() isNarrow = false;
  @Input() hidePrimary = false;
  @Input() hideSecondary = false;
  @Input() hideOptional = false;
  @Input() hideCustom = false;
  @Input() hideFiles = false;
  @Input() hideHeader = false;
  @Input() hideUsers = false;
  @Input() hideContacts = false;
  @Input() hideMeetings = false;
  @Input() hideReminders = false;
  @Input() hideReports = false;
  persons: Entities<EntityNatural>;
  @Input() panelRows = 1;
  entityType_ = -1;
  entityType_T = -2;
  entityTypeName_ = '';
  @Input() entityTypes = this.data.entityTypes;
  @Input() entityKey = -1;
  entityKeyT = -1;
  private entity_: AnyEntity;
  private entity_BackUp: AnyEntity;
  entities: Entities<AnyEntity>;
  dirty = false;
  isPageLoaded: string[] = [];
  isPageLoaded_CalledToLoad: string[] = [];
  isPageLoaded_index = 0;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  constructor(public data: DataService) {}

  // isType(entityTypeKey: EnumEntityType,typeName: string): boolean{
  //   return this.entityTypes.get(entityTypeKey).name == typeName;
  // }


  // dashboardKey_ = 0;
  // @Input() set dashboardKey(v: number){
  //   this.dashboardKey_ = v;
  //   this.entityType_ = v - 2;
  // }

  entityTypeKey_: EnumEntityType = EnumEntityType.Company;
  @Input() set entityTypeKey(v: EnumEntityType) {
    this.entityTypeKey_ = v;
    // console.log('entity-details','set entityTypeKey',this.entityTypeKey_);
    
    this.entities = this.data.getEntities(this.entityTypeKey_);

    this.entityTypeName_ = this.data.entityTypes
      .get(this.entityTypeKey_)
      .name.toLowerCase();
  }

  entityKey_ = -1;

  // set @Input() entityKey (v: number) {
  //   this.entityKey_ = v;
  //   this.entity = this.entities.get(this.entityKey_)
  // };

  get entityTypeKey() {
    return this.entityTypeKey_;
  }

  get entityTypeName(): string {

    if (this.entityType_ != this.entityType_T) {
      this.entityTypeName_ = this.data.entityTypes
        .get(this.entityTypeKey)
        .name.toLowerCase();
      this.entityType_T = this.entityType_;
    }
    return this.entityTypeName_;
  }

  get entityTypeNameCapitilised(): string {
    let t = this.entityTypeName;
    return t.slice(0, 1).toUpperCase() + t.slice(1);
  }

  ngOnInit(): void {
    // this.persons = this.data.getIndividuals();
    //this.entities = this.data.getFunctionalEntitiesAll();
    // console.log('entity-details','ngOnInit',this.entityTypeKey);
    this.entities = this.data.getEntities(this.entityTypeKey);
    this.entityTypes = this.data.entityTypes;

    if (this.entityKey < 0) {
      this.entityKey = this.entities.firstKey;
    }
    if (this.data.lg)
      console.log(new Date().getTime(), 'loaded:entities-details');
    this.data.progress += 1;
  }

  getIsLoaded(keyType: string, keyPage: string) {
    let setTo = true;
    if (keyType == 'entities') setTo = true;
    else setTo = this.entityTypeName == keyType;

    let key = keyType + '-' + keyPage;
    let r: boolean;
    if (setTo) {
      r = setTo;
      if (this.isPageLoaded.indexOf(key) < 0) {
        this.isPageLoaded.push(key);
      }
    } else {
      r = this.isPageLoaded.indexOf(key) > -1;
      //if not loaded load later
      if (!r)
        if (this.isPageLoaded_CalledToLoad.indexOf(key) == -1) {
          this.isPageLoaded_CalledToLoad.push(key);
          if (this.isPageLoaded.indexOf(key) == -1) {
            this.isPageLoaded_index += 1;
            setTimeout(
              this.delayLoader,
              this.isPageLoaded_index * 1000,
              key,
              this.isPageLoaded
            );
          }
        }
    }
    return r;
  }

  delayLoader(key: string, isPageLoaded: string[]) {
    if (isPageLoaded.indexOf(key) == -1) isPageLoaded.push(key);
  }

  entityTypeKeyT: number = -1;
  get entity(): AnyEntity {
    if (
      this.entityKeyT != this.entityKey ||
      this.entityTypeKeyT != this.entityTypeKey
    ) {

      if (!this.entities.has(this.entityKey)) {
        this.entityKey = this.entities.firstKey;
      } else this.entity_ = this.entities.get(this.entityKey).copy();

      this.entity_BackUp = this.entity_.copy();
      this.entityKeyT = this.entityKey;
      this.entityTypeKeyT = this.entityTypeKey;
    }

    return this.entity_;
  }

  doSave() {
    let t = this.entities.get(this.entityKey);
    t = Object.assign(t, this.entity_);
    this.dirty = false;
  }

  doCancel() {
    this.entity_ = this.entities.get(this.entityKey).copy();
    this.entity_BackUp = this.entity_.copy();
    this.dirty = false;
  }

  getEntityName() {
    return this.entity ? this.entity.name : '';
  }

  setEntityName(v: string) {
    this.entity.name = v;
    this.dirty = true;
  }

  setSurname(v: string) {
    this.entity['surname'] = v;
    this.dirty = true;
  }

  setFirstName(v: string) {
    this.entity['firstName'] = v;
    this.dirty = true;
  }

  getSurname() {
    if (this.entity) {
      return this.entity['surname'];
    } else {
      return '';
    }
  }

  getFirstName() {
    if (this.entity) {
      return this.entity['firstName'];
    } else {
      return '';
    }
  }

  doFilter(event: any) {
    this.filterText = event;
  }

  doFile(inputTitle: string) {
    this.onFile.emit(inputTitle);
  }

  doRecord(inputTitle: string) {
    this.onRecord.emit(inputTitle);
  }

  doTask(inputTitle: string) {
    this.onTask.emit(inputTitle);
  }

  hideByFilter(caption: string) {
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

  isFullScreen(): boolean {
    return this.panelRows == 0 ? true : this.panelRows === 1;
  }

  isHalfScreen(): boolean {
    return this.panelRows == 0 ? false : this.panelRows === 2;
  }

  isThirdScreen(): boolean {
    return this.panelRows === 3;
  }

  showCountryEdit() {
    this.isCountryInput = !this.isCountryInput;
  }

  showCountryNew() {
    this.isCountryInput = !this.isCountryInput;
  }

  showPositionEdit() {
    this.isPositionInput = !this.isPositionInput;
  }

  showPositionNew() {
    this.isPositionInput = !this.isPositionInput;
  }

  // doChangeEntityType(event: any) {
  //   this.entityType = +event;
  // }
}
