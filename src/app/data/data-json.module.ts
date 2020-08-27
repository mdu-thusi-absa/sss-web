import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DataJsonModule {}

export const jsonAccountingClass = `[
  {"key":0,"name":"Group holding company: Subsidiaries"},
  {"key":1,"name":"Joint ventures - equity accounted"},
  {"key":2,"name":"Structured entity"},
  {"key":3,"name":"Unconsolidated structured entity"},
  {"key":4,"name":"Associates - equity accounted"},
  {"key":5,"name":"Investments"},
  {"key":6,"name":"Unlisted equity investments held at fair value through profit or loss - property valuation"},
  {"key":7,"name":"Group holding company "}
  ]`
  

export const jsonAccountingClassTier = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`
  

export const jsonConsolidated = `[
  {"key":0,"name":"Consolidated"},
  {"key":1,"name":"Not Consolidated"}
  ]`
  

export const jsonBusinessArea = `[
  {"key":0,"name":"Head Office Function"},
  {"key":1,"name":"Retail and Business Banking (RBB)"},
  {"key":2,"name":"Corporate and Investment Bank (CIB)"},
  {"key":3,"name":"Absa Financial Services Group (AFS)"},
  {"key":4,"name":"Absa Regional Operations (ARO)"},
  {"key":5,"name":"Enterprise Function"},
  {"key":6,"name":"Head Office Function"}
  ]`
  

export const jsonLegalClass = `[
  {"key":0,"name":"Group holding company Subsidiaries"},
  {"key":1,"name":"Joint ventures"},
  {"key":2,"name":"Structured special purpose"},
  {"key":3,"name":"Structured special purpose - Trust"},
  {"key":4,"name":"Associates - significant influence but no control over its operating and financial policies"},
  {"key":5,"name":"Association agreement"},
  {"key":6,"name":"Investments"},
  {"key":7,"name":"Joint arrangement"},
  {"key":8,"name":"Group holding company "}
  ]`
  

export const jsonEntityStatus = `[
  {"key":0,"name":"Active"},
  {"key":1,"name":"Passively Trading"},
  {"key":2,"name":"Non Trading"},
  {"key":3,"name":"Dormant"},
  {"key":4,"name":"Process of deregistration"}
  ]`
  

export const jsonEntityStatusTier = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`
  

export const jsonBusinessDivision = `[
  {"key":0,"name":"Retail"},
  {"key":1,"name":"Investments"},
  {"key":2,"name":"Credit"}
  ]`
  

  export const jsonCompanyTypes = `[
    {"key":0,"name":"Fund"},
    {"key":1,"name":"Investment"},
    {"key":2,"name":"Joint Venture"},
    {"key":3,"name":"Non-profit company"},
    {"key":4,"name":"Private company"},
    {"key":5,"name":"Public Company"},
    {"key":6,"name":"Scheme"},
    {"key":7,"name":"Trust"}
    ]`
    

export const jsonIndustries = `[
  {"key":0,"name":"Banking"},
  {"key":1,"name":"Asset Management"},
  {"key":2,"name":"Property"}
  ]`;
  

export const jsonSecretariats = `[
  {"key":0,"name":"Internal"},
  {"key":1,"name":"PWC"}
  ]`;
  

export const jsonAuditors = `[
  {"key":0,"name":"KPMG"},
  {"key":1,"name":"PWC"},
  {"key":2,"name":"Deloitte"}
  ]`;
  

export const jsonContactPreferences = `[
  {"key":0,"name":"Email"},
  {"key":1,"name":"Call"},
  {"key":2,"name":"Text"}
  ]`;
  

export const jsonTaskTypes = `[
  {"key":0,"name":"Create Company"},
  {"key":1,"name":"Amend Company"}
  ]`;
  

export const jsonTaskStatus = `[
  {"key":0,"name":"Doing"},
  {"key":1,"name":"Done"}
  ]`;
  

export const jsonYesNo = `[
  {"key":0,"name":"Yes"},
  {"key":1,"name":"No"}
  ]`;
  

export const jsonTrusts = `[
  {"key":0,"name":"Northern Trust","suffix":"NTH"},
  {"key":1,"name":"BEE Trust","suffix":"BEET"}
  ]`;
  

export const jsonRegulations = `[
  {"key":0,"name":"Companies Act 71 of 2008","suffix":"FSCA"},
  {"key":1,"name":"Protection of Personal Information Act 4 of 2013","suffix":"POPIA"},
  {"key":2,"name":"Trust Property Control Act 57 of 1988","suffix":"TPCA"}
  ]`;
  

  export const jsonRegulators = `[
    {"key":0,"name":"Financial Services Conduct Authority","suffix":"FSCA"},
    {"key":1,"name":"South Africian Reserve Bank","suffix":"SARB"},
    {"key":2,"name":"JSE","suffix":"JSE"},
    {"key":3,"name":"Securities and Exchange Commission","suffix":"SEC"}
    ]`;
    
  
  

export const jsonEntityStatusTiers = `[
  {"key":0,"name":"Air"},
  {"key":1,"name":"Water"},
  {"key":2,"name":"Earth"},
  {"key":3,"name":"Fire"}
  ]`;
  

export const jsonAccountingTiers = `[
  {"key":0,"name":"Top"},
  {"key":1,"name":"Middle"},
  {"key":2,"name":"Low"}
  ]`;
  

export const jsonAccountingClasses = `[
  {"key":0,"name":"Accounted"},
  {"key":1,"name":"Not Accounted"}
  ]`;
  

export const jsonBusinessAreas = `[
  {"key":0,"name":"Finance"},
  {"key":1,"name":"Property"},
  {"key":2,"name":"Retail"}
  ]`;
  

export const jsonUsers = `[
  {"key":0,"firstName":"Vlad","surname":"Anuchin"},
  {"key":1,"firstName":"Alex","surname":"Voznesenskey"},
  {"key":2,"firstName":"Ulrich","surname":"Kurchner"},
  {"key":3,"firstName":"Samantha","surname":"Rajagopaul"},
  {"key":4,"firstName":"Lourika","surname":"Stander"}
  ]`;

  export const jsonCities = `[
    {"key":0,"countryKey":29,"name":"Gaborone"},
    {"key":1,"countryKey":83,"name":"Accra"},
    {"key":2,"countryKey":111,"name":"Nairobi"},
    {"key":3,"countryKey":135,"name":"Port Louis"},
    {"key":4,"countryKey":144,"name":"Maputo"},
    {"key":5,"countryKey":146,"name":"Windhoek"},
    {"key":6,"countryKey":154,"name":"Lagos"},
    {"key":7,"countryKey":190,"name":"Victoria"},
    {"key":8,"countryKey":202,"name":"Johannesburg"},
    {"key":9,"countryKey":214,"name":"Dar es Salaam"},
    {"key":10,"countryKey":226,"name":"Kampala"},
    {"key":11,"countryKey":229,"name":"London"},
    {"key":12,"countryKey":230,"name":"New York City"},
    {"key":13,"countryKey":242,"name":"Lusaka"},
    {"key":14,"countryKey":29,"name":"Francistown"},
    {"key":15,"countryKey":83,"name":"Kumasi"},
    {"key":16,"countryKey":111,"name":"Mombasa"},
    {"key":17,"countryKey":135,"name":"Beau Bassin-Rose Hill"},
    {"key":18,"countryKey":144,"name":"Matola"},
    {"key":19,"countryKey":146,"name":"Rundu"},
    {"key":20,"countryKey":154,"name":"Kano"},
    {"key":21,"countryKey":190,"name":"Anse Boileau"},
    {"key":22,"countryKey":202,"name":"Cape Town"},
    {"key":23,"countryKey":214,"name":"Mwanza"},
    {"key":24,"countryKey":226,"name":"Nansana"},
    {"key":25,"countryKey":229,"name":"Birmingham"},
    {"key":26,"countryKey":230,"name":"Los Angeles"},
    {"key":27,"countryKey":242,"name":"Kitwe"}
    ]`;
    

export const jsonPortfolios = `[
  {"key":0,"name":"- All -"},
  {"key":13,"name":"Botswana"},
  {"key":1,"name":"Ghana"}, 
  {"key":2,"name":"Kenya"}, 
  {"key":3,"name":"Mauritius"}, 
  {"key":4,"name":"Mozambique"}, 
  {"key":5,"name":"Namibia"}, 
  {"key":6,"name":"Nigeria"}, 
  {"key":7,"name":"Seychelles"}, 
  {"key":8,"name":"South Africa"}, 
  {"key":9,"name":"Tanzania"}, 
  {"key":10,"name":"Uganda"}, 
  {"key":13,"name":"Zambia"}
]`;

export const jsonCountriesWithTasks = `[
  {"key":29,"name":"Botswana","suffix":""},
  {"key":83,"name":"Ghana","suffix":""},
  {"key":111,"name":"Kenya","suffix":""},
  {"key":135,"name":"Mauritius","suffix":""},
  {"key":144,"name":"Mozambique","suffix":""},
  {"key":146,"name":"Namibia","suffix":""},
  {"key":154,"name":"Nigeria","suffix":""},
  {"key":190,"name":"Seychelles","suffix":""},
  {"key":202,"name":"South Africa","suffix":""},
  {"key":214,"name":"Tanzania","suffix":""},
  {"key":226,"name":"Uganda","suffix":""},
  {"key":242,"name":"Zambia","suffix":""}
]`
  

export const jsonCountries = `[
  {"key":29,"name":"Botswana","suffix":""},
  {"key":83,"name":"Ghana","suffix":""},
  {"key":111,"name":"Kenya","suffix":""},
  {"key":135,"name":"Mauritius","suffix":""},
  {"key":144,"name":"Mozambique","suffix":""},
  {"key":146,"name":"Namibia","suffix":""},
  {"key":154,"name":"Nigeria","suffix":""},
  {"key":190,"name":"Seychelles","suffix":""},
  {"key":202,"name":"South Africa","suffix":""},
  {"key":214,"name":"Tanzania","suffix":""},
  {"key":226,"name":"Uganda","suffix":""},
  {"key":229,"name":"United Kingdom of Great Britain","suffix":""},
  {"key":230,"name":"United States of America","suffix":""},
  {"key":242,"name":"Zambia","suffix":""}
]`;

export const jsonFiles = `[
  {"key":0,"fileName":"moi.pdf","name":"MOI","description":""},
  {"key":1,"fileName":"res.pdf","name":"Resolution 1","description":"second file"},
  {"key":2,"fileName":"res.pdf","name":"Resolution 2","description":"third file"},
  {"key":3,"fileName":"moi.pdf","name":"MOI 1","description":""},
  {"key":4,"fileName":"res.pdf","name":"Resolution 3","description":"second file"},
  {"key":5,"fileName":"res.pdf","name":"Resolution 4","description":"third file"},
  {"key":6,"fileName":"moi.pdf","name":"MOI 2","description":""}
]`;

export const jsonTemplates = `[
  {"key":0,"fileName":"moi.pdf","name":"CoR14","description":"Register"},
  {"key":1,"fileName":"res.pdf","name":"CoR15","description":"Appoint"},
  {"key":2,"fileName":"res.pdf","name":"CoR16","description":"Share Issue"},
  {"key":3,"fileName":"moi.pdf","name":"CoR17","description":"Resign"},
  {"key":4,"fileName":"res.pdf","name":"CoR18","description":"Rename"},
  {"key":5,"fileName":"res.pdf","name":"CoR19","description":"Deregister"},
  {"key":6,"fileName":"moi.pdf","name":"CoR20","description":"Move Address"}
]`;

export const jsonAttendees = `[
  {"key":0,"surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true,"type":"individual","attended":false},
  {"key":1,"surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true,"type":"individual","attended":true},
  {"key":2,"surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false,"type":"individual","attended":true},
  {"key":3,"surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true,"type":"individual","attended":false},
  {"key":4,"surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true,"type":"individual","attended":true}
]`;

export const jsonMeetings = `[
  {"key":0,"dateTime":"2020-05-12 12:30","name":"Introduction","description":"Roles and Responsibilities"},
  {"key":1,"dateTime":"2020-06-12","name":"BRD","description":"Business Requirement Document"},
  {"key":2,"dateTime":"2020-07-12","name":"Approvals","description":"Committee approvals"},
  {"key":3,"dateTime":"2020-08-12","name":"POC","description":"Proof of Concept"},
  {"key":4,"dateTime":"2020-09-12","name":"POC Approvals","description":"POC approvals and comments"},
  {"key":5,"dateTime":"2020-10-12","name":"Version 1 Deployment","description":"First deployment and experience"},
  {"key":6,"dateTime":"2020-11-12","name":"Testing","description":"User testing"}
]`;

export const jsonReports = `[
  {"key":0,"dateTime":"2020-05-12 12:30","name":"Organogram","description":"Structure of holdings"},
  {"key":1,"dateTime":"2020-06-12","name":"Regisry","description":"Directors registry"},
  {"key":2,"dateTime":"2020-07-12","name":"CIPC 14","description":"CIPC form form..."},
  {"key":3,"dateTime":"2020-08-12","name":"CIPC 15","description":"CIPC form form..."},
  {"key":4,"dateTime":"2020-09-12","name":"CIPC 39","description":"CIPC form form..."}
]`;

export const jsonCompanyStatus = `[
  {"key":0,"name":"Active"},
  {"key":1,"name":"Nontrading"},
  {"key":2,"name":"Dormant, passively trading"},
  {"key":3,"name":"Deregistered"}
]`;

export const jsonDivisions = `[
  {"key":0,"name":"Corporate Investment Banking"},
  {"key":1,"name":"Retail and Business Banking"},
  {"key":2,"name":"Enterprise function"},
  {"key":3,"name":"Absa Regional Operations"},
  {"key":4,"name":"AFS Group"}
]`;

export const jsonDashboards = `[
  {"key":0,"name":"Dashboard","tasksCount":28,"isActive":true},
  {"key":1,"name":"Search","tasksCount":20,"isActive":true},
  {"key":2,"name":"Company","tasksCount":13,"isActive":true},
  {"key":3,"name":"Individual","tasksCount":12,"isActive":true},
  {"key":4,"name":"User","tasksCount":17,"isActive":true}
]`;

// {"key":5,"name":"Portfolio","tasksCount": 25,"isActive":true},
//   {"key":6,"name":"Trust", "tasksCount": 0,"isActive":true},
//   {"key":7,"name":"Regulator","tasksCount": 0,"isActive":true},
//   {"key":8,"name":"Regulation","tasksCount": 0,"isActive":true},
//   {"key":9,"name":"Auditor","tasksCount": 3,"isActive":true},
//   {"key":10,"name":"Secretariat","tasksCount": 0,"isActive":true},
//   {"key":11,"name":"Template","tasksCount": 0,"isActive":true},
//   {"key":12,"name":"Setting","tasksCount": 0,"isActive":true}

export const jsonDashboardsPlural = `[
  {"key":0,"name":"Dashboard","tasksCount":28,"isActive":true},
  {"key":1,"name":"Search","tasksCount":20,"isActive":true},
  {"key":2,"name":"Companies","tasksCount":13,"isActive":true},
  {"key":3,"name":"Individuals","tasksCount":12,"isActive":true},
  {"key":4,"name":"Users","tasksCount":17,"isActive":true}
]`;

  // ,
  // {"key":5,"name":"Portfolios","tasksCount": 25,"isActive":true}
  // {"key":6,"name":"Trusts", "tasksCount": 0,"isActive":true},
  // {"key":7,"name":"Regulators","tasksCount": 0,"isActive":true},
  // {"key":8,"name":"Regulations","tasksCount": 0,"isActive":true},
  // {"key":9,"name":"Auditors","tasksCount": 3,"isActive":true},
  // {"key":10,"name":"Secretariats","tasksCount": 0,"isActive":true},
  // {"key":11,"name":"Templates","tasksCount": 0,"isActive":true},
  // {"key":12,"name":"Settings","tasksCount": 0,"isActive":true}

export const jsonMonths = `[
  {"key":0,"name":"01"},
  {"key":1,"name":"02"},
  {"key":2,"name":"03"},
  {"key":3,"name":"04"},
  {"key":4,"name":"05"},
  {"key":5,"name":"06"},
  {"key":6,"name":"07"},
  {"key":7,"name":"08"},
  {"key":8,"name":"09"},
  {"key":9,"name":"10"},
  {"key":10,"name":"11"},
  {"key":11,"name":"12"}
]`;

// export const jsonEntityTypes = `[
//   {"key":0,"name":"Company"},
//   {"key":1,"name":"Individual"},
//   {"key":2,"name":"User"},
//   {"key":3,"name":"Portfolio"},
//   {"key":4,"name":"Trust"},
//   {"key":5,"name":"Regulator"},
//   {"key":6,"name":"Regulation"},
//   {"key":7,"name":"Auditor"},
//   {"key":8,"name":"Secretariat"}
// ]`;

// export const jsonEntityTypesPlural = `[
//   {"key":0,"name":"Companies"},
//   {"key":1,"name":"Individuals"},
//   {"key":2,"name":"Users"},
//   {"key":3,"name":"Portfolios"},
//   {"key":4,"name":"Trusts"},
//   {"key":5,"name":"Regulators"},
//   {"key":6,"name":"Regulations"},
//   {"key":7,"name":"Auditors"},
//   {"key":8,"name":"Secretariats"}
// ]`;

export const jsonPeriods = `[
  {"key":0,"name":"Daily"},
  {"key":1,"name":"Weekly"},
  {"key":2,"name":"Monthly"},
  {"key":3,"name":"Quarterly"},
  {"key":4,"name":"Annualy"}
]`;

export const jsonIndividuals = `[
  {"key":0,"countryKey":144,"surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":1,"countryKey":230,"surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":2,"countryKey":242,"surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false,"type":"individual"},
  {"key":3,"countryKey":135,"surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":4,"countryKey":242,"surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":5,"countryKey":154,"surname":"CARON","firstName":"ALEXANDRE","suffix":"Canada East","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":6,"countryKey":229,"surname":"CHALFUN","firstName":"PABLO","suffix":"South America","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":7,"countryKey":135,"surname":"COLLINS","firstName":"LOGAN","suffix":"South Central","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":8,"countryKey":230,"surname":"COLTEY","firstName":"JOHN","suffix":"South East","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":9,"countryKey":135,"surname":"DUNNE","firstName":"ROYCE","suffix":"Australasia","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":10,"countryKey":214,"surname":"ENDERTON","firstName":"JARED","suffix":"South West","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":11,"countryKey":230,"surname":"ESSLINGER","firstName":"LUKAS","suffix":"Europe South","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":12,"countryKey":83,"surname":"FIKOWSKI","firstName":"BRENT","suffix":"Canada West","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":13,"countryKey":229,"surname":"FRASER","firstName":"MATHEW","suffix":"Central East","tasksCount":3,"isActive":false,"type":"individual"},
  {"key":14,"countryKey":154,"surname":"GAMBOA","firstName":"ROGELIO","suffix":"South Central","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":15,"countryKey":83,"surname":"GEORGES","firstName":"WILLY","suffix":"Europe South","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":16,"countryKey":83,"surname":"GROVE","firstName":"ZEKE","suffix":"Australasia","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":17,"countryKey":190,"surname":"GUÐMUNDSSON","firstName":"BJÖRGVIN KARL","suffix":"Europe North","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":18,"countryKey":111,"surname":"HELBIG","firstName":"ETHAN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":19,"countryKey":202,"surname":"HÖGBERG","firstName":"LUKAS","suffix":"Europe North","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":20,"countryKey":190,"surname":"JONES","firstName":"MARQUAN","suffix":"North East","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":21,"countryKey":190,"surname":"KENNEY","firstName":"CRAIG","suffix":"North East","tasksCount":3,"isActive":true,"type":"individual"},
  {"key":22,"countryKey":135,"surname":"KHRENNIKOV","firstName":"ROMAN","suffix":"Europe North","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":23,"countryKey":202,"surname":"LINDER-LEIGHTON","firstName":"DEAN","suffix":"Australasia","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":24,"countryKey":146,"surname":"LUCKETT","firstName":"BRANDON","suffix":"South Central","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":25,"countryKey":146,"surname":"MUNDWILER","firstName":"ADRIAN","suffix":"Europe Central","tasksCount":5,"isActive":true,"type":"individual"},
  {"key":26,"countryKey":242,"surname":"NEWBURY","firstName":"JAMES","suffix":"Australasia","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":27,"countryKey":229,"surname":"OHLSEN","firstName":"NOAH","suffix":"South East","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":28,"countryKey":144,"surname":"PANCHIK","firstName":"SCOTT","suffix":"Central East","tasksCount":4,"isActive":false,"type":"individual"},
  {"key":29,"countryKey":135,"surname":"PANCHIK","firstName":"SAXON","suffix":"Central East","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":30,"countryKey":111,"surname":"PAULSON","firstName":"TIM","suffix":"North East","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":31,"countryKey":202,"surname":"PORTER","firstName":"KHAN","suffix":"Australasia","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":32,"countryKey":154,"surname":"SAGER","firstName":"COLE","suffix":"West Coast","tasksCount":2,"isActive":false,"type":"individual"},
  {"key":33,"countryKey":226,"surname":"SIMMONDS","firstName":"ELLIOT","suffix":"Africa Middle East","tasksCount":2,"isActive":true,"type":"individual"},
  {"key":34,"countryKey":214,"surname":"SMITH","firstName":"BEN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true,"type":"individual"},
  {"key":35,"countryKey":226,"surname":"SMITH","firstName":"ALEC","suffix":"Mid Atlantic","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":36,"countryKey":144,"surname":"STEVENSON","firstName":"MITCHEL","suffix":"West Coast","tasksCount":4,"isActive":true,"type":"individual"},
  {"key":37,"countryKey":202,"surname":"SWEENEY","firstName":"SEAN","suffix":"South West","tasksCount":1,"isActive":true,"type":"individual"},
  {"key":38,"countryKey":190,"surname":"URANKAR","firstName":"NICHOLAS","suffix":"Central East","tasksCount":5,"isActive":true,"type":"individual"},
  {"key":39,"countryKey":230,"surname":"VELLNER","firstName":"PATRICK","suffix":"Canada East","tasksCount":1,"isActive":false,"type":"individual"}
  ]`;
  

  export const jsonCompanies = `[
    {"key":0,"countryKey":229,"name":"Aaron's, Inc.","suffix":"AAN","tasksCount":0,"isActive":false,"type":"company","countryKey":"0"},
    {"key":1,"countryKey":226,"name":"Applied Optoelectronics, Inc.","suffix":"AAOI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":2,"countryKey":229,"name":"AAON, Inc.","suffix":"AAON","tasksCount":2,"isActive":true,"type":"company"},
    {"key":3,"countryKey":83,"name":"American Assets Trust, Inc.","suffix":"AAT","tasksCount":5,"isActive":true,"type":"company"},
    {"key":4,"countryKey":135,"name":"Atlas Air Worldwide Holdings, Inc.","suffix":"AAWW","tasksCount":1,"isActive":false,"type":"company"},
    {"key":5,"countryKey":190,"name":"Axon Enterprise, Inc.","suffix":"AAXN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":6,"countryKey":230,"name":"Ameris Bancorp","suffix":"ABCB","tasksCount":1,"isActive":false,"type":"company"},
    {"key":7,"countryKey":230,"name":"Abeona Therapeutics, Inc.","suffix":"ABEO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":8,"countryKey":229,"name":"Asbury Automotive Group, Inc.","suffix":"ABG","tasksCount":5,"isActive":true,"type":"company"},
    {"key":9,"countryKey":29,"name":"ABM Industries, Inc.","suffix":"ABM","tasksCount":2,"isActive":false,"type":"company"},
    {"key":10,"countryKey":226,"name":"Allegiance Bancshares, Inc. (Texas)","suffix":"ABTX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":11,"countryKey":83,"name":"Associated Capital Group, Inc.","suffix":"AC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":12,"countryKey":190,"name":"Arcosa, Inc.","suffix":"ACA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":13,"countryKey":226,"name":"ACADIA Pharmaceuticals, Inc.","suffix":"ACAD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":14,"countryKey":226,"name":"Atlantic Capital Bancshares, Inc.","suffix":"ACBI","tasksCount":5,"isActive":false,"type":"company"},
    {"key":15,"countryKey":83,"name":"ACCO Brands Corp.","suffix":"ACCO","tasksCount":0,"isActive":false,"type":"company"},
    {"key":16,"countryKey":229,"name":"Acer Therapeutics, Inc.","suffix":"ACER","tasksCount":1,"isActive":false,"type":"company"},
    {"key":17,"countryKey":226,"name":"Achillion Pharmaceuticals, Inc.","suffix":"ACHN","tasksCount":5,"isActive":false,"type":"company"},
    {"key":18,"countryKey":229,"name":"Acacia Communications, Inc.","suffix":"ACIA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":19,"countryKey":230,"name":"ACI Worldwide, Inc.","suffix":"ACIW","tasksCount":0,"isActive":true,"type":"company"},
    {"key":20,"countryKey":190,"name":"Axcelis Technologies, Inc.","suffix":"ACLS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":21,"countryKey":29,"name":"ACNB Corp.","suffix":"ACNB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":22,"countryKey":83,"name":"Acorda Therapeutics, Inc.","suffix":"ACOR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":23,"countryKey":154,"name":"Ares Commercial Real Estate Corp.","suffix":"ACRE","tasksCount":3,"isActive":false,"type":"company"},
    {"key":24,"countryKey":226,"name":"Aclaris Therapeutics, Inc.","suffix":"ACRS","tasksCount":3,"isActive":false,"type":"company"},
    {"key":25,"countryKey":202,"name":"AcelRx Pharmaceuticals, Inc.","suffix":"ACRX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":26,"countryKey":230,"name":"Acacia Research Corp.","suffix":"ACTG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":27,"countryKey":154,"name":"Agree Realty Corp.","suffix":"ADC","tasksCount":5,"isActive":false,"type":"company"},
    {"key":28,"countryKey":226,"name":"Advanced Emissions Solutions, Inc.","suffix":"ADES","tasksCount":3,"isActive":false,"type":"company"},
    {"key":29,"countryKey":226,"name":"ADMA Biologics, Inc.","suffix":"ADMA","tasksCount":1,"isActive":true,"type":"company"},
    {"key":30,"countryKey":29,"name":"Adamas Pharmaceuticals, Inc.","suffix":"ADMS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":31,"countryKey":214,"name":"Adient plc","suffix":"ADNT","tasksCount":5,"isActive":false,"type":"company"},
    {"key":32,"countryKey":229,"name":"Aduro BioTech, Inc.","suffix":"ADRO","tasksCount":3,"isActive":false,"type":"company"},
    {"key":33,"countryKey":214,"name":"Advanced Disposal Services, Inc.","suffix":"ADSW","tasksCount":0,"isActive":false,"type":"company"},
    {"key":34,"countryKey":83,"name":"ADTRAN, Inc.","suffix":"ADTN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":35,"countryKey":146,"name":"Addus HomeCare Corp.","suffix":"ADUS","tasksCount":5,"isActive":false,"type":"company"},
    {"key":36,"countryKey":144,"name":"Adverum Biotechnologies, Inc.","suffix":"ADVM","tasksCount":3,"isActive":true,"type":"company"},
    {"key":37,"countryKey":214,"name":"Aegion Corp.","suffix":"AEGN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":38,"countryKey":154,"name":"Advanced Energy Industries, Inc.","suffix":"AEIS","tasksCount":2,"isActive":true,"type":"company"},
    {"key":39,"countryKey":135,"name":"American Equity Investment Life Holding Co.","suffix":"AEL","tasksCount":0,"isActive":false,"type":"company"},
    {"key":40,"countryKey":230,"name":"American Eagle Outfitters, Inc.","suffix":"AEO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":41,"countryKey":146,"name":"Aerie Pharmaceuticals, Inc.","suffix":"AERI","tasksCount":2,"isActive":false,"type":"company"},
    {"key":42,"countryKey":214,"name":"Armstrong Flooring, Inc.","suffix":"AFI","tasksCount":5,"isActive":true,"type":"company"},
    {"key":43,"countryKey":144,"name":"American Finance Trust, Inc.","suffix":"AFIN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":44,"countryKey":135,"name":"Affimed NV","suffix":"AFMD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":45,"countryKey":29,"name":"AgeX Therapeutics, Inc.","suffix":"AGE","tasksCount":2,"isActive":false,"type":"company"},
    {"key":46,"countryKey":135,"name":"Agenus, Inc.","suffix":"AGEN","tasksCount":5,"isActive":false,"type":"company"},
    {"key":47,"countryKey":229,"name":"Aeglea Biotherapeutics, Inc.","suffix":"AGLE","tasksCount":0,"isActive":false,"type":"company"},
    {"key":48,"countryKey":226,"name":"Federal Agricultural Mortgage Corp.","suffix":"AGM","tasksCount":1,"isActive":false,"type":"company"},
    {"key":49,"countryKey":190,"name":"PlayAGS, Inc.","suffix":"AGS","tasksCount":5,"isActive":false,"type":"company"},
    {"key":50,"countryKey":29,"name":"Argan, Inc.","suffix":"AGX","tasksCount":0,"isActive":false,"type":"company"},
    {"key":51,"countryKey":144,"name":"Agilysys, Inc.","suffix":"AGYS","tasksCount":5,"isActive":true,"type":"company"},
    {"key":52,"countryKey":229,"name":"Armada Hoffler Properties, Inc.","suffix":"AHH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":53,"countryKey":111,"name":"Ashford Hospitality Trust, Inc.","suffix":"AHT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":54,"countryKey":111,"name":"Arlington Asset Investment Corp.","suffix":"AI","tasksCount":2,"isActive":false,"type":"company"},
    {"key":55,"countryKey":230,"name":"Altra Industrial Motion Corp.","suffix":"AIMC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":56,"countryKey":226,"name":"Aimmune Therapeutics, Inc.","suffix":"AIMT","tasksCount":3,"isActive":true,"type":"company"},
    {"key":57,"countryKey":154,"name":"Albany International Corp.","suffix":"AIN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":58,"countryKey":230,"name":"AAR Corp.","suffix":"AIR","tasksCount":4,"isActive":false,"type":"company"},
    {"key":59,"countryKey":230,"name":"Airgain, Inc.","suffix":"AIRG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":60,"countryKey":135,"name":"Applied Industrial Technologies, Inc.","suffix":"AIT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":61,"countryKey":230,"name":"Aerojet Rocketdyne Holdings, Inc.","suffix":"AJRD","tasksCount":0,"isActive":false,"type":"company"},
    {"key":62,"countryKey":154,"name":"Great Ajax Corp.","suffix":"AJX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":63,"countryKey":230,"name":"Akebia Therapeutics, Inc.","suffix":"AKBA","tasksCount":0,"isActive":false,"type":"company"},
    {"key":64,"countryKey":146,"name":"Akcea Therapeutics, Inc.","suffix":"AKCA","tasksCount":2,"isActive":true,"type":"company"},
    {"key":65,"countryKey":146,"name":"Acadia Realty Trust","suffix":"AKR","tasksCount":4,"isActive":false,"type":"company"},
    {"key":66,"countryKey":154,"name":"Akero Therapeutics, Inc.","suffix":"AKRO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":67,"countryKey":242,"name":"Akorn, Inc.","suffix":"AKRX","tasksCount":1,"isActive":true,"type":"company"},
    {"key":68,"countryKey":29,"name":"AK Steel Holding Corp.","suffix":"AKS","tasksCount":4,"isActive":false,"type":"company"},
    {"key":69,"countryKey":83,"name":"Akoustis Technologies, Inc.","suffix":"AKTS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":70,"countryKey":83,"name":"Albireo Pharma, Inc.","suffix":"ALBO","tasksCount":5,"isActive":false,"type":"company"},
    {"key":71,"countryKey":190,"name":"Alico, Inc.","suffix":"ALCO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":72,"countryKey":154,"name":"Alder Biopharmaceuticals, Inc.","suffix":"ALDR","tasksCount":2,"isActive":false,"type":"company"},
    {"key":73,"countryKey":144,"name":"Aldeyra Therapeutics, Inc.","suffix":"ALDX","tasksCount":0,"isActive":true,"type":"company"},
    {"key":74,"countryKey":214,"name":"ALLETE, Inc.","suffix":"ALE","tasksCount":3,"isActive":false,"type":"company"},
    {"key":75,"countryKey":230,"name":"Alector, Inc.","suffix":"ALEC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":76,"countryKey":229,"name":"Alexander & Baldwin, Inc.","suffix":"ALEX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":77,"countryKey":83,"name":"Alamo Group, Inc.","suffix":"ALG","tasksCount":5,"isActive":true,"type":"company"},
    {"key":78,"countryKey":144,"name":"Allegiant Travel Co.","suffix":"ALGT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":79,"countryKey":154,"name":"Allakos, Inc.","suffix":"ALLK","tasksCount":2,"isActive":false,"type":"company"},
    {"key":80,"countryKey":226,"name":"Allogene Therapeutics, Inc.","suffix":"ALLO","tasksCount":5,"isActive":false,"type":"company"},
    {"key":81,"countryKey":226,"name":"AstroNova, Inc.","suffix":"ALOT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":82,"countryKey":242,"name":"Alarm.com Holdings, Inc.","suffix":"ALRM","tasksCount":3,"isActive":false,"type":"company"},
    {"key":83,"countryKey":214,"name":"Altus Midstream Co.","suffix":"ALTM","tasksCount":2,"isActive":false,"type":"company"},
    {"key":84,"countryKey":229,"name":"Altair Engineering, Inc.","suffix":"ALTR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":85,"countryKey":144,"name":"Alexander's, Inc.","suffix":"ALX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":86,"countryKey":230,"name":"AMAG Pharmaceuticals, Inc.","suffix":"AMAG","tasksCount":2,"isActive":false,"type":"company"},
    {"key":87,"countryKey":230,"name":"Amalgamated Bank","suffix":"AMAL","tasksCount":0,"isActive":false,"type":"company"},
    {"key":88,"countryKey":144,"name":"Ambarella, Inc.","suffix":"AMBA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":89,"countryKey":229,"name":"Ambac Financial Group, Inc.","suffix":"AMBC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":90,"countryKey":190,"name":"AMC Entertainment Holdings, Inc.","suffix":"AMC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":91,"countryKey":190,"name":"Amedisys, Inc.","suffix":"AMED","tasksCount":2,"isActive":false,"type":"company"},
    {"key":92,"countryKey":111,"name":"Apollo Medical Holdings, Inc.","suffix":"AMEH","tasksCount":2,"isActive":false,"type":"company"},
    {"key":93,"countryKey":144,"name":"AssetMark Financial Holdings, Inc.","suffix":"AMK","tasksCount":2,"isActive":false,"type":"company"},
    {"key":94,"countryKey":135,"name":"Amkor Technology, Inc.","suffix":"AMKR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":95,"countryKey":214,"name":"AMN Healthcare Services, Inc.","suffix":"AMN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":96,"countryKey":226,"name":"American National Bankshares, Inc. (Virginia)","suffix":"AMNB","tasksCount":3,"isActive":false,"type":"company"},
    {"key":97,"countryKey":144,"name":"Allied Motion Technologies, Inc.","suffix":"AMOT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":98,"countryKey":214,"name":"Amphastar Pharmaceuticals, Inc.","suffix":"AMPH","tasksCount":4,"isActive":false,"type":"company"},
    {"key":99,"countryKey":135,"name":"Ameresco, Inc.","suffix":"AMRC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":100,"countryKey":83,"name":"Amyris, Inc.","suffix":"AMRS","tasksCount":2,"isActive":true,"type":"company"},
    {"key":101,"countryKey":229,"name":"Amneal Pharmaceuticals, Inc.","suffix":"AMRX","tasksCount":5,"isActive":false,"type":"company"},
    {"key":102,"countryKey":29,"name":"American Superconductor Corp.","suffix":"AMSC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":103,"countryKey":146,"name":"AMERISAFE, Inc.","suffix":"AMSF","tasksCount":2,"isActive":true,"type":"company"},
    {"key":104,"countryKey":154,"name":"American Software, Inc.","suffix":"AMSWA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":105,"countryKey":229,"name":"Amerant Bancorp, Inc.","suffix":"AMTB","tasksCount":5,"isActive":false,"type":"company"},
    {"key":106,"countryKey":29,"name":"American Woodmark Corp.","suffix":"AMWD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":107,"countryKey":111,"name":"AnaptysBio, Inc.","suffix":"ANAB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":108,"countryKey":229,"name":"The Andersons, Inc.","suffix":"ANDE","tasksCount":1,"isActive":false,"type":"company"},
    {"key":109,"countryKey":230,"name":"Abercrombie & Fitch Co.","suffix":"ANF","tasksCount":3,"isActive":true,"type":"company"},
    {"key":110,"countryKey":230,"name":"AngioDynamics, Inc.","suffix":"ANGO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":111,"countryKey":229,"name":"Anworth Mortgage Asset Corp.","suffix":"ANH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":112,"countryKey":190,"name":"Anika Therapeutics, Inc.","suffix":"ANIK","tasksCount":2,"isActive":false,"type":"company"},
    {"key":113,"countryKey":202,"name":"ANI Pharmaceuticals, Inc.","suffix":"ANIP","tasksCount":2,"isActive":false,"type":"company"},
    {"key":114,"countryKey":144,"name":"American Outdoor Brands Corp.","suffix":"AOBC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":115,"countryKey":229,"name":"Alpha & Omega Semiconductor Ltd.","suffix":"AOSL","tasksCount":2,"isActive":false,"type":"company"},
    {"key":116,"countryKey":226,"name":"Artisan Partners Asset Management, Inc.","suffix":"APAM","tasksCount":2,"isActive":false,"type":"company"},
    {"key":117,"countryKey":111,"name":"American Public Education, Inc.","suffix":"APEI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":118,"countryKey":111,"name":"Apellis Pharmaceuticals, Inc.","suffix":"APLS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":119,"countryKey":226,"name":"Apogee Enterprises, Inc.","suffix":"APOG","tasksCount":0,"isActive":false,"type":"company"},
    {"key":120,"countryKey":144,"name":"AppFolio, Inc.","suffix":"APPF","tasksCount":3,"isActive":false,"type":"company"},
    {"key":121,"countryKey":135,"name":"Appian Corp.","suffix":"APPN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":122,"countryKey":226,"name":"Digital Turbine, Inc.","suffix":"APPS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":123,"countryKey":190,"name":"Preferred Apartment Communities, Inc.","suffix":"APTS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":124,"countryKey":83,"name":"Apyx Medical Corp.","suffix":"APYX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":125,"countryKey":214,"name":"Evoqua Water Technologies Corp.","suffix":"AQUA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":126,"countryKey":135,"name":"American Renal Associates Holdings, Inc.","suffix":"ARA","tasksCount":1,"isActive":false,"type":"company"},
    {"key":127,"countryKey":146,"name":"Accuray, Inc.","suffix":"ARAY","tasksCount":5,"isActive":true,"type":"company"},
    {"key":128,"countryKey":214,"name":"ArcBest Corp.","suffix":"ARCB","tasksCount":2,"isActive":true,"type":"company"},
    {"key":129,"countryKey":83,"name":"Arch Coal, Inc.","suffix":"ARCH","tasksCount":2,"isActive":false,"type":"company"},
    {"key":130,"countryKey":144,"name":"Ardelyx, Inc.","suffix":"ARDX","tasksCount":5,"isActive":false,"type":"company"},
    {"key":131,"countryKey":226,"name":"Ares Management Corp.","suffix":"ARES","tasksCount":1,"isActive":false,"type":"company"},
    {"key":132,"countryKey":226,"name":"Argo Group International Holdings Ltd.","suffix":"ARGO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":133,"countryKey":242,"name":"Apollo Commercial Real Estate Finance, Inc.","suffix":"ARI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":134,"countryKey":229,"name":"American Realty Investors, Inc.","suffix":"ARL","tasksCount":3,"isActive":false,"type":"company"},
    {"key":135,"countryKey":214,"name":"Arlo Technologies, Inc.","suffix":"ARLO","tasksCount":1,"isActive":false,"type":"company"},
    {"key":136,"countryKey":135,"name":"Arena Pharmaceuticals, Inc.","suffix":"ARNA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":137,"countryKey":135,"name":"Archrock, Inc.","suffix":"AROC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":138,"countryKey":226,"name":"Arrow Financial Corp.","suffix":"AROW","tasksCount":2,"isActive":true,"type":"company"},
    {"key":139,"countryKey":230,"name":"ArQule, Inc.","suffix":"ARQL","tasksCount":5,"isActive":false,"type":"company"},
    {"key":140,"countryKey":226,"name":"ARMOUR Residential REIT, Inc.","suffix":"ARR","tasksCount":4,"isActive":true,"type":"company"},
    {"key":141,"countryKey":229,"name":"Artesian Resources Corp.","suffix":"ARTNA","tasksCount":4,"isActive":true,"type":"company"},
    {"key":142,"countryKey":242,"name":"Arvinas, Inc.","suffix":"ARVN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":143,"countryKey":83,"name":"Arrowhead Pharmaceuticals, Inc.","suffix":"ARWR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":144,"countryKey":214,"name":"Ardmore Shipping Corp.","suffix":"ASC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":145,"countryKey":229,"name":"ASGN, Inc.","suffix":"ASGN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":146,"countryKey":190,"name":"Advansix, Inc.","suffix":"ASIX","tasksCount":2,"isActive":false,"type":"company"},
    {"key":147,"countryKey":154,"name":"Assembly Biosciences, Inc.","suffix":"ASMB","tasksCount":1,"isActive":true,"type":"company"},
    {"key":148,"countryKey":135,"name":"Ascena Retail Group, Inc.","suffix":"ASNA","tasksCount":0,"isActive":false,"type":"company"},
    {"key":149,"countryKey":229,"name":"Altisource Portfolio Solutions SA","suffix":"ASPS","tasksCount":4,"isActive":false,"type":"company"},
    {"key":150,"countryKey":214,"name":"Assertio Therapeutics, Inc.","suffix":"ASRT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":151,"countryKey":146,"name":"Astec Industries, Inc.","suffix":"ASTE","tasksCount":0,"isActive":false,"type":"company"},
    {"key":152,"countryKey":146,"name":"Atlantic Power Corp.","suffix":"AT","tasksCount":1,"isActive":false,"type":"company"},
    {"key":153,"countryKey":144,"name":"Alphatec Holdings, Inc.","suffix":"ATEC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":154,"countryKey":230,"name":"A10 Networks, Inc.","suffix":"ATEN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":155,"countryKey":229,"name":"Anterix, Inc.","suffix":"ATEX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":156,"countryKey":214,"name":"Adtalem Global Education, Inc.","suffix":"ATGE","tasksCount":5,"isActive":false,"type":"company"},
    {"key":157,"countryKey":135,"name":"Athersys, Inc.","suffix":"ATHX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":158,"countryKey":226,"name":"Allegheny Technologies, Inc.","suffix":"ATI","tasksCount":4,"isActive":true,"type":"company"},
    {"key":159,"countryKey":135,"name":"Atkore International Group, Inc.","suffix":"ATKR","tasksCount":4,"isActive":false,"type":"company"},
    {"key":160,"countryKey":229,"name":"Ames National Corp.","suffix":"ATLO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":161,"countryKey":230,"name":"ATN International, Inc.","suffix":"ATNI","tasksCount":3,"isActive":false,"type":"company"},
    {"key":162,"countryKey":83,"name":"Athenex, Inc.","suffix":"ATNX","tasksCount":3,"isActive":false,"type":"company"},
    {"key":163,"countryKey":29,"name":"Atara Biotherapeutics, Inc.","suffix":"ATRA","tasksCount":4,"isActive":false,"type":"company"},
    {"key":164,"countryKey":83,"name":"AtriCure, Inc.","suffix":"ATRC","tasksCount":5,"isActive":false,"type":"company"},
    {"key":165,"countryKey":29,"name":"Atrion Corp.","suffix":"ATRI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":166,"countryKey":190,"name":"Astronics Corp.","suffix":"ATRO","tasksCount":4,"isActive":false,"type":"company"},
    {"key":167,"countryKey":154,"name":"Antares Pharma, Inc.","suffix":"ATRS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":168,"countryKey":229,"name":"Air Transport Services Group, Inc.","suffix":"ATSG","tasksCount":1,"isActive":false,"type":"company"},
    {"key":169,"countryKey":190,"name":"Atlantic Union Bankshares Corp.","suffix":"AUB","tasksCount":1,"isActive":false,"type":"company"},
    {"key":170,"countryKey":144,"name":"Avista Corp.","suffix":"AVA","tasksCount":1,"isActive":true,"type":"company"},
    {"key":171,"countryKey":226,"name":"AeroVironment, Inc.","suffix":"AVAV","tasksCount":2,"isActive":false,"type":"company"},
    {"key":172,"countryKey":111,"name":"Avalon GloboCare Corp.","suffix":"AVCO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":173,"countryKey":226,"name":"American Vanguard Corp.","suffix":"AVD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":174,"countryKey":229,"name":"Avedra","suffix":"AVDR","tasksCount":5,"isActive":true,"type":"company"},
    {"key":175,"countryKey":135,"name":"Avid Technology, Inc.","suffix":"AVID","tasksCount":1,"isActive":false,"type":"company"},
    {"key":176,"countryKey":144,"name":"Avanos Medical, Inc.","suffix":"AVNS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":177,"countryKey":146,"name":"Avrobio, Inc.","suffix":"AVRO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":178,"countryKey":154,"name":"AVX Corp.","suffix":"AVX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":179,"countryKey":214,"name":"Anavex Life Sciences Corp.","suffix":"AVXL","tasksCount":4,"isActive":false,"type":"company"},
    {"key":180,"countryKey":154,"name":"Avaya Holdings Corp.","suffix":"AVYA","tasksCount":4,"isActive":false,"type":"company"},
    {"key":181,"countryKey":190,"name":"American States Water Co.","suffix":"AWR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":182,"countryKey":230,"name":"Axos Financial, Inc.","suffix":"AX","tasksCount":0,"isActive":false,"type":"company"},
    {"key":183,"countryKey":144,"name":"Abraxas Petroleum Corp.","suffix":"AXAS","tasksCount":3,"isActive":false,"type":"company"},
    {"key":184,"countryKey":111,"name":"Accelerate Diagnostics, Inc.","suffix":"AXDX","tasksCount":4,"isActive":false,"type":"company"},
    {"key":185,"countryKey":111,"name":"Anixter International, Inc.","suffix":"AXE","tasksCount":5,"isActive":true,"type":"company"},
    {"key":186,"countryKey":146,"name":"AxoGen, Inc.","suffix":"AXGN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":187,"countryKey":242,"name":"American Axle & Manufacturing Holdings, Inc.","suffix":"AXL","tasksCount":3,"isActive":true,"type":"company"},
    {"key":188,"countryKey":144,"name":"Axcella Health, Inc.","suffix":"AXLA","tasksCount":2,"isActive":false,"type":"company"},
    {"key":189,"countryKey":144,"name":"Axonics Modulation Technologies, Inc.","suffix":"AXNX","tasksCount":1,"isActive":false,"type":"company"},
    {"key":190,"countryKey":230,"name":"Axsome Therapeutics, Inc.","suffix":"AXSM","tasksCount":2,"isActive":true,"type":"company"},
    {"key":191,"countryKey":226,"name":"AXT, Inc.","suffix":"AXTI","tasksCount":5,"isActive":false,"type":"company"},
    {"key":192,"countryKey":111,"name":"Aircastle Ltd.","suffix":"AYR","tasksCount":1,"isActive":false,"type":"company"},
    {"key":193,"countryKey":83,"name":"AZZ, Inc.","suffix":"AZZ","tasksCount":4,"isActive":false,"type":"company"},
    {"key":194,"countryKey":29,"name":"Barnes Group, Inc.","suffix":"B","tasksCount":3,"isActive":false,"type":"company"},
    {"key":195,"countryKey":154,"name":"Banc of California, Inc.","suffix":"BANC","tasksCount":3,"isActive":false,"type":"company"},
    {"key":196,"countryKey":226,"name":"Bandwidth, Inc.","suffix":"BAND","tasksCount":0,"isActive":false,"type":"company"},
    {"key":197,"countryKey":226,"name":"BancFirst Corp. (Oklahoma)","suffix":"BANF","tasksCount":2,"isActive":true,"type":"company"},
    {"key":198,"countryKey":214,"name":"Banner Corp.","suffix":"BANR","tasksCount":1,"isActive":true,"type":"company"},
    {"key":199,"countryKey":214,"name":"Liberty Media Corp. Liberty Braves","suffix":"BATRA","tasksCount":3,"isActive":false,"type":"company"},
    {"key":200,"countryKey":154,"name":"Liberty Media Corp. Liberty Braves","suffix":"BATRK","tasksCount":5,"isActive":false,"type":"company"},
    {"key":201,"countryKey":226,"name":"Bed Bath & Beyond, Inc.","suffix":"BBBY","tasksCount":0,"isActive":false,"type":"company"},
    {"key":202,"countryKey":111,"name":"Concrete Pumping Holdings, Inc.","suffix":"BBCP","tasksCount":5,"isActive":false,"type":"company"},
    {"key":203,"countryKey":146,"name":"BridgeBio Pharma, Inc.","suffix":"BBIO","tasksCount":1,"isActive":false,"type":"company"},
    {"key":204,"countryKey":146,"name":"Barrett Business Services, Inc.","suffix":"BBSI","tasksCount":4,"isActive":false,"type":"company"},
    {"key":205,"countryKey":226,"name":"BBX Capital Corp.","suffix":"BBX","tasksCount":4,"isActive":false,"type":"company"},
    {"key":206,"countryKey":229,"name":"BCB Bancorp, Inc.","suffix":"BCBP","tasksCount":1,"isActive":false,"type":"company"},
    {"key":207,"countryKey":190,"name":"Boise Cascade Co.","suffix":"BCC","tasksCount":0,"isActive":false,"type":"company"},
    {"key":208,"countryKey":230,"name":"Bonanza Creek Energy, Inc.","suffix":"BCEI","tasksCount":0,"isActive":false,"type":"company"},
    {"key":209,"countryKey":229,"name":"Atreca, Inc.","suffix":"BCEL","tasksCount":2,"isActive":false,"type":"company"},
    {"key":210,"countryKey":83,"name":"BayCom Corp.","suffix":"BCML","tasksCount":2,"isActive":false,"type":"company"},
    {"key":211,"countryKey":144,"name":"The Brink's Co.","suffix":"BCO","tasksCount":2,"isActive":false,"type":"company"},
    {"key":212,"countryKey":146,"name":"Blucora, Inc.","suffix":"BCOR","tasksCount":4,"isActive":true,"type":"company"},
    {"key":213,"countryKey":111,"name":"Brightcove, Inc.","suffix":"BCOV","tasksCount":3,"isActive":false,"type":"company"},
    {"key":214,"countryKey":144,"name":"Balchem Corp.","suffix":"BCPC","tasksCount":0,"isActive":true,"type":"company"},
    {"key":215,"countryKey":229,"name":"BioCryst Pharmaceuticals, Inc.","suffix":"BCRX","tasksCount":3,"isActive":false,"type":"company"},
    {"key":216,"countryKey":226,"name":"Belden, Inc.","suffix":"BDC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":217,"countryKey":146,"name":"Bridge Bancorp, Inc.","suffix":"BDGE","tasksCount":2,"isActive":false,"type":"company"},
    {"key":218,"countryKey":226,"name":"BioDelivery Sciences International, Inc.","suffix":"BDSI","tasksCount":5,"isActive":false,"type":"company"},
    {"key":219,"countryKey":83,"name":"Bloom Energy Corp.","suffix":"BE","tasksCount":4,"isActive":false,"type":"company"},
    {"key":220,"countryKey":214,"name":"BioTelemetry, Inc.","suffix":"BEAT","tasksCount":0,"isActive":false,"type":"company"},
    {"key":221,"countryKey":144,"name":"Beacon Roofing Supply, Inc.","suffix":"BECN","tasksCount":0,"isActive":false,"type":"company"},
    {"key":222,"countryKey":226,"name":"Bel Fuse, Inc.","suffix":"BELFB","tasksCount":3,"isActive":true,"type":"company"},
    {"key":223,"countryKey":214,"name":"Bank First Corp.","suffix":"BFC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":224,"countryKey":83,"name":"BankFinancial Corp.","suffix":"BFIN","tasksCount":1,"isActive":false,"type":"company"},
    {"key":225,"countryKey":226,"name":"Saul Centers, Inc.","suffix":"BFS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":226,"countryKey":29,"name":"Business First Bancshares, Inc.","suffix":"BFST","tasksCount":5,"isActive":false,"type":"company"},
    {"key":227,"countryKey":144,"name":"Briggs & Stratton Corp.","suffix":"BGG","tasksCount":0,"isActive":false,"type":"company"},
    {"key":228,"countryKey":226,"name":"B&G Foods, Inc.","suffix":"BGS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":229,"countryKey":111,"name":"BG Staffing, Inc.","suffix":"BGSF","tasksCount":0,"isActive":false,"type":"company"},
    {"key":230,"countryKey":144,"name":"Biglari Holdings, Inc.","suffix":"BH","tasksCount":1,"isActive":false,"type":"company"},
    {"key":231,"countryKey":154,"name":"Bar Harbor Bankshares","suffix":"BHB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":232,"countryKey":230,"name":"Benchmark Electronics, Inc.","suffix":"BHE","tasksCount":3,"isActive":false,"type":"company"},
    {"key":233,"countryKey":135,"name":"Berkshire Hills Bancorp, Inc.","suffix":"BHLB","tasksCount":2,"isActive":false,"type":"company"},
    {"key":234,"countryKey":154,"name":"Braemar Hotels & Resorts, Inc.","suffix":"BHR","tasksCount":5,"isActive":false,"type":"company"},
    {"key":235,"countryKey":144,"name":"Biohaven Pharmaceutical Holding Co. Ltd.","suffix":"BHVN","tasksCount":3,"isActive":false,"type":"company"},
    {"key":236,"countryKey":111,"name":"Big Lots, Inc.","suffix":"BIG","tasksCount":0,"isActive":false,"type":"company"},
    {"key":237,"countryKey":111,"name":"Option Care Health, Inc.","suffix":"BIOS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":238,"countryKey":229,"name":"BJ's Wholesale Club Holdings, Inc.","suffix":"BJ","tasksCount":3,"isActive":false,"type":"company"},
    {"key":239,"countryKey":214,"name":"BJ's Restaurants, Inc.","suffix":"BJRI","tasksCount":1,"isActive":false,"type":"company"},
    {"key":240,"countryKey":154,"name":"Brookdale Senior Living, Inc.","suffix":"BKD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":241,"countryKey":230,"name":"The Buckle, Inc.","suffix":"BKE","tasksCount":1,"isActive":false,"type":"company"},
    {"key":242,"countryKey":214,"name":"Black Hills Corp.","suffix":"BKH","tasksCount":1,"isActive":false,"type":"company"},
    {"key":243,"countryKey":242,"name":"BlackLine, Inc.","suffix":"BL","tasksCount":1,"isActive":false,"type":"company"},
    {"key":244,"countryKey":135,"name":"Blue Bird Corp.","suffix":"BLBD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":245,"countryKey":226,"name":"TopBuild Corp.","suffix":"BLD","tasksCount":2,"isActive":false,"type":"company"},
    {"key":246,"countryKey":214,"name":"Builders FirstSource, Inc.","suffix":"BLDR","tasksCount":2,"isActive":false,"type":"company"},
    {"key":247,"countryKey":29,"name":"BioLife Solutions, Inc.","suffix":"BLFS","tasksCount":0,"isActive":false,"type":"company"},
    {"key":248,"countryKey":230,"name":"Blackbaud, Inc.","suffix":"BLKB","tasksCount":4,"isActive":false,"type":"company"},
    {"key":249,"countryKey":229,"name":"Bloomin' Brands, Inc.","suffix":"BLMN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":250,"countryKey":229,"name":"Banco Latinoamericano de Comercio Exterior SA","suffix":"BLX","tasksCount":0,"isActive":false,"type":"company"},
    {"key":251,"countryKey":226,"name":"BMC Stock Holdings, Inc.","suffix":"BMCH","tasksCount":2,"isActive":false,"type":"company"},
    {"key":252,"countryKey":190,"name":"Badger Meter, Inc.","suffix":"BMI","tasksCount":3,"isActive":false,"type":"company"},
    {"key":253,"countryKey":146,"name":"Bank of Marin Bancorp","suffix":"BMRC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":254,"countryKey":230,"name":"Bryn Mawr Bank Corp.","suffix":"BMTC","tasksCount":3,"isActive":false,"type":"company"},
    {"key":255,"countryKey":29,"name":"Barnes & Noble Education, Inc.","suffix":"BNED","tasksCount":0,"isActive":false,"type":"company"},
    {"key":256,"countryKey":230,"name":"Benefitfocus, Inc.","suffix":"BNFT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":257,"countryKey":154,"name":"Bank of Commerce Holdings","suffix":"BOCH","tasksCount":4,"isActive":false,"type":"company"},
    {"key":258,"countryKey":135,"name":"Audentes Therapeutics, Inc.","suffix":"BOLD","tasksCount":4,"isActive":false,"type":"company"},
    {"key":259,"countryKey":229,"name":"Boston Omaha Corp.","suffix":"BOMN","tasksCount":2,"isActive":false,"type":"company"},
    {"key":260,"countryKey":230,"name":"DMC Global, Inc.","suffix":"BOOM","tasksCount":3,"isActive":true,"type":"company"},
    {"key":261,"countryKey":190,"name":"Boot Barn Holdings, Inc.","suffix":"BOOT","tasksCount":0,"isActive":false,"type":"company"},
    {"key":262,"countryKey":229,"name":"Box, Inc.","suffix":"BOX","tasksCount":5,"isActive":false,"type":"company"},
    {"key":263,"countryKey":226,"name":"Boston Private Financial Holdings, Inc.","suffix":"BPFH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":264,"countryKey":111,"name":"Blueprint Medicines Corp.","suffix":"BPMC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":265,"countryKey":83,"name":"The Bank of Princeton","suffix":"BPRN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":266,"countryKey":144,"name":"Brady Corp.","suffix":"BRC","tasksCount":3,"isActive":false,"type":"company"},
    {"key":267,"countryKey":146,"name":"Craft Brew Alliance, Inc.","suffix":"BREW","tasksCount":4,"isActive":false,"type":"company"},
    {"key":268,"countryKey":242,"name":"Bluerock Residential Growth REIT, Inc.","suffix":"BRG","tasksCount":1,"isActive":false,"type":"company"},
    {"key":269,"countryKey":111,"name":"Bridgford Foods Corp.","suffix":"BRID","tasksCount":5,"isActive":true,"type":"company"},
    {"key":270,"countryKey":190,"name":"Brookline Bancorp, Inc.","suffix":"BRKL","tasksCount":3,"isActive":true,"type":"company"},
    {"key":271,"countryKey":230,"name":"Brooks Automation, Inc.","suffix":"BRKS","tasksCount":1,"isActive":false,"type":"company"},
    {"key":272,"countryKey":83,"name":"BRT Apartments Corp.","suffix":"BRT","tasksCount":4,"isActive":false,"type":"company"},
    {"key":273,"countryKey":229,"name":"Berry Petroleum Corp.","suffix":"BRY","tasksCount":5,"isActive":false,"type":"company"},
    {"key":274,"countryKey":29,"name":"Bassett Furniture Industries, Inc.","suffix":"BSET","tasksCount":2,"isActive":false,"type":"company"},
    {"key":275,"countryKey":154,"name":"BioSig Technologies, Inc.","suffix":"BSGM","tasksCount":5,"isActive":false,"type":"company"},
    {"key":276,"countryKey":226,"name":"BrightSphere Investment Group, Inc.","suffix":"BSIG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":277,"countryKey":242,"name":"Sierra Bancorp","suffix":"BSRR","tasksCount":3,"isActive":false,"type":"company"},
    {"key":278,"countryKey":111,"name":"Biospecifics Technologies Corp.","suffix":"BSTC","tasksCount":2,"isActive":false,"type":"company"},
    {"key":279,"countryKey":154,"name":"Bank7 Corp.","suffix":"BSVN","tasksCount":4,"isActive":false,"type":"company"},
    {"key":280,"countryKey":144,"name":"BioXcel Therapeutics, Inc.","suffix":"BTAI","tasksCount":2,"isActive":true,"type":"company"},
    {"key":281,"countryKey":190,"name":"Peabody Energy Corp.","suffix":"BTU","tasksCount":1,"isActive":false,"type":"company"},
    {"key":282,"countryKey":229,"name":"First Busey Corp.","suffix":"BUSE","tasksCount":4,"isActive":true,"type":"company"},
    {"key":283,"countryKey":226,"name":"BrightView Holdings, Inc.","suffix":"BV","tasksCount":1,"isActive":false,"type":"company"},
    {"key":284,"countryKey":146,"name":"Bridgewater Bancshares, Inc.","suffix":"BWB","tasksCount":3,"isActive":false,"type":"company"},
    {"key":285,"countryKey":214,"name":"Bankwell Financial Group, Inc.","suffix":"BWFG","tasksCount":2,"isActive":false,"type":"company"},
    {"key":286,"countryKey":154,"name":"BlueLinx Holdings, Inc.","suffix":"BXC","tasksCount":1,"isActive":false,"type":"company"},
    {"key":287,"countryKey":226,"name":"Bluegreen Vacations Corp.","suffix":"BXG","tasksCount":4,"isActive":false,"type":"company"},
    {"key":288,"countryKey":230,"name":"Blackstone Mortgage Trust, Inc.","suffix":"BXMT","tasksCount":3,"isActive":false,"type":"company"},
    {"key":289,"countryKey":214,"name":"BancorpSouth Bank","suffix":"BXS","tasksCount":2,"isActive":false,"type":"company"},
    {"key":290,"countryKey":226,"name":"Byline Bancorp, Inc.","suffix":"BY","tasksCount":3,"isActive":false,"type":"company"},
    {"key":291,"countryKey":190,"name":"Boyd Gaming Corp.","suffix":"BYD","tasksCount":1,"isActive":false,"type":"company"},
    {"key":292,"countryKey":214,"name":"BeyondSpring, Inc.","suffix":"BYSI","tasksCount":4,"isActive":false,"type":"company"},
    {"key":293,"countryKey":146,"name":"Beazer Homes USA, Inc.","suffix":"BZH","tasksCount":3,"isActive":false,"type":"company"},
    {"key":294,"countryKey":154,"name":"Camden National Corp. (Maine)","suffix":"CAC","tasksCount":4,"isActive":false,"type":"company"},
    {"key":295,"countryKey":135,"name":"Cadence Bancorporation","suffix":"CADE","tasksCount":1,"isActive":false,"type":"company"},
    {"key":296,"countryKey":135,"name":"CAI International, Inc.","suffix":"CAI","tasksCount":3,"isActive":false,"type":"company"},
    {"key":297,"countryKey":230,"name":"Cheesecake Factory, Inc.","suffix":"CAKE","tasksCount":5,"isActive":false,"type":"company"},
    {"key":298,"countryKey":29,"name":"Caleres, Inc.","suffix":"CAL","tasksCount":3,"isActive":false,"type":"company"},
    {"key":299,"countryKey":230,"name":"Calithera Biosciences, Inc.","suffix":"CALA","tasksCount":4,"isActive":false,"type":"company"},
    {"key":300,"countryKey":154,"name":"Cal-Maine Foods, Inc.","suffix":"CALM","tasksCount":2,"isActive":false,"type":"company"}    
  ]`;

