import { Component, OnInit, Input } from '@angular/core';
import { TaskFlow, WorkFlow } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-flow-task',
  templateUrl: './flow-task.component.html',
  styleUrls: ['./flow-task.component.css'],
})
export class FlowTaskComponent implements OnInit {
  title = 'Sample';
  @Input() workFlow = new WorkFlow();

  constructor(public data: DataService) {}

  ngOnInit(): void {}

  doSaveNext(taskIndex: number) {
    //verify here or in each flow, report individually, before moving on
    this.workFlow.tasks[taskIndex].isCurrent = false;
    this.workFlow.tasks[taskIndex].isDone = true;
    //save info
    //mark next as current
    if (this.workFlow.tasks.length > taskIndex+1)
      this.workFlow.tasks[taskIndex + 1].isCurrent = true;
  }

  doSavePrev(taskIndex: number) {
    //verify here or in each flow, report individually, before moving on
    this.workFlow.tasks[taskIndex].isCurrent = false;
    //save info
    //mark next as current
    if (taskIndex>0)
      this.workFlow.tasks[taskIndex - 1].isCurrent = true;
  }
}
