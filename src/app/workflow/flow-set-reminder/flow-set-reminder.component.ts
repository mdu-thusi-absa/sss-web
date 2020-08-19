import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowReminder } from 'src/app/models';

@Component({
  selector: 'app-flow-set-reminder',
  templateUrl: './flow-set-reminder.component.html',
  styleUrls: ['./flow-set-reminder.component.css']
})
export class FlowSetReminderComponent implements OnInit {
  @Input() taskFlow = new TaskFlowReminder();
  @Output() onSaveNext = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    this.onSavePrev.emit();
  }

}
