import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-check',
  templateUrl: './button-check.component.html',
  styleUrls: ['./button-check.component.css']
})
export class ButtonCheckComponent implements OnInit {
  @Input() showMe =  true;
  constructor() { }

  ngOnInit(): void {
  }

  doClick(){

  }

}
