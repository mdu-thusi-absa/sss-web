import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-input-text',
  templateUrl: './buttons-input-text.component.html',
  styleUrls: ['./buttons-input-text.component.css']
})
export class ButtonsInputTextComponent implements OnInit {
  @Input() title = 'Input';
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;

  constructor() { }

  ngOnInit(): void {
  }

  doFile(){
    this.onFile.emit();
  }

  doRecord(){
    this.onRecord.emit();
  }

  doTask(){
    //console.log('app-buttons-input-text: doTask');
    this.onTask.emit();
  }
}
