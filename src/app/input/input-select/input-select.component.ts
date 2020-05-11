import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
})
export class InputSelectComponent implements OnInit {
  @Input() title = '';
  @Input() options: string[] = [];
  @Input() filterText = '';
  @Input() value = '';
  @Input() doHideByFilter = false;

  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onSelect = new EventEmitter();

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
  option = 0;
  text = '';
  isAdd = false;
  listFilterText = '';
  showSave = true;
  showCancel = true;
  isShowingFilter = false;
  

  // @ViewChild('inputText') inputElement: ElementRef;
  constructor() {}

  ngOnInit(): void {
    // this.options.sort();
    // this.option = this.options.indexOf().toString();
    this.setItem(this.value);
  }

  setItem(text: string) {
    //this.options.sort();
    this.options.sort(function (a, b) {
      if (typeof(a)=='string' && typeof(b) == 'string'){
        return a.toLowerCase().localeCompare(b.toLowerCase());
      } else {
        let r = 0;
        if (a > b) r = 1;
        else if (a < b) r = -1;
        return r;
      }
    });

    this.option = +this.options.indexOf(text).toString();
  }

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      : false;
  }

  doEdit() {
    this.isAdd = false;
    //console.log(this.option);
    this.text = this.options[+this.option];
    // if (!this.isDoInput) this.setFocus();
    this.isDoInput = !this.isDoInput;
  }

  showNew() {
    //dubs as save button for edit and new
    if (this.isDoInput) {
      //save is pressed
      if (this.isAdd) {
        //save for a new item
        this.options.push(this.text);
        this.isAdd = false;
        this.onAdd.emit(this.text);
        this.onChange.emit(this.text);
      } else {
        //save for old item
        //console.log(this.option, this.text);
        let prevValue = this.options[+this.option] ;
        let currValue = this.text;
        this.options[+this.option] = this.text;
        console.log('input-select-0',this.text,this.options);
        this.onEdit.emit({prevValue, currValue});
        this.onChange.emit(currValue)
        console.log('input-select-1',this.text,this.options);
      }
      //this.options.sort();
      this.setItem(this.text);
    } else {
      //new is clicked
      this.isAdd = true;
      this.text = '';
      // if (!this.isDoInput) this.setFocus();
    }
    this.isDoInput = !this.isDoInput;
  }

  doSave(event: any){
    //console.log(event);
    this.text = event;
    this.showNew()
  }

  doCancel(){
    this.isDoInput = false;
  }

  doAdd(){
    this.showNew()
  }

  // setFocus() {
  //   setTimeout(() => {
  //     this.inputElement.nativeElement.focus();
  //     // this will make the execution after the above boolean has changed
  //     //this.searchElement.nativeElement.focus();
  //   }, 0);
  // }

  doDelete() {
    let r = confirm('Are you sure you want to delete this item?');
    //console.log(r);
    if (r) this.options.splice(+this.option, 1);
    this.option = 0;
  }

  doFilter(event: any){
    this.listFilterText = event.toLowerCase();
  }

  hideItem(text: string){
    let r = false;
    if (this.listFilterText.length>0){
      r = text.toLowerCase().indexOf(this.listFilterText)==-1;
    }
    return r;
  }

  countItems(){
    return this.options.filter(e => !this.hideItem(e)).length;
  }

  showingFilter(event:any){
    this.isShowingFilter = event;
  }

  doChange(event: any){
    //console.log(event);
    this.onChange.emit(this.options[event.target.value]);
    this.onSelect.emit(event.target.value);
  }

  // trackBy: trackFn()
  trackFn(){
    let r = 0;
    if (this.options){
      for (let i=0;i<this.options.length;i++){
        r = r + this.options[i].length;
      }
      r = this.options.length;
    }
    return r;
  }

}
