import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

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
  

  eid = 'buttons-toolbar-button'
  constructor(private data: DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doCancel(){
    this.onCancel.emit();
  }

  doSave(){
    this.onSave.emit();
  }
}
