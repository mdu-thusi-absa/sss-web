import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-buttons-toggle',
  templateUrl: './buttons-toggle.component.html',
  styleUrls: ['./buttons-toggle.component.css']
})
export class ButtonsToggleComponent implements OnInit {
  @Input() title = 'menu';
  @Input() toggleValue = true;
  @Input() isNarrow = false;
  @Input() matIcon = 'home';
  @Input() svgUrlPath = "'../assets/svg/Icon_Exclamation circle_SVG_Black.svg\'"
  @Input() placeholder = '';
  @Input() showMe = true;
  @Input() dataTarget: string;

  @Output() onToggle = new EventEmitter();

  eid = 'buttons-toggle'
  constructor(private data: DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doToggle(event: any){
    this.toggleValue = event.target.checked;
    this.onToggle.emit(event.target.checked);
  }

}
