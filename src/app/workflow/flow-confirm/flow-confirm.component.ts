import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskConfirm } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-confirm',
  templateUrl: './flow-confirm.component.html',
  styleUrls: ['./flow-confirm.component.css'],
})
export class FlowConfirmComponent implements OnInit {
  @Input() taskFlow: TaskConfirm;
  // value = false;
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
    if (this.taskFlow.value) return 'Yes'
    return 'No'
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
