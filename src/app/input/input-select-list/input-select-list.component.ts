import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from '../../data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';
import { Entities, AnyEntity } from 'src/app/data/data-entities';
import * as S from '../../data/utils-scripts'

@Component({
  selector: 'app-input-select-list',
  templateUrl: './input-select-list.component.html',
  styleUrls: ['./input-select-list.component.css'],
})
export class InputSelectListComponent implements OnInit {
  @Input() value: number;
  @Input() values: Entities<AnyEntity>;
  @Input() showHeading = true;
  @Output() onSelect = new EventEmitter();
  selectedEntityKey: number;
  isHiddenMap: Map<number, boolean> = new Map();
  lastVisibleKey: number;
  firstVisibleKey: number;
  keys: number[] = [];
  keysVisisble: number[] = [];

  eid = 'input-select-list';
  constructor(private data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  ngOnInit(): void {
    this.firstVisibleKey = this.values.firstKey;
    this.lastVisibleKey = this.values.lastKey;
    if (this.autoFocus) this.setFocus_FirstElement();
    this.countFiltered = this.values.size;
    this.keys = this.values.all_keys;
    this.keys.sort();
    if (this.keys.length > 0) this.selectedEntityKey = this.keys[0];
    this.calcIsHidden()
  }

  doEnter() {
    this.doSelect(this.selectedEntityKey);
  }
  doArrowDown() {
    let i = this.keysVisisble.indexOf(this.selectedEntityKey);
    if (i < this.keys.length - 1) {
      i++;
      this.selectedEntityKey = this.keysVisisble[i];
      this.setFocusOnSelecetedElement()
    }
  }
  doArrowUp() {
    let i = this.keysVisisble.indexOf(this.selectedEntityKey);
    if (i > 0) {
      i--;
      this.selectedEntityKey = this.keysVisisble[i--];
      this.setFocusOnSelecetedElement()
    }
  }

  setFocusOnSelecetedElement(){
    let topPos = this.keysVisisble.indexOf(this.selectedEntityKey) * 31 //height of row
    setTimeout(S.updateElementScroll, 50,'table-content-' + this.eid,topPos)
  } 

  version = 0;
  doSelect(key: number) {
    this.value = key;
    this.onSelect.emit(key);
    this.version++;
    this.filterText = '';
  }

  doFilter(event: string){
    this.filterText = event
  }

  _filterText = '';
  set filterText(v: string) {
    if (v != this._filterText) {
      this._filterText = v;
      this.setCounts();
    }
  }
  get filterText() {
    return this._filterText;
  }

  countFiltered = 0;
  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
  }

  getCountFiltered() {
    if (this._filterText) {
      if (this.values) {
        return [...this.isHiddenMap.values()].filter((e) => !e).length;
      }
    } else {
      return this.values.size;
    }
  }

  initVisibles() {
    this.keysVisisble = [];
    this.firstVisibleKey = -1;
    this.lastVisibleKey = -1;
  }

  calcIsHidden() {
    if (this.values) {
      this.isHiddenMap = new Map();
      this.initVisibles();
      for (let i = 0; i < this.keys.length; i++) {
        const key = this.keys[i];
        const value = this.values.get(key);
        let hide = this.hideItem(value.name);
        if (this.isFilterTextInStepNumber(i)) hide = false;
        this.isHiddenMap.set(key, hide);
        if (!hide) this.setKeysOfVisibleItems(key);
      }
    }
  }

  setKeysOfVisibleItems(key: number) {
    this.keysVisisble.push(key);
    this.lastVisibleKey = key;
    if (this.firstVisibleKey == -1) this.firstVisibleKey = key;
    this.selectedEntityKey = this.firstVisibleKey;
  }

  isFilterTextInStepNumber(step: number): boolean {
    if (Number(this.filterText))
      if ((step + 1 + '').indexOf(this.filterText) > -1) return true;
  }

  hideItem(value: string) {
    if (this.filterText.length == 0) return false;
    return value.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

  _autoFocus = false;
  @Input() set autoFocus(v: boolean) {
    this._autoFocus = v;
    if (v) {
      this.setFocus_FirstElement();
    }
  }

  a_doKeyDown(key: number, event: any) {
    let c = event.key;
    if (c == 'Tab') {
      if (key == this.lastVisibleKey) {
        this.setFocus_FirstElement();
        event.preventDefault();
      }
    } else if (c == 'Escape') {
      this.filterText = '';
    }
  }

  setFocus_FirstElement() {
    if (!this.showFilter) {
      if (this.firstVisibleKey) this.setFocus_Item(this.firstVisibleKey);
    } else {
      this.setFocus_Filter();
    }
  }

  setFocus_Item(key: number) {
    setTimeout(() => {
      document.getElementById(this.eid + '-a-' + key).focus();
    }, 0);
  }

  get showFilter() {
    return true; //this.values.size >= 10;
  }

  autoFocus_filter = false;
  setFocus_Filter() {
    this.autoFocus_filter = false;
    if (this.autoFocus && this.showFilter) {
      setTimeout(() => {
        this.autoFocus_filter = false;
      }, 0);
      setTimeout(() => {
        this.autoFocus_filter = true;
      }, 1);
    }
  }

  get autoFocus() {
    return this._autoFocus;
  }
}
