import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity, Person, CountryCities } from '../../models'
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnInit {
  filterText = '';
  isCountryInput = false;
  isPositionInput = false;
  @Input() hidePrimary = false;
  @Input() hideSecondary = false;
  @Input() hideOptional = false;
  @Input() hideCustom = false;
  @Input() hideFiles = false;
  // isAppointeeInput = false;
  // isAppointeeNewInput =false;
  persons = new Map();
  //countriesCities: CountryCities[];
  @Input() panelRows = 1;
  entity: Entity;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  entityType = 0;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.persons = this.dataService.getPersons();
    //[new Person('Smith','John','ABSA'), new Person('Dean','Diana','Chechia')];
    // this.countriesCities =  [
    //   new CountryCities('South Africa', ['JHB', 'PTA']),
    //   new CountryCities('USA', ['NY', 'LA']),
    // ];
  }

  doFilter(event: any){
    this.filterText = event;
  }

  doFile(inputTitle: string){
    this.onFile.emit(inputTitle);
  }

  doRecord(inputTitle: string){
    this.onRecord.emit(inputTitle);
  }

  doTask(inputTitle: string){
    //console.log('doTask')
    this.onTask.emit(inputTitle);
  }

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1;
  }

  isFullScreen(): boolean{
    //console.log('IsFullScreen',this.panelRows)
    
    return this.panelRows==0 ? true : this.panelRows == 1;
  }

  isHalfScreen(): boolean{
    return this.panelRows==0 ? false : this.panelRows == 2;
  }

  isThirdScreen(): boolean{
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

  doChangeEntityType(event: any){
    console.log(event);
    this.entityType = event;
  }
  

}
