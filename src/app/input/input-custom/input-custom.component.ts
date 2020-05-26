import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaturalEntity, Entities } from 'src/app/models';
import { DataService } from 'src/app/data.service';

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
  @Input() customType = 'person';
  @Input() values: Entities; //string[] 
  @Input() persons: NaturalEntity[];
  @Input() showCheck = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChangeCustomType = new EventEmitter();


  constructor(public dataService: DataService) { }

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
    this.customType = this.dataService.customTypes.get(event).name;
  }

  doChangeTitle(event: any){
    this.title = event;
  }

}
