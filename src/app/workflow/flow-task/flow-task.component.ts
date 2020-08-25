import { Component, OnInit, Input } from '@angular/core';
import { TaskFlow, WorkFlow } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';
import { data } from 'jquery';

@Component({
  selector: 'app-flow-task',
  templateUrl: './flow-task.component.html',
  styleUrls: ['./flow-task.component.css'],
})
export class FlowTaskComponent implements OnInit {
  title = 'Sample';
  @Input() workFlow = new WorkFlow(this.data);

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.workFlow = this.data.getWorkFlowSample();
    this.workFlow.start();
  }

  doSaveNext(taskIndex: number) {
    //verify here or in each flow, report individually, before moving on
    this.workFlow.moveToNext();
  }

  doSavePrev(taskIndex: number) {
    //verify here or in each flow, report individually, before moving on
    this.workFlow.moveToPrev();
  }
}
