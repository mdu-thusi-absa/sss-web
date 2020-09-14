import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { WorkFlow } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';
import { data } from 'jquery';

@Component({
  selector: 'app-flow-task',
  templateUrl: './flow-task.component.html',
  styleUrls: ['./flow-task.component.css'],
})
export class FlowTaskComponent implements OnInit {
  title = 'Workflow'
  workFlow: WorkFlow
  panelBodyID: string

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.workFlow = this.data.workFlow;
  }

  doSaveNext() {
    this.workFlow.moveToNext();
    setTimeout(this.updateScroll, 100,this.panelBodyID);
  }

  doSavePrev() {
    if (this.workFlow.currentTaskIndex > 0) this.workFlow.moveToPrev();
  }

  updateScroll(panelBodyID: string) {
    let elementPanelBody = document.getElementById(panelBodyID);
    elementPanelBody.scrollTop = +elementPanelBody.scrollHeight;
    console.log(elementPanelBody.offsetTop);
    
  }

  doMakePanelIED(event: any){
    this.panelBodyID = 'input-panel-' + event
    //this.panelHeaderID = event + '-title'
  }
}
