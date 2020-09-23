import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskAddress } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-address',
  templateUrl: './flow-address.component.html',
  styleUrls: ['./flow-address.component.css']
})
export class FlowAddressComponent implements OnInit {
  @Input() taskFlow: TaskAddress;
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
    return this.taskFlow.value.toString()
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


