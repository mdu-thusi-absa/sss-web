import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css']
})
export class InputAddressComponent implements OnInit {
  @Input() title = 'Address'
  @Input() filterText = ''
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() allowCopyOption = false;
  @Input() allowDefaultAddressOption = false;

  //address text, country, city
  @Input() value: [string,string,string]
  //[country: cities[]]
  @Input() countriesCities: [string,string[]];
  @Input() hideBody = true;

  @Output() onFile = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
  }

  getID(){
    let s = / /g;
    return this.title.toLowerCase().replace(s, '-');
  }

  doFile(){
    this.onFile.emit(this.title);
  }
  doRecord(){
    this.onFile.emit(this.title);
  }

  hideByFilter(){
    if (!this.doHideByFilter) return false;
    else return (
      this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
    );
    console.log(this.filterText);
  }

}
