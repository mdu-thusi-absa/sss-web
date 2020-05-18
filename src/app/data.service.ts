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
    .add(new Entity('Regulation'));
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
    .add(new Entity('Regulations'));

  getEntityTypesPlural() {
    return this.entityTypesPlural;
  }

  //Business Area
  businessAreas = new Entities()
    .add(new Entity('Banking'))
    .add(new Entity('Asset Manager'))
    .add(new Entity('Property'));
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
    .add(new Entity('Active'))
    .add(new Entity('Dormant'))
    .add(new Entity('Closed'));
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

  entities = new Entities()
    .add(
      new LegalEntity('Google Pty Ltd')
        .set('tasksCount', 2)
        .set('isActive', true)
    )
    .add(
      new LegalEntity('Microsoft Pty Ltd')
        .set('tasksCount', 2)
        .set('isActive', true)
    )
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
    return this.entities;
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

  auditors = new Entities().add(new Entity('Internal')).add(new Entity('PWC'));
  getAuditors() {
    return this.auditors;
  }
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
    .add(new Entity('number'));
  getCustomTypes() {
    return this.customTypes;
  }
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
      return this.getPersons();
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
