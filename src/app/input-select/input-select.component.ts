import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
})
export class InputSelectComponent implements OnInit {
  @Input() title = '';
  @Input() options: string[];
  @Input() filterText = '';
  @Input() selectedValue = '';
  @Input() doHideByFilter = false;

  isDoInput = false;
  option = '0';
  text = '';
  doAdd = false;
  

  @ViewChild('inputText') inputElement: ElementRef;
  // @ViewChild('search') searchElement: ElementRef;
  constructor() {}

  ngOnInit(): void {
    // this.options.sort();
    // this.option = this.options.indexOf().toString();
    this.setItem(this.selectedValue);
  }

  setItem(text: string){
    this.options.sort();
    this.option = this.options.indexOf(text).toString();
  }

  hideByFilter() {
    return this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1 : false;
  }

  showEdit() {
    this.doAdd = false;
    console.log(this.option);
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

  deleteItem(){
    let r = confirm('Are you sure you want to delete this item?');
    //console.log(r);
    if (r) this.options.splice(+this.option,1)
    this.option = '0';
  }
}
