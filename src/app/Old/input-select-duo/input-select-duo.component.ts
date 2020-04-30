import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-select-duo',
  templateUrl: './input-select-duo.component.html',
  styleUrls: ['./input-select-duo.component.css']
})
export class InputSelectDuoComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = '';
  @Input() titleLeft ='';
  @Input() titleRight ='';
  @Input() valueLeft = '';
  @Input() valueRight = ''
  @Input() optionsLeft: string[] = [];
  @Input() optionsRight: string[] = [];

  @Output() onFileLeft = new EventEmitter();
  @Output() onRecordLeft = new EventEmitter();
  @Output() onFileRight = new EventEmitter();
  @Output() onRecordRight = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doFileLeft(){
    this.onFileLeft.emit(this.titleLeft);
  }

  doFileRight(){
    this.onFileRight.emit(this.titleRight);
  }
  
  doRecordLeft(){
    this.onRecordLeft.emit(this.titleLeft);
  }

  doRecordRight(){
    this.onRecordRight.emit(this.titleRight);
  }

}
