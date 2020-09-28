import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Entity } from 'src/app/data/data-entity-parent';

@Component({
  selector: 'app-input-schedule',
  templateUrl: './input-schedule.component.html',
  styleUrls: ['./input-schedule.component.css']
})
export class InputScheduleComponent implements OnInit {
  @Input() isNarrow = false;
  private _title = '';
  @Input () set title(v: string){
    this._title = Entity.sentanceCase(v);
  }
  get title(){
    return this._title;
  }
  @Input() stepNumber = 0;
  @Input() hideBody = true;
  
  eid = 'input-schedule'
  constructor(public data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doFile(event: any){

  }

  doRecord(event: any){

  }

  doTask(event: any){

  }

  getID() {
    let s = / /g;
    let t = this.title.toLowerCase().replace(s, '-');
    s = /\//g;
    t = t.toLowerCase().replace(s, '-');
    s = /\:/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\,/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\-\-/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\(/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\)/g;
    t = t.toLowerCase().replace(s, '-');
    return t;
  }
}
