// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [CommonModule],
// })
// class DataJsonModule {}

const jsonShareCertificates = `[
  {"key":0,"name":"Ordiary 1","suffix":"Ord","issuedDate":""},
  {"key":1,"name":"IPO","suffix":"IPO","issuedDate":""}
  ]`;

export const mapEntityHeadings = `[
    ["name","Name"],
    ["suffix","Suffix"],
  ]`;

export const mapCompanyHeadings = `[
  ["suffix","Suffix"],
  ["companyTypeKey","Entity type"],
  ["internalCode","Internal code"],
  ["leCode","LE number"],
  ["registrationCode","Entity registration number"],
  ["countryKey","Country of Incorporation"],
  ["representativeOfficeIs","Representative Office "],
  ["foreignBranchIs","Foreign Branch "],
  ["incorporationDate","Incorporation date"],
  ["businessAreaKey","Business area"],
  ["legalClassKey","Legal classification"],
  ["entityStatusKey","Entity status"],
  ["entityStatusTierKey","Entity status tiering"],
  ["incomeTax","Income tax number of the entity"],
  ["vatCode","Value added tax (VAT) number"],
  ["businessDivisionKey","Business division"],
  ["consolidationKey","Consolidated/non-consolidated"],
  ["consolidateUnder","Consolidate under (Bank/Group)"],
  ["accountingClassKey","Accounting classification"],
  ["accountingClassTierKey","Accounting classification tiering"],
  ["parentCompanyKey","Direct Parent/Ownership (Major Shareholder)"],
  ["parentHolding","Direct Parent - % ownership - "],
  ["holdingParentCompanyKey","Absa shareholding in entity - Shareholder"],
  ["holdingHolding","Absa shareholding in the entity – % "],
  ["objectivePublishedDesc","Business objective/Nature of business activities per Annual Financial Statements"],
  ["objectiveRegisteredDesc","Business objective/Nature of business activities per Memorandum of Incorporation"],
  ["picScore","PI Score"],
  ["secretariatKey","Appointed company secretary"],
  ["secretaryKey","Absa group secretariat representative"],
  ["leeKey","Legal entity executive (LEE)"],
  ["leeAppointedDate","LEE appointed date"],
  ["financialOfficerKey","Entity financial officer"],
  ["foAppointedDate","Entity financial officer appointed date"],
  ["publicOfficerKey","Public officer (income tax)"],
  ["publicOfficerAppointedDate","Public office appointment date"],
  ["auditorKey","Auditors"],
  ["auditorAppointedDate","Auditor appointment date"],
  ["auditPartnerKey","Audit Parner"],
  ["auditAppointedDate","Audit partner appointment date"],
  ["listedCode","Share code"],
  ["isinCode","ISIN code"],
  ["leiCode","LEI Number (Bloomberg code)"],
  ["reutersCode","Reuters code"],
  ["industryKey","Industry"],
  ["anniversaryMonthKey","Anniversary  month"],
  ["businessStartDate","Business start date"],
  ["fyeMonthKey","FYE month"],
  ["keepingCertificatesIs","Certificates are kept"],
  ["connectedEntityIs","Interconnected within group"],
  ["connectedEntityDesc","Interconnected entity name"],
  ["currNameEffDate","Current name effective date"],
  ["prevName","Previous name"],
  ["prevNameEffDate","Previous name effective date"],
  ["regulatorKeys","Regulators"],
  ["portfolioKeys","Portfolios"],
  ["shareCertificateKeys","Share Issues"],
  ["propertyKeys","Properties"],
  ["appointmentKeys","Appointments"],
  ["addressKeys","Addresses"],
  ["shareholdingKeys","Shareholding"]
]`;

const jsonShareholdings = `[
  {"key":0,"name":"100","shareTypeKey":"0","individualKey":"1","companyKey":"0","shareCount":"100"},
  {"key":1,"name":"1000","shareTypeKey":"0","individualKey":"2","companyKey":"1","shareCount":"1000"},
  {"key":2,"name":"10000","shareTypeKey":"1","individualKey":"3","companyKey":"2","shareCount":"10000"},
  {"key":3,"name":"1000000","shareTypeKey":"1","individualKey":"4","companyKey":"3","shareCount":"1000000"}
  ]`;

const jsonAddresses = `[
    {"key":0,"name":"Primary","addressTypeKey":"0","cityKey":"0","text":"5th Str 4"},
    {"key":1,"name":"Secondary","addressTypeKey":"1","cityKey":"0","text":"3th Str 3"},
    {"key":2,"name":"Primary","addressTypeKey":"0","cityKey":"3","text":"Main Ave 1"},
    {"key":3,"name":"Secondary","addressTypeKey":"1","cityKey":"4","text":"Main Ave 2"}
    ]`;

// const jsonShareholders = `[
//   {"key":0,"name":"","shareTypeKey":"0","individualKey":"1","companyKey":"0","shareCount":"100"},
//   {"key":1,"name":"","shareTypeKey":"0","individualKey":"2","companyKey":"1","shareCount":"1000"},
//   {"key":2,"name":"","shareTypeKey":"1","individualKey":"3","companyKey":"2","shareCount":"10000"},
//   {"key":3,"name":"","shareTypeKey":"1","individualKey":"4","companyKey":"3","shareCount":"1000000"}
//   ]`;

const jsonAppointments = `[
    {"key":0,"name":"Chairperson","companyKey":"0","individualKey":"0","startDate":"","endDate":""},
    {"key":1,"name":"Director","companyKey":"0","individualKey":"1","startDate":"","endDate":""},
    {"key":2,"name":"Director","companyKey":"1","individualKey":"3","startDate":"","endDate":""},
    {"key":3,"name":"Director","companyKey":"1","individualKey":"1","startDate":"","endDate":""},
    {"key":4,"name":"Director","companyKey":"2","individualKey":"0","startDate":"","endDate":""},
    {"key":5,"name":"Director","companyKey":"2","individualKey":"1","startDate":"","endDate":""},
    {"key":6,"name":"Director","companyKey":"3","individualKey":"3","startDate":"","endDate":""},
    {"key":7,"name":"Director","companyKey":"3","individualKey":"4","startDate":"","endDate":""},
    {"key":8,"name":"Director","companyKey":"4","individualKey":"5","startDate":"","endDate":""}
    ]`;

const jsonShareTypes = `[
    {"key":0,"name":"Ord"},
    {"key":1,"name":"Pref"}
    ]`;

const jsonProperties = `[
      {"key":0,"name":"Sandton HQ","addressKey":"0"},
      {"key":1,"name":"London Branch","addressKey":"1"},
      {"key":2,"name":"Cape Town office","addressKey":"3"}
      ]`;

const jsonContactTypes = `[
  {"key":0,"name":"Company Primary Contact"},
  {"key":1,"name":"Company Secondary contact"},
  {"key":2,"name":"Company Optional contact"},
  {"key":3,"name":"Compliance Officer Contact Details"},
  {"key":4,"name":"Rick Officer Contact Details"},
  {"key":5,"name":"Legal Councel/Internal Contact details"},
  {"key":6,"name":"Legal Councel/External Contact details"},
  {"key":7,"name":"Finance Contact Details"},
  {"key":8,"name":"Group Tax Contact Details"}
  ]`;

const jsonAddressTypes = `[
    {"key":0,"name":"Physical"},
    {"key":1,"name":"Postal"}
    ]`;

const jsonAccountingClasses = `[
  {"key":0,"name":"Group holding company: Subsidiaries"},
  {"key":1,"name":"Joint ventures - equity accounted"},
  {"key":2,"name":"Structured entity"},
  {"key":3,"name":"Unconsolidated structured entity"},
  {"key":4,"name":"Associates - equity accounted"},
  {"key":5,"name":"Investments"},
  {"key":6,"name":"Unlisted equity investments held at fair value through profit or loss - property valuation"},
  {"key":7,"name":"Group holding company "}
  ]`;

const jsonAccountingClassTiers = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`;

const jsonConsolidation = `[
  {"key":0,"name":"Consolidated"},
  {"key":1,"name":"Not Consolidated"}
  ]`;

const jsonBusinessAreas = `[
  {"key":0,"name":"Head Office Function"},
  {"key":1,"name":"Retail and Business Banking (RBB)"},
  {"key":2,"name":"Corporate and Investment Bank (CIB)"},
  {"key":3,"name":"Absa Financial Services Group (AFS)"},
  {"key":4,"name":"Absa Regional Operations (ARO)"},
  {"key":5,"name":"Enterprise Function"},
  {"key":6,"name":"Head Office Function"}
  ]`;

const jsonLegalClasses = `[
  {"key":0,"name":"Group holding company Subsidiaries"},
  {"key":1,"name":"Joint ventures"},
  {"key":2,"name":"Structured special purpose"},
  {"key":3,"name":"Structured special purpose - Trust"},
  {"key":4,"name":"Associates - significant influence but no control over its operating and financial policies"},
  {"key":5,"name":"Association agreement"},
  {"key":6,"name":"Investments"},
  {"key":7,"name":"Joint arrangement"},
  {"key":8,"name":"Group holding company "}
  ]`;

const jsonEntityStatuses = `[
  {"key":0,"name":"Active"},
  {"key":1,"name":"Passively Trading"},
  {"key":2,"name":"Non Trading"},
  {"key":3,"name":"Dormant"},
  {"key":4,"name":"Process of deregistration"}
  ]`;

const jsonEntityStatusTiers = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`;

const jsonBusinessDivisions = `[
  {"key":0,"name":"Retail"},
  {"key":1,"name":"Investments"},
  {"key":2,"name":"Credit"}
  ]`;

const jsonCompanyTypes = `[
    {"key":0,"name":"Fund"},
    {"key":1,"name":"Investment"},
    {"key":2,"name":"Joint Venture"},
    {"key":3,"name":"Non-profit company"},
    {"key":4,"name":"Private company"},
    {"key":5,"name":"Public Company"},
    {"key":6,"name":"Scheme"},
    {"key":7,"name":"Trust"}
    ]`;

const jsonIndustries = `[
  {"key":0,"name":"Banking"},
  {"key":1,"name":"Asset Management"},
  {"key":2,"name":"Property"}
  ]`;

const jsonSecretariats = `[
  {"key":0,"name":"Internal"},
  {"key":1,"name":"PWC"}
  ]`;

const jsonAuditors = `[
  {"key":0,"name":"KPMG"},
  {"key":1,"name":"PWC"},
  {"key":2,"name":"Deloitte"}
  ]`;

const jsonContactPreferences = `[
  {"key":0,"name":"Email"},
  {"key":1,"name":"Call"},
  {"key":2,"name":"Text"}
  ]`;

const jsonTaskTypes = `[
  {"key":0,"name":"Create Company"},
  {"key":1,"name":"Amend Company"}
  ]`;

const jsonTaskStatuses = `[
  {"key":0,"name":"Doing"},
  {"key":1,"name":"Done"}
  ]`;

const jsonYesNo = `[
  {"key":1,"name":"Yes"},
  {"key":0,"name":"No"}
  ]`;

const jsonTrusts = `[
  {"key":0,"name":"Northern Trust","suffix":"NTH"},
  {"key":1,"name":"BEE Trust","suffix":"BEET"}
  ]`;

const jsonRegulations = `[
  {"key":0,"name":"Companies Act 71 of 2008","suffix":"FSCA"},
  {"key":1,"name":"Protection of Personal Information Act 4 of 2013","suffix":"POPIA"},
  {"key":2,"name":"Trust Property Control Act 57 of 1988","suffix":"TPCA"}
  ]`;

const jsonRegulators = `[
    {"key":0,"name":"Financial Services Conduct Authority","suffix":"FSCA"},
    {"key":1,"name":"South Africian Reserve Bank","suffix":"SARB"},
    {"key":2,"name":"JSE","suffix":"JSE"},
    {"key":3,"name":"Securities and Exchange Commission","suffix":"SEC"}
    ]`;

const jsonAccountingTiers = `[
  {"key":0,"name":"Top"},
  {"key":1,"name":"Middle"},
  {"key":2,"name":"Low"}
  ]`;

const jsonUsers = `[
  {"key":0,"firstName":"Vlad","surname":"Anuchin"},
  {"key":1,"firstName":"Alex","surname":"Voznesenskey"},
  {"key":2,"firstName":"Ulrich","surname":"Kurchner"},
  {"key":3,"firstName":"Samantha","surname":"Rajagopaul"},
  {"key":4,"firstName":"Lourika","surname":"Stander"}
  ]`;

const jsonCities = `[
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

const jsonPortfolios = `[
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

const jsonCountriesWithTasks = `[
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
]`;

const jsonCountries = `[
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

const jsonFiles = `[
  {"key":0,"fileName":"moi.pdf","name":"MOI","description":""},
  {"key":1,"fileName":"res.pdf","name":"Resolution 1","description":"second file"},
  {"key":2,"fileName":"res.pdf","name":"Resolution 2","description":"third file"},
  {"key":3,"fileName":"moi.pdf","name":"MOI 1","description":""},
  {"key":4,"fileName":"res.pdf","name":"Resolution 3","description":"second file"},
  {"key":5,"fileName":"res.pdf","name":"Resolution 4","description":"third file"},
  {"key":6,"fileName":"moi.pdf","name":"MOI 2","description":""}
]`;

const jsonTemplates = `[
  {"key":0,"fileName":"moi.pdf","name":"CoR14","description":"Register"},
  {"key":1,"fileName":"res.pdf","name":"CoR15","description":"Appoint"},
  {"key":2,"fileName":"res.pdf","name":"CoR16","description":"Share Issue"},
  {"key":3,"fileName":"moi.pdf","name":"CoR17","description":"Resign"},
  {"key":4,"fileName":"res.pdf","name":"CoR18","description":"Rename"},
  {"key":5,"fileName":"res.pdf","name":"CoR19","description":"Deregister"},
  {"key":6,"fileName":"moi.pdf","name":"CoR20","description":"Move Address"}
]`;

const jsonAttendees = `[
  {"key":0,"surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true,"attended":false},
  {"key":1,"surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true,"attended":true},
  {"key":2,"surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false,"attended":true},
  {"key":3,"surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true,"attended":false},
  {"key":4,"surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true,"attended":true}
]`;

const jsonMeetings = `[
  {"key":0,"dateTime":"2020-05-12 12:30","name":"Introduction","description":"Roles and Responsibilities"},
  {"key":1,"dateTime":"2020-06-12","name":"BRD","description":"Business Requirement Document"},
  {"key":2,"dateTime":"2020-07-12","name":"Approvals","description":"Committee approvals"},
  {"key":3,"dateTime":"2020-08-12","name":"POC","description":"Proof of Concept"},
  {"key":4,"dateTime":"2020-09-12","name":"POC Approvals","description":"POC approvals and comments"},
  {"key":5,"dateTime":"2020-10-12","name":"Version 1 Deployment","description":"First deployment and experience"},
  {"key":6,"dateTime":"2020-11-12","name":"Testing","description":"User testing"}
]`;

const jsonReports = `[
  {"key":0,"dateTime":"2020-05-12 12:30","name":"Organogram","description":"Structure of holdings"},
  {"key":1,"dateTime":"2020-06-12","name":"Regisry","description":"Directors registry"},
  {"key":2,"dateTime":"2020-07-12","name":"CIPC 14","description":"CIPC form form..."},
  {"key":3,"dateTime":"2020-08-12","name":"CIPC 15","description":"CIPC form form..."},
  {"key":4,"dateTime":"2020-09-12","name":"CIPC 39","description":"CIPC form form..."}
]`;

const jsonCompanyStatuses = `[
  {"key":0,"name":"Active"},
  {"key":1,"name":"Nontrading"},
  {"key":2,"name":"Dormant, passively trading"},
  {"key":3,"name":"Deregistered"}
]`;

const jsonDivisions = `[
  {"key":0,"name":"Corporate Investment Banking"},
  {"key":1,"name":"Retail and Business Banking"},
  {"key":2,"name":"Enterprise function"},
  {"key":3,"name":"Absa Regional Operations"},
  {"key":4,"name":"AFS Group"}
]`;

// const jsonDashboards = `[
//   {"key":0,"name":"Dashboard","tasksCount":28,"isActive":true},
//   {"key":1,"name":"Search","tasksCount":20,"isActive":true},
//   {"key":2,"name":"Company","tasksCount":13,"isActive":true},
//   {"key":3,"name":"Individual","tasksCount":12,"isActive":true},
//   {"key":4,"name":"User","tasksCount":17,"isActive":true}
// ]`;

// const jsonDashboardsPlural = `[
//   {"key":0,"name":"Dashboard","tasksCount":28,"isActive":true},
//   {"key":1,"name":"Search","tasksCount":20,"isActive":true},
//   {"key":2,"name":"Companies","tasksCount":13,"isActive":true},
//   {"key":3,"name":"Individuals","tasksCount":12,"isActive":true},
//   {"key":4,"name":"Users","tasksCount":17,"isActive":true}
// ]`;

const jsonMonths = `[
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

const jsonCapacities = `[
  {"key":0,"name":"Executive Director"},
  {"key":1,"name":"Non-Executive Diretor"},
  {"key":2,"name":"Secretary"},
  {"key":3,"name":"Public Officer"}
  ]`;

const jsonPeriods = `[
  {"key":0,"name":"Daily"},
  {"key":1,"name":"Weekly"},
  {"key":2,"name":"Monthly"},
  {"key":3,"name":"Quarterly"},
  {"key":4,"name":"Annualy"}
]`;

const jsonIndividuals = `[
  {"key":0,"countryKey":144,"surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true},
  {"key":1,"countryKey":230,"surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true},
  {"key":2,"countryKey":242,"surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false},
  {"key":3,"countryKey":135,"surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true},
  {"key":4,"countryKey":242,"surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true},
  {"key":5,"countryKey":154,"surname":"CARON","firstName":"ALEXANDRE","suffix":"Canada East","tasksCount":2,"isActive":true},
  {"key":6,"countryKey":229,"surname":"CHALFUN","firstName":"PABLO","suffix":"South America","tasksCount":3,"isActive":true},
  {"key":7,"countryKey":135,"surname":"COLLINS","firstName":"LOGAN","suffix":"South Central","tasksCount":2,"isActive":true},
  {"key":8,"countryKey":230,"surname":"COLTEY","firstName":"JOHN","suffix":"South East","tasksCount":0,"isActive":true},
  {"key":9,"countryKey":135,"surname":"DUNNE","firstName":"ROYCE","suffix":"Australasia","tasksCount":4,"isActive":true},
  {"key":10,"countryKey":214,"surname":"ENDERTON","firstName":"JARED","suffix":"South West","tasksCount":1,"isActive":true},
  {"key":11,"countryKey":230,"surname":"ESSLINGER","firstName":"LUKAS","suffix":"Europe South","tasksCount":2,"isActive":true},
  {"key":12,"countryKey":83,"surname":"FIKOWSKI","firstName":"BRENT","suffix":"Canada West","tasksCount":4,"isActive":true},
  {"key":13,"countryKey":229,"surname":"FRASER","firstName":"MATHEW","suffix":"Central East","tasksCount":3,"isActive":false},
  {"key":14,"countryKey":154,"surname":"GAMBOA","firstName":"ROGELIO","suffix":"South Central","tasksCount":3,"isActive":true},
  {"key":15,"countryKey":83,"surname":"GEORGES","firstName":"WILLY","suffix":"Europe South","tasksCount":4,"isActive":true},
  {"key":16,"countryKey":83,"surname":"GROVE","firstName":"ZEKE","suffix":"Australasia","tasksCount":4,"isActive":true},
  {"key":17,"countryKey":190,"surname":"GUÐMUNDSSON","firstName":"BJÖRGVIN KARL","suffix":"Europe North","tasksCount":0,"isActive":true},
  {"key":18,"countryKey":111,"surname":"HELBIG","firstName":"ETHAN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true},
  {"key":19,"countryKey":202,"surname":"HÖGBERG","firstName":"LUKAS","suffix":"Europe North","tasksCount":0,"isActive":true},
  {"key":20,"countryKey":190,"surname":"JONES","firstName":"MARQUAN","suffix":"North East","tasksCount":0,"isActive":true},
  {"key":21,"countryKey":190,"surname":"KENNEY","firstName":"CRAIG","suffix":"North East","tasksCount":3,"isActive":true},
  {"key":22,"countryKey":135,"surname":"KHRENNIKOV","firstName":"ROMAN","suffix":"Europe North","tasksCount":1,"isActive":true},
  {"key":23,"countryKey":202,"surname":"LINDER-LEIGHTON","firstName":"DEAN","suffix":"Australasia","tasksCount":2,"isActive":true},
  {"key":24,"countryKey":146,"surname":"LUCKETT","firstName":"BRANDON","suffix":"South Central","tasksCount":1,"isActive":true},
  {"key":25,"countryKey":146,"surname":"MUNDWILER","firstName":"ADRIAN","suffix":"Europe Central","tasksCount":5,"isActive":true},
  {"key":26,"countryKey":242,"surname":"NEWBURY","firstName":"JAMES","suffix":"Australasia","tasksCount":2,"isActive":true},
  {"key":27,"countryKey":229,"surname":"OHLSEN","firstName":"NOAH","suffix":"South East","tasksCount":2,"isActive":true},
  {"key":28,"countryKey":144,"surname":"PANCHIK","firstName":"SCOTT","suffix":"Central East","tasksCount":4,"isActive":false},
  {"key":29,"countryKey":135,"surname":"PANCHIK","firstName":"SAXON","suffix":"Central East","tasksCount":4,"isActive":true},
  {"key":30,"countryKey":111,"surname":"PAULSON","firstName":"TIM","suffix":"North East","tasksCount":4,"isActive":true},
  {"key":31,"countryKey":202,"surname":"PORTER","firstName":"KHAN","suffix":"Australasia","tasksCount":4,"isActive":true},
  {"key":32,"countryKey":154,"surname":"SAGER","firstName":"COLE","suffix":"West Coast","tasksCount":2,"isActive":false},
  {"key":33,"countryKey":226,"surname":"SIMMONDS","firstName":"ELLIOT","suffix":"Africa Middle East","tasksCount":2,"isActive":true},
  {"key":34,"countryKey":214,"surname":"SMITH","firstName":"BEN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true},
  {"key":35,"countryKey":226,"surname":"SMITH","firstName":"ALEC","suffix":"Mid Atlantic","tasksCount":4,"isActive":true},
  {"key":36,"countryKey":144,"surname":"STEVENSON","firstName":"MITCHEL","suffix":"West Coast","tasksCount":4,"isActive":true},
  {"key":37,"countryKey":202,"surname":"SWEENEY","firstName":"SEAN","suffix":"South West","tasksCount":1,"isActive":true},
  {"key":38,"countryKey":190,"surname":"URANKAR","firstName":"NICHOLAS","suffix":"Central East","tasksCount":5,"isActive":true},
  {"key":39,"countryKey":230,"surname":"VELLNER","firstName":"PATRICK","suffix":"Canada East","tasksCount":1,"isActive":false}
  ]`;

const jsonCompanies = `[
    {"key":0,"countryKey":229,"name":"Aaron's, Inc.","suffix":"AAN","tasksCount":0,"isActive":false},
    {"key":1,"countryKey":226,"name":"Applied Optoelectronics, Inc.","suffix":"AAOI","tasksCount":1,"isActive":false},
    {"key":2,"countryKey":229,"name":"AAON, Inc.","suffix":"AAON","tasksCount":2,"isActive":true},
    {"key":3,"countryKey":83,"name":"American Assets Trust, Inc.","suffix":"AAT","tasksCount":5,"isActive":true},
    {"key":4,"countryKey":135,"name":"Atlas Air Worldwide Holdings, Inc.","suffix":"AAWW","tasksCount":1,"isActive":false},
    {"key":5,"countryKey":190,"name":"Axon Enterprise, Inc.","suffix":"AAXN","tasksCount":4,"isActive":false},
    {"key":6,"countryKey":230,"name":"Ameris Bancorp","suffix":"ABCB","tasksCount":1,"isActive":false},
    {"key":7,"countryKey":230,"name":"Abeona Therapeutics, Inc.","suffix":"ABEO","tasksCount":4,"isActive":false},
    {"key":8,"countryKey":229,"name":"Asbury Automotive Group, Inc.","suffix":"ABG","tasksCount":5,"isActive":true},
    {"key":9,"countryKey":29,"name":"ABM Industries, Inc.","suffix":"ABM","tasksCount":2,"isActive":false},
    {"key":10,"countryKey":226,"name":"Allegiance Bancshares, Inc. (Texas)","suffix":"ABTX","tasksCount":2,"isActive":false},
    {"key":11,"countryKey":83,"name":"Associated Capital Group, Inc.","suffix":"AC","tasksCount":4,"isActive":false},
    {"key":12,"countryKey":190,"name":"Arcosa, Inc.","suffix":"ACA","tasksCount":2,"isActive":false},
    {"key":13,"countryKey":226,"name":"ACADIA Pharmaceuticals, Inc.","suffix":"ACAD","tasksCount":2,"isActive":false},
    {"key":14,"countryKey":226,"name":"Atlantic Capital Bancshares, Inc.","suffix":"ACBI","tasksCount":5,"isActive":false},
    {"key":15,"countryKey":83,"name":"ACCO Brands Corp.","suffix":"ACCO","tasksCount":0,"isActive":false},
    {"key":16,"countryKey":229,"name":"Acer Therapeutics, Inc.","suffix":"ACER","tasksCount":1,"isActive":false},
    {"key":17,"countryKey":226,"name":"Achillion Pharmaceuticals, Inc.","suffix":"ACHN","tasksCount":5,"isActive":false},
    {"key":18,"countryKey":229,"name":"Acacia Communications, Inc.","suffix":"ACIA","tasksCount":1,"isActive":false},
    {"key":19,"countryKey":230,"name":"ACI Worldwide, Inc.","suffix":"ACIW","tasksCount":0,"isActive":true},
    {"key":20,"countryKey":190,"name":"Axcelis Technologies, Inc.","suffix":"ACLS","tasksCount":1,"isActive":false},
    {"key":21,"countryKey":29,"name":"ACNB Corp.","suffix":"ACNB","tasksCount":2,"isActive":false},
    {"key":22,"countryKey":83,"name":"Acorda Therapeutics, Inc.","suffix":"ACOR","tasksCount":1,"isActive":false},
    {"key":23,"countryKey":154,"name":"Ares Commercial Real Estate Corp.","suffix":"ACRE","tasksCount":3,"isActive":false},
    {"key":24,"countryKey":226,"name":"Aclaris Therapeutics, Inc.","suffix":"ACRS","tasksCount":3,"isActive":false},
    {"key":25,"countryKey":202,"name":"AcelRx Pharmaceuticals, Inc.","suffix":"ACRX","tasksCount":2,"isActive":false},
    {"key":26,"countryKey":230,"name":"Acacia Research Corp.","suffix":"ACTG","tasksCount":4,"isActive":false},
    {"key":27,"countryKey":154,"name":"Agree Realty Corp.","suffix":"ADC","tasksCount":5,"isActive":false},
    {"key":28,"countryKey":226,"name":"Advanced Emissions Solutions, Inc.","suffix":"ADES","tasksCount":3,"isActive":false},
    {"key":29,"countryKey":226,"name":"ADMA Biologics, Inc.","suffix":"ADMA","tasksCount":1,"isActive":true},
    {"key":30,"countryKey":29,"name":"Adamas Pharmaceuticals, Inc.","suffix":"ADMS","tasksCount":1,"isActive":false},
    {"key":31,"countryKey":214,"name":"Adient plc","suffix":"ADNT","tasksCount":5,"isActive":false},
    {"key":32,"countryKey":229,"name":"Aduro BioTech, Inc.","suffix":"ADRO","tasksCount":3,"isActive":false},
    {"key":33,"countryKey":214,"name":"Advanced Disposal Services, Inc.","suffix":"ADSW","tasksCount":0,"isActive":false},
    {"key":34,"countryKey":83,"name":"ADTRAN, Inc.","suffix":"ADTN","tasksCount":2,"isActive":false},
    {"key":35,"countryKey":146,"name":"Addus HomeCare Corp.","suffix":"ADUS","tasksCount":5,"isActive":false},
    {"key":36,"countryKey":144,"name":"Adverum Biotechnologies, Inc.","suffix":"ADVM","tasksCount":3,"isActive":true},
    {"key":37,"countryKey":214,"name":"Aegion Corp.","suffix":"AEGN","tasksCount":1,"isActive":false},
    {"key":38,"countryKey":154,"name":"Advanced Energy Industries, Inc.","suffix":"AEIS","tasksCount":2,"isActive":true},
    {"key":39,"countryKey":135,"name":"American Equity Investment Life Holding Co.","suffix":"AEL","tasksCount":0,"isActive":false},
    {"key":40,"countryKey":230,"name":"American Eagle Outfitters, Inc.","suffix":"AEO","tasksCount":4,"isActive":false},
    {"key":41,"countryKey":146,"name":"Aerie Pharmaceuticals, Inc.","suffix":"AERI","tasksCount":2,"isActive":false},
    {"key":42,"countryKey":214,"name":"Armstrong Flooring, Inc.","suffix":"AFI","tasksCount":5,"isActive":true},
    {"key":43,"countryKey":144,"name":"American Finance Trust, Inc.","suffix":"AFIN","tasksCount":3,"isActive":false},
    {"key":44,"countryKey":135,"name":"Affimed NV","suffix":"AFMD","tasksCount":1,"isActive":false},
    {"key":45,"countryKey":29,"name":"AgeX Therapeutics, Inc.","suffix":"AGE","tasksCount":2,"isActive":false},
    {"key":46,"countryKey":135,"name":"Agenus, Inc.","suffix":"AGEN","tasksCount":5,"isActive":false},
    {"key":47,"countryKey":229,"name":"Aeglea Biotherapeutics, Inc.","suffix":"AGLE","tasksCount":0,"isActive":false},
    {"key":48,"countryKey":226,"name":"Federal Agricultural Mortgage Corp.","suffix":"AGM","tasksCount":1,"isActive":false},
    {"key":49,"countryKey":190,"name":"PlayAGS, Inc.","suffix":"AGS","tasksCount":5,"isActive":false},
    {"key":50,"countryKey":29,"name":"Argan, Inc.","suffix":"AGX","tasksCount":0,"isActive":false},
    {"key":51,"countryKey":144,"name":"Agilysys, Inc.","suffix":"AGYS","tasksCount":5,"isActive":true},
    {"key":52,"countryKey":229,"name":"Armada Hoffler Properties, Inc.","suffix":"AHH","tasksCount":3,"isActive":false},
    {"key":53,"countryKey":111,"name":"Ashford Hospitality Trust, Inc.","suffix":"AHT","tasksCount":4,"isActive":false},
    {"key":54,"countryKey":111,"name":"Arlington Asset Investment Corp.","suffix":"AI","tasksCount":2,"isActive":false},
    {"key":55,"countryKey":230,"name":"Altra Industrial Motion Corp.","suffix":"AIMC","tasksCount":1,"isActive":false},
    {"key":56,"countryKey":226,"name":"Aimmune Therapeutics, Inc.","suffix":"AIMT","tasksCount":3,"isActive":true},
    {"key":57,"countryKey":154,"name":"Albany International Corp.","suffix":"AIN","tasksCount":2,"isActive":false},
    {"key":58,"countryKey":230,"name":"AAR Corp.","suffix":"AIR","tasksCount":4,"isActive":false},
    {"key":59,"countryKey":230,"name":"Airgain, Inc.","suffix":"AIRG","tasksCount":4,"isActive":false},
    {"key":60,"countryKey":135,"name":"Applied Industrial Technologies, Inc.","suffix":"AIT","tasksCount":4,"isActive":false},
    {"key":61,"countryKey":230,"name":"Aerojet Rocketdyne Holdings, Inc.","suffix":"AJRD","tasksCount":0,"isActive":false},
    {"key":62,"countryKey":154,"name":"Great Ajax Corp.","suffix":"AJX","tasksCount":1,"isActive":false},
    {"key":63,"countryKey":230,"name":"Akebia Therapeutics, Inc.","suffix":"AKBA","tasksCount":0,"isActive":false},
    {"key":64,"countryKey":146,"name":"Akcea Therapeutics, Inc.","suffix":"AKCA","tasksCount":2,"isActive":true},
    {"key":65,"countryKey":146,"name":"Acadia Realty Trust","suffix":"AKR","tasksCount":4,"isActive":false},
    {"key":66,"countryKey":154,"name":"Akero Therapeutics, Inc.","suffix":"AKRO","tasksCount":2,"isActive":false},
    {"key":67,"countryKey":242,"name":"Akorn, Inc.","suffix":"AKRX","tasksCount":1,"isActive":true},
    {"key":68,"countryKey":29,"name":"AK Steel Holding Corp.","suffix":"AKS","tasksCount":4,"isActive":false},
    {"key":69,"countryKey":83,"name":"Akoustis Technologies, Inc.","suffix":"AKTS","tasksCount":2,"isActive":false},
    {"key":70,"countryKey":83,"name":"Albireo Pharma, Inc.","suffix":"ALBO","tasksCount":5,"isActive":false},
    {"key":71,"countryKey":190,"name":"Alico, Inc.","suffix":"ALCO","tasksCount":2,"isActive":false},
    {"key":72,"countryKey":154,"name":"Alder Biopharmaceuticals, Inc.","suffix":"ALDR","tasksCount":2,"isActive":false},
    {"key":73,"countryKey":144,"name":"Aldeyra Therapeutics, Inc.","suffix":"ALDX","tasksCount":0,"isActive":true},
    {"key":74,"countryKey":214,"name":"ALLETE, Inc.","suffix":"ALE","tasksCount":3,"isActive":false},
    {"key":75,"countryKey":230,"name":"Alector, Inc.","suffix":"ALEC","tasksCount":2,"isActive":false},
    {"key":76,"countryKey":229,"name":"Alexander & Baldwin, Inc.","suffix":"ALEX","tasksCount":1,"isActive":false},
    {"key":77,"countryKey":83,"name":"Alamo Group, Inc.","suffix":"ALG","tasksCount":5,"isActive":true},
    {"key":78,"countryKey":144,"name":"Allegiant Travel Co.","suffix":"ALGT","tasksCount":3,"isActive":false},
    {"key":79,"countryKey":154,"name":"Allakos, Inc.","suffix":"ALLK","tasksCount":2,"isActive":false},
    {"key":80,"countryKey":226,"name":"Allogene Therapeutics, Inc.","suffix":"ALLO","tasksCount":5,"isActive":false},
    {"key":81,"countryKey":226,"name":"AstroNova, Inc.","suffix":"ALOT","tasksCount":4,"isActive":false},
    {"key":82,"countryKey":242,"name":"Alarm.com Holdings, Inc.","suffix":"ALRM","tasksCount":3,"isActive":false},
    {"key":83,"countryKey":214,"name":"Altus Midstream Co.","suffix":"ALTM","tasksCount":2,"isActive":false},
    {"key":84,"countryKey":229,"name":"Altair Engineering, Inc.","suffix":"ALTR","tasksCount":1,"isActive":false},
    {"key":85,"countryKey":144,"name":"Alexander's, Inc.","suffix":"ALX","tasksCount":2,"isActive":false},
    {"key":86,"countryKey":230,"name":"AMAG Pharmaceuticals, Inc.","suffix":"AMAG","tasksCount":2,"isActive":false},
    {"key":87,"countryKey":230,"name":"Amalgamated Bank","suffix":"AMAL","tasksCount":0,"isActive":false},
    {"key":88,"countryKey":144,"name":"Ambarella, Inc.","suffix":"AMBA","tasksCount":2,"isActive":false},
    {"key":89,"countryKey":229,"name":"Ambac Financial Group, Inc.","suffix":"AMBC","tasksCount":4,"isActive":false},
    {"key":90,"countryKey":190,"name":"AMC Entertainment Holdings, Inc.","suffix":"AMC","tasksCount":0,"isActive":false},
    {"key":91,"countryKey":190,"name":"Amedisys, Inc.","suffix":"AMED","tasksCount":2,"isActive":false},
    {"key":92,"countryKey":111,"name":"Apollo Medical Holdings, Inc.","suffix":"AMEH","tasksCount":2,"isActive":false},
    {"key":93,"countryKey":144,"name":"AssetMark Financial Holdings, Inc.","suffix":"AMK","tasksCount":2,"isActive":false},
    {"key":94,"countryKey":135,"name":"Amkor Technology, Inc.","suffix":"AMKR","tasksCount":1,"isActive":false},
    {"key":95,"countryKey":214,"name":"AMN Healthcare Services, Inc.","suffix":"AMN","tasksCount":3,"isActive":false},
    {"key":96,"countryKey":226,"name":"American National Bankshares, Inc. (Virginia)","suffix":"AMNB","tasksCount":3,"isActive":false},
    {"key":97,"countryKey":144,"name":"Allied Motion Technologies, Inc.","suffix":"AMOT","tasksCount":3,"isActive":false},
    {"key":98,"countryKey":214,"name":"Amphastar Pharmaceuticals, Inc.","suffix":"AMPH","tasksCount":4,"isActive":false},
    {"key":99,"countryKey":135,"name":"Ameresco, Inc.","suffix":"AMRC","tasksCount":1,"isActive":false},
    {"key":100,"countryKey":83,"name":"Amyris, Inc.","suffix":"AMRS","tasksCount":2,"isActive":true},
    {"key":101,"countryKey":229,"name":"Amneal Pharmaceuticals, Inc.","suffix":"AMRX","tasksCount":5,"isActive":false},
    {"key":102,"countryKey":29,"name":"American Superconductor Corp.","suffix":"AMSC","tasksCount":4,"isActive":false},
    {"key":103,"countryKey":146,"name":"AMERISAFE, Inc.","suffix":"AMSF","tasksCount":2,"isActive":true},
    {"key":104,"countryKey":154,"name":"American Software, Inc.","suffix":"AMSWA","tasksCount":1,"isActive":false},
    {"key":105,"countryKey":229,"name":"Amerant Bancorp, Inc.","suffix":"AMTB","tasksCount":5,"isActive":false},
    {"key":106,"countryKey":29,"name":"American Woodmark Corp.","suffix":"AMWD","tasksCount":1,"isActive":false},
    {"key":107,"countryKey":111,"name":"AnaptysBio, Inc.","suffix":"ANAB","tasksCount":2,"isActive":false},
    {"key":108,"countryKey":229,"name":"The Andersons, Inc.","suffix":"ANDE","tasksCount":1,"isActive":false},
    {"key":109,"countryKey":230,"name":"Abercrombie & Fitch Co.","suffix":"ANF","tasksCount":3,"isActive":true},
    {"key":110,"countryKey":230,"name":"AngioDynamics, Inc.","suffix":"ANGO","tasksCount":4,"isActive":false},
    {"key":111,"countryKey":229,"name":"Anworth Mortgage Asset Corp.","suffix":"ANH","tasksCount":3,"isActive":false},
    {"key":112,"countryKey":190,"name":"Anika Therapeutics, Inc.","suffix":"ANIK","tasksCount":2,"isActive":false},
    {"key":113,"countryKey":202,"name":"ANI Pharmaceuticals, Inc.","suffix":"ANIP","tasksCount":2,"isActive":false},
    {"key":114,"countryKey":144,"name":"American Outdoor Brands Corp.","suffix":"AOBC","tasksCount":0,"isActive":false},
    {"key":115,"countryKey":229,"name":"Alpha & Omega Semiconductor Ltd.","suffix":"AOSL","tasksCount":2,"isActive":false},
    {"key":116,"countryKey":226,"name":"Artisan Partners Asset Management, Inc.","suffix":"APAM","tasksCount":2,"isActive":false},
    {"key":117,"countryKey":111,"name":"American Public Education, Inc.","suffix":"APEI","tasksCount":1,"isActive":false},
    {"key":118,"countryKey":111,"name":"Apellis Pharmaceuticals, Inc.","suffix":"APLS","tasksCount":2,"isActive":false},
    {"key":119,"countryKey":226,"name":"Apogee Enterprises, Inc.","suffix":"APOG","tasksCount":0,"isActive":false},
    {"key":120,"countryKey":144,"name":"AppFolio, Inc.","suffix":"APPF","tasksCount":3,"isActive":false},
    {"key":121,"countryKey":135,"name":"Appian Corp.","suffix":"APPN","tasksCount":3,"isActive":false},
    {"key":122,"countryKey":226,"name":"Digital Turbine, Inc.","suffix":"APPS","tasksCount":1,"isActive":false},
    {"key":123,"countryKey":190,"name":"Preferred Apartment Communities, Inc.","suffix":"APTS","tasksCount":1,"isActive":false},
    {"key":124,"countryKey":83,"name":"Apyx Medical Corp.","suffix":"APYX","tasksCount":2,"isActive":false},
    {"key":125,"countryKey":214,"name":"Evoqua Water Technologies Corp.","suffix":"AQUA","tasksCount":1,"isActive":false},
    {"key":126,"countryKey":135,"name":"American Renal Associates Holdings, Inc.","suffix":"ARA","tasksCount":1,"isActive":false},
    {"key":127,"countryKey":146,"name":"Accuray, Inc.","suffix":"ARAY","tasksCount":5,"isActive":true},
    {"key":128,"countryKey":214,"name":"ArcBest Corp.","suffix":"ARCB","tasksCount":2,"isActive":true},
    {"key":129,"countryKey":83,"name":"Arch Coal, Inc.","suffix":"ARCH","tasksCount":2,"isActive":false},
    {"key":130,"countryKey":144,"name":"Ardelyx, Inc.","suffix":"ARDX","tasksCount":5,"isActive":false},
    {"key":131,"countryKey":226,"name":"Ares Management Corp.","suffix":"ARES","tasksCount":1,"isActive":false},
    {"key":132,"countryKey":226,"name":"Argo Group International Holdings Ltd.","suffix":"ARGO","tasksCount":4,"isActive":false},
    {"key":133,"countryKey":242,"name":"Apollo Commercial Real Estate Finance, Inc.","suffix":"ARI","tasksCount":1,"isActive":false},
    {"key":134,"countryKey":229,"name":"American Realty Investors, Inc.","suffix":"ARL","tasksCount":3,"isActive":false},
    {"key":135,"countryKey":214,"name":"Arlo Technologies, Inc.","suffix":"ARLO","tasksCount":1,"isActive":false},
    {"key":136,"countryKey":135,"name":"Arena Pharmaceuticals, Inc.","suffix":"ARNA","tasksCount":2,"isActive":false},
    {"key":137,"countryKey":135,"name":"Archrock, Inc.","suffix":"AROC","tasksCount":0,"isActive":false},
    {"key":138,"countryKey":226,"name":"Arrow Financial Corp.","suffix":"AROW","tasksCount":2,"isActive":true},
    {"key":139,"countryKey":230,"name":"ArQule, Inc.","suffix":"ARQL","tasksCount":5,"isActive":false},
    {"key":140,"countryKey":226,"name":"ARMOUR Residential REIT, Inc.","suffix":"ARR","tasksCount":4,"isActive":true},
    {"key":141,"countryKey":229,"name":"Artesian Resources Corp.","suffix":"ARTNA","tasksCount":4,"isActive":true},
    {"key":142,"countryKey":242,"name":"Arvinas, Inc.","suffix":"ARVN","tasksCount":1,"isActive":false},
    {"key":143,"countryKey":83,"name":"Arrowhead Pharmaceuticals, Inc.","suffix":"ARWR","tasksCount":1,"isActive":false},
    {"key":144,"countryKey":214,"name":"Ardmore Shipping Corp.","suffix":"ASC","tasksCount":4,"isActive":false},
    {"key":145,"countryKey":229,"name":"ASGN, Inc.","suffix":"ASGN","tasksCount":4,"isActive":false},
    {"key":146,"countryKey":190,"name":"Advansix, Inc.","suffix":"ASIX","tasksCount":2,"isActive":false},
    {"key":147,"countryKey":154,"name":"Assembly Biosciences, Inc.","suffix":"ASMB","tasksCount":1,"isActive":true},
    {"key":148,"countryKey":135,"name":"Ascena Retail Group, Inc.","suffix":"ASNA","tasksCount":0,"isActive":false},
    {"key":149,"countryKey":229,"name":"Altisource Portfolio Solutions SA","suffix":"ASPS","tasksCount":4,"isActive":false},
    {"key":150,"countryKey":214,"name":"Assertio Therapeutics, Inc.","suffix":"ASRT","tasksCount":3,"isActive":false},
    {"key":151,"countryKey":146,"name":"Astec Industries, Inc.","suffix":"ASTE","tasksCount":0,"isActive":false},
    {"key":152,"countryKey":146,"name":"Atlantic Power Corp.","suffix":"AT","tasksCount":1,"isActive":false},
    {"key":153,"countryKey":144,"name":"Alphatec Holdings, Inc.","suffix":"ATEC","tasksCount":4,"isActive":false},
    {"key":154,"countryKey":230,"name":"A10 Networks, Inc.","suffix":"ATEN","tasksCount":1,"isActive":false},
    {"key":155,"countryKey":229,"name":"Anterix, Inc.","suffix":"ATEX","tasksCount":1,"isActive":false},
    {"key":156,"countryKey":214,"name":"Adtalem Global Education, Inc.","suffix":"ATGE","tasksCount":5,"isActive":false},
    {"key":157,"countryKey":135,"name":"Athersys, Inc.","suffix":"ATHX","tasksCount":1,"isActive":false},
    {"key":158,"countryKey":226,"name":"Allegheny Technologies, Inc.","suffix":"ATI","tasksCount":4,"isActive":true},
    {"key":159,"countryKey":135,"name":"Atkore International Group, Inc.","suffix":"ATKR","tasksCount":4,"isActive":false},
    {"key":160,"countryKey":229,"name":"Ames National Corp.","suffix":"ATLO","tasksCount":4,"isActive":false},
    {"key":161,"countryKey":230,"name":"ATN International, Inc.","suffix":"ATNI","tasksCount":3,"isActive":false},
    {"key":162,"countryKey":83,"name":"Athenex, Inc.","suffix":"ATNX","tasksCount":3,"isActive":false},
    {"key":163,"countryKey":29,"name":"Atara Biotherapeutics, Inc.","suffix":"ATRA","tasksCount":4,"isActive":false},
    {"key":164,"countryKey":83,"name":"AtriCure, Inc.","suffix":"ATRC","tasksCount":5,"isActive":false},
    {"key":165,"countryKey":29,"name":"Atrion Corp.","suffix":"ATRI","tasksCount":1,"isActive":false},
    {"key":166,"countryKey":190,"name":"Astronics Corp.","suffix":"ATRO","tasksCount":4,"isActive":false},
    {"key":167,"countryKey":154,"name":"Antares Pharma, Inc.","suffix":"ATRS","tasksCount":2,"isActive":false},
    {"key":168,"countryKey":229,"name":"Air Transport Services Group, Inc.","suffix":"ATSG","tasksCount":1,"isActive":false},
    {"key":169,"countryKey":190,"name":"Atlantic Union Bankshares Corp.","suffix":"AUB","tasksCount":1,"isActive":false},
    {"key":170,"countryKey":144,"name":"Avista Corp.","suffix":"AVA","tasksCount":1,"isActive":true},
    {"key":171,"countryKey":226,"name":"AeroVironment, Inc.","suffix":"AVAV","tasksCount":2,"isActive":false},
    {"key":172,"countryKey":111,"name":"Avalon GloboCare Corp.","suffix":"AVCO","tasksCount":2,"isActive":false},
    {"key":173,"countryKey":226,"name":"American Vanguard Corp.","suffix":"AVD","tasksCount":2,"isActive":false},
    {"key":174,"countryKey":229,"name":"Avedra","suffix":"AVDR","tasksCount":5,"isActive":true},
    {"key":175,"countryKey":135,"name":"Avid Technology, Inc.","suffix":"AVID","tasksCount":1,"isActive":false},
    {"key":176,"countryKey":144,"name":"Avanos Medical, Inc.","suffix":"AVNS","tasksCount":1,"isActive":false},
    {"key":177,"countryKey":146,"name":"Avrobio, Inc.","suffix":"AVRO","tasksCount":2,"isActive":false},
    {"key":178,"countryKey":154,"name":"AVX Corp.","suffix":"AVX","tasksCount":1,"isActive":false},
    {"key":179,"countryKey":214,"name":"Anavex Life Sciences Corp.","suffix":"AVXL","tasksCount":4,"isActive":false},
    {"key":180,"countryKey":154,"name":"Avaya Holdings Corp.","suffix":"AVYA","tasksCount":4,"isActive":false},
    {"key":181,"countryKey":190,"name":"American States Water Co.","suffix":"AWR","tasksCount":1,"isActive":false},
    {"key":182,"countryKey":230,"name":"Axos Financial, Inc.","suffix":"AX","tasksCount":0,"isActive":false},
    {"key":183,"countryKey":144,"name":"Abraxas Petroleum Corp.","suffix":"AXAS","tasksCount":3,"isActive":false},
    {"key":184,"countryKey":111,"name":"Accelerate Diagnostics, Inc.","suffix":"AXDX","tasksCount":4,"isActive":false},
    {"key":185,"countryKey":111,"name":"Anixter International, Inc.","suffix":"AXE","tasksCount":5,"isActive":true},
    {"key":186,"countryKey":146,"name":"AxoGen, Inc.","suffix":"AXGN","tasksCount":4,"isActive":false},
    {"key":187,"countryKey":242,"name":"American Axle & Manufacturing Holdings, Inc.","suffix":"AXL","tasksCount":3,"isActive":true},
    {"key":188,"countryKey":144,"name":"Axcella Health, Inc.","suffix":"AXLA","tasksCount":2,"isActive":false},
    {"key":189,"countryKey":144,"name":"Axonics Modulation Technologies, Inc.","suffix":"AXNX","tasksCount":1,"isActive":false},
    {"key":190,"countryKey":230,"name":"Axsome Therapeutics, Inc.","suffix":"AXSM","tasksCount":2,"isActive":true},
    {"key":191,"countryKey":226,"name":"AXT, Inc.","suffix":"AXTI","tasksCount":5,"isActive":false},
    {"key":192,"countryKey":111,"name":"Aircastle Ltd.","suffix":"AYR","tasksCount":1,"isActive":false},
    {"key":193,"countryKey":83,"name":"AZZ, Inc.","suffix":"AZZ","tasksCount":4,"isActive":false},
    {"key":194,"countryKey":29,"name":"Barnes Group, Inc.","suffix":"B","tasksCount":3,"isActive":false},
    {"key":195,"countryKey":154,"name":"Banc of California, Inc.","suffix":"BANC","tasksCount":3,"isActive":false},
    {"key":196,"countryKey":226,"name":"Bandwidth, Inc.","suffix":"BAND","tasksCount":0,"isActive":false},
    {"key":197,"countryKey":226,"name":"BancFirst Corp. (Oklahoma)","suffix":"BANF","tasksCount":2,"isActive":true},
    {"key":198,"countryKey":214,"name":"Banner Corp.","suffix":"BANR","tasksCount":1,"isActive":true},
    {"key":199,"countryKey":214,"name":"Liberty Media Corp. Liberty Braves","suffix":"BATRA","tasksCount":3,"isActive":false},
    {"key":200,"countryKey":154,"name":"Liberty Media Corp. Liberty Braves","suffix":"BATRK","tasksCount":5,"isActive":false},
    {"key":201,"countryKey":226,"name":"Bed Bath & Beyond, Inc.","suffix":"BBBY","tasksCount":0,"isActive":false},
    {"key":202,"countryKey":111,"name":"Concrete Pumping Holdings, Inc.","suffix":"BBCP","tasksCount":5,"isActive":false},
    {"key":203,"countryKey":146,"name":"BridgeBio Pharma, Inc.","suffix":"BBIO","tasksCount":1,"isActive":false},
    {"key":204,"countryKey":146,"name":"Barrett Business Services, Inc.","suffix":"BBSI","tasksCount":4,"isActive":false},
    {"key":205,"countryKey":226,"name":"BBX Capital Corp.","suffix":"BBX","tasksCount":4,"isActive":false},
    {"key":206,"countryKey":229,"name":"BCB Bancorp, Inc.","suffix":"BCBP","tasksCount":1,"isActive":false},
    {"key":207,"countryKey":190,"name":"Boise Cascade Co.","suffix":"BCC","tasksCount":0,"isActive":false},
    {"key":208,"countryKey":230,"name":"Bonanza Creek Energy, Inc.","suffix":"BCEI","tasksCount":0,"isActive":false},
    {"key":209,"countryKey":229,"name":"Atreca, Inc.","suffix":"BCEL","tasksCount":2,"isActive":false},
    {"key":210,"countryKey":83,"name":"BayCom Corp.","suffix":"BCML","tasksCount":2,"isActive":false},
    {"key":211,"countryKey":144,"name":"The Brink's Co.","suffix":"BCO","tasksCount":2,"isActive":false},
    {"key":212,"countryKey":146,"name":"Blucora, Inc.","suffix":"BCOR","tasksCount":4,"isActive":true},
    {"key":213,"countryKey":111,"name":"Brightcove, Inc.","suffix":"BCOV","tasksCount":3,"isActive":false},
    {"key":214,"countryKey":144,"name":"Balchem Corp.","suffix":"BCPC","tasksCount":0,"isActive":true},
    {"key":215,"countryKey":229,"name":"BioCryst Pharmaceuticals, Inc.","suffix":"BCRX","tasksCount":3,"isActive":false},
    {"key":216,"countryKey":226,"name":"Belden, Inc.","suffix":"BDC","tasksCount":4,"isActive":false},
    {"key":217,"countryKey":146,"name":"Bridge Bancorp, Inc.","suffix":"BDGE","tasksCount":2,"isActive":false},
    {"key":218,"countryKey":226,"name":"BioDelivery Sciences International, Inc.","suffix":"BDSI","tasksCount":5,"isActive":false},
    {"key":219,"countryKey":83,"name":"Bloom Energy Corp.","suffix":"BE","tasksCount":4,"isActive":false},
    {"key":220,"countryKey":214,"name":"BioTelemetry, Inc.","suffix":"BEAT","tasksCount":0,"isActive":false},
    {"key":221,"countryKey":144,"name":"Beacon Roofing Supply, Inc.","suffix":"BECN","tasksCount":0,"isActive":false},
    {"key":222,"countryKey":226,"name":"Bel Fuse, Inc.","suffix":"BELFB","tasksCount":3,"isActive":true},
    {"key":223,"countryKey":214,"name":"Bank First Corp.","suffix":"BFC","tasksCount":2,"isActive":false},
    {"key":224,"countryKey":83,"name":"BankFinancial Corp.","suffix":"BFIN","tasksCount":1,"isActive":false},
    {"key":225,"countryKey":226,"name":"Saul Centers, Inc.","suffix":"BFS","tasksCount":1,"isActive":false},
    {"key":226,"countryKey":29,"name":"Business First Bancshares, Inc.","suffix":"BFST","tasksCount":5,"isActive":false},
    {"key":227,"countryKey":144,"name":"Briggs & Stratton Corp.","suffix":"BGG","tasksCount":0,"isActive":false},
    {"key":228,"countryKey":226,"name":"B&G Foods, Inc.","suffix":"BGS","tasksCount":2,"isActive":false},
    {"key":229,"countryKey":111,"name":"BG Staffing, Inc.","suffix":"BGSF","tasksCount":0,"isActive":false},
    {"key":230,"countryKey":144,"name":"Biglari Holdings, Inc.","suffix":"BH","tasksCount":1,"isActive":false},
    {"key":231,"countryKey":154,"name":"Bar Harbor Bankshares","suffix":"BHB","tasksCount":2,"isActive":false},
    {"key":232,"countryKey":230,"name":"Benchmark Electronics, Inc.","suffix":"BHE","tasksCount":3,"isActive":false},
    {"key":233,"countryKey":135,"name":"Berkshire Hills Bancorp, Inc.","suffix":"BHLB","tasksCount":2,"isActive":false},
    {"key":234,"countryKey":154,"name":"Braemar Hotels & Resorts, Inc.","suffix":"BHR","tasksCount":5,"isActive":false},
    {"key":235,"countryKey":144,"name":"Biohaven Pharmaceutical Holding Co. Ltd.","suffix":"BHVN","tasksCount":3,"isActive":false},
    {"key":236,"countryKey":111,"name":"Big Lots, Inc.","suffix":"BIG","tasksCount":0,"isActive":false},
    {"key":237,"countryKey":111,"name":"Option Care Health, Inc.","suffix":"BIOS","tasksCount":1,"isActive":false},
    {"key":238,"countryKey":229,"name":"BJ's Wholesale Club Holdings, Inc.","suffix":"BJ","tasksCount":3,"isActive":false},
    {"key":239,"countryKey":214,"name":"BJ's Restaurants, Inc.","suffix":"BJRI","tasksCount":1,"isActive":false},
    {"key":240,"countryKey":154,"name":"Brookdale Senior Living, Inc.","suffix":"BKD","tasksCount":2,"isActive":false},
    {"key":241,"countryKey":230,"name":"The Buckle, Inc.","suffix":"BKE","tasksCount":1,"isActive":false},
    {"key":242,"countryKey":214,"name":"Black Hills Corp.","suffix":"BKH","tasksCount":1,"isActive":false},
    {"key":243,"countryKey":242,"name":"BlackLine, Inc.","suffix":"BL","tasksCount":1,"isActive":false},
    {"key":244,"countryKey":135,"name":"Blue Bird Corp.","suffix":"BLBD","tasksCount":1,"isActive":false},
    {"key":245,"countryKey":226,"name":"TopBuild Corp.","suffix":"BLD","tasksCount":2,"isActive":false},
    {"key":246,"countryKey":214,"name":"Builders FirstSource, Inc.","suffix":"BLDR","tasksCount":2,"isActive":false},
    {"key":247,"countryKey":29,"name":"BioLife Solutions, Inc.","suffix":"BLFS","tasksCount":0,"isActive":false},
    {"key":248,"countryKey":230,"name":"Blackbaud, Inc.","suffix":"BLKB","tasksCount":4,"isActive":false},
    {"key":249,"countryKey":229,"name":"Bloomin' Brands, Inc.","suffix":"BLMN","tasksCount":2,"isActive":false},
    {"key":250,"countryKey":229,"name":"Banco Latinoamericano de Comercio Exterior SA","suffix":"BLX","tasksCount":0,"isActive":false},
    {"key":251,"countryKey":226,"name":"BMC Stock Holdings, Inc.","suffix":"BMCH","tasksCount":2,"isActive":false},
    {"key":252,"countryKey":190,"name":"Badger Meter, Inc.","suffix":"BMI","tasksCount":3,"isActive":false},
    {"key":253,"countryKey":146,"name":"Bank of Marin Bancorp","suffix":"BMRC","tasksCount":1,"isActive":false},
    {"key":254,"countryKey":230,"name":"Bryn Mawr Bank Corp.","suffix":"BMTC","tasksCount":3,"isActive":false},
    {"key":255,"countryKey":29,"name":"Barnes & Noble Education, Inc.","suffix":"BNED","tasksCount":0,"isActive":false},
    {"key":256,"countryKey":230,"name":"Benefitfocus, Inc.","suffix":"BNFT","tasksCount":4,"isActive":false},
    {"key":257,"countryKey":154,"name":"Bank of Commerce Holdings","suffix":"BOCH","tasksCount":4,"isActive":false},
    {"key":258,"countryKey":135,"name":"Audentes Therapeutics, Inc.","suffix":"BOLD","tasksCount":4,"isActive":false},
    {"key":259,"countryKey":229,"name":"Boston Omaha Corp.","suffix":"BOMN","tasksCount":2,"isActive":false},
    {"key":260,"countryKey":230,"name":"DMC Global, Inc.","suffix":"BOOM","tasksCount":3,"isActive":true},
    {"key":261,"countryKey":190,"name":"Boot Barn Holdings, Inc.","suffix":"BOOT","tasksCount":0,"isActive":false},
    {"key":262,"countryKey":229,"name":"Box, Inc.","suffix":"BOX","tasksCount":5,"isActive":false},
    {"key":263,"countryKey":226,"name":"Boston Private Financial Holdings, Inc.","suffix":"BPFH","tasksCount":3,"isActive":false},
    {"key":264,"countryKey":111,"name":"Blueprint Medicines Corp.","suffix":"BPMC","tasksCount":2,"isActive":false},
    {"key":265,"countryKey":83,"name":"The Bank of Princeton","suffix":"BPRN","tasksCount":4,"isActive":false},
    {"key":266,"countryKey":144,"name":"Brady Corp.","suffix":"BRC","tasksCount":3,"isActive":false},
    {"key":267,"countryKey":146,"name":"Craft Brew Alliance, Inc.","suffix":"BREW","tasksCount":4,"isActive":false},
    {"key":268,"countryKey":242,"name":"Bluerock Residential Growth REIT, Inc.","suffix":"BRG","tasksCount":1,"isActive":false},
    {"key":269,"countryKey":111,"name":"Bridgford Foods Corp.","suffix":"BRID","tasksCount":5,"isActive":true},
    {"key":270,"countryKey":190,"name":"Brookline Bancorp, Inc.","suffix":"BRKL","tasksCount":3,"isActive":true},
    {"key":271,"countryKey":230,"name":"Brooks Automation, Inc.","suffix":"BRKS","tasksCount":1,"isActive":false},
    {"key":272,"countryKey":83,"name":"BRT Apartments Corp.","suffix":"BRT","tasksCount":4,"isActive":false},
    {"key":273,"countryKey":229,"name":"Berry Petroleum Corp.","suffix":"BRY","tasksCount":5,"isActive":false},
    {"key":274,"countryKey":29,"name":"Bassett Furniture Industries, Inc.","suffix":"BSET","tasksCount":2,"isActive":false},
    {"key":275,"countryKey":154,"name":"BioSig Technologies, Inc.","suffix":"BSGM","tasksCount":5,"isActive":false},
    {"key":276,"countryKey":226,"name":"BrightSphere Investment Group, Inc.","suffix":"BSIG","tasksCount":4,"isActive":false},
    {"key":277,"countryKey":242,"name":"Sierra Bancorp","suffix":"BSRR","tasksCount":3,"isActive":false},
    {"key":278,"countryKey":111,"name":"Biospecifics Technologies Corp.","suffix":"BSTC","tasksCount":2,"isActive":false},
    {"key":279,"countryKey":154,"name":"Bank7 Corp.","suffix":"BSVN","tasksCount":4,"isActive":false},
    {"key":280,"countryKey":144,"name":"BioXcel Therapeutics, Inc.","suffix":"BTAI","tasksCount":2,"isActive":true},
    {"key":281,"countryKey":190,"name":"Peabody Energy Corp.","suffix":"BTU","tasksCount":1,"isActive":false},
    {"key":282,"countryKey":229,"name":"First Busey Corp.","suffix":"BUSE","tasksCount":4,"isActive":true},
    {"key":283,"countryKey":226,"name":"BrightView Holdings, Inc.","suffix":"BV","tasksCount":1,"isActive":false},
    {"key":284,"countryKey":146,"name":"Bridgewater Bancshares, Inc.","suffix":"BWB","tasksCount":3,"isActive":false},
    {"key":285,"countryKey":214,"name":"Bankwell Financial Group, Inc.","suffix":"BWFG","tasksCount":2,"isActive":false},
    {"key":286,"countryKey":154,"name":"BlueLinx Holdings, Inc.","suffix":"BXC","tasksCount":1,"isActive":false},
    {"key":287,"countryKey":226,"name":"Bluegreen Vacations Corp.","suffix":"BXG","tasksCount":4,"isActive":false},
    {"key":288,"countryKey":230,"name":"Blackstone Mortgage Trust, Inc.","suffix":"BXMT","tasksCount":3,"isActive":false},
    {"key":289,"countryKey":214,"name":"BancorpSouth Bank","suffix":"BXS","tasksCount":2,"isActive":false},
    {"key":290,"countryKey":226,"name":"Byline Bancorp, Inc.","suffix":"BY","tasksCount":3,"isActive":false},
    {"key":291,"countryKey":190,"name":"Boyd Gaming Corp.","suffix":"BYD","tasksCount":1,"isActive":false},
    {"key":292,"countryKey":214,"name":"BeyondSpring, Inc.","suffix":"BYSI","tasksCount":4,"isActive":false},
    {"key":293,"countryKey":146,"name":"Beazer Homes USA, Inc.","suffix":"BZH","tasksCount":3,"isActive":false},
    {"key":294,"countryKey":154,"name":"Camden National Corp. (Maine)","suffix":"CAC","tasksCount":4,"isActive":false},
    {"key":295,"countryKey":135,"name":"Cadence Bancorporation","suffix":"CADE","tasksCount":1,"isActive":false},
    {"key":296,"countryKey":135,"name":"CAI International, Inc.","suffix":"CAI","tasksCount":3,"isActive":false},
    {"key":297,"countryKey":230,"name":"Cheesecake Factory, Inc.","suffix":"CAKE","tasksCount":5,"isActive":false},
    {"key":298,"countryKey":29,"name":"Caleres, Inc.","suffix":"CAL","tasksCount":3,"isActive":false},
    {"key":299,"countryKey":230,"name":"Calithera Biosciences, Inc.","suffix":"CALA","tasksCount":4,"isActive":false},
    {"key":300,"countryKey":154,"name":"Cal-Maine Foods, Inc.","suffix":"CALM","tasksCount":2,"isActive":false}    
  ]`;

const jsonContacts = `[
    {"key":0,"name":"Good contact","individualKey":"0","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"a@b.c","cellphone":"1234","landline":"","note":"Nice"},
    {"key":1,"name":"Not good","individualKey":"1","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"b@c.d","cellphone":"","landline":"5678","note":"Reliable"},
    {"key":2,"name":"Last Resord","individualKey":"2","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"e@d.f","cellphone":"","landline":"","note":"Always there"}
    ]`;

export const jsonEntityTypes = `[
      {"key":0,"name":"AccountingClass","pluralName":"AccountingClasses","dashboardIndex":-1,"isActive":true,"keyName":"accountingClassKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonAccountingClasses","storeName":"accountingClasses"},
      {"key":1,"name":"AccountingClassTier","pluralName":"AccountingClassTiers","dashboardIndex":-1,"isActive":true,"keyName":"accountingClassTierKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonAccountingClassTiers","storeName":"accountingClassTiers"},
      {"key":2,"name":"Address","pluralName":"Addresses","dashboardIndex":-1,"isActive":true,"keyName":"addressKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonAddresses","storeName":"addresses"},
      {"key":3,"name":"Appointment","pluralName":"Appointments","dashboardIndex":-1,"isActive":true,"keyName":"appointmentKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonAppointments","storeName":"appointments"},
      {"key":4,"name":"Auditor","pluralName":"Auditors","dashboardIndex":-1,"isActive":true,"keyName":"auditorKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonAuditors","storeName":"auditors"},
      {"key":5,"name":"BusinessArea","pluralName":"BusinessAreas","dashboardIndex":-1,"isActive":true,"keyName":"businessAreaKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonBusinessAreas","storeName":"businessAreas"},
      {"key":6,"name":"BusinessDivision","pluralName":"BusinessDivisions","dashboardIndex":-1,"isActive":true,"keyName":"businessDivisionKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonBusinessDivisions","storeName":"businessDivisions"},
      {"key":7,"name":"Capacity","pluralName":"Capacities","dashboardIndex":-1,"isActive":true,"keyName":"capacityKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonCapacities","storeName":"capacities"},
      {"key":8,"name":"City","pluralName":"Cities","dashboardIndex":-1,"isActive":true,"keyName":"cityKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonCities","storeName":"cities"},
      {"key":9,"name":"Company","pluralName":"Companies","dashboardIndex":2,"isActive":true,"keyName":"companyKey","canHoldSharesIs":"true","sourceType":"json","sourceName":"jsonCompanies","storeName":"companies"},
      {"key":10,"name":"CompaniesFromCountry","pluralName":"CompaniesFromCountry","dashboardIndex":-1,"isActive":true,"keyName":"companiesFromCountryKey","canHoldSharesIs":"false","sourceType":"function","sourceName":"getCompaniesFromCountry","storeName":"getCompaniesFromCountry"},
      {"key":11,"name":"CompanyType","pluralName":"CompanyTypes","dashboardIndex":-1,"isActive":true,"keyName":"companyTypeKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonCompanyTypes","storeName":"companyTypes"},
      {"key":12,"name":"Consolidation","pluralName":"Consolidation","dashboardIndex":-1,"isActive":true,"keyName":"consolidationKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonConsolidation","storeName":"consolidation"},
      {"key":13,"name":"Contact","pluralName":"Contacts","dashboardIndex":-1,"isActive":true,"keyName":"contactKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonContacts","storeName":"contacts"},
      {"key":14,"name":"Country","pluralName":"Countries","dashboardIndex":-1,"isActive":true,"keyName":"countryKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonCountries","storeName":"countries"},
      {"key":15,"name":"CountryWithTasks","pluralName":"CountriesWithTasks","dashboardIndex":-1,"isActive":true,"keyName":"countryWithTasksKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonCountriesWithTasks","storeName":"countriesWithTasks"},
      {"key":16,"name":"Custom","pluralName":"Custom","dashboardIndex":-1,"isActive":true,"keyName":"customKey","canHoldSharesIs":"false","sourceType":"function","sourceName":"getCustomEntities","storeName":"getCustomEntities"},
      {"key":17,"name":"Dashboard","pluralName":"Dashboards","dashboardIndex":0,"isActive":true,"keyName":"dashboardKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"menus"},
      {"key":18,"name":"EntityStatus","pluralName":"EntityStatuses","dashboardIndex":-1,"isActive":true,"keyName":"entityStatusKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonEntityStatuses","storeName":"entityStatuses"},
      {"key":19,"name":"EntityStatusTier","pluralName":"EntityStatusTiers","dashboardIndex":-1,"isActive":true,"keyName":"entityStatusTierKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonEntityStatusTiers","storeName":"entityStatusTiers"},
      {"key":20,"name":"Individual","pluralName":"Individuals","dashboardIndex":3,"isActive":true,"keyName":"individualKey","canHoldSharesIs":"true","sourceType":"json","sourceName":"jsonIndividuals","storeName":"individuals"},
      {"key":21,"name":"IndividualFromCountries","pluralName":"IndividualsFromCountries","dashboardIndex":-1,"isActive":true,"keyName":"individualFromCountriesKey","canHoldSharesIs":"false","sourceType":"function","sourceName":"getIndividualsFromCountries","storeName":"getIndividualsFromCountries"},
      {"key":22,"name":"Industry","pluralName":"Industries","dashboardIndex":-1,"isActive":true,"keyName":"industryKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonIndustries","storeName":"industries"},
      {"key":23,"name":"LegalClass","pluralName":"LegalClasses","dashboardIndex":-1,"isActive":true,"keyName":"legalClassKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonLegalClasses","storeName":"legalClasses"},
      {"key":24,"name":"Month","pluralName":"Months","dashboardIndex":-1,"isActive":true,"keyName":"monthKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonMonths","storeName":"months"},
      {"key":25,"name":"Portfolio","pluralName":"Portfolios","dashboardIndex":-1,"isActive":true,"keyName":"portfolioKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonPortfolios","storeName":"portfolios"},
      {"key":26,"name":"Property","pluralName":"Properties","dashboardIndex":-1,"isActive":true,"keyName":"propertyKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonProperties","storeName":"properties"},
      {"key":27,"name":"Regulation","pluralName":"Regulations","dashboardIndex":-1,"isActive":true,"keyName":"regulationKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonRegulations","storeName":"regulations"},
      {"key":28,"name":"Regulator","pluralName":"Regulators","dashboardIndex":-1,"isActive":true,"keyName":"regulatorKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonRegulators","storeName":"regulators"},
      {"key":29,"name":"Search","pluralName":"Search","dashboardIndex":1,"isActive":true,"keyName":"searchKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"menus"},
      {"key":30,"name":"Secretariat","pluralName":"Secretariats","dashboardIndex":-1,"isActive":true,"keyName":"secretariatKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonSecretariats","storeName":"secretariats"},
      {"key":31,"name":"Setting","pluralName":"Settings","dashboardIndex":-1,"isActive":true,"keyName":"settingKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"menus"},
      {"key":32,"name":"ShareCertificate","pluralName":"ShareCertificates","dashboardIndex":-1,"isActive":true,"keyName":"shareCertificateKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonShareCertificates","storeName":"shareCertificates"},
      {"key":33,"name":"Shareholding","pluralName":"Shareholdings","dashboardIndex":-1,"isActive":true,"keyName":"shareholdingKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonShareholdings","storeName":"shareholdings"},
      {"key":34,"name":"Template","pluralName":"Templates","dashboardIndex":-1,"isActive":true,"keyName":"templateKey","canHoldSharesIs":"false","sourceType":"function","sourceName":"getTemplates","storeName":"getTemplates"},
      {"key":35,"name":"Trust","pluralName":"Trusts","dashboardIndex":-1,"isActive":true,"keyName":"trustKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonTrusts","storeName":"trusts"},
      {"key":36,"name":"User","pluralName":"Users","dashboardIndex":4,"isActive":true,"keyName":"userKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonUsers","storeName":"users"},
      {"key":37,"name":"Entity","pluralName":"Entities","dashboardIndex":-1,"isActive":true,"keyName":"entityKey","canHoldSharesIs":"false","sourceType":"","sourceName":"","storeName":""},
      {"key":38,"name":"File","pluralName":"Files","dashboardIndex":-1,"isActive":true,"keyName":"fileKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonFiles","storeName":"files"},
      {"key":39,"name":"Meeting","pluralName":"Meetings","dashboardIndex":-1,"isActive":true,"keyName":"meetingKey","canHoldSharesIs":"false","sourceType":"json","sourceName":"jsonMeetings","storeName":"meetings"},
      {"key":40,"name":"Functional","pluralName":"Functional","dashboardIndex":-1,"isActive":true,"keyName":"functionalKey","canHoldSharesIs":"false","sourceType":"","sourceName":"","storeName":""},
      {"key":41,"name":"Legal","pluralName":"Legal","dashboardIndex":-1,"isActive":true,"keyName":"legalKey","canHoldSharesIs":"false","sourceType":"","sourceName":"","storeName":""},
      {"key":42,"name":"Natural","pluralName":"Natural","dashboardIndex":-1,"isActive":true,"keyName":"naturalKey","canHoldSharesIs":"false","sourceType":"","sourceName":"","storeName":""},
      {"key":43,"name":"AnniversaryMonth","pluralName":"AnniversaryMonths","dashboardIndex":-1,"isActive":true,"keyName":"anniversaryMonthKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"months"},
      {"key":44,"name":"ParentCompany","pluralName":"ParentCompanies","dashboardIndex":-1,"isActive":true,"keyName":"parentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"companies"},
      {"key":45,"name":"EntityType","pluralName":"EntityTypes","dashboardIndex":-1,"isActive":true,"keyName":"entityTypeKey","canHoldSharesIs":"false","sourceType":"","sourceName":"","storeName":""},
      {"key":46,"name":"HoldingParentCompany","pluralName":"HoldingParentCompanies","dashboardIndex":-1,"isActive":true,"keyName":"holdingParentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"companies"},
      {"key":47,"name":"Secretary","pluralName":"Secretaries","dashboardIndex":-1,"isActive":true,"keyName":"secretaryKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"individuals"},
      {"key":48,"name":"Lee","pluralName":"Lee","dashboardIndex":-1,"isActive":true,"keyName":"leeKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"individuals"},
      {"key":49,"name":"FinancialOfficer","pluralName":"FinancialOfficers","dashboardIndex":-1,"isActive":true,"keyName":"financialOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"individuals"},
      {"key":50,"name":"PublicOfficer","pluralName":"PublicOfficers","dashboardIndex":-1,"isActive":true,"keyName":"publicOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"individuals"},
      {"key":51,"name":"AuditPartner","pluralName":"AuditPartners","dashboardIndex":-1,"isActive":true,"keyName":"auditPartnerKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"individuals"},
      {"key":52,"name":"fyeMonth","pluralName":"fyeMonths","dashboardIndex":-1,"isActive":true,"keyName":"fyeMonthKey","canHoldSharesIs":"false","sourceType":"redirect","sourceName":"","storeName":"months"}]`
      
export const mapJSON = new Map([
  [0, jsonAccountingClasses],
  [1, jsonAccountingClassTiers],
  [2, jsonAddresses],
  [3, jsonAppointments],
  [4, jsonAuditors],
  [5, jsonBusinessAreas],
  [6, jsonBusinessDivisions],
  [7, jsonCapacities],
  [8, jsonCities],
  [9, jsonCompanies],
  [10, ''],
  [11, jsonCompanyTypes],
  [12, jsonConsolidation],
  [13, jsonContacts],
  [14, jsonCountries],
  [15, jsonCountriesWithTasks],
  [16, ''],
  [17, ''],
  [18, jsonEntityStatuses],
  [19, jsonEntityStatusTiers],
  [20, jsonIndividuals],
  [21, ''],
  [22, jsonIndustries],
  [23, jsonLegalClasses],
  [24, jsonMonths],
  [25, jsonPortfolios],
  [26, jsonProperties],
  [27, jsonRegulations],
  [28, jsonRegulators],
  [29, ''],
  [30, jsonSecretariats],
  [31, ''],
  [32, jsonShareCertificates],
  [33, jsonShareholdings],
  [34, ''],
  [35, jsonTrusts],
  [36, jsonUsers],
  [37, ''],
  [38, jsonFiles],
  [39, jsonMeetings],
  [40, ''],
  [41, ''],
  [42, ''],
  [43, ''],
  [44, ''],
  [45, ''],
  [46, ''],
  [47, ''],
  [48, ''],
  [49, ''],
  [50, ''],
  [51, ''],
  [52, ''],
]);
