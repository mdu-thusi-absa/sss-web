import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FunctionalEntity,  Entities, Entity} from '../../models'
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  filterText = '';
  rdoActiveDormantAll = 'all';
  isNewMessage = false;
  @Input() panelRows = 1;
  @Input() isNarrow = false;
  entities: Entities;// = new FunctionalEntities();
  entityType = 1;
  entityTypeName = '';
  entityTypesPlural: any;
  @Output() onEntityTypeChange = new EventEmitter();
  @Output() onEntityChange = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    //this.entities.sort(Entity.compare);
    //this.entities = this.dataService.getFunctionalEntities(0);
    //entityTypeName
    this.entityTypesPlural = this.dataService.getEntityTypesPlural();
    this.doEntityTypeChange(this.entityType);
  }

  doEntityTypeChange(event: any){
    //console.log('doEntityTypeChange',event);
    this.entityType = +event;
    this.entityTypeName = this.entityTypesPlural.get(this.entityType).name;
    //console.log(this.entityTypeName);
    this.entities = this.dataService.getFunctionalEntities(this.entityType);

    this.onEntityTypeChange.emit(this.entityType);
  }

  doEntityChange(event: any){
    this.onEntityChange.emit(this.entityType);
  }

  shouldBeHidden(e: Entity): boolean{
    let inFilter = true;
    let inName = true;
    //let inInfo = true;
    if (this.filterText.length>0){
      inName = e.name.toLowerCase().indexOf(this.filterText.toLowerCase())>-1
      //inInfo = e.info.toLowerCase().indexOf(this.filterText.toLowerCase())>-1
      inFilter = inName; // || inInfo;
    }

    let inStatus = true;
    if (this.rdoActiveDormantAll== 'all') inStatus = true;
    else if (this.rdoActiveDormantAll == 'play') inStatus = e["isActive"];
    else if (this.rdoActiveDormantAll == 'pause') inStatus = !e["isActive"];
    else if (this.rdoActiveDormantAll == 'flash') inStatus = e["tasksCount"]>0;

    let doShow = inFilter && inStatus;

    return !doShow;
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

  getCount_Active(){
    return [...this.entities.values()].filter(e => e["isActive"]).length;
  }

  getCount_Dormant(){
    return [...this.entities.values()].filter(e => !e["isActive"]).length;
  }

  getCount_Tasks(){
    return [...this.entities.values()].filter(e => e["tasksCount"]>0).length;
  }

  getCount_All(){
    return this.entities.size;
  }

  doFilter(event: any){
    this.filterText = event;
  }

  getCountFiltered(){
    return [...this.entities.values()].filter(e => !this.shouldBeHidden(e)).length;
  }

  doAdd(){
    this.isNewMessage = true;
  }
  doCancel(){
    this.isNewMessage = false;
  }

  
  
}
