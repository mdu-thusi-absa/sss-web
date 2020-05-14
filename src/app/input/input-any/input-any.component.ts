import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person, CountryCities } from 'src/app/models';

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
  @Input() values = new Map(); //: string[] | Person[] | CountryCities[];
  @Input() value: string | boolean | Person | number = '';
  @Input() disabled = false;
  @Input() maxValue = 1000;
  @Input() minValue = -1000;
  @Input() increment = 1;
  @Input() showTitleInput = true;
  @Input() showAdd = true;
  @Input() showEdit = true;
  @Input() showDelete = true;
  // @Input() countriesCities: CountryCities[];
  // @Input() persons

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;
  
  constructor() { }

  ngOnInit(): void {
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
    this.onChange.emit(event);
  }


}
