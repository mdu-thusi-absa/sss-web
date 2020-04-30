import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-buttons-input-select',
  templateUrl: './buttons-input-select.component.html',
  styleUrls: ['./buttons-input-select.component.css']
})
export class ButtonsInputSelectComponent implements OnInit {
  @Input() title = '';

  @Output() onEdit = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;


  @Input() isDoInput = false;

  constructor() { }

  ngOnInit(): void {
  }

  showEdit(){
    this.onEdit.emit();
  }
  showNew(){
    this.onAdd.emit();
  }

  deleteItem(){
    this.onDelete.emit();
  }
  doFile(){
    this.onFile.emit()
  }
  doRecord(){
    this.onRecord.emit()
  }

  doTask(){
    this.onTask.emit();
  }

}
