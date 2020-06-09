import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaturalEntity } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-users',
  templateUrl: './entity-details-users.component.html',
  styleUrls: ['./entity-details-users.component.css']
})
export class EntityDetailsUsersComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() users: NaturalEntity[];

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();

  customCount = 1; //default number to display
  elements = new Array(this.customCount);

  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-users');
    this.data.progress += 1;
  }

  doRecord(event: any){
    this.onRecord.emit(event);
  }

  doTask(event: any){
    this.onTask.emit(event);
  }

  doFile(event: any){
    this.onFile.emit(event);
  }

  doChangeCount(event: any){
    this.customCount = event;
    // let c = 30;
    // this.elements = Array.from(Array(30).keys());
    this.elements = new Array();
    for (let i = 0; i<this.customCount; i++){
      this.elements.push(i);
    }
  }

  // doChangeCustomType(customIndex: number, event: any){
  //   let et = Object.assign(this.elementsType);
  //   et[customIndex] = event;
  //   this.elementsType = et;
  // }



}
