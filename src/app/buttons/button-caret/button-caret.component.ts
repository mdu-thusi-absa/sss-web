import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-caret',
  templateUrl: './button-caret.component.html',
  styleUrls: ['./button-caret.component.css']
})
export class ButtonCaretComponent implements OnInit {
  @Input() isDown = true;
  @Input() title = '';
  @Input() target = '';

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doClick(){
    this.isDown = !this.isDown;
    this.onClick.emit();
  }

}
