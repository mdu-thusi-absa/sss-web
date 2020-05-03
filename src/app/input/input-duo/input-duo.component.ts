import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { Person } from '../../models/models'

@Component({
  selector: 'app-input-duo',
  templateUrl: './input-duo.component.html',
  styleUrls: ['./input-duo.component.css']
})
export class InputDuoComponent implements OnInit {
  //text, checkbox, date, list
  @Input() typeLeft = 'text'; 
  @Input() typeRight = 'text';
  @Input() filterText = '';
  @Input() doHideByFilter = true;

  @Input() titleLeft = '';
  @Input() placeholderLeft = '';
  @Input() optionsLeft: string[] | Person[];
  @Input() valueLeft: string | boolean | Person = '';
  @Input() disabledLeft = false;

  @Input() titleRight = '';
  @Input() placeholderRight = '';
  @Input() optionsRight: string[] | Person[];
  @Input() valueRight: string | boolean | Person = '';
  @Input() disabledRight = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

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
    this.onTask.emit(this.titleRight);
  }
}
