import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowForm } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-form',
  templateUrl: './flow-form.component.html',
  styleUrls: ['./flow-form.component.css'],
})
export class FlowFormComponent implements OnInit {
  @Input() taskFlow: TaskFlowForm;
  @Input() showSavePrev = false;
  @Output() onChange = new EventEmitter();
  @Output() onSaveNext = new EventEmitter();
  @Output() onSavePrev = new EventEmitter();

  constructor(public data:DataService) {}

  ngOnInit(): void {}

  doSaveNext(){
    this.onSaveNext.emit();
  }

  doSavePrev(){
    this.onSavePrev.emit();
  }
}
