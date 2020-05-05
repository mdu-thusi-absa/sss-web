import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent implements OnInit {
  @Input() title = '';
  @Input() placeholder = '';
  @Input() text = '';
  @Input() rows = 4;
  @Input() noTitle = false;
  @Input() noButtons = false;
  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;

  @Output() onTask = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onFile = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doTask(){
    this.onTask.emit(this.title);
  }

  doRecord(){
    this.onRecord.emit(this.title);
  }

  doFile(){
    this.onFile.emit(this.title);
  }

}
