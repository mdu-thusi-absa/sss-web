import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


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
  @Output() onFilter = new EventEmitter();
  @Output() onShowingFilter = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;
  @Input() showFilter = true;
  isFilter = false;
  filterText = '';


  @Input() isDoInput = false;

  @ViewChild('inputFilter') inputFilter: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  showEdit(){
    this.onEdit.emit();
  }
  showNew(){
    this.onAdd.emit();
  }

  doFilter(){
    //console.log('buttons: doFilter')
    this.onFilter.emit(this.filterText);
  }

  showHideFilterInput(){
    this.isFilter = !this.isFilter;
    if (this.isFilter) this.setFocus();
    this.onShowingFilter.emit(this.isFilter);
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

  onKey(event: any) {
    // without type info
    if (event.key == 'Escape') {
      this.filterText = '';
      //this.isFilter = false;
      this.showHideFilterInput();
    }
    this.doFilter();
  }

  setFocus() {
    setTimeout(() => {
      this.inputFilter.nativeElement.focus();
      // this will make the execution after the above boolean has changed
      //this.searchElement.nativeElement.focus();
    }, 0);
  }

}
