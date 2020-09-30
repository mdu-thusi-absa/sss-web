import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { TaskWalker } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-task',
  templateUrl: './flow-task.component.html',
  styleUrls: ['./flow-task.component.css'],
})
export class FlowTaskComponent implements OnInit {
  title = 'Workflow'
  workFlow: TaskWalker
  panelBodyID: string
  showAll: boolean = false
  cancelTaskIs = false
  @Output() onClose = new EventEmitter()


  eid = 'flow-task'
  constructor(private data: DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    this.workFlow = this.data.workFlow;
    this.workFlow.notifyIs = true
  }

  doReset(){
    this.cancelTaskIs = false
    this.workFlow.start()
    this.onClose.emit('')
  }

  doClose(){
    document.getElementById('button-100001').click()
  }

  doSync(event: boolean){
    this.workFlow.notifyIs = event
  }

  doShowAll(event: boolean){
    this.showAll = event
  }

  showStep(index: number): boolean{
    let e = this.workFlow.tasks[index]
    // console.log(e);
    
    let showOnConditionOfPreviousValues = e.getDoNotSkip()
    // console.log(showOnConditionOfPreviousValues);
    
    return (index > this.workFlow.tasks.length-10 || this.showAll) && showOnConditionOfPreviousValues
  }

  doDrill(){
    console.log('flow-task','doDrill');
    
    setTimeout(this.updateScroll, 100,this.panelBodyID);
  }

  doSaveNext() {
    this.workFlow.moveToNext();
    setTimeout(this.updateScroll, 100,this.panelBodyID);
  }

  updateScroll(panelBodyID: string) {
    let elementPanelBody = document.getElementById(panelBodyID);
    elementPanelBody.scrollTop = +elementPanelBody.scrollHeight;
  }

  doSavePrev() {
    if (this.workFlow.currentTaskIndex > 0) this.workFlow.moveToPrev();
  }

  

  doMakePanelIED(event: any){
    this.panelBodyID = 'input-panel-' + event
    //this.panelHeaderID = event + '-title'
  }
}
