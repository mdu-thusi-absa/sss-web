import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFlowForm, Entities, Entity, TaskFlowFormInput } from 'src/app/data/models';
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
  @Input() stepNumber = 1
  entity: Entity
  constructor(public data:DataService) {}

  ngOnInit(): void {
    let fieldName = this.taskFlow.entityFieldKey
    if (fieldName){
      let k = this.taskFlow.workflowValuesObject[fieldName]
      this.entity = this.data.getEntitiesByKeyField(fieldName).get(k)
    }
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }

  doSavePrev(){
    this.onSavePrev.emit();
  }

  getEntities(type: string, fieldName: string): Entities<Entity>{
    if (type=='select-entity'){
      return this.data.getEntitiesByKeyField(fieldName)
    }
  }

  getInputValue(inputObject: TaskFlowFormInput){
    if (this.entity){
      return this.entity[inputObject.fieldName]
    }else{
      return null
    }
  }

}
