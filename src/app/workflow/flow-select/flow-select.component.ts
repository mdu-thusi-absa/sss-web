import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowSelect, Entities, EveryEntity, Country, enumTaskFlowSelectSource } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-flow-select',
  templateUrl: './flow-select.component.html',
  styleUrls: ['./flow-select.component.css']
})
export class FlowSelectComponent implements OnInit {
  @Input() taskFlow = new TaskFlowSelect();
  @Input() values: Entities<EveryEntity>; // = new Entities<EveryEntity>();
  @Input() value = 0;
  @Input() showSavePrev = false;
  @Output() onChange = new EventEmitter();
  @Output() onSaveNext = new EventEmitter();
  

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.values = this.data.getList(this.taskFlow.sourceType);
  }

  doChange(event: any) {
    this.value = +event;
    this.taskFlow.value = +this.value;
    this.onChange.emit(this.value);
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    this.onSavePrev.emit();
  }

}
