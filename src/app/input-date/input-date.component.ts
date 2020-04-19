import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  @Input() title = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  constructor() {}

  ngOnInit(): void {}

  hideByFilter(){
    if (this.doHideByFilter) return false;
    else return (
      this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
    );
  }
}
