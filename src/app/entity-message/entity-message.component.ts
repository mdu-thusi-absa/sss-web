import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/models';

@Component({
  selector: 'app-entity-message',
  templateUrl: './entity-message.component.html',
  styleUrls: ['./entity-message.component.css']
})
export class EntityMessageComponent implements OnInit {
  @Input() message: Message;

  constructor() { }

  ngOnInit(): void {

  }

  toggleReadUnread(){
    this.message.isRead = !this.message.isRead;
  }

}
