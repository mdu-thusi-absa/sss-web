import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
})
export class InputNumberComponent implements OnInit {
  @Input() title = '';
  @Input() placeholder = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() value = 0;
  @Input() increment = 1;
  @Input() minValue = -1000;
  @Input() maxValue = 1000;
  @Input() showMinus = true;
  @Input() showPlus = true;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;

  doFile() {
    this.onFile.emit(this.title.replace('*', ''));
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }

  doTask() {
    this.onTask.emit(this.title);
  }

  constructor() {}

  ngOnInit(): void {
    if (this.placeholder == '') this.placeholder = this.title;
    this.showHideButtons()
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      : false;
  }

  doChange(event: any) {
    //console.log(event);
    if (event>this.maxValue) this.value = this.maxValue;
    else if (event<this.minValue) this.value = this.minValue;
    else this.value = event;
    this.onChange.emit(this.value);
    //console.log(this.value);
    this.showHideButtons()
  }

  doMinus() {
    this.value = this.value - this.increment;
    if (this.value < this.minValue) this.value = this.minValue;
    this.showHideButtons();
    this.onChange.emit(this.value);
  }
  doPlus() {
    this.value = +this.value + +this.increment;
    if (this.value > this.maxValue) this.value = this.maxValue;
    this.showHideButtons();
    this.onChange.emit(this.value);
  }

  showHideButtons() {
    this.showPlus = this.value < this.maxValue;
    this.showMinus = this.value > this.minValue;
    //console.log(this.minValue,this.maxValue,this.value);
  }

  doKey(event: any) {
    if (event.key == 'Escape') {
      //this.value = this.defaultValue;
      this.doCancel();
    } else if (event.key == 'Enter') {
      this.doSave();
    }
  }

  doCancel() {}
  doSave() {}
}
