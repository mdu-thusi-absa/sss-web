import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntityNatural, Entities, AnyEntity } from 'src/app/data/data-entity-classes';
import { DataService } from 'src/app/data/data.service';

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
  @Input() values: Entities<AnyEntity>; //string[] 
  @Input() persons: EntityNatural[];
  @Input() showCheck = false;
  @Input() isNarrow = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChangeCustomType = new EventEmitter();


  eid = 'input-custom'
  constructor(public data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

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
    this.customType = this.data.customTypes.get(event).name;
  }

  doChangeTitle(event: any){
    this.title = event;
  }

}
