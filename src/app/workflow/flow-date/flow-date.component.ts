import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDate } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-date',
  templateUrl: './flow-date.component.html',
  styleUrls: ['./flow-date.component.css']
})
export class FlowDateComponent implements OnInit {
  @Input() taskFlow: TaskDate;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Input() stepNumber = 1
  
  @Output() onSaveNext = new EventEmitter();
  @Output() onSavePrev = new EventEmitter();
  @Output() onEnter = new EventEmitter();

  constructor(public data:DataService) {}

  ngOnInit(): void {
    // this.value = this.taskFlow.value;
  }

  getValueString(){
    if (this.taskFlow.value) return this.taskFlow.value.toISOString().slice(0, 10)
    return ''
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }
  doSavePrev(){
    this.onSavePrev.emit();
  }

  doChange(event: any) { 
    this.taskFlow.errorMessage = ''
    this.taskFlow.value = event
    //this.onChange.emit(this.value);
  }
}

