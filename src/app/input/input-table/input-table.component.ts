import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entities, EveryEntity } from 'src/app/models';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.css'],
})
export class InputTableComponent implements OnInit {
  @Input() headings: string[] = []; //lists headings in th
  @Input() fields: string[] = []; //lists attribute names from the objects to show
  @Input() entities: Entities<EveryEntity>;
  @Input() selectedEntityKey: number;
  @Input() withCheckbox = 'false';
  filterText_ = '';

  isHiddenMap = new Map();
  isChecked = new Map();
  hideEditRow = new Map();
  countFiltered = 0;
  countSelected = 0;
  @Input() inputType = 'file';

  constructor() {}

  ngOnInit(): void {
    this.entities.forEach((value, key, map) => {
      this.hideEditRow.set(key, true);
      this.isChecked.set(key,false);
    });
    this.countFiltered = this.entities.size;
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

  checkForAll(checkValue: boolean){
    this.isChecked.forEach((value: boolean, key: number) => {
      this.isChecked.set(key, checkValue);
    });
    this.countSelected = this.getCountSelected();
  }

  checkItem(key: number, checkValue: boolean){
    //console.log(key,checkValue);
    this.countSelected = this.countSelected + (checkValue ? 1:-1);
    this.isChecked.set(key,checkValue)
  }

  doEntityChoose(key: number) {
    //do something when a row has been selected
    let visible = true;
    if (this.hideEditRow.has(key)) visible = this.hideEditRow.get(key);
    visible = !visible;
    this.hideEditRow.set(key, visible);
  }

  getDoLoad(e: EveryEntity) {
    return true;
  }

  hideItem(entity: EveryEntity) {
    if (this.filterText.length == 0) return false;
    return (
      entity.name.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1 &&
      entity.description.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
    );
  }

  calcIsHidden() {
    if (this.entities) {
      this.isHiddenMap = new Map();

      this.entities.forEach((value: EveryEntity, key: number) => {
        this.isHiddenMap.set(key, this.hideItem(value));
      });
    }
  }

  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
    this.countSelected = this.getCountSelected();
  }

  getCountFiltered() {
    if (this.entities) {
      return [...this.isHiddenMap.values()].filter((e) => !e).length;
    } else {
      return 0;
    }
  }

  getCountSelected() {
    if (this.entities) {
      return [...this.isChecked.values()].filter((e) => e).length;
    } else {
      return 0;
    }
  }
}
