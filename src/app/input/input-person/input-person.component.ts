import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Person } from '../../models';

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
  @Output() onTask = new EventEmitter();
  fullNames = [];
  isDoInput = false;
  option = '0';
  //text = '';
  isAdd = false;
  listFilterText = '';
  isShowingFilter = false;

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
    this.onFile.emit(this.title);
  }
  doRecord() {
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
    //console.log('edit')
    this.isAdd = false;
    //console.log(this.option);
    //this.text = this.options[+this.option].fullName;
    this.value = this.options[+this.option];
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.isAdd) {
        //save for a new item
        this.options.push(this.value);
        this.isAdd = false;
      } else {
        //save for old item
        //console.log(this.option, this.text);
        this.options[+this.option] = this.value;
      }
      //this.options.sort();
      this.setItem(this.value);
    } else {
      //new is clicked
      this.isAdd = true;
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

  doFilter(event: any){
    this.listFilterText = event.toLowerCase();
  }

  doTask() {
    this.onTask.emit(this.title);
  }

  showingFilter(event:any){
    this.isShowingFilter = event;
    //console.log(this.isShowingFilter);
  }

  doDelete() {
    let r = confirm('Are you sure you want to delete this person from the list?');
    //console.log(r);
    if (r) this.options.splice(+this.option, 1);
    this.option = '0';
  }

  doEdit() {
    // this.isAdd = false;
    // console.log(this.option);
    // this.text = this.options[+this.option];
    // // if (!this.isDoInput) this.setFocus();
    // this.isDoInput = !this.isDoInput;
    this.showEdit();
  }

  doAdd(){
    this.showNew()
  }

  doSave(){
    //this.text = event;
    this.showNew()
  }

  doCancel(){
    this.isDoInput = false;
  }

}
