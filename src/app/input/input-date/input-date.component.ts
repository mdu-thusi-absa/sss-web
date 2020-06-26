import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  @Input() title = '';
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

  onKeyDown(event: any) {   
    console.log('1',event);
    event.preventDefault();
  }

  doFile(){
    this.onFile.emit(this.title);
  }
  doRecord(){
    this.onFile.emit(this.title);
  }
  doTask(){
    this.onTask.emit(this.title);
  }
  constructor() {}

  ngOnInit(): void {
  }

  hideByFilter(){
    if (!this.doHideByFilter) return false;
    else return (
      this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
    );
  }

  gotoToday(){
    this.value = new Date();
  }

  get value_(){
    return this.value;
  }

  set value_(v){
    this.value = v
    this.onChange.emit(this.value)
  }

  doChange(){
    this.onChange.emit(this.value)
  }
}
