import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent implements OnInit {
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() placeholder = '';
  @Input() value = '';
  @Input() rows = 4;
  @Input() noTitle = false;
  @Input() noButtons = false;
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;
  @Input() filterText = '';
  @Input() doHideByFilter = false;

  @Output() onTask = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onChange = new EventEmitter()

  eid = 'input-textarea'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  valueOriginal = ''
  ngOnInit(): void {
    this.valueOriginal = this.value
  }

  doTask(){
    this.onTask.emit(this.title);
  }

  doRecord(){
    this.onRecord.emit(this.title);
  }

  doFile(){
    this.onFile.emit(this.title);
  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1 : false);
  }

  doChange(event: any){
    //this.value = event;
    this.onChange.emit(event);
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

  @Output() onEnter = new EventEmitter()
  doKey(event: any) {
    if (event.key === 'Escape') {
      this.value = this.valueOriginal
      this.doChange(this.value)
    }
    if (event.key === 'Enter') {
      this.onEnter.emit();
    }
  }

}
