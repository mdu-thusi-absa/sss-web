import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowConfirm, TaskFlow } from 'src/app/models';

@Component({
  selector: 'app-flow-confirm',
  templateUrl: './flow-confirm.component.html',
  styleUrls: ['./flow-confirm.component.css'],
})
export class FlowConfirmComponent implements OnInit {
  @Input() taskFlow = new TaskFlowConfirm();
  value = false;
  @Output() onSaveNext = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.value = this.taskFlow.value;
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }
}
