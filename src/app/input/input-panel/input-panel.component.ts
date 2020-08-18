import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})
export class InputPanelComponent implements OnInit {
  @Input() title = ''
  @Input() panelDefault = false;
  @Input() panelPrimary = false;
  @Input() panelInfo = false;
  @Input() maxHeight = "50%"
  

  eid = 'input-custom'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    if (!this.panelPrimary && !this.panelInfo) this.panelDefault = true;
  }

  getID(){
    return this.data.getID(this.title);
  }

}
