import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import {
  EntityFunctional,
  Entities,
  Entity,
  AnyEntity,
} from '../../data/models';
import { DataService } from 'src/app/data/data.service';
// import { EntityDetailsFilesComponent } from '../entity-details-files/entity-details-files.component';
// import { ExecException } from 'child_process';
import { EnumEntityType } from 'src/app/data/data-entityTypes';

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
  @Input() entityTypeKey: EnumEntityType = EnumEntityType.Dashboard;
  entities: Entities<AnyEntity>; // = new FunctionalEntities();
  //entitiesAll: FunctionalEntities;
  //entityType: EnumEntityType = EnumEntityType.Dashboard;
  entityTypeName = '';
  entityTypeNamePlural = '';
  showActiveOnly = true;
  isHiddenMap = new Map();
  mapEntityTypes = new Map();
  @Output() onDashboardChange = new EventEmitter();
  @Output() onEntityChange = new EventEmitter();
  selectedEntityKey: number = 0;
  countFiltered = 0;
  countAll = 0;
  countTasks = 0;
  countDormant = 0;
  countActive = 0;
  isLoadAll = false;
  loadedMap = new Map();
  limitVisibleRows = 50;

  eid = 'panel-entities';
  constructor(public data: DataService) {
    this.eid = data.getID('', this.eid);
  }

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  // // @HostListener('window:scroll', ['$event']) // for window scroll events
  onScrollTable(event: any) {
    //this.limitVisibleRows += 50;
    this.isLoadAll = true;
  }

  getDoLoad(key: number, typeName: string, isActive: boolean) {
    let n = 0;
    let aLoaded: number[] = [];
    if (!this.isLoadAll) {
      if (this.loadedMap.has(typeName)) {
        aLoaded = this.loadedMap.get(typeName);
      } else {
        this.loadedMap.set(typeName, aLoaded);
      }
      n = aLoaded.length;
      if (n < this.limitVisibleRows) {
        if (isActive) aLoaded.push(key);
        this.loadedMap.set(typeName, aLoaded);
      }
    }
    //onscroll
    //on filter
    //on type change
    //on radio
    let r = aLoaded.indexOf(key) > -1 || this.isLoadAll;
    return r;
  }

  ngOnInit(): void {
    // this.entityTypeNames = this.data.entityTypes;
    // this.entityTypesPlural = this.data.getEntityTypesPlural();
    //this.loadEntities();
    this.doEntityTypeChange(this.entityTypeKey);
    this.setCounts();
    // if (this.data.lg) console.log(new Date().getTime(), 'loaded:entities');
    this.data.progress += 1;
  }

  // loadEntities() {
  //   this.entities = this.data.getFunctionalEntitiesAll();
  // }

  doEntityTypeChange(event: any) {
    this.isLoadAll = this.isLoadAll || this.entityTypeKey != +event;
    this.entityTypeKey = +event;

    this.entityTypeNamePlural = this.data.entityTypes.get(+event)['pluralName'];
    this.entityTypeName = this.data.entityTypes
      .get(this.entityTypeKey)
      .name.toLowerCase();
    this.entities = this.data.getEntities(this.entityTypeKey);

    this.onDashboardChange.emit(this.entityTypeKey);
    this.calcIsHidden();
    this.setCounts();
    //select first visible element

    if (this.isHiddenMap) {
      if (this.isHiddenMap.size > 0) {
        if (this.isHiddenMap.entries()) {
          try {
            let [k, v] = [...this.isHiddenMap.entries()].find((e) => !e[1]);
            if (
              this.entityTypeName == 'search' ||
              this.entityTypeName == 'template' ||
              this.entityTypeName == 'setting'
            ) {
              let t = this.data.entityTypes.size;
              //this.selectedEntityKey = entityKey % t + 1;
              // this.selectedEntityKey = k + this.entityType;
              this.selectedEntityKey = 0;
            } else {
              this.selectedEntityKey = k;
            }
            this.onEntityChange.emit(this.selectedEntityKey);
          } catch (e) {}
        }
      }
    }
  }

  shouldBeHidden(e: EntityFunctional): boolean {
    let inFilter = true;
    let inName = true;
    let inSuffix = true;
    let isType = true;
    let inStatus = true;
    let inActive = true;

    //isType = e.type === this.entityTypeName;
    if (this.showActiveOnly) {
      inActive = e.isActive;
    }

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
          inSuffix =
            e['suffix'].toLowerCase().indexOf(this.filterText.toLowerCase()) >
            -1;
          inFilter = inName || inSuffix;
        }
      }
    }

    let doShow = inFilter && inStatus && isType && inActive;

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
        (e) => e['isActive'] && e.type === this.entityTypeKey
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Dormant() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => !e['isActive'] && e.type === this.entityTypeKey
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Tasks() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => e['tasksCount'] > 0 && e.type === this.entityTypeKey
      ).length;
    } else {
      return 0;
    }
  }

  getCount_All() {
    if (this.entities) {
      // return [...this.entities.values()].filter(
      //   (e) => e.type === this.entityTypeName
      // ).length;
      return this.isHiddenMap.size;
    } else {
      return 0;
    }
  }

  doFilter(event: any) {
    this.filterText = event;
    this.isLoadAll = this.isLoadAll || this.filterText.length > 0;
    this.setCounts();
  }

  doChangeShowActive(event: any) {
    this.showActiveOnly = event;

    //this.entities = this.data.getFunctionalEntitiesAll();
    //this.loadEntities();
    if (this.showActiveOnly && this.rdoActiveDormantAll === 'pause') {
      this.rdoActiveDormantAll = 'all';
    }
    if (this.showActiveOnly && this.rdoActiveDormantAll === 'play') {
      this.rdoActiveDormantAll = 'all';
    }
    //this.calcIsHidden();
    this.setCounts();
  }

  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
    this.countAll = this.getCount_All();
    this.countTasks = this.getCount_Tasks();
    this.countDormant = this.getCount_Dormant();
    this.countActive = this.getCount_Active();
  }

  getCountFiltered() {
    if (this.entities) {
      return [...this.isHiddenMap.values()].filter((e) => !e).length;
    } else {
      return 0;
    }
  }

  doChangeRdo(event: any) {
    this.rdoActiveDormantAll = event;
    this.setCounts();
  }

  calcIsHidden() {
    if (this.entities) {
      // let a = [...this.entities.entries()];
      // this.isHiddenMap = new Map();
      // for (let i = 0; i < a.length; i++) {
      //   let [k, v] = a[i];
      //   this.isHiddenMap.set(k, this.shouldBeHidden(v));
      // }
      this.isHiddenMap = new Map();
      let typeName = this.entityTypeName.toLowerCase();

      this.entities.forEach((value: EntityFunctional, key: number) => {
        //if (value.type == typeName) {
        this.isHiddenMap.set(key, this.shouldBeHidden(value));
        //}
      });
    }
  }

  doAdd() {
    this.isNewMessage = true;
  }
  doCancel() {
    this.isNewMessage = false;
  }

  doEntityChoose(entityKey: number) {
    if (
      this.entityTypeKey == EnumEntityType.Dashboard ||
      this.entityTypeKey == EnumEntityType.Search ||
      this.entityTypeKey == EnumEntityType.Template ||
      this.entityTypeKey == EnumEntityType.Setting
    ) {
      this.doEntityTypeChange(entityKey);
    } else {
      this.selectedEntityKey = entityKey;
      this.onEntityChange.emit(this.selectedEntityKey);
    }
  }
}
