import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Entity } from 'src/app/models';

@Component({
  selector: 'app-input-person-contact',
  templateUrl: './input-person-contact.component.html',
  styleUrls: ['./input-person-contact.component.css']
})
export class InputPersonContactComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() isNarrow = false;
  title_ = 'Contact details';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() hideBody = true;

  @Output() onFile = new EventEmitter;
  @Output() onRecord = new EventEmitter;
  @Output() onTask = new EventEmitter;

  eid = 'input-person-contact'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doFile(event: any){
    this.onFile.emit(this.title);
  }
  
  doTask(event: any){
    this.onTask.emit(this.title);
  }

  doRecord(event: any){
    this.onRecord.emit(this.title);
  }

}
