import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NaturalEntity } from 'src/app/models';

@Component({
  selector: 'app-entity-details-individual',
  templateUrl: './entity-details-individual.component.html',
  styleUrls: ['./entity-details-individual.component.css']
})
export class EntityDetailsIndividualComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() entity: NaturalEntity;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onDirty = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-individual');
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
