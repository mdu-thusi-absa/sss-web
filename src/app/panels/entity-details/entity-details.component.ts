import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity, Person } from '../../models/models'

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnInit {
  filterText = '';
  isCountryInput = false;
  isPositionInput = false;
  isAppointeeInput = false;
  isAppointeeNewInput =false;
  persons: Person[];
  @Input() panelRows = 2;
  entity: Entity;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.persons = [new Person('Smith','John','ABSA'), new Person('Dean','Diana','Chechia')];
  }

  doFile(inputTitle: string){
    //console.log('app-entity-details: doFile: ' + inputTitle);
    this.onFile.emit(inputTitle);
  }

  doRecord(inputTitle: string){
    //console.log('app-entity-details: doRecord: ' + inputTitle);
    this.onRecord.emit(inputTitle);
  }

  doTask(inputTitle: string){
    //console.log('app-entity-details: doRecord: ' + inputTitle);
    this.onTask.emit(inputTitle);
  }

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1;
  }

  isFullScreen(){
    return this.panelRows == 1;
  }

  isHalfScreen(){
    return this.panelRows == 2;
  }

  isThirdScreen(){
    return this.panelRows == 3;
  }

  showCountryEdit(){
    this.isCountryInput = !this.isCountryInput
  }

  showCountryNew(){
    this.isCountryInput = !this.isCountryInput
  }

  showPositionEdit(){
    this.isPositionInput = !this.isPositionInput
  }

  showPositionNew(){
    this.isPositionInput = !this.isPositionInput
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

}
