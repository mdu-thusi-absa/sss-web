import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-audit',
  templateUrl: './entity-audit.component.html',
  styleUrls: ['./entity-audit.component.css']
})
export class EntityAuditComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() index = 0;
  @Input() task: Task;
  @Input() docs : string[]
  @Input() isEdit = false;
  rows = 20;

  @Output() onClose = new EventEmitter()
  
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entity-audit');
    this.data.progress += 1;
  }

  toggleDone(){
    this.task.mainGoal.isDone = !this.task.mainGoal.isDone;
  }

  getID(){
    let s = / /g;
    let t = this.task.mainGoal.title.toLowerCase().replace(s, '-');
    s = /\//g;
    t = t.toLowerCase().replace(s, '-');
    s = /:/g;
    t = t.toLowerCase().replace(s, '-');
    s = /,/g;
    t = t.toLowerCase().replace(s, '-');
    return t;
  }

  doEdit(){
    this.isEdit = true;
  }

  doEditDoc(index: number){

  }
  doAddDoc(){

  }

  doClose(){
    this.isEdit = false;
    this.onClose.emit();
  }

  showDocs(){
    if (this.rows===20) this.rows = 15;
    if (this.rows===15) this.rows = 20;
  }

  showConfirm(attribute: string, value: string){
    if (value=='') confirm("Are you sure you want to apply all values from '" + attribute + "' column");
    else confirm("Are you sure you want to apply '" + value + "' to '" + attribute + "'");
  }

}

