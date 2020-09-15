import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() value = false;
  @Input() disabled = false;
  @Input() noTitle = false;
  @Input() showSmall = false;
  //titleBold = true;

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
  @Input() showEdit = false;
  @Input() showDelete = false
  checked = true;

  doChange(){
    if (!this.disabled){
      this.value = !this.value;
     this.onChange.emit(this.value);
    }
  }

  doFile(){
    this.onFile.emit(this.title);
  }
  doTask(){
    this.onTask.emit(this.title);
  }
  doRecord(){
    this.onRecord.emit(this.title);
  }

  eid = 'input-checkbox'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {    
    if (this._autoFocus){
      this.setAutoFocus()
    }
  }

  _autoFocus = false
  @Input() set autoFocus(v: boolean){
    this._autoFocus = v
    if (v){
      this.setAutoFocus()
    }
  }

  setAutoFocus(){
    let id = this.eid + '-change'
      setTimeout(() => {
        document.getElementById(id).focus();
      }, 50);
  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1 : false);
  }

  

}
