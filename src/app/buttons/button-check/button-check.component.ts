import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-button-check',
  templateUrl: './button-check.component.html',
  styleUrls: ['./button-check.component.css']
})
export class ButtonCheckComponent implements OnInit {
  @Input() showMe =  true;
  eid = 'buttons-check'
  constructor(private data: DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doClick(){

  }

}
