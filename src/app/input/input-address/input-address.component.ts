import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country, Countries, Cities, Entities } from 'src/app/models';
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
  countryIndex = 0;
  cityIndex = 0;
  countryText = '';
  cityText = '';

  constructor(private data: DataService) {
        
  }

  ngOnInit(): void {
    this.countries = this.data.getCountries();
    //console.log(this.countries);
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
        this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1
      );
  }

  doEditCountry(event: any){
    //expects id, new name
    //this.data.editCountry(event.id,event.name);
  }

  doAddCountry(event: any){
    //this.data.addCountry(+event);
    console.log('doAddCountry',event)
    let c = this.countries.get(+event)
    c.cities = new Cities();
    //console.log(c);
    this.cities = c.cities;
  }

  doChangeInputTextCountry(event: any){
    //console.log('country text',event.name);
    this.countryText = event.name;
  }

  doChangeInputTextCity(event: any){
    this.cityText = event.name;
  }

  getCountryIndex(){
    if (this.countries.has(this.countryIndex)){
      //this.countryIndex = 
    }
    else{
      this.countryIndex = this.countries.all_keys[0];
    }
    return this.countryIndex
  }

  doSelectCountry(event: any){
    this.countryIndex = +event;
    console.log(this.title,this.countryIndex)
    //console.log('doSelectCountry:d',event)
    
    // this.cities = this.countries.get(this.countryIndex).cities;
    // Object.assign(this.cities,this.countries.get(this.countryIndex).cities);
    // console.log('cities', this.cities);
    // //this.cityIndex = 0;
    // this.cities = new Cities();
    //this.cities = this.countries.get(this.countryIndex).cities;
    // console.log('cities', this.cities);
  }

  doSelectCity(event: any){
    this.cityIndex = +event;
  }
}
