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
    this.workFlow.moveToNext();
  }

  doSavePrev(taskIndex: number) {
    //verify here or in each flow, report individually, before moving on
    this.workFlow.moveToPrev();
  }
}
