import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Entities, EveryEntity } from 'src/app/models';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css'],
})
export class InputDropdownComponent implements OnInit {
  private filterText_ = '';
  showDrop = true;
  position = { top: 0, left: 0 };
  //msg = '';
  id = '0';
  viewAll = false;
  @Input() title = 'item';
  sourceValues_: Entities<EveryEntity>;
  @Input() set values(v: Entities<EveryEntity>) {
    this.sourceValues_ = v;
    this.values_ = this.sourceValues_.clone();
  }
  values_: Entities<EveryEntity>;
  @Input() key = -1;
  @Input() showNoSelection = false;
  @Input() onlyActive = false;
  @Input() showDelete = false;
  @Input() showEdit = false;
  @Input() showAdd = false;
  @Input() disabled = false;

  @Output() onChange = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onAdd = new EventEmitter();

  sourceVersion_ = 0;
  //refresh values if the source version changes
  @Input() set sourceVersion(v: number) {
    if (v != this.sourceVersion_) {
      this.sourceVersion_ = v;
      this.values_ = this.sourceValues_.clone();
    }
  }

  @ViewChild('inputFilter') inputFilter: ElementRef;
  //dynamic ViewChild?
  //let el = $('#dropdown-group-' + this.id);
  //@ViewChild('dropdown-item-' + this.id + '-' + this.values) firstItem: ElementRef;
  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.id = this.data.getID();
    this.filterText = '';
  }

  get filterText() {
    return this.filterText_;
  }

  // countVisible = 0;
  set filterText(v: string) {
    if (v != this.filterText_) {
      this.filterText_ = v;
      this.values_.filter(this.filterText_, false);
      try {
        this.setPosition(true);
      } catch (e) {}
    }
  }

  get value() {
    if (this.key == undefined) this.key = -1;

    if (this.key == -1) return 'Please select';
    else {
      return this.values_.get(this.key).allName;
    }
  }

  a_doKeyDown(key: number, event: any) {
    let c = event.key;

    if (c == 'Tab') {
      if (this.dropUp) {
        if (key == this.values_.lastKeyInFilter) {
          this.setFocus(event);
        }
      } else {
        if (key == this.values_.lastKeyInFilter) {
          if (this.values_.size < 6) {
            this.setFocusItem(event, this.values_.firstKeyInFilter);
          } else {
            this.setFocus(event);
          }
        }
      }
    } else if (c == 'Escape') {
      this.filterText = '';
    }
  }

  doSearchKeyUp(event: any) {
    if (event.key === 'Escape') {
      this.filterText = '';
    } else if (event.key === 'Tab') {
    }
  }

  doSearchKeyDown(event: any) {
    if (event.key === 'Tab') {
      if (this.dropUp) {
        this.setFocusItem(event, this.values_.firstKeyInFilter);
      }
    }
  }

  maxHeight = 175.5;
  filterHeight = 175.5;
  searchInputHeight = 38;
  dropUp = false;
  setPosition(isFilter: boolean) {
    let dialog = $('#dropdown-dialog-' + this.id);

    //let el = $('#dropdown-button-' + this.id);
    let el = $('#dropdown-group-' + this.id);

    var leftPos =
      el[0].getBoundingClientRect().left + $(window)['scrollLeft']();
    var rightPos =
      el[0].getBoundingClientRect().right + $(window)['scrollLeft']();
    var topPos = el[0].getBoundingClientRect().top + $(window)['scrollTop']();
    var bottomPos =
      el[0].getBoundingClientRect().bottom + $(window)['scrollTop']();

    const rowHeight = 27.3;
    const rowsToShow = 5;
    this.searchInputHeight = 38 * (this.values_.size > rowsToShow ? 1 : 0);
    this.filterHeight =
      rowHeight * Math.min(this.values_.countInFilter, rowsToShow) +
      this.searchInputHeight;
    this.maxHeight =
      rowHeight * Math.min(this.values_.size, rowsToShow) +
      this.searchInputHeight;

    let lowest = $(window).height() - this.maxHeight;

    let top = topPos;
    this.dropUp = lowest < topPos;
    if (this.dropUp) {
      top = bottomPos - this.filterHeight;
      if (this.values_.countInFilter == 0) top = bottomPos - 48;
    }

    dialog[0].style.left = leftPos + 'px';
    dialog[0].style.top = top + 'px';
    dialog[0].style.width = rightPos - leftPos + 'px';
  }

  ngAfterViewInit(): void {}

  selectMe(key: number) {
    this.key = key;
    this.onChange.emit(key);
  }

  get thisY() {
    return this.position.top + 27.4;
  }

  get thisX() {
    return this.position.left;
  }

  ngAfterViewChecked(): void {}

  doModal(event: any) {
    this.viewAll = true;
    this.showDrop = true;
    this.setPosition(false);
    this.setFocus(event);
  }

  setFocus(event: any) {
    if (this.values_.size < 6) {
      this.setFocusItem(event, this.values_.firstKeyInFilter);
    } else {
      setTimeout(() => {
        this.inputFilter.nativeElement.focus();
      }, 0);
    }
    event.preventDefault();
  }

  setFocusItem(event: any, key: number) {
    setTimeout(() => {
      document.getElementById('dropdown-item-' + this.id + '-' + key).focus();
    }, 0);
    event.preventDefault();

  }
}
