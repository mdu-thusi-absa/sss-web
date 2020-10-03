import { Component, OnInit } from '@angular/core';
import { Entities } from 'src/app/data/data-entities';
import { EntityTaskWalker } from 'src/app/data/data-entity-kids';
import { EnumEntityType } from 'src/app/data/data-entity-types';
import { TaskWalker } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-task-list',
  templateUrl: './flow-task-list.component.html',
  styleUrls: ['./flow-task-list.component.css'],
})
export class FlowTaskListComponent implements OnInit {
  values: Entities<EntityTaskWalker>;
  entityTaskFlow: EntityTaskWalker;
  activeLabel = '';

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.values = this.data.getEntities(EnumEntityType.TaskWalker) as Entities<
      EntityTaskWalker
    >;
    //this.values
    if (this.countAuthorised() > 0) this.activeLabel = 'thumb_up';
    else this.activeLabel = 'pause';
    this.doRadioChoice(this.activeLabel);
  }

  _isNew = false;
  get isNew() {
    return this._isNew;
  }
  set isNew(v: boolean) {
    if (!v) {
      this.doRadioChoice(this.activeLabel); //referesh the current list
    }
    this._isNew = v;
  }

  doSelect(key: number) {
    this.isNew = true
    //console.log(this.values.get(0))
    this.entityTaskFlow = this.values.get(key)
    //console.log(this.entityTaskFlow);
    
  }

  doChange(event: any) {
    // console.log('doChange',event)
  }

  doAdd() {
    this.isNew = true;
  }

  doRadioChoice(name: string) {
    if (name) {
      this.activeLabel = name;
      let d = this.data
        .getEntities(EnumEntityType.TaskStatus)
        .selectFirst('label', name);
      if (d) {
        this.values = this.data
          .getEntities(EnumEntityType.TaskWalker)
          .select('taskStatusKey', d.key) as Entities<EntityTaskWalker>;
      }
    }
    //console.log(this.values.get(0))
  }

  keyPaused: number;
  countPaused() {
    return this._countStat('keyPaused', 'pause');
  }

  keyCancelled: number;
  countCancelled() {
    return this._countStat('keyCancelled', 'cancel');
  }

  keyAthorised: number;
  countAuthorised() {
    return this._countStat('keyAthorised', 'thumb_up');
  }

  keyFinalised: number;
  countFinalised() {
    return this._countStat('keyFinalised', 'ok');
  }

  keyWaitingAuth: number;
  countWaitingAutho() {
    return this._countStat('keyWaitingAuth', 'thumb_up_down');
  }

  private _countStat(keyName: string, label: string) {
    let key = this[keyName];
    if (!key && key != 0) {
      key = this.data
        .getEntities(EnumEntityType.TaskStatus)
        .selectFirst('label', label).key;
      this[keyName] = key;
    }
    return this.data
      .getEntities(EnumEntityType.TaskWalker)
      .select('taskStatusKey', key).size;
  }
}
