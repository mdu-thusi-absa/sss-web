import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-classes';
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

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;

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

  ngOnInit(): void {
    if (this.placeholder === '') this.placeholder = this.title;
  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1 : false);
  }

  doChange(event: any){
    //this.value = event;
    this.onChange.emit(event);
  }

  
}
