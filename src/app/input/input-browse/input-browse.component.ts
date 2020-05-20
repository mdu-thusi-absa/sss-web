import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-browse',
  templateUrl: './input-browse.component.html',
  styleUrls: ['./input-browse.component.css'],
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
  fileToUpload: File = null;


  constructor(public dataService: DataService) {}

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
          this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      : false;
  }

  handleFileInput(files: FileList) {
    console.log('in')
    console.log(files.item(0));
    this.fileToUpload = files.item(0);
    this.fileName = this.fileToUpload.name;
  }

  fileBrowse(event: any){
    //let t = 'file-' + this.dataService.getID(this.title)
    let t = 'file';
    console.log(t);
    event.preventDefault();

    let element: HTMLElement = document.getElementById(t) as HTMLElement;
    element.click();
  }

  // onFileChange(event: any){
  //   let files = event.target.files;
  //   this.fileToUpload = files[0].name;
  // }
}
