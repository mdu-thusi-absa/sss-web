import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { Person } from '../../models'

@Component({
  selector: 'app-input-duo',
  templateUrl: './input-duo.component.html',
  styleUrls: ['./input-duo.component.css']
})
export class InputDuoComponent implements OnInit {
  //text, checkbox, date, list, address, person
  @Input() typeLeft = ''; 
  @Input() typeRight = '';
  @Input() filterText = '';
  @Input() doHideByFilter = true;

  @Input() titleLeft = '';
  @Input() placeholderLeft = '';
  @Input() valuesLeft = new Map(); //: string[] | Person[];
  @Input() valueLeft: string | boolean | Person | number = '';
  @Input() disabledLeft = false;
  @Input() minValueLeft = -1000;
  @Input() maxValueLeft = 1000;
  @Input() incrementLeft = 1;
  @Input() showAddLeft = true;
  @Input() showEditLeft = true;
  @Input() showDeleteLeft = true;

  @Input() titleRight = '';
  @Input() placeholderRight = '';
  @Input() valuesRight = new Map(); // string[] | Person[];
  @Input() valueRight: string | boolean | Person | number = '' ;
  @Input() disabledRight = false;
  @Input() minValueRight = -1000;
  @Input() maxValueRight = 1000;
  @Input() incrementRight = 1;
  @Input() showAddRight = true;
  @Input() showEditRight = true;
  @Input() showDeleteRight = true;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChangeLeft = new EventEmitter();
  @Output() onChangeRight = new EventEmitter();

  @Input() showFlashLeft = true;
  @Input() showFlashRight = true;

  @Input() showPaperclipLeft = true;
  @Input() showPaperclipRight = true;

  @Input() showCDLeft = true;
  @Input() showCDRight = true;

  constructor() { }

  ngOnInit(): void {
    if (this.placeholderLeft=='') this.placeholderLeft = this.titleLeft;
    if (this.placeholderRight=='') this.placeholderRight = this.titleRight;
  }

  doFileLeft(){
    this.onFile.emit(this.titleLeft);
  }

  doFileRight(){
    this.onFile.emit(this.titleRight);
  }
  
  doRecordLeft(){
    this.onRecord.emit(this.titleLeft);
  }

  doRecordRight(){
    //console.log('Select-duo: record-right'
    this.onRecord.emit(this.titleRight);
  }

  doTaskLeft(){
    this.onTask.emit(this.titleLeft);
  }

  doTaskRight(){
    //console.log('doTaskRight')
    this.onTask.emit(this.titleRight);
  }

  doChangeLeft(event: any){
    //console.log('doChangeLeft',event);
    this.onChangeLeft.emit(event);
  }
  doChangeRight(event: any){
    this.onChangeRight.emit(event);
  }
}
