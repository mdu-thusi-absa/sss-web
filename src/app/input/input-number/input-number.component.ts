import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
})
export class InputNumberComponent implements OnInit {
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() placeholder = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() value = 0;
  @Input() increment = 1;
  @Input() minValue = 1;
  @Input() maxValue = 100;
  @Input() showMinus = true;
  @Input() showPlus = true;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showDownload = false;
  @Input() showShare = false;
  @Input() showCheck = false;

  doDownload(){

  }

  doShare(){

  }

  doFile() {
    this.onFile.emit(this.title.replace('*', ''));
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }

  doTask() {
    this.onTask.emit(this.title);
  }

  eid = 'input-number'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    if (this.placeholder === '') this.placeholder = this.title;
    this.showHideButtons()
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      : false;
  }

  doChange(event: any) {
    if (event>this.maxValue) {
      this.value = this.maxValue;
    }
    else if (event<this.minValue) {
      this.value = this.minValue;
    }
    else {
      this.value = event;
    }
    this.onChange.emit(this.value);
    this.showHideButtons()
    //return true;
  }

  doMinus() {
    this.value = this.value - this.increment;
    if (this.value < this.minValue) this.value = this.minValue;
    this.showHideButtons();
    this.onChange.emit(this.value);
  }
  doPlus() {
    this.value = +this.value + +this.increment;
    if (this.value > this.maxValue) this.value = this.maxValue;
    this.showHideButtons();
    this.onChange.emit(this.value);
  }

  showHideButtons() {
    this.showPlus = this.value < this.maxValue;
    this.showMinus = this.value > this.minValue;
  }

  //(keyup)="doKey($event)"
  doKeyUp(event: any) {
    if (event.key === 'Escape') {
      //this.value = this.defaultValue;
      this.doCancel();
    } else if (event.key === 'Enter') {
      this.doSave();
    }
  }

  doKeyDown(event: any){
    let s = event.key;
    let sAllow = ['Enter','Tab','ArrowLeft','ArrowRight'];
    let isAllowed = sAllow.indexOf(s)>-1;
    let isTooLow = this.value < this.minValue;
    return !isNaN(s) || isAllowed;
  }

  doCancel() {}
  doSave() {}
}
