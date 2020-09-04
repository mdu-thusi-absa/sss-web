import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowSelect, Entities, AnyEntity } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-select',
  templateUrl: './flow-select.component.html',
  styleUrls: ['./flow-select.component.css']
})
export class FlowSelectComponent implements OnInit {
  @Input() taskFlow: TaskFlowSelect;
  //@Input() values: Entities<EveryEntity>; // = new Entities<EveryEntity>();
  @Input() value = 0;
  @Input() showSavePrev = false
  @Input() showSaveNext = false
  @Input() stepNumber = 1
  @Output() onChange = new EventEmitter();
  @Output() onSaveNext = new EventEmitter();
  // message = ''
  showSelect = true
  choiceValue = ''
  

  constructor(public data: DataService) { }

  ngOnInit(): void {
    //this.values = this.data.getEntities(this.taskFlow.sourceType);
    this.value = this.taskFlow.values.firstKey
    this.taskFlow.value = this.value
    this.showSelect = true
    this.showSaveNext = true
    this.showSavePrev = true
    if (this.taskFlow.parent) this.showSavePrev = true
    if (this.taskFlow.values.size==1){
      //this.message = 'Only one choice is available. Automaticaly going forward' 
      setTimeout(() => {
        this.doSaveNext()
      }, 0);
    } else if (this.taskFlow.values.size == 0){
      // this.message = 'The list of options is not available. Please go back.' 
      this.showSaveNext = false
      this.showSavePrev = true
      this.showSaveNext = false
    }
  }

  doChange(event: any) {
    
    this.taskFlow.errorMessage = ''
    this.value = +event;
    this.taskFlow.value = this.value
    this.onChange.emit(this.value);
  }

  doSaveNext(){
    this.taskFlow.errorMessage = ''
    this.taskFlow.value = +this.value;
    
    this.choiceValue = this.taskFlow.values.get(this.taskFlow.value).name
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    // if (this.stepNumber==1)
    //   this.taskFlow.errorMessage = 'This is the first step'
    // else
      this.onSavePrev.emit();
  }

}
