import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity, Entities, AnyEntity, EntityNatural } from '../../data/data-entity-classes'
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-panel-glogal-search',
  templateUrl: './panel-glogal-search.component.html',
  styleUrls: ['./panel-glogal-search.component.css']
})
export class PanelGlogalSearchComponent implements OnInit {
  filterText = '';
  isCountryInput = false;
  isPositionInput = false;
  @Input() isNarrow = false;
  @Input() hidePrimary = false;
  @Input() hideSecondary = false;
  @Input() hideOptional = false;
  @Input() hideCustom = false;
  @Input() hideFiles = false;
  @Input() hideUsers = false;
  @Input() hideContacts = false;
  persons = new Entities<EntityNatural>(EntityNatural);
  @Input() panelRows = 1;
  @Input() entityType = 0;
  //@Input() entityKey = 0;
  entity: Entity;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  constructor(public data: DataService) { }

  ngOnInit(): void {
    // this.persons = this.data.getIndividuals();
    if (this.data.lg) console.log(new Date().getTime(),'loaded:dashboard');
    this.data.progress += 1;
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
    this.onTask.emit(inputTitle);
  }

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

  isFullScreen(): boolean{
    return this.panelRows==0 ? true : this.panelRows === 1;
  }

  isHalfScreen(): boolean{
    return this.panelRows==0 ? false : this.panelRows === 2;
  }

  isThirdScreen(): boolean{
    return this.panelRows === 3;
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
    this.entityType = +event;
  }
  

}



