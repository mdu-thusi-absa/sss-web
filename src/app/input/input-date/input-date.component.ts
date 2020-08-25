import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  title_ = '';
  @Input() set title(v: string) {
    this.title_ = Entity.sentanceCase(v);
  }
  get title() {
    return this.title_;
  }
  @Input() filterText = '';
  @Input() doHideByFilter = true;
  @Input() placeholder = '';
  @Input() value = new Date();
  @Input() disabled = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;

  @Input() inline = false;
  @Input() showTitle = true;

  doKeyDown(event: any) {
    let c = event.key;
    console.log(c);
    if (c == 'Tab' ) {
    }else if( c == 'Enter'){
      // document.getElementById('dpDate').toggle();
    } else{
      return false;
    }
  }

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onFile.emit(this.title);
  }
  doTask() {
    this.onTask.emit(this.title);
  }
  
  eid = 'input-date'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {}

  hideByFilter() {
    if (!this.doHideByFilter) return false;
    else
      return (
        this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      );
  }

  gotoToday() {
    this.value = new Date();
  }

  get value_() {
    return this.value;
  }

  set value_(v) {
    this.value = v;
    this.onChange.emit(this.value);
  }

  doChange() {
    this.onChange.emit(this.value);
  }
}
