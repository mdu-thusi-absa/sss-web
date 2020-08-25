import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-entity-task',
  templateUrl: './entity-task.component.html',
  styleUrls: ['./entity-task.component.css']
})
export class EntityTaskComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() index = 0;
  @Input() task: Task;
  @Input() docs : string[]
  @Input() isEdit = false;
  rows = 20;
  isDown_SubTasks = false;
  isDown_Files = false;

  @Output() onClose = new EventEmitter()
  
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log(new Date().getTime(),'loaded:entity-task');
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

}
