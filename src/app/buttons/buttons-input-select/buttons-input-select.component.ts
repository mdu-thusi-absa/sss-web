import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-buttons-input-select',
  templateUrl: './buttons-input-select.component.html',
  styleUrls: ['./buttons-input-select.component.css'],
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
  @Output() onFilter = new EventEmitter();
  @Output() onShowingFilter = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;
  @Input() showFilter = true;
  @Input() showEdit = true;
  @Input() showDelete = true;
  @Input() showCancel = true;
  @Input() showSave = true;
  @Input() showAdd = true;

  @Input() countItemsSelected = -1;
  @Input() countItems = 0;

  isFilter = false;
  filterText = '';

  @Input() isDoInput = false;

  @ViewChild('inputFilter') inputFilter: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  doEdit() {
    this.onEdit.emit();
  }
  showNew() {
    this.onAdd.emit();
  }

  doFilter() {
    //console.log('buttons: doFilter')
    this.onFilter.emit(this.filterText);
  }

  showHideFilterInput() {
    this.isFilter = !this.isFilter;
    if (this.isFilter) this.setFocus();
    else {
      this.filterText = '';
      this.doFilter();
    }
    //console.log('showHideFilterInput',this.isFilter);
    this.onShowingFilter.emit(this.isFilter);
    //console.log('showHideFilterInput',this.isFilter);
  }

  deleteItem() {
    this.onDelete.emit();
  }
  doFile() {
    this.onFile.emit();
  }
  doRecord() {
    this.onRecord.emit();
  }

  doTask() {
    this.onTask.emit();
  }

  doKey(event: any) {
    // without type info
    if (event.key == 'Escape') {
      this.filterText = '';
      //this.isFilter = false;
      this.showHideFilterInput();
    } else this.doFilter();
  }

  setFocus() {
    setTimeout(() => {
      this.inputFilter.nativeElement.focus();
      // this will make the execution after the above boolean has changed
      //this.searchElement.nativeElement.focus();
    }, 0);
  }

  lostFocus() {
    // this.isFilter = true;
    // this.filterText='';
    // this.showHideFilterInput()
  }

  filterInputWidth() {
    let r =
      21.2 *
        ((this.showFlash ? 1 : 0) +
          (this.showPaperclip ? 1 : 0) +
          (this.showCD ? 1 : 0) +
          (this.showFilter ? 1 : 0) +
          (this.showEdit ? 1 : 0) +
          (this.showDelete ? 1 : 0) +
          (this.showCancel ? 1 : 0) +
          (this.showSave ? 1 : 0) +
          (this.showAdd ? 1 : 0));

    if (r < 90) r = 90; 
    return r + 'px';
  }

  filterInputTotalWidth() {
    let r =
      21.2 *
        ((this.showFlash ? 1 : 0) +
          (this.showPaperclip ? 1 : 0) +
          (this.showCD ? 1 : 0) +
          (this.showFilter ? 1 : 0) +
          (this.showEdit ? 1 : 0) +
          (this.showDelete ? 1 : 0) +
          (this.showCancel ? 1 : 0) +
          (this.showSave ? 1 : 0) +
          (this.showAdd ? 1 : 0)) +
      30;

    if (r < 120) r = 120; 
    return r + 'px';
  }
}
