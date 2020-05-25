import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-buttons-toolbar-button',
  templateUrl: './buttons-toolbar-button.component.html',
  styleUrls: ['./buttons-toolbar-button.component.css']
})
export class ButtonsToolbarButtonComponent implements OnInit {
  @Input() title = 'menu';
  @Input() isNarrow = false;
  @Input() glyphiconClass = 'glyphicon-flag';
  @Input() svgUrlPath = "'../assets/svg/Icon_Exclamation circle_SVG_Black.svg\'"
  @Input() placeholder = 'Launch ' + this.title;
  @Input() showMe = true;

  @Output() onClick = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  doClick(){
    this.onClick.emit();
  }

}

