import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { TaskWalker } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';
// import { data } from 'jquery';

@Component({
  selector: 'app-flow-task',
  templateUrl: './flow-task.component.html',
  styleUrls: ['./flow-task.component.css'],
})
export class FlowTaskComponent implements OnInit {
  title = 'Workflow'
  workFlow: TaskWalker
  panelBodyID: string
  showAll: boolean = false;
  @Output() onClose = new EventEmitter()

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.workFlow = this.data.workFlow;
    this.workFlow.notifyIs = true
  }


  doSync(event: boolean){
    this.workFlow.notifyIs = event
  }

  doShowAll(event: boolean){
    this.showAll = event
  }

  showStep(index: number): boolean{
    return index > this.workFlow.tasks.length-10 || this.showAll
  }

  doDrill(){
    console.log('flow-task','doDrill');
    
    setTimeout(this.updateScroll, 100,this.panelBodyID);
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
  }

  doMakePanelIED(event: any){
    this.panelBodyID = 'input-panel-' + event
    //this.panelHeaderID = event + '-title'
  }
}
