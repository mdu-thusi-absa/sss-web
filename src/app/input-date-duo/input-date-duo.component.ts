import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-date-duo',
  templateUrl: './input-date-duo.component.html',
  styleUrls: ['./input-date-duo.component.css']
})
export class InputDateDuoComponent implements OnInit {
  @Input() titleLeft = '';
  @Input() titleRight = '';
  @Input() filterText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
