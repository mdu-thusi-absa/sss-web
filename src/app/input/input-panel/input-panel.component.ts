import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { getHtmlElementById, getHtmlElementById_Height, getHtmlElementById_Top } from 'src/app/data/utils-scripts';


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
  getBodyMaxHeight(){
    // let t = getHtmlElementById_Top('input-panel-heading-' + this.eid)
    // let h = getHtmlElementById_Height('input-panel-heading-' + this.eid)
    // let tH = getHtmlElementById_Height('main-app-container')

    //let m = document.getElementById('input-panel-heading-' + this.eid).
    //let t = getHtmlElementById_Height('input-panel-heading-' + this.eid)
    //let t = getHtmlElementById_Top(this.eid + '-title')
    //let e = getHtmlElementById('input-panel-' + this.eid)
    //let n = e.scrollTop()
    // console.log(h,t,tH)
    // if (n>0)
    //   console.log(t,n)
    //let topPos = getHtmlElementById_Top('input-panel-' + this.eid)
    //console.log(topPos)
    //"maxHeight == 0 ? '' : maxHeight"
    return this.maxHeight?this.maxHeight:''
  }

}
