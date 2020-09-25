import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() showSmall = false;
  @Input() placeholder = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() value = '';

  
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;
  
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onEnter = new EventEmitter()

  doFile(){
    this.onFile.emit(this.title.replace('*',''));
  }
  doRecord(){
    this.onRecord.emit(this.title);
  }

  doTask(){
    this.onTask.emit(this.title);
  }

  eid = 'input-text'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  valueOriginal = ''  
  ngOnInit(): void {
    this.valueOriginal = this.value
    if (this.placeholder === '') this.placeholder = this.title;
  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1 : false);
  }

  doChange(event: any){
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
