import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ElementRef,
} from '@angular/core';
import { Entities, EveryEntity } from 'src/app/models';

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

  @Output() onTick = new EventEmitter();
  @Output() onT = new EventEmitter();
  @Input() title = '';
  @Input() titlePlural = '';
  @Input() titleT = '';

  @Input() listValues: Entities<EveryEntity>;
  @Input() listValue = 0;
  @Output() onListChange = new EventEmitter();

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
  @Input() showDuplicate = false;
  @Input() showA = false;
  @Input() showAdd = false;
  @Input() showTick = false;
  @Input() showT = false;
  @Input() showList = false;
  @Input() showDelete = false;
  @Input() showCancel = false;
  @Input() showFilterCount = false;
  @Input() showInputFilter = true;
  @Input() showSearch = false;

  @Input() disabledFlash = false;
  @Input() disabledPlay = false;
  @Input() disabledPause = false;
  @Input() disabledAll = false;
  @Input() disabledOk = false;
  @Input() disabledEyeOpen = false;
  @Input() disabledEyeClose = false;
  @Input() disabledSave = false;
  @Input() disabledShare = false;
  @Input() disabledDownload = false;
  @Input() disabledDuplicate = false;
  @Input() disabledA = false;
  @Input() disabledAdd = false;
  @Input() disabledTick = false;
  @Input() disabledT = false;
  @Input() disabledList = false;
  @Input() disabledDelete = false;
  @Input() disabledCancel = false;
  @Input() disabledFilterCount = false;
  @Input() disabledInputFilter = true;

  @Input() isNarrow = false;
  @Input() isA = false;

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
  @Input() titleA = '';
  @Input() titleList = '';

  @Output() onChoice = new EventEmitter();
  @Output() onDuplicate = new EventEmitter();
  @Output() onDownload = new EventEmitter();
  @Output() onA = new EventEmitter();
  @Output() onSearch = new EventEmitter();

  isT = false;
  isB = "false";

  filterText = '';
  dropDown = false;
  @Input() captionFlash = '';
  @Input() captionPlay = '';
  @Input() captionPause = '';
  @Input() captionAll = '';
  @Input() captionEyeOpen = '';
  @Input() captionEyeClose = '';
  @Input() captionOk = '';

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

  doDuplicate() {
    this.onDuplicate.emit();
  }

  doDownload() {
    this.onDownload.emit();
  }

  doShare() {}

  doRadio(choice: string) {
    this.radioChoice = choice;
    this.onChoice.emit(this.radioChoice);
  }

  doListChange(event: any) {
    this.listValue = +event;
    this.onListChange.emit(this.listValue);
  }

  doFilterClear() {
    this.filterText = '';
    this.doFilter();
  }

  doSearch() {
    this.onSearch.emit(this.filterText);
  }

  doAdd() {
    //this.isAdd = !this.isAdd;
    // if (this.isAdd) this.isSaved = false;
    // else this.isSaved = true;
    //if (this.isAdd) this.onCancel.emit();
    //else
    this.onAdd.emit();
  }

  doCancel() {
    this.onCancel.emit();
  }

  doDelete() {
    this.onDelete.emit();
  }

  doSave() {
    this.onSave.emit();
  }

  doTick() {
    this.onTick.emit();
  }

  doA() {
    this.isA = !this.isA;
    this.onA.emit(this.isA);
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
    if (event.key === 'Escape') this.filterText = '';
    if (event.key === 'Enter') this.doSearch();
    this.doFilter();
  }
}
