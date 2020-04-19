import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-duo',
  templateUrl: './input-text-duo.component.html',
  styleUrls: ['./input-text-duo.component.css']
})
export class InputTextDuoComponent implements OnInit {
  @Input() titleLeft = '';
  @Input() titleRight = '';
  @Input() placeHolderLeft = '';
  @Input() placeHolderRight = '';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  constructor() { }

  ngOnInit(): void {
  }

}
