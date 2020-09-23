import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskReminder } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-set-reminder',
  templateUrl: './flow-set-reminder.component.html',
  styleUrls: ['./flow-set-reminder.component.css']
})
export class FlowSetReminderComponent implements OnInit {
  @Input() taskFlow: TaskReminder;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Output() onSaveNext = new EventEmitter();
  @Input() stepNumber = 1
  
  constructor(public data:DataService) { }

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
