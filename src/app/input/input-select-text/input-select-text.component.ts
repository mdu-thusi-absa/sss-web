import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-input-select-text',
  templateUrl: './input-select-text.component.html',
  styleUrls: ['./input-select-text.component.css'],
})
export class InputSelectTextComponent implements OnInit {
  //@Input() isDoInput = false;
  @Input() showSave = false;
  @Input() showCancel = false;
  @Input() text = '';

  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  @ViewChild('inputText') inputElement: ElementRef;

  isDoInput_: boolean = false;
  get isDoInput(): boolean {
    return this.isDoInput_;
  }

  @Input('isDoInput')
  set isDoInput(value: boolean) {
    this.isDoInput_ = value;
    if (value) this.setFocus();
  }

  constructor() {}

  ngOnInit(): void {}

  doSave() {
    this.onSave.emit(this.text);
  }

  doCancel() {
    this.onCancel.emit();
  }

  setFocus() {
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
      // this will make the execution after the above boolean has changed
      //this.searchElement.nativeElement.focus();
    }, 0);
  }

  onKey(event: any) {
    //console.log(event.key);
    // without type info
    if (event.key == 'Escape') {
      this.text = '';
      this.doCancel()
    }
    else if(event.key=="Enter"){
      this.doSave();
    }
    
  }
}
