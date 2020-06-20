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

  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (!this.panelPrimary && !this.panelInfo) this.panelDefault = true;
  }

  getID(){
    return this.data.getID(this.title);
  }

}
