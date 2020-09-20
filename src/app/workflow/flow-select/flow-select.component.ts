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
  selector: 'app-flow-select',
  templateUrl: './flow-select.component.html',
  styleUrls: ['./flow-select.component.css'],
})
export class FlowSelectComponent implements OnInit {
  @Input() taskFlow: TaskSelect;
  //@Input() values: Entities<EveryEntity>; // = new Entities<EveryEntity>();
  //@Input() value = 0;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Input() stepNumber = 1;
  @Output() onChange = new EventEmitter();
  @Output() onSaveNext = new EventEmitter();
  @ViewChild('inputFilter') inputFilter: ElementRef;
  // message = ''
  showSelect = true;
  //choiceValue = '';

  constructor(public data: DataService) {}

  ngOnInit(): void {
    //this.values = this.data.getEntities(this.taskFlow.sourceType);
    //this.value = this.taskFlow.values.firstKey;
    //this.taskFlow.value = this.value;

    // this.showSelect = true
    // this.showSaveNext = true
    // this.showSavePrev = true
    // if (this.taskFlow.parent) this.showSavePrev = true

    if (this.taskFlow.values.size > 0) {
      //this.message = 'Only one choice is available. Automaticaly going forward'
      //this.choiceValue = this.taskFlow.values.get(this.taskFlow.value).name;
      if (this.taskFlow.values.size == 1)
        setTimeout(() => {
          this.doSaveNext();
        }, 0);
    } else if (this.taskFlow.values.size == 0) {
      // this.taskFlow.errorMessage = 'The list of options is not available. Please go back.'
      // this.showSaveNext = false
      // this.showSavePrev = true
      // this.showSaveNext = false
    }
    // this.setFocus()
  }

  // setFocus() {
  //   setTimeout(() => {
  //     this.inputFilter.nativeElement.focus();
  //   }, 0);
  // }

  get choiceValue() {
    try {
      return this.taskFlow.values.get(this.taskFlow.value).name;
    } catch (e) {
      return '';
    }
  }

  get choiceIndex(){
    try{
      return this.taskFlow.values.all_keys.indexOf(this.taskFlow.value) + 1
    }catch(e){return 0}
  }

  doChange(event: any) {
    this.taskFlow.errorMessage = '';
    this.taskFlow.value = +event;
    //this.choiceValue = this.taskFlow.values.get(this.taskFlow.value).name;
    this.onChange.emit(this.taskFlow.value);
  }

  doSaveNext() {
    // this.taskFlow.value = +this.value;
    // this.choiceValue = this.taskFlow.values.get(this.taskFlow.value).name;
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev() {
    // if (this.stepNumber==1)
    //   this.taskFlow.errorMessage = 'This is the first step'
    // else
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
