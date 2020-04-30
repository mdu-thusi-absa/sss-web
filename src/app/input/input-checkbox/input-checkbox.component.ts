import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {
  @Input() title = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() value = false;
  @Input() disabled = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;

  doFile(){
    this.onFile.emit(this.title);
  }
  doTask(){
    this.onTask.emit(this.title);
  }
  doRecord(){
    this.onRecord.emit(this.title);
  }

  constructor() {}

  ngOnInit(): void {
  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1 : false);
  }

  

}
