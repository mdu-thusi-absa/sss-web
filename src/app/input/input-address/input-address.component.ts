import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country, Countries, Cities, Entities, City } from 'src/app/models';
import { DataService } from 'src/app/data.service'

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
  @Input() showCheck = false;

  //address text, country, city
  @Input() value: [string, string, string];
  @Input() hideBody = true;

  @Output() onFile = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onRecord = new EventEmitter();

  countries: Countries;
  cities: Cities;
  countryIndex = -1;
  cityIndex = 0;
  countryText = '';
  cityText = '';

  constructor(private data: DataService) {
        if (this.countryIndex < 0){
          this.countryIndex = data.getDefault('countryKey');
        }
  }

  ngOnInit(): void {
    this.countries = this.data.countries;
    this.cities = this.countries.get(this.getCountryIndex()).cities;  
  }

  getID(){
    return this.data.getID(this.title);
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
        this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      );
  }

  doEditCountry(event: any){
    //expects id, new name
    //this.data.editCountry(event.id,event.name);
  }

  doAddCountry(event: any){
    let c = this.countries.get(+event)
    this.cities = c.cities;
  }

  doChangeInputTextCountry(event: any){
    this.countryText = event.name;
  }

  doChangeInputTextCity(event: any){
    this.cityText = event.name;
  }

  getCountryIndex(){
    if (this.countries.has(this.countryIndex)){
    }
    else{
      this.countryIndex = this.countries.all_keys[0];
    }
    return this.countryIndex
  }

  doSelectCountry(event: any){
    this.countryIndex = +event;
    this.cities = this.countries.get(this.countryIndex).cities;
  }

  doSelectCity(event: any){
    this.cityIndex = +event;
  }
}
