import { Injectable } from '@angular/core';
import {
  NaturalEntity,
  Entity,
  Country,
  LegalEntity,
  User,
  GroupEntity,
  City,
  Entities,
  FunctionalEntity,
  Countries,
  NaturalEntities,
} from './models';
import { EntityDetailsFilesComponent } from './panels/entity-details-files/entity-details-files.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    this.makeCountries();
  }

  makeCountries() {
    let a = new Country('ZAF');
    a.cities.add(new City('JHB')).add(new City('PTA')).add(new City('DUR'));
    this.countries.add(a);

    let b = new Country('USA');
    b.cities.add(new City('NYC')).add(new City('LA')).add(new City('BOS'));
    this.countries.add(b);

    let c = new Country('GBR');
    c.cities.add(new City('LON')).add(new City('MAN')).add(new City('LIV'));
    this.countries.add(c);

    this.countries.add(new Country("ARUBA"));
    this.countries.add(new Country("AFGHANISTAN"));
    this.countries.add(new Country("ANGOLA"));
    this.countries.add(new Country("UNITED ARAB EMIRATES"));
    this.countries.add(new Country("ARGENTINA"));
    this.countries.add(new Country("AMERICAN SAMOA"));
    this.countries.add(new Country("ANTIGUA AND BAR"));
    this.countries.add(new Country("AUSTRALIA"));
    this.countries.add(new Country("AUSTRIA"));
    this.countries.add(new Country("BURUNDI"));
    this.countries.add(new Country("BELGIUM"));
    this.countries.add(new Country("BENIN"));
    this.countries.add(new Country("BURKINA FASO"));
    this.countries.add(new Country("BANGLADESH"));
    this.countries.add(new Country("BULGARIA"));
    this.countries.add(new Country("BAHRAIN"));
    this.countries.add(new Country("BAHAMAS"));
    this.countries.add(new Country("BOSNIA HERZEGOV"));
    this.countries.add(new Country("BERMUDA"));
    this.countries.add(new Country("BOLIVIA"));
    this.countries.add(new Country("BRAZIL"));
    this.countries.add(new Country("BARBADOS"));
    this.countries.add(new Country("BHUTAN"));
    this.countries.add(new Country("BRITISH VIRGIN ISLANDS"));
    this.countries.add(new Country("BOTSWANA"));
    this.countries.add(new Country("CANADA"));
    this.countries.add(new Country("SWITZERLAND"));
    this.countries.add(new Country("CHILE"));
    this.countries.add(new Country("CHINA"));
    this.countries.add(new Country("COLOMBIA"));
    this.countries.add(new Country("COSTA RICA"));
    this.countries.add(new Country("CUBA"));
    this.countries.add(new Country("CAYMAN ISLANDS"));
    this.countries.add(new Country("CYPRUS"));
    this.countries.add(new Country("CZECH REPUBLIC"));
    this.countries.add(new Country("DENMARK"));
    this.countries.add(new Country("DOMINICAN REPUBLIC"));
    this.countries.add(new Country("ALGERIA"));
    this.countries.add(new Country("ECUADOR"));
    this.countries.add(new Country("EGYPT"));
    this.countries.add(new Country("SPAIN"));
    this.countries.add(new Country("ESTONIA"));
    this.countries.add(new Country("ETHIOPIA"));
    this.countries.add(new Country("EUROPE"));
    this.countries.add(new Country("FINLAND"));
    this.countries.add(new Country("FIJI"));
    this.countries.add(new Country("FRANCE"));
    this.countries.add(new Country("UNITED KINGDOM"));
    this.countries.add(new Country("GERMANY"));
    this.countries.add(new Country("GHANA"));
    this.countries.add(new Country("GUINEA"));
    this.countries.add(new Country("GAMBIA"));
    this.countries.add(new Country("EQUATORIAL GUINEA"));
    this.countries.add(new Country("GREECE"));
    this.countries.add(new Country("GUERNESEY"));
    this.countries.add(new Country("HONG KONG"));
    this.countries.add(new Country("CROATIA"));
    this.countries.add(new Country("HAITI"));
    this.countries.add(new Country("HUNGARY"));
    this.countries.add(new Country("INDONESIA"));
    this.countries.add(new Country("ISLE OF MAN"));
    this.countries.add(new Country("INDIA"));
    this.countries.add(new Country("INTERNATIONAL"));
    this.countries.add(new Country("IRELAND"));
    this.countries.add(new Country("IRAN"));
    this.countries.add(new Country("IRAQ"));
    this.countries.add(new Country("ICELAND"));
    this.countries.add(new Country("ISRAEL"));
    this.countries.add(new Country("ITALY"));
    this.countries.add(new Country("IVORY COAST"));
    this.countries.add(new Country("JAMAICA"));
    this.countries.add(new Country("JERSEY"));
    this.countries.add(new Country("JORDAN"));
    this.countries.add(new Country("JAPAN"));
    this.countries.add(new Country("KAZAKSTAN"));
    this.countries.add(new Country("KENYA"));
    this.countries.add(new Country("KYRGYZSTAN"));
    this.countries.add(new Country("CAMBODIA"));
    this.countries.add(new Country("SOUTH KOREA"));
    this.countries.add(new Country("KUWAIT"));
    this.countries.add(new Country("LATVIA"));
    this.countries.add(new Country("LEBANON"));
    this.countries.add(new Country("LIBERIA"));
    this.countries.add(new Country("LIBYAN ARAB JAM"));
    this.countries.add(new Country("LIECHTENSTEIN"));
    this.countries.add(new Country("SRI LANKA"));
    this.countries.add(new Country("LESOTHO"));
    this.countries.add(new Country("LITHUANIA"));
    this.countries.add(new Country("LUXEMBOURG"));
    this.countries.add(new Country("MALTA"));
    this.countries.add(new Country("MOROCCO"));
    this.countries.add(new Country("MONACO"));
    this.countries.add(new Country("MADAGASCAR"));
    this.countries.add(new Country("MALDIVES"));
    this.countries.add(new Country("MEXICO"));
    this.countries.add(new Country("MOZAMBIQUE"));
    this.countries.add(new Country("MAURITIUS"));
    this.countries.add(new Country("MALAWI"));
    this.countries.add(new Country("MALAYSIA"));
    this.countries.add(new Country("NAMIBIA"));
    this.countries.add(new Country("NIGERIA"));
    this.countries.add(new Country("NICARAGUA"));
    this.countries.add(new Country("NIUE"));
    this.countries.add(new Country("NETHERLANDS"));
    this.countries.add(new Country("NORWAY"));
    this.countries.add(new Country("NEPAL"));
    this.countries.add(new Country("NEW ZEALAND"));
    this.countries.add(new Country("OMAN"));
    this.countries.add(new Country("PAKISTAN"));
    this.countries.add(new Country("PANAMA"));
    this.countries.add(new Country("PERU"));
    this.countries.add(new Country("PHILIPPINES"));
    this.countries.add(new Country("PAPUA NEW GUINE"));
    this.countries.add(new Country("POLAND"));
    this.countries.add(new Country("PUERTO RICO"));
    this.countries.add(new Country("KOREA DEMOCRATIC REPUBLIC"));
    this.countries.add(new Country("PORTUGAL"));
    this.countries.add(new Country("PARAGUAY"));
    this.countries.add(new Country("FRENCH POLYNESIA"));
    this.countries.add(new Country("QATAR"));
    this.countries.add(new Country("REUNION"));
    this.countries.add(new Country("ROMANIA"));
    this.countries.add(new Country("RUSSIAN FEDERATION"));
    this.countries.add(new Country("RWANDA"));
    this.countries.add(new Country("SAUDI ARABIA"));
    this.countries.add(new Country("SUDAN"));
    this.countries.add(new Country("SENEGAL"));
    this.countries.add(new Country("SINGAPORE"));
    this.countries.add(new Country("EL SALVADOR"));
    this.countries.add(new Country("SAN MARINO"));
    this.countries.add(new Country("SOMALIA"));
    this.countries.add(new Country("SERBIA"));
    this.countries.add(new Country("SLOVAKIA"));
    this.countries.add(new Country("SLOVENIA"));
    this.countries.add(new Country("SWEDEN"));
    this.countries.add(new Country("SWAZILAND"));
    this.countries.add(new Country("SEYCHELLES"));
    this.countries.add(new Country("TURKS & CAICOS"));
    this.countries.add(new Country("TOGO"));
    this.countries.add(new Country("THAILAND"));
    this.countries.add(new Country("TONGA"));
    this.countries.add(new Country("TRINIDAD"));
    this.countries.add(new Country("TUNISIA"));
    this.countries.add(new Country("TURKEY"));
    this.countries.add(new Country("TAIWAN"));
    this.countries.add(new Country("TANZANIA"));
    this.countries.add(new Country("UGANDA"));
    this.countries.add(new Country("UKRAINE"));
    this.countries.add(new Country("URUGUAY"));
    this.countries.add(new Country("UNITED STATES"));
    this.countries.add(new Country("UZBEKISTAN"));
    this.countries.add(new Country("VENEZUELA"));
    this.countries.add(new Country("VIET NAM"));
    this.countries.add(new Country("SAMOA"));
    this.countries.add(new Country("YUGOSLAVIA"));
    this.countries.add(new Country("SOUTH AFRICA"));
    this.countries.add(new Country("ZAIRE"));
    this.countries.add(new Country("ZAMBIA"));
    this.countries.add(new Country("ZIMBABWE"));
    this.countries.add(new Country("UNDEFINED"));
    this.countries.add(new Country("GEORGIA"));
    this.countries.add(new Country("MOLDOVA"));
    this.countries.add(new Country("ALBANIA"));
    this.countries.add(new Country("ANDORRA"));
    this.countries.add(new Country("ANGUILLA"));
    this.countries.add(new Country("ANTARCTICA"));
    this.countries.add(new Country("ARMENIA"));
    this.countries.add(new Country("AZERBAIJAN"));
    this.countries.add(new Country("BELARUS"));
    this.countries.add(new Country("BELIZE"));
    this.countries.add(new Country("BOUVET ISLAND"));
    this.countries.add(new Country("BRITISH INDIAN OCEAN TERRITORY"));
    this.countries.add(new Country("BRUNEI DARUSSALAM"));
    this.countries.add(new Country("CAMEROON"));
    this.countries.add(new Country("CAPE VERDE"));
    this.countries.add(new Country("CENTRAL AFRICAN REPUBLIC"));
    this.countries.add(new Country("CHAD"));
    this.countries.add(new Country("CHRISTMAS ISLAND"));
    this.countries.add(new Country("COCOS (KEELING) ISLANDS"));
    this.countries.add(new Country("COMOROS"));
    this.countries.add(new Country("CONGO"));
    this.countries.add(new Country("CONGO, THR DRC"));
    this.countries.add(new Country("COOK ISLANDS"));
    this.countries.add(new Country("COTE D'IVOIRE"));
    this.countries.add(new Country("DJIBOUTI"));
    this.countries.add(new Country("DOMINICA"));
    this.countries.add(new Country("EAST TIMOR"));
    this.countries.add(new Country("ERITREA"));
    this.countries.add(new Country("FALKLAND ISLANDS (MALVINAS)"));
    this.countries.add(new Country("FAROE ISLANDS"));
    this.countries.add(new Country("FRANCE, METROPOLITAN"));
    this.countries.add(new Country("FRENCH GUIANA"));
    this.countries.add(new Country("FRENCH SOUTHERN TERRITORIES"));
    this.countries.add(new Country("GABON"));
    this.countries.add(new Country("GIBRALTAR"));
    this.countries.add(new Country("GREENLAND"));
    this.countries.add(new Country("GRENADA"));
    this.countries.add(new Country("GUADELOUPE"));
    this.countries.add(new Country("GUAM"));
    this.countries.add(new Country("GUATEMALA"));
    this.countries.add(new Country("GUINEA-BISSAU"));
    this.countries.add(new Country("GUYANA"));
    this.countries.add(new Country("HEARD AND MCDONALD ISLANDS"));
    this.countries.add(new Country("HOLY SEE (VATICAN CITY STATE)"));
    this.countries.add(new Country("HONDURAS"));
    this.countries.add(new Country("KIRIBATI"));
    this.countries.add(new Country("LAOS"));
    this.countries.add(new Country("MACAU"));
    this.countries.add(new Country("MACEDONIA"));
    this.countries.add(new Country("MALI"));
    this.countries.add(new Country("MARSHALL ISLANDS"));
    this.countries.add(new Country("MARTINIQUE"));
    this.countries.add(new Country("MAURITANIA"));
    this.countries.add(new Country("MAYOTTE"));
    this.countries.add(new Country("MICRONESIA, FEDERATED STATES OF"));
    this.countries.add(new Country("MONGOLIA"));
    this.countries.add(new Country("MONTSERRAT"));
    this.countries.add(new Country("MYANMAR (BURMA)"));
    this.countries.add(new Country("NAURU"));
    this.countries.add(new Country("NETHERLANDS ANTILLES"));
    this.countries.add(new Country("NEW CALEDONIA"));
    this.countries.add(new Country("NIGER"));
    this.countries.add(new Country("NORFOLK ISLAND"));
    this.countries.add(new Country("NORTHERN MARIANA ISLANDS"));
    this.countries.add(new Country("PALAU"));
    this.countries.add(new Country("PITCAIRN"));
    this.countries.add(new Country("SAINT KITTS AND NEVIS"));
    this.countries.add(new Country("SAINT LUCIA"));
    this.countries.add(new Country("SAINT VINCENT AND THE GRENADINES"));
    this.countries.add(new Country("SAO TOME AND PRINCIPE"));
    this.countries.add(new Country("SIERRA LEONE"));
    this.countries.add(new Country("SOLOMON ISLANDS"));
    this.countries.add(new Country("SOUTH GEORGIA AND SOUTH S.S."));
    this.countries.add(new Country("ST HELENA"));
    this.countries.add(new Country("ST PIERRE AND MIQUELON"));
    this.countries.add(new Country("SURINAME"));
    this.countries.add(new Country("SVALBARD AND JAN MAYEN ISLANDS"));
    this.countries.add(new Country("SYRIAN ARAB REPUBLIC"));
    this.countries.add(new Country("TAJIKISTAN"));
    this.countries.add(new Country("TOKELAU"));
    this.countries.add(new Country("TURKMENISTAN"));
    this.countries.add(new Country("TUVALU"));
    this.countries.add(new Country("U.S. MINOR ISLANDS"));
    this.countries.add(new Country("VANUATU"));
    this.countries.add(new Country("VIRGIN ISLANDS (BRITISH)"));
    this.countries.add(new Country("VIRGIN ISLANDS (U.S.)"));
    this.countries.add(new Country("WALLIS AND FUTUNA ISLANDS"));
    this.countries.add(new Country("WESTERN SAHARA"));
    this.countries.add(new Country("YEMEN"));
    this.countries.add(new Country("CROATIA"));
    this.countries.add(new Country("UNITED ARAB EMIRATES"));
   
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

  countries = new Countries();

  getCountries() {
    return this.countries;
  }

  //months
  months = new Entities()
    .add(new Entity('01'))
    .add(new Entity('02'))
    .add(new Entity('03'))
    .add(new Entity('04'))
    .add(new Entity('05'))
    .add(new Entity('06'))
    .add(new Entity('07'))
    .add(new Entity('08'))
    .add(new Entity('09'))
    .add(new Entity('10'))
    .add(new Entity('11'))
    .add(new Entity('12'));
  getMonths() {
    return this.months;
  }
  //industry
  //Entity Types
  entityTypes = new Entities()
    .add(new Entity('Company'))
    .add(new Entity('Individual'))
    .add(new Entity('User'))
    .add(new Entity('Group'))
    .add(new Entity('Trust'))
    .add(new Entity('Regulator'))
    .add(new Entity('Regulation'))
    .add(new Entity('Auditor'))
    .add(new Entity('External Secretary'))
    .add(new Entity('Setting'));

  getEntityTypes() {
    return this.entityTypes;
  }

  entityTypesPlural = new Entities()
    .add(new Entity('Companies'))
    .add(new Entity('Individuals'))
    .add(new Entity('Users'))
    .add(new Entity('Groups'))
    .add(new Entity('Trusts'))
    .add(new Entity('Regulators'))
    .add(new Entity('Regulations'))
    .add(new Entity('Auditors'))
    .add(new Entity('External Secretaries'))
    .add(new Entity('Settings'));

  getEntityTypesPlural() {
    return this.entityTypesPlural;
  }

  //Business Area
  businessAreas = new Entities()
    .add(new Entity('Finance'))
    .add(new Entity('Property'))
    .add(new Entity('Retail'));
  getBusinessAreas() {
    return this.businessAreas;
  }
  businessDivisions = new Entities()
    .add(new Entity('Div 1'))
    .add(new Entity('Div 2'))
    .add(new Entity('Div 3'));
  getBusinessDivisions() {
    return this.businessDivisions;
  }
  legalClasses = new Entities()
    .add(new Entity('Legal'))
    .add(new Entity('Illegal'));
  getLegalClasses() {
    return this.legalClasses;
  }
  entityStatuses = new Entities()
    .add(new Entity('Active'))
    .add(new Entity('Dormant'))
    .add(new Entity('Closed'));
  getEntityStatuses() {
    return this.entityStatuses;
  }
  entityStatusTiers = new Entities()
    .add(new Entity('Tier 1'))
    .add(new Entity('Tier 2'))
    .add(new Entity('Tier 3'));
  getEntityStatusTiers() {
    return this.entityStatusTiers;
  }
  accountingClasses = new Entities()
    .add(new Entity('Accounted'))
    .add(new Entity('Not Accounted'));
  getAccountingClasses() {
    return this.accountingClasses;
  }
  accountingTiers = new Entities()
    .add(new Entity('Top'))
    .add(new Entity('Middle'))
    .add(new Entity('Low'));
  getAccountingTier() {
    return this.accountingTiers;
  }

  regulators = new Entities()
    .add(new LegalEntity('Financial Services Conduct Authority').set('suffix','FSCA'))
    .add(new LegalEntity('South Africian Reserve Bank').set('suffix','SARB'));
  getRegulators() {
    return this.regulators;
  }

  regulations = new Entities()
    .add(new LegalEntity('Companies Act 71 of 2008'))
    .add(new LegalEntity('Protection of Personal Information Act 4 of 2013').set("suffix",'POPI'))
    .add(new LegalEntity('Financial Intelligence Centre Act 38 of 2001').set("suffix",'FICA'));
  getRegulations() {
    return this.regulations;
  }

  trusts = new Entities()
    .add(new LegalEntity('Northern Trust').set('suffix','NTH'))
    .add(new LegalEntity('BEE Trust').set('suffix','BEET'))
  getTrusts(): Entities{
    return this.trusts
  }

  companies = new Entities()
    .add(
      new LegalEntity('Google Pty Ltd')
        .set('tasksCount', 2)
        .set('suffix', '')
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Microsoft Pty Ltd')
        .set('tasksCount', 3)
        .set('suffix', '')
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Apple Inc')
        .set('tasksCount', 0)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Amazon')
        .set('tasksCount', 0)
        .set('suffix', 'USA')
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Amazon')
        .set('tasksCount', 2)
        .set('suffix', 'SA')
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Alphabet')
        .set('tasksCount', 1)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Facebook')
        .set('tasksCount', 0)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Alibaba')
        .set('tasksCount', 0)
        .set('suffix', '')
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Tencent Holdings')
        .set('tasksCount', 5)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Johnson and Johnson')
        .set('tasksCount', 0)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Walmart')
        .set('tasksCount', 0)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Nestle')
        .set('tasksCount', 3)
        .set('suffix', '')
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Samsung')
        .set('tasksCount', 1)
        .set('suffix', '')
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Procter and Gamble')
        .set('tasksCount', 0)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Intel')
        .set('tasksCount', 4)
        .set('suffix', '')
        .set('isActive', false)
    )
    .add(
      new LegalEntity('Cisco Systems')
        .set('tasksCount', 3)
        .set('suffix', '')
        .set('isActive', false)
    );

  getCompanies(): Entities {
    return this.companies;
  }
  yesNo = new Entities().add(new Entity('Yes')).add(new Entity('No'));
  getYesNo() {
    return this.yesNo;
  }
  periods = new Entities()
    .add(new Entity('Daily'))
    .add(new Entity('Weekly'))
    .add(new Entity('Monthly'))
    .add(new Entity('Quarterly'))
    .add(new Entity('Annualy'));
  getPeriods() {
    return this.periods;
  }
  taskStatus = new Entities()
    .add(new Entity('To Do'))
    .add(new Entity('Doing'))
    .add(new Entity('Done'));
  getTaskStatus() {
    return this.taskStatus;
  }
  taskTypes = new Entities()
    .add(new Entity('Appointment'))
    .add(new Entity('Resignation'))
    .add(new Entity('Rename'))
    .add(new Entity('General'));
  getTaskTypes() {
    return this.taskTypes;
  }

  contactPreferences = new Entities()
    .add(new Entity('Email'))
    .add(new Entity('Call landline'))
    .add(new Entity('Call cellphone'))
    .add(new Entity('SMS or Text'));
  getContactPreferences() {
    return this.contactPreferences;
  }

  auditors = new Entities().add(new LegalEntity('Internal')).add(new LegalEntity('PWC'));
  
  entityGroups = new Entities()
    .add(new FunctionalEntity('- Default -').set('tasksCount', 7))
    .add(new FunctionalEntity('Africa').set('tasksCount', 3))
    .add(new FunctionalEntity('Europe').set('tasksCount', 18))
    .add(new FunctionalEntity('Asia').set('tasksCount', 2));

  getEntityGroups(): Entities {
    return this.entityGroups; //this.entityGroups;
  }

  industries = new Entities()
    .add(new Entity('Banking'))
    .add(new Entity('Asset Management'))
    .add(new Entity('Property'));

  getIndustries() {
    return this.industries;
  }
  companySecretaries = new Entities()
    .add(new Entity('Internal'))
    .add(new Entity('PWC'));
  getCompanySercetaries() {
    return this.companySecretaries;
  }
  customTypes = new Entities()
    .add(new Entity('text'))
    .add(new Entity('date'))
    .add(new Entity('checkbox'))
    .add(new Entity('textarea'))
    .add(new Entity('person'))
    .add(new Entity('address'))
    .add(new Entity('file'))
    .add(new Entity('number'))
    .add(new Entity('contact'));
  
  persons = new NaturalEntities()
    .add(new NaturalEntity('Froning', 'Richard', 'Mayham'))
    .add(new NaturalEntity('Singundsdottir', 'Sara', 'Iceland'))
    .add(new NaturalEntity('Fraser', 'Mat', 'ABSA'));
  getPersons() {
    return this.persons;
  }
  users = new Entities()
    .add(new User('Anuchin', 'Vlad', 'ICDI').set('tasksCount', 3))
    .add(new User('Voznesensky', 'Alex', 'ICDI').set('tasksCount', 1))
    .add(new User('Kurchner', 'Ulrich', 'ICDI').set('tasksCount', 2))
    .add(new User('Kopelowitz', 'Dean', 'ICDI').set('tasksCount', 5))
    .add(
      new User('Small', 'James', '').set('tasksCount', 7).set('isActive', false)
    )
    .add(new User('Rajagopaul', 'Samantha', 'Sam').set('tasksCount', 15))
    .add(new User('Standar', 'Lourika', '').set('tasksCount', 7));
  getUsers() {
    return this.users;
  }

  

  getFunctionalEntities(type: number): Entities {
    //console.log(type);
    if (type == 0) {
      return this.getCompanies();
    } else if (type == 1) {
      //console.log(type,'in');
      return this.persons;
    } else if (type == 2) {
      //console.log(type,'in');
      return this.getUsers();
    } else if (type == 3) {
      return this.getEntityGroups();
    } else if (type == 4) {
      return this.getTrusts();
    } else if (type == 5) {
      //console.log(type,'in');
      return this.getRegulators();
    } else if (type == 6) {
      //console.log(type,'in');
      return this.getRegulations();
    }
    else if (type == 7) {
      //console.log(type,'in');
      return this.auditors;
    }
    
    else {
      return new Entities();
    }
  }

  positions = new Entities()
    .add(new Entity('Director'))
    .add(new Entity('Auditor'))
    .add(new Entity('Secretary'))
    .add(new Entity('Public Officer'));
  getPositions() {
    return this.positions;
  }
  //Regulatory Types
  //Accounty Classifications
  //...
}
