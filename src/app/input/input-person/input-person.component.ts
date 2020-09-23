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
import { AnyEntity, Entities } from 'src/app/data/data-entities';
import { EntityNatural } from 'src/app/data/data-entity-kids';

@Component({
  selector: 'app-input-person',
  templateUrl: './input-person.component.html',
  styleUrls: ['./input-person.component.css'],
})
export class InputPersonComponent implements OnInit {
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() values: Entities<AnyEntity>; //Person[];
  @Input() value = -1;
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showAdd = true;
  @Input() showEdit = true;
  @Input() showDelete = true;
  @Input() showCheck = false;

  person = new EntityNatural('', '', '');
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  fullNames = [];
  isDoInput = false;
  option = 0;
  isAdd = false;
  listFilterText = '';
  isShowingFilter = false;

  @ViewChild('inputText') inputElement: ElementRef;
  @ViewChild('selectItem') selectItem: ElementRef;

  eid = 'input-person'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  getID() {
    return this.data.getID(this.title);
  }

  isLoadAll = false;
  loadedArray: number[] = [];
  limitVisibleRows = 10;
  onScrollData(event:any) {
    //this.limitVisibleRows += 50;
    this.isLoadAll = true;
  }

  getDoLoad(key: number) {
    let n = 0;
    if (this.isLoadAll) return true;
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

  ngOnInit(): void {
    if (this.values) {
      if (this.value) {
        this.value = this.values.currentKey;
      }
      if (this.value < 0) {
        this.value = this.values.currentKey;
      }
      if (this.values.all_keys.indexOf(this.value)<0){
        this.value = this.values.currentKey;
      }
    }

    
    
    
    

  

    // for (let i = 0; i < this.values.size; i++) {
    //   this.fullNames.push(this.values[i].fullName);
    // }
    // for (let v of this.values.values()) {
    //   this.fullNames.push(v.fullName);
    // }
    //this.setItem(this.value);
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

  setItem(person: EntityNatural) {
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
    this.isAdd = false;
    this.person = this.values.get(this.value) as EntityNatural;
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
        this.values.set(i, this.person);
        this.value = i;
        this.isAdd = false;
        this.onAdd.emit(this.value);
        this.onChange.emit(this.value);
      } else {
        //save for old item
        this.values.set(this.value, this.person);
        let id = this.value;
        let t = this.person;
        this.onEdit.emit({ id, t });
        this.onChange.emit(t);
        setTimeout((that) => {that.value=-1}, 5, this);
        setTimeout((that) => {that.value=id}, 10, this);
      }
      //this.setItem(this.person);
      this.values.versionUp();
    } else {
      //new is clicked
      this.isAdd = true;
      this.person = new EntityNatural('', '', '');
    }
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  setFocus() {
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
      // this will make the execution after the above boolean has changed
      //this.searchElement.nativeElement.focus();
    }, 0);
  }

  doFilter(event: any) {
    this.listFilterText = event.toLowerCase();
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
      let r = confirm('Are you sure you want to delete this person?');
      if (r) {
        this.values.delete(this.value);
        this.value = [...this.values.keys()][0];
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
    this.showNew();
  }

  doCancel() {
    this.isDoInput = false;
  }

  doChange(event: any) {
    this.value = +event;
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
    let v = [...this.values.values()];
    return v.filter((e) => !this.hideItem(e)).length;
  }

  hideItem(person: AnyEntity) {
    let r = false;
    if (this.listFilterText.length > 0) {
      r = (person as EntityNatural).fullName.toLowerCase().indexOf(this.listFilterText) === -1;
    }
    return r;
  }
}
