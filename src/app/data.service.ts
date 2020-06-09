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
  EveryEntity,
  Company,
  FileEntity,
} from './models';
import { EntityDetailsFilesComponent } from './panels/entity-details-files/entity-details-files.component';
// import { JsonPipe } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import {
  jsonCompanies,
  jsonIndividuals,
  jsonDashboards,
  jsonEntityTypes,
  jsonEntityTypesPlural,
  jsonMonths,
  jsonPeriods,
  jsonFiles,
} from './data-json/data-json.module';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public lg = false;
  companies = new Entities<Company>(Company);
  persons = new Entities<NaturalEntity>(NaturalEntity);
  functionalEntities: Entities<EveryEntity>;
  dashboards = new Entities<Entity>(Entity);
  entityTypes = new Entities<Entity>(Entity);
  entityTypesPlural = new Entities<Entity>(Entity);
  months = new Entities<Entity>(Entity);
  periods = new Entities<Entity>(Entity);
  files = new Entities<FileEntity>(FileEntity);
  progress = 0;

  constructor() {
    this.loadStatic();
    this.makeDashboards();
    this.makeCountries();
    this.makeCompanies();
    this.makeIndividuals();

    this.makeFunctionalEntities();
  }

  loadStatic(){
    this.entityTypes.fromJSON(jsonEntityTypes);
    this.entityTypesPlural.fromJSON(jsonEntityTypesPlural);
    this.months.fromJSON(jsonMonths);
    this.periods.fromJSON(jsonPeriods);
    this.files.fromJSON(jsonFiles);
  }

  makeIndividuals() {
    this.persons.fromJSON(jsonIndividuals);
  }

  makeDashboards() {
    this.dashboards.fromJSON(jsonDashboards);
    //this.companies.sort();
  }
  makeCompanies() {
    this.companies.fromJSON(jsonCompanies, 1000);
    //this.companies.sort();
  }

  makeFunctionalEntities() {
    this.functionalEntities = new Entities<EveryEntity>(Entity);
    this.functionalEntities.fromArray('dashboard', this.dashboards.all_values);
    this.functionalEntities.fromArray('company', this.companies.all_values);
    this.functionalEntities.fromArray('individual', this.persons.all_values);
    this.functionalEntities.fromArray('user', this.users.all_values);
    this.functionalEntities.fromArray('group', this.entityGroups.all_values);
    this.functionalEntities.fromArray('trust', this.trusts.all_values);
    this.functionalEntities.fromArray('auditor', this.auditors.all_values);
    this.functionalEntities.fromArray(
      'secretariat',
      this.companySecretaries.all_values
    );
    this.functionalEntities.fromArray('regulator', this.regulators.all_values);
    this.functionalEntities.fromArray(
      'regulation',
      this.regulations.all_values
    );
    if (this.lg) console.log('loaded');
  }

  getEntity(entityKey: number) {
    return this.functionalEntities.get(entityKey);
  }

  getFunctionalEntitiesAll(): Entities<EveryEntity> {
    return this.functionalEntities;
  }

  makeCountries() {
    this.countries.add(new Country('Afghanistan').addCity(new City('Baghlan')));
    this.countries.add(
      new Country('Algeria')
        .addCity(new City('Baraki'))
        .addCity(new City('Barika'))
        .addCity(new City('Batna'))
        .addCity(new City('Béchar'))
        .addCity(new City('Béjaïa'))
        .addCity(new City('Biskra'))
        .addCity(new City('Blida'))
        .addCity(new City('Bordj Bou Arréridj'))
        .addCity(new City('Bordj El Kiffan'))
        .addCity(new City('Bou Saâda'))
        .addCity(new City('Bouïra'))
    );
    this.countries.add(new Country('Angola').addCity(new City('Benguela')));
    this.countries.add(
      new Country('Argentina')
        .addCity(new City('Bahía Blanca'))
        .addCity(new City('Bariloche'))
        .addCity(new City('Buenos Aires'))
    );
    this.countries.add(
      new Country('Australia')
        .addCity(new City('Ballarat'))
        .addCity(new City('Brisbane'))
    );
    this.countries.add(new Country('Azerbaijan').addCity(new City('Baku')));
    this.countries.add(
      new Country('Bangladesh')
        .addCity(new City('Barisal'))
        .addCity(new City('Bogra'))
    );
    this.countries.add(
      new Country('Belarus')
        .addCity(new City('Babruysk'))
        .addCity(new City('Baranovichi'))
        .addCity(new City('Barysaw'))
        .addCity(new City('Brest, Brest'))
    );
    this.countries.add(
      new Country('Belgium')
        .addCity(new City('Bruges'))
        .addCity(new City('Brussels'))
    );
    this.countries.add(
      new Country('Bosnia and Herzegovina').addCity(new City('Banja Luka'))
    );
    this.countries.add(
      new Country('Brazil')
        .addCity(new City('Bacabal'))
        .addCity(new City('Bagé'))
        .addCity(new City('Balneário Camboriú'))
        .addCity(new City('Barbacena'))
        .addCity(new City('Barcarena'))
        .addCity(new City('Barra Mansa'))
        .addCity(new City('Barreiras'))
        .addCity(new City('Barretos'))
        .addCity(new City('Barueri'))
        .addCity(new City('Bauru'))
        .addCity(new City('Belém'))
        .addCity(new City('Belford Roxo'))
        .addCity(new City('Belo Horizonte'))
        .addCity(new City('Bento Goncalves'))
        .addCity(new City('Betim'))
        .addCity(new City('Birigui'))
        .addCity(new City('Blumenau'))
        .addCity(new City('Boa Vista'))
        .addCity(new City('Botucatu'))
        .addCity(new City('Bragança'))
        .addCity(new City('Bragança Paulista'))
        .addCity(new City('Brasília'))
        .addCity(new City('Brusque'))
    );
    this.countries.add(
      new Country('Brunei').addCity(new City('Bandar Seri Begawan'))
    );
    this.countries.add(new Country('Bulgaria').addCity(new City('Burgas')));
    this.countries.add(
      new Country('Burkina Faso').addCity(new City('Bobo-Dioulasso'))
    );
    this.countries.add(new Country('Burundi').addCity(new City('Bujumbura')));
    this.countries.add(new Country('Cambodia').addCity(new City('Battambang')));
    this.countries.add(
      new Country('Cameroon')
        .addCity(new City('Bafoussam'))
        .addCity(new City('Bamenda'))
    );
    this.countries.add(
      new Country('Canada')
        .addCity(new City('Barrie'))
        .addCity(new City('Brampton'))
        .addCity(new City('Burlington, Ontario'))
        .addCity(new City('Burnaby'))
    );
    this.countries.add(
      new Country('Central African Republic').addCity(new City('Bangui'))
    );
    this.countries.add(
      new Country('China')
        .addCity(new City('Baicheng'))
        .addCity(new City('Baise'))
        .addCity(new City('Baishan'))
        .addCity(new City('Baiyin'))
        .addCity(new City('Baoding'))
        .addCity(new City('Baoji'))
        .addCity(new City('Baoshan'))
        .addCity(new City('Baotou'))
        .addCity(new City('Bayannur'))
        .addCity(new City('Bazhou'))
        .addCity(new City("Bei'an"))
        .addCity(new City('Beihai'))
        .addCity(new City('Beijing'))
        .addCity(new City('Beipiao'))
        .addCity(new City('Bengbu'))
        .addCity(new City('Benxi'))
        .addCity(new City('Binzhou'))
        .addCity(new City('Bole'))
        .addCity(new City('Botou'))
        .addCity(new City('Bozhou'))
    );
    this.countries.add(
      new Country('Colombia')
        .addCity(new City('Barrancabermeja'))
        .addCity(new City('Barranquilla'))
        .addCity(new City('Bello'))
        .addCity(new City('Bogota'))
        .addCity(new City('Bucaramanga'))
        .addCity(new City('Buenaventura'))
    );
    this.countries.add(new Country('Cuba').addCity(new City('Bayamo')));
    this.countries.add(new Country('Czech Republic').addCity(new City('Brno')));
    this.countries.add(
      new Country('Democratic Republic of the Congo')
        .addCity(new City('Boma'))
        .addCity(new City('Bukavu'))
    );
    this.countries.add(
      new Country('Dominican Republic')
        .addCity(new City('Bajos de Haina'))
        .addCity(new City('Baní'))
        .addCity(new City('Boca Chica'))
        .addCity(new City('Bonao'))
    );
    this.countries.add(
      new Country('Egypt')
        .addCity(new City('Banha'))
        .addCity(new City('Bani Suwayf'))
    );
    this.countries.add(
      new Country('Ethiopia')
        .addCity(new City('Bahir Dar'))
        .addCity(new City('Bishoftu'))
    );
    this.countries.add(
      new Country('France')
        .addCity(new City('Besançon'))
        .addCity(new City('Bordeaux'))
        .addCity(new City('Boulogne-Billancourt'))
        .addCity(new City('Brest, Brittany'))
    );
    this.countries.add(new Country('Gambia').addCity(new City('Banjul')));
    this.countries.add(new Country('Georgia').addCity(new City('Batumi')));
    this.countries.add(
      new Country('Germany')
        .addCity(new City('Bergisch Gladbach'))
        .addCity(new City('Berlin'))
        .addCity(new City('Bielefeld'))
        .addCity(new City('Bochum'))
        .addCity(new City('Bonn'))
        .addCity(new City('Bottrop'))
        .addCity(new City('Braunschweig'))
        .addCity(new City('Bremen'))
        .addCity(new City('Bremerhaven'))
    );
    this.countries.add(
      new Country('Guinea-Bissau').addCity(new City('Bissau'))
    );
    this.countries.add(new Country('Hungary').addCity(new City('Budapest')));
    this.countries.add(
      new Country('India')
        .addCity(new City('Badlapur'))
        .addCity(new City('Bagaha'))
        .addCity(new City('Bagalkot'))
        .addCity(new City('Bahadurgarh'))
        .addCity(new City('Baharampur'))
        .addCity(new City('Bahraich'))
        .addCity(new City('Baidyabati'))
        .addCity(new City('Baleshwar'))
        .addCity(new City('Ballia'))
        .addCity(new City('Bally, Bally-Jagachha'))
        .addCity(new City('Bally, Howrah'))
        .addCity(new City('Balurghat'))
        .addCity(new City('Banda'))
        .addCity(new City('Bangalore'))
        .addCity(new City('Bangaon'))
        .addCity(new City('Bankura'))
        .addCity(new City('Bansberia'))
        .addCity(new City('Banswara'))
        .addCity(new City('Baran'))
        .addCity(new City('Baranagar'))
        .addCity(new City('Barasat'))
        .addCity(new City('Baraut'))
        .addCity(new City('Bardhaman'))
        .addCity(new City('Bareilly'))
        .addCity(new City('Baripada'))
        .addCity(new City('Barnala'))
        .addCity(new City('Barrackpur'))
        .addCity(new City('Barshi'))
        .addCity(new City('Basirhat'))
        .addCity(new City('Basti'))
        .addCity(new City('Batala'))
        .addCity(new City('Bathinda'))
        .addCity(new City('Beawar'))
        .addCity(new City('Beed'))
        .addCity(new City('Begusarai'))
        .addCity(new City('Belgaum'))
        .addCity(new City('Bellary'))
        .addCity(new City('Berhampur'))
        .addCity(new City('Bettiah'))
        .addCity(new City('Betul'))
        .addCity(new City('Bhadrak'))
        .addCity(new City('Bhadravati'))
        .addCity(new City('Bhadreswar'))
        .addCity(new City('Bhagalpur'))
        .addCity(new City('Bhalswa Jahangir Pur'))
        .addCity(new City('Bharatpur, Rajasthan'))
        .addCity(new City('Bharuch'))
        .addCity(new City('Bhatpara'))
        .addCity(new City('Bhavnagar'))
        .addCity(new City('Bhilai'))
        .addCity(new City('Bhilwara'))
        .addCity(new City('Bhimavaram'))
        .addCity(new City('Bhind'))
        .addCity(new City('Bhiwadi'))
        .addCity(new City('Bhiwandi'))
        .addCity(new City('Bhiwani'))
        .addCity(new City('Bhopal'))
        .addCity(new City('Bhubaneswar'))
        .addCity(new City('Bhuj'))
        .addCity(new City('Bhusawal'))
        .addCity(new City('Bidar'))
        .addCity(new City('Bidhannagar'))
        .addCity(new City('Bihar Sharif'))
        .addCity(new City('Bijapur'))
        .addCity(new City('Bikaner'))
        .addCity(new City('Bilaspur'))
        .addCity(new City('Bokaro Steel City'))
        .addCity(new City('Botad'))
        .addCity(new City('Budaun'))
        .addCity(new City('Bulandshahr'))
        .addCity(new City('Bundi'))
        .addCity(new City('Burari'))
        .addCity(new City('Burhanpur'))
        .addCity(new City('Buxar'))
    );
    this.countries.add(
      new Country('Indonesia')
        .addCity(new City('Balikpapan'))
        .addCity(new City('Banda Aceh'))
        .addCity(new City('Bandar Lampung'))
        .addCity(new City('Bandung'))
        .addCity(new City('Banjarmasin'))
        .addCity(new City('Batam'))
        .addCity(new City('Batu'))
        .addCity(new City('Bekasi'))
        .addCity(new City('Bengkulu'))
        .addCity(new City('Binjai'))
        .addCity(new City('Bitung'))
        .addCity(new City('Blitar'))
        .addCity(new City('Bogor'))
    );
    this.countries.add(
      new Country('Iran')
        .addCity(new City('Babol'))
        .addCity(new City('Bandar Abbas'))
        .addCity(new City('Bandar-e Anzali'))
        .addCity(new City('Bandar-e Mahshahr'))
        .addCity(new City('Behbahan'))
        .addCity(new City('Birjand'))
        .addCity(new City('Bojnord'))
        .addCity(new City('Borujerd'))
        .addCity(new City('Bukan'))
        .addCity(new City('Bushehr'))
    );
    this.countries.add(
      new Country('Iraq')
        .addCity(new City('Baghdad'))
        .addCity(new City('Baqubah'))
        .addCity(new City('Bashiqa'))
        .addCity(new City('Basra'))
    );
    this.countries.add(
      new Country('Israel')
        .addCity(new City('Bat Yam'))
        .addCity(new City('Beersheba'))
        .addCity(new City('Beit Shemesh'))
        .addCity(new City('Bnei Brak'))
    );
    this.countries.add(
      new Country('Italy')
        .addCity(new City('Bari'))
        .addCity(new City('Bergamo'))
        .addCity(new City('Bologna'))
        .addCity(new City('Bolzano'))
        .addCity(new City('Brescia'))
    );
    this.countries.add(new Country('Ivory Coast').addCity(new City('Bouaké')));
    this.countries.add(new Country('Japan').addCity(new City('Beppu')));
    this.countries.add(new Country('Kyrgyzstan').addCity(new City('Bishkek')));
    this.countries.add(new Country('Lebanon').addCity(new City('Beirut')));
    this.countries.add(new Country('Libya').addCity(new City('Benghazi')));
    this.countries.add(new Country('Malawi').addCity(new City('Blantyre')));
    this.countries.add(
      new Country('Malaysia')
        .addCity(new City('Batu Pahat'))
        .addCity(new City('Bintulu'))
    );
    this.countries.add(new Country('Mali').addCity(new City('Bamako')));
    this.countries.add(
      new Country('Mauritius').addCity(new City('Beau-Bassin Rose-Hill'))
    );
    this.countries.add(
      new Country('Mexico').addCity(new City('Benito Juárez'))
    );
    this.countries.add(new Country('Moldova').addCity(new City('Bălți')));
    this.countries.add(
      new Country('Morocco')
        .addCity(new City('Beni Mellal'))
        .addCity(new City('Berkane'))
        .addCity(new City('Berrechid'))
    );
    this.countries.add(new Country('Mozambique').addCity(new City('Beira')));
    this.countries.add(new Country('Myanmar').addCity(new City('Bago')));
    this.countries.add(
      new Country('Nepal')
        .addCity(new City('Bharatpur, Chitwan'))
        .addCity(new City('Bhimdatta'))
        .addCity(new City('Biratnagar'))
        .addCity(new City('Birgunj'))
        .addCity(new City('Butwal'))
    );
    this.countries.add(new Country('Netherlands').addCity(new City('Breda')));
    this.countries.add(new Country('Norway').addCity(new City('Bergen')));
    this.countries.add(
      new Country('Oman')
        .addCity(new City('Barka'))
        .addCity(new City('Bawshar'))
    );
    this.countries.add(
      new Country('Pakistan')
        .addCity(new City('Bahawalnagar'))
        .addCity(new City('Bahawalpur'))
        .addCity(new City('Bhalwal'))
        .addCity(new City('Burewala'))
    );
    this.countries.add(
      new Country('Philippines')
        .addCity(new City('Bacolod'))
        .addCity(new City('Bacoor'))
        .addCity(new City('Bago'))
        .addCity(new City('Baguio'))
        .addCity(new City('Baliuag'))
        .addCity(new City('Batangas City'))
        .addCity(new City('Bayambang'))
        .addCity(new City('Bayawan'))
        .addCity(new City('Baybay'))
        .addCity(new City('Biñan'))
        .addCity(new City('Binangonan'))
        .addCity(new City('Bocaue'))
        .addCity(new City('Bongao'))
        .addCity(new City('Bulan'))
        .addCity(new City('Butuan'))
    );
    this.countries.add(
      new Country('Poland')
        .addCity(new City('Białystok'))
        .addCity(new City('Bielsko-Biała'))
        .addCity(new City('Bydgoszcz'))
        .addCity(new City('Bytom'))
    );
    this.countries.add(new Country('Portugal').addCity(new City('Braga')));
    this.countries.add(new Country('Puerto Rico').addCity(new City('Bayamón')));
    this.countries.add(
      new Country('Republic of the Congo').addCity(new City('Brazzaville'))
    );
    this.countries.add(
      new Country('Romania')
        .addCity(new City('Bacău'))
        .addCity(new City('Baia Mare'))
        .addCity(new City('Botoșani'))
        .addCity(new City('Brăila'))
        .addCity(new City('Brașov'))
        .addCity(new City('Bucharest'))
        .addCity(new City('Buzău'))
    );
    this.countries.add(
      new Country('Russia')
        .addCity(new City('Balakovo'))
        .addCity(new City('Balashikha'))
        .addCity(new City('Barnaul'))
        .addCity(new City('Bataysk'))
        .addCity(new City('Belgorod'))
        .addCity(new City('Berezniki'))
        .addCity(new City('Biysk'))
        .addCity(new City('Blagoveshchensk'))
        .addCity(new City('Bratsk'))
        .addCity(new City('Bryansk'))
    );
    this.countries.add(
      new Country('Saudi Arabia').addCity(new City('Buraidah'))
    );
    this.countries.add(new Country('Serbia').addCity(new City('Belgrade')));
    this.countries.add(new Country('Sierra Leone').addCity(new City('Bo')));
    this.countries.add(new Country('Slovakia').addCity(new City('Bratislava')));
    this.countries.add(
      new Country('Somalia')
        .addCity(new City('Baidoa'))
        .addCity(new City('Berbera'))
        .addCity(new City('Borama'))
        .addCity(new City('Bosaso'))
        .addCity(new City('Burao'))
    );
    this.countries.add(
      new Country('South Africa')
        .addCity(new City('Benoni'))
        .addCity(new City('Bloemfontein'))
        .addCity(new City('Boksburg'))
        .addCity(new City('Botshabelo'))
        .addCity(new City('Pretoria'))
        .addCity(new City('Johannesburg'))
    );
    this.countries.add(
      new Country('South Korea')
        .addCity(new City('Bucheon'))
        .addCity(new City('Busan'))
    );
    this.countries.add(
      new Country('Spain')
        .addCity(new City('Badajoz'))
        .addCity(new City('Badalona'))
        .addCity(new City('Barakaldo'))
        .addCity(new City('Barcelona'))
        .addCity(new City('Bilbao'))
        .addCity(new City('Burgos'))
    );
    this.countries.add(
      new Country('Switzerland')
        .addCity(new City('Basel'))
        .addCity(new City('Bern'))
    );
    this.countries.add(new Country('Thailand').addCity(new City('Bangkok')));
    this.countries.add(new Country('Tunisia').addCity(new City('Bizerte')));
    this.countries.add(
      new Country('Turkey')
        .addCity(new City('Balıkesir'))
        .addCity(new City('Bandırma'))
        .addCity(new City('Batman'))
        .addCity(new City('Bolu'))
        .addCity(new City('Bursa'))
    );
    this.countries.add(
      new Country('Ukraine')
        .addCity(new City('Berdyansk'))
        .addCity(new City('Bila Tserkva'))
    );
    this.countries.add(
      new Country('United Kingdom')
        .addCity(new City('Belfast'))
        .addCity(new City('Birmingham'))
        .addCity(new City('Blackburn'))
        .addCity(new City('Blackpool'))
        .addCity(new City('Bolton'))
        .addCity(new City('Bournemouth'))
        .addCity(new City('Bradford'))
        .addCity(new City('Brighton'))
        .addCity(new City('Bristol'))
    );
    this.countries.add(
      new Country('United States')
        .addCity(new City('Bakersfield'))
        .addCity(new City('Baltimore'))
        .addCity(new City('Baton Rouge'))
        .addCity(new City('Beaumont'))
        .addCity(new City('Bellevue'))
        .addCity(new City('Berkeley'))
        .addCity(new City('Billings'))
        .addCity(new City('Birmingham, Alabama'))
        .addCity(new City('Boise'))
        .addCity(new City('Boston'))
        .addCity(new City('Boulder'))
        .addCity(new City('Bridgeport'))
        .addCity(new City('Brownsville'))
        .addCity(new City('Buffalo'))
        .addCity(new City('Burbank'))
    );
    this.countries.add(new Country('Uzbekistan').addCity(new City('Bukhara')));
    this.countries.add(
      new Country('Venezuela')
        .addCity(new City('Barcelona, Anzoátegui'))
        .addCity(new City('Barinas'))
        .addCity(new City('Barquisimeto'))
        .addCity(new City('Baruta'))
    );
    this.countries.add(
      new Country('Vietnam').addCity(new City('Buôn Ma Thuột'))
    );
    this.countries.add(new Country('Zimbabwe').addCity(new City('Bulawayo')));
  }

  getCompanies() {
    return this.companies;
  }

  getDefault(key: string): any {
    let r = 0;
    if (key == 'countryKey') r = 70;
    return r;
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

  countries = new Countries(Country);

  getCountries() {
    return this.countries;
  }
  getMonths() {
    return this.months;
  }

  getEntityTypes() {
    return this.entityTypes;
  }

  getEntityTypesPlural() {
    return this.entityTypesPlural;
  }

  //Business Area
  businessAreas = new Entities<Entity>(Entity)
    .add(new Entity('Finance'))
    .add(new Entity('Property'))
    .add(new Entity('Retail'));
  getBusinessAreas() {
    return this.businessAreas;
  }
  businessDivisions = new Entities<Entity>(Entity)
    .add(new Entity('Div 1'))
    .add(new Entity('Div 2'))
    .add(new Entity('Div 3'));
  getBusinessDivisions() {
    return this.businessDivisions;
  }
  legalClasses = new Entities<Entity>(Entity)
    .add(new Entity('Legal'))
    .add(new Entity('Illegal'));
  getLegalClasses() {
    return this.legalClasses;
  }
  entityStatuses = new Entities<Entity>(Entity)
    .add(new Entity('Active'))
    .add(new Entity('Dormant'))
    .add(new Entity('Closed'));
  getEntityStatuses() {
    return this.entityStatuses;
  }
  entityStatusTiers = new Entities<Entity>(Entity)
    .add(new Entity('Tier 1'))
    .add(new Entity('Tier 2'))
    .add(new Entity('Tier 3'));
  getEntityStatusTiers() {
    return this.entityStatusTiers;
  }
  accountingClasses = new Entities<Entity>(Entity)
    .add(new Entity('Accounted'))
    .add(new Entity('Not Accounted'));
  getAccountingClasses() {
    return this.accountingClasses;
  }
  accountingTiers = new Entities<Entity>(Entity)
    .add(new Entity('Top'))
    .add(new Entity('Middle'))
    .add(new Entity('Low'));
  getAccountingTier() {
    return this.accountingTiers;
  }

  regulators = new Entities<LegalEntity>(Entity)
    .add(
      new LegalEntity('Financial Services Conduct Authority').set(
        'suffix',
        'FSCA'
      )
    )
    .add(new LegalEntity('South Africian Reserve Bank').set('suffix', 'SARB'));
  getRegulators() {
    return this.regulators;
  }

  regulations = new Entities<LegalEntity>(Entity)
    .add(new LegalEntity('Companies Act 71 of 2008'))
    .add(
      new LegalEntity('Protection of Personal Information Act 4 of 2013').set(
        'suffix',
        'POPI'
      )
    )
    .add(
      new LegalEntity('Financial Intelligence Centre Act 38 of 2001').set(
        'suffix',
        'FICA'
      )
    );
  getRegulations() {
    return this.regulations;
  }

  trusts = new Entities<LegalEntity>(Entity)
    .add(new LegalEntity('Northern Trust').set('suffix', 'NTH'))
    .add(new LegalEntity('BEE Trust').set('suffix', 'BEET'));

  getTrusts(): Entities<LegalEntity> {
    return this.trusts;
  }

  yesNo = new Entities<Entity>(Entity)
    .add(new Entity('Yes'))
    .add(new Entity('No'));
  getYesNo() {
    return this.yesNo;
  }
  
  getPeriods() {
    return this.periods;
  }
  taskStatus = new Entities<Entity>(Entity)
    .add(new Entity('To Do'))
    .add(new Entity('Doing'))
    .add(new Entity('Done'));
  getTaskStatus() {
    return this.taskStatus;
  }
  taskTypes = new Entities<Entity>(Entity)
    .add(new Entity('Appointment'))
    .add(new Entity('Resignation'))
    .add(new Entity('Rename'))
    .add(new Entity('General'));
  getTaskTypes() {
    return this.taskTypes;
  }

  contactPreferences = new Entities<Entity>(Entity)
    .add(new Entity('Email'))
    .add(new Entity('Call landline'))
    .add(new Entity('Call cellphone'))
    .add(new Entity('SMS or Text'));
  getContactPreferences() {
    return this.contactPreferences;
  }

  auditors = new Entities<LegalEntity>(Entity)
    .add(new LegalEntity('Deloitte'))
    .add(new LegalEntity('KPMG'))
    .add(new LegalEntity('PWC'));

  companySecretaries = new Entities<LegalEntity>(Entity)
    .add(new LegalEntity('Internal'))
    .add(new LegalEntity('PWC'));

  entityGroups = new Entities<FunctionalEntity>(Entity)
    .add(new FunctionalEntity('- Default -').set('tasksCount', 7))
    .add(new FunctionalEntity('Africa').set('tasksCount', 3))
    .add(new FunctionalEntity('Europe').set('tasksCount', 18))
    .add(new FunctionalEntity('Asia').set('tasksCount', 2));

  getEntityGroups(): Entities<Entity> {
    return this.entityGroups; //this.entityGroups;
  }

  industries = new Entities<Entity>(Entity)
    .add(new Entity('Banking'))
    .add(new Entity('Asset Management'))
    .add(new Entity('Property'));

  getIndustries() {
    return this.industries;
  }

  getCompanySercetaries() {
    return this.companySecretaries;
  }
  customTypes = new Entities<Entity>(Entity)
    .add(new Entity('text'))
    .add(new Entity('date'))
    .add(new Entity('checkbox'))
    .add(new Entity('textarea'))
    .add(new Entity('person'))
    .add(new Entity('address'))
    .add(new Entity('file'))
    .add(new Entity('number'))
    .add(new Entity('contact'));

  // .add(new NaturalEntity('Froning', 'Richard', 'Mayham'))
  // .add(new NaturalEntity('Singundsdottir', 'Sara', 'Iceland'))
  // .add(new NaturalEntity('Fraser', 'Mat', 'ABSA'));

  getPersons() {
    return this.persons;
  }
  users = new Entities<User>(User)
    .add(new User('Anuchin', 'Vlad', 'ICDI').set('tasksCount', 3))
    .add(new User('Voznesensky', 'Alex', 'ICDI').set('tasksCount', 1))
    .add(new User('Kurchner', 'Ulrich', 'ICDI').set('tasksCount', 2))
    .add(new User('Kopelowitz', 'Dean', 'ICDI').set('tasksCount', 5))
    .add(
      new User('Small', 'James', '').set('tasksCount', 7).set('isActive', false)
    )
    .add(new User('Rajagopaul', 'Samantha', 'Sam').set('tasksCount', 15))
    .add(new User('Stander', 'Lourika', 'ABSA').set('tasksCount', 7))
    .sort();

  getUsers() {
    return this.users;
  }

  positions = new Entities<Entity>(Entity)
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
