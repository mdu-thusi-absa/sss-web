import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowConfirm } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-confirm',
  templateUrl: './flow-confirm.component.html',
  styleUrls: ['./flow-confirm.component.css'],
})
export class FlowConfirmComponent implements OnInit {
  @Input() taskFlow = new TaskFlowConfirm(this.data);
  value = false;
  @Output() onSaveNext = new EventEmitter();
  @Input() showSavePrev = false;

  constructor(public data:DataService) {}

  ngOnInit(): void {
    this.value = this.taskFlow.value;
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }
}
