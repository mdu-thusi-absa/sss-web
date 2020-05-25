import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaturalEntity,  Entities } from 'src/app/models';

@Component({
  selector: 'app-input-any',
  templateUrl: './input-any.component.html',
  styleUrls: ['./input-any.component.css']
})
export class InputAnyComponent implements OnInit {
  @Input() type = ''; 
  @Input() filterText = '';
  @Input() doHideByFilter = true;

  @Input() title = '';
  @Input() placeholder = '';
  @Input() values: Entities; //: string[] | Person[] 
  @Input() value: string | boolean | NaturalEntity | number = '';
  @Input() disabled = false;
  @Input() maxValue = 1000;
  @Input() minValue = -1000;
  @Input() increment = 1;
  @Input() showTitleInput = true;
  @Input() showAdd = true;
  @Input() showEdit = true;
  @Input() showDelete = true;
  @Input() showDownload = false;
  @Input() showShare = false;
  @Input() showSelect = false;
  @Input() showCheck = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onCheck = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  doCheck(event: any){
    this.onCheck.emit(event);
  }

  doAdd(event: any){
    console.log('doAdd');
    this.onAdd.emit(event);
  }

  doFile(){
    this.onFile.emit(this.title);
  }
  
  doRecord(){
    this.onRecord.emit(this.title);
  }

  doTask(){
    this.onTask.emit(this.title);
  }

  doChange(event: any){
    console.log('any');
    this.onChange.emit(event);
  }


}
