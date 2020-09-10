import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';

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

  eid = 'buttons-caret'
  constructor(private data: DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doClick(){
    this.isDown = !this.isDown;
    this.onClick.emit();
  }

}
