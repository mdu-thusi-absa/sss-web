import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskText } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-text',
  templateUrl: './flow-text.component.html',
  styleUrls: ['./flow-text.component.css']
})
export class FlowTextComponent implements OnInit {
  @Input() taskFlow: TaskText;
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
    return this.taskFlow.value
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

