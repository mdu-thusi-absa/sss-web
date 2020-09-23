import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskMessage } from 'src/app/data/data-workflow-classes';
//import { data } from 'jquery';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-message',
  templateUrl: './flow-message.component.html',
  styleUrls: ['./flow-message.component.css']
})
export class FlowMessageComponent implements OnInit {
  @Input() taskFlow: TaskMessage;
  value = false;
  @Output() onSaveNext = new EventEmitter();
  @Input() showClose = false;
  @Input() showSaveNext = false;
  @Input() showSavePrev = false;
  @Input() stepNumber = 1

  constructor(public data:DataService) {}

  ngOnInit(): void {
    this.value = this.taskFlow.value;
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    this.onSavePrev.emit();
  }


}
