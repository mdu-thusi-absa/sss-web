import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-browse',
  templateUrl: './input-browse.component.html',
  styleUrls: ['./input-browse.component.css']
})
export class InputBrowseComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() title = '';
  @Input() showDisk = false;
  @Input() showLink = false;
  @Input() showMinus = false;
  @Input() showDownload = false;
  @Input() showShare = false;
  fileName = '';

  constructor() { }

  ngOnInit(): void {
  }

  doDisk(){}
  doMinus(){}
  doLink(){}
  doDownload(){}
  doShare(){}
  doKey(event: any){

  }

  hideByFilter() {
    return (this.doHideByFilter ? this.filterText.length>0 && this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1 : false);
  }

}
