import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Entity, Entities, EveryEntity } from 'src/app/models';

@Component({
  selector: 'app-input-select-checkbox',
  templateUrl: './input-select-checkbox.component.html',
  styleUrls: ['./input-select-checkbox.component.css']
})
export class InputSelectCheckboxComponent implements OnInit {
  @Input() title = '';
  @Input() values: Entities<EveryEntity>; //of entities
  @Input() filterText = '';
  @Input() value = 0;
  @Input() doHideByFilter = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;

  isLoadAll = false;
  loadedArray: number[] = [];
  limitVisibleRows = 20;
  loadInterval: any;
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
  valueId = 0;
  text = '';
  entity = new Entity('');
  doAdd = false;
  listFilterText = '';
  isShowingFilter = false;
  selectedItems: number [] = [0];
  showExpand = true;

  // @ViewChild('inputText') inputElement: ElementRef;
  constructor() {}

  delayLoader(that: any) {
    //delay: ngOnInit() <- this.loadInterval = setInterval(this.delayLoader,7000,this);
    if (that.limitVisibleRows < that.values.size) that.limitVisibleRows += 200;
    else {
      clearInterval(that.loadInterval)
      that.isLoadAll = true;
    }
  }


  ngOnInit(): void {
    // this.values.sort();
    // this.option = this.values.indexOf().toString();
    //this.setItem(this.value);
    //delay: this.loadInterval = setInterval(this.delayLoader,7000,this);
  }

  doContract(){
    this.showExpand = true;
  }

  doExpand(){
    this.showExpand = false;
  }


  setItem(text: string) {
    // this.values.sort(function (a:string, b:string) {
    //   return String(a).toLowerCase().localeCompare(b.toLowerCase());
    // });

    // this.option = this.values.indexOf(text).toString();
    // this.selectedItems.push(+this.option);
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      : false;
  }

  

  showEdit() {
    this.doAdd = false;
    this.text = this.values.get(this.valueId).name;
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    this.isLoadAll = true;
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.doAdd) {
        //save for a new item
        let i = this.values.size;
        this.selectedItems.push(i);
        this.values.set(i,new Entity(this.text));
        this.doAdd = false;
      } else {
        //save for old item
        this.values.set(this.valueId,new Entity(this.text));
      }
      this.setItem(this.text);
    } else {
      //new is clicked
      this.doAdd = true;
      this.text = '';
      this.entity = new Entity('');
      // if (!this.isDoInput) this.setFocus();
    }
    this.isDoInput = !this.isDoInput;
  }

  // setFocus() {
  //   setTimeout(() => {
  //     this.inputElement.nativeElement.focus();
  //     // this will make the execution after the above boolean has changed
  //     //this.searchElement.nativeElement.focus();
  //   }, 0);
  // }

  deleteItem() {
    let r = confirm('Are you sure you want to delete this item?');
    if (r) {
      this.values.delete(this.valueId)
      this.valueId = this.values.keys[0];
    }
  }

  doFilter(event: any){
    this.listFilterText = event.toLowerCase();
    this.isLoadAll = true;
  }

  hideItem(item: string){
    let r = false;
    if (this.listFilterText.length>0){
      r = item.toLowerCase().indexOf(this.listFilterText)==-1;
    }
    return r;
    
  }

  countItems(){
    let v = this.values.all_values;
    return v.filter(e => !this.hideItem(e.name)).length;
  }
  countSelected(){
    return this.selectedItems.length;
  }

  showingFilter(event:any){
    this.isShowingFilter = event;
  }

  doEdit(index: any){
    this.valueId = index;
    this.showEdit()
  }

  doDelete(index: any){                     
    this.valueId = index;
    this.deleteItem()
  }

  doSave(event: any){
    this.text = event;
    this.entity.name = this.text;
    this.showNew()
  }

  doCancel(){
    this.isDoInput = false;
  }

  doCheckField(event: any){
    let c = event.target.checked;
    let p = +event.target.value;
    let q = this.selectedItems.indexOf(p);
    if (c){
      if (q==-1) this.selectedItems.push(p) ;
    }
    else{
      if (q>-1)  this.selectedItems.splice(q,1) 
    }
  }

}
