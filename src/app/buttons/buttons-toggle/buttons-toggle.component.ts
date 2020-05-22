import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-buttons-toggle',
  templateUrl: './buttons-toggle.component.html',
  styleUrls: ['./buttons-toggle.component.css']
})
export class ButtonsToggleComponent implements OnInit {
  @Input() title = 'menu';
  @Input() toggleValue = true;
  @Input() isNarrow = false;
  @Input() glyphiconClass = 'glyphicon-flag';
  @Input() placeholder = 'Toggle ' + this.title;
  @Input() showMe = true;

  @Output() onToggle = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  doToggle(event: any){
    //this.toggleValue = !this.toggleValue
    console.log(event.target.checked);
    this.toggleValue = event.target.checked;
    this.onToggle.emit(event.target.checked);
  }

}
