import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaturalEntity, Company } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-company-optional',
  templateUrl: './entity-details-company-optional.component.html',
  styleUrls: ['./entity-details-company-optional.component.css']
})
export class EntityDetailsCompanyOptionalComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() persons: NaturalEntity[];
  @Input() entity: Company;
  isAppointeeInput = false;
  isAppointeeNewInput =false;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onDirty = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-company-optional');
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
