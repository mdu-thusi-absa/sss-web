import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() title = '';
  @Input() placeholder = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() value = '';

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;

  doFile(){
    this.onFile.emit(this.title.replace('*',''));
  }
  doRecord(){
    this.onRecord.emit(this.title);
  }

  doTask(){
    //console.log('app-input-text: doTask');
    this.onTask.emit(this.title);
  }

  constructor() {}

  ngOnInit(): void {
    if (this.placeholder == '') this.placeholder = this.title;
  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1 : false);
  }

  doChange(event: any){
    //this.value = event;
    //console.log('input-text',event);
    this.onChange.emit(event);
    //console.log('input-text:after event',event);
  }

  
}
