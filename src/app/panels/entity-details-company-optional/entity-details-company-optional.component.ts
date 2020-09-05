import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntityNatural, EntityCompany } from 'src/app/data/data-models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-entity-details-company-optional',
  templateUrl: './entity-details-company-optional.component.html',
  styleUrls: ['./entity-details-company-optional.component.css']
})
export class EntityDetailsCompanyOptionalComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() persons: EntityNatural[];
  @Input() entity: EntityCompany;
  isAppointeeInput = false;
  isAppointeeNewInput =false;
  isDown_ShareHolders = false;
  isDown_Appointments = false;
  isDown_ShareCertificates = false;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onDirty = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-company-optional');
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

  showAppointeeEdit(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNew(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNewEdit(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

  showAppointeeNewNew(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }


  showAppointmentNew(){

  }

  showAppointmentEdit(){

  }

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }



}
