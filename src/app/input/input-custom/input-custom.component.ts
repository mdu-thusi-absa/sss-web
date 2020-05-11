import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person, CountryCities } from 'src/app/models';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.css']
})
export class InputCustomComponent implements OnInit {
  @Input() id = '1';
  @Input() title = 'Field';
  @Input() doHideByFilter = true;
  @Input() filterText = '';
  @Input() customType = 'text';
  @Input() persons: Person[];
  @Input() countriesCities: CountryCities[];

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChangeCustomType = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    if (this.title=='') this.title = 'Custom ' + this.id;
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

  doChangeCustomType(event: any){
    // this.onChangeCustomType.emit(event);
    //console.log(event);
    this.customType = event;
  }

  doChangeTitle(event: any){
    //console.log(event);
    this.title = event;
  }

}
