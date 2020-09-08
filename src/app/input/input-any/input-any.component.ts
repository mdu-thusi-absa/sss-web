import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntityNatural,  Entities, AnyEntity, Entity } from 'src/app/data/data-entity-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-any',
  templateUrl: './input-any.component.html',
  styleUrls: ['./input-any.component.css']
})
export class InputAnyComponent implements OnInit {
  @Input() type = ''; 
  @Input() filterText = '';
  @Input() doHideByFilter = true;
  @Input() showPanelHeading = true;

  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() placeholder = '';
  @Input() values: Entities<AnyEntity>; //: string[] | Person[] 
  @Input() value: string | boolean | EntityNatural | number = '';
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
  @Input() isNarrow = false;
  
  eid = 'input-any'
  constructor(private data: DataService) { 
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doCheck(event: any){
    this.onCheck.emit(event);
  }

  doAdd(event: any){
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
    this.onChange.emit(event);
  }


}
