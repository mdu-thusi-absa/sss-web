import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  @Input() title = '';
  @Input() filterText = '';
  @Input() doHideByFilter = true;
  @Input() placeholder = '';
  @Input() value = new Date();
  @Input() disabled = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;

  @Input() inline = false;
  @Input() showTitle = true;

  doFile(){
    this.onFile.emit(this.title);
  }
  doRecord(){
    this.onFile.emit(this.title);
  }
  doTask(){
    this.onTask.emit(this.title);
  }
  constructor() {}

  ngOnInit(): void {}

  hideByFilter(){
    if (!this.doHideByFilter) return false;
    else return (
      this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
    );
    console.log(this.filterText);
  }
}
