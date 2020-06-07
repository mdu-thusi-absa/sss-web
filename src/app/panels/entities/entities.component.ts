import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FunctionalEntity, Entities, Entity, EveryEntity } from '../../models';
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
  entities: Entities<EveryEntity>; // = new FunctionalEntities();
  //entitiesAll: FunctionalEntities;
  entityType = 0;
  entityTypeName = '';
  entityTypesPlural: any;
  entityTypeNamePlural = '';
  entityTypeNames = new Entities<Entity>(Entity);
  showActiveOnly = true;
  isHiddenMap = new Map();
  mapEntityTypes = new Map();
  @Output() onEntityTypeChange = new EventEmitter();
  @Output() onEntityChange = new EventEmitter();
  selectedEntityKey: number;
  countFiltered = 0;
  countAll = 0;
  countTasks = 0;
  countDormant = 0;
  countActive = 0;
  isLoadAll = false;
  loadedMap = new Map();
  limitVisibleRows = 50;

  constructor(public data: DataService) {}

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  // // @HostListener('window:scroll', ['$event']) // for window scroll events
  onScrollTable(event:any) {
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
        // console.log(this.isLoadAll,typeName,n);
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
    this.entityTypeNames = this.data.entityTypes;
    this.entityTypesPlural = this.data.getEntityTypesPlural();
    this.loadEntities();
    this.doEntityTypeChange(this.entityType);
    this.setCounts();
    if (this.data.lg) console.log(new Date().getTime(),'loaded:entities');
    // this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  //  ngAfterViewChecked(): void {
  //    try {
  //        if(this.fragment) {
  //            document.querySelector('#' + this.fragment).scrollIntoView();
  //        }
  //    } catch (e) { }
  //  }

  loadEntities() {
    //this.data.makeFunctionalEntities();
    this.entities = this.data.getFunctionalEntitiesAll();
    // this.listMap = new Map();
    // let f: FunctionalEntities;
    // this.entitiesAll.forEach((value: FunctionalEntity, key: number) => {
    //   if (!this.listMap.has(value.type)){
    //     let f = new FunctionalEntities();
    //     this.listMap.set(value.type,f)
    //   }
    //   f = this.listMap.get(value.type)
    //   f.add() (key,value);
    // });
  }

  doEntityTypeChange(event: any) {
    this.isLoadAll = this.isLoadAll || this.entityType != +event;
    this.entityType = +event;
    this.entityTypeNamePlural = this.entityTypesPlural.get(
      this.entityType
    ).name;
    this.entityTypeName = this.entityTypeNames
      .get(this.entityType)
      .name.toLowerCase();
    this.onEntityTypeChange.emit(this.entityType);
    this.calcIsHidden();
    this.setCounts();
    //select first visible element

    if (this.isHiddenMap) {
      if (this.isHiddenMap.size > 0) {
        if (this.isHiddenMap.entries()) {
          try {
            let [k, v] = [...this.isHiddenMap.entries()].find((e) => !e[1]);
            //this.entities.currentKey = k;
            this.selectedEntityKey = k;
            this.onEntityChange.emit(this.selectedEntityKey);
          } catch (e) {}
        }
      }
    }
  }

  shouldBeHidden(e: FunctionalEntity): boolean {
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
        (e) => e['isActive'] && e.type === this.entityTypeName
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Dormant() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => !e['isActive'] && e.type === this.entityTypeName
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Tasks() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => e['tasksCount'] > 0 && e.type === this.entityTypeName
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
    this.loadEntities();
    if (this.showActiveOnly && this.rdoActiveDormantAll === 'pause') {
      this.rdoActiveDormantAll = 'all';
    }
    if (this.showActiveOnly && this.rdoActiveDormantAll === 'play') {
      this.rdoActiveDormantAll = 'all';
    }
    this.calcIsHidden();
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

      this.entities.forEach((value: FunctionalEntity, key: number) => {
        if (value.type == typeName) {
          this.isHiddenMap.set(key, this.shouldBeHidden(value));
        }
      });
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
    //this.entities.currentKey = entityKey;
    this.selectedEntityKey = entityKey;
    this.onEntityChange.emit(this.selectedEntityKey);
  }
}
