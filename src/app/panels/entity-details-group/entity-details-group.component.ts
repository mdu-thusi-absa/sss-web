import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-group',
  templateUrl: './entity-details-group.component.html',
  styleUrls: ['./entity-details-group.component.css']
})
export class EntityDetailsGroupComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-group');
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
