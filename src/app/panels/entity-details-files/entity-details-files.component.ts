import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';
import { EntityNatural } from 'src/app/data/data-entity-kids';
import { AnyEntity } from 'src/app/data/data-entities';

@Component({
  selector: 'app-entity-details-files',
  templateUrl: './entity-details-files.component.html',
  styleUrls: ['./entity-details-files.component.css'],
})
export class EntityDetailsFilesComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  private _title = '';
  @Input () set title(v: string){
    this._title = Entity.sentanceCase(v);
  }
  get title(){
    return this._title;
  }
  @Input() persons: EntityNatural[];
  @Input() entity: AnyEntity;
  @Input() showTitle = true;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onDirty = new EventEmitter();

  customCount = 1; //default number to display
  elements = new Array(this.customCount);
  elementsType: string[] = new Array(50); //max number
  selectedCount = 0;
  countFiltered = 0;
  fileFilterText = '';

  constructor(public data: DataService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.elementsType.length; i++) {
      this.elementsType[i] = 'text';
    }
    if (this.data.lg) console.log('loaded:entities-details-files');
    this.data.progress += 1;
  }

  doSelectItem(event: any) {
    this.selectedCount = this.selectedCount + (event ? 1 : -1);
  }

  doRecord(event: any) {
    this.onRecord.emit(event);
  }

  doTask(event: any) {
    this.onTask.emit(event);
  }

  doFile(event: any) {
    this.onFile.emit(event);
  }

  doChangeCount(event: any) {
    this.customCount = event;
    // let c = 30;
    // this.elements = Array.from(Array(30).keys());
    this.elements = new Array();
    for (let i = 0; i < this.customCount; i++) {
      this.elements.push(i);
    }
  }

  doChangeCustomType(customIndex: number, event: any) {
    let et = Object.assign(this.elementsType);
    et[customIndex] = event;
    this.elementsType = et;
  }
}
