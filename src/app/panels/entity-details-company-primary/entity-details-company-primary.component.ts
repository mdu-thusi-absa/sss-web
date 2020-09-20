import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import {EnumEntityType} from 'src/app/data/data-entity-types'
import { EntityCompany } from 'src/app/data/data-entity-kids';

@Component({
  selector: 'app-entity-details-company-primary',
  templateUrl: './entity-details-company-primary.component.html',
  styleUrls: ['./entity-details-company-primary.component.css']
})
export class EntityDetailsCompanyPrimaryComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() entityKey: number;
  
  entityType = EnumEntityType.Company
  //@Input() legalEntity: LegalEntity;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onDirty = new EventEmitter();
  constructor(public data: DataService) { }

  _entity: EntityCompany
  @Input() set entity(v: EntityCompany){
    this._entity = v
  }
  get entity(){
    return this._entity
  }
  // get legalEntity(): EveryEntity{
  //   return this.data.getEntity(this.entityKey);
  // }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-company-primary');
    this.data.progress += 1;
    // console.log(this.entity);
    
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
