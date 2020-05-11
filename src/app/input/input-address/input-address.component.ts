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
  @Input() countriesCities: CountryCities[];
  @Input() hideBody = true;

  @Output() onFile = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onRecord = new EventEmitter();

  countries: string[] = [];
  cities: string[] = [];
  countryIndex = 0;

  constructor() {}

  ngOnInit(): void {
    // for (let i = 0; i < this.countriesCities.length; i++) {
    //   this.countries.push(this.countriesCities[i].name);
    // }
    this.buildCountries();
    this.doChangeCountry(this.countries[0]);
  }

  buildCountries() {
    this.countries = [];
    if (this.countriesCities) {
      for (let i = 0; i < this.countriesCities.length; i++) {
        this.countries.push(this.countriesCities[i].name);
      }
      this.cities = this.countriesCities[this.countryIndex].cities;
    }
  }

  // getIDp() {
  //   let s = / /g;
  //   return this.title.toLowerCase().replace(s, '-');
  // }

  getID() {
    let s = / /g;
    let t = this.title.toLowerCase().replace(s, '-');
    s = /\//g;
    t = t.toLowerCase().replace(s, '-');
    s = /\:/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\,/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\-\-/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\(/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\)/g;
    t = t.toLowerCase().replace(s, '-');
    return t;
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
  }

  doChangeCountry(event: any) {
    // this.buildCountries();
    // this.cities = this.countriesCities.find((e) => e.name == event).cities;
  }

  doEditCountry(event: any) {
    if (this.countriesCities) {
      console.log('-1', event);
      let country = event.currValue;
      let p = this.countriesCities.indexOf(event.prevValue);
      let c: CountryCities = this.countriesCities.find(
        (e) => e.name == event.prevValue
      );
      if (c) {
        this.countriesCities.find((e) => e.name == event.prevValue).name =
          event.currValue;
        //this.cities = c.cities;
      }

      this.buildCountries();
      console.log(country, this.countriesCities);
      //this.cities = this.countriesCities.find((e) => e.name == country).cities;
    }
  }

  doAddCountry(event: any) {
    let c = new CountryCities(event, ['-Default-']);
    this.countriesCities.push(c);
    this.buildCountries();
    // let t = Object.assign(this.countriesCities);
    // this.countriesCities = t;
    this.countryIndex = this.countriesCities.findIndex((e) => e.name == event);
    this.cities = this.countriesCities[this.countryIndex].cities;
  }

  doSelectCountry(event: any) {
    this.countryIndex = event;
    if (this.countries.length != this.countriesCities.length) {
      this.buildCountries();
    }
    if (
      this.countries[this.countryIndex] !=
      this.countriesCities[this.countryIndex].name
    ) {
      this.countries[this.countryIndex] = this.countriesCities[
        this.countryIndex
      ].name;
    }
    //what if there are fewer countries

    this.cities = this.countriesCities[this.countryIndex].cities;
  }
}
