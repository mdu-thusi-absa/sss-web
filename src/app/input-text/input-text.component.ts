import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() title = '';
  @Input() placeHolder = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  constructor() {}

  ngOnInit(): void {
    if (this.placeHolder == '') this.placeHolder = this.title;
  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1 : false);
  }
}
