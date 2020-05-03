import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text-duo',
  templateUrl: './input-text-duo.component.html',
  styleUrls: ['./input-text-duo.component.css']
})
export class InputTextDuoComponent implements OnInit {
  @Input() titleLeft = '';
  @Input() titleRight = '';
  @Input() placeHolderLeft = '';
  @Input() placeHolderRight = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;

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
