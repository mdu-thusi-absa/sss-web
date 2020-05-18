import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Entities } from 'src/app/models';

@Component({
  selector: 'app-input-filter-add',
  templateUrl: './input-filter-add.component.html',
  styleUrls: ['./input-filter-add.component.css'],
})
export class InputFilterAddComponent implements OnInit {
  @Input() isAdd = false;
  @Input() isSaved = false;

  @Output() onFilter = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Input() filterCount = 0;
  @Input() showAdd = false;
  @Input() showTick = false;
  @Input() showT = false;
  @Output() onTick = new EventEmitter();
  @Output() onT = new EventEmitter();
  @Input() title = '';
  @Input() titlePlural = '';
  @Input() titleT = '';
  @Input() showList = false;
  @Input() listValues: Entities;
  @Input() listValue = 0;
  @Output() onListChange = new EventEmitter();

  @Input() showDelete = false;
  @Input() showCancel = false;
  @Input() showFilterCount = false;
  @Output() onDelete = new EventEmitter();

  showRadio = false;
  @Input() radioChoice = 'all';

  //badges
  @Input() showFlash = false;
  @Input() showPlay = false;
  @Input() showPause = false;
  @Input() showAll = false;
  @Input() showOk = false;
  @Input() showEyeOpen = false;
  @Input() showEyeClose = false;
  @Input() showSave = false;
  @Input() showShare = false;
  @Input() showDownload = false;
  @Input() isNarrow = false;

  //for radio values
  @Input() countFlash = 0;
  @Input() countPlay = 0;
  @Input() countOk = 0;
  @Input() countPause = 0;
  @Input() countAll = 0;
  @Input() countEyeClose = 0;
  @Input() countEyeOpen = 0;

  @Input() titleFlash = '';
  @Input() titlePlay = '';
  @Input() titleOk = '';
  @Input() titlePause = '';
  @Input() titleAll = '';
  @Input() titleEyeClose = '';
  @Input() titleEyeOpen = '';

  @Output() onChoice = new EventEmitter();

  isT = false;
  filterText = '';

  constructor() {}

  ngOnInit(): void {
    this.showRadio =
      this.showFlash ||
      this.showPlay ||
      this.showPause ||
      this.showAll ||
      this.showOk ||
      this.showEyeClose ||
      this.showEyeOpen || 
      this.showSave;
  }

  doDownload(){

  }

  doShare(){

  }

  doRadio(choice: string) {
    //console.log(choice);
    this.radioChoice = choice;
    this.onChoice.emit(this.radioChoice);
  }

  doListChange(event: any){
    this.listValue = +event.target.value
    this.onListChange.emit(this.listValue);
  }

  doFilterClear() {
    this.filterText = '';
    this.doFilter();
  }

  doAdd() {
    //this.isAdd = !this.isAdd;
    // if (this.isAdd) this.isSaved = false;
    // else this.isSaved = true;
    //if (this.isAdd) this.onCancel.emit();
    //else 
    this.onAdd.emit();
  }

  doCancel(){
    this.onCancel.emit();
  }

  doDelete(){
    this.onDelete.emit();
  }

  doSave(){
    this.onSave.emit();
  }

  doTick() {
    this.onTick.emit();
  }

  doT() {
    this.isT = !this.isT;
    this.onT.emit();
  }

  doFilter() {
    this.onFilter.emit(this.filterText);
  }

  doKey(event: any) {
    // without type info
    if (event.key == 'Escape') this.filterText = '';
    this.doFilter();
  }
}
