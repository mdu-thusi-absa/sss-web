import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/models';

@Component({
  selector: 'app-button-caret',
  templateUrl: './button-caret.component.html',
  styleUrls: ['./button-caret.component.css']
})
export class ButtonCaretComponent implements OnInit {
  @Input() isDown = true;
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
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
