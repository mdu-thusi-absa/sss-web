import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-user',
  templateUrl: './entity-details-user.component.html',
  styleUrls: ['./entity-details-user.component.css']
})
export class EntityDetailsUserComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-user');
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
}
