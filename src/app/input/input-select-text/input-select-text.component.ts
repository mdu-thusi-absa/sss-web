import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DataService } from 'src/app/data.service';

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
  @Output() onChange = new EventEmitter();

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

  eid = 'input-select-text'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

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

  doKey(event: any) {
    // without type info
    if (event.key === 'Escape') {
      this.text = '';
      this.doCancel()
    }
    else if(event.key=="Enter"){
      this.doSave();
    }
    
  }

  doChange(event: any){
    this.onChange.emit(this.text);
  }
}
