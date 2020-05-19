import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-person-contact',
  templateUrl: './input-person-contact.component.html',
  styleUrls: ['./input-person-contact.component.css']
})
export class InputPersonContactComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() isNarrow = false;
  @Input() title = 'Contact Details' 
  @Input() hideBody = true;

  @Output() onFile = new EventEmitter;
  @Output() onRecord = new EventEmitter;
  @Output() onTask = new EventEmitter;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  doFile(event: any){
    this.onFile.emit(this.title);
  }
  
  doTask(event: any){
    this.onTask.emit(this.title);
  }

  doRecord(event: any){
    this.onRecord.emit(this.title);
  }

}
