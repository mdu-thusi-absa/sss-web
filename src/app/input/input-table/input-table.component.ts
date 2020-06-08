import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entities, EveryEntity } from 'src/app/models';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.css']
})
export class InputTableComponent implements OnInit {
  @Input() headings: string[] = []; //lists headings in th
  @Input() fields: string[] = []; //lists attribute names from the objects to show
  @Input() entities: Entities<EveryEntity>;
  @Input() selectedEntityKey: number;
  isHiddenMap = new Map();
  hideEditRow = new Map();
  @Input() inputType = 'file'

  constructor() { }

  ngOnInit(): void {
    this.entities.forEach((value,key,map) => {this.hideEditRow.set(key,true)})
  }

  doEntityChoose(key: number){
    //do something when a row has been selected
    let visible = true;
    if (this.hideEditRow.has(key))
      visible = this.hideEditRow.get(key);
    visible = !visible;
    this.hideEditRow.set(key,visible);
  }

  getDoLoad(e: EveryEntity){
    return true;
  }

}
