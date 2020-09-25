import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css'],
})
export class InputCheckboxComponent implements OnInit {
  title_ = '';
  @Input() set title(v: string) {
    this.title_ = Entity.sentanceCase(v);
  }
  get title() {
    return this.title_;
  }
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() value = false;
  @Input() disabled = false;
  @Input() noTitle = false;
  @Input() showSmall = false;
  //titleBold = true;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onEnter = new EventEmitter();

  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;
  @Input() inline = false;
  @Input() showTitle = true;
  @Input() showEdit = false;
  @Input() showDelete = false;
  checked = true;

  doFile() {
    this.onFile.emit(this.title);
  }
  doTask() {
    this.onTask.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }

  eid = 'input-checkbox';
  constructor(private data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  valueOriginal: boolean;
  ngOnInit(): void {
    this.valueOriginal = this.value;
    if (this._autoFocus) {
      this.setAutoFocus();
    }
  }

  _autoFocus = false;
  @Input() set autoFocus(v: boolean) {
    this._autoFocus = v;
    if (v) {
      this.setAutoFocus();
    }
  }

  setAutoFocus() {
    let id = this.eid + '-change';
    setFocusForID(id, 50);

    function setFocusForID(id: string, mills: number) {
      setTimeout(() => {
        let e = document.getElementById(id);
        if (e) e.focus();
        else setFocusForID(id, mills + 100);
      }, mills);
    }
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      : false;
  }

  doEnter(event: any) {
    this.onEnter.emit();
  }

  doKeyDown(event: any) {
    if (event.key == ' ') this.doClick(event);
    else if (event.key == 'Enter') this.doEnter(event);
    else if (event.key === 'Escape') {
      this.value = this.valueOriginal;
      this.onChange.emit(this.value)
    }
    event.preventDefault();
  }

  doClick(event: any) {
    if (!this.disabled) {
      this.value = !this.value;
      this.onChange.emit(this.value);
    }
  }
}
