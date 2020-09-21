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
  @Input() maxHeight = 0
  @Input() collapsed = true;
  @Input() showSaveNext = false;
  @Input() showSavePrev = false;
  @Input() showClose = false;
  @Input() showViewAll = false;
  @Input() noPadding = false
  @Input() showSync = false
  @Input() syncValue = true

  @Output() onSaveNext = new EventEmitter();
  @Output() onSavePrev = new EventEmitter();
  @Output() onMakeEID = new EventEmitter();
  @Output() onShowAll = new EventEmitter();
  @Output() onClose = new EventEmitter()
  @Output() onSync = new EventEmitter()
  

  eid = 'input-panel'
  constructor(public data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    if (!this.panelPrimary && !this.panelInfo) this.panelDefault = true;
    this.onMakeEID.emit(this.eid)
  }

  // bodyTop(){
  //   // let el = get
  //   // var topPos = el[0].getBoundingClientRect().top + $(window)['scrollTop']();

  //   let elementPanelBody = document.getElementById('input-panel-' + this.eid);
  //   console.log(elementPanelBody.scrollTop)
  // }

}
