import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowSelect, Entities, EveryEntity, EnumEntityType } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-select',
  templateUrl: './flow-select.component.html',
  styleUrls: ['./flow-select.component.css']
})
export class FlowSelectComponent implements OnInit {
  @Input() taskFlow = new TaskFlowSelect(this.data);
  //@Input() values: Entities<EveryEntity>; // = new Entities<EveryEntity>();
  @Input() value = 0;
  @Input() showSavePrev = false;
  @Output() onChange = new EventEmitter();
  @Output() onSaveNext = new EventEmitter();
  choiceValue = ''
  

  constructor(public data: DataService) { }

  ngOnInit(): void {
    //this.values = this.data.getEntities(this.taskFlow.sourceType);
    this.value = this.taskFlow.values.firstKey
    this.taskFlow.value = this.value
  }

  doChange(event: any) {
    // console.log(event)
    this.value = +event;
    //this.taskFlow.value = +this.value;
    //this.choiceValue = this.taskFlow.values.get(this.taskFlow.value).name
    this.onChange.emit(this.value);
  }

  doSaveNext(){
    //console.log('next');
    this.taskFlow.value = +this.value;
    this.choiceValue = this.taskFlow.values.get(this.taskFlow.value).name
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    this.onSavePrev.emit();
  }

}
