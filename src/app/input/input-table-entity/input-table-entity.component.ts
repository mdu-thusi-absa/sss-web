import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnyEntity, Entities } from 'src/app/data/data-entities';
import { DataService } from 'src/app/data/data.service';
import {EnumEntityType} from 'src/app/data/data-entity-types'

@Component({
  selector: 'app-input-table-entity',
  templateUrl: './input-table-entity.component.html',
  styleUrls: ['./input-table-entity.component.css'],
})
export class InputTableEntityComponent implements OnInit {
  entity_: AnyEntity;
  // @Input() entityTypeKey: EnumEntityType;
  entityTypeKey: EnumEntityType
  @Input() noPadding = false;
  headingsMap = new Map(); //lists headings in th
  headings: string[] = [];
  fields: string[] = [];
  values: any[] = [];
  filterText_ = '';
  

  isHiddenMap = new Map();
  countFiltered = 0;
  //countSelected = 0;
  //@Input() inputType = 'file';

  eid = 'input-table-entity';
  constructor(public data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  @Input() set entity(entity_: AnyEntity) {
    this.entity_ = entity_;
    this.loadValues();
  }

  ngOnInit(): void {
    // this.entities.forEach((value, key, map) => {
    //   this.hideEditRow.set(key, true);
    //   this.isChecked.set(key,false);
    // });
    // console.log(this.entity_,this.entity_.type);
    // this.entityTypeKey = this.entity_.type
    this.headingsMap = this.entity_.headingsMap;
    // console.log(this.entityTypeKey);
    this.headings = Array.from(this.headingsMap.values());
    this.fields = Array.from(this.headingsMap.keys());
    this.countFiltered = this.headings.length;
    this.loadValues();
  }

  loadValues() {
    if (this.entity_) {
      this.entity_;
      this.values = [];
      for (let i = 0; i < this.fields.length; i++) {
        this.values.push(this.getFieldValue(this.fields[i]));
      }
    }
  }


  getFieldValue(fieldName: string):string|Entities<AnyEntity> {
    let d = this.data.getEntityFieldValue(this.entity_,fieldName) 
    // console.log(fieldName,d)
    return d
  }

  getType(v: any) {
    return typeof v;
  }

  set filterText(v: string) {
    if (v != this.filterText_) {
      this.filterText_ = v;
      this.setCounts();
    }
  }
  get filterText() {
    return this.filterText_;
  }

  // checkForAll(checkValue: boolean){
  //   this.isChecked.forEach((value: boolean, key: number) => {
  //     this.isChecked.set(key, checkValue);
  //   });
  //   this.countSelected = this.getCountSelected();
  // }

  // checkItem(key: number, checkValue: boolean){
  //   this.countSelected = this.countSelected + (checkValue ? 1:-1);
  //   this.isChecked.set(key,checkValue)
  // }

  // checkField(key: number, checkValue: boolean,fieldName: string){
  //   this.entities.get(key).set(fieldName,checkValue);
  // }

  // doEntityChoose(key: number) {
  //   //do something when a row has been selected
  //   let visible = true;
  //   if (this.hideEditRow.has(key)) visible = this.hideEditRow.get(key);
  //   visible = !visible;
  //   this.hideEditRow.set(key, visible);
  // }

  getDoLoad(e: AnyEntity) {
    return true;
  }

  hideItem(value: string) {
    // console.log(this.filterText);
    if (this.filterText.length == 0) return false;
    // console.log(fieldName, this.entity[fieldName]);
    if (typeof value === 'object')
      return true
    else
      return value.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

  calcIsHidden() {
    if (this.entity_) {
      this.isHiddenMap = new Map();

      for (let i in this.fields) {
        this.isHiddenMap.set(
          +i,
          this.hideItem(this.values[i]) && this.hideItem(this.headings[i])
        );
      }
      // console.log(this.isHiddenMap);
      // this.entity.forEach((value: EveryEntity, key: number) => {
      //   this.isHiddenMap.set(key, this.hideItem(value));
      // });
    }
  }

  setCounts() {
    // console.log('setCounts');

    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
    //this.countSelected = this.getCountSelected();
  }

  getCountFiltered() {
    if (this.filterText_) {
      if (this.entity_) {
        return [...this.isHiddenMap.values()].filter((e) => !e).length;
      }
    } else {
      return this.values.length;
    }
  }

  // getCountSelected() {
  //   if (this.entities) {
  //     return [...this.isChecked.values()].filter((e) => e).length;
  //   } else {
  //     return 0;
  //   }
  // }
}
