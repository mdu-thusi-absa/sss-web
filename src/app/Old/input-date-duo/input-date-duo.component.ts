import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-date-duo',
  templateUrl: './input-date-duo.component.html',
  styleUrls: ['./input-date-duo.component.css']
})
export class InputDateDuoComponent implements OnInit {
  @Input() titleLeft = '';
  @Input() titleRight = '';
  @Input() filterText = '';

  @Output() onFileLeft = new EventEmitter();
  @Output() onRecordLeft = new EventEmitter();
  @Output() onFileRight = new EventEmitter();
  @Output() onRecordRight = new EventEmitter();

  doFileLeft(){
    this.onFileLeft.emit(this.titleLeft);
  }
  doRecordLeft(){
    this.onRecordLeft.emit(this.titleLeft);
  }
  doFileRight(){
    this.onFileRight.emit(this.titleRight);
  }
  doRecordRight(){
    this.onRecordRight.emit(this.titleRight);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
