import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Person } from '../../models/models';

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
  @Input() options: Person[];
  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;

  @Input() value = new Person('', '', '');
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  fullNames = [];
  isDoInput = false;
  option = '0';
  //text = '';
  doAdd = false;

  @ViewChild('inputText') inputElement: ElementRef;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.options.length; i++) {
      this.fullNames.push(this.options[i].fullName);
    }
    this.setItem(this.value);
  }

  // showEdit(){
  //   this.isInput = !this.isInput
  // }

  doFile() {
    //console.log('app-input-select: file');
    this.onFile.emit(this.title);
  }
  doRecord() {
    //console.log('app-input-select: record');
    this.onRecord.emit(this.title);
  }

  setItem(person: Person) {
    this.options.sort(function (a, b) {
      return a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase());
    });

    this.option = this.options.indexOf(person).toString();
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      : false;
  }

  showEdit() {
    console.log('edit')
    this.doAdd = false;
    console.log(this.option);
    //this.text = this.options[+this.option].fullName;
    this.value = this.options[+this.option];
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.doAdd) {
        //save for a new item
        this.options.push(this.value);
        this.doAdd = false;
      } else {
        //save for old item
        //console.log(this.option, this.text);
        this.options[+this.option] = this.value;
      }
      //this.options.sort();
      this.setItem(this.value);
    } else {
      //new is clicked
      this.doAdd = true;
      //this.text = '';
      this.value = new Person('','','');
      if (!this.isDoInput) this.setFocus();
    }
    this.isDoInput = !this.isDoInput;
  }

  setFocus() {
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
      // this will make the execution after the above boolean has changed
      //this.searchElement.nativeElement.focus();
    }, 0);
  }

  deleteItem() {
    let r = confirm('Are you sure you want to delete this item?');
    //console.log(r);
    if (r) this.options.splice(+this.option, 1);
    this.option = '0';
  }
}
