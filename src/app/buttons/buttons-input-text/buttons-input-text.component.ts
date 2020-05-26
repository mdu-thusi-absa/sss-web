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
  @Output() onCheck = new EventEmitter();
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = true;

  constructor() { }

  ngOnInit(): void {
  }

  doCheck(){
    this.onCheck.emit();
  }

  doFile(){
    this.onFile.emit();
  }

  doRecord(){
    this.onRecord.emit();
  }

  doTask(){
    this.onTask.emit();
  }
}
