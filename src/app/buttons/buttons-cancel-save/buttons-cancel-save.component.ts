import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-cancel-save',
  templateUrl: './buttons-cancel-save.component.html',
  styleUrls: ['./buttons-cancel-save.component.css']
})
export class ButtonsCancelSaveComponent implements OnInit {
  // @Output() clickCancel EventEmitter<any> = new EventEmitter();
  @Input() glyphOnly = false;
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  doCancel(){
    this.onCancel.emit();
  }

  doSave(){
    this.onSave.emit();
  }
}
