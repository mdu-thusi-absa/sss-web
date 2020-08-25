import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { InputCustomComponent } from 'src/app/input/input-custom/input-custom.component';
import { EveryEntity, EnumEntityType } from 'src/app/data/models';

@Component({
  selector: 'app-entity-details-header',
  templateUrl: './entity-details-header.component.html',
  styleUrls: ['./entity-details-header.component.css']
})
export class EntityDetailsHeaderComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() title='';
  @Input() entityKey: number;
  @Input() entityTypeKey: EnumEntityType;
  @Input() entity: EveryEntity;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-header');
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

  doChangeEntityType(event: any){

  }
}