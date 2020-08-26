import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { InputTextComponent } from '../input-text/input-text.component';
import { EntityNatural, Entities, EveryEntity } from '../../data/models'
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-duo',
  templateUrl: './input-duo.component.html',
  styleUrls: ['./input-duo.component.css']
})
export class InputDuoComponent implements OnInit {
  //text, checkbox, date, list, address, person
  @Input() isNarrow = false;
  @Input() typeLeft = ''; 
  @Input() typeRight = '';
  @Input() filterText = '';
  @Input() doHideByFilter = true;

  @Input() titleLeft = '';
  @Input() placeholderLeft = '';
  @Input() valuesLeft: Entities<EveryEntity>; //: string[] | Person[];
  @Input() valueLeft: string | boolean | EntityNatural | number = '';
  @Input() disabledLeft = false;
  @Input() minValueLeft = -1000;
  @Input() maxValueLeft = 1000;
  @Input() incrementLeft = 1;
  @Input() showAddLeft = true;
  @Input() showEditLeft = true;
  @Input() showDeleteLeft = true;
  @Input() showDownloadLeft = false;
  @Input() showShareLeft = false;
  @Input() showCheckLeft = false;

  @Input() titleRight = '';
  @Input() placeholderRight = '';
  @Input() valuesRight: Entities<EveryEntity>; // string[] | Person[];
  @Input() valueRight: string | boolean | EntityNatural | number = '' ;
  @Input() disabledRight = false;
  @Input() minValueRight = -1000;
  @Input() maxValueRight = 1000;
  @Input() incrementRight = 1;
  @Input() showAddRight = true;
  @Input() showEditRight = true;
  @Input() showDeleteRight = true;
  @Input() showDownloadRight = false;
  @Input() showShareRight = false;
  @Input() showCheckRight = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChangeLeft = new EventEmitter();
  @Output() onChangeRight = new EventEmitter();
  @Output() onAddLeft = new EventEmitter();
  @Output() onAddRight = new EventEmitter();
  @Output() onCheck = new EventEmitter();

  @Input() showFlashLeft = false;
  @Input() showFlashRight = false;

  @Input() showPaperclipLeft = false;
  @Input() showPaperclipRight = false;

  @Input() showCDLeft = false;
  @Input() showCDRight = false;

  @Input() overflowY="auto"

  eid = 'input-duo'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    if (this.placeholderLeft=='') this.placeholderLeft = this.titleLeft;
    if (this.placeholderRight=='') this.placeholderRight = this.titleRight;
  }

  doCheck(event: any){
    this.onCheck.emit(event);
  }

  doAddLeft(event: any){
    this.onAddLeft.emit(event);
  }
  doAddRight(event: any){
    this.onAddRight.emit(event);
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
    this.onRecord.emit(this.titleRight);
  }

  doTaskLeft(){
    this.onTask.emit(this.titleLeft);
  }

  doTaskRight(){
    this.onTask.emit(this.titleRight);
  }

  doChangeLeft(event: any){
    this.onChangeLeft.emit(event);
  }
  doChangeRight(event: any){
    this.onChangeRight.emit(event);
  }
}
