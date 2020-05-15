import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NaturalEntity } from '../../models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-person',
  templateUrl: './input-person.component.html',
  styleUrls: ['./input-person.component.css'],
})
export class InputPersonComponent implements OnInit {
  @Input() title = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() values = new Map(); //Person[];
  @Input() value = 0;
  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;
  @Input() showAdd = true;
  @Input() showEdit = true;
  @Input() showDelete = true;

  person = new NaturalEntity('', '', '');
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

  constructor(public dataService: DataService) {}

  getID(){
    //console.log(this.title);
    return this.dataService.getID(this.title);
  }

  ngOnInit(): void {
    // for (let i = 0; i < this.values.size; i++) {
    //   this.fullNames.push(this.values[i].fullName);
    // }
    // for (let v of this.values.values()) {
    //   this.fullNames.push(v.fullName);
    // }
    //this.setItem(this.value);
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

  setItem(person: NaturalEntity) {
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
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      : false;
  }

  doEdit() {
    //console.log('edit')
    this.isAdd = false;
    //console.log(this.option);
    //this.text = this.values[+this.option].fullName;
    // console.log(this.person);
    // console.log(this.values);
    // console.log(this.value);
    this.person = this.values.get(this.value);
    // console.log(this.person);
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
        this.values.set(i, this.person);
        this.value = i;
        this.isAdd = false;
        this.onAdd.emit(this.value);
        this.onChange.emit(this.value);
      } else {
        //save for old item
        this.values.set(this.value, this.person);
        let id = this.value;
        let t = this.person;
        this.onEdit.emit({ id, t });
        this.onChange.emit(t);
      }
      //this.setItem(this.person);
    } else {
      //new is clicked
      this.isAdd = true;
      this.person = new NaturalEntity('', '', '');
    }
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  setFocus() {
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
      // this will make the execution after the above boolean has changed
      //this.searchElement.nativeElement.focus();
    }, 0);
  }

  doFilter(event: any) {
    this.listFilterText = event.toLowerCase();
    this.clickSelect()
  }

  clickSelect() {
    // setTimeout(function() {
    //   this.selectItem('click');
    // });
  };

  doTask() {
    this.onTask.emit(this.title);
  }

  showingFilter(event: any) {
    this.isShowingFilter = event;
    //console.log(this.isShowingFilter);
  }

  doDelete() {
    if (this.values.size > 0) {
      let r = confirm('Are you sure you want to delete this person?');
      if (r) {
        this.values.delete(this.value);
        this.value = [...this.values.keys()][0];
      }
    }
  }

  //doEdit() {
    // this.isAdd = false;
    // console.log(this.option);
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
    this.showNew();
  }

  doCancel() {
    this.isDoInput = false;
  }

  doChange(event: any){
    this.value = +event.target.value;
    this.onSelect.emit(this.value);
    this.onChange.emit(this.value)
  }

  //(keyup)="doKeyUp($event)"
  doKeyUp(event: any) {
    if (event.key == 'Escape') {
      //this.value = this.defaultValue;
      this.doCancel();
    } else if (event.key == 'Enter') {
      this.doSave();
    }
  }

  countItems() {
    let v = [...this.values.values()];
    return v.filter((e) => !this.hideItem(e)).length;
  }

  hideItem(person: NaturalEntity) {
    let r = false;
    if (this.listFilterText.length > 0) {
      r = person.fullName.toLowerCase().indexOf(this.listFilterText) == -1;
    }
    return r;
  }
}
