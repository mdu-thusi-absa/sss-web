import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ElementRef,
} from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';
import { Entities, AnyEntity } from 'src/app/data/data-entities';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-input-filter-add',
  templateUrl: './input-filter-add.component.html',
  styleUrls: ['./input-filter-add.component.css'],
})
export class InputFilterAddComponent implements OnInit {
  @Input() isAdd = false;
  @Input() isSaved = false;

  @Input() filterCount = 0;

  title_ = 'input-filter-add';
  @Input() set title(v: string) {
    this.title_ = Entity.sentanceCase(v);
  }
  get title() {
    return this.title_;
  }

  @Input() titlePlural = '';
  @Input() titleT = '';

  @Input() listValues: Entities<AnyEntity>;
  @Input() listValue = 0;

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

  @Output() onListChange = new EventEmitter();
  @Output() onTick = new EventEmitter();
  @Output() onT = new EventEmitter();
  @Output() onFilter = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onChoice = new EventEmitter();
  @Output() onDuplicate = new EventEmitter();
  @Output() onDownload = new EventEmitter();
  @Output() onA = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  @Output() onEnter = new EventEmitter();
  @Output() onArrowDown = new EventEmitter();
  @Output() onArrowUp = new EventEmitter();

  isT = false;
  isB = 'false';
  dropDown = false;

  @Input() filterText = '';
  @Input() captionFlash = '';
  @Input() captionPlay = '';
  @Input() captionPause = '';
  @Input() captionAll = '';
  @Input() captionEyeOpen = '';
  @Input() captionEyeClose = '';
  @Input() captionOk = '';
  @Input() disabled = false;

  eid = 'input-filter-add';
  constructor(public data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

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

  _version = 0;
  @Input() set version(v: number) {
    if (v != this._version) this.init();
  }

  init() {
    this.filterText = '';
  }

  doDuplicate() {
    if (!this.disabled) this.onDuplicate.emit();
  }

  doDownload() {
    if (!this.disabled) this.onDownload.emit();
  }

  doShare() {}

  doRadio(choice: string) {
    if (!this.disabled) {
      this.radioChoice = choice;
      this.onChoice.emit(this.radioChoice);
    }
  }

  doListChange(event: any) {
    if (!this.disabled) {
      this.listValue = +event;
      this.onListChange.emit(this.listValue);
    }
  }

  doFilterClear() {
    if (!this.disabled) {
      this.filterText = '';
      this.doFilter();
    }
  }

  doSearch() {
    if (!this.disabled) this.onSearch.emit(this.filterText);
  }

  doAdd() {
    //this.isAdd = !this.isAdd;
    // if (this.isAdd) this.isSaved = false;
    // else this.isSaved = true;
    //if (this.isAdd) this.onCancel.emit();
    //else
    if (!this.disabled) this.onAdd.emit();
  }

  doCancel() {
    if (!this.disabled) this.onCancel.emit();
  }

  doDelete() {
    if (!this.disabled) this.onDelete.emit();
  }

  doSave() {
    if (!this.disabled) this.onSave.emit();
  }

  doTick() {
    if (!this.disabled) this.onTick.emit();
  }

  doA() {
    if (!this.disabled) {
      this.isA = !this.isA;
      this.onA.emit(this.isA);
    }
  }

  doT() {
    if (!this.disabled) {
      this.isT = !this.isT;
      this.onT.emit();
    }
  }

  doFilter() {
    if (!this.disabled) this.onFilter.emit(this.filterText);
  }

  doKey(event: any) {
    if (!this.disabled) {
      if (event.key === 'Escape') {
        this.doFilterClear();
      }
      if (event.key === 'Enter') {
        this.doSearch();
        this.onEnter.emit();
      }
      if (event.key === 'ArrowDown') {
        this.onArrowDown.emit();
        event.preventDefault();
      }
      if (event.key === 'ArrowUp') {
        this.onArrowUp.emit();
      }
      this.doFilter();
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
    let id = this.eid;
    setFocusForID(id, 50);

    function setFocusForID(id: string, mills: number) {
      setTimeout(() => {
        let e = document.getElementById(id);
        if (e) e.focus();
        else setFocusForID(id, mills + 100);
      }, mills);
    }
  }
}
