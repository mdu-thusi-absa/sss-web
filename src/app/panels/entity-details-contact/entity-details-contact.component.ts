import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { AnyEntity } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-entity-details-contact',
  templateUrl: './entity-details-contact.component.html',
  styleUrls: ['./entity-details-contact.component.css']
})
export class EntityDetailsContactComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() isNarrow = false;
  @Input() title = 'Contacts Page'
  @Input() entity: AnyEntity;

  @Output() onFile = new EventEmitter;
  @Output() onRecord = new EventEmitter;
  @Output() onTask = new EventEmitter;
  @Output() onDirty = new EventEmitter;

  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-contact');
    this.data.progress += 1;
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
