import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Entities, AnyEntity } from '../../data/data-entities';
import { DataService } from 'src/app/data/data.service';
// import { EntityDetailsFilesComponent } from '../entity-details-files/entity-details-files.component';
// import { ExecException } from 'child_process';
import { EnumEntityType } from 'src/app/data/data-entity-types';
import { EntityFunctional } from 'src/app/data/data-entity-kids';
import { TaskWalker } from 'src/app/data/data-workflow-classes';
// import { ActivatedRoute } from '@angular/router';

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
  showActiveOnly = false;
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
  private fragment: string;

  eid = 'panel-entities';
  //,private route: ActivatedRoute
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
    this.doEntityTypeChange(this.entityTypeKey);
    this.setCounts();
    this.data.progress += 1;
    this.data.workFlow.addListener(this);
    //this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  // ngAfterViewInit(): void {
  //   // + this.fragment
  //   // try {
  //   //   document.querySelector('#' + this.fragment).scrollIntoView();
  //   // } catch (e) {
  //   //   console.log(e);
  //   // }
  //   //this.navigate( ['/somepath', id ], {fragment: 'test'});
  // }

  notify(eventName: string, sourceObject: object) {
    if (sourceObject['type'])
      if (sourceObject['type'] == 'workflow') {
        let w = sourceObject as TaskWalker;
        let k = w.workflowValuesObject['companyKey'];
        this.entityTypeKey = EnumEntityType.Company;
        if (k || k == 0) {
          this.selectedEntityKey = k;
          this.doEntityChoose(this.selectedEntityKey);
          this.filterText = this.entities.get(this.selectedEntityKey).name;
          this.doFilter(this.filterText)
        }
      }
  }

  private selectFirstVisibleRow_GetKey() {
    let [k, v] = [...this.isHiddenMap.entries()].find((e) => !e[1]);
    return k;
  }
  private selectFirstVisibleRow_DashboardIsShown(): boolean {
    return (
      this.entityTypeKey == EnumEntityType.Dashboard ||
      this.entityTypeKey == EnumEntityType.Search ||
      this.entityTypeKey == EnumEntityType.Template ||
      this.entityTypeKey == EnumEntityType.Setting
    );
  }
  private selectFirstVisibleRow() {
    try {
      this.selectedEntityKey = this.selectFirstVisibleRow_GetKey();
      this.onEntityChange.emit(this.selectedEntityKey);
    } catch (e) {
      console.log('EntitiesComponent -> selectFirstVisibleRow -> e', e);
    }
  }

  private verifyHiddenMap_HasSomething() {
    if (this.isHiddenMap)
      if (this.isHiddenMap.size > 0)
        if (this.isHiddenMap.entries()) return true;
    return false;
  }

  private setEntityNames() {
    this.entityTypeNamePlural = this.data.entityTypes.get(this.entityTypeKey)[
      'pluralName'
    ];
    this.entityTypeName = this.data.entityTypes
      .get(this.entityTypeKey)
      .name.toLowerCase();
  }

  doEntityTypeChange(event: any) {
    this.entityTypeKey = +event;
    this.isLoadAll = this.isLoadAll || this.entityTypeKey != +event;
    this.setEntityNames();
    this.entities = this.data.getEntities(this.entityTypeKey);
    this.onDashboardChange.emit(this.entityTypeKey);
    this.calcIsHidden();
    this.setCounts();
    if (this.verifyHiddenMap_HasSomething()) this.selectFirstVisibleRow();
  }

  private filterInText(text: string, filterText: string): boolean {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
  }

  shouldBeHidden_VsFilterText(e: EntityFunctional): boolean {
    return (
      this.filterInText(e.name, this.filterText) ||
      this.filterInText(e.suffix, this.filterText)
    );
  }

  shouldBeHidden(e: EntityFunctional): boolean {
    let inFilter = true;
    let isType = true;
    let inStatus = true;
    let inActive = true;

    if (this.showActiveOnly) {
      inActive = e.activeIs;
    }

    if (isType) {
      if (this.rdoActiveDormantAll === 'all') inStatus = true;
      else if (this.rdoActiveDormantAll === 'play') inStatus = e['activeIs'];
      else if (this.rdoActiveDormantAll === 'pause') inStatus = !e['activeIs'];
      else if (this.rdoActiveDormantAll === 'flash')
        inStatus = e['tasksCount'] > 0;

      if (inStatus) {
        if (this.filterText.length > 0) {
          inFilter = this.shouldBeHidden_VsFilterText(e);
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
        (e) => e['activeIs'] && e.entityTypeKey === this.entityTypeKey
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Dormant() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => !e['activeIs'] && e.entityTypeKey === this.entityTypeKey
      ).length;
    } else {
      return 0;
    }
  }

  getCount_Tasks() {
    if (this.entities) {
      return [...this.entities.values()].filter(
        (e) => e['tasksCount'] > 0 && e.entityTypeKey === this.entityTypeKey
      ).length;
    } else {
      return 0;
    }
  }

  getCount_All() {
    if (this.entities) {
      return this.isHiddenMap.size;
    } else {
      return 0;
    }
  }

  doFilter(event: string) {
    this.filterText = event;
    this.isLoadAll = this.isLoadAll || this.filterText.length > 0;
    this.setCounts();
  }

  doChangeShowActive(event: any) {
    this.showActiveOnly = event;

    if (this.showActiveOnly && this.rdoActiveDormantAll === 'pause') {
      this.rdoActiveDormantAll = 'all';
    }
    if (this.showActiveOnly && this.rdoActiveDormantAll === 'play') {
      this.rdoActiveDormantAll = 'all';
    }
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
      this.isHiddenMap = new Map();
      this.entities.forEach((value: EntityFunctional, key: number) => {
        this.isHiddenMap.set(key, this.shouldBeHidden(value));
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
    if (this.selectFirstVisibleRow_DashboardIsShown()) {
      this.doEntityTypeChange(entityKey);
    } else {
      this.selectedEntityKey = entityKey;
      this.onEntityChange.emit(this.selectedEntityKey);
    }
  }
}
