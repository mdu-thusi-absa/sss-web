import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { EveryEntity, Entities, Entity } from '../../models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-select-entity',
  templateUrl: './input-select-entity.component.html',
  styleUrls: ['./input-select-entity.component.css'],
})
export class InputSelectEntityComponent implements OnInit {
  @Input() title = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  //@Input() values = new Map(); //Map of Entity();
  @Input() values: Entities<EveryEntity>; // = new Entities<EveryEntity>();
  @Input() value = 0;
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showAdd = false;
  @Input() showEdit = false;
  @Input() showDelete = false;
  @Input() showCheck = false;

  entity: EveryEntity;
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  fullNames = [];
  isDoInput = false;
  option = 0;
  isAdd = false;
  listFilterText = '';
  isShowingFilter = false;

  @ViewChild('inputText') inputElement: ElementRef;
  @ViewChild('selectItem') selectItem: ElementRef;

  constructor(public data: DataService) {}

  getID() {
    return this.data.getID(this.title);
  }

  isLoadAll = false;
  loadedArray: number[] = [];
  limitVisibleRows = 10;
  onScrollData(event:any) {
    //this.limitVisibleRows += 50;
    this.isLoadAll = true;
  }

  getDoLoad(key: number) {
    let n = 0;
    if (this.isLoadAll) return true;
    else {
      n = this.loadedArray.length;
      if (n < this.limitVisibleRows) {
        this.loadedArray.push(key);
      }
    }
    //onscroll
    //on filter
    //on type change
    //on radio
    let r = this.loadedArray.indexOf(key) > -1 || this.isLoadAll;
    return r;
  }

  // public innerWidth: any;
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;
  // }

//   var rtime;
// var timeout = false;
// var delta = 200;
// $(window).resize(function() {
//     rtime = new Date();
//     if (timeout === false) {
//         timeout = true;
//         setTimeout(resizeend, delta);
//     }
// });

// function resizeend() {
//     if (new Date() - rtime < delta) {
//         setTimeout(resizeend, delta);
//     } else {
//         timeout = false;
//         alert('Done resizing');
//     }               
// }

  ngOnInit(): void {
    this.entity = this.values.createEntity();
    //this.innerWidth = window.innerWidth;
  }

  // showEdit(){
  //   this.isInput = !this.isInput
  // }

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }

  setItem(entity: EveryEntity) {
    // this.values.sort(function (a, b) {
    //   return a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase());
    // });
    // this.values = new Map([...this.values.entries()].sort(function (a, b) {
    //     return a[1].fullName.toLowerCase().localeCompare(b[1].fullName.toLowerCase());
    //   }));
    //this.valueId = +this.values.indexOf(person).toString());
  }

  sortValues() {
    //this.values = new Map([...this.values.entries()].sort());
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      : false;
  }

  doEdit() {
    this.isAdd = false;
    //this.text = this.values[+this.option].fullName;
    this.entity = this.values.get(this.value);
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.isAdd) {
        //save for a new item
        let i = this.values.size;
        this.values.add(this.entity);
        this.value = i;
        this.isAdd = false;

        let t = this.entity;
        this.onAdd.emit(this.value);
        this.onChange.emit(t);
      } else {
        //save for old item
        this.values.edit(this.value, this.entity);
        let id = this.value;
        let t = this.entity;
        this.onEdit.emit({ id, t });
        this.onChange.emit(t);
      }
      //this.setItem(this.person);
    } else {
      //new is clicked
      this.isAdd = true;
      this.entity = this.values.createEntity();
    }
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  setFocus() {
    // setTimeout(() => {
    //   this.inputElement.nativeElement.focus();
    //   // this will make the execution after the above boolean has changed
    //   //this.searchElement.nativeElement.focus();
    // }, 0);
  }

  doFilter(event: any) {
    this.listFilterText = event.toLowerCase();
    this.isLoadAll = true;
    this.clickSelect();
  }

  clickSelect() {
    // setTimeout(function() {
    //   this.selectItem('click');
    // });
  }

  doTask() {
    this.onTask.emit(this.title);
  }

  showingFilter(event: any) {
    this.isShowingFilter = event;
  }

  doDelete() {
    if (this.values.size > 0) {
      let r = confirm(
        'Are you sure you want to delete this ' + this.title + '?'
      );
      if (r) {
        this.values.del(this.value);
        this.value = this.values.all_keys[0];
        this.onSelect.emit(this.value);
      }
    }
  }

  //doEdit() {
  // this.isAdd = false;
  // this.text = this.values[+this.option];
  // // if (!this.isDoInput) this.setFocus();
  // this.isDoInput = !this.isDoInput;
  //this.showEdit();
  //}

  doAdd() {
    this.showNew();
  }

  doSave() {
    //this.text = event;
    //this.entity.name = event;
    this.showNew();
  }

  doCancel() {
    this.isDoInput = false;
  }

  doChangeInputText(event: any) {
    this.entity.name = event;
  }

  doChange(event: any) {
    this.value = +event.target.value;
    this.values.currentKey = this.value;
    this.onSelect.emit(this.value);
    this.onChange.emit(this.value);
  }

  //(keyup)="doKeyUp($event)"
  doKeyUp(event: any) {
    if (event.key === 'Escape') {
      //this.value = this.defaultValue;
      this.doCancel();
    } else if (event.key === 'Enter') {
      this.doSave();
    }
  }

  countItems() {
    let r = 0;
    if (!this.listFilterText) {
      r = this.values.size;
    } else {
      let v = this.values.all_values;
      for (let i = 0; i < this.values.size; i++) {
        let e: EveryEntity = v[i];
        if (e) {
          if (!this.hideItem(e)) {
            r = r + 1;
          }
        }
      }
    }
    return r;
    //let v = this.values.all_values;
    //v.filter((e) => !this.hideItem(e)).length;
  }

  hideItem(entity: EveryEntity) {
    let r = false;
    if (this.listFilterText) {
      if (entity != undefined)
        r =
          entity.name
            .toLowerCase()
            .indexOf(this.listFilterText.toLowerCase()) === -1;
    }
    return r;
  }
}
