import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowMessage } from 'src/app/models';

@Component({
  selector: 'app-flow-message',
  templateUrl: './flow-message.component.html',
  styleUrls: ['./flow-message.component.css']
})
export class FlowMessageComponent implements OnInit {
  @Input() taskFlow = new TaskFlowMessage();
  value = false;
  @Output() onSaveNext = new EventEmitter();
  @Input() showClose = false;
  @Input() showSaveNext = false;
  @Input() showSavePrev = false;

  constructor() {}

  ngOnInit(): void {
    this.value = this.taskFlow.value;
  }

  doSaveNext(){
    console.log(1);
    
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    this.onSavePrev.emit();
  }


}
