import { Injectable } from '@angular/core';
import { NaturalEntity, Entity, Country, LegalEntity, User, GroupEntity } from './models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    Entity.makeMap(this.companiesMap,this.entities);
    Entity.makeNameMap(this.countriesMap,this.countries);
  }

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
  //countries = new Map().set(0, 'South Africa').set(1, 'USA').set(2, 'GBR');
  
  cities = new Map()
    .set(0, new Map().set(0, 'JHB').set(1, 'PTA'))
    .set(1, new Map().set(0, 'NY').set(2, 'LA'))
    .set(2, new Map().set(0, 'LON').set(3, 'MAN'));

  //countries = new Map([[0,'ZAF'],[1,'USA'],[2,'GBR']];
  countries = [new Country('ZAF'),new Country('USA'), new Country('GBR')]
  countriesMap = new Map();
  //makeMap(this.countriesMap, this.countries);

  getCountriesNames() {
    //return this.countries;
    
    //console.log(this.countriesMap);
    //console.log(new Map([[0,'a'],[1,'b']]));
    return this.countriesMap;
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
  // addCity(countryId: number, city: string) {
  //   let m = this.getCities(countryId);
  //   let i = m.size;
  //   m.set(i, city);
  //   return i;
  // }
  // editCity(countryId: number, id: number, newCountryName: string) {
  //   let m = this.getCities(countryId);
  //   m.set(id, newCountryName);
  //   return this.getCities(countryId);
  // }
  // deleteCity(countryId: number, id: number) {
  //   let m = this.getCities(countryId);
  //   m.delete(id);
  //   return this.getCities(countryId);
  // }
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
    [0, 'Company'],
    [1, 'Person'],
    [2, 'User'],
    [3, 'Group'],
    [4, 'Trust'],
    [5, 'Regulator'],
    [6, 'Regulation'],
    [7, 'Government Agency'],
    
  ]);
  getEntityTypes() {
    return this.entityTypes;
  }
  entityTypesPlural = new Map([
    [0, 'Companies'],
    [1, 'Persons'],
    [2, 'Users'],
    [3, 'Groups'],
    [4, 'Trusts'],
    [5, 'Regulators'],
    [6, 'Regulations'],
    [7, 'Government Agencies']
  ]);
  getEntityTypesPlural() {
    return this.entityTypesPlural;
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
  entityStatuses = new Map([
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
  accountingClasses = new Map([
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
  entities: LegalEntity[] = [
    new LegalEntity('Google Pty Ltd').set('tasksCount',2).set('isActive',true),
    new LegalEntity('Microsoft Pty Ltd').set('tasksCount',2).set('isActive',true),
    new LegalEntity('Google Pty Ltd').set('tasksCount',2).set('suffix','').set('isActive',true),
    new LegalEntity('Microsoft Pty Ltd').set('tasksCount',3).set('suffix','').set('isActive',true),
    new LegalEntity('Apple Inc').set('tasksCount',0).set('suffix','').set('isActive', false),
    new LegalEntity('Amazon').set('tasksCount',0).set('suffix','USA').set('isActive',true),
    new LegalEntity('Amazon').set('tasksCount',2).set('suffix','SA').set('isActive',true),
    new LegalEntity('Alphabet').set('tasksCount',1).set('suffix','').set('isActive', false),
    new LegalEntity('Facebook').set('tasksCount',0).set('suffix','').set('isActive',false),
    new LegalEntity('Alibaba').set('tasksCount',0).set('suffix','').set('isActive',true),
    new LegalEntity('Tencent Holdings').set('tasksCount',5).set('suffix','').set('isActive', false),
    new LegalEntity('Johnson and Johnson').set('tasksCount',0).set('suffix','').set('isActive', false),
    new LegalEntity('Walmart').set('tasksCount',0).set('suffix','').set('isActive', false),
    new LegalEntity('Nestle').set('tasksCount',3).set('suffix','').set('isActive', true),
    new LegalEntity('Samsung').set('tasksCount',1).set('suffix','').set('isActive', true),
    new LegalEntity('Procter and Gamble').set('tasksCount',0).set('suffix','').set('isActive', false),
    new LegalEntity('Intel').set('tasksCount',4).set('suffix','').set('isActive', false),
    new LegalEntity('Cisco Systems').set('tasksCount',3).set('suffix','').set('isActive', false) 
  ];
  //   {
  //     name: 'Google Pty Ltd',
  //     tasksCount: 2,
  //     suffix: '',
  //     country: 'South Africa',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Microsoft Pty Ltd',
  //     tasksCount: 3,
  //     suffix: '',
  //     country: 'South Africa',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Apple Inc',
  //     tasksCount: 0,
  //     suffix: '',
  //     country: 'Botswana',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Amazon',
  //     tasksCount: 0,
  //     suffix: 'USA',
  //     country: 'Ghana',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Amazon',
  //     tasksCount: 2,
  //     suffix: 'SA',
  //     country: 'Ghana',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Alphabet',
  //     tasksCount: 1,
  //     suffix: '',
  //     country: 'Ghana',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Facebook',
  //     tasksCount: 0,
  //     suffix: '',
  //     country: 'Kenya',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Alibaba',
  //     tasksCount: 0,
  //     suffix: '',
  //     country: 'Kenya',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Tencent Holdings',
  //     tasksCount: 5,
  //     suffix: '',
  //     country: 'Mauritius',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Johnson and Johnson',
  //     tasksCount: 0,
  //     suffix: '',
  //     country: 'Mauritius',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Walmart',
  //     tasksCount: 0,
  //     suffix: '',
  //     country: 'Mozambique',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Nestle',
  //     tasksCount: 3,
  //     suffix: '',
  //     country: 'Mozambique',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Samsung',
  //     tasksCount: 1,
  //     suffix: '',
  //     country: 'Seychelles',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Procter and Gamble',
  //     tasksCount: 0,
  //     suffix: '',
  //     country: 'ZAF',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Intel',
  //     tasksCount: 4,
  //     suffix: '',
  //     country: 'TZA',
  //     isActive: false,
  //   },
  //   {
  //     name: 'Cisco Systems',
  //     tasksCount: 3,
  //     suffix: '',
  //     country: 'TZA',
  //     isActive: false,
  //   },
  // ];
  companiesMap = new Map();
  // new Map([
  //   [0, 'Google Pty Ltd'],
  //   [1, 'Microsoft Pty Ltd'],
  //   [2, 'Apple Inc'],
  //   [3, 'Amazon'],
  //   [4, 'Amazon'],
  //   [5, 'Alphabet'],
  //   [6, 'Facebook'],
  //   [7, 'Alibaba'],
  //   [8, 'Tencent Holdings'],
  //   [9, 'Johnson and Johnson'],
  //   [10, 'Walmart'],
  //   [11, 'Nestle'],
  //   [12, 'Samsung'],
  //   [13, 'Procter and Gamble'],
  //   [14, 'Intel'],
  //   [15, 'Cisco Systems'],
  // ]);
  getCompanies() {
    return this.companiesMap;
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
  taskTypes = new Map([
    [0, 'Appointment'],
    [1, 'Resignation'],
    [2, 'Rename'],
    [3, 'General'],
  ]);
  getTaskTypes() {
    return this.taskTypes;
  }

  auditors = new Map([
    [0, 'Internal'],
    [1, 'PWC'],
  ]);
  getAuditors() {
    return this.auditors;
  }
  entityGroups = new Map([
    [0, '- Default -'],
    [1, 'Africa'],
    [2, 'Europe'],
    [3, 'Asia'],
  ]);
  // entityGroupsMap = new Map([
  //   [0, new GroupEntity('- All -')],
  //   [1, new GroupEntity('Africa')],
  //   [2, new GroupEntity('SPV')],
  //   [3, new GroupEntity('Properties')],
  // ]
  // );

  getEntityGroups() {
    return this.entityGroups;
  }
  industries = new Map([
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
    [0, 'text'],
    [1, 'date'],
    [2, 'checkbox'],
    [3, 'textarea'],
    [4, 'person'],
    [5, 'address'],
    [6, 'file'],
    [7, 'number'],
  ]);
  getCustomTypes() {
    return this.customTypes;
  }
  personsMap = new Map([
    [0, new NaturalEntity('Froning', 'Richard', 'Mayham')],
    [1, new NaturalEntity('Singundsdottir', 'Sara', 'Iceland')],
    [2, new NaturalEntity('Fraser', 'Mat', 'ABSA')],
  ]);
  getPersons() {
    return this.personsMap;
  }
  users = new Map([
    [0, new User('Anuchin', 'Vlad', 'ICDI').set('tasksCount',3)],
    [1, new User('Voznesensky', 'Alex', 'ICDI').set('tasksCount',1)],
    [2, new User('Kurchner', 'Ulrich', 'ICDI').set('tasksCount',2)],
    [3, new User('Kopelowitz', 'Dean', 'ICDI').set('tasksCount',5)],
    [4, new User('Small', 'James', '').set('tasksCount',7).set('isActive',false)],
    [5, new User('Rajagopaul', 'Samantha', 'Sam').set('tasksCount',15)],
    [6, new User('Standar', 'Lourika', '').set('tasksCount',7)],
  ]);
  getUsers() {
    return this.users;
  }

  getFunctionalEntities(type: number){
    //console.log(type);
    if (type==0){
      return this.getCompanies();
    }
    else if (type==1){
      //console.log(type,'in');
      return this.getPersons();
    }
    else if (type==2){
      //console.log(type,'in');
      return this.getUsers();
    }
    else if (type==3){
      //console.log(type,'in');
      return this.getEntityGroups();
    }
    else {
      return this.getCompanies();
    }
  }

  positions = new Map([
    [0, 'Director'],
    [1, 'Auditor'],
    [2, 'Secretary'],
    [3, 'Public Officer'],
  ]);
  getPositions() {
    return this.positions;
  }
  //Regulatory Types
  //Accounty Classifications
  //...
}
