import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DataJsonModule {}

export const jsonIndustries = `[
  {"key":"0","name":"Banking"},
  {"key":"1","name":"Asset Management"},
  {"key":"2","name":"Property"}
  ]`;
  

export const jsonSecretariats = `[
  {"key":"0","name":"Internal"},
  {"key":"1","name":"PWC"}
  ]`;
  

export const jsonAuditors = `[
  {"key":"0","name":"KPMG"},
  {"key":"1","name":"PWC"},
  {"key":"2","name":"Deloitte"}
  ]`;
  

export const jsonContactPreferences = `[
  {"key":"0","name":"Email"},
  {"key":"1","name":"Call"},
  {"key":"2","name":"Text"}
  ]`;
  

export const jsonTaskTypes = `[
  {"key":"0","name":"Create Company"},
  {"key":"1","name":"Amend Company"}
  ]`;
  

export const jsonTaskStatus = `[
  {"key":"0","name":"Doing"},
  {"key":"1","name":"Done"}
  ]`;
  

export const jsonYesNo = `[
  {"key":"0","name":"Yes"},
  {"key":"1","name":"No"}
  ]`;
  

export const jsonTrusts = `[
  {"key":"0","name":"Northern Trust","suffix":"NTH"},
  {"key":"1","name":"BEE Trust","suffix":"BEET"}
  ]`;
  

export const jsonRegulations = `[
  {"key":"0","name":"Companies Act 71 of 2008","suffix":"FSCA"},
  {"key":"1","name":"Protection of Personal Information Act 4 of 2013","suffix":"POPIA"},
  {"key":"2","name":"Trust Property Control Act 57 of 1988","suffix":"TPCA"}
  ]`;
  

export const jsonRegulators = `[
  {"key":"0","name":"Financial Services Conduct Authority","suffix":"FSCA"},
  {"key":"1","name":"South Africian Reserve Bank","suffix":"SARB"}
  ]`;
  
  

export const jsonEntityStatusTiers = `[
  {"key":"0","name":"Air"},
  {"key":"1","name":"Water"},
  {"key":"2","name":"Earth"},
  {"key":"3","name":"Fire"}
  ]`;
  

export const jsonAccountingTiers = `[
  {"key":"0","name":"Top"},
  {"key":"1","name":"Middle"},
  {"key":"2","name":"Low"}
  ]`;
  

export const jsonAccountingClasses = `[
  {"key":"0","name":"Accounted"},
  {"key":"1","name":"Not Accounted"}
  ]`;
  

export const jsonBusinessAreas = `[
  {"key":"0","name":"Finance"},
  {"key":"1","name":"Property"},
  {"key":"2","name":"Retail"}
  ]`;
  

export const jsonUsers = `[
  {"key":"0","firstName":"Vlad","surname":"Anuchin"},
  {"key":"1","firstName":"Alex","surname":"Voznesenskey"},
  {"key":"2","firstName":"Ulrich","surname":"Kurchner"},
  {"key":"3","firstName":"Samantha","surname":"Rajagopaul"},
  {"key":"4","firstName":"Lourika","surname":"Stander"}
  ]`;

export const jsonCities = `[
  {"key":"0","countryKey":"29","name":"Gaborone"},
  {"key":"1","countryKey":"88","name":"Accra"},
  {"key":"2","countryKey":"122","name":"Nairobi"},
  {"key":"3","countryKey":"146","name":"Port Louis"},
  {"key":"4","countryKey":"157","name":"Maputo"},
  {"key":"5","countryKey":"159","name":"Windhoek"},
  {"key":"6","countryKey":"169","name":"Lagos"},
  {"key":"7","countryKey":"212","name":"Victoria"},
  {"key":"8","countryKey":"221","name":"Johannesburg"},
  {"key":"9","countryKey":"240","name":"Dar es Salaam"},
  {"key":"10","countryKey":"253","name":"Kampala"},
  {"key":"11","countryKey":"258","name":"London"},
  {"key":"12","countryKey":"262","name":"New York City"},
  {"key":"13","countryKey":"274","name":"Lusaka"},
  {"key":"14","countryKey":"29","name":"Francistown"},
  {"key":"15","countryKey":"88","name":"Kumasi"},
  {"key":"16","countryKey":"122","name":"Mombasa"},
  {"key":"17","countryKey":"146","name":"Beau Bassin-Rose Hill"},
  {"key":"18","countryKey":"157","name":"Matola"},
  {"key":"19","countryKey":"159","name":"Rundu"},
  {"key":"20","countryKey":"169","name":"Kano"},
  {"key":"21","countryKey":"212","name":"Anse Boileau"},
  {"key":"22","countryKey":"221","name":"Cape Town"},
  {"key":"23","countryKey":"240","name":"Mwanza"},
  {"key":"24","countryKey":"253","name":"Nansana"},
  {"key":"25","countryKey":"258","name":"Birmingham"},
  {"key":"26","countryKey":"262","name":"Los Angeles"},
  {"key":"27","countryKey":"274","name":"Kitwe"}
  ]`;

export const jsonPortfolios = `[
  {"key":"0","name":"- All -"},
  {"key":"13","name":"Botswana"}
  {"key":"1","name":"Ghana"}, 
  {"key":"2","name":"Kenya"}, 
  {"key":"3","name":"Mauritius"}, 
  {"key":"4","name":"Mozambique"}, 
  {"key":"5","name":"Namibia"}, 
  {"key":"6","name":"Nigeria"}, 
  {"key":"7","name":"Seychelles"}, 
  {"key":"8","name":"South Africa"}, 
  {"key":"9","name":"Tanzania"}, 
  {"key":"10","name":"Uganda"}, 
  {"key":"13","name":"Zambia"},
]`;

export const jsonCountriesWithTasks = `[
  {"key":"0","name":"Botswana"},
  {"key":"1","name":"Ghana"}, 
  {"key":"2","name":"Kenya"}, 
  {"key":"3","name":"Mauritius"}, 
  {"key":"4","name":"Mozambique"}, 
  {"key":"5","name":"Namibia"}, 
  {"key":"6","name":"Nigeria"}, 
  {"key":"7","name":"Seychelles"}, 
  {"key":"8","name":"South Africa"}, 
  {"key":"9","name":"Tanzania"}, 
  {"key":"10","name":"Uganda"}, 
  {"key":"13","name":"Zambia"}
]`;

export const jsonCountries = `[
  {"key":"0","name":"Botswana"},
  {"key":"1","name":"Ghana"}, 
  {"key":"2","name":"Kenya"}, 
  {"key":"3","name":"Mauritius"}, 
  {"key":"4","name":"Mozambique"}, 
  {"key":"5","name":"Namibia"}, 
  {"key":"6","name":"Nigeria"}, 
  {"key":"7","name":"Seychelles"}, 
  {"key":"8","name":"South Africa"}, 
  {"key":"9","name":"Tanzania"}, 
  {"key":"10","name":"Uganda"}, 
  {"key":"11","name":"United Kingdom of Great Britain"},
  {"key":"12","name":"United States of America"},
  {"key":"13","name":"Zambia"}
]`;

export const jsonFiles = `[
  {"key":"0","fileName":"moi.pdf","name":"MOI","description":""},
  {"key":"1","fileName":"res.pdf","name":"Resolution 1","description":"second file"},
  {"key":"2","fileName":"res.pdf","name":"Resolution 2","description":"third file"},
  {"key":"3","fileName":"moi.pdf","name":"MOI 1","description":""},
  {"key":"4","fileName":"res.pdf","name":"Resolution 3","description":"second file"},
  {"key":"5","fileName":"res.pdf","name":"Resolution 4","description":"third file"},
  {"key":"6","fileName":"moi.pdf","name":"MOI 2","description":""}
]`;

export const jsonTemplates = `[
  {"key":"0","fileName":"moi.pdf","name":"CoR14","description":"Register"},
  {"key":"1","fileName":"res.pdf","name":"CoR15","description":"Appoint"},
  {"key":"2","fileName":"res.pdf","name":"CoR16","description":"Share Issue"},
  {"key":"3","fileName":"moi.pdf","name":"CoR17","description":"Resign"},
  {"key":"4","fileName":"res.pdf","name":"CoR18","description":"Rename"},
  {"key":"5","fileName":"res.pdf","name":"CoR19","description":"Deregister"},
  {"key":"6","fileName":"moi.pdf","name":"CoR20","description":"Move Address"}
]`;

export const jsonAttendees = `[
  {"key":"0","surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true,"type":"individual","attended":false},
  {"key":"1","surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true,"type":"individual","attended":true},
  {"key":"2","surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false,"type":"individual","attended":true},
  {"key":"3","surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true,"type":"individual","attended":false},
  {"key":"4","surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true,"type":"individual","attended":true}
]`;

export const jsonMeetings = `[
  {"key":"0","dateTime":"2020-05-12 12:30","name":"Introduction","description":"Roles and Responsibilities"},
  {"key":"1","dateTime":"2020-06-12","name":"BRD","description":"Business Requirement Document"},
  {"key":"2","dateTime":"2020-07-12","name":"Approvals","description":"Committee approvals"},
  {"key":"3","dateTime":"2020-08-12","name":"POC","description":"Proof of Concept"},
  {"key":"4","dateTime":"2020-09-12","name":"POC Approvals","description":"POC approvals and comments"},
  {"key":"5","dateTime":"2020-10-12","name":"Version 1 Deployment","description":"First deployment and experience"},
  {"key":"6","dateTime":"2020-11-12","name":"Testing","description":"User testing"}
]`;

export const jsonReports = `[
  {"key":"0","dateTime":"2020-05-12 12:30","name":"Organogram","description":"Structure of holdings"},
  {"key":"1","dateTime":"2020-06-12","name":"Regisry","description":"Directors registry"},
  {"key":"2","dateTime":"2020-07-12","name":"CIPC 14","description":"CIPC form form..."},
  {"key":"3","dateTime":"2020-08-12","name":"CIPC 15","description":"CIPC form form..."},
  {"key":"4","dateTime":"2020-09-12","name":"CIPC 39","description":"CIPC form form..."}
]`;

export const jsonCompanyStatus = `[
  {"key":"0","name":"Active"},
  {"key":"1","name":"Nontrading"},
  {"key":"2","name":"Dormant, passively trading"},
  {"key":"3","name":"Deregistered"}
]`;

export const jsonDivisions = `[
  {"key":"0","name":"Corporate Investment Banking"},
  {"key":"1","name":"Retail and Business Banking"},
  {"key":"2","name":"Enterprise function"},
  {"key":"3","name":"Absa Regional Operations"},
  {"key":"4","name":"AFS Group"}
]`;

export const jsonDashboards = `[
  {"key":"0","name":"Dashboard","tasksCount":28,"isActive":true},
  {"key":"1","name":"Search","tasksCount":20,"isActive":true},
  {"key":"2","name":"Company","tasksCount":13,"isActive":true},
  {"key":"3","name":"Individual","tasksCount":12,"isActive":true},
  {"key":"4","name":"User","tasksCount":17,"isActive":true},
  {"key":"5","name":"Portfolio","tasksCount": 25,"isActive":true},
  {"key":"6","name":"Trust", "tasksCount": 0,"isActive":true},
  {"key":"7","name":"Regulator","tasksCount": 0,"isActive":true},
  {"key":"8","name":"Regulation","tasksCount": 0,"isActive":true},
  {"key":"9","name":"Auditor","tasksCount": 3,"isActive":true},
  {"key":"10","name":"Secretariat","tasksCount": 0,"isActive":true},
  {"key":"11","name":"Template","tasksCount": 0,"isActive":true},
  {"key":"12","name":"Setting","tasksCount": 0,"isActive":true}
]`;

export const jsonDashboardsPlural = `[
  {"key":"0","name":"Dashboard","tasksCount":28,"isActive":true},
  {"key":"1","name":"Search","tasksCount":20,"isActive":true},
  {"key":"2","name":"Companies","tasksCount":13,"isActive":true},
  {"key":"3","name":"Individuals","tasksCount":12,"isActive":true},
  {"key":"4","name":"Users","tasksCount":17,"isActive":true},
  {"key":"5","name":"Portfolios","tasksCount": 25,"isActive":true},
  {"key":"6","name":"Trusts", "tasksCount": 0,"isActive":true},
  {"key":"7","name":"Regulators","tasksCount": 0,"isActive":true},
  {"key":"8","name":"Regulations","tasksCount": 0,"isActive":true},
  {"key":"9","name":"Auditors","tasksCount": 3,"isActive":true},
  {"key":"10","name":"Secretariats","tasksCount": 0,"isActive":true},
  {"key":"11","name":"Templates","tasksCount": 0,"isActive":true},
  {"key":"12","name":"Settings","tasksCount": 0,"isActive":true}
]`;

export const jsonMonths = `[
  {"key":"0","name":"01"},
  {"key":"1","name":"02"},
  {"key":"2","name":"03"},
  {"key":"3","name":"04"},
  {"key":"4","name":"05"},
  {"key":"5","name":"06"},
  {"key":"6","name":"07"},
  {"key":"7","name":"08"},
  {"key":"8","name":"09"},
  {"key":"9","name":"10"},
  {"key":"10","name":"11"},
  {"key":"11","name":"12"}
]`;

export const jsonEntityTypes = `[
  {"key":"0","name":"Company"},
  {"key":"1","name":"Individual"},
  {"key":"2","name":"User"},
  {"key":"3","name":"Portfolio"},
  {"key":"4","name":"Trust"},
  {"key":"5","name":"Regulator"},
  {"key":"6","name":"Regulation"},
  {"key":"7","name":"Auditor"},
  {"key":"8","name":"Secretariat"}
]`;

export const jsonEntityTypesPlural = `[
  {"key":"0","name":"Companies"},
  {"key":"1","name":"Individuals"},
  {"key":"2","key":"","name":"Users"},
  {"key":"3","name":"Portfolios"},
  {"key":"4","name":"Trusts"},
  {"key":"5","name":"Regulators"},
  {"key":"6","name":"Regulations"},
  {"key":"7","name":"Auditors"},
  {"key":"8","name":"Secretariats"}
]`;

export const jsonPeriods = `[
  {"key":"0","name":"Daily"},
  {"key":"1","name":"Weekly"},
  {"key":"2","name":"Monthly"},
  {"key":"3","name":"Quarterly"},
  {"key":"4","name":"Annualy"}
]`;

export const jsonIndividuals = `[
  {"key":"0","countryKey":"3","surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":"1","countryKey":"11","surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":"2","countryKey":"2","surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false,"type":"individual"},
  {"key":"3","countryKey":"6","surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":"4","countryKey":"4","surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":"5","countryKey":"4","surname":"CARON","firstName":"ALEXANDRE","suffix":"Canada East","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":"6","countryKey":"11","surname":"CHALFUN","firstName":"PABLO","suffix":"South America","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":"7","countryKey":"11","surname":"COLLINS","firstName":"LOGAN","suffix":"South Central","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":"8","countryKey":"12","surname":"COLTEY","firstName":"JOHN","suffix":"South East","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":"9","countryKey":"2","surname":"DUNNE","firstName":"ROYCE","suffix":"Australasia","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"10","countryKey":"12","surname":"ENDERTON","firstName":"JARED","suffix":"South West","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":"11","countryKey":"10","surname":"ESSLINGER","firstName":"LUKAS","suffix":"Europe South","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":"12","countryKey":"2","surname":"FIKOWSKI","firstName":"BRENT","suffix":"Canada West","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"13","countryKey":"8","surname":"FRASER","firstName":"MATHEW","suffix":"Central East","tasksCount":3,"isActive":false,"type":"individual"},
  {"key":"14","countryKey":"1","surname":"GAMBOA","firstName":"ROGELIO","suffix":"South Central","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":"15","countryKey":"12","surname":"GEORGES","firstName":"WILLY","suffix":"Europe South","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"16","countryKey":"7","surname":"GROVE","firstName":"ZEKE","suffix":"Australasia","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"17","countryKey":"7","surname":"GUÐMUNDSSON","firstName":"BJÖRGVIN KARL","suffix":"Europe North","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":"18","countryKey":"2","surname":"HELBIG","firstName":"ETHAN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":"19","countryKey":"2","surname":"HÖGBERG","firstName":"LUKAS","suffix":"Europe North","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":"20","countryKey":"3","surname":"JONES","firstName":"MARQUAN","suffix":"North East","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":"21","countryKey":"12","surname":"KENNEY","firstName":"CRAIG","suffix":"North East","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":"22","countryKey":"4","surname":"KHRENNIKOV","firstName":"ROMAN","suffix":"Europe North","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":"23","countryKey":"10","surname":"LINDER-LEIGHTON","firstName":"DEAN","suffix":"Australasia","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":"24","countryKey":"5","surname":"LUCKETT","firstName":"BRANDON","suffix":"South Central","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":"25","countryKey":"1","surname":"MUNDWILER","firstName":"ADRIAN","suffix":"Europe Central","tasksCount":5,"isActive":true,"type":"individual"},
  {"key":"26","countryKey":"7","surname":"NEWBURY","firstName":"JAMES","suffix":"Australasia","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":"27","countryKey":"2","surname":"OHLSEN","firstName":"NOAH","suffix":"South East","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":"28","countryKey":"6","surname":"PANCHIK","firstName":"SCOTT","suffix":"Central East","tasksCount":4,"isActive":false,"type":"individual"},
  {"key":"29","countryKey":"13","surname":"PANCHIK","firstName":"SAXON","suffix":"Central East","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"30","countryKey":"5","surname":"PAULSON","firstName":"TIM","suffix":"North East","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"31","countryKey":"2","surname":"PORTER","firstName":"KHAN","suffix":"Australasia","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"32","countryKey":"12","surname":"SAGER","firstName":"COLE","suffix":"West Coast","tasksCount":2,"isActive":false,"type":"individual"},
  {"key":"33","countryKey":"9","surname":"SIMMONDS","firstName":"ELLIOT","suffix":"Africa Middle East","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":"34","countryKey":"11","surname":"SMITH","firstName":"BEN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":"35","countryKey":"2","surname":"SMITH","firstName":"ALEC","suffix":"Mid Atlantic","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"36","countryKey":"2","surname":"STEVENSON","firstName":"MITCHEL","suffix":"West Coast","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":"37","countryKey":"3","surname":"SWEENEY","firstName":"SEAN","suffix":"South West","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":"38","countryKey":"3","surname":"URANKAR","firstName":"NICHOLAS","suffix":"Central East","tasksCount":5,"isActive":true,"type":"individual"},
  {"key":"39","countryKey":"9","surname":"VELLNER","firstName":"PATRICK","suffix":"Canada East","tasksCount":1,"isActive":false,"type":"individual"}
  ]`;

export const jsonCompanies = `[
    {"key":"0","countryKey":"10","name":"Aaron's, Inc.","suffix":"AAN","tasksCount":0,"isActive":false,"type":"company","countryKey":"0"},
    {"key":"1","countryKey":"8","name":"Applied Optoelectronics, Inc.","suffix":"AAOI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"2","countryKey":"3","name":"AAON, Inc.","suffix":"AAON","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"3","countryKey":"12","name":"American Assets Trust, Inc.","suffix":"AAT","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"4","countryKey":"13","name":"Atlas Air Worldwide Holdings, Inc.","suffix":"AAWW","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"5","countryKey":"9","name":"Axon Enterprise, Inc.","suffix":"AAXN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"6","countryKey":"8","name":"Ameris Bancorp","suffix":"ABCB","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"7","countryKey":"1","name":"Abeona Therapeutics, Inc.","suffix":"ABEO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"8","countryKey":"11","name":"Asbury Automotive Group, Inc.","suffix":"ABG","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"9","countryKey":"4","name":"ABM Industries, Inc.","suffix":"ABM","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"10","countryKey":"3","name":"Allegiance Bancshares, Inc. (Texas)","suffix":"ABTX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"11","countryKey":"4","name":"Associated Capital Group, Inc.","suffix":"AC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"12","countryKey":"11","name":"Arcosa, Inc.","suffix":"ACA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"13","countryKey":"5","name":"ACADIA Pharmaceuticals, Inc.","suffix":"ACAD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"14","countryKey":"5","name":"Atlantic Capital Bancshares, Inc.","suffix":"ACBI","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"15","countryKey":"7","name":"ACCO Brands Corp.","suffix":"ACCO","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"16","countryKey":"8","name":"Acer Therapeutics, Inc.","suffix":"ACER","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"17","countryKey":"10","name":"Achillion Pharmaceuticals, Inc.","suffix":"ACHN","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"18","countryKey":"2","name":"Acacia Communications, Inc.","suffix":"ACIA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"19","countryKey":"9","name":"ACI Worldwide, Inc.","suffix":"ACIW","tasksCount":0,"isActive":true,"type":"company"},
    {"key":"20","countryKey":"8","name":"Axcelis Technologies, Inc.","suffix":"ACLS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"21","countryKey":"6","name":"ACNB Corp.","suffix":"ACNB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"22","countryKey":"6","name":"Acorda Therapeutics, Inc.","suffix":"ACOR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"23","countryKey":"3","name":"Ares Commercial Real Estate Corp.","suffix":"ACRE","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"24","countryKey":"9","name":"Aclaris Therapeutics, Inc.","suffix":"ACRS","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"25","countryKey":"0","name":"AcelRx Pharmaceuticals, Inc.","suffix":"ACRX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"26","countryKey":"1","name":"Acacia Research Corp.","suffix":"ACTG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"27","countryKey":"8","name":"Agree Realty Corp.","suffix":"ADC","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"28","countryKey":"5","name":"Advanced Emissions Solutions, Inc.","suffix":"ADES","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"29","countryKey":"11","name":"ADMA Biologics, Inc.","suffix":"ADMA","tasksCount":1,"isActive":true,"type":"company"},
    {"key":"30","countryKey":"1","name":"Adamas Pharmaceuticals, Inc.","suffix":"ADMS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"31","countryKey":"2","name":"Adient plc","suffix":"ADNT","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"32","countryKey":"13","name":"Aduro BioTech, Inc.","suffix":"ADRO","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"33","countryKey":"4","name":"Advanced Disposal Services, Inc.","suffix":"ADSW","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"34","countryKey":"2","name":"ADTRAN, Inc.","suffix":"ADTN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"35","countryKey":"7","name":"Addus HomeCare Corp.","suffix":"ADUS","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"36","countryKey":"12","name":"Adverum Biotechnologies, Inc.","suffix":"ADVM","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"37","countryKey":"0","name":"Aegion Corp.","suffix":"AEGN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"38","countryKey":"8","name":"Advanced Energy Industries, Inc.","suffix":"AEIS","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"39","countryKey":"11","name":"American Equity Investment Life Holding Co.","suffix":"AEL","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"40","countryKey":"1","name":"American Eagle Outfitters, Inc.","suffix":"AEO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"41","countryKey":"9","name":"Aerie Pharmaceuticals, Inc.","suffix":"AERI","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"42","countryKey":"11","name":"Armstrong Flooring, Inc.","suffix":"AFI","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"43","countryKey":"5","name":"American Finance Trust, Inc.","suffix":"AFIN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"44","countryKey":"2","name":"Affimed NV","suffix":"AFMD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"45","countryKey":"4","name":"AgeX Therapeutics, Inc.","suffix":"AGE","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"46","countryKey":"9","name":"Agenus, Inc.","suffix":"AGEN","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"47","countryKey":"2","name":"Aeglea Biotherapeutics, Inc.","suffix":"AGLE","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"48","countryKey":"0","name":"Federal Agricultural Mortgage Corp.","suffix":"AGM","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"49","countryKey":"8","name":"PlayAGS, Inc.","suffix":"AGS","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"50","countryKey":"9","name":"Argan, Inc.","suffix":"AGX","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"51","countryKey":"11","name":"Agilysys, Inc.","suffix":"AGYS","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"52","countryKey":"2","name":"Armada Hoffler Properties, Inc.","suffix":"AHH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"53","countryKey":"6","name":"Ashford Hospitality Trust, Inc.","suffix":"AHT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"54","countryKey":"11","name":"Arlington Asset Investment Corp.","suffix":"AI","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"55","countryKey":"8","name":"Altra Industrial Motion Corp.","suffix":"AIMC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"56","countryKey":"7","name":"Aimmune Therapeutics, Inc.","suffix":"AIMT","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"57","countryKey":"2","name":"Albany International Corp.","suffix":"AIN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"58","countryKey":"0","name":"AAR Corp.","suffix":"AIR","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"59","countryKey":"3","name":"Airgain, Inc.","suffix":"AIRG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"60","countryKey":"6","name":"Applied Industrial Technologies, Inc.","suffix":"AIT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"61","countryKey":"2","name":"Aerojet Rocketdyne Holdings, Inc.","suffix":"AJRD","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"62","countryKey":"5","name":"Great Ajax Corp.","suffix":"AJX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"63","countryKey":"4","name":"Akebia Therapeutics, Inc.","suffix":"AKBA","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"64","countryKey":"9","name":"Akcea Therapeutics, Inc.","suffix":"AKCA","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"65","countryKey":"12","name":"Acadia Realty Trust","suffix":"AKR","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"66","countryKey":"7","name":"Akero Therapeutics, Inc.","suffix":"AKRO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"67","countryKey":"10","name":"Akorn, Inc.","suffix":"AKRX","tasksCount":1,"isActive":true,"type":"company"},
    {"key":"68","countryKey":"5","name":"AK Steel Holding Corp.","suffix":"AKS","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"69","countryKey":"4","name":"Akoustis Technologies, Inc.","suffix":"AKTS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"70","countryKey":"1","name":"Albireo Pharma, Inc.","suffix":"ALBO","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"71","countryKey":"11","name":"Alico, Inc.","suffix":"ALCO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"72","countryKey":"8","name":"Alder Biopharmaceuticals, Inc.","suffix":"ALDR","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"73","countryKey":"3","name":"Aldeyra Therapeutics, Inc.","suffix":"ALDX","tasksCount":0,"isActive":true,"type":"company"},
    {"key":"74","countryKey":"9","name":"ALLETE, Inc.","suffix":"ALE","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"75","countryKey":"3","name":"Alector, Inc.","suffix":"ALEC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"76","countryKey":"5","name":"Alexander & Baldwin, Inc.","suffix":"ALEX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"77","countryKey":"6","name":"Alamo Group, Inc.","suffix":"ALG","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"78","countryKey":"2","name":"Allegiant Travel Co.","suffix":"ALGT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"79","countryKey":"10","name":"Allakos, Inc.","suffix":"ALLK","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"80","countryKey":"5","name":"Allogene Therapeutics, Inc.","suffix":"ALLO","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"81","countryKey":"5","name":"AstroNova, Inc.","suffix":"ALOT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"82","countryKey":"5","name":"Alarm.com Holdings, Inc.","suffix":"ALRM","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"83","countryKey":"2","name":"Altus Midstream Co.","suffix":"ALTM","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"84","countryKey":"5","name":"Altair Engineering, Inc.","suffix":"ALTR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"85","countryKey":"11","name":"Alexander's, Inc.","suffix":"ALX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"86","countryKey":"10","name":"AMAG Pharmaceuticals, Inc.","suffix":"AMAG","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"87","countryKey":"5","name":"Amalgamated Bank","suffix":"AMAL","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"88","countryKey":"3","name":"Ambarella, Inc.","suffix":"AMBA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"89","countryKey":"7","name":"Ambac Financial Group, Inc.","suffix":"AMBC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"90","countryKey":"5","name":"AMC Entertainment Holdings, Inc.","suffix":"AMC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"91","countryKey":"13","name":"Amedisys, Inc.","suffix":"AMED","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"92","countryKey":"3","name":"Apollo Medical Holdings, Inc.","suffix":"AMEH","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"93","countryKey":"3","name":"AssetMark Financial Holdings, Inc.","suffix":"AMK","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"94","countryKey":"8","name":"Amkor Technology, Inc.","suffix":"AMKR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"95","countryKey":"8","name":"AMN Healthcare Services, Inc.","suffix":"AMN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"96","countryKey":"12","name":"American National Bankshares, Inc. (Virginia)","suffix":"AMNB","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"97","countryKey":"13","name":"Allied Motion Technologies, Inc.","suffix":"AMOT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"98","countryKey":"4","name":"Amphastar Pharmaceuticals, Inc.","suffix":"AMPH","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"99","countryKey":"6","name":"Ameresco, Inc.","suffix":"AMRC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"100","countryKey":"9","name":"Amyris, Inc.","suffix":"AMRS","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"101","countryKey":"13","name":"Amneal Pharmaceuticals, Inc.","suffix":"AMRX","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"102","countryKey":"11","name":"American Superconductor Corp.","suffix":"AMSC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"103","countryKey":"3","name":"AMERISAFE, Inc.","suffix":"AMSF","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"104","countryKey":"10","name":"American Software, Inc.","suffix":"AMSWA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"105","countryKey":"8","name":"Amerant Bancorp, Inc.","suffix":"AMTB","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"106","countryKey":"1","name":"American Woodmark Corp.","suffix":"AMWD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"107","countryKey":"8","name":"AnaptysBio, Inc.","suffix":"ANAB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"108","countryKey":"12","name":"The Andersons, Inc.","suffix":"ANDE","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"109","countryKey":"12","name":"Abercrombie & Fitch Co.","suffix":"ANF","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"110","countryKey":"9","name":"AngioDynamics, Inc.","suffix":"ANGO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"111","countryKey":"7","name":"Anworth Mortgage Asset Corp.","suffix":"ANH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"112","countryKey":"3","name":"Anika Therapeutics, Inc.","suffix":"ANIK","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"113","countryKey":"13","name":"ANI Pharmaceuticals, Inc.","suffix":"ANIP","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"114","countryKey":"9","name":"American Outdoor Brands Corp.","suffix":"AOBC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"115","countryKey":"5","name":"Alpha & Omega Semiconductor Ltd.","suffix":"AOSL","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"116","countryKey":"4","name":"Artisan Partners Asset Management, Inc.","suffix":"APAM","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"117","countryKey":"4","name":"American Public Education, Inc.","suffix":"APEI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"118","countryKey":"7","name":"Apellis Pharmaceuticals, Inc.","suffix":"APLS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"119","countryKey":"8","name":"Apogee Enterprises, Inc.","suffix":"APOG","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"120","countryKey":"9","name":"AppFolio, Inc.","suffix":"APPF","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"121","countryKey":"9","name":"Appian Corp.","suffix":"APPN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"122","countryKey":"3","name":"Digital Turbine, Inc.","suffix":"APPS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"123","countryKey":"3","name":"Preferred Apartment Communities, Inc.","suffix":"APTS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"124","countryKey":"9","name":"Apyx Medical Corp.","suffix":"APYX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"125","countryKey":"12","name":"Evoqua Water Technologies Corp.","suffix":"AQUA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"126","countryKey":"11","name":"American Renal Associates Holdings, Inc.","suffix":"ARA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"127","countryKey":"2","name":"Accuray, Inc.","suffix":"ARAY","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"128","countryKey":"10","name":"ArcBest Corp.","suffix":"ARCB","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"129","countryKey":"3","name":"Arch Coal, Inc.","suffix":"ARCH","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"130","countryKey":"5","name":"Ardelyx, Inc.","suffix":"ARDX","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"131","countryKey":"5","name":"Ares Management Corp.","suffix":"ARES","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"132","countryKey":"1","name":"Argo Group International Holdings Ltd.","suffix":"ARGO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"133","countryKey":"2","name":"Apollo Commercial Real Estate Finance, Inc.","suffix":"ARI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"134","countryKey":"8","name":"American Realty Investors, Inc.","suffix":"ARL","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"135","countryKey":"2","name":"Arlo Technologies, Inc.","suffix":"ARLO","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"136","countryKey":"9","name":"Arena Pharmaceuticals, Inc.","suffix":"ARNA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"137","countryKey":"12","name":"Archrock, Inc.","suffix":"AROC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"138","countryKey":"12","name":"Arrow Financial Corp.","suffix":"AROW","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"139","countryKey":"1","name":"ArQule, Inc.","suffix":"ARQL","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"140","countryKey":"5","name":"ARMOUR Residential REIT, Inc.","suffix":"ARR","tasksCount":4,"isActive":true,"type":"company"},
    {"key":"141","countryKey":"11","name":"Artesian Resources Corp.","suffix":"ARTNA","tasksCount":4,"isActive":true,"type":"company"},
    {"key":"142","countryKey":"9","name":"Arvinas, Inc.","suffix":"ARVN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"143","countryKey":"1","name":"Arrowhead Pharmaceuticals, Inc.","suffix":"ARWR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"144","countryKey":"7","name":"Ardmore Shipping Corp.","suffix":"ASC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"145","countryKey":"2","name":"ASGN, Inc.","suffix":"ASGN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"146","countryKey":"11","name":"Advansix, Inc.","suffix":"ASIX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"147","countryKey":"3","name":"Assembly Biosciences, Inc.","suffix":"ASMB","tasksCount":1,"isActive":true,"type":"company"},
    {"key":"148","countryKey":"5","name":"Ascena Retail Group, Inc.","suffix":"ASNA","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"149","countryKey":"8","name":"Altisource Portfolio Solutions SA","suffix":"ASPS","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"150","countryKey":"4","name":"Assertio Therapeutics, Inc.","suffix":"ASRT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"151","countryKey":"12","name":"Astec Industries, Inc.","suffix":"ASTE","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"152","countryKey":"9","name":"Atlantic Power Corp.","suffix":"AT","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"153","countryKey":"8","name":"Alphatec Holdings, Inc.","suffix":"ATEC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"154","countryKey":"5","name":"A10 Networks, Inc.","suffix":"ATEN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"155","countryKey":"11","name":"Anterix, Inc.","suffix":"ATEX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"156","countryKey":"12","name":"Adtalem Global Education, Inc.","suffix":"ATGE","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"157","countryKey":"10","name":"Athersys, Inc.","suffix":"ATHX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"158","countryKey":"6","name":"Allegheny Technologies, Inc.","suffix":"ATI","tasksCount":4,"isActive":true,"type":"company"},
    {"key":"159","countryKey":"10","name":"Atkore International Group, Inc.","suffix":"ATKR","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"160","countryKey":"9","name":"Ames National Corp.","suffix":"ATLO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"161","countryKey":"10","name":"ATN International, Inc.","suffix":"ATNI","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"162","countryKey":"6","name":"Athenex, Inc.","suffix":"ATNX","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"163","countryKey":"1","name":"Atara Biotherapeutics, Inc.","suffix":"ATRA","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"164","countryKey":"5","name":"AtriCure, Inc.","suffix":"ATRC","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"165","countryKey":"0","name":"Atrion Corp.","suffix":"ATRI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"166","countryKey":"8","name":"Astronics Corp.","suffix":"ATRO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"167","countryKey":"2","name":"Antares Pharma, Inc.","suffix":"ATRS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"168","countryKey":"2","name":"Air Transport Services Group, Inc.","suffix":"ATSG","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"169","countryKey":"9","name":"Atlantic Union Bankshares Corp.","suffix":"AUB","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"170","countryKey":"4","name":"Avista Corp.","suffix":"AVA","tasksCount":1,"isActive":true,"type":"company"},
    {"key":"171","countryKey":"6","name":"AeroVironment, Inc.","suffix":"AVAV","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"172","countryKey":"3","name":"Avalon GloboCare Corp.","suffix":"AVCO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"173","countryKey":"6","name":"American Vanguard Corp.","suffix":"AVD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"174","countryKey":"10","name":"Avedra","suffix":"AVDR","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"175","countryKey":"3","name":"Avid Technology, Inc.","suffix":"AVID","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"176","countryKey":"9","name":"Avanos Medical, Inc.","suffix":"AVNS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"177","countryKey":"6","name":"Avrobio, Inc.","suffix":"AVRO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"178","countryKey":"5","name":"AVX Corp.","suffix":"AVX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"179","countryKey":"13","name":"Anavex Life Sciences Corp.","suffix":"AVXL","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"180","countryKey":"7","name":"Avaya Holdings Corp.","suffix":"AVYA","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"181","countryKey":"3","name":"American States Water Co.","suffix":"AWR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"182","countryKey":"0","name":"Axos Financial, Inc.","suffix":"AX","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"183","countryKey":"2","name":"Abraxas Petroleum Corp.","suffix":"AXAS","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"184","countryKey":"9","name":"Accelerate Diagnostics, Inc.","suffix":"AXDX","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"185","countryKey":"8","name":"Anixter International, Inc.","suffix":"AXE","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"186","countryKey":"4","name":"AxoGen, Inc.","suffix":"AXGN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"187","countryKey":"11","name":"American Axle & Manufacturing Holdings, Inc.","suffix":"AXL","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"188","countryKey":"9","name":"Axcella Health, Inc.","suffix":"AXLA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"189","countryKey":"4","name":"Axonics Modulation Technologies, Inc.","suffix":"AXNX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"190","countryKey":"0","name":"Axsome Therapeutics, Inc.","suffix":"AXSM","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"191","countryKey":"5","name":"AXT, Inc.","suffix":"AXTI","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"192","countryKey":"9","name":"Aircastle Ltd.","suffix":"AYR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"193","countryKey":"7","name":"AZZ, Inc.","suffix":"AZZ","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"194","countryKey":"4","name":"Barnes Group, Inc.","suffix":"B","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"195","countryKey":"6","name":"Banc of California, Inc.","suffix":"BANC","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"196","countryKey":"2","name":"Bandwidth, Inc.","suffix":"BAND","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"197","countryKey":"3","name":"BancFirst Corp. (Oklahoma)","suffix":"BANF","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"198","countryKey":"8","name":"Banner Corp.","suffix":"BANR","tasksCount":1,"isActive":true,"type":"company"},
    {"key":"199","countryKey":"4","name":"Liberty Media Corp. Liberty Braves","suffix":"BATRA","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"200","countryKey":"11","name":"Liberty Media Corp. Liberty Braves","suffix":"BATRK","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"201","countryKey":"9","name":"Bed Bath & Beyond, Inc.","suffix":"BBBY","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"202","countryKey":"8","name":"Concrete Pumping Holdings, Inc.","suffix":"BBCP","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"203","countryKey":"6","name":"BridgeBio Pharma, Inc.","suffix":"BBIO","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"204","countryKey":"7","name":"Barrett Business Services, Inc.","suffix":"BBSI","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"205","countryKey":"5","name":"BBX Capital Corp.","suffix":"BBX","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"206","countryKey":"6","name":"BCB Bancorp, Inc.","suffix":"BCBP","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"207","countryKey":"12","name":"Boise Cascade Co.","suffix":"BCC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"208","countryKey":"6","name":"Bonanza Creek Energy, Inc.","suffix":"BCEI","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"209","countryKey":"4","name":"Atreca, Inc.","suffix":"BCEL","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"210","countryKey":"7","name":"BayCom Corp.","suffix":"BCML","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"211","countryKey":"10","name":"The Brink's Co.","suffix":"BCO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"212","countryKey":"2","name":"Blucora, Inc.","suffix":"BCOR","tasksCount":4,"isActive":true,"type":"company"},
    {"key":"213","countryKey":"12","name":"Brightcove, Inc.","suffix":"BCOV","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"214","countryKey":"4","name":"Balchem Corp.","suffix":"BCPC","tasksCount":0,"isActive":true,"type":"company"},
    {"key":"215","countryKey":"6","name":"BioCryst Pharmaceuticals, Inc.","suffix":"BCRX","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"216","countryKey":"2","name":"Belden, Inc.","suffix":"BDC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"217","countryKey":"1","name":"Bridge Bancorp, Inc.","suffix":"BDGE","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"218","countryKey":"1","name":"BioDelivery Sciences International, Inc.","suffix":"BDSI","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"219","countryKey":"4","name":"Bloom Energy Corp.","suffix":"BE","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"220","countryKey":"1","name":"BioTelemetry, Inc.","suffix":"BEAT","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"221","countryKey":"4","name":"Beacon Roofing Supply, Inc.","suffix":"BECN","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"222","countryKey":"6","name":"Bel Fuse, Inc.","suffix":"BELFB","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"223","countryKey":"6","name":"Bank First Corp.","suffix":"BFC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"224","countryKey":"11","name":"BankFinancial Corp.","suffix":"BFIN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"225","countryKey":"5","name":"Saul Centers, Inc.","suffix":"BFS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"226","countryKey":"1","name":"Business First Bancshares, Inc.","suffix":"BFST","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"227","countryKey":"7","name":"Briggs & Stratton Corp.","suffix":"BGG","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"228","countryKey":"13","name":"B&G Foods, Inc.","suffix":"BGS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"229","countryKey":"2","name":"BG Staffing, Inc.","suffix":"BGSF","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"230","countryKey":"1","name":"Biglari Holdings, Inc.","suffix":"BH","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"231","countryKey":"13","name":"Bar Harbor Bankshares","suffix":"BHB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"232","countryKey":"6","name":"Benchmark Electronics, Inc.","suffix":"BHE","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"233","countryKey":"2","name":"Berkshire Hills Bancorp, Inc.","suffix":"BHLB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"234","countryKey":"8","name":"Braemar Hotels & Resorts, Inc.","suffix":"BHR","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"235","countryKey":"6","name":"Biohaven Pharmaceutical Holding Co. Ltd.","suffix":"BHVN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"236","countryKey":"6","name":"Big Lots, Inc.","suffix":"BIG","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"237","countryKey":"6","name":"Option Care Health, Inc.","suffix":"BIOS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"238","countryKey":"7","name":"BJ's Wholesale Club Holdings, Inc.","suffix":"BJ","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"239","countryKey":"1","name":"BJ's Restaurants, Inc.","suffix":"BJRI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"240","countryKey":"10","name":"Brookdale Senior Living, Inc.","suffix":"BKD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"241","countryKey":"5","name":"The Buckle, Inc.","suffix":"BKE","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"242","countryKey":"11","name":"Black Hills Corp.","suffix":"BKH","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"243","countryKey":"5","name":"BlackLine, Inc.","suffix":"BL","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"244","countryKey":"1","name":"Blue Bird Corp.","suffix":"BLBD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"245","countryKey":"7","name":"TopBuild Corp.","suffix":"BLD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"246","countryKey":"1","name":"Builders FirstSource, Inc.","suffix":"BLDR","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"247","countryKey":"2","name":"BioLife Solutions, Inc.","suffix":"BLFS","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"248","countryKey":"1","name":"Blackbaud, Inc.","suffix":"BLKB","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"249","countryKey":"11","name":"Bloomin' Brands, Inc.","suffix":"BLMN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"250","countryKey":"7","name":"Banco Latinoamericano de Comercio Exterior SA","suffix":"BLX","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"251","countryKey":"7","name":"BMC Stock Holdings, Inc.","suffix":"BMCH","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"252","countryKey":"8","name":"Badger Meter, Inc.","suffix":"BMI","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"253","countryKey":"8","name":"Bank of Marin Bancorp","suffix":"BMRC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"254","countryKey":"3","name":"Bryn Mawr Bank Corp.","suffix":"BMTC","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"255","countryKey":"5","name":"Barnes & Noble Education, Inc.","suffix":"BNED","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"256","countryKey":"7","name":"Benefitfocus, Inc.","suffix":"BNFT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"257","countryKey":"4","name":"Bank of Commerce Holdings","suffix":"BOCH","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"258","countryKey":"1","name":"Audentes Therapeutics, Inc.","suffix":"BOLD","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"259","countryKey":"10","name":"Boston Omaha Corp.","suffix":"BOMN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"260","countryKey":"6","name":"DMC Global, Inc.","suffix":"BOOM","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"261","countryKey":"13","name":"Boot Barn Holdings, Inc.","suffix":"BOOT","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"262","countryKey":"6","name":"Box, Inc.","suffix":"BOX","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"263","countryKey":"6","name":"Boston Private Financial Holdings, Inc.","suffix":"BPFH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"264","countryKey":"3","name":"Blueprint Medicines Corp.","suffix":"BPMC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"265","countryKey":"11","name":"The Bank of Princeton","suffix":"BPRN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"266","countryKey":"0","name":"Brady Corp.","suffix":"BRC","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"267","countryKey":"6","name":"Craft Brew Alliance, Inc.","suffix":"BREW","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"268","countryKey":"1","name":"Bluerock Residential Growth REIT, Inc.","suffix":"BRG","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"269","countryKey":"12","name":"Bridgford Foods Corp.","suffix":"BRID","tasksCount":5,"isActive":true,"type":"company"},
    {"key":"270","countryKey":"6","name":"Brookline Bancorp, Inc.","suffix":"BRKL","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"271","countryKey":"11","name":"Brooks Automation, Inc.","suffix":"BRKS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"272","countryKey":"12","name":"BRT Apartments Corp.","suffix":"BRT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"273","countryKey":"7","name":"Berry Petroleum Corp.","suffix":"BRY","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"274","countryKey":"2","name":"Bassett Furniture Industries, Inc.","suffix":"BSET","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"275","countryKey":"3","name":"BioSig Technologies, Inc.","suffix":"BSGM","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"276","countryKey":"6","name":"BrightSphere Investment Group, Inc.","suffix":"BSIG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"277","countryKey":"2","name":"Sierra Bancorp","suffix":"BSRR","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"278","countryKey":"3","name":"Biospecifics Technologies Corp.","suffix":"BSTC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"279","countryKey":"6","name":"Bank7 Corp.","suffix":"BSVN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"280","countryKey":"7","name":"BioXcel Therapeutics, Inc.","suffix":"BTAI","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"281","countryKey":"9","name":"Peabody Energy Corp.","suffix":"BTU","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"282","countryKey":"10","name":"First Busey Corp.","suffix":"BUSE","tasksCount":4,"isActive":true,"type":"company"},
    {"key":"283","countryKey":"1","name":"BrightView Holdings, Inc.","suffix":"BV","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"284","countryKey":"4","name":"Bridgewater Bancshares, Inc.","suffix":"BWB","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"285","countryKey":"9","name":"Bankwell Financial Group, Inc.","suffix":"BWFG","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"286","countryKey":"6","name":"BlueLinx Holdings, Inc.","suffix":"BXC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"287","countryKey":"7","name":"Bluegreen Vacations Corp.","suffix":"BXG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"288","countryKey":"12","name":"Blackstone Mortgage Trust, Inc.","suffix":"BXMT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"289","countryKey":"3","name":"BancorpSouth Bank","suffix":"BXS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"290","countryKey":"4","name":"Byline Bancorp, Inc.","suffix":"BY","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"291","countryKey":"4","name":"Boyd Gaming Corp.","suffix":"BYD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"292","countryKey":"13","name":"BeyondSpring, Inc.","suffix":"BYSI","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"293","countryKey":"2","name":"Beazer Homes USA, Inc.","suffix":"BZH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"294","countryKey":"1","name":"Camden National Corp. (Maine)","suffix":"CAC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"295","countryKey":"10","name":"Cadence Bancorporation","suffix":"CADE","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"296","countryKey":"12","name":"CAI International, Inc.","suffix":"CAI","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"297","countryKey":"2","name":"Cheesecake Factory, Inc.","suffix":"CAKE","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"298","countryKey":"0","name":"Caleres, Inc.","suffix":"CAL","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"299","countryKey":"9","name":"Calithera Biosciences, Inc.","suffix":"CALA","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"300","countryKey":"11","name":"Cal-Maine Foods, Inc.","suffix":"CALM","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"301","countryKey":"10","name":"Calix, Inc.","suffix":"CALX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"302","countryKey":"13","name":"CalAmp Corp.","suffix":"CAMP","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"303","countryKey":"9","name":"Avis Budget Group, Inc.","suffix":"CAR","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"304","countryKey":"4","name":"CARA Therapeutics, Inc.","suffix":"CARA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"305","countryKey":"12","name":"Carbonite, Inc.","suffix":"CARB","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"306","countryKey":"11","name":"Carter Bank & Trust","suffix":"CARE","tasksCount":4,"isActive":true,"type":"company"},
    {"key":"307","countryKey":"3","name":"Cargurus, Inc.","suffix":"CARG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"308","countryKey":"9","name":"Carolina Financial Corp.","suffix":"CARO","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"309","countryKey":"13","name":"Cars.com, Inc.","suffix":"CARS","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"310","countryKey":"6","name":"Casa Systems, Inc.","suffix":"CASA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"311","countryKey":"8","name":"Meta Financial Group, Inc.","suffix":"CASH","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"312","countryKey":"1","name":"CASI Pharmaceuticals, Inc.","suffix":"CASI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"313","countryKey":"11","name":"Cass Information Systems, Inc.","suffix":"CASS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"314","countryKey":"12","name":"Cambridge Bancorp","suffix":"CATC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"315","countryKey":"11","name":"Cardtronics plc","suffix":"CATM","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"316","countryKey":"8","name":"The Cato Corp.","suffix":"CATO","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"317","countryKey":"9","name":"Catasys, Inc.","suffix":"CATS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"318","countryKey":"4","name":"Cathay General Bancorp","suffix":"CATY","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"319","countryKey":"13","name":"Colony Bankcorp, Inc.","suffix":"CBAN","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"320","countryKey":"2","name":"CymaBay Therapeutics, Inc.","suffix":"CBAY","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"321","countryKey":"12","name":"Cincinnati Bell, Inc.","suffix":"CBB","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"322","countryKey":"13","name":"CBL & Associates Properties, Inc.","suffix":"CBL","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"323","countryKey":"0","name":"Carbon Black, Inc. (Massachusetts)","suffix":"CBLK","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"324","countryKey":"4","name":"Cambrex Corporation","suffix":"CBM","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"325","countryKey":"2","name":"Cellular Biomedicine Group, Inc.","suffix":"CBMG","tasksCount":0,"isActive":false,"type":"company"},
    {"key":"326","countryKey":"6","name":"Capital Bancorp, Inc. (Maryland)","suffix":"CBNK","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"327","countryKey":"3","name":"Continental Building Products, Inc.","suffix":"CBPX","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"328","countryKey":"8","name":"Cracker Barrel Old Country Store, Inc.","suffix":"CBRL","tasksCount":5,"isActive":false,"type":"company"},
    {"key":"329","countryKey":"13","name":"CBTX, Inc. (Texas)","suffix":"CBTX","tasksCount":3,"isActive":true,"type":"company"},
    {"key":"330","countryKey":"4","name":"Community Bank System, Inc.","suffix":"CBU","tasksCount":1,"isActive":true,"type":"company"},
    {"key":"331","countryKey":"4","name":"CBIZ, Inc.","suffix":"CBZ","tasksCount":2,"isActive":false,"type":"company"},
    {"key":"332","countryKey":"4","name":"Coastal Financial Corp. (Washington)","suffix":"CCB","tasksCount":2,"isActive":true,"type":"company"},
    {"key":"333","countryKey":"12","name":"Capital City Bank Group, Inc.","suffix":"CCBG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"334","countryKey":"8","name":"Chase Corp.","suffix":"CCF","tasksCount":3,"isActive":false,"type":"company"},
    {"key":"335","countryKey":"13","name":"Cabot Microelectronics Corp.","suffix":"CCMP","tasksCount":4,"isActive":false,"type":"company"},
    {"key":"336","countryKey":"5","name":"CNB Financial Corp. (Pennsylvania)","suffix":"CCNE","tasksCount":1,"isActive":false,"type":"company"},
    {"key":"337","countryKey":"12","name":"Clear Channel Outdoor Holdings, Inc.","suffix":"CCO","tasksCount":3,"isActive":false,"type":"company"},
  ]`;
