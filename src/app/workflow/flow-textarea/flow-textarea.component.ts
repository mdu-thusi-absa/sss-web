import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDesc } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-textarea',
  templateUrl: './flow-textarea.component.html',
  styleUrls: ['./flow-textarea.component.css']
})
export class FlowTextareaComponent implements OnInit {
  @Input() taskFlow: TaskDesc;
  @Output() onSaveNext = new EventEmitter();
  @Output() onSavePrev = new EventEmitter();
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Input() stepNumber = 1

  constructor(public data:DataService) {}

  ngOnInit(): void {
    // this.value = this.taskFlow.value;
  }

  getValueString(){
    let s = this.taskFlow.value + ''
    if (s.length>20)
      s = s.slice(0,20) + '...'
    return s
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

