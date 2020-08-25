import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Entity } from 'src/app/data/models';

@Component({
  selector: 'app-input-browse',
  templateUrl: './input-browse.component.html',
  styleUrls: ['./input-browse.component.css'],
})
export class InputBrowseComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  title_ = '';
  @Input () set title(v: string){
    this.title_ = Entity.sentanceCase(v);
  }
  get title(){
    return this.title_;
  }
  @Input() showDisk = false;
  @Input() showLink = false;
  @Input() showMinus = false;
  @Input() showDownload = false;
  @Input() showShare = false;
  fileName = '';
  fileToUpload: File = null;

  eid = 'input-browse'
  constructor(public data: DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {}

  doDisk() {}
  doMinus() {}
  doLink() {}
  doDownload() {}
  doShare() {}
  doKey(event: any) {}

  hideByFilter() {
    return this.doHideByFilter
      ? this.filterText.length > 0 &&
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      : false;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = this.fileToUpload.name;
  }

  getID(){
    return this.data.getID(this.title);
  }

  fileBrowse(event: any){
    //let t = 'file-' + this.data.getID(this.title)
    let t = 'file-browser-' + this.getID();
    event.preventDefault();

    let element: HTMLElement = document.getElementById(t) as HTMLElement;
    element.click();
  }

  // onFileChange(event: any){
  //   let files = event.target.files;
  //   this.fileToUpload = files[0].name;
  // }
}
