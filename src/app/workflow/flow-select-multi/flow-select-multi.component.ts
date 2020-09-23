import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { TaskSelect } from 'src/app/data/data-workflow-classes';


@Component({
  selector: 'app-flow-select-multi',
  templateUrl: './flow-select-multi.component.html',
  styleUrls: ['./flow-select-multi.component.css']
})
export class FlowSelectMultiComponent implements OnInit {
  @Input() taskFlow: TaskSelect;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Input() stepNumber = 1;
  @Output() onChange = new EventEmitter();
  @Output() onSaveNext = new EventEmitter();
  @ViewChild('inputFilter') inputFilter: ElementRef;
  showSelect = true;

  constructor(public data: DataService) {}

  ngOnInit(): void {
    if (this.taskFlow.values.size > 0) {
      if (this.taskFlow.values.size == 1)
        setTimeout(() => {
          this.doSaveNext();
        }, 0);
    } else if (this.taskFlow.values.size == 0) {
    }
  }

  get choiceValue() {
    try {
      return this.taskFlow.values.get(this.taskFlow.value).name;
    } catch (e) {
      return '';
    }
  }

  get title(){
    return this.stepNumber + '.' + this.taskFlow.name +  (this.choiceValue ? ' - ' + this.choiceValue : '')
  }

  doChange(event: any) {
    this.taskFlow.errorMessage = '';
    this.taskFlow.value = +event;
    this.onChange.emit(this.taskFlow.value);
  }

  doSaveNext() {
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev() {
    this.onSavePrev.emit();
  }

  doNextValue() {
    if (this.taskFlow.isCurrent) {
      let keys = this.taskFlow.values.all_keys;
      let i = keys.indexOf(this.taskFlow.value);
      if (this.taskFlow.value == this.taskFlow.values.lastKey)
        this.doChange(this.taskFlow.values.firstKey);
      else this.doChange(keys[i + 1]);
    }
  }
  doPrevValue() {
    if (this.taskFlow.isCurrent) {
      let keys = this.taskFlow.values.all_keys;
      let i = keys.indexOf(this.taskFlow.value);
      if (this.taskFlow.value == this.taskFlow.values.firstKey)
        this.doChange(this.taskFlow.values.lastKey);
      else this.doChange(keys[i - 1]);
    }
  }
}

