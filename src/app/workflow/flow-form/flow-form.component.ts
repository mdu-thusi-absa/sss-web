import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity} from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';
import { TaskForm, TaskForm_Input } from 'src/app/data/data-workflow-classes';
import { Entities } from 'src/app/data/data-entities';

@Component({
  selector: 'app-flow-form',
  templateUrl: './flow-form.component.html',
  styleUrls: ['./flow-form.component.css'],
})
export class FlowFormComponent implements OnInit {
  @Input() taskFlow: TaskForm;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Output() onChange = new EventEmitter();
  @Output() onSaveNext = new EventEmitter();
  @Output() onSavePrev = new EventEmitter();
  @Input() stepNumber = 1
  entity: Entity
  constructor(public data:DataService) {}

  ngOnInit(): void {
    let fieldName = this.taskFlow.entityFieldKeyName
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

  getInputValue(inputObject: TaskForm_Input){
    return inputObject.value.getValue(this.taskFlow.workflowValuesObject)
    // if (this.entity){
    //   return this.entity[inputObject.fieldName]
    // }else{
    //   return inputObject.value
    // }
  }

}
