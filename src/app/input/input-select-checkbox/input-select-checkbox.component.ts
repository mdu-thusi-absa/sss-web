import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-select-checkbox',
  templateUrl: './input-select-checkbox.component.html',
  styleUrls: ['./input-select-checkbox.component.css']
})
export class InputSelectCheckboxComponent implements OnInit {
  @Input() title = '';
  @Input() options: string[] = [];
  @Input() filterText = '';
  @Input() value = '';
  @Input() doHideByFilter = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();

  @Input() showFlash = true;
  @Input() showPaperclip = true;
  @Input() showCD = true;

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }
  doTask() {
    this.onTask.emit(this.title);
  }


  isDoInput = false;
  option = '0';
  text = '';
  doAdd = false;
  listFilterText = '';
  isShowingFilter = false;

  @ViewChild('inputText') inputElement: ElementRef;
  constructor() {}

  ngOnInit(): void {
    // this.options.sort();
    // this.option = this.options.indexOf().toString();
    this.setItem(this.value);
  }

  setItem(text: string) {
    //console.log('setItem: b');
    this.options.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    this.option = this.options.indexOf(text).toString();
    //console.log('setItem: e');
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      : false;
  }

  showEdit() {
    this.doAdd = false;
    //console.log(this.option);
    this.text = this.options[+this.option];
    if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.doAdd) {
        //save for a new item
        this.options.push(this.text);
        this.doAdd = false;
      } else {
        //save for old item
        //console.log(this.option, this.text);
        this.options[+this.option] = this.text;
      }
      //this.options.sort();
      this.setItem(this.text);
    } else {
      //new is clicked
      this.doAdd = true;
      this.text = '';
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
    //console.log('isc',event);
    this.listFilterText = event.toLowerCase();
  }

  hideItem(text: string){
    let r = false;
    if (this.listFilterText.length>0){
      r = text.toLowerCase().indexOf(this.listFilterText)==-1;
    }
    //console.log(r,text);
    return r;
    
  }

  showingFilter(event:any){
    this.isShowingFilter = event;
    console.log(this.isShowingFilter);
  }

}
