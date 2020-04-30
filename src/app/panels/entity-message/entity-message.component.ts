import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/models';

@Component({
  selector: 'app-entity-message',
  templateUrl: './entity-message.component.html',
  styleUrls: ['./entity-message.component.css']
})
export class EntityMessageComponent implements OnInit {
  @Input() index = 0;
  @Input() message: Message;
  @Input() docs : string[]
  @Input() isEdit = false;
  rows = 20;

  @Output() onClose = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  toggleReadUnread(){
    this.message.isRead = !this.message.isRead;
  }

  doEdit(){
    this.isEdit = true;
  }

  doEditDoc(index: number){

  }
  doAddDoc(){

  }

  doClose(){
    this.isEdit = false;
    this.onClose.emit();
  }

  showDocs(){
    console.log('showDocs',this.rows);
    if (this.rows===20) this.rows = 15;
    if (this.rows===15) this.rows = 20;
    console.log('showDocs',this.rows);
  }

}
