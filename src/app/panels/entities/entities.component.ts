import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FunctionalEntity,
  Entities,
  Entity,
  FunctionalEntities,
} from '../../models';
import { DataService } from 'src/app/data.service';
import { EntityDetailsFilesComponent } from '../entity-details-files/entity-details-files.component';
import { ExecException } from 'child_process';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css'],
})
export class EntitiesComponent implements OnInit {
  filterText = '';
  rdoActiveDormantAll = 'all';
  isNewMessage = false;
  @Input() panelRows = 1;
  @Input() isNarrow = false;
  entities: FunctionalEntities; // = new FunctionalEntities();
  entityType = 0;
  entityTypeName = '';
  entityTypesPlural: any;
  entityTypeNamePlural = '';
  entityTypeNames = new Entities();
  showActiveOnly = true;
  isHiddenMap = new Map();
  @Output() onEntityTypeChange = new EventEmitter();
  @Output() onEntityChange = new EventEmitter();

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.entityTypeNames = this.dataService.entityTypes;
    this.entityTypesPlural = this.dataService.getEntityTypesPlural();
    this.doEntityTypeChange(this.entityType);
    this.entities = this.dataService.getFunctionalEntitiesAll();
    this.setCounts();
  }

  doEntityTypeChange(event: any) {
    this.entityType = +event;
    this.entityTypeNamePlural = this.entityTypesPlural.get(
      this.entityType
    ).name;
    this.entityTypeName = this.entityTypeNames
      .get(this.entityType)
      .name.toLowerCase();
    this.onEntityTypeChange.emit(this.entityType);
    this.setCounts();
    if (this.isHiddenMap) {
      if (this.isHiddenMap.size > 0) {
        if (this.isHiddenMap.entries()) {
          try{
            let [k, v] = [...this.isHiddenMap.entries()].find((e) => !e[1]);
            this.entities.currentKey = k;
          }
          catch(e){
            //this.entities.currentKey = -1;
          }
          
        }
      }
    }
  }

  shouldBeHidden(e: Entity): boolean {
    let inFilter = true;
    let inName = true;
    let inSuffix = true;
    let isType = true;
    let inStatus = true;

    isType = e.type === this.entityTypeName;

    if (isType) {
      if (this.rdoActiveDormantAll === 'all') inStatus = true;
      else if (this.rdoActiveDormantAll === 'play') inStatus = e['isActive'];
      else if (this.rdoActiveDormantAll === 'pause') inStatus = !e['isActive'];
      else if (this.rdoActiveDormantAll === 'flash')
        inStatus = e['tasksCount'] > 0;

      if (inStatus) {
        if (this.filterText.length > 0) {
          inName =
            e.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
          if (e['suffix']) {
            inSuffix =
              e['suffix'].toLowerCase().indexOf(this.filterText.toLowerCase()) >
              -1;
          }
          inFilter = inName || inSuffix;
        }
      }
    }

    let doShow = inFilter && inStatus && isType;

    return !doShow;
  }

  isFullScreen() {
    return this.panelRows === 1;
  }

  isHalfScreen() {
    return this.panelRows === 2;
  }

  isThirdScreen() {
    return this.panelRows === 3;
  }

  getCount_Active() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => e.isActive && e.type === this.entityTypeName
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Dormant() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => !e.isActive && e.type === this.entityTypeName
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Tasks() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => e.tasksCount > 0 && e.type === this.entityTypeName
      ).length;
    } else {
      return 0;
    }
  }

  getCount_All() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => e.type === this.entityTypeName
      ).length;
    } else {
      return 0;
    }
  }

  doFilter(event: any) {
    this.filterText = event;
    this.setCounts();
  }

  doChangeShowActive(event: any) {
    this.showActiveOnly = event;
    this.dataService.makeFunctionalEntities(this.showActiveOnly);
    this.entities = this.dataService.getFunctionalEntitiesAll();
    if (this.showActiveOnly && this.rdoActiveDormantAll === 'pause') {
      this.rdoActiveDormantAll = 'all';
    }
    if (this.showActiveOnly && this.rdoActiveDormantAll === 'play') {
      this.rdoActiveDormantAll = 'all';
    }
    this.setCounts();
  }

  countFiltered = 0;
  countAll = 0;
  countTasks = 0;
  countDormant = 0;
  countActive = 0;

  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
    this.countAll = this.getCount_All();
    this.countTasks = this.getCount_Tasks();
    this.countDormant = this.getCount_Dormant();
    this.countActive = this.getCount_Active();
  }

  doChangeRdo(event: any) {
    this.rdoActiveDormantAll = event;
    this.setCounts();
  }

  calcIsHidden() {
    if (this.entities) {
      let a = [...this.entities.entries()];
      this.isHiddenMap = new Map();
      for (let i = 0; i < a.length; i++) {
        let [k, v] = a[i];
        this.isHiddenMap.set(k, this.shouldBeHidden(v));
      }
    } else {
    }
  }

  getCountFiltered() {
    if (this.entities) {
      return [...this.isHiddenMap.values()].filter((e) => !e).length;
    } else {
      return 0;
    }
  }

  doAdd() {
    this.isNewMessage = true;
  }
  doCancel() {
    this.isNewMessage = false;
  }

  doEntityChoose(entityKey: number) {
    this.entities.currentKey = entityKey;
  }
}
