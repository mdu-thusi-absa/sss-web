import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FunctionalEntity,  Entities, Entity, FunctionalEntities} from '../../models'
import { DataService } from 'src/app/data.service';
import { EntityDetailsFilesComponent } from '../entity-details-files/entity-details-files.component';


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
  entities: FunctionalEntities;// = new FunctionalEntities();
  entityType = 0;
  entityTypeName = '';
  entityTypesPlural: any;
  entityTypeNamePlural = '';
  entityTypeNames = new Entities();
  showActiveOnly = true;
  isHiddenMap = new Map();
  @Output() onEntityTypeChange = new EventEmitter();
  @Output() onEntityChange = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.entityTypeNames = this.dataService.entityTypes;
    this.entityTypesPlural = this.dataService.getEntityTypesPlural();
    this.doEntityTypeChange(this.entityType);
    this.entities = this.dataService.getFunctionalEntitiesAll();
    //console.log(this.entities.size);
    this.setCounts();
  }

  doEntityTypeChange(event: any){
    this.entityType = +event;
    this.entityTypeNamePlural = this.entityTypesPlural.get(this.entityType).name;
    this.entityTypeName = this.entityTypeNames.get(this.entityType).name.toLowerCase();
    //console.log(this.entityTypeName);
    this.onEntityTypeChange.emit(this.entityType);
    this.setCounts();
  }

  doEntityChange(event: any){
    this.onEntityChange.emit(this.entityType);
  }

  shouldBeHidden(e: Entity): boolean{
    let inFilter = true;
    let inName = true;
    let isType = true;
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

    //console.log(e.type,this.entityTypeName);

    isType = e.type == this.entityTypeName;

    let doShow = inFilter && inStatus && isType;

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
    if (this.entities){
    return [...this.entities.values()].filter(e => e.isActive && e.type == this.entityTypeName).length;
    }else{
      return 0;
    }
  }

  getCount_Dormant(){
    //console.log('dormant');
    if (this.entities){
    return [...this.entities.values()].filter(e => !e.isActive && e.type == this.entityTypeName).length;
    }else{
      return 0;
    }
  }

  getCount_Tasks(){
    //console.log('tasks');
    if (this.entities){
    return [...this.entities.values()].filter(e => e.tasksCount>0  && e.type == this.entityTypeName).length;
    }else{
      return 0;
    }
  }

  getCount_All(){
    console.log('all');
    //console.log(this.entityTypeName);
    if (this.entities){
      return [...this.entities.values()].filter(e => e.type == this.entityTypeName).length;
    }else{
      return 0;
    }
    //return this.entities.size;
  }

  doFilter(event: any){
    this.filterText = event;
    this.setCounts();
  }

  doChangeShowActive(event: any){
    //console.log(event);
    this.showActiveOnly = event;
    this.dataService.makeFunctionalEntities(this.showActiveOnly);
    this.entities = this.dataService.getFunctionalEntitiesAll();
    //console.log(this.entities);
    this.setCounts();
  }

  countFiltered = 0;
  countAll = 0;
  countTasks = 0;
  countDormant = 0;
  countActive = 0;

  setCounts(){
    this.countFiltered = this.getCountFiltered();
    this.countAll = this.getCount_All();
    this.countTasks = this.getCount_Tasks();
    this.countDormant = this.getCount_Dormant();
    this.countActive = this.getCount_Active();
    this.calcIsHidden();
  }

  calcIsHidden(){
    if (this.entities){
       let a = [...this.entities.entries()]; //.find(e => !this.shouldBeHidden(e));
       //console.log(a)
       this.isHiddenMap = new Map();
       for (let i=0; i<a.length;i++){
          let [k,v] = a[i];
          this.isHiddenMap.set(k,this.shouldBeHidden(v));
       }
       //console.log(a)
    }else{
      
    }
    //this.isHidden = [...this.entities.values()].filter(e => !this.shouldBeHidden(e));
    // this.isHidden = new Map();
    // let a = [...this.entities.values()]
    // for (let i=0;i<a.length;i++){
    //    this.isHidden.set()
    // }
  }

  getCountFiltered(){
    //console.log('filterCount');
    //console.log('all');
    //console.log(this.entityTypeName);
    if (this.entities){
       return [...this.entities.values()].filter(e => !this.shouldBeHidden(e)).length;
    }else{
      return 0;
    }
  }

  doAdd(){
    this.isNewMessage = true;
  }
  doCancel(){
    this.isNewMessage = false;
  }

  doEntityChoose(entityKey: number){
    this.entities.currentKey = entityKey;
  }
  
}
