import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountryCities } from 'src/app/models';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css'],
})
export class InputAddressComponent implements OnInit {
  @Input() title = 'Address';
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() allowCopyOption = false;
  @Input() allowDefaultAddressOption = false;

  //address text, country, city
  @Input() value: [string, string, string];
  //[country: cities[]]
  @Input() countriesCities: [string, string[]];
  @Input() hideBody = true;

  @Output() onFile = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onRecord = new EventEmitter();

  countries: string[] = [];
  cities: string[] = [];

  data: CountryCities[] = [
    new CountryCities('South Africa', ['JHB', 'PTA']),
    new CountryCities('USA', ['NY', 'LA']),
  ];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.data.length; i++) {
      this.countries.push(this.data[i].name);
    }
    console.log(this.countries);
    this.doChange(this.countries[0]);
  }

  getID() {
    let s = / /g;
    return this.title.toLowerCase().replace(s, '-');
  }

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }
  doTask() {
    this.onTask.emit(this.title);
  }

  hideByFilter() {
    if (!this.doHideByFilter) return false;
    else
      return (
        this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      );
    console.log(this.filterText);
  }

  doChange(event: any) {
    this.cities = this.data.find((e) => e.name == event).cities;
  }
}
