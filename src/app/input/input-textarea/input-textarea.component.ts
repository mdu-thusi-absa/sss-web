import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent implements OnInit {
  @Input() title = '';
  @Input() placeholder = '';
  @Input() text = '';
  @Input() rows = 4;
  @Input() noTitle = false;
  @Input() noButtons = false;
  @Input() showFlash = true;

  constructor() { }

  ngOnInit(): void {
  }

}
