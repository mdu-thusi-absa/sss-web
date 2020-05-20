import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { EveryEntity, Entities, Entity } from '../../models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-select-entity',
  templateUrl: './input-select-entity.component.html',
  styleUrls: ['./input-select-entity.component.css']
})
export class InputSelectEntityComponent implements OnInit {
  @Input() title = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  //@Input() values = new Map(); //Map of Entity();
  @Input() values: Entities = new Entities();
  @Input() value = 0;
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showAdd = false;
  @Input() showEdit = false;
  @Input() showDelete = false;
  @Input() showCheck = false;

  entity: EveryEntity;
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

  constructor(public dataService: DataService) {}

  getID(){
    //console.log(this.title);
    return this.dataService.getID(this.title);
  }

  ngOnInit(): void {
    //console.log(this.values);
    this.entity = this.values.createEntity();
    //this.entity = new Entity('');
    //console.log(this.values.createEntity());
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

  setItem(entity: EveryEntity) {
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
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      : false;
  }

  doEdit() {
    //console.log('edit')
    this.isAdd = false;
    //console.log(this.option);
    //this.text = this.values[+this.option].fullName;
    // console.log(this.person);
    // console.log(this.values);
    // console.log(this.value);
    this.entity = this.values.get(this.value);
    // console.log(this.person);
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
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
        this.onChange.emit(t);
      } else {
        //save for old item
        this.values.edit(this.value, this.entity);
        let id = this.value;
        let t = this.entity;
        this.onEdit.emit({ id, t });
        this.onChange.emit(t);
      }
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
    this.clickSelect()
  }

  clickSelect() {
    // setTimeout(function() {
    //   this.selectItem('click');
    // });
  };

  doTask() {
    this.onTask.emit(this.title);
  }

  showingFilter(event: any) {
    this.isShowingFilter = event;
    //console.log(this.isShowingFilter);
  }

  doDelete() {
    if (this.values.size > 0) {
      let r = confirm('Are you sure you want to delete this ' + this.title + '?');
      //console.log(r);
      if (r) {
        this.values.del(this.value);
        //console.log(this.values.all_keys);
        this.value = this.values.all_keys[0];
        //console.log(this.value);
        this.onSelect.emit(this.value)
      }
    }
  }

  //doEdit() {
    // this.isAdd = false;
    // console.log(this.option);
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

  doChangeInputText(event: any){
    //console.log('doChangeInputText',event);
    this.entity.name = event;
  }

  doChange(event: any){
    this.value = +event.target.value;
    this.values.currentKey =this.value
    this.onSelect.emit(this.value);
    this.onChange.emit(this.value)
  }

  //(keyup)="doKeyUp($event)"
  doKeyUp(event: any) {
    if (event.key == 'Escape') {
      //this.value = this.defaultValue;
      this.doCancel();
    } else if (event.key == 'Enter') {
      this.doSave();
    }
  }

  countItems() {
    //console.log(this.title);
    //console.log(this.values);
    //console.log(this.values.size);
    //console.log(this.values.all_values);
    let r = 0;
    if (!this.listFilterText){
      r = this.values.size;
    } else {
      let v = this.values.all_values;
      for (let i=0; i<this.values.size; i++){
        let e: EveryEntity = v[i];
        //console.log(i,this.values.size,e)
        if (e) {
          if (!this.hideItem(e)) {
            r = r+1;
          }
        }
      }
    }
    return r; 
    //let v = this.values.all_values;
    //v.filter((e) => !this.hideItem(e)).length;
  }

  hideItem(entity: EveryEntity) {
    let r = false;
    if (this.listFilterText) {
      if (entity != undefined)
        //console.log(entity);
        r = entity.name.toLowerCase().indexOf(this.listFilterText.toLowerCase()) == -1;
    }
    return r;
  }
}
