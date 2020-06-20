import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { EveryEntity, Entities } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-select-checkbox-duo',
  templateUrl: './input-select-checkbox-duo.component.html',
  styleUrls: ['./input-select-checkbox-duo.component.css']
})
export class InputSelectCheckboxDuoComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText='';
  @Input() doHideByFilter = false;
  @Input() title = '';
  @Input() values: Entities<EveryEntity>;
  @Input() selectedValues: number[] = [];

  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showCheck = false;
  @Input() showFlash = false;
  @Input() overflowY = true;

  @Output() onFile = new EventEmitter();
  @Output() onRecord  = new EventEmitter();
  @Output() onTask  = new EventEmitter();
  @Output() onChange = new EventEmitter();

  constructor(public data: DataService) { }

  ngOnInit(): void {
    //this.values = this.data.entityGroups;
  }

  doChange_Available(event: any){
    //console.log(event);
    
  }

  doChange_Selected(event: any){
    //console.log(event);
  }

}