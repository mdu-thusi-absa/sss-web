import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entities, EntityCity, Entity } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';
import { EnumEntityType } from 'src/app/data/data-entityTypes';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css'],
})
export class InputAddressComponent implements OnInit {
  title_ = 'Address';
  @Input() set title(v: string) {
    this.title_ = Entity.sentanceCase(v);
  }
  get title() {
    return this.title_;
  }

  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() disabled = false;
  @Input() allowCopyOption = false;
  @Input() allowDefaultAddressOption = false;
  @Input() showCheck = false;

  //address text, country, city
  @Input() value: [string, string, string];
  @Input() hideBody = true;
  @Input() isNarrow = false;

  @Output() onFile = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onRecord = new EventEmitter();

  countries: Entities<Entity>;
  cities: Entities<EntityCity>;
  countryIndex = -1;
  cityIndex = 0;
  countryText = '';
  cityText = '';

  eid = 'input-address'
  constructor(private data: DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    this.countries = this.data.countries
    this.countryIndex = this.countries.currentKey
    this.cities = this.data.getCitiesForCountry(this.getCountryIndex());
    if (this.countryIndex < 0) {
      this.countryIndex = this.data.getDefault('countryKey');
    }
    
  }

  getID() {
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

  doEditCountry(event: any) {
    //expects id, new name
    //this.data.editCountry(event.id,event.name);
  }

  doAddCountry(event: any) {
    this.cities = this.data.getCitiesForCountry(this.getCountryIndex());
  }

  doChangeInputTextCountry(event: any) {
    this.countryText = event.name;
  }

  doChangeInputTextCity(event: any) {
    this.cityText = event.name;
  }

  getCountryIndex() {
    if (this.countries.has(this.countryIndex)) {
    } else {
      this.countryIndex = this.countries.all_keys[0];
    }
    return this.countryIndex;
  }

  doSelectCountry(event: any) {
    this.countryIndex = +event;
    //this.cities = this.countries.get(this.countryIndex)['cities'];
    //console.log(event);
    this.cities = this.data.getCitiesForCountry(this.getCountryIndex());
    this.cityIndex = this.cities.currentKey    
  }

  doSelectCity(event: any) {
    this.cityIndex = +event;
  }
}
