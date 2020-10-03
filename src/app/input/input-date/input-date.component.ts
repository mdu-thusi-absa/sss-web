import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  private _title = '';
  @Input() set title(v: string) {
    this._title = Entity.sentanceCase(v);
  }
  get title() {
    return this._title;
  }
  @Input() filterText = '';
  @Input() doHideByFilter = true;
  @Input() placeholder = '';
  // @Input() value = new Date();
  @Input() disabled = false;
  @Input() showSmall = false

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onEnter = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;

  @Input() inline = false;
  @Input() showTitle = true;

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

  valueOriginal: Date
  ngOnInit(): void {
    this.valueOriginal = this.value
  }

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

  _value = new Date()
  get value() {
    return this._value;
  }

  @Input() set value(v) {
    this._value = v;
    this.doChange();
  }

  doChange() {
    this.onChange.emit(this.value);
  }

  _autoFocus = false
  @Input() set autoFocus(v: boolean){
    this._autoFocus = v
    if (v){
      this.setAutoFocus()
    }
  }

  setAutoFocus() {
    let id = this.eid
    setFocusForID(id, 50);

    function setFocusForID(id: string, mills: number) {
      setTimeout(() => {
        let e = document.getElementById(id);
        if (e) e.focus();
        else setFocusForID(id, mills + 100);
      }, mills);
    }
  }

  doEnter(event: any) {
    this.onEnter.emit();
    this.setAutoFocus()
  }

  doKeyDown(event: any) {
    if (event.key == ' ') this.doClick(event);
    else if (event.key == 'Enter') this.doEnter(event);
    else if (event.key === 'Escape') {
      this.value = this.valueOriginal;
      this.doChange()
    }
    event.preventDefault();
  }

  doClick(event: any) {
    if (!this.disabled) {
      this.doChange();
    }
  }

  // doKeyDown(event: any) {
  //   let c = event.key;
  //   if (c == 'Tab' ) {
  //   }else if( c == 'Enter'){
  //     // document.getElementById('dpDate').toggle();
  //   } else{
  //     return false;
  //   }
  // }

}
