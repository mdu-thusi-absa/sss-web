import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Entity } from 'src/app/data/data-entity-parent';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
})
export class InputSelectComponent implements OnInit {
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() values = new Map();
  @Input() filterText = '';
  @Input() value = 0;
  @Input() doHideByFilter = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onSelect = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }
  doTask() {
    this.onTask.emit(this.title);
  }

  isDoInput = false;
  //@Input() option = 0;
  text = '';
  isAdd = false;
  listFilterText = '';
  showSave = true;
  showCancel = true;
  @Input() showAdd = true;
  @Input() showDelete = true;
  @Input() showEdit = true;
  isShowingFilter = false;
  refreshIndex = 0;
  selectValues: number[];
  selectTexts: string[];
  @Output() onDelete = new EventEmitter();

  @ViewChild('inputText') inputElement: ElementRef;
  @ViewChild('select-entity-type') selectEntityType: ElementRef;

  eid = 'input-select'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    // this.values.sort();
    // this.option = this.values.indexOf().toString();
    //this.setItem(this.value);
    this.setSelect();
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = this.selectEntityType.nativeElement.innerWidth;
  // }

  getID(){
    return this.data.getID(this.title);
  }

  setSelect() {
    this.selectTexts = [];
    this.selectValues = [];
    for (let [k, v] of this.values) {
      this.selectTexts.push('value');
      this.selectValues.push(-1);
    }
  }
  //setItem(text: string) {
  //this.values.sort();
  // this.values.sort(function (a, b) {
  //   if (typeof(a)=='string' && typeof(b) === 'string'){
  //     return a.toLowerCase().localeCompare(b.toLowerCase());
  //   } else {
  //     let r = 0;
  //     if (a > b) r = 1;
  //     else if (a < b) r = -1;
  //     return r;
  //   }
  // });

  //this.option = +this.values.indexOf(text).toString();
  //}

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      : false;
  }

  doEdit() {
    this.isAdd = false;
    this.text = this.values.get(this.value);
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.isAdd) {
        //save for a new item
        let i = this.values.size;
        this.values.set(i, this.text);
        this.value = i;
        this.isAdd = false;
        this.onAdd.emit(this.value);
        this.onChange.emit(this.text);
      } else {
        //save for old item
        this.values.set(this.value, this.text);
        let id = this.value;
        let t = this.text;
        this.onEdit.emit({ id, t });
        this.onChange.emit(this.text);
      }
    } else {
      //new is clicked
      this.isAdd = true;
      this.text = '';
    }
    this.isDoInput = !this.isDoInput;
  }

  doSave(event: any) {
    this.text = event;
    this.showNew();
  }

  doCancel() {
    this.isDoInput = false;
  }

  doAdd() {
    this.showNew();
  }

  // setFocus() {
  //   setTimeout(() => {
  //     this.inputElement.nativeElement.focus();
  //     // this will make the execution after the above boolean has changed
  //     //this.searchElement.nativeElement.focus();
  //   }, 0);
  // }

  trackFn() {
    return this.refreshIndex;
  }

  doDelete() {
    if (this.values.size > 0) {
      let r = confirm('Are you sure you want to delete this item?');
      if (r) {
        this.values.delete(this.value);
        this.value = [...this.values.keys()][0];
      }
    }
  }

  doFilter(event: any) {
    this.listFilterText = event.toLowerCase();
  }

  hideItem(text: string) {
    let r = false;
    if (this.listFilterText.length > 0) {
      r = text.toLowerCase().indexOf(this.listFilterText) === -1;
    }
    return r;
  }

  countItems() {
    let v = [...this.values.values()];
    return v.filter((e) => !this.hideItem(e)).length;
  }

  showingFilter(event: any) {
    this.isShowingFilter = event;
  }

  doChange(event: any) {
    this.value = +event.target.value;
    this.onSelect.emit(this.value);
    this.onChange.emit(this.value)
  }

  // trackBy: trackFn()
  // trackFn(){
  //   let r = 0;
  //   if (this.values){
  //     for (let i=0;i<this.values.length;i++){
  //       r = r + this.values[i].length;
  //     }
  //     r = this.values.length;
  //   }
  //   return r;
  // }
}
