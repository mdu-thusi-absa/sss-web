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
  @Input() values: Entities<EveryEntity>;
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

  @ViewChild('inputFilter') inputFilter: ElementRef;
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
    this.filterText_ = v;
    this.values.filter(this.filterText_, false);
    // if (this.filterText=='') this.countVisible = this.values.size;
    // else {this.countVisible = this.values.filter(this.filterText_,false).size};
  }

  get value() {
    if (this.key == undefined) this.key = -1;

    if (this.key == -1) return 'Please select';
    else {
      return this.values.get(this.key).allName;
    }
  }

  a_doKeyDown(key: number, event: any){
    let c = event.key;
    if (key==12) this.setFocus();
  }

  doKeyUp(event: any) {
    if (event.key === 'Escape') {
      //this.value = this.defaultValue;
      this.filterText = '';
    }
    // else if (event.key === 'Enter') {
    //   this.doSave();
    // }
  }

  maxHeight = 187;
  setPosition() {
    let el = $('#dropdown-button-' + this.id);

    var leftPos =
      el[0].getBoundingClientRect().left + $(window)['scrollLeft']();
    var rightPos =
      el[0].getBoundingClientRect().right + $(window)['scrollLeft']();
    var topPos = el[0].getBoundingClientRect().top + $(window)['scrollTop']();
    var bottomPos =
      el[0].getBoundingClientRect().bottom + $(window)['scrollTop']();

    let dialog = $('#dropdown-dialog-' + this.id);
    
    if (this.values.size>4){
      //this.maxHeight = 185
    }else{
      this.maxHeight = 27.33 * this.values.size + 8;
    }
    let lowest = $(window).height() - this.maxHeight;
    let top = topPos;
    if (lowest<topPos) {
      top = bottomPos - this.maxHeight;
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
    this.setPosition();
    this.setFocus();
  }

  setFocus() {
    setTimeout(() => {
      this.inputFilter.nativeElement.focus();
    }, 0);
  }
}
