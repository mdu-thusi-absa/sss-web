import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Entity } from '../../data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';
import { Entities, AnyEntity } from 'src/app/data/data-entities';

@Component({
  selector: 'app-input-select-entity',
  templateUrl: './input-select-entity.component.html',
  styleUrls: ['./input-select-entity.component.css'],
})
export class InputSelectEntityComponent implements OnInit {
  private _title = '';
  @Input () set title(v: string){
    this._title = Entity.sentanceCase(v);
  }
  get title(){
    return this._title;
  }
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  //@Input() values = new Map(); //Map of Entity();
  @Input() values: Entities<AnyEntity>; // = new Entities<EveryEntity>();
  @Input() value = 0;
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showAdd = false;
  @Input() showEdit = false;
  @Input() showDelete = false;
  @Input() showCheck = false;
  @Input() autoFocus = false

  entity: AnyEntity;
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  fullNames = [];
  isDoInput = false;
  //option = 0;
  isAdd = false;
  listFilterText = '';
  isShowingFilter = false;
  @Input() showSmall = false;

  @ViewChild('inputText') inputElement: ElementRef;
  @ViewChild('selectItem') selectItem: ElementRef;

  eid = 'input-select-entity'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  getID() {
    return this.data.getID(this.title);
  }

  isLoadAll = false;
  loadedArray: number[] = [];
  limitVisibleRows = 10;
  loadInterval: any;
  onScrollData(event: any) {
    //this.limitVisibleRows += 50;
    this.isLoadAll = true;
  }

  getDoLoad(key: number) {
    let n = 0;
    if (this.isLoadAll) {
      return true
    }
    else if (key == this.value) return true;
    else {
      n = this.loadedArray.length;
      if (n < this.limitVisibleRows) {
        this.loadedArray.push(key);
      }
    }
    //onscroll
    //on filter
    //on type change
    //on radio
    let r = this.loadedArray.indexOf(key) > -1 || this.isLoadAll;
    return r;
  }

  delayLoader(that: any) {
    //lazy:ngOnInit() <- this.loadInterval = setInterval(this.delayLoader,5000,this);
    if (that.limitVisibleRows < that.values.size) that.limitVisibleRows += 200;
    else {
      clearInterval(that.loadInterval)
      that.isLoadAll = true;
    }
  }

  ngOnInit(): void {
    this.entity = this.values.createEntity();
    if (!this.value) this.value = 0;
    //this.loadInterval = setInterval(this.delayLoader,5000,this);
  }

  // showEdit(){
  //   this.isInput = !this.isInput
  // }

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }

  setItem(entity: AnyEntity) {
    // this.values.sort(function (a, b) {
    //   return a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase());
    // });
    // this.values = new Map([...this.values.entries()].sort(function (a, b) {
    //     return a[1].fullName.toLowerCase().localeCompare(b[1].fullName.toLowerCase());
    //   }));
    //this.valueId = +this.values.indexOf(person).toString());
  }

  sortValues() {
    //this.values = new Map([...this.values.entries()].sort());
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      : false;
  }

  doEdit() {
    this.isLoadAll = true;
    this.isAdd = false;
    //this.text = this.values[+this.option].fullName;
    this.entity = this.values.get(this.value);
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    this.isLoadAll = true;
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.isAdd) {
        //save for a new item
        let i = this.values.size;
        this.values.add(this.entity);
        this.value = i;
        this.isAdd = false;

        let t = this.entity;
        this.onAdd.emit(this.value);
        this.onChange.emit(this.value);
      } else {
        //save for old item

        this.values.edit(this.value, this.entity);
        let id = this.value;
        // this.value = 0;
        // this.value = id;
        
        let t = this.entity;
        this.onEdit.emit({ id, t });
        this.onChange.emit(id);
        setTimeout((that) => {that.value=-1}, 5, this);
        setTimeout((that) => {that.value=id}, 10, this);
      }
      this.values.versionUp();
      //this.setItem(this.person);
    } else {
      //new is clicked
      this.isAdd = true;
      this.entity = this.values.createEntity();
    }
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  setFocus() {
    // setTimeout(() => {
    //   this.inputElement.nativeElement.focus();
    //   // this will make the execution after the above boolean has changed
    //   //this.searchElement.nativeElement.focus();
    // }, 0);
  }

  doFilter(event: any) {
    this.listFilterText = event.toLowerCase();
    this.isLoadAll = true;
    this.clickSelect();
  }

  clickSelect() {
    // setTimeout(function() {
    //   this.selectItem('click');
    // });
  }

  doTask() {
    this.onTask.emit(this.title);
  }

  showingFilter(event: any) {
    this.isShowingFilter = event;
  }

  doDelete() {
    if (this.values.size > 0) {
      let r = confirm(
        'Are you sure you want to delete this ' + this.title + '?'
      );
      if (r) {
        this.values.del(this.value);
        this.value = this.values.all_keys[0];
        this.onSelect.emit(this.value);
        this.values.versionUp();
      }
    }
  }

  //doEdit() {
  // this.isAdd = false;
  // this.text = this.values[+this.option];
  // // if (!this.isDoInput) this.setFocus();
  // this.isDoInput = !this.isDoInput;
  //this.showEdit();
  //}

  doAdd() {
    this.showNew();
  }

  doSave() {
    //this.text = event;
    //this.entity.name = event;
    this.showNew();
  }

  doCancel() {
    this.isDoInput = false;
  }

  doChangeInputText(event: any) {
    this.entity.name = event;
  }

  doChange(event: any) {
    this.value = +event;
    //this.values.currentKey = this.value;
    this.onSelect.emit(this.value);
    this.onChange.emit(this.value);
  }

  //(keyup)="doKeyUp($event)"
  doKeyUp(event: any) {
    if (event.key === 'Escape') {
      //this.value = this.defaultValue;
      this.doCancel();
    } else if (event.key === 'Enter') {
      this.doSave();
    }
  }

  countItems() {
    let r = 0;
    if (!this.listFilterText) {
      r = this.values.size;
    } else {
      let v = this.values.all_values;
      for (let i = 0; i < this.values.size; i++) {
        let e: AnyEntity = v[i];
        if (e) {
          if (!this.hideItem(e)) {
            r = r + 1;
          }
        }
      }
    }
    return r;
    //let v = this.values.all_values;
    //v.filter((e) => !this.hideItem(e)).length;
  }

  hideItem(entity: AnyEntity) {
    let r = false;
    if (this.listFilterText) {
      if (entity != undefined)
        r =
          entity.name
            .toLowerCase()
            .indexOf(this.listFilterText.toLowerCase()) === -1;
    }
    return r;
  }
}
