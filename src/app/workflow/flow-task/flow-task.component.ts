import { Component, OnInit, Input } from '@angular/core';
import { WorkFlow } from 'src/app/data/data-models-workflow';
import { DataService } from 'src/app/data/data.service';
import { data } from 'jquery';

@Component({
  selector: 'app-flow-task',
  templateUrl: './flow-task.component.html',
  styleUrls: ['./flow-task.component.css'],
})
export class FlowTaskComponent implements OnInit {
  title = 'Sample';
  workFlow: WorkFlow

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.workFlow = this.data.workFlow;
  }

  doSaveNext() {
    //verify here or in each flow, report individually, before moving on
    this.workFlow.moveToNext();
  }

  doSavePrev() {
    //verify here or in each flow, report individually, before moving on
    this.workFlow.moveToPrev();
  }
}
