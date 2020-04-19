import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-select-duo',
  templateUrl: './input-select-duo.component.html',
  styleUrls: ['./input-select-duo.component.css']
})
export class InputSelectDuoComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = '';
  @Input() titleLeft ='';
  @Input() titleRight ='';
  @Input() selectedValueLeft = '';
  @Input() selectedValueRight = ''
  @Input() optionsLeft: string[] = [];
  @Input() optionsRight: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
