import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EveryEntity, EnumEntityType } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-table-entity',
  templateUrl: './input-table-entity.component.html',
  styleUrls: ['./input-table-entity.component.css'],
})
export class InputTableEntityComponent implements OnInit {
  entity_: EveryEntity;
  @Input() source: EnumEntityType;
  headingsMap = new Map(); //lists headings in th
  headings: string[] = [];
  fields: string[] = [];
  values: any[] = [];
  filterText_ = '';

  isHiddenMap = new Map();
  countFiltered = 0;
  //countSelected = 0;
  //@Input() inputType = 'file';

  eid = 'input-table';
  constructor(public data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  ngOnInit(): void {
    // this.entities.forEach((value, key, map) => {
    //   this.hideEditRow.set(key, true);
    //   this.isChecked.set(key,false);
    // });
    this.headingsMap = this.data.getEntityHeadingsMap(this.source);
    this.headings = Array.from(this.headingsMap.values());
    this.fields = Array.from(this.headingsMap.keys());
    this.countFiltered = this.headings.length;
    this.loadValues();
    // console.log(this.fields.length,this.values.length);
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

  @Input() set entity(entity_: EveryEntity) {
    this.entity_ = entity_;
    this.loadValues();
  }

  getFieldValue(fieldName: string) {
    if (this.entity_) {
      let v = this.entity_[fieldName];
      if (fieldName.slice(-3) == 'Key') {
        let d = this.data.getEntitiesByKeyField(fieldName);
        if (d) {
          if (d.has(+v)) {
            return d.get(+v).name;
          } else return 'Not set';
        } else {
          return 'Empty list';
        }
      } else if (fieldName.slice(-4) == 'Keys') {
        let L = fieldName.length;
        let fName = fieldName.slice(0, L - 1);
        let d = this.data.getEntitiesByKeyField(fName, [], [0, 1]);
        return d;
      } else if (typeof v === 'boolean') {
        if (v) return 'Yes';
        else return 'No';
      } else {
        if (v != null) return v + '';
        else return 'Not set';
      }
    }
    return '';
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

  getDoLoad(e: EveryEntity) {
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
