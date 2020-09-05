import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';


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
  @Input() panelSuccess = false;
  @Input() panelDanger = false;
  @Input() maxHeight = "50%"
  @Input() collapsed = true;
  @Input() showSaveNext = false;
  @Input() showSavePrev = false;
  @Input() showClose = false;
  @Input() noPadding = false

  @Output() onSaveNext = new EventEmitter();
  @Output() onSavePrev = new EventEmitter();
  

  eid = 'input-panel'
  constructor(public data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    if (!this.panelPrimary && !this.panelInfo) this.panelDefault = true;
  }



}
