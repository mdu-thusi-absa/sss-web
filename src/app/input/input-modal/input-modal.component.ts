import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css']
})
export class InputModalComponent implements OnInit {
  @Input() id = 'modalDialog'

  constructor() { }

  ngOnInit(): void {
  }

}
