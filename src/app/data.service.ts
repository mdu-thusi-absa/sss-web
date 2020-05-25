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
  LegalEntities,
  FunctionalEntities,
} from './models';
import { EntityDetailsFilesComponent } from './panels/entity-details-files/entity-details-files.component';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    this.makeCountries();
    this.makeCompanyArray();
    this.makeFunctionalEntities(true);
    //this.makeCompanyArray();
    //console.log(this.companiesArray);
  }

  makeCompanyArray(){
    //let a = JSON.parse("{'name':'a'}")
    // let b: LegalEntity = JSON.parse('{ "name":"John", "tasksCount":30, "isActive":true}');
    // let c = new LegalEntities() ;
    // = JSON.parse(
    //   `[
    //     [0,{ "name":"John", "tasksCount":30, "isActive":true}],
    //     [1,{ "name":"B", "tasksCount":2, "isActive":false}]
    //   ]`);
      // c = [
      //   [0,new LegalEntity('a')]
      // ];
     // c.add(new LegalEntity('c'));
    let a = JSON.parse(`[
      {"name":"Aaron's, Inc.","suffix":"AAN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Applied Optoelectronics, Inc.","suffix":"AAOI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"AAON, Inc.","suffix":"AAON","tasksCount":3,"isActive":false,"type":"company"},
{"name":"American Assets Trust, Inc.","suffix":"AAT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Atlas Air Worldwide Holdings, Inc.","suffix":"AAWW","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Axon Enterprise, Inc.","suffix":"AAXN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Ameris Bancorp","suffix":"ABCB","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Abeona Therapeutics, Inc.","suffix":"ABEO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Asbury Automotive Group, Inc.","suffix":"ABG","tasksCount":5,"isActive":false,"type":"company"},
{"name":"ABM Industries, Inc.","suffix":"ABM","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Allegiance Bancshares, Inc. (Texas)","suffix":"ABTX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Associated Capital Group, Inc.","suffix":"AC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Arcosa, Inc.","suffix":"ACA","tasksCount":3,"isActive":true,"type":"company"},
{"name":"ACADIA Pharmaceuticals, Inc.","suffix":"ACAD","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Atlantic Capital Bancshares, Inc.","suffix":"ACBI","tasksCount":5,"isActive":false,"type":"company"},
{"name":"ACCO Brands Corp.","suffix":"ACCO","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Acer Therapeutics, Inc.","suffix":"ACER","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Achillion Pharmaceuticals, Inc.","suffix":"ACHN","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Acacia Communications, Inc.","suffix":"ACIA","tasksCount":0,"isActive":false,"type":"company"},
{"name":"ACI Worldwide, Inc.","suffix":"ACIW","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Axcelis Technologies, Inc.","suffix":"ACLS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"ACNB Corp.","suffix":"ACNB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Acorda Therapeutics, Inc.","suffix":"ACOR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Ares Commercial Real Estate Corp.","suffix":"ACRE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Aclaris Therapeutics, Inc.","suffix":"ACRS","tasksCount":5,"isActive":false,"type":"company"},
{"name":"AcelRx Pharmaceuticals, Inc.","suffix":"ACRX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Acacia Research Corp.","suffix":"ACTG","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Agree Realty Corp.","suffix":"ADC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Advanced Emissions Solutions, Inc.","suffix":"ADES","tasksCount":3,"isActive":true,"type":"company"},
{"name":"ADMA Biologics, Inc.","suffix":"ADMA","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Adamas Pharmaceuticals, Inc.","suffix":"ADMS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Adient plc","suffix":"ADNT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Aduro BioTech, Inc.","suffix":"ADRO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Advanced Disposal Services, Inc.","suffix":"ADSW","tasksCount":4,"isActive":false,"type":"company"},
{"name":"ADTRAN, Inc.","suffix":"ADTN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Addus HomeCare Corp.","suffix":"ADUS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Adverum Biotechnologies, Inc.","suffix":"ADVM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Aegion Corp.","suffix":"AEGN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Advanced Energy Industries, Inc.","suffix":"AEIS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"American Equity Investment Life Holding Co.","suffix":"AEL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"American Eagle Outfitters, Inc.","suffix":"AEO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Aerie Pharmaceuticals, Inc.","suffix":"AERI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Armstrong Flooring, Inc.","suffix":"AFI","tasksCount":5,"isActive":true,"type":"company"},
{"name":"American Finance Trust, Inc.","suffix":"AFIN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Affimed NV","suffix":"AFMD","tasksCount":4,"isActive":false,"type":"company"},
{"name":"AgeX Therapeutics, Inc.","suffix":"AGE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Agenus, Inc.","suffix":"AGEN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Aeglea Biotherapeutics, Inc.","suffix":"AGLE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Federal Agricultural Mortgage Corp.","suffix":"AGM","tasksCount":2,"isActive":false,"type":"company"},
{"name":"PlayAGS, Inc.","suffix":"AGS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Argan, Inc.","suffix":"AGX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Agilysys, Inc.","suffix":"AGYS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Armada Hoffler Properties, Inc.","suffix":"AHH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Ashford Hospitality Trust, Inc.","suffix":"AHT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Arlington Asset Investment Corp.","suffix":"AI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Altra Industrial Motion Corp.","suffix":"AIMC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Aimmune Therapeutics, Inc.","suffix":"AIMT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Albany International Corp.","suffix":"AIN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"AAR Corp.","suffix":"AIR","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Airgain, Inc.","suffix":"AIRG","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Applied Industrial Technologies, Inc.","suffix":"AIT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Aerojet Rocketdyne Holdings, Inc.","suffix":"AJRD","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Great Ajax Corp.","suffix":"AJX","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Akebia Therapeutics, Inc.","suffix":"AKBA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Akcea Therapeutics, Inc.","suffix":"AKCA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Acadia Realty Trust","suffix":"AKR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Akero Therapeutics, Inc.","suffix":"AKRO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Akorn, Inc.","suffix":"AKRX","tasksCount":4,"isActive":true,"type":"company"},
{"name":"AK Steel Holding Corp.","suffix":"AKS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Akoustis Technologies, Inc.","suffix":"AKTS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Albireo Pharma, Inc.","suffix":"ALBO","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Alico, Inc.","suffix":"ALCO","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Alder Biopharmaceuticals, Inc.","suffix":"ALDR","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Aldeyra Therapeutics, Inc.","suffix":"ALDX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"ALLETE, Inc.","suffix":"ALE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Alector, Inc.","suffix":"ALEC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Alexander & Baldwin, Inc.","suffix":"ALEX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Alamo Group, Inc.","suffix":"ALG","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Allegiant Travel Co.","suffix":"ALGT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Allakos, Inc.","suffix":"ALLK","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Allogene Therapeutics, Inc.","suffix":"ALLO","tasksCount":0,"isActive":false,"type":"company"},
{"name":"AstroNova, Inc.","suffix":"ALOT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Alarm.com Holdings, Inc.","suffix":"ALRM","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Altus Midstream Co.","suffix":"ALTM","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Altair Engineering, Inc.","suffix":"ALTR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Alexander's, Inc.","suffix":"ALX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"AMAG Pharmaceuticals, Inc.","suffix":"AMAG","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Amalgamated Bank","suffix":"AMAL","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Ambarella, Inc.","suffix":"AMBA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Ambac Financial Group, Inc.","suffix":"AMBC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"AMC Entertainment Holdings, Inc.","suffix":"AMC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Amedisys, Inc.","suffix":"AMED","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Apollo Medical Holdings, Inc.","suffix":"AMEH","tasksCount":5,"isActive":true,"type":"company"},
{"name":"AssetMark Financial Holdings, Inc.","suffix":"AMK","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Amkor Technology, Inc.","suffix":"AMKR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"AMN Healthcare Services, Inc.","suffix":"AMN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"American National Bankshares, Inc. (Virginia)","suffix":"AMNB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Allied Motion Technologies, Inc.","suffix":"AMOT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Amphastar Pharmaceuticals, Inc.","suffix":"AMPH","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Ameresco, Inc.","suffix":"AMRC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Amyris, Inc.","suffix":"AMRS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Amneal Pharmaceuticals, Inc.","suffix":"AMRX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"American Superconductor Corp.","suffix":"AMSC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"AMERISAFE, Inc.","suffix":"AMSF","tasksCount":5,"isActive":true,"type":"company"},
{"name":"American Software, Inc.","suffix":"AMSWA","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Amerant Bancorp, Inc.","suffix":"AMTB","tasksCount":0,"isActive":true,"type":"company"},
{"name":"American Woodmark Corp.","suffix":"AMWD","tasksCount":3,"isActive":false,"type":"company"},
{"name":"AnaptysBio, Inc.","suffix":"ANAB","tasksCount":0,"isActive":false,"type":"company"},
{"name":"The Andersons, Inc.","suffix":"ANDE","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Abercrombie & Fitch Co.","suffix":"ANF","tasksCount":3,"isActive":false,"type":"company"},
{"name":"AngioDynamics, Inc.","suffix":"ANGO","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Anworth Mortgage Asset Corp.","suffix":"ANH","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Anika Therapeutics, Inc.","suffix":"ANIK","tasksCount":3,"isActive":false,"type":"company"},
{"name":"ANI Pharmaceuticals, Inc.","suffix":"ANIP","tasksCount":1,"isActive":true,"type":"company"},
{"name":"American Outdoor Brands Corp.","suffix":"AOBC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Alpha & Omega Semiconductor Ltd.","suffix":"AOSL","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Artisan Partners Asset Management, Inc.","suffix":"APAM","tasksCount":2,"isActive":true,"type":"company"},
{"name":"American Public Education, Inc.","suffix":"APEI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Apellis Pharmaceuticals, Inc.","suffix":"APLS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Apogee Enterprises, Inc.","suffix":"APOG","tasksCount":0,"isActive":false,"type":"company"},
{"name":"AppFolio, Inc.","suffix":"APPF","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Appian Corp.","suffix":"APPN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Digital Turbine, Inc.","suffix":"APPS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Preferred Apartment Communities, Inc.","suffix":"APTS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Apyx Medical Corp.","suffix":"APYX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Evoqua Water Technologies Corp.","suffix":"AQUA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"American Renal Associates Holdings, Inc.","suffix":"ARA","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Accuray, Inc.","suffix":"ARAY","tasksCount":1,"isActive":true,"type":"company"},
{"name":"ArcBest Corp.","suffix":"ARCB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Arch Coal, Inc.","suffix":"ARCH","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Ardelyx, Inc.","suffix":"ARDX","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Ares Management Corp.","suffix":"ARES","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Argo Group International Holdings Ltd.","suffix":"ARGO","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Apollo Commercial Real Estate Finance, Inc.","suffix":"ARI","tasksCount":5,"isActive":false,"type":"company"},
{"name":"American Realty Investors, Inc.","suffix":"ARL","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Arlo Technologies, Inc.","suffix":"ARLO","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Arena Pharmaceuticals, Inc.","suffix":"ARNA","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Archrock, Inc.","suffix":"AROC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Arrow Financial Corp.","suffix":"AROW","tasksCount":4,"isActive":false,"type":"company"},
{"name":"ArQule, Inc.","suffix":"ARQL","tasksCount":3,"isActive":true,"type":"company"},
{"name":"ARMOUR Residential REIT, Inc.","suffix":"ARR","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Artesian Resources Corp.","suffix":"ARTNA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Arvinas, Inc.","suffix":"ARVN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Arrowhead Pharmaceuticals, Inc.","suffix":"ARWR","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Ardmore Shipping Corp.","suffix":"ASC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"ASGN, Inc.","suffix":"ASGN","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Advansix, Inc.","suffix":"ASIX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Assembly Biosciences, Inc.","suffix":"ASMB","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Ascena Retail Group, Inc.","suffix":"ASNA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Altisource Portfolio Solutions SA","suffix":"ASPS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Assertio Therapeutics, Inc.","suffix":"ASRT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Astec Industries, Inc.","suffix":"ASTE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Atlantic Power Corp.","suffix":"AT","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Alphatec Holdings, Inc.","suffix":"ATEC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"A10 Networks, Inc.","suffix":"ATEN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Anterix, Inc.","suffix":"ATEX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Adtalem Global Education, Inc.","suffix":"ATGE","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Athersys, Inc.","suffix":"ATHX","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Allegheny Technologies, Inc.","suffix":"ATI","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Atkore International Group, Inc.","suffix":"ATKR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Ames National Corp.","suffix":"ATLO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"ATN International, Inc.","suffix":"ATNI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Athenex, Inc.","suffix":"ATNX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Atara Biotherapeutics, Inc.","suffix":"ATRA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"AtriCure, Inc.","suffix":"ATRC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Atrion Corp.","suffix":"ATRI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Astronics Corp.","suffix":"ATRO","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Antares Pharma, Inc.","suffix":"ATRS","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Air Transport Services Group, Inc.","suffix":"ATSG","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Atlantic Union Bankshares Corp.","suffix":"AUB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Avista Corp.","suffix":"AVA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"AeroVironment, Inc.","suffix":"AVAV","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Avalon GloboCare Corp.","suffix":"AVCO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"American Vanguard Corp.","suffix":"AVD","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Avedra","suffix":"AVDR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Avid Technology, Inc.","suffix":"AVID","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Avanos Medical, Inc.","suffix":"AVNS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Avrobio, Inc.","suffix":"AVRO","tasksCount":3,"isActive":true,"type":"company"},
{"name":"AVX Corp.","suffix":"AVX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Anavex Life Sciences Corp.","suffix":"AVXL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Avaya Holdings Corp.","suffix":"AVYA","tasksCount":5,"isActive":true,"type":"company"},
{"name":"American States Water Co.","suffix":"AWR","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Axos Financial, Inc.","suffix":"AX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Abraxas Petroleum Corp.","suffix":"AXAS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Accelerate Diagnostics, Inc.","suffix":"AXDX","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Anixter International, Inc.","suffix":"AXE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"AxoGen, Inc.","suffix":"AXGN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"American Axle & Manufacturing Holdings, Inc.","suffix":"AXL","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Axcella Health, Inc.","suffix":"AXLA","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Axonics Modulation Technologies, Inc.","suffix":"AXNX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Axsome Therapeutics, Inc.","suffix":"AXSM","tasksCount":2,"isActive":false,"type":"company"},
{"name":"AXT, Inc.","suffix":"AXTI","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Aircastle Ltd.","suffix":"AYR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"AZZ, Inc.","suffix":"AZZ","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Barnes Group, Inc.","suffix":"B","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Banc of California, Inc.","suffix":"BANC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Bandwidth, Inc.","suffix":"BAND","tasksCount":4,"isActive":true,"type":"company"},
{"name":"BancFirst Corp. (Oklahoma)","suffix":"BANF","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Banner Corp.","suffix":"BANR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Liberty Media Corp. Liberty Braves","suffix":"BATRA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Liberty Media Corp. Liberty Braves","suffix":"BATRK","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Bed Bath & Beyond, Inc.","suffix":"BBBY","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Concrete Pumping Holdings, Inc.","suffix":"BBCP","tasksCount":3,"isActive":false,"type":"company"},
{"name":"BridgeBio Pharma, Inc.","suffix":"BBIO","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Barrett Business Services, Inc.","suffix":"BBSI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"BBX Capital Corp.","suffix":"BBX","tasksCount":1,"isActive":false,"type":"company"},
{"name":"BCB Bancorp, Inc.","suffix":"BCBP","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Boise Cascade Co.","suffix":"BCC","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Bonanza Creek Energy, Inc.","suffix":"BCEI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Atreca, Inc.","suffix":"BCEL","tasksCount":3,"isActive":true,"type":"company"},
{"name":"BayCom Corp.","suffix":"BCML","tasksCount":4,"isActive":true,"type":"company"},
{"name":"The Brink's Co.","suffix":"BCO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Blucora, Inc.","suffix":"BCOR","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Brightcove, Inc.","suffix":"BCOV","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Balchem Corp.","suffix":"BCPC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"BioCryst Pharmaceuticals, Inc.","suffix":"BCRX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Belden, Inc.","suffix":"BDC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Bridge Bancorp, Inc.","suffix":"BDGE","tasksCount":3,"isActive":false,"type":"company"},
{"name":"BioDelivery Sciences International, Inc.","suffix":"BDSI","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Bloom Energy Corp.","suffix":"BE","tasksCount":3,"isActive":false,"type":"company"},
{"name":"BioTelemetry, Inc.","suffix":"BEAT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Beacon Roofing Supply, Inc.","suffix":"BECN","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Bel Fuse, Inc.","suffix":"BELFB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Bank First Corp.","suffix":"BFC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"BankFinancial Corp.","suffix":"BFIN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Saul Centers, Inc.","suffix":"BFS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Business First Bancshares, Inc.","suffix":"BFST","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Briggs & Stratton Corp.","suffix":"BGG","tasksCount":2,"isActive":true,"type":"company"},
{"name":"B&G Foods, Inc.","suffix":"BGS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"BG Staffing, Inc.","suffix":"BGSF","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Biglari Holdings, Inc.","suffix":"BH","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Bar Harbor Bankshares","suffix":"BHB","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Benchmark Electronics, Inc.","suffix":"BHE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Berkshire Hills Bancorp, Inc.","suffix":"BHLB","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Braemar Hotels & Resorts, Inc.","suffix":"BHR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Biohaven Pharmaceutical Holding Co. Ltd.","suffix":"BHVN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Big Lots, Inc.","suffix":"BIG","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Option Care Health, Inc.","suffix":"BIOS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"BJ's Wholesale Club Holdings, Inc.","suffix":"BJ","tasksCount":2,"isActive":false,"type":"company"},
{"name":"BJ's Restaurants, Inc.","suffix":"BJRI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Brookdale Senior Living, Inc.","suffix":"BKD","tasksCount":5,"isActive":true,"type":"company"},
{"name":"The Buckle, Inc.","suffix":"BKE","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Black Hills Corp.","suffix":"BKH","tasksCount":1,"isActive":false,"type":"company"},
{"name":"BlackLine, Inc.","suffix":"BL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Blue Bird Corp.","suffix":"BLBD","tasksCount":3,"isActive":true,"type":"company"},
{"name":"TopBuild Corp.","suffix":"BLD","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Builders FirstSource, Inc.","suffix":"BLDR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"BioLife Solutions, Inc.","suffix":"BLFS","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Blackbaud, Inc.","suffix":"BLKB","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Bloomin' Brands, Inc.","suffix":"BLMN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Banco Latinoamericano de Comercio Exterior SA","suffix":"BLX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"BMC Stock Holdings, Inc.","suffix":"BMCH","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Badger Meter, Inc.","suffix":"BMI","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Bank of Marin Bancorp","suffix":"BMRC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Bryn Mawr Bank Corp.","suffix":"BMTC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Barnes & Noble Education, Inc.","suffix":"BNED","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Benefitfocus, Inc.","suffix":"BNFT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Bank of Commerce Holdings","suffix":"BOCH","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Audentes Therapeutics, Inc.","suffix":"BOLD","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Boston Omaha Corp.","suffix":"BOMN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"DMC Global, Inc.","suffix":"BOOM","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Boot Barn Holdings, Inc.","suffix":"BOOT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Box, Inc.","suffix":"BOX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Boston Private Financial Holdings, Inc.","suffix":"BPFH","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Blueprint Medicines Corp.","suffix":"BPMC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"The Bank of Princeton","suffix":"BPRN","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Brady Corp.","suffix":"BRC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Craft Brew Alliance, Inc.","suffix":"BREW","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Bluerock Residential Growth REIT, Inc.","suffix":"BRG","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Bridgford Foods Corp.","suffix":"BRID","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Brookline Bancorp, Inc.","suffix":"BRKL","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Brooks Automation, Inc.","suffix":"BRKS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"BRT Apartments Corp.","suffix":"BRT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Berry Petroleum Corp.","suffix":"BRY","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Bassett Furniture Industries, Inc.","suffix":"BSET","tasksCount":2,"isActive":false,"type":"company"},
{"name":"BioSig Technologies, Inc.","suffix":"BSGM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"BrightSphere Investment Group, Inc.","suffix":"BSIG","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Sierra Bancorp","suffix":"BSRR","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Biospecifics Technologies Corp.","suffix":"BSTC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Bank7 Corp.","suffix":"BSVN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"BioXcel Therapeutics, Inc.","suffix":"BTAI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Peabody Energy Corp.","suffix":"BTU","tasksCount":1,"isActive":false,"type":"company"},
{"name":"First Busey Corp.","suffix":"BUSE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"BrightView Holdings, Inc.","suffix":"BV","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Bridgewater Bancshares, Inc.","suffix":"BWB","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Bankwell Financial Group, Inc.","suffix":"BWFG","tasksCount":3,"isActive":false,"type":"company"},
{"name":"BlueLinx Holdings, Inc.","suffix":"BXC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Bluegreen Vacations Corp.","suffix":"BXG","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Blackstone Mortgage Trust, Inc.","suffix":"BXMT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"BancorpSouth Bank","suffix":"BXS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Byline Bancorp, Inc.","suffix":"BY","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Boyd Gaming Corp.","suffix":"BYD","tasksCount":4,"isActive":false,"type":"company"},
{"name":"BeyondSpring, Inc.","suffix":"BYSI","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Beazer Homes USA, Inc.","suffix":"BZH","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Camden National Corp. (Maine)","suffix":"CAC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Cadence Bancorporation","suffix":"CADE","tasksCount":0,"isActive":true,"type":"company"},
{"name":"CAI International, Inc.","suffix":"CAI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Cheesecake Factory, Inc.","suffix":"CAKE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Caleres, Inc.","suffix":"CAL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Calithera Biosciences, Inc.","suffix":"CALA","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Cal-Maine Foods, Inc.","suffix":"CALM","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Calix, Inc.","suffix":"CALX","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CalAmp Corp.","suffix":"CAMP","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Avis Budget Group, Inc.","suffix":"CAR","tasksCount":0,"isActive":false,"type":"company"},
{"name":"CARA Therapeutics, Inc.","suffix":"CARA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Carbonite, Inc.","suffix":"CARB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Carter Bank & Trust","suffix":"CARE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Cargurus, Inc.","suffix":"CARG","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Carolina Financial Corp.","suffix":"CARO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Cars.com, Inc.","suffix":"CARS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Casa Systems, Inc.","suffix":"CASA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Meta Financial Group, Inc.","suffix":"CASH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CASI Pharmaceuticals, Inc.","suffix":"CASI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Cass Information Systems, Inc.","suffix":"CASS","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Cambridge Bancorp","suffix":"CATC","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Cardtronics plc","suffix":"CATM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"The Cato Corp.","suffix":"CATO","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Catasys, Inc.","suffix":"CATS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Cathay General Bancorp","suffix":"CATY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Colony Bankcorp, Inc.","suffix":"CBAN","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CymaBay Therapeutics, Inc.","suffix":"CBAY","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Cincinnati Bell, Inc.","suffix":"CBB","tasksCount":5,"isActive":true,"type":"company"},
{"name":"CBL & Associates Properties, Inc.","suffix":"CBL","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Carbon Black, Inc. (Massachusetts)","suffix":"CBLK","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Cambrex Corporation","suffix":"CBM","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Cellular Biomedicine Group, Inc.","suffix":"CBMG","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Capital Bancorp, Inc. (Maryland)","suffix":"CBNK","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Continental Building Products, Inc.","suffix":"CBPX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Cracker Barrel Old Country Store, Inc.","suffix":"CBRL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"CBTX, Inc. (Texas)","suffix":"CBTX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Community Bank System, Inc.","suffix":"CBU","tasksCount":1,"isActive":false,"type":"company"},
{"name":"CBIZ, Inc.","suffix":"CBZ","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Coastal Financial Corp. (Washington)","suffix":"CCB","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Capital City Bank Group, Inc.","suffix":"CCBG","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Chase Corp.","suffix":"CCF","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Cabot Microelectronics Corp.","suffix":"CCMP","tasksCount":2,"isActive":true,"type":"company"},
{"name":"CNB Financial Corp. (Pennsylvania)","suffix":"CCNE","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Clear Channel Outdoor Holdings, Inc.","suffix":"CCO","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Cogent Communications Holdings, Inc.","suffix":"CCOI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Cross Country Healthcare, Inc.","suffix":"CCRN","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Century Communities, Inc.","suffix":"CCS","tasksCount":1,"isActive":true,"type":"company"},
{"name":"ChemoCentryx, Inc.","suffix":"CCXI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Coeur Mining, Inc.","suffix":"CDE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Cardlytics, Inc.","suffix":"CDLX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Avid Bioservices, Inc.","suffix":"CDMO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"CareDx, Inc.","suffix":"CDNA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Cedar Realty Trust, Inc.","suffix":"CDR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Chromadex Corp.","suffix":"CDXC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Codexis, Inc.","suffix":"CDXS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Cadiz, Inc.","suffix":"CDZI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"CECO Environmental Corp.","suffix":"CECE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Career Education Corp.","suffix":"CECO","tasksCount":1,"isActive":false,"type":"company"},
{"name":"CONSOL Energy, Inc.","suffix":"CEIX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Celcuity, Inc.","suffix":"CELC","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Celsius Holdings, Inc.","suffix":"CELH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Central Garden & Pet Co.","suffix":"CENT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Central Garden & Pet Co.","suffix":"CENTA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Century Aluminum Co.","suffix":"CENX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Cerecor, Inc.","suffix":"CERC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Cerus Corp.","suffix":"CERS","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Central European Media Enterprises Ltd.","suffix":"CETV","tasksCount":2,"isActive":true,"type":"company"},
{"name":"CEVA, Inc.","suffix":"CEVA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"CrossFirst Bankshares, Inc.","suffix":"CFB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"C&F Financial Corp.","suffix":"CFFI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Capitol Federal Financial, Inc.","suffix":"CFFN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"ConforMIS, Inc.","suffix":"CFMS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Chaparral Energy, Inc.","suffix":"CHAP","tasksCount":2,"isActive":false,"type":"company"},
{"name":"City Holding Co.","suffix":"CHCO","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Community Healthcare Trust, Inc.","suffix":"CHCT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Churchill Downs, Inc.","suffix":"CHDN","tasksCount":2,"isActive":false,"type":"company"},
{"name":"The Chefs' Warehouse, Inc.","suffix":"CHEF","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Chegg, Inc.","suffix":"CHGG","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Chiasma, Inc.","suffix":"CHMA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Chemung Financial Corp.","suffix":"CHMG","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Cherry Hill Mortgage Investment Corp.","suffix":"CHMI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Charah Solutions, Inc.","suffix":"CHRA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Coherus BioSciences, Inc.","suffix":"CHRS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Chico's FAS, Inc.","suffix":"CHS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Chuy's Holdings, Inc.","suffix":"CHUY","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Citizens, Inc. (Austin, Texas)","suffix":"CIA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"City Office REIT, Inc.","suffix":"CIO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"CIRCOR International, Inc.","suffix":"CIR","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Cision Ltd.","suffix":"CISN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Civista Bancshares, Inc.","suffix":"CIVB","tasksCount":5,"isActive":false,"type":"company"},
{"name":"CompX International, Inc.","suffix":"CIX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"C&J Energy Services, Inc.","suffix":"CJ","tasksCount":5,"isActive":true,"type":"company"},
{"name":"SEACOR Holdings, Inc.","suffix":"CKH","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Checkpoint Therapeutics, Inc.","suffix":"CKPT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Clarus Corp.","suffix":"CLAR","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Columbia Financial, Inc.","suffix":"CLBK","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Collectors Universe, Inc.","suffix":"CLCT","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Cloudera, Inc.","suffix":"CLDR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Chatham Lodging Trust","suffix":"CLDT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Cleveland-Cliffs, Inc.","suffix":"CLF","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Clearfield, Inc.","suffix":"CLFD","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Mack-Cali Realty Corp.","suffix":"CLI","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Colony Credit Real Estate, Inc.","suffix":"CLNC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Clean Energy Fuels Corp.","suffix":"CLNE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Clipper Realty, Inc.","suffix":"CLPR","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Clovis Oncology, Inc.","suffix":"CLVS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Clearwater Paper Corp.","suffix":"CLW","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Calyxt, Inc.","suffix":"CLXT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Cambium Networks Corp.","suffix":"CMBM","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Commercial Metals Co.","suffix":"CMC","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Columbus McKinnon Corp.","suffix":"CMCO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CIM Commercial Trust Corp.","suffix":"CMCT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Cumulus Media, Inc.","suffix":"CMLS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Capstead Mortgage Corp.","suffix":"CMO","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Compass Minerals International, Inc.","suffix":"CMP","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Cimpress Plc","suffix":"CMPR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Costamare Inc.","suffix":"CMRE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Chimerix, Inc.","suffix":"CMRX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Comtech Telecommunications Corp.","suffix":"CMTL","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Century Bancorp, Inc. (Massachusetts)","suffix":"CNBKA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Concert Pharmaceuticals, Inc.","suffix":"CNCE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Conduent, Inc.","suffix":"CNDT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"CONMED Corp.","suffix":"CNMD","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Cannae Holdings, Inc.","suffix":"CNNE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"CNO Financial Group, Inc.","suffix":"CNO","tasksCount":4,"isActive":true,"type":"company"},
{"name":"ConnectOne Bancorp, Inc.","suffix":"CNOB","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Cornerstone Building Brands, Inc.","suffix":"CNR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Cohen & Steers, Inc. (New York)","suffix":"CNS","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Consolidated Communications Holdings, Inc.","suffix":"CNSL","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Constellation Pharmaceuticals, Inc.","suffix":"CNST","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Century Casinos, Inc.","suffix":"CNTY","tasksCount":3,"isActive":false,"type":"company"},
{"name":"CNX Resources Corp.","suffix":"CNX","tasksCount":2,"isActive":false,"type":"company"},
{"name":"PC Connection, Inc.","suffix":"CNXN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Coda Octopus Group, Inc.","suffix":"CODA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Cohu, Inc.","suffix":"COHU","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Coca-Cola Consolidated, Inc.","suffix":"COKE","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Columbia Banking System, Inc.","suffix":"COLB","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Collegium Pharmaceutical, Inc.","suffix":"COLL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Conn's, Inc.","suffix":"CONN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Mr. Cooper Group, Inc.","suffix":"COOP","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Core-Mark Holding Co., Inc.","suffix":"CORE","tasksCount":0,"isActive":true,"type":"company"},
{"name":"CorEnergy Infrastructure Trust, Inc.","suffix":"CORR","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Corcept Therapeutics, Inc.","suffix":"CORT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Cowen, Inc.","suffix":"COWN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Callon Petroleum Co.","suffix":"CPE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Central Pacific Financial Corp.","suffix":"CPF","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Chesapeake Utilities Corp.","suffix":"CPK","tasksCount":0,"isActive":false,"type":"company"},
{"name":"CorePoint Lodging, Inc.","suffix":"CPLG","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Catalyst Pharmaceuticals, Inc.","suffix":"CPRX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Cooper-Standard Holdings, Inc.","suffix":"CPS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Computer Programs & Systems, Inc.","suffix":"CPSI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"CRA International, Inc.","suffix":"CRAI","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Corbus Pharmaceuticals Holdings, Inc.","suffix":"CRBP","tasksCount":4,"isActive":false,"type":"company"},
{"name":"California Resources Corp.","suffix":"CRC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Care.com, Inc.","suffix":"CRCM","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Crawford & Co.","suffix":"CRD.A","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Comstock Resources, Inc.","suffix":"CRK","tasksCount":5,"isActive":false,"type":"company"},
{"name":"CorMedix, Inc.","suffix":"CRMD","tasksCount":3,"isActive":false,"type":"company"},
{"name":"America's Car-Mart, Inc.","suffix":"CRMT","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Crinetics Pharmaceuticals, Inc.","suffix":"CRNX","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Crocs, Inc.","suffix":"CROX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Carpenter Technology Corp.","suffix":"CRS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Cortexyme, Inc.","suffix":"CRTX","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Cirrus Logic, Inc.","suffix":"CRUS","tasksCount":5,"isActive":false,"type":"company"},
{"name":"CorVel Corp.","suffix":"CRVL","tasksCount":4,"isActive":false,"type":"company"},
{"name":"CryoLife, Inc.","suffix":"CRY","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Carrizo Oil & Gas, Inc.","suffix":"CRZO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"CenterState Bank Corp.","suffix":"CSFL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"CSG Systems International, Inc.","suffix":"CSGS","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Cardiovascular Systems, Inc.","suffix":"CSII","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Castlight Health, Inc.","suffix":"CSLT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Cornerstone OnDemand, Inc.","suffix":"CSOD","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Caesarstone Ltd.","suffix":"CSTE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Castle Biosciences, Inc.","suffix":"CSTL","tasksCount":3,"isActive":false,"type":"company"},
{"name":"CapStar Financial Holdings, Inc.","suffix":"CSTR","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Carriage Services, Inc.","suffix":"CSV","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CSW Industrials, Inc.","suffix":"CSWI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Cooper Tire & Rubber Co.","suffix":"CTB","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Community Trust Bancorp, Inc. (Kentucky)","suffix":"CTBI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CytomX Therapeutics, Inc.","suffix":"CTMX","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Consolidated-Tomoka Land Co.","suffix":"CTO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Contura Energy, Inc.","suffix":"CTRA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Centric Brands, Inc.","suffix":"CTRC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"CareTrust REIT, Inc.","suffix":"CTRE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Citi Trends, Inc.","suffix":"CTRN","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CTS Corp.","suffix":"CTS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"CytoSorbents Corp.","suffix":"CTSO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CatchMark Timber Trust, Inc.","suffix":"CTT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Connecticut Water Service, Inc.","suffix":"CTWS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Cubic Corp.","suffix":"CUB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Customers Bancorp, Inc.","suffix":"CUBI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Cue Biopharma, Inc.","suffix":"CUE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Culp, Inc.","suffix":"CULP","tasksCount":2,"isActive":false,"type":"company"},
{"name":"CURO Group Holdings Corp.","suffix":"CURO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Cutera, Inc.","suffix":"CUTR","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Covanta Holding Corp.","suffix":"CVA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"CVB Financial Corp.","suffix":"CVBF","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Cavco Industries, Inc.","suffix":"CVCO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Central Valley Community Bancorp","suffix":"CVCY","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Commercial Vehicle Group, Inc.","suffix":"CVGI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Calavo Growers, Inc.","suffix":"CVGW","tasksCount":4,"isActive":false,"type":"company"},
{"name":"CVR Energy, Inc.","suffix":"CVI","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Covia Holdings Corp.","suffix":"CVIA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Commvault Systems, Inc.","suffix":"CVLT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Codorus Valley Bancorp, Inc.","suffix":"CVLY","tasksCount":4,"isActive":true,"type":"company"},
{"name":"CEL-SCI Corp.","suffix":"CVM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Corindus Vascular Robotics, Inc.","suffix":"CVRS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Covenant Transportation Group, Inc.","suffix":"CVTI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Consolidated Water Co. Ltd.","suffix":"CWCO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Clearway Energy, Inc.","suffix":"CWEN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Clearway Energy, Inc.","suffix":"CWEN.A","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Camping World Holdings, Inc.","suffix":"CWH","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Cushman & Wakefield Plc","suffix":"CWK","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Casella Waste Systems, Inc.","suffix":"CWST","tasksCount":5,"isActive":true,"type":"company"},
{"name":"California Water Service Group","suffix":"CWT","tasksCount":4,"isActive":false,"type":"company"},
{"name":"CoreCivic, Inc.","suffix":"CXW","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Cyclerion Therapeutics, Inc.","suffix":"CYCN","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Community Health Systems, Inc.","suffix":"CYH","tasksCount":1,"isActive":true,"type":"company"},
{"name":"CryoPort, Inc.","suffix":"CYRX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Cytokinetics, Inc.","suffix":"CYTK","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Citizens & Northern Corp.","suffix":"CZNC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"​​Daktronics, Inc.","suffix":"​​DAKT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Dana, Inc.","suffix":"DAN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Darling Ingredients, Inc.","suffix":"DAR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Diebold Nixdorf, Inc.","suffix":"DBD","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Designer Brands, Inc.","suffix":"DBI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Ducommun, Inc.","suffix":"DCO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Dime Community Bancshares, Inc.","suffix":"DCOM","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Deciphera Pharmaceuticals, Inc.","suffix":"DCPH","tasksCount":2,"isActive":true,"type":"company"},
{"name":"3D Systems Corp.","suffix":"DDD","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Dillard's, Inc.","suffix":"DDS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Easterly Government Properties, Inc.","suffix":"DEA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Deckers Outdoor Corp.","suffix":"DECK","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Denny's Corp.","suffix":"DENN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Dermira, Inc.","suffix":"DERM","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Dean Foods Co.","suffix":"DF","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Donnelley Financial Solutions, Inc.","suffix":"DFIN","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Donegal Group, Inc.","suffix":"DGICA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Digi International, Inc.","suffix":"DGII","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Diamond Hill Investment Group, Inc.","suffix":"DHIL","tasksCount":4,"isActive":true,"type":"company"},
{"name":"DHT Holdings, Inc.","suffix":"DHT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"DHI Group, Inc.","suffix":"DHX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Dine Brands Global, Inc.","suffix":"DIN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Diodes, Inc.","suffix":"DIOD","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Daily Journal Corp.","suffix":"DJCO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Delek US Holdings, Inc.","suffix":"DK","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Delta Apparel, Inc.","suffix":"DLA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Duluth Holdings, Inc.","suffix":"DLTH","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Deluxe Corp.","suffix":"DLX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Digimarc Corp.","suffix":"DMRC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"DNB Financial Corporation","suffix":"DNBF","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Denali Therapeutics, Inc.","suffix":"DNLI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"NOW, Inc.","suffix":"DNOW","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Denbury Resources, Inc.","suffix":"DNR","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Diamond Offshore Drilling, Inc.","suffix":"DO","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Physicians Realty Trust","suffix":"DOC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Domo, Inc.","suffix":"DOMO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Masonite International Corp.","suffix":"DOOR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Dorman Products, Inc.","suffix":"DORM","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Dova Pharmaceuticals, Inc.","suffix":"DOVA","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Diplomat Pharmacy, Inc.","suffix":"DPLO","tasksCount":3,"isActive":true,"type":"company"},
{"name":"DiamondRock Hospitality Co.","suffix":"DRH","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Dicerna Pharmaceuticals, Inc.","suffix":"DRNA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Dril-Quip, Inc.","suffix":"DRQ","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Drive Shack, Inc.","suffix":"DS","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Daseke, Inc.","suffix":"DSKE","tasksCount":0,"isActive":false,"type":"company"},
{"name":"DSP Group, Inc.","suffix":"DSPG","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Diamond S Shipping, Inc.","suffix":"DSSI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Precision BioSciences, Inc.","suffix":"DTIL","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Dynavax Technologies Corp.","suffix":"DVAX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Dynex Capital, Inc.","suffix":"DX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"DXP Enterprises, Inc.","suffix":"DXPE","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Dycom Industries, Inc.","suffix":"DY","tasksCount":4,"isActive":false,"type":"company"},
{"name":"DASAN Zhone Solutions Inc.","suffix":"DZSI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Brinker International, Inc.","suffix":"EAT","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Eventbrite, Inc.","suffix":"EB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Ennis, Inc.","suffix":"EBF","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ebix, Inc.","suffix":"EBIX","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Emergent BioSolutions, Inc.","suffix":"EBS","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Meridian Bancorp, Inc.","suffix":"EBSB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Enterprise Bancorp, Inc.","suffix":"EBTC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Echo Global Logistics, Inc.","suffix":"ECHO","tasksCount":1,"isActive":false,"type":"company"},
{"name":"US Ecology, Inc.","suffix":"ECOL","tasksCount":1,"isActive":false,"type":"company"},
{"name":"ChannelAdvisor Corp.","suffix":"ECOM","tasksCount":0,"isActive":false,"type":"company"},
{"name":"electroCore, Inc.","suffix":"ECOR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Encore Capital Group, Inc.","suffix":"ECPG","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Editas Medicine, Inc.","suffix":"EDIT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"El Paso Electric Co.","suffix":"EE","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Emerald Holding, Inc.","suffix":"EEX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Ellington Financial, Inc.","suffix":"EFC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Enterprise Financial Services Corp.","suffix":"EFSC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"eGain Corp.","suffix":"EGAN","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Eagle Bancorp, Inc. (Maryland)","suffix":"EGBN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"8x8, Inc.","suffix":"EGHT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Eagle Bulk Shipping, Inc.","suffix":"EGLE","tasksCount":1,"isActive":false,"type":"company"},
{"name":"NIC, Inc.","suffix":"EGOV","tasksCount":0,"isActive":false,"type":"company"},
{"name":"EastGroup Properties, Inc.","suffix":"EGP","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Eagle Pharmaceuticals, Inc.","suffix":"EGRX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"eHealth, Inc.","suffix":"EHTH","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Eidos Therapeutics, Inc.","suffix":"EIDX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Employers Holdings, Inc.","suffix":"EIG","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Endurance International Group Holdings, Inc.","suffix":"EIGI","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Eiger BioPharmaceuticals, Inc.","suffix":"EIGR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"e.l.f. Beauty, Inc.","suffix":"ELF","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Eloxx Pharmaceuticals, Inc.","suffix":"ELOX","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Elevate Credit, Inc.","suffix":"ELVT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Callaway Golf Co.","suffix":"ELY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"EMCOR Group, Inc.","suffix":"EME","tasksCount":2,"isActive":true,"type":"company"},
{"name":"The Eastern Co.","suffix":"EML","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Endo International Plc","suffix":"ENDP","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Entegra Financial Corp.","suffix":"ENFC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Enochian Biosciences, Inc.","suffix":"ENOB","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Enphase Energy, Inc.","suffix":"ENPH","tasksCount":3,"isActive":true,"type":"company"},
{"name":"EnerSys","suffix":"ENS","tasksCount":1,"isActive":true,"type":"company"},
{"name":"The Ensign Group, Inc.","suffix":"ENSG","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Enanta Pharmaceuticals, Inc.","suffix":"ENTA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Envestnet, Inc.","suffix":"ENV","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Enova International, Inc.","suffix":"ENVA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Enzo Biochem, Inc.","suffix":"ENZ","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Evolus, Inc.","suffix":"EOLS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Bottomline Technologies, Inc.","suffix":"EPAY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Edgewell Personal Care Co.","suffix":"EPC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Evolution Petroleum Corp.","suffix":"EPM","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Essential Properties Realty Trust, Inc.","suffix":"EPRT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Epizyme, Inc.","suffix":"EPZM","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Equity Bancshares, Inc.","suffix":"EQBK","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Era Group, Inc.","suffix":"ERA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Eldorado Resorts, Inc.","suffix":"ERI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Energy Recovery, Inc.","suffix":"ERII","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Eros International Plc","suffix":"EROS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Escalade, Inc.","suffix":"ESCA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"ESCO Technologies, Inc.","suffix":"ESE","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Enstar Group Ltd.","suffix":"ESGR","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Essent Group Ltd.","suffix":"ESNT","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Esperion Therapeutics, Inc.","suffix":"ESPR","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Esquire Financial Holdings, Inc.","suffix":"ESQ","tasksCount":1,"isActive":true,"type":"company"},
{"name":"ESSA Bancorp, Inc.","suffix":"ESSA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Earthstone Energy, Inc.","suffix":"ESTE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Community Bankers Trust Corp.","suffix":"ESXB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Ethan Allen Interiors, Inc.","suffix":"ETH","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Entercom Communications Corp.","suffix":"ETM","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Everbridge, Inc.","suffix":"EVBG","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Evans Bancorp, Inc.","suffix":"EVBN","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Entravision Communications Corp.","suffix":"EVC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"EverQuote, Inc.","suffix":"EVER","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Evofem Biosciences, Inc.","suffix":"EVFM","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Evolent Health, Inc.","suffix":"EVH","tasksCount":3,"isActive":true,"type":"company"},
{"name":"EVI Industries, Inc.","suffix":"EVI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Evelo Biosciences, Inc.","suffix":"EVLO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"EVO Payments, Inc.","suffix":"EVOP","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Everi Holdings, Inc.","suffix":"EVRI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"EVERTEC, Inc.","suffix":"EVTC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"ExlService Holdings, Inc.","suffix":"EXLS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"eXp World Holdings, Inc.","suffix":"EXPI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Exponent, Inc.","suffix":"EXPO","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Express, Inc.","suffix":"EXPR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Exterran Corp.","suffix":"EXTN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Extreme Networks, Inc.","suffix":"EXTR","tasksCount":2,"isActive":true,"type":"company"},
{"name":"National Vision Holdings, Inc.","suffix":"EYE","tasksCount":4,"isActive":true,"type":"company"},
{"name":"EyePoint Pharmaceuticals, Inc.","suffix":"EYPT","tasksCount":5,"isActive":false,"type":"company"},
{"name":"EZCORP, Inc.","suffix":"EZPW","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Farmer Brothers Co.","suffix":"FARM","tasksCount":0,"isActive":false,"type":"company"},
{"name":"FARO Technologies, Inc.","suffix":"FARO","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Fate Therapeutics, Inc.","suffix":"FATE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Flagstar Bancorp, Inc.","suffix":"FBC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"First Business Financial Services, Inc.","suffix":"FBIZ","tasksCount":4,"isActive":true,"type":"company"},
{"name":"FB Financial Corp.","suffix":"FBK","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Foundation Building Materials, Inc.","suffix":"FBM","tasksCount":0,"isActive":true,"type":"company"},
{"name":"The First Bancshares, Inc. (Mississippi)","suffix":"FBMS","tasksCount":0,"isActive":false,"type":"company"},
{"name":"First Bancorp (North Carolina)","suffix":"FBNC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"First BanCorp (Puerto Rico)","suffix":"FBP","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Franklin Covey Co.","suffix":"FC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"First Capital, Inc.","suffix":"FCAP","tasksCount":4,"isActive":false,"type":"company"},
{"name":"First Community Bancshares, Inc. (Virginia)","suffix":"FCBC","tasksCount":5,"isActive":true,"type":"company"},
{"name":"First Choice Bancorp (California)","suffix":"FCBP","tasksCount":5,"isActive":true,"type":"company"},
{"name":"1st Constitution Bancorp","suffix":"FCCY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"First Commonwealth Financial Corp. (Pennsylvania)","suffix":"FCF","tasksCount":0,"isActive":true,"type":"company"},
{"name":"FirstCash, Inc.","suffix":"FCFS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"FTI Consulting, Inc.","suffix":"FCN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Four Corners Property Trust, Inc.","suffix":"FCPT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Fidelity D&D Bancorp, Inc.","suffix":"FDBC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"First Defiance Financial Corp.","suffix":"FDEF","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Fresh Del Monte Produce, Inc.","suffix":"FDP","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Franklin Electric Co., Inc.","suffix":"FELE","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Forum Energy Technologies, Inc.","suffix":"FET","tasksCount":5,"isActive":false,"type":"company"},
{"name":"FutureFuel Corp.","suffix":"FF","tasksCount":3,"isActive":true,"type":"company"},
{"name":"First Financial Bancorp (Ohio)","suffix":"FFBC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"FBL Financial Group, Inc.","suffix":"FFG","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Flushing Financial Corp.","suffix":"FFIC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"First Financial Bankshares, Inc.","suffix":"FFIN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"First Financial Northwest, Inc.","suffix":"FFNW","tasksCount":1,"isActive":false,"type":"company"},
{"name":"First Foundation, Inc.","suffix":"FFWM","tasksCount":3,"isActive":true,"type":"company"},
{"name":"FGL Holdings","suffix":"FG","tasksCount":5,"isActive":false,"type":"company"},
{"name":"First Guaranty Bancshares, Inc.","suffix":"FGBI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"FibroGen, Inc.","suffix":"FGEN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Frank's International NV","suffix":"FI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"First Interstate BancSystem, Inc. (Montana)","suffix":"FIBK","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Federated Investors, Inc.","suffix":"FII","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Financial Institutions, Inc.","suffix":"FISI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Fitbit, Inc.","suffix":"FIT","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Five9, Inc.","suffix":"FIVN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Comfort Systems USA, Inc.","suffix":"FIX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Homology Medicines, Inc.","suffix":"FIXX","tasksCount":5,"isActive":false,"type":"company"},
{"name":"National Beverage Corp.","suffix":"FIZZ","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Fluidigm Corp.","suffix":"FLDM","tasksCount":5,"isActive":true,"type":"company"},
{"name":"The First of Long Island Corp.","suffix":"FLIC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Falcon Minerals Corp.","suffix":"FLMN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Fluent, Inc.","suffix":"FLNT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"SPX Flow, Inc.","suffix":"FLOW","tasksCount":1,"isActive":true,"type":"company"},
{"name":"1-800-FLOWERS.COM, Inc.","suffix":"FLWS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Flexion Therapeutics, Inc.","suffix":"FLXN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Flexsteel Industries, Inc.","suffix":"FLXS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Farmers & Merchants Bancorp, Inc. (Ohio)","suffix":"FMAO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"First Mid Bancshares, Inc.","suffix":"FMBH","tasksCount":1,"isActive":false,"type":"company"},
{"name":"First Midwest Bancorp, Inc. (Illinois)","suffix":"FMBI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Farmers National Banc Corp.","suffix":"FMNB","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Fabrinet","suffix":"FN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"FNCB Bancorp, Inc.","suffix":"FNCB","tasksCount":4,"isActive":false,"type":"company"},
{"name":"FedNat Holding Co.","suffix":"FNHC","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Funko, Inc.","suffix":"FNKO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"The First Bancorp, Inc. (Maine)","suffix":"FNLC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"First Northwest Bancorp (Washington)","suffix":"FNWB","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Focus Financial Partners, Inc.","suffix":"FOCS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Ferro Corp.","suffix":"FOE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Amicus Therapeutics, Inc.","suffix":"FOLD","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Forestar Group, Inc.","suffix":"FOR","tasksCount":2,"isActive":true,"type":"company"},
{"name":"FormFactor, Inc.","suffix":"FORM","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Forrester Research, Inc.","suffix":"FORR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Fossil Group, Inc.","suffix":"FOSL","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Fox Factory Holding Corp.","suffix":"FOXF","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Farmland Partners, Inc.","suffix":"FPI","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Five Prime Therapeutics, Inc.","suffix":"FPRX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"First Industrial Realty Trust, Inc.","suffix":"FR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Keane Group, Inc.","suffix":"FRAC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Franklin Financial Services Corp. (Pennsylvania)","suffix":"FRAF","tasksCount":5,"isActive":true,"type":"company"},
{"name":"First Bank (Hamilton, New Jersey)","suffix":"FRBA","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Republic First Bancorp, Inc.","suffix":"FRBK","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Fiesta Restaurant Group, Inc.","suffix":"FRGI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"First Merchants Corp. (Indiana)","suffix":"FRME","tasksCount":4,"isActive":false,"type":"company"},
{"name":"FRP Holdings, Inc.","suffix":"FRPH","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Freshpet Inc.","suffix":"FRPT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Forterra, Inc.","suffix":"FRTA","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Franklin Financial Network, Inc.","suffix":"FSB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"FS Bancorp, Inc.","suffix":"FSBW","tasksCount":4,"isActive":false,"type":"company"},
{"name":"ForeScout Technologies, Inc.","suffix":"FSCT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Franklin Street Properties Corp.","suffix":"FSP","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Federal Signal Corp.","suffix":"FSS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"L.B. Foster Co.","suffix":"FSTR","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Flotek Industries, Inc.","suffix":"FTK","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Frontier Communications Corp.","suffix":"FTR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"FTS International, Inc.","suffix":"FTSI","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Forty Seven, Inc.","suffix":"FTSV","tasksCount":4,"isActive":false,"type":"company"},
{"name":"H.B. Fuller Co.","suffix":"FUL","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Fulcrum Therapeutics, Inc.","suffix":"FULC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Fulton Financial Corp.","suffix":"FULT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"FVCBankcorp, Inc.","suffix":"FVCB","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Forward Air Corp.","suffix":"FWRD","tasksCount":4,"isActive":true,"type":"company"},
{"name":"German American Bancorp, Inc.","suffix":"GABC","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Gaia, Inc.","suffix":"GAIA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Galectin Therapeutics, Inc.","suffix":"GALT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"GATX Corp.","suffix":"GATX","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Glacier Bancorp, Inc.","suffix":"GBCI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"GAMCO Investors, Inc.","suffix":"GBL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Global Indemnity Ltd.","suffix":"GBLI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Global Blood Therapeutics, Inc.","suffix":"GBT","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Greenbrier Cos., Inc.","suffix":"GBX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"GAIN Capital Holdings, Inc.","suffix":"GCAP","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Greene County Bancorp, Inc.","suffix":"GCBC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Gannett Co., Inc.","suffix":"GCI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Genesco, Inc.","suffix":"GCO","tasksCount":3,"isActive":true,"type":"company"},
{"name":"GCP Applied Technologies, Inc.","suffix":"GCP","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Golden Entertainment, Inc.","suffix":"GDEN","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Green Dot Corp.","suffix":"GDOT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Goodrich Petroleum Corp.","suffix":"GDP","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Greif, Inc.","suffix":"GEF","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Greif, Inc.","suffix":"GEF.B","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Genesis Healthcare, Inc.","suffix":"GEN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Gencor Industries, Inc.","suffix":"GENC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"The GEO Group, Inc.","suffix":"GEO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Geospace Technologies Corp.","suffix":"GEOS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Geron Corp.","suffix":"GERN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Guess?, Inc.","suffix":"GES","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Griffon Corp.","suffix":"GFF","tasksCount":3,"isActive":true,"type":"company"},
{"name":"General Finance Corp.","suffix":"GFN","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Genomic Health, Inc.","suffix":"GHDX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Greenhill & Co., Inc.","suffix":"GHL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Graham Corp.","suffix":"GHM","tasksCount":0,"isActive":false,"type":"company"},
{"name":"G-III Apparel Group Ltd.","suffix":"GIII","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Glaukos Corp.","suffix":"GKOS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Great Lakes Dredge & Dock Corp.","suffix":"GLDD","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Golar LNG Ltd.","suffix":"GLNG","tasksCount":2,"isActive":false,"type":"company"},
{"name":"GasLog Ltd.","suffix":"GLOG","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Greenlight Capital Re Ltd.","suffix":"GLRE","tasksCount":4,"isActive":true,"type":"company"},
{"name":"P.H. Glatfelter Co.","suffix":"GLT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Glu Mobile, Inc.","suffix":"GLUU","tasksCount":5,"isActive":false,"type":"company"},
{"name":"GlycoMimetics, Inc.","suffix":"GLYC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"GameStop Corp.","suffix":"GME","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Globus Medical, Inc.","suffix":"GMED","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Global Medical REIT, Inc.","suffix":"GMRE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"GMS, Inc.","suffix":"GMS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"GNC Holdings, Inc.","suffix":"GNC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Genie Energy Ltd.","suffix":"GNE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Genco Shipping & Trading Ltd.","suffix":"GNK","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Global Net Lease, Inc.","suffix":"GNL","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Greenlane Holdings, Inc.","suffix":"GNLN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"GenMark Diagnostics, Inc.","suffix":"GNMK","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Generac Holdings, Inc.","suffix":"GNRC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Guaranty Bancshares, Inc. (Texas)","suffix":"GNTY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Genworth Financial, Inc.","suffix":"GNW","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Gogo, Inc.","suffix":"GOGO","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Acushnet Holdings Corp.","suffix":"GOLF","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Gladstone Commercial Corp.","suffix":"GOOD","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Gold Resource Corp.","suffix":"GORO","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Gossamer Bio, Inc.","suffix":"GOSS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Group 1 Automotive, Inc.","suffix":"GPI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Granite Point Mortgage Trust, Inc.","suffix":"GPMT","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Gulfport Energy Corp.","suffix":"GPOR","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Green Plains, Inc.","suffix":"GPRE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"GoPro, Inc.","suffix":"GPRO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"GP Strategies Corp.","suffix":"GPX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Green Brick Partners, Inc.","suffix":"GRBK","tasksCount":1,"isActive":false,"type":"company"},
{"name":"The Gorman-Rupp Co.","suffix":"GRC","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Griffin Industrial Realty, Inc.","suffix":"GRIF","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Groupon, Inc.","suffix":"GRPN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Gritstone Oncology, Inc.","suffix":"GRTS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Great Southern Bancorp, Inc. (Missouri)","suffix":"GSBC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Goosehead Insurance, Inc.","suffix":"GSHD","tasksCount":3,"isActive":true,"type":"company"},
{"name":"GSI Technology, Inc.","suffix":"GSIT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"G1 Therapeutics, Inc.","suffix":"GTHX","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Chart Industries, Inc.","suffix":"GTLS","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Gray Television, Inc.","suffix":"GTN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Triple-S Management Corp.","suffix":"GTS","tasksCount":3,"isActive":true,"type":"company"},
{"name":"GTT Communications, Inc.","suffix":"GTT","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Getty Realty Corp.","suffix":"GTY","tasksCount":4,"isActive":false,"type":"company"},
{"name":"GTY Technology Holdings, Inc.","suffix":"GTYH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Granite Construction, Inc.","suffix":"GVA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Great Western Bancorp, Inc. (South Dakota)","suffix":"GWB","tasksCount":5,"isActive":false,"type":"company"},
{"name":"GWG Holdings, Inc.","suffix":"GWGH","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Global Water Resources, Inc.","suffix":"GWRS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Hawaiian Holdings, Inc.","suffix":"HA","tasksCount":3,"isActive":true,"type":"company"},
{"name":"The Habit Restaurants, Inc.","suffix":"HABT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Haemonetics Corp.","suffix":"HAE","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Hanmi Financial Corp.","suffix":"HAFC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Hallmark Financial Services, Inc.","suffix":"HALL","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Halozyme Therapeutics, Inc.","suffix":"HALO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Harpoon Therapeutics, Inc.","suffix":"HARP","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Hannon Armstrong Sustainable Infrastructure Capital, Inc.","suffix":"HASI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Haynes International, Inc.","suffix":"HAYN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Hamilton Beach Brands Holding Co.","suffix":"HBB","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Home Bancorp, Inc.","suffix":"HBCP","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Howard Bancorp, Inc. (Maryland)","suffix":"HBMD","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Horizon Bancorp, Inc. (Indiana)","suffix":"HBNC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Health Catalyst, Inc.","suffix":"HCAT","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Warrior Met Coal, Inc.","suffix":"HCC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Heritage-Crystal Clean, Inc.","suffix":"HCCI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"HCI Group, Inc.","suffix":"HCI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"The Hackett Group, Inc.","suffix":"HCKT","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Healthcare Services Group, Inc.","suffix":"HCSG","tasksCount":4,"isActive":true,"type":"company"},
{"name":"H&E Equipment Services, Inc.","suffix":"HEES","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Helen of Troy Ltd.","suffix":"HELE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"HF Foods Group, Inc.","suffix":"HFFG","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Heritage Financial Corp. (Washington)","suffix":"HFWA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Hillenbrand, Inc.","suffix":"HI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Hibbett Sports, Inc.","suffix":"HIBB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Hingham Institution for Savings","suffix":"HIFS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Health Insurance Innovations, Inc.","suffix":"HIIQ","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Hecla Mining Co.","suffix":"HL","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Houlihan Lokey, Inc.","suffix":"HLI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Helios Technologies, Inc.","suffix":"HLIO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Harmonic, Inc.","suffix":"HLIT","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Hamilton Lane, Inc.","suffix":"HLNE","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Helix Energy Solutions Group, Inc.","suffix":"HLX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Houghton Mifflin Harcourt Co.","suffix":"HMHC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Horace Mann Educators Corp.","suffix":"HMN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"HomeStreet, Inc.","suffix":"HMST","tasksCount":1,"isActive":false,"type":"company"},
{"name":"HMS Holdings Corp.","suffix":"HMSY","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Hemisphere Media Group, Inc.","suffix":"HMTV","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Hanger, Inc.","suffix":"HNGR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"HNI Corp.","suffix":"HNI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Hallador Energy Co.","suffix":"HNRG","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Hooker Furniture Corp.","suffix":"HOFT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Home Bancshares, Inc. (Arkansas)","suffix":"HOMB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"At Home Group, Inc.","suffix":"HOME","tasksCount":3,"isActive":false,"type":"company"},
{"name":"HarborOne Bancorp, Inc.","suffix":"HONE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"HOOKIPA Pharma, Inc.","suffix":"HOOK","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Hope Bancorp, Inc.","suffix":"HOPE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"HighPoint Resources Corp.","suffix":"HPR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"HealthEquity, Inc.","suffix":"HQY","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Healthcare Realty Trust, Inc.","suffix":"HR","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Herc Holdings, Inc.","suffix":"HRI","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Heritage Insurance Holdings, Inc.","suffix":"HRTG","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Heron Therapeutics, Inc.","suffix":"HRTX","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Harsco Corp.","suffix":"HSC","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Heidrick & Struggles International, Inc.","suffix":"HSII","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Heska Corp.","suffix":"HSKA","tasksCount":3,"isActive":true,"type":"company"},
{"name":"HealthStream, Inc.","suffix":"HSTM","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Hersha Hospitality Trust","suffix":"HT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"HomeTrust Bancshares, Inc.","suffix":"HTBI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Heritage Commerce Corp.","suffix":"HTBK","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Hilltop Holdings, Inc.","suffix":"HTH","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Heartland Express, Inc.","suffix":"HTLD","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Heartland Financial USA, Inc.","suffix":"HTLF","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Hertz Global Holdings, Inc.","suffix":"HTZ","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Hub Group, Inc.","suffix":"HUBG","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Hudson Ltd.","suffix":"HUD","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Hurco Cos., Inc.","suffix":"HURC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Huron Consulting Group, Inc.","suffix":"HURN","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Haverty Furniture Cos., Inc.","suffix":"HVT","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Hawthorn Bancshares, Inc.","suffix":"HWBK","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Hancock Whitney Corp.","suffix":"HWC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Hawkins, Inc.","suffix":"HWKN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Hyster-Yale Materials Handling, Inc.","suffix":"HY","tasksCount":1,"isActive":true,"type":"company"},
{"name":"MarineMax, Inc.","suffix":"HZO","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Intelsat SA","suffix":"I","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Independent Bank Corp. (Michigan)","suffix":"IBCP","tasksCount":3,"isActive":false,"type":"company"},
{"name":"IBERIABANK Corp.","suffix":"IBKC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"International Bancshares Corp.","suffix":"IBOC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Installed Building Products, Inc.","suffix":"IBP","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Independent Bank Group, Inc.","suffix":"IBTX","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Independence Contract Drilling, Inc.","suffix":"ICD","tasksCount":3,"isActive":false,"type":"company"},
{"name":"ICF International, Inc.","suffix":"ICFI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Ichor Holdings Ltd.","suffix":"ICHR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Intercept Pharmaceuticals, Inc.","suffix":"ICPT","tasksCount":4,"isActive":true,"type":"company"},
{"name":"InterDigital, Inc.","suffix":"IDCC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Ideanomics, Inc.","suffix":"IDEX","tasksCount":5,"isActive":true,"type":"company"},
{"name":"IDT Corp.","suffix":"IDT","tasksCount":5,"isActive":true,"type":"company"},
{"name":"IES Holdings, Inc.","suffix":"IESC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Independence Holding Co.","suffix":"IHC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Information Services Group, Inc.","suffix":"III","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Insteel Industries, Inc.","suffix":"IIIN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"i3 Verticals, Inc.","suffix":"IIIV","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Intricon Corp.","suffix":"IIN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Innovative Industrial Properties, Inc.","suffix":"IIPR","tasksCount":0,"isActive":false,"type":"company"},
{"name":"II-VI, Inc.","suffix":"IIVI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Industrial Logistics Properties Trust","suffix":"ILPT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"IMAX Corp.","suffix":"IMAX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"ImmunoGen, Inc.","suffix":"IMGN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ingles Markets, Inc.","suffix":"IMKTA","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Immersion Corp.","suffix":"IMMR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Immunomedics, Inc.","suffix":"IMMU","tasksCount":1,"isActive":false,"type":"company"},
{"name":"International Money Express, Inc.","suffix":"IMXI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"First Internet Bancorp","suffix":"INBK","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Independent Bank Corp. (Massachusetts)","suffix":"INDB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Infinera Corp.","suffix":"INFN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Inogen, Inc.","suffix":"INGN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Summit Hotel Properties, Inc.","suffix":"INN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Inovio Pharmaceuticals, Inc.","suffix":"INO","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Inovalon Holdings, Inc.","suffix":"INOV","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Intelligent Systems Corp.","suffix":"INS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Inspired Entertainment, Inc.","suffix":"INSE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Inseego Corp.","suffix":"INSG","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Insmed, Inc.","suffix":"INSM","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Inspire Medical Systems, Inc.","suffix":"INSP","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Instructure, Inc.","suffix":"INST","tasksCount":3,"isActive":false,"type":"company"},
{"name":"International Seaways, Inc.","suffix":"INSW","tasksCount":1,"isActive":false,"type":"company"},
{"name":"World Fuel Services Corp.","suffix":"INT","tasksCount":4,"isActive":false,"type":"company"},
{"name":"INTL FCStone, Inc.","suffix":"INTL","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Innoviva, Inc.","suffix":"INVA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"InnerWorkings, Inc.","suffix":"INWK","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Innospec, Inc.","suffix":"IOSP","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Adesto Technologies Corp.","suffix":"IOTS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Iovance Biotherapeutics, Inc.","suffix":"IOVA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Inter Parfums, Inc.","suffix":"IPAR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Inphi Corp.","suffix":"IPHI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Innophos Holdings, Inc.","suffix":"IPHS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Intrepid Potash, Inc.","suffix":"IPI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"iRobot Corp.","suffix":"IRBT","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Iridium Communications, Inc.","suffix":"IRDM","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Investors Real Estate Trust","suffix":"IRET","tasksCount":2,"isActive":true,"type":"company"},
{"name":"IRadimed Corp.","suffix":"IRMD","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Independence Realty Trust, Inc.","suffix":"IRT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"iRhythm Technologies, Inc.","suffix":"IRTC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Ironwood Pharmaceuticals, Inc.","suffix":"IRWD","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Investors Bancorp, Inc. (New Jersey)","suffix":"ISBC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"International Speedway Corp.","suffix":"ISCA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Isramco, Inc.","suffix":"ISRL","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Investar Holding Corp.","suffix":"ISTR","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Intra-Cellular Therapies, Inc.","suffix":"ITCI","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Integer Holdings Corp.","suffix":"ITGR","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Iteris, Inc.","suffix":"ITI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Investors Title Co.","suffix":"ITIC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Itron, Inc.","suffix":"ITRI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Invacare Corp.","suffix":"IVC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Invesco Mortgage Capital, Inc.","suffix":"IVR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Jack in the Box, Inc.","suffix":"JACK","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Jagged Peak Energy, Inc.","suffix":"JAG","tasksCount":4,"isActive":false,"type":"company"},
{"name":"J. Alexander's Holdings, Inc.","suffix":"JAX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"John B. Sanfilippo & Son, Inc.","suffix":"JBSS","tasksCount":1,"isActive":true,"type":"company"},
{"name":"John Bean Technologies Corp.","suffix":"JBT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Jernigan Capital, Inc.","suffix":"JCAP","tasksCount":3,"isActive":false,"type":"company"},
{"name":"j2 Global, Inc.","suffix":"JCOM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"J. C. Penney Co., Inc.","suffix":"JCP","tasksCount":1,"isActive":true,"type":"company"},
{"name":"JELD-WEN Holding, Inc.","suffix":"JELD","tasksCount":4,"isActive":true,"type":"company"},
{"name":"J.Jill, Inc.","suffix":"JILL","tasksCount":5,"isActive":true,"type":"company"},
{"name":"J&J Snack Foods Corp.","suffix":"JJSF","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Jounce Therapeutics, Inc.","suffix":"JNCE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"The St. Joe Co.","suffix":"JOE","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Johnson Outdoors, Inc.","suffix":"JOUT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"James River Group Holdings Ltd.","suffix":"JRVR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"The Joint Corp. (United States)","suffix":"JYNT","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Kadant, Inc.","suffix":"KAI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Kala Pharmaceuticals, Inc.","suffix":"KALA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Kaiser Aluminum Corp.","suffix":"KALU","tasksCount":3,"isActive":true,"type":"company"},
{"name":"KalVista Pharmaceuticals, Inc.","suffix":"KALV","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Kaman Corp.","suffix":"KAMN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Kimball International, Inc.","suffix":"KBAL","tasksCount":4,"isActive":false,"type":"company"},
{"name":"KB Home","suffix":"KBH","tasksCount":5,"isActive":false,"type":"company"},
{"name":"KBR, Inc.","suffix":"KBR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Kadmon Holdings, Inc.","suffix":"KDMN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Kimball Electronics, Inc.","suffix":"KE","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Kelly Services, Inc.","suffix":"KELYA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"KEMET Corp.","suffix":"KEM","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Kforce, Inc.","suffix":"KFRC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Korn Ferry","suffix":"KFY","tasksCount":4,"isActive":true,"type":"company"},
{"name":"OrthoPediatrics Corp.","suffix":"KIDS","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Kindred Biosciences, Inc.","suffix":"KIN","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Kaleido Biosciences, Inc.","suffix":"KLDO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"KLX Energy Services Holdings, Inc.","suffix":"KLXE","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Kennametal, Inc.","suffix":"KMT","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Knowles Corp.","suffix":"KN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Knoll, Inc.","suffix":"KNL","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Kiniksa Pharmaceuticals Ltd.","suffix":"KNSA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Kinsale Capital Group, Inc.","suffix":"KNSL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Kodiak Sciences, Inc.","suffix":"KOD","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Koppers Holdings, Inc.","suffix":"KOP","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Karyopharm Therapeutics, Inc.","suffix":"KPTI","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Kraton Corp.","suffix":"KRA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"KKR Real Estate Finance Trust, Inc.","suffix":"KREF","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Kite Realty Group Trust","suffix":"KRG","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Kearny Financial Corp.","suffix":"KRNY","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Kronos Worldwide, Inc.","suffix":"KRO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Karuna Therapeutics, Inc.","suffix":"KRTX","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Kura Sushi USA, Inc.","suffix":"KRUS","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Krystal Biotech, Inc.","suffix":"KRYS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Kontoor Brands, Inc.","suffix":"KTB","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Kratos Defense & Security Solutions, Inc.","suffix":"KTOS","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Kura Oncology, Inc.","suffix":"KURA","tasksCount":5,"isActive":true,"type":"company"},
{"name":"KVH Industries, Inc. (Delaware)","suffix":"KVHI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Kennedy-Wilson Holdings, Inc.","suffix":"KW","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Quaker Chemical Corp.","suffix":"KWR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Kezar Life Sciences, Inc.","suffix":"KZR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"​Lithia Motors, Inc.","suffix":"​LAD","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ladder Capital Corp.","suffix":"LADR","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Lancaster Colony Corp.","suffix":"LANC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Gladstone Land Corp.","suffix":"LAND","tasksCount":3,"isActive":true,"type":"company"},
{"name":"nLIGHT, Inc.","suffix":"LASR","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Laureate Education, Inc.","suffix":"LAUR","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Lawson Products, Inc.","suffix":"LAWS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Lakeland Bancorp, Inc.","suffix":"LBAI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Luther Burbank Corp.","suffix":"LBC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Liberty Oilfield Services, Inc.","suffix":"LBRT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"LendingClub Corp.","suffix":"LC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Lannett Co., Inc.","suffix":"LCI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"LCI Industries, Inc.","suffix":"LCII","tasksCount":5,"isActive":false,"type":"company"},
{"name":"LCNB Corp.","suffix":"LCNB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Lineage Cell Therapeutics, Inc.","suffix":"LCTX","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Lifetime Brands, Inc.","suffix":"LCUT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Lydall, Inc.","suffix":"LDL","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Lands' End, Inc.","suffix":"LE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Leaf Group Ltd.","suffix":"LEAF","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Lee Enterprises, Inc.","suffix":"LEE","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Legacy Housing Corp.","suffix":"LEGH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Level One Bancorp, Inc.","suffix":"LEVL","tasksCount":5,"isActive":true,"type":"company"},
{"name":"LifeVantage Corp.","suffix":"LFVN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"LGI Homes, Inc.","suffix":"LGIH","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ligand Pharmaceuticals, Inc.","suffix":"LGND","tasksCount":0,"isActive":false,"type":"company"},
{"name":"LHC Group, Inc.","suffix":"LHCG","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Liberty Latin America Ltd.","suffix":"LILA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Liberty Latin America Ltd.","suffix":"LILAK","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Lindblad Expeditions Holdings, Inc.","suffix":"LIND","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Lumentum Holdings, Inc.","suffix":"LITE","tasksCount":4,"isActive":true,"type":"company"},
{"name":"LivaNova Plc","suffix":"LIVN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"LiveXLive Media, Inc.","suffix":"LIVX","tasksCount":2,"isActive":false,"type":"company"},
{"name":"La Jolla Pharmaceutical Co.","suffix":"LJPC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Lakeland Financial Corp. (Indiana)","suffix":"LKFN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"LSC Communications, Inc.","suffix":"LKSD","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Lumber Liquidators Holdings, Inc.","suffix":"LL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Limelight Networks, Inc.","suffix":"LLNW","tasksCount":3,"isActive":true,"type":"company"},
{"name":"LeMaitre Vascular, Inc.","suffix":"LMAT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Limoneira Co.","suffix":"LMNR","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Luminex Corp.","suffix":"LMNX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Landec Corp.","suffix":"LNDC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Lindsay Corp.","suffix":"LNN","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Lantheus Holdings, Inc.","suffix":"LNTH","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Live Oak Bancshares, Inc.","suffix":"LOB","tasksCount":4,"isActive":false,"type":"company"},
{"name":"El Pollo Loco Holdings, Inc.","suffix":"LOCO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"LogicBio Therapeutics, Inc.","suffix":"LOGC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Loral Space & Communications, Inc.","suffix":"LORL","tasksCount":4,"isActive":false,"type":"company"},
{"name":"The Lovesac Co.","suffix":"LOVE","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Dorian LPG Ltd.","suffix":"LPG","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Laredo Petroleum, Inc.","suffix":"LPI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"LivePerson, Inc.","suffix":"LPSN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Louisiana-Pacific Corp.","suffix":"LPX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Liquidia Technologies, Inc.","suffix":"LQDA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Liquidity Services, Inc.","suffix":"LQDT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"K12, Inc.","suffix":"LRN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Lattice Semiconductor Corp.","suffix":"LSCC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"LTC Properties, Inc.","suffix":"LTC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Livent Corp.","suffix":"LTHM","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Liberty TripAdvisor Holdings, Inc.","suffix":"LTRPA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Ladenburg Thalmann Financial Services, Inc.","suffix":"LTS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"LegacyTexas Financial Group, Inc.","suffix":"LTXB","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Livongo Health, Inc.","suffix":"LVGO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Luxfer Holdings Plc","suffix":"LXFR","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Lexington Realty Trust","suffix":"LXP","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Lexicon Pharmaceuticals, Inc.","suffix":"LXRX","tasksCount":1,"isActive":false,"type":"company"},
{"name":"LSB Industries, Inc.","suffix":"LXU","tasksCount":5,"isActive":false,"type":"company"},
{"name":"La-Z-Boy, Inc.","suffix":"LZB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"ManTech International Corp.","suffix":"MANT","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Matthews International Corp.","suffix":"MATW","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Matson, Inc.","suffix":"MATX","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Maxar Technologies, Inc.","suffix":"MAXR","tasksCount":3,"isActive":true,"type":"company"},
{"name":"MBIA, Inc.","suffix":"MBI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Marrone Bio Innovations, Inc.","suffix":"MBII","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Merchants Bancorp (Indiana)","suffix":"MBIN","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Mustang Bio, Inc.","suffix":"MBIO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Malibu Boats, Inc.","suffix":"MBUU","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Mercantile Bank Corp.","suffix":"MBWM","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Moelis & Co.","suffix":"MC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Metropolitan Bank Holding Corp.","suffix":"MCB","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Macatawa Bank Corp.","suffix":"MCBC","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Mastercraft Boat Holdings, Inc.","suffix":"MCFT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Marchex, Inc.","suffix":"MCHX","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Seres Therapeutics, Inc.","suffix":"MCRB","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Monarch Casino & Resort, Inc.","suffix":"MCRI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Milacron Holdings Corp.","suffix":"MCRN","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Marcus Corp.","suffix":"MCS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"M.D.C. Holdings, Inc.","suffix":"MDC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"MDC Partners, Inc.","suffix":"MDCA","tasksCount":3,"isActive":true,"type":"company"},
{"name":"The Medicines Co.","suffix":"MDCO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Madrigal Pharmaceuticals, Inc.","suffix":"MDGL","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Meredith Corp.","suffix":"MDP","tasksCount":1,"isActive":true,"type":"company"},
{"name":"McDermott International, Inc.","suffix":"MDR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Allscripts Healthcare Solutions, Inc.","suffix":"MDRX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Mayville Engineering Co., Inc.","suffix":"MEC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Medifast, Inc.","suffix":"MED","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Medpace Holdings, Inc.","suffix":"MEDP","tasksCount":1,"isActive":true,"type":"company"},
{"name":"The Meet Group, Inc.","suffix":"MEET","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Methode Electronics, Inc.","suffix":"MEI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"MEI Pharma, Inc.","suffix":"MEIP","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Mesa Air Group, Inc.","suffix":"MESA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ramaco Resources, Inc.","suffix":"METC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Medallion Financial Corp.","suffix":"MFIN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Mackinac Financial Corp.","suffix":"MFNC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"MutualFirst Financial, Inc.","suffix":"MFSF","tasksCount":3,"isActive":true,"type":"company"},
{"name":"MISTRAS Group, Inc.","suffix":"MG","tasksCount":1,"isActive":true,"type":"company"},
{"name":"MGE Energy, Inc.","suffix":"MGEE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Magellan Health, Inc.","suffix":"MGLN","tasksCount":3,"isActive":false,"type":"company"},
{"name":"MacroGenics, Inc.","suffix":"MGNX","tasksCount":0,"isActive":true,"type":"company"},
{"name":"MGP Ingredients, Inc.","suffix":"MGPI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"McGrath RentCorp","suffix":"MGRC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Magenta Therapeutics, Inc.","suffix":"MGTA","tasksCount":0,"isActive":false,"type":"company"},
{"name":"MeiraGTx Holdings Plc","suffix":"MGTX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Magnolia Oil & Gas Corp.","suffix":"MGY","tasksCount":2,"isActive":false,"type":"company"},
{"name":"M/I Homes, Inc.","suffix":"MHO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Michaels Cos., Inc.","suffix":"MIK","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Mobile Mini, Inc.","suffix":"MINI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Mirum Pharmaceuticals, Inc.","suffix":"MIRM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Mitek Systems, Inc.","suffix":"MITK","tasksCount":2,"isActive":true,"type":"company"},
{"name":"AG Mortgage Investment Trust, Inc.","suffix":"MITT","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Majesco","suffix":"MJCO","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Mesa Laboratories, Inc.","suffix":"MLAB","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Herman Miller, Inc.","suffix":"MLHR","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Mueller Industries, Inc.","suffix":"MLI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Millendo Therapeutics, Inc.","suffix":"MLND","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Maui Land & Pineapple Co., Inc.","suffix":"MLP","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Miller Industries, Inc. (Tennessee)","suffix":"MLR","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Malvern Bancorp, Inc.","suffix":"MLVF","tasksCount":4,"isActive":false,"type":"company"},
{"name":"MMA Capital Holdings, Inc.","suffix":"MMAC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Marcus & Millichap, Inc.","suffix":"MMI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"MAXIMUS, Inc.","suffix":"MMS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Merit Medical Systems, Inc.","suffix":"MMSI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Mallinckrodt Plc","suffix":"MNK","tasksCount":3,"isActive":true,"type":"company"},
{"name":"MannKind Corp.","suffix":"MNKD","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Menlo Therapeutics, Inc.","suffix":"MNLO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"MediciNova, Inc.","suffix":"MNOV","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Monmouth Real Estate Investment Corp.","suffix":"MNR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Brigham Minerals, Inc.","suffix":"MNRL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Monro, Inc.","suffix":"MNRO","tasksCount":4,"isActive":true,"type":"company"},
{"name":"MainStreet Bancshares, Inc.","suffix":"MNSB","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Momenta Pharmaceuticals, Inc.","suffix":"MNTA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"MobileIron, Inc.","suffix":"MOBL","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Modine Manufacturing Co.","suffix":"MOD","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Model N, Inc.","suffix":"MODN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"MidWestOne Financial Group, Inc.","suffix":"MOFG","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Moog, Inc.","suffix":"MOG.A","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Morphic Holding, Inc.","suffix":"MORF","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Movado Group, Inc.","suffix":"MOV","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Motorcar Parts of America, Inc.","suffix":"MPAA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Mid Penn Bancorp, Inc.","suffix":"MPB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Marine Products Corp.","suffix":"MPX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Montage Resources Corp.","suffix":"MR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"MRC Global, Inc.","suffix":"MRC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Mercury Systems, Inc.","suffix":"MRCY","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Marker Therapeutics, Inc.","suffix":"MRKR","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Marlin Business Services Corp.","suffix":"MRLN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Marinus Pharmaceuticals, Inc.","suffix":"MRNS","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Mersana Therapeutics, Inc.","suffix":"MRSN","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Marten Transport Ltd.","suffix":"MRTN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Mirati Therapeutics, Inc.","suffix":"MRTX","tasksCount":1,"isActive":false,"type":"company"},
{"name":"MSA Safety, Inc.","suffix":"MSA","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Midland States Bancorp, Inc.","suffix":"MSBI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Middlesex Water Co.","suffix":"MSEX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"MSG Networks, Inc.","suffix":"MSGN","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Misonix, Inc.","suffix":"MSON","tasksCount":3,"isActive":false,"type":"company"},
{"name":"MicroStrategy, Inc.","suffix":"MSTR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Matador Resources Co.","suffix":"MTDR","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Molecular Templates, Inc.","suffix":"MTEM","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Meritage Homes Corp.","suffix":"MTH","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Meritor, Inc.","suffix":"MTOR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Materion Corp.","suffix":"MTRN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Matrix Service Co.","suffix":"MTRX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"MTS Systems Corp.","suffix":"MTSC","tasksCount":0,"isActive":true,"type":"company"},
{"name":"MACOM Technology Solutions Holdings, Inc.","suffix":"MTSI","tasksCount":0,"isActive":false,"type":"company"},
{"name":"The Manitowoc Co., Inc.","suffix":"MTW","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Minerals Technologies, Inc.","suffix":"MTX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"MasTec, Inc.","suffix":"MTZ","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Murphy USA, Inc.","suffix":"MUSA","tasksCount":0,"isActive":false,"type":"company"},
{"name":"MVB Financial Corp.","suffix":"MVBF","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Mueller Water Products, Inc.","suffix":"MWA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"MaxLinear, Inc.","suffix":"MXL","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Myers Industries, Inc.","suffix":"MYE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Myriad Genetics, Inc.","suffix":"MYGN","tasksCount":2,"isActive":false,"type":"company"},
{"name":"MyoKardia, Inc.","suffix":"MYOK","tasksCount":1,"isActive":false,"type":"company"},
{"name":"MYR Group, Inc.","suffix":"MYRG","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Nanometrics, Inc.","suffix":"NANO","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Nordic American Tankers Ltd.","suffix":"NAT","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Nathan's Famous, Inc.","suffix":"NATH","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Nature's Sunshine Products, Inc.","suffix":"NATR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Navistar International Corp.","suffix":"NAV","tasksCount":1,"isActive":true,"type":"company"},
{"name":"New Age Beverages Corp.","suffix":"NBEV","tasksCount":5,"isActive":false,"type":"company"},
{"name":"National Bank Holdings Corp.","suffix":"NBHC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Northeast Bank (Maine)","suffix":"NBN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Nabors Industries Ltd.","suffix":"NBR","tasksCount":3,"isActive":false,"type":"company"},
{"name":"NBT Bancorp, Inc.","suffix":"NBTB","tasksCount":3,"isActive":false,"type":"company"},
{"name":"NACCO Industries, Inc.","suffix":"NC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Nicolet Bankshares, Inc.","suffix":"NCBS","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Navigant Consulting, Inc.","suffix":"NCI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"National CineMedia, Inc.","suffix":"NCMI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"NCS Multistage Holdings, Inc.","suffix":"NCSM","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Noodles & Co.","suffix":"NDLS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Noble Corp. Plc","suffix":"NE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"NeoGenomics, Inc.","suffix":"NEO","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Neogen Corp.","suffix":"NEOG","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Minerva Neurosciences, Inc.","suffix":"NERV","tasksCount":3,"isActive":true,"type":"company"},
{"name":"National Energy Services Reunited Corp.","suffix":"NESR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"New Media Investment Group, Inc.","suffix":"NEWM","tasksCount":0,"isActive":true,"type":"company"},
{"name":"NextDecade Corp.","suffix":"NEXT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Northfield Bancorp, Inc. (New Jersey)","suffix":"NFBK","tasksCount":5,"isActive":true,"type":"company"},
{"name":"NovaGold Resources, Inc.","suffix":"NG","tasksCount":4,"isActive":true,"type":"company"},
{"name":"National General Holdings Corp.","suffix":"NGHC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"NGM Biopharmaceuticals, Inc.","suffix":"NGM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Natural Gas Services Group, Inc.","suffix":"NGS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Natural Grocers by Vitamin Cottage, Inc.","suffix":"NGVC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Ingevity Corp.","suffix":"NGVT","tasksCount":0,"isActive":true,"type":"company"},
{"name":"National HealthCare Corp.","suffix":"NHC","tasksCount":0,"isActive":true,"type":"company"},
{"name":"National Health Investors, Inc.","suffix":"NHI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Nine Energy Service, Inc.","suffix":"NINE","tasksCount":4,"isActive":false,"type":"company"},
{"name":"New Jersey Resources Corp.","suffix":"NJR","tasksCount":3,"isActive":true,"type":"company"},
{"name":"National Bankshares, Inc.","suffix":"NKSH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"NL Industries, Inc.","suffix":"NL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"NMI Holdings, Inc.","suffix":"NMIH","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Newmark Group, Inc.","suffix":"NMRK","tasksCount":3,"isActive":true,"type":"company"},
{"name":"NN, Inc.","suffix":"NNBR","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Nelnet, Inc.","suffix":"NNI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"NI Holdings, Inc.","suffix":"NODK","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Northern Oil & Gas, Inc.","suffix":"NOG","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Sunnova Energy International, Inc.","suffix":"NOVA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Novanta, Inc.","suffix":"NOVT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Neenah, Inc.","suffix":"NP","tasksCount":5,"isActive":false,"type":"company"},
{"name":"National Presto Industries, Inc.","suffix":"NPK","tasksCount":3,"isActive":true,"type":"company"},
{"name":"EnPro Industries, Inc.","suffix":"NPO","tasksCount":5,"isActive":true,"type":"company"},
{"name":"NeoPhotonics Corp.","suffix":"NPTN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Newpark Resources, Inc.","suffix":"NR","tasksCount":0,"isActive":false,"type":"company"},
{"name":"National Research Corp.","suffix":"NRC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"NRC Group Holdings Corp.","suffix":"NRCG","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Northrim BanCorp, Inc.","suffix":"NRIM","tasksCount":3,"isActive":true,"type":"company"},
{"name":"National Storage Affiliates Trust","suffix":"NSA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Insight Enterprises, Inc.","suffix":"NSIT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Insperity, Inc.","suffix":"NSP","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Napco Security Technologies, Inc.","suffix":"NSSC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"NanoString Technologies, Inc.","suffix":"NSTG","tasksCount":5,"isActive":true,"type":"company"},
{"name":"The Bank of N.T. Butterfield & Son Ltd.","suffix":"NTB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"NetScout Systems, Inc.","suffix":"NTCT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Neon Therapeutics, Inc.","suffix":"NTGN","tasksCount":0,"isActive":false,"type":"company"},
{"name":"NETGEAR, Inc.","suffix":"NTGR","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Intellia Therapeutics, Inc.","suffix":"NTLA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Natera, Inc.","suffix":"NTRA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Natus Medical, Inc.","suffix":"NTUS","tasksCount":3,"isActive":true,"type":"company"},
{"name":"NuVasive, Inc.","suffix":"NUVA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Novavax, Inc.","suffix":"NVAX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Novocure Ltd.","suffix":"NVCR","tasksCount":1,"isActive":false,"type":"company"},
{"name":"NVE Corp.","suffix":"NVEC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"NV5 Global, Inc.","suffix":"NVEE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Nevro Corp.","suffix":"NVRO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Invitae Corp.","suffix":"NVTA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Northwest Bancshares, Inc. (Pennsylvania)","suffix":"NWBI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"NorthWestern Corp.","suffix":"NWE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Norwood Financial Corp.","suffix":"NWFL","tasksCount":0,"isActive":true,"type":"company"},
{"name":"National Western Life Group, Inc.","suffix":"NWLI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Northwest Natural Holding Co.","suffix":"NWN","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Northwest Pipe Co.","suffix":"NWPX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Quanex Building Products Corp.","suffix":"NX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"NextGen Healthcare, Inc.","suffix":"NXGN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"NexPoint Residential Trust, Inc.","suffix":"NXRT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"NextCure, Inc.","suffix":"NXTC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"New York Mortgage Trust, Inc.","suffix":"NYMT","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Empire Resorts, Inc.","suffix":"NYNY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Oasis Petroleum, Inc.","suffix":"OAS","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Origin Bancorp, Inc.","suffix":"OBNK","tasksCount":3,"isActive":false,"type":"company"},
{"name":"OceanFirst Financial Corp.","suffix":"OCFC","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Ocwen Financial Corp.","suffix":"OCN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ocular Therapeutix, Inc.","suffix":"OCUL","tasksCount":1,"isActive":true,"type":"company"},
{"name":"OncoCyte Corp.","suffix":"OCX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Oil-Dri Corp. of America","suffix":"ODC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Office Depot, Inc.","suffix":"ODP","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Odonate Therapeutics, Inc.","suffix":"ODT","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Orion Engineered Carbons SA","suffix":"OEC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"OFG Bancorp","suffix":"OFG","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Orthofix Medical, Inc.","suffix":"OFIX","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Omega Flex, Inc.","suffix":"OFLX","tasksCount":5,"isActive":false,"type":"company"},
{"name":"ONE Gas, Inc.","suffix":"OGS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Oceaneering International, Inc.","suffix":"OII","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Oil States International, Inc.","suffix":"OIS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Old Line Bancshares, Inc.","suffix":"OLBK","tasksCount":1,"isActive":true,"type":"company"},
{"name":"One Liberty Properties, Inc.","suffix":"OLP","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Omnicell, Inc.","suffix":"OMCL","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Omeros Corp.","suffix":"OMER","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Owens & Minor, Inc.","suffix":"OMI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"OMNOVA Solutions, Inc.","suffix":"OMN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Old National Bancorp","suffix":"ONB","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Spark Therapeutics, Inc.","suffix":"ONCE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"On Deck Capital, Inc.","suffix":"ONDK","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ooma, Inc.","suffix":"OOMA","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Opus Bank","suffix":"OPB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"OP Bancorp","suffix":"OPBK","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Office Properties Income Trust","suffix":"OPI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"OPKO Health, Inc.","suffix":"OPK","tasksCount":3,"isActive":true,"type":"company"},
{"name":"OptimizeRx Corp.","suffix":"OPRX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"OptiNose, Inc.","suffix":"OPTN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Oppenheimer Holdings, Inc.","suffix":"OPY","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Ormat Technologies, Inc.","suffix":"ORA","tasksCount":1,"isActive":false,"type":"company"},
{"name":"ORBCOMM, Inc.","suffix":"ORBC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Orchid Island Capital, Inc.","suffix":"ORC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Organogenesis Holdings, Inc.","suffix":"ORGO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Oritani Financial Corp.","suffix":"ORIT","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Orrstown Financial Services, Inc.","suffix":"ORRF","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Old Second Bancorp, Inc.","suffix":"OSBC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Overseas Shipholding Group, Inc.","suffix":"OSG","tasksCount":2,"isActive":true,"type":"company"},
{"name":"OSI Systems, Inc.","suffix":"OSIS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Osmotica Pharmaceuticals Plc","suffix":"OSMT","tasksCount":5,"isActive":false,"type":"company"},
{"name":"OneSpan, Inc.","suffix":"OSPN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Overstock.com, Inc.","suffix":"OSTK","tasksCount":4,"isActive":true,"type":"company"},
{"name":"OraSure Technologies, Inc.","suffix":"OSUR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"OneSpaWorld Holdings Ltd.","suffix":"OSW","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Otter Tail Corp.","suffix":"OTTR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ohio Valley Banc Corp.","suffix":"OVBC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Oak Valley Bancorp","suffix":"OVLY","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Oxford Industries, Inc.","suffix":"OXM","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Pacific Biosciences of California, Inc.","suffix":"PACB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Pacific Drilling SA","suffix":"PACD","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Phibro Animal Health Corp.","suffix":"PAHC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"PAR Technology Corp.","suffix":"PAR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Par Pacific Holdings, Inc.","suffix":"PARR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Patrick Industries, Inc.","suffix":"PATK","tasksCount":1,"isActive":true,"type":"company"},
{"name":"PaySign, Inc.","suffix":"PAYS","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Pioneer Bancorp, Inc. (New York)","suffix":"PBFS","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Prestige Consumer Healthcare, Inc.","suffix":"PBH","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Pitney Bowes, Inc.","suffix":"PBI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Prudential Bancorp, Inc.","suffix":"PBIP","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Potbelly Corp.","suffix":"PBPB","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Puma Biotechnology, Inc.","suffix":"PBYI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"PCB Bancorp","suffix":"PCB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"PotlatchDeltic Corp.","suffix":"PCH","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Pacira Biosciences, Inc.","suffix":"PCRX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"PCSB Financial Corp.","suffix":"PCSB","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Pure Cycle Corp.","suffix":"PCYO","tasksCount":2,"isActive":false,"type":"company"},
{"name":"PDC Energy, Inc.","suffix":"PDCE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Patterson Cos., Inc.","suffix":"PDCO","tasksCount":1,"isActive":false,"type":"company"},
{"name":"PDF Solutions, Inc.","suffix":"PDFS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"PDL Community Bancorp","suffix":"PDLB","tasksCount":3,"isActive":false,"type":"company"},
{"name":"PDL BioPharma, Inc.","suffix":"PDLI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Piedmont Office Realty Trust, Inc.","suffix":"PDM","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Pebblebrook Hotel Trust","suffix":"PEB","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Peoples Bancorp of North Carolina, Inc.","suffix":"PEBK","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Peoples Bancorp, Inc. (Ohio)","suffix":"PEBO","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Pattern Energy Group, Inc.","suffix":"PEGI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Pennsylvania Real Estate Investment Trust","suffix":"PEI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Penn National Gaming, Inc.","suffix":"PENN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"PetIQ, Inc.","suffix":"PETQ","tasksCount":0,"isActive":true,"type":"company"},
{"name":"PetMed Express, Inc.","suffix":"PETS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Preferred Bank (California)","suffix":"PFBC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Premier Financial Bancorp, Inc.","suffix":"PFBI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Performance Food Group Co.","suffix":"PFGC","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Peoples Financial Services Corp.","suffix":"PFIS","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Pfênex, Inc.","suffix":"PFNX","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Provident Financial Services, Inc.","suffix":"PFS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"PennyMac Financial Services, Inc.","suffix":"PFSI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Peapack-Gladstone Financial Corp.","suffix":"PGC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Progenics Pharmaceuticals, Inc.","suffix":"PGNX","tasksCount":0,"isActive":true,"type":"company"},
{"name":"PGT Innovations, Inc.","suffix":"PGTI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"PhaseBio Pharmaceuticals, Inc.","suffix":"PHAS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Phreesia, Inc.","suffix":"PHR","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Phunware, Inc.","suffix":"PHUN","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Panhandle Oil & Gas, Inc.","suffix":"PHX","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Impinj, Inc.","suffix":"PI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"PICO Holdings, Inc.","suffix":"PICO","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Pieris Pharmaceuticals, Inc.","suffix":"PIRS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Piper Jaffray Cos.","suffix":"PJC","tasksCount":3,"isActive":true,"type":"company"},
{"name":"PJT Partners, Inc.","suffix":"PJT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Parke Bancorp, Inc.","suffix":"PKBK","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Parker Drilling Co.","suffix":"PKD","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Park Aerospace Corp.","suffix":"PKE","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Park-Ohio Holdings Corp.","suffix":"PKOH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Photronics, Inc.","suffix":"PLAB","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Dave & Buster's Entertainment, Inc.","suffix":"PLAY","tasksCount":1,"isActive":true,"type":"company"},
{"name":"The Children's Place, Inc.","suffix":"PLCE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Palomar Holdings, Inc.","suffix":"PLMR","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Douglas Dynamics, Inc.","suffix":"PLOW","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Preformed Line Products Co.","suffix":"PLPC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Pulse Biosciences, Inc.","suffix":"PLSE","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Plantronics, Inc.","suffix":"PLT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Plug Power, Inc.","suffix":"PLUG","tasksCount":0,"isActive":true,"type":"company"},
{"name":"ePlus, Inc.","suffix":"PLUS","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Plexus Corp.","suffix":"PLXS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Pacific Mercantile Bancorp","suffix":"PMBC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"PennyMac Mortgage Investment Trust","suffix":"PMT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"PNM Resources, Inc.","suffix":"PNM","tasksCount":4,"isActive":false,"type":"company"},
{"name":"PrimeEnergy Resources Corp.","suffix":"PNRG","tasksCount":5,"isActive":false,"type":"company"},
{"name":"The Pennant Group, Inc.","suffix":"PNTG","tasksCount":2,"isActive":true,"type":"company"},
{"name":"PolyOne Corp.","suffix":"POL","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Portland General Electric Co.","suffix":"POR","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Power Integrations, Inc.","suffix":"POWI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Powell Industries, Inc.","suffix":"POWL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Pacific Premier Bancorp, Inc.","suffix":"PPBI","tasksCount":5,"isActive":true,"type":"company"},
{"name":"PQ Group Holdings, Inc.","suffix":"PQG","tasksCount":4,"isActive":false,"type":"company"},
{"name":"ProAssurance Corp.","suffix":"PRA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"PRA Group, Inc.","suffix":"PRAA","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Perficient, Inc.","suffix":"PRFT","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Progress Software Corp.","suffix":"PRGS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"PRGX Global, Inc.","suffix":"PRGX","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Primoris Services Corp.","suffix":"PRIM","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Park National Corp.","suffix":"PRK","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Proto Labs, Inc.","suffix":"PRLB","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Primo Water Corp.","suffix":"PRMW","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Principia Biopharma, Inc.","suffix":"PRNB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"PROS Holdings, Inc.","suffix":"PRO","tasksCount":2,"isActive":true,"type":"company"},
{"name":"ProSight Global, Inc.","suffix":"PROS","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Provident Financial Holdings, Inc.","suffix":"PROV","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Purple Innovation, Inc.","suffix":"PRPL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Providence Service Corp.","suffix":"PRSC","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Perspecta, Inc.","suffix":"PRSP","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Prothena Corp. Plc","suffix":"PRTA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Priority Technology Holdings, Inc.","suffix":"PRTH","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Paratek Pharmaceuticals, Inc.","suffix":"PRTK","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Party City Holdco, Inc.","suffix":"PRTY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Prevail Therapeutics, Inc.","suffix":"PRVL","tasksCount":3,"isActive":false,"type":"company"},
{"name":"PS Business Parks, Inc.","suffix":"PSB","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Presidio, Inc.","suffix":"PSDO","tasksCount":4,"isActive":true,"type":"company"},
{"name":"PriceSmart, Inc.","suffix":"PSMT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Parsons Corp.","suffix":"PSN","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Personalis, Inc.","suffix":"PSNL","tasksCount":5,"isActive":true,"type":"company"},
{"name":"PTC Therapeutics, Inc.","suffix":"PTCT","tasksCount":4,"isActive":true,"type":"company"},
{"name":"PolarityTE, Inc.","suffix":"PTE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Protagonist Therapeutics, Inc.","suffix":"PTGX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Portola Pharmaceuticals, Inc.","suffix":"PTLA","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Palatin Technologies, Inc.","suffix":"PTN","tasksCount":5,"isActive":true,"type":"company"},
{"name":"P.A.M. Transportation Services, Inc.","suffix":"PTSI","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Protective Insurance Corp.","suffix":"PTVCB","tasksCount":4,"isActive":true,"type":"company"},
{"name":"People's Utah Bancorp","suffix":"PUB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"ProPetro Holding Corp.","suffix":"PUMP","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Penn Virginia Corp.","suffix":"PVAC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Provident Bancorp, Inc. (Massachusetts)","suffix":"PVBC","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Penns Woods Bancorp, Inc.","suffix":"PWOD","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Pyxus International, Inc.","suffix":"PYX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Pzena Investment Management, Inc.","suffix":"PZN","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Papa John's International, Inc.","suffix":"PZZA","tasksCount":2,"isActive":true,"type":"company"},
{"name":"QAD, Inc.","suffix":"QADA","tasksCount":3,"isActive":false,"type":"company"},
{"name":"QCR Holdings, Inc.","suffix":"QCRH","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Quidel Corp.","suffix":"QDEL","tasksCount":1,"isActive":false,"type":"company"},
{"name":"QEP Resources, Inc.","suffix":"QEP","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Qualys, Inc.","suffix":"QLYS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"QuinStreet, Inc.","suffix":"QNST","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Quanterix Corp.","suffix":"QTRX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"QTS Realty Trust, Inc.","suffix":"QTS","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Q2 Holdings, Inc.","suffix":"QTWO","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Quad/Graphics, Inc.","suffix":"QUAD","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Quotient Technology, Inc.","suffix":"QUOT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Rite Aid Corp.","suffix":"RAD","tasksCount":3,"isActive":false,"type":"company"},
{"name":"LiveRamp Holdings, Inc.","suffix":"RAMP","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Ultragenyx Pharmaceutical, Inc.","suffix":"RARE","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Ra Pharmaceuticals, Inc.","suffix":"RARX","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Raven Industries, Inc.","suffix":"RAVN","tasksCount":4,"isActive":false,"type":"company"},
{"name":"RBB Bancorp","suffix":"RBB","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Ribbon Communications, Inc.","suffix":"RBBN","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Republic Bancorp, Inc. (Kentucky)","suffix":"RBCAA","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Reliant Bancorp, Inc.","suffix":"RBNC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Ready Capital Corp.","suffix":"RC","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Rent-A-Center, Inc.","suffix":"RCII","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Rocket Pharmaceuticals, Inc.","suffix":"RCKT","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Rocky Brands, Inc.","suffix":"RCKY","tasksCount":3,"isActive":false,"type":"company"},
{"name":"R1 RCM, Inc.","suffix":"RCM","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Arcus Biosciences, Inc.","suffix":"RCUS","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Redfin Corp.","suffix":"RDFN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Reading International, Inc.","suffix":"RDI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Radian Group Inc.","suffix":"RDN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"RadNet, Inc.","suffix":"RDNT","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Radius Health, Inc.","suffix":"RDUS","tasksCount":5,"isActive":false,"type":"company"},
{"name":"The RealReal, Inc.","suffix":"REAL","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Resources Connection, Inc.","suffix":"RECN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Renewable Energy Group, Inc.","suffix":"REGI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Ring Energy, Inc.","suffix":"REI","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Recro Pharma, Inc.","suffix":"REPH","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Replimune Group, Inc.","suffix":"REPL","tasksCount":2,"isActive":false,"type":"company"},
{"name":"RPC, Inc.","suffix":"RES","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Front Yard Residential Corp.","suffix":"RESI","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Reata Pharmaceuticals, Inc.","suffix":"RETA","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Revlon, Inc.","suffix":"REV","tasksCount":2,"isActive":false,"type":"company"},
{"name":"REV Group, Inc.","suffix":"REVG","tasksCount":4,"isActive":true,"type":"company"},
{"name":"REX American Resources Corp.","suffix":"REX","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Rexford Industrial Realty, Inc.","suffix":"REXR","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Rafael Holdings, Inc.","suffix":"RFL","tasksCount":2,"isActive":true,"type":"company"},
{"name":"RGC Resources, Inc.","suffix":"RGCO","tasksCount":3,"isActive":false,"type":"company"},
{"name":"Repligen Corp.","suffix":"RGEN","tasksCount":1,"isActive":true,"type":"company"},
{"name":"REGENXBIO, Inc.","suffix":"RGNX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Sturm, Ruger & Co., Inc.","suffix":"RGR","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Regis Corp.","suffix":"RGS","tasksCount":1,"isActive":true,"type":"company"},
{"name":"RH","suffix":"RH","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Ryman Hospitality Properties, Inc.","suffix":"RHP","tasksCount":2,"isActive":false,"type":"company"},
{"name":"RCI Hospitality Holdings, Inc.","suffix":"RICK","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Rigel Pharmaceuticals, Inc.","suffix":"RIGL","tasksCount":0,"isActive":true,"type":"company"},
{"name":"B. Riley Financial, Inc.","suffix":"RILY","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Radiant Logistics, Inc.","suffix":"RLGT","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Realogy Holdings Corp.","suffix":"RLGY","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Red Lion Hotels Corp.","suffix":"RLH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"RLI Corp.","suffix":"RLI","tasksCount":3,"isActive":false,"type":"company"},
{"name":"RLJ Lodging Trust","suffix":"RLJ","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Regional Management Corp.","suffix":"RM","tasksCount":2,"isActive":false,"type":"company"},
{"name":"RE/MAX Holdings, Inc.","suffix":"RMAX","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Richmond Mutual Bancorporation, Inc.","suffix":"RMBI","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Rambus, Inc.","suffix":"RMBS","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Rimini Street, Inc.","suffix":"RMNI","tasksCount":4,"isActive":false,"type":"company"},
{"name":"The RMR Group, Inc.","suffix":"RMR","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Rockwell Medical, Inc.","suffix":"RMTI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"RigNet, Inc.","suffix":"RNET","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Renasant Corp.","suffix":"RNST","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Construction Partners, Inc.","suffix":"ROAD","tasksCount":5,"isActive":true,"type":"company"},
{"name":"Roan Resources, Inc.","suffix":"ROAN","tasksCount":5,"isActive":false,"type":"company"},
{"name":"Gibraltar Industries, Inc.","suffix":"ROCK","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Rogers Corp.","suffix":"ROG","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Retail Opportunity Investments Corp.","suffix":"ROIC","tasksCount":5,"isActive":false,"type":"company"},
{"name":"RBC Bearings, Inc.","suffix":"ROLL","tasksCount":0,"isActive":true,"type":"company"},
{"name":"Rosehill Resources, Inc.","suffix":"ROSE","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Rapid7, Inc.","suffix":"RPD","tasksCount":3,"isActive":false,"type":"company"},
{"name":"RPT Realty","suffix":"RPT","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Red River Bancshares, Inc.","suffix":"RRBI","tasksCount":2,"isActive":true,"type":"company"},
{"name":"R.R. Donnelley & Sons Co.","suffix":"RRD","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Red Robin Gourmet Burgers, Inc.","suffix":"RRGB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Red Rock Resorts, Inc.","suffix":"RRR","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Roadrunner Transportation Systems, Inc.","suffix":"RRTS","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Rosetta Stone, Inc.","suffix":"RST","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Rudolph Technologies, Inc.","suffix":"RTEC","tasksCount":1,"isActive":false,"type":"company"},
{"name":"RTI Surgical Holdings, Inc.","suffix":"RTIX","tasksCount":4,"isActive":false,"type":"company"},
{"name":"Retrophin, Inc.","suffix":"RTRX","tasksCount":3,"isActive":true,"type":"company"},
{"name":"RTW Retailwinds, Inc.","suffix":"RTW","tasksCount":4,"isActive":true,"type":"company"},
{"name":"The Rubicon Project, Inc.","suffix":"RUBI","tasksCount":1,"isActive":true,"type":"company"},
{"name":"Rubius Therapeutics, Inc.","suffix":"RUBY","tasksCount":1,"isActive":true,"type":"company"},
{"name":"SunRun, Inc.","suffix":"RUN","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Rush Enterprises, Inc.","suffix":"RUSHA","tasksCount":0,"isActive":false,"type":"company"},
{"name":"Rush Enterprises, Inc.","suffix":"RUSHB","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Ruth's Hospitality Group, Inc.","suffix":"RUTH","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Retail Value, Inc.","suffix":"RVI","tasksCount":3,"isActive":true,"type":"company"},
{"name":"Revance Therapeutics, Inc.","suffix":"RVNC","tasksCount":2,"isActive":false,"type":"company"},
{"name":"Riverview Bancorp, Inc.","suffix":"RVSB","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Redwood Trust, Inc.","suffix":"RWT","tasksCount":2,"isActive":true,"type":"company"},
{"name":"Rexnord Corp.","suffix":"RXN","tasksCount":4,"isActive":true,"type":"company"},
{"name":"Rayonier Advanced Materials, Inc.","suffix":"RYAM","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Ryerson Holding Corp.","suffix":"RYI","tasksCount":1,"isActive":false,"type":"company"},
{"name":"Rhythm Pharmaceuticals, Inc.","suffix":"RYTM​","tasksCount":4,"isActive":false,"type":"company"}
    ]`);
    this.companies.fromJSONArray(a);
    //c.add(new LegalEntity('c'));
    //console.log(d);
    //console.log(c);
  }

  functionalEntities = new FunctionalEntities;

  makeFunctionalEntities(showActiveOnly: boolean){
    this.functionalEntities = new FunctionalEntities();
    this.functionalEntities.fromArray('company',showActiveOnly,this.companies.all_values);
    this.functionalEntities.fromArray('individual',showActiveOnly,this.persons.all_values);
    this.functionalEntities.fromArray('user',showActiveOnly,this.users.all_values);
    this.functionalEntities.fromArray('group',showActiveOnly,this.entityGroups.all_values);
    this.functionalEntities.fromArray('trust',showActiveOnly,this.trusts.all_values);
    this.functionalEntities.fromArray('regulator',showActiveOnly,this.regulators.all_values);
    this.functionalEntities.fromArray('regulation',showActiveOnly,this.regulations.all_values);
    //console.log(this.functionalEntities);
  }

  getFunctionalEntitiesAll(): FunctionalEntities{
    return this.functionalEntities;
  }

  // getFunctionalEntitiesByType(type: number): Entities {
  //   //console.log(type);
  //   if (type == 0) {
  //     return this.getCompanies();
  //   } else if (type == 1) {
  //     //console.log(type,'in');
  //     return this.persons;
  //   } else if (type == 2) {
  //     //console.log(type,'in');
  //     return this.getUsers();
  //   } else if (type == 3) {
  //     return this.getEntityGroups();
  //   } else if (type == 4) {
  //     return this.getTrusts();
  //   } else if (type == 5) {
  //     //console.log(type,'in');
  //     return this.getRegulators();
  //   } else if (type == 6) {
  //     //console.log(type,'in');
  //     return this.getRegulations();
  //   } else if (type == 7) {
  //     //console.log(type,'in');
  //     return this.auditors;
  //   } else {
  //     return new Entities();
  //   }
  // }

  makeCountries() {
    this.countries.add(new Country("Afghanistan").addCity(new City("Baghlan")));
this.countries.add(new Country("Algeria").addCity(new City("Baraki"))
.addCity(new City("Barika"))
.addCity(new City("Batna"))
.addCity(new City("Béchar"))
.addCity(new City("Béjaïa"))
.addCity(new City("Biskra"))
.addCity(new City("Blida"))
.addCity(new City("Bordj Bou Arréridj"))
.addCity(new City("Bordj El Kiffan"))
.addCity(new City("Bou Saâda"))
.addCity(new City("Bouïra")));
this.countries.add(new Country("Angola").addCity(new City("Benguela")));
this.countries.add(new Country("Argentina").addCity(new City("Bahía Blanca"))
.addCity(new City("Bariloche"))
.addCity(new City("Buenos Aires")));
this.countries.add(new Country("Australia").addCity(new City("Ballarat"))
.addCity(new City("Brisbane")));
this.countries.add(new Country("Azerbaijan").addCity(new City("Baku")));
this.countries.add(new Country("Bangladesh").addCity(new City("Barisal"))
.addCity(new City("Bogra")));
this.countries.add(new Country("Belarus").addCity(new City("Babruysk"))
.addCity(new City("Baranovichi"))
.addCity(new City("Barysaw"))
.addCity(new City("Brest, Brest")));
this.countries.add(new Country("Belgium").addCity(new City("Bruges"))
.addCity(new City("Brussels")));
this.countries.add(new Country("Bosnia and Herzegovina").addCity(new City("Banja Luka")));
this.countries.add(new Country("Brazil").addCity(new City("Bacabal"))
.addCity(new City("Bagé"))
.addCity(new City("Balneário Camboriú"))
.addCity(new City("Barbacena"))
.addCity(new City("Barcarena"))
.addCity(new City("Barra Mansa"))
.addCity(new City("Barreiras"))
.addCity(new City("Barretos"))
.addCity(new City("Barueri"))
.addCity(new City("Bauru"))
.addCity(new City("Belém"))
.addCity(new City("Belford Roxo"))
.addCity(new City("Belo Horizonte"))
.addCity(new City("Bento Goncalves"))
.addCity(new City("Betim"))
.addCity(new City("Birigui"))
.addCity(new City("Blumenau"))
.addCity(new City("Boa Vista"))
.addCity(new City("Botucatu"))
.addCity(new City("Bragança"))
.addCity(new City("Bragança Paulista"))
.addCity(new City("Brasília"))
.addCity(new City("Brusque")));
this.countries.add(new Country("Brunei").addCity(new City("Bandar Seri Begawan")));
this.countries.add(new Country("Bulgaria").addCity(new City("Burgas")));
this.countries.add(new Country("Burkina Faso").addCity(new City("Bobo-Dioulasso")));
this.countries.add(new Country("Burundi").addCity(new City("Bujumbura")));
this.countries.add(new Country("Cambodia").addCity(new City("Battambang")));
this.countries.add(new Country("Cameroon").addCity(new City("Bafoussam"))
.addCity(new City("Bamenda")));
this.countries.add(new Country("Canada").addCity(new City("Barrie"))
.addCity(new City("Brampton"))
.addCity(new City("Burlington, Ontario"))
.addCity(new City("Burnaby")));
this.countries.add(new Country("Central African Republic").addCity(new City("Bangui")));
this.countries.add(new Country("China").addCity(new City("Baicheng"))
.addCity(new City("Baise"))
.addCity(new City("Baishan"))
.addCity(new City("Baiyin"))
.addCity(new City("Baoding"))
.addCity(new City("Baoji"))
.addCity(new City("Baoshan"))
.addCity(new City("Baotou"))
.addCity(new City("Bayannur"))
.addCity(new City("Bazhou"))
.addCity(new City("Bei'an"))
.addCity(new City("Beihai"))
.addCity(new City("Beijing"))
.addCity(new City("Beipiao"))
.addCity(new City("Bengbu"))
.addCity(new City("Benxi"))
.addCity(new City("Binzhou"))
.addCity(new City("Bole"))
.addCity(new City("Botou"))
.addCity(new City("Bozhou")));
this.countries.add(new Country("Colombia").addCity(new City("Barrancabermeja"))
.addCity(new City("Barranquilla"))
.addCity(new City("Bello"))
.addCity(new City("Bogota"))
.addCity(new City("Bucaramanga"))
.addCity(new City("Buenaventura")));
this.countries.add(new Country("Cuba").addCity(new City("Bayamo")));
this.countries.add(new Country("Czech Republic").addCity(new City("Brno")));
this.countries.add(new Country("Democratic Republic of the Congo").addCity(new City("Boma"))
.addCity(new City("Bukavu")));
this.countries.add(new Country("Dominican Republic").addCity(new City("Bajos de Haina"))
.addCity(new City("Baní"))
.addCity(new City("Boca Chica"))
.addCity(new City("Bonao")));
this.countries.add(new Country("Egypt").addCity(new City("Banha"))
.addCity(new City("Bani Suwayf")));
this.countries.add(new Country("Ethiopia").addCity(new City("Bahir Dar"))
.addCity(new City("Bishoftu")));
this.countries.add(new Country("France").addCity(new City("Besançon"))
.addCity(new City("Bordeaux"))
.addCity(new City("Boulogne-Billancourt"))
.addCity(new City("Brest, Brittany")));
this.countries.add(new Country("Gambia").addCity(new City("Banjul")));
this.countries.add(new Country("Georgia").addCity(new City("Batumi")));
this.countries.add(new Country("Germany").addCity(new City("Bergisch Gladbach"))
.addCity(new City("Berlin"))
.addCity(new City("Bielefeld"))
.addCity(new City("Bochum"))
.addCity(new City("Bonn"))
.addCity(new City("Bottrop"))
.addCity(new City("Braunschweig"))
.addCity(new City("Bremen"))
.addCity(new City("Bremerhaven")));
this.countries.add(new Country("Guinea-Bissau").addCity(new City("Bissau")));
this.countries.add(new Country("Hungary").addCity(new City("Budapest")));
this.countries.add(new Country("India").addCity(new City("Badlapur"))
.addCity(new City("Bagaha"))
.addCity(new City("Bagalkot"))
.addCity(new City("Bahadurgarh"))
.addCity(new City("Baharampur"))
.addCity(new City("Bahraich"))
.addCity(new City("Baidyabati"))
.addCity(new City("Baleshwar"))
.addCity(new City("Ballia"))
.addCity(new City("Bally, Bally-Jagachha"))
.addCity(new City("Bally, Howrah"))
.addCity(new City("Balurghat"))
.addCity(new City("Banda"))
.addCity(new City("Bangalore"))
.addCity(new City("Bangaon"))
.addCity(new City("Bankura"))
.addCity(new City("Bansberia"))
.addCity(new City("Banswara"))
.addCity(new City("Baran"))
.addCity(new City("Baranagar"))
.addCity(new City("Barasat"))
.addCity(new City("Baraut"))
.addCity(new City("Bardhaman"))
.addCity(new City("Bareilly"))
.addCity(new City("Baripada"))
.addCity(new City("Barnala"))
.addCity(new City("Barrackpur"))
.addCity(new City("Barshi"))
.addCity(new City("Basirhat"))
.addCity(new City("Basti"))
.addCity(new City("Batala"))
.addCity(new City("Bathinda"))
.addCity(new City("Beawar"))
.addCity(new City("Beed"))
.addCity(new City("Begusarai"))
.addCity(new City("Belgaum"))
.addCity(new City("Bellary"))
.addCity(new City("Berhampur"))
.addCity(new City("Bettiah"))
.addCity(new City("Betul"))
.addCity(new City("Bhadrak"))
.addCity(new City("Bhadravati"))
.addCity(new City("Bhadreswar"))
.addCity(new City("Bhagalpur"))
.addCity(new City("Bhalswa Jahangir Pur"))
.addCity(new City("Bharatpur, Rajasthan"))
.addCity(new City("Bharuch"))
.addCity(new City("Bhatpara"))
.addCity(new City("Bhavnagar"))
.addCity(new City("Bhilai"))
.addCity(new City("Bhilwara"))
.addCity(new City("Bhimavaram"))
.addCity(new City("Bhind"))
.addCity(new City("Bhiwadi"))
.addCity(new City("Bhiwandi"))
.addCity(new City("Bhiwani"))
.addCity(new City("Bhopal"))
.addCity(new City("Bhubaneswar"))
.addCity(new City("Bhuj"))
.addCity(new City("Bhusawal"))
.addCity(new City("Bidar"))
.addCity(new City("Bidhannagar"))
.addCity(new City("Bihar Sharif"))
.addCity(new City("Bijapur"))
.addCity(new City("Bikaner"))
.addCity(new City("Bilaspur"))
.addCity(new City("Bokaro Steel City"))
.addCity(new City("Botad"))
.addCity(new City("Budaun"))
.addCity(new City("Bulandshahr"))
.addCity(new City("Bundi"))
.addCity(new City("Burari"))
.addCity(new City("Burhanpur"))
.addCity(new City("Buxar")));
this.countries.add(new Country("Indonesia").addCity(new City("Balikpapan"))
.addCity(new City("Banda Aceh"))
.addCity(new City("Bandar Lampung"))
.addCity(new City("Bandung"))
.addCity(new City("Banjarmasin"))
.addCity(new City("Batam"))
.addCity(new City("Batu"))
.addCity(new City("Bekasi"))
.addCity(new City("Bengkulu"))
.addCity(new City("Binjai"))
.addCity(new City("Bitung"))
.addCity(new City("Blitar"))
.addCity(new City("Bogor")));
this.countries.add(new Country("Iran").addCity(new City("Babol"))
.addCity(new City("Bandar Abbas"))
.addCity(new City("Bandar-e Anzali"))
.addCity(new City("Bandar-e Mahshahr"))
.addCity(new City("Behbahan"))
.addCity(new City("Birjand"))
.addCity(new City("Bojnord"))
.addCity(new City("Borujerd"))
.addCity(new City("Bukan"))
.addCity(new City("Bushehr")));
this.countries.add(new Country("Iraq").addCity(new City("Baghdad"))
.addCity(new City("Baqubah"))
.addCity(new City("Bashiqa"))
.addCity(new City("Basra")));
this.countries.add(new Country("Israel").addCity(new City("Bat Yam"))
.addCity(new City("Beersheba"))
.addCity(new City("Beit Shemesh"))
.addCity(new City("Bnei Brak")));
this.countries.add(new Country("Italy").addCity(new City("Bari"))
.addCity(new City("Bergamo"))
.addCity(new City("Bologna"))
.addCity(new City("Bolzano"))
.addCity(new City("Brescia")));
this.countries.add(new Country("Ivory Coast").addCity(new City("Bouaké")));
this.countries.add(new Country("Japan").addCity(new City("Beppu")));
this.countries.add(new Country("Kyrgyzstan").addCity(new City("Bishkek")));
this.countries.add(new Country("Lebanon").addCity(new City("Beirut")));
this.countries.add(new Country("Libya").addCity(new City("Benghazi")));
this.countries.add(new Country("Malawi").addCity(new City("Blantyre")));
this.countries.add(new Country("Malaysia").addCity(new City("Batu Pahat"))
.addCity(new City("Bintulu")));
this.countries.add(new Country("Mali").addCity(new City("Bamako")));
this.countries.add(new Country("Mauritius").addCity(new City("Beau-Bassin Rose-Hill")));
this.countries.add(new Country("Mexico").addCity(new City("Benito Juárez")));
this.countries.add(new Country("Moldova").addCity(new City("Bălți")));
this.countries.add(new Country("Morocco").addCity(new City("Beni Mellal"))
.addCity(new City("Berkane"))
.addCity(new City("Berrechid")));
this.countries.add(new Country("Mozambique").addCity(new City("Beira")));
this.countries.add(new Country("Myanmar").addCity(new City("Bago")));
this.countries.add(new Country("Nepal").addCity(new City("Bharatpur, Chitwan"))
.addCity(new City("Bhimdatta"))
.addCity(new City("Biratnagar"))
.addCity(new City("Birgunj"))
.addCity(new City("Butwal")));
this.countries.add(new Country("Netherlands").addCity(new City("Breda")));
this.countries.add(new Country("Norway").addCity(new City("Bergen")));
this.countries.add(new Country("Oman").addCity(new City("Barka"))
.addCity(new City("Bawshar")));
this.countries.add(new Country("Pakistan").addCity(new City("Bahawalnagar"))
.addCity(new City("Bahawalpur"))
.addCity(new City("Bhalwal"))
.addCity(new City("Burewala")));
this.countries.add(new Country("Philippines").addCity(new City("Bacolod"))
.addCity(new City("Bacoor"))
.addCity(new City("Bago"))
.addCity(new City("Baguio"))
.addCity(new City("Baliuag"))
.addCity(new City("Batangas City"))
.addCity(new City("Bayambang"))
.addCity(new City("Bayawan"))
.addCity(new City("Baybay"))
.addCity(new City("Biñan"))
.addCity(new City("Binangonan"))
.addCity(new City("Bocaue"))
.addCity(new City("Bongao"))
.addCity(new City("Bulan"))
.addCity(new City("Butuan")));
this.countries.add(new Country("Poland").addCity(new City("Białystok"))
.addCity(new City("Bielsko-Biała"))
.addCity(new City("Bydgoszcz"))
.addCity(new City("Bytom")));
this.countries.add(new Country("Portugal").addCity(new City("Braga")));
this.countries.add(new Country("Puerto Rico").addCity(new City("Bayamón")));
this.countries.add(new Country("Republic of the Congo").addCity(new City("Brazzaville")));
this.countries.add(new Country("Romania").addCity(new City("Bacău"))
.addCity(new City("Baia Mare"))
.addCity(new City("Botoșani"))
.addCity(new City("Brăila"))
.addCity(new City("Brașov"))
.addCity(new City("Bucharest"))
.addCity(new City("Buzău")));
this.countries.add(new Country("Russia").addCity(new City("Balakovo"))
.addCity(new City("Balashikha"))
.addCity(new City("Barnaul"))
.addCity(new City("Bataysk"))
.addCity(new City("Belgorod"))
.addCity(new City("Berezniki"))
.addCity(new City("Biysk"))
.addCity(new City("Blagoveshchensk"))
.addCity(new City("Bratsk"))
.addCity(new City("Bryansk")));
this.countries.add(new Country("Saudi Arabia").addCity(new City("Buraidah")));
this.countries.add(new Country("Serbia").addCity(new City("Belgrade")));
this.countries.add(new Country("Sierra Leone").addCity(new City("Bo")));
this.countries.add(new Country("Slovakia").addCity(new City("Bratislava")));
this.countries.add(new Country("Somalia").addCity(new City("Baidoa"))
.addCity(new City("Berbera"))
.addCity(new City("Borama"))
.addCity(new City("Bosaso"))
.addCity(new City("Burao")));
this.countries.add(new Country("South Africa").addCity(new City("Benoni"))
.addCity(new City("Bloemfontein"))
.addCity(new City("Boksburg"))
.addCity(new City("Botshabelo"))
.addCity(new City("Pretoria"))
.addCity(new City("Johannesburg")));
this.countries.add(new Country("South Korea").addCity(new City("Bucheon"))
.addCity(new City("Busan")));
this.countries.add(new Country("Spain").addCity(new City("Badajoz"))
.addCity(new City("Badalona"))
.addCity(new City("Barakaldo"))
.addCity(new City("Barcelona"))
.addCity(new City("Bilbao"))
.addCity(new City("Burgos")));
this.countries.add(new Country("Switzerland").addCity(new City("Basel"))
.addCity(new City("Bern")));
this.countries.add(new Country("Thailand").addCity(new City("Bangkok")));
this.countries.add(new Country("Tunisia").addCity(new City("Bizerte")));
this.countries.add(new Country("Turkey").addCity(new City("Balıkesir"))
.addCity(new City("Bandırma"))
.addCity(new City("Batman"))
.addCity(new City("Bolu"))
.addCity(new City("Bursa")));
this.countries.add(new Country("Ukraine").addCity(new City("Berdyansk"))
.addCity(new City("Bila Tserkva")));
this.countries.add(new Country("United Kingdom").addCity(new City("Belfast"))
.addCity(new City("Birmingham"))
.addCity(new City("Blackburn"))
.addCity(new City("Blackpool"))
.addCity(new City("Bolton"))
.addCity(new City("Bournemouth"))
.addCity(new City("Bradford"))
.addCity(new City("Brighton"))
.addCity(new City("Bristol")));
this.countries.add(new Country("United States").addCity(new City("Bakersfield"))
.addCity(new City("Baltimore"))
.addCity(new City("Baton Rouge"))
.addCity(new City("Beaumont"))
.addCity(new City("Bellevue"))
.addCity(new City("Berkeley"))
.addCity(new City("Billings"))
.addCity(new City("Birmingham, Alabama"))
.addCity(new City("Boise"))
.addCity(new City("Boston"))
.addCity(new City("Boulder"))
.addCity(new City("Bridgeport"))
.addCity(new City("Brownsville"))
.addCity(new City("Buffalo"))
.addCity(new City("Burbank")));
this.countries.add(new Country("Uzbekistan").addCity(new City("Bukhara")));
this.countries.add(new Country("Venezuela").addCity(new City("Barcelona, Anzoátegui"))
.addCity(new City("Barinas"))
.addCity(new City("Barquisimeto"))
.addCity(new City("Baruta")));
this.countries.add(new Country("Vietnam").addCity(new City("Buôn Ma Thuột")));
this.countries.add(new Country("Zimbabwe").addCity(new City("Bulawayo")));

  }

  getCompanies(){
    return this.companies;
  }

  //defaults object?
  getDefault(key: string): any{
    let r = 0;
    if (key=='countryKey') r = 70;
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

  regulations = new Entities()
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

  trusts = new Entities()
    .add(new LegalEntity('Northern Trust').set('suffix', 'NTH'))
    .add(new LegalEntity('BEE Trust').set('suffix', 'BEET'));
  getTrusts(): Entities {
    return this.trusts;
  }

  companies = new LegalEntities();
  // companiesArray = new Companies();


  

  // makeCompanyEntities(){
  //   this.companies
  // .add(new LegalEntity("Aaron's, Inc.").set('tasksCount', 2).set('suffix', 'AAN').set('isActive', true))
  // .add(new LegalEntity("Applied Optoelectronics, Inc.").set('tasksCount', 3).set('suffix', 'AAOI').set('isActive', false))
  // .add(new LegalEntity("AAON, Inc.").set('tasksCount', 4).set('suffix', 'AAON').set('isActive', false))
  // .add(new LegalEntity("American Assets Trust, Inc.").set('tasksCount', 2).set('suffix', 'AAT').set('isActive', false));
  // }

  // getCompaniesArray(): Companies {
  //   return this.companies;
  // }

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

  auditors = new Entities()
    .add(new LegalEntity('Internal'))
    .add(new LegalEntity('PWC'));

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
    //console.log(this.persons);
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
