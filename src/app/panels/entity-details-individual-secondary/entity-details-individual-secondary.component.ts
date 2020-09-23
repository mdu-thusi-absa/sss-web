import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { EntityIndividual } from 'src/app/data/data-entity-kids';

@Component({
  selector: 'app-entity-details-individual-secondary',
  templateUrl: './entity-details-individual-secondary.component.html',
  styleUrls: ['./entity-details-individual-secondary.component.css']
})
export class EntityDetailsIndividualSecondaryComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() entity: EntityIndividual;
  isAppointeeInput = false;
  isAppointeeNewInput =false;
  isDown_Appointments = false;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-individual-secondary');
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

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

  showAppointeeEdit(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNew(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNewEdit(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

  showAppointeeNewNew(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

}

