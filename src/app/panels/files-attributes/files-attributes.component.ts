import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-files-attributes',
  templateUrl: './files-attributes.component.html',
  styleUrls: ['./files-attributes.component.css']
})
export class FilesAttributesComponent implements OnInit {
  @Input() showFileFields: string[] = [];
  //showFileFields
  @Output() onSelectFields = new EventEmitter();
  @Input() isShowAll = true;
  filterText = '';
  @Input() panelRows = 1;
  hideActive = true;
  hideInActive = true;
  rdoNoneAll = 'Active';
  listType = 'all';
  isNewMessage = false;

  entities= ['Entity Name',
  'Registration Number',
  'Previous Name',
  'Code',
  'Suffix',
  'Country',
  'Industry',
  'Representative Office',
  'Foreign branch',
  'Incorporation Date',
  'Anniversary (month)',
  'Business Start Date',
  'Financial year end (month)',
  'Income Tax Number',
  'VAT Number',
  'Registered office address',
  'Postal address',
  'Business Area',
  'Business Division',
  'Legal classification',
  'Consolidated',
  'Entity status',
  'Entity status tiering',
  'Accounting classification',
  'Accounting classification tiering',
  'Direct parent/ownership',
  'Absa shareholding in entity (%)',
  'Appointed company secretary',
  'Internal secretary representative',
  'Entity Executive',
  'Entity Financial Officer',
  'Public Officer (income tax)']

  constructor(public data: DataService) {}

  ngOnInit(): void {
    // if (this.showFileFields.length==0){
    //   Object.assign(this.showFileFields, this.entities);

    // }
    if (this.data.lg) console.log(new Date().getTime(),'loaded:file-attributes');
    this.data.progress += 1;
  }

  isFullScreen() {
    return this.panelRows === 1;
  }

  isHalfScreen() {
    return this.panelRows === 2;
  }

  isThirdScreen() {
    return this.panelRows === 3;
  }

  shoudHideAttribute(attribute: string): boolean {
    let r = false;
    let notInText =
      this.filterText.length === 0
        ? false
        : attribute
            .toLowerCase()
            .indexOf(this.filterText.toLowerCase()) === -1;
    r = notInText;
    return r;
  }

  getCountFiltered(){
    return this.entities.filter(e => !this.shoudHideAttribute(e)).length;
  }

  doCheckField(event: any){
    let f = event.target.value;
    let c = event.target.checked;
    let p = this.showFileFields.indexOf(f);
    if (c){
      if (p==-1) this.showFileFields.push(f) 
    }
    else{
      if (p>-1) this.showFileFields.splice(p,1) 
    }
    this.showFileFields.sort(this.compareFieldPosition);
    this.onSelectFields.emit(this.showFileFields);
  }

    compareFieldPosition(v: string,  w: string){
      let entities= ['Entity Name',
  'Registration Number',
  'Previous Name',
  'Code',
  'Suffix',
  'Country',
  'Industry',
  'Representative Office',
  'Foreign branch',
  'Incorporation Date',
  'Anniversary (month)',
  'Business Start Date',
  'Financial year end (month)',
  'Income Tax Number',
  'VAT Number',
  'Registered office address',
  'Postal address',
  'Business Area',
  'Business Division',
  'Legal classification',
  'Consolidated',
  'Entity status',
  'Entity status tiering',
  'Accounting classification',
  'Accounting classification tiering',
  'Direct parent/ownership',
  'Absa shareholding in entity (%)',
  'Appointed company secretary',
  'Internal secretary representative',
  'Entity Executive',
  'Entity Financial Officer',
  'Public Officer (income tax)']
      let nV = entities.indexOf(v);
      let nW = entities.indexOf(w);
      let r = 0;
      if (nV>nW) r = 1;
      else if (nV<nW) r = -1;
      return r;
    }

  doFilter(event: any){
    this.filterText = event;
  }

  doAdd(event: any){
    this.isNewMessage = !this.isNewMessage;
  }

  selectAll(){
    this.isShowAll = !this.isShowAll;
    // for(let f of this.entities){
    //   if(this.showFileFields.indexOf(f)==-1) this.showFileFields.push(f);
    // }
    if (this.isShowAll){
      for (let s of this.entities){
        let p = this.showFileFields.indexOf(s);
        if (p==-1) {
          this.showFileFields.push(s);
        }
      }
    } else {
      for (let s of this.entities){
        let p = this.showFileFields.indexOf(s);
        if (p>-1) {
          this.showFileFields.splice(p,1);
        }
      }
    }
    this.onSelectFields.emit(this.showFileFields);
  }
}
