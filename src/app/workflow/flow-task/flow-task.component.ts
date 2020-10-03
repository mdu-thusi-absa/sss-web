import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntityTaskWalker } from 'src/app/data/data-entity-kids';
import { TaskWalker } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-task',
  templateUrl: './flow-task.component.html',
  styleUrls: ['./flow-task.component.css'],
})
export class FlowTaskComponent implements OnInit {
  title = 'Workflow';
  workFlow: TaskWalker;
  panelBodyID: string;
  showAll: boolean = false;
  cancelTaskIs = false;
  @Output() onClose = new EventEmitter();

  eid = 'flow-task';
  constructor(private data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  _entityTaskFlow: EntityTaskWalker;
  @Input() set entityTaskFlow(v: EntityTaskWalker) {
    this._entityTaskFlow = v;
    if (this._entityTaskFlow && this.workFlow) {
      this.workFlow.needToVerify = this._entityTaskFlow.taskStatusKey != 1;
      //let t = JSON.stringify(this._entityTaskFlow.value) + ''
      //console.log(t)
      this.workFlow.init(false);
      //t = JSON.stringify(this._entityTaskFlow.value) + ''
      //console.log(t)
      this.workFlow.load(this._entityTaskFlow.value);
    }
  }

  ngOnInit(): void {
    this.workFlow = this.data.workFlow;

    this.workFlow.notifyIs = true;
  }

  doReset() {
    this.cancelTaskIs = false;
    this.workFlow.start(false);
    this.onClose.emit('');
  }

  doClose() {
    if (this.workFlow.isFinilised) this.doReset();
    else if (this.workFlow.tasks.length > 1)
      document.getElementById('button-100001').click();
    else this.doReset();
  }

  doSync(event: boolean) {
    this.workFlow.notifyIs = event;
  }

  doShowAll(event: boolean) {
    this.showAll = event;
  }

  showStep(index: number): boolean {
    let e = this.workFlow.tasks[index];
    // console.log(e);

    let showOnConditionOfPreviousValues = e.getDoNotSkip();
    // console.log(showOnConditionOfPreviousValues);

    return (
      (index > this.workFlow.tasks.length - 10 || this.showAll) &&
      showOnConditionOfPreviousValues
    );
  }

  doDrill() {
    console.log('flow-task', 'doDrill');

    setTimeout(this.updateScroll, 100, this.panelBodyID);
  }

  doSaveNext() {
    this.workFlow.moveToNext();
    setTimeout(this.updateScroll, 100, this.panelBodyID);
  }

  updateScroll(panelBodyID: string) {
    let elementPanelBody = document.getElementById(panelBodyID);
    elementPanelBody.scrollTop = +elementPanelBody.scrollHeight;
  }

  doSavePrev() {
    if (this.workFlow.currentTaskIndex > 0) this.workFlow.moveToPrev();
  }

  doMakePanelIED(event: any) {
    this.panelBodyID = 'input-panel-' + event;
    //this.panelHeaderID = event + '-title'
  }
}
