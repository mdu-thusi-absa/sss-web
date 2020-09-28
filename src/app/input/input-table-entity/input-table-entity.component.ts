import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnyEntity, Entities } from 'src/app/data/data-entities';
import { DataService } from 'src/app/data/data.service';
import { EnumEntityType } from 'src/app/data/data-entity-types';
import { EntityAddress } from 'src/app/data/data-entity-kids';

@Component({
  selector: 'app-input-table-entity',
  templateUrl: './input-table-entity.component.html',
  styleUrls: ['./input-table-entity.component.css'],
})
export class InputTableEntityComponent implements OnInit {
  _entity: AnyEntity;
  // @Input() entityTypeKey: EnumEntityType;
  entityTypeKey: EnumEntityType;
  @Input() noPadding = false;
  headingsMap = new Map(); //lists headings in th
  headings: string[] = [];
  fields: string[] = [];
  values: any[] = [];
  private _filterText = '';
  showFilter = false

  isHiddenMap = new Map();
  countFiltered = 0;
  //countSelected = 0;
  //@Input() inputType = 'file';

  eid = 'input-table-entity';
  constructor(public data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  @Input() set entity(v: AnyEntity) {
    this._entity = v;
    this._entity.addListener(this);
    this.loadValues();
  }

  get entity() {
    return this._entity;
  }

  ngOnInit(): void {
    this.headingsMap = this.entity.headingsMap;
    this.headings = Array.from(this.headingsMap.values());
    this.fields = Array.from(this.headingsMap.keys());
    this.countFiltered = this.headings.length;
    this.loadValues();
    this.showFilter = this.fields.length>9
  }

  notify(...args) {
    try {
      
      let fieldName_Updated = args[0][1];
      this.loadValue_Specific(fieldName_Updated)
      if (this.showFilter)
        this.filterText = this.headings[this.fields.indexOf(fieldName_Updated)];
    } catch (e) {
      console.log('Failed to reload on notify', args, e);
    }
  }

  loadValue_Specific(fieldName: string){
    if (this.entity) {
      let i = this.fields.indexOf(fieldName)
      this.values[i] = ''
      this.values[i] = this.getFieldValue(fieldName)
    }
  }



  loadValues() {
    if (this.entity) {
      this.values = [];
      for (let i = 0; i < this.fields.length; i++) {
        this.values.push(this.getFieldValue(this.fields[i]));
      }
    }
  }

  getFieldValue(
    fieldName: string
  ): string | Entities<AnyEntity> | EntityAddress {
    let d = this.data.getEntityFieldTextOrEntity(this.entity, fieldName);
    return d;
  }

  getType(v: any) {
    return typeof v;
  }

  set filterText(v: string) {
    if (v != this._filterText) {
      this._filterText = v;
      this.setCounts();
    }
  }
  get filterText() {
    return this._filterText;
  }

  getDoLoad(e: AnyEntity) {
    return true;
  }

  hideItem(value: string) {
    if (this.filterText.length == 0) return false;
    if (typeof value === 'object') return true;
    else
      return value.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

  calcIsHidden() {
    if (this.entity) {
      this.isHiddenMap = new Map();

      for (let i in this.fields) {
        this.isHiddenMap.set(
          +i,
          this.hideItem(this.values[i]) && this.hideItem(this.headings[i])
        );
      }
    }
  }

  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
  }

  getCountFiltered() {
    if (this._filterText) {
      if (this.entity) {
        return [...this.isHiddenMap.values()].filter((e) => !e).length;
      }
    } else {
      return this.values.length;
    }
  }

}
