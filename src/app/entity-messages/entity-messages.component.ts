import { Component, OnInit } from '@angular/core';
import { Message } from '../models/models';

@Component({
  selector: 'app-entity-messages',
  templateUrl: './entity-messages.component.html',
  styleUrls: ['./entity-messages.component.css'],
})
export class EntityMessagesComponent implements OnInit {
  filterText = '';
  messages: Message[];
  rdoUnReadReadAll = 'UnRead';

  constructor() {}

  ngOnInit(): void {
    this.messages = [
      new Message(new Date('2019 June 15'), 'vlad', 'Information 1', true),
      new Message(new Date(), 'dean', 'Information 2', false),
      new Message(new Date(), 'sasha', 'Information 3', true),
      new Message(new Date(), 'ulrich', 'Information 4', true),
      new Message(new Date(), 'vlad', 'Information 5', true),
      new Message(new Date(), 'dean', 'Information 6', false),
      new Message(new Date(), 'sasha', 'Information 7', true),
      new Message(new Date(), 'ulrich', 'Information 8', true),
      new Message(new Date(), 'vlad', 'Information 9', true),
      new Message(new Date(), 'dean', 'Information 10', false),
      new Message(new Date(), 'sasha', 'Information 11', true),
      new Message(new Date(), 'ulrich', 'Information 12', true),
      new Message(new Date(), 'vlad', 'Information 13', true),
      new Message(new Date(), 'dean', 'Information 14', false),
      new Message(new Date(), 'sasha', 'Information 15', true),
      new Message(new Date(), 'ulrich', 'Information 16', true),
      new Message(new Date(), 'vlad', 'Information 17', true),
      new Message(new Date(), 'dean', 'Information 18', false),
      new Message(new Date(), 'sasha', 'Information 19', true),
      new Message(new Date(), 'ulrich', 'Information 20', true),
    ];
  }

  showMessagesThatAre(typ: string) {
    console.log(typ);
    if (typ === 'unread') {
      this.messages.filter((msg) => !msg.isRead);
    } else if (typ === 'read') {
      this.messages.filter((msg) => msg.isRead);
    } else {
      this.messages.filter((msg) => true);
    }
  }

  getCount_All() {
    return this.messages.length;
  }

  getCount_Unread() {
    return this.messages.filter((msg) => !msg.isRead).length;
  }

  getCount_Read() {
    return this.messages.filter((msg) => msg.isRead).length;
  }

  shouldHideMessage(msg: Message) {
    //console.log('in');
    let inFilter = true;
    let inText = true;
    let inWhen = true;
    let inWho = true;
    if (this.filterText.length > 0) {
      inText =  msg.text.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      inWhen = msg.whenString().indexOf(this.filterText.toLowerCase()) > -1;
      inWho = msg.who.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      inFilter = inText || inWhen || inWho;
    }
    let inReadChoice = true;
    if (this.rdoUnReadReadAll == 'All') {
      inReadChoice = true;
    } else if (this.rdoUnReadReadAll == 'UnRead') {
      inReadChoice = !msg.isRead;
    } else if (this.rdoUnReadReadAll == 'Read') {
      inReadChoice = msg.isRead;
    }

    let doShow = inFilter && inReadChoice;
    //console.log(doShow, inText, inWhen, inWho, inReadChoice);
    return !doShow;
  }
}
