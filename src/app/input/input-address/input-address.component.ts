import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';
import { Entities } from 'src/app/data/data-entities';
import { EntityAddress, EntityCity } from 'src/app/data/data-entity-kids';

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
  @Input() value: EntityAddress;
  @Input() hideBody = true;
  @Input() isNarrow = false;

  @Output() onFile = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onChange = new EventEmitter()

  countries: Entities<Entity>;
  cities: Entities<EntityCity>;
  // countryIndex = -1;
  // cityIndex = 0;
  countryText = '';
  cityText = '';

  eid = 'input-address';
  constructor(private data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  ngOnInit(): void {
    this.countries = this.data.countries;
    this.value = this.value ?? new EntityAddress(this.data)
    this.cities = this.data.getCitiesForCountry(this.getCountryIndex());
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

  doChangeCountry(event: any) {
    this.value.countryKey = +event
    this.cities = this.value.cities
    this.onChange.emit(this.value)
  }

  doChangeCity(event: any) {
    this.value.cityKey = +event;
    this.onChange.emit(this.value)
  }

  getCountryIndex() {
    if (this.countries.has(this.value.countryKey)) return this.value.countryKey;
    return this.countries.all_keys[0];
  }

  doChangeText(event:string){
    this.value.text = event
    this.onChange.emit(this.value)
  }

  @Input() autoFocus = false;
}
