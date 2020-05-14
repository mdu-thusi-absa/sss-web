import { Injectable } from '@angular/core';
import { Person } from './models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public getID(title: string) {
    let s = / /g;
    let t = title.toLowerCase().replace(s, '-');
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

  private sortMap(map: any) {
    return new Map([...map.entries()].sort());
  }
  //countries
  countries = new Map().set(0, 'South Africa').set(1, 'USA').set(2, 'GBR');
  cities = new Map()
    .set(0, new Map().set(0, 'JHB').set(1, 'PTA'))
    .set(1, new Map().set(0, 'NY').set(2, 'LA'))
    .set(2, new Map().set(0, 'LON').set(3, 'MAN'));

  getCountries() {
    return this.countries;
  }
  addCountry(countryKey: number) {
    this.cities.set(countryKey, new Map());
    // let i = this.countries.size;
    // this.countries.set(i, country);
    // this.countries = this.sortMap(this.countries);
    // return this.countries.size;
  }
  // editCountry(id: number, newCountryName: string) {
  //   this.countries.set(id, newCountryName);
  //   this.countries = this.sortMap(this.countries);
  //   return this.getCountries();
  // }
  // deleteCountry(id: number) {
  //   this.countries.delete(id);
  //   return this.getCountries();
  // }
  //cities

  getCities(countryId: number) {
    return this.cities.get(countryId);
  }
  addCity(countryId: number, city: string) {
    let m = this.getCities(countryId);
    let i = m.size;
    m.set(i, city);
    return i;
  }
  editCity(countryId: number, id: number, newCountryName: string) {
    let m = this.getCities(countryId);
    m.set(id, newCountryName);
    return this.getCities(countryId);
  }
  deleteCity(countryId: number, id: number) {
    let m = this.getCities(countryId);
    m.delete(id);
    return this.getCities(countryId);
  }
  //months
  months = new Map()
    .set(0, '01')
    .set(1, '02')
    .set(2, '03')
    .set(3, '04')
    .set(4, '05')
    .set(5, '06')
    .set(6, '07')
    .set(7, '08')
    .set(8, '09')
    .set(9, '10')
    .set(10, '11')
    .set(11, '12');
  getMonths() {
    return this.months;
  }
  //industry
  //Entity Types
  entityTypes = new Map([
    [0, 'Trust'],
    [1, 'Company'],
    [2, 'Regulator'],
    [3, 'Regulation'],
    [4, 'Person'],
    [5, 'Government Agency'],
  ]);
  getEntityTypes() {
    return this.entityTypes;
  }

  //Business Area
  businessAreas = new Map([
    [0, 'Banking'],
    [1, 'Asset Manager'],
    [2, 'Property'],
  ]);
  getBusinessAreas() {
    return this.businessAreas;
  }
  businessDivisions = new Map([
    [0, 'Div 1'],
    [1, 'Div 2'],
    [2, 'Div 3'],
  ]);
  getBusinessDivisions() {
    return this.businessDivisions;
  }
  legalClasses = new Map([
    [0, 'Legal'],
    [1, 'Illegal'],
  ]);
  getLegalClasses() {
    return this.legalClasses;
  }
  entityStatuses= new Map([
    [0, 'Active'],
    [1, 'Dormant'],
    [2, 'Closed'],
  ]);
  getEntityStatuses() {
    return this.entityStatuses;
  }
  entityStatusTiers = new Map([
    [0, 'Active'],
    [1, 'Dormant'],
    [2, 'Closed'],
  ]);
  getEntityStatusTiers() {
    return this.entityStatusTiers;
  }
  accountingClasses= new Map([
    [0, 'Accounted'],
    [1, 'Not Accounted'],
  ]);
  getAccountingClasses() {
    return this.accountingClasses;
  }
  accountingTiers = new Map([
    [0, 'Top'],
    [1, 'Middle'],
    [2, 'Low'],
  ]);
  getAccountingTier() { 
    return this.accountingTiers;
  }
  companiesList = new Map([
    [0, 'Google Pty Ltd'],
    [1, 'Microsoft Pty Ltd'],
    [2, 'Apple Inc'],
    [3, 'Amazon'],
    [4, 'Amazon'],
    [5, 'Alphabet'],
    [6, 'Facebook'],
    [7, 'Alibaba'],
    [8, 'Tencent Holdings'],
    [9, 'Johnson and Johnson'],
    [10, 'Walmart'],
    [11, 'Nestle'],
    [12, 'Samsung'],
    [13, 'Procter and Gamble'],
    [14, 'Intel'],
    [15, 'Cisco Systems'],
  ]);
  getCompaniesList() { 
    return this.companiesList;
  }
  yesNo = new Map([
    [0, 'Yes'],
    [1, 'No'],
  ]);
  getYesNo() {
    return this.yesNo;
  }
  periods = new Map([
    [0, 'Daily'],
    [1, 'Weekly'],
    [2, 'Monthly'],
    [3, 'Quarterly'],
    [4, 'Annualy'],
  ]);
  getPeriods() {
    return this.periods;
  }
  taskStatus = new Map([
    [0, 'To Do'],
    [1, 'Doing'],
    [2, 'Done'],
  ]);
  getTaskStatus() {
    return this.taskStatus;
  }
  taskTypes  = new Map([
    [0, 'Appointment'],
    [1, 'Resignation'],
    [2, 'Rename'],
    [3, 'General'],
  ]);
  getTaskTypes() {
    return this.taskTypes;
  }
  usersList = new Map([
    [0, '-General-'],
    [1, 'vlad'],
    [2, 'dean'],
    [3, 'sasha'],
    [4, 'ulrich'],
  ]);
  getUsersList() {
    return this.usersList;
  }
  auditors = new Map([
    [0, 'Internal'],
    [1, 'PWC'],
  ]);
  getAuditors() {
    return this.auditors;
  }
  entityLists= new Map([
    [0, '- Default -'],
    [1, 'Africa'],
    [2, 'Europe'],
    [3, 'Asia'],
  ]);
  getEntityLists() {
    return this.entityLists;
  }
  industries  = new Map([
    [0, 'Banking'],
    [1, 'Asset Management'],
    [3, 'Property'],
  ]);
  getIndustries() {
    return this.industries;
  }
  companySecretaries = new Map([
    [0, 'Internal'],
    [1, 'PWC'],
  ]);
  getCompanySercetaries() {
    return this.companySecretaries;
  }
  customTypes = new Map([
    [0,'text'],
    [1,'date'],
    [2,'checkbox'],
    [3,'textarea'],
    [4,'person'],
    [5,'address'],
    [6,'file'],
    [7,'number']
  ]);
  getCustomTypes(){
    return this.customTypes;
  }
  persons = new Map([
    [0, new Person('Froning', 'Richard','Mayham')],
    [1, new Person('Singundsdottir','Sara','Iceland')],
    [2, new Person('Fraser','Mat','ABSA')]
  ]);
  getPersons(){
    return this.persons;
  }
  positions = new Map([
      [0,'Director'],
      [1,'Auditor'],
      [2,'Secretary'],
      [3,'Public Officer']
  ]);
  getPositions(){
    return this.positions;
  }
  //Regulatory Types
  //Accounty Classifications
  //...
}
