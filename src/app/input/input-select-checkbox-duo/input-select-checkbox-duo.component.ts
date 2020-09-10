import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { AnyEntity, Entities, Entity } from 'src/app/data/data-entity-paren';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-select-checkbox-duo',
  templateUrl: './input-select-checkbox-duo.component.html',
  styleUrls: ['./input-select-checkbox-duo.component.css']
})
export class InputSelectCheckboxDuoComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText='';
  @Input() doHideByFilter = false;
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() values: Entities<AnyEntity>;
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

  eid = 'input-select-checkbox-duo'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
  }

  doChange_Available(event: any){
    
  }

  doChange_Selected(event: any){
  }

}