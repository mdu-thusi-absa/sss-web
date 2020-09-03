// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [CommonModule],
// })
// class DataJsonModule {}

export const jsonShareCertificates = `[
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
  ["connectedEntityName","Interconnected entity name"],
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

export const jsonShareholdings = `[
  {"key":0,"name":"100","shareTypeKey":"0","individualKey":"1","companyKey":"0","shareCount":"100"},
  {"key":1,"name":"1000","shareTypeKey":"0","individualKey":"2","companyKey":"1","shareCount":"1000"},
  {"key":2,"name":"10000","shareTypeKey":"1","individualKey":"3","companyKey":"2","shareCount":"10000"},
  {"key":3,"name":"1000000","shareTypeKey":"1","individualKey":"4","companyKey":"3","shareCount":"1000000"}
  ]`;

export const jsonAddresses = `[
    {"key":0,"name":"Primary","addressTypeKey":"0","cityKey":"0","text":"5th Str 4"},
    {"key":1,"name":"Secondary","addressTypeKey":"1","cityKey":"0","text":"3th Str 3"},
    {"key":2,"name":"Primary","addressTypeKey":"0","cityKey":"3","text":"Main Ave 1"},
    {"key":3,"name":"Secondary","addressTypeKey":"1","cityKey":"4","text":"Main Ave 2"}
    ]`;

// export const jsonShareholders = `[
//   {"key":0,"name":"","shareTypeKey":"0","individualKey":"1","companyKey":"0","shareCount":"100"},
//   {"key":1,"name":"","shareTypeKey":"0","individualKey":"2","companyKey":"1","shareCount":"1000"},
//   {"key":2,"name":"","shareTypeKey":"1","individualKey":"3","companyKey":"2","shareCount":"10000"},
//   {"key":3,"name":"","shareTypeKey":"1","individualKey":"4","companyKey":"3","shareCount":"1000000"}
//   ]`;

export const jsonAppointments = `[
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

export const jsonShareTypes = `[
    {"key":0,"name":"Ord"},
    {"key":1,"name":"Pref"}
    ]`;

export const jsonProperties = `[
      {"key":0,"name":"Sandton HQ","addressKey":"0"},
      {"key":1,"name":"London Branch","addressKey":"1"},
      {"key":2,"name":"Cape Town office","addressKey":"3"}
      ]`;

export const jsonContactTypes = `[
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

export const jsonAddressTypes = `[
    {"key":0,"name":"Physical"},
    {"key":1,"name":"Postal"}
    ]`;

export const jsonAccountingClasses = `[
  {"key":0,"name":"Group holding company: Subsidiaries"},
  {"key":1,"name":"Joint ventures - equity accounted"},
  {"key":2,"name":"Structured entity"},
  {"key":3,"name":"Unconsolidated structured entity"},
  {"key":4,"name":"Associates - equity accounted"},
  {"key":5,"name":"Investments"},
  {"key":6,"name":"Unlisted equity investments held at fair value through profit or loss - property valuation"},
  {"key":7,"name":"Group holding company "}
  ]`;

export const jsonAccountingClassTiers = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`;

export const jsonConsolidation = `[
  {"key":0,"name":"Consolidated"},
  {"key":1,"name":"Not Consolidated"}
  ]`;

export const jsonBusinessAreas = `[
  {"key":0,"name":"Head Office Function"},
  {"key":1,"name":"Retail and Business Banking (RBB)"},
  {"key":2,"name":"Corporate and Investment Bank (CIB)"},
  {"key":3,"name":"Absa Financial Services Group (AFS)"},
  {"key":4,"name":"Absa Regional Operations (ARO)"},
  {"key":5,"name":"Enterprise Function"},
  {"key":6,"name":"Head Office Function"}
  ]`;

export const jsonLegalClasses = `[
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

export const jsonEntityStatuses = `[
  {"key":0,"name":"Active"},
  {"key":1,"name":"Passively Trading"},
  {"key":2,"name":"Non Trading"},
  {"key":3,"name":"Dormant"},
  {"key":4,"name":"Process of deregistration"}
  ]`;

export const jsonEntityStatusTiers = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`;

export const jsonBusinessDivisions = `[
  {"key":0,"name":"Retail"},
  {"key":1,"name":"Investments"},
  {"key":2,"name":"Credit"}
  ]`;

export const jsonCompanyTypes = `[
    {"key":0,"name":"Fund"},
    {"key":1,"name":"Investment"},
    {"key":2,"name":"Joint Venture"},
    {"key":3,"name":"Non-profit company"},
    {"key":4,"name":"Private company"},
    {"key":5,"name":"Public Company"},
    {"key":6,"name":"Scheme"},
    {"key":7,"name":"Trust"}
    ]`;

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
    {"key":0,"name":"Aquire Entity - New","countryKey":202,"entityTypeKey":9},
    {"key":1,"name":"Aquire Entity - Existing","countryKey":202,"entityTypeKey":9},
    {"key":2,"name":"New Entity","countryKey":202,"entityTypeKey":9},
    {"key":3,"name":"Change location of company records","countryKey":202,"entityTypeKey":9},
    {"key":4,"name":"Change of registered address","countryKey":202,"entityTypeKey":9},
    {"key":5,"name":"Change of main business of Company","countryKey":202,"entityTypeKey":9},
    {"key":6,"name":"Change the type of company","countryKey":202,"entityTypeKey":9},
    {"key":7,"name":"Change an article of the MOI","countryKey":202,"entityTypeKey":9},
    {"key":8,"name":"Adopt new MOI","countryKey":202,"entityTypeKey":9},
    {"key":9,"name":"Changing the main and/or auxilliary powers of the company and its office bearers","countryKey":202,"entityTypeKey":9},
    {"key":10,"name":"Removing, amending or inserting ring fencing conditions into MOI","countryKey":202,"entityTypeKey":9},
    {"key":11,"name":"Change to company name","countryKey":202,"entityTypeKey":9},
    {"key":12,"name":"Change to financial year end","countryKey":202,"entityTypeKey":9},
    {"key":13,"name":"Director registery","countryKey":202,"entityTypeKey":9},
    {"key":14,"name":"Resign directors","countryKey":202,"entityTypeKey":9},
    {"key":15,"name":"Remove directors","countryKey":202,"entityTypeKey":9},
    {"key":16,"name":"Appointment, resignation and removal of auditors, audit committee members or company secretaries","countryKey":202,"entityTypeKey":9},
    {"key":17,"name":"Changes to company share capital Capture","countryKey":202,"entityTypeKey":9},
    {"key":18,"name":"Changes to company share capital Amend","countryKey":202,"entityTypeKey":9},
    {"key":19,"name":"Amalgamation or Merger of Companies","countryKey":202,"entityTypeKey":9},
    {"key":20,"name":"Deregistering/Closing your Company","countryKey":202,"entityTypeKey":9},
    {"key":21,"name":"Re-instating a company","countryKey":202,"entityTypeKey":9},
    {"key":22,"name":"Amend entity details","countryKey":202,"entityTypeKey":9},
    {"key":23,"name":"Sale or transfer of entity","countryKey":202,"entityTypeKey":9},
    {"key":24,"name":"Dereg wind down entity - solvent","countryKey":202,"entityTypeKey":9},
    {"key":25,"name":"Dereg wind down entity - insolvent","countryKey":202,"entityTypeKey":9},
    {"key":26,"name":"Dereg wind down entity - court order/liquidtion","countryKey":202,"entityTypeKey":9},
    {"key":27,"name":"Change type of company","countryKey":202,"entityTypeKey":9},
    {"key":28,"name":"Share conversion","countryKey":202,"entityTypeKey":9},
    {"key":29,"name":"Amend trust deed","countryKey":202,"entityTypeKey":9},
    {"key":30,"name":"Amend JV agreement","countryKey":202,"entityTypeKey":9},
    {"key":31,"name":"Transfer of shares","countryKey":202,"entityTypeKey":9},
    {"key":32,"name":"Appointment of auditors","countryKey":202,"entityTypeKey":9},
    {"key":33,"name":"Appointment of audit committee members","countryKey":202,"entityTypeKey":9},
    {"key":34,"name":"Appointment of company secretaries","countryKey":202,"entityTypeKey":9},
    {"key":35,"name":"Resignation and removal of auditors","countryKey":202,"entityTypeKey":9},
    {"key":36,"name":"Resignation and removal of auditors, audit committee members","countryKey":202,"entityTypeKey":9},
    {"key":37,"name":"Resignation and removal of company secretaries","countryKey":202,"entityTypeKey":9},
    {"key":38,"name":"Resignation and removal of company secretaries","countryKey":29,"entityTypeKey":9}]`;

export const jsonTaskStatuses = `[
  {"key":0,"name":"Doing"},
  {"key":1,"name":"Done"}
  ]`;

export const jsonYesNo = `[
  {"key":1,"name":"Yes"},
  {"key":0,"name":"No"}
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

export const jsonAccountingTiers = `[
  {"key":0,"name":"Top"},
  {"key":1,"name":"Middle"},
  {"key":2,"name":"Low"}
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
  {"key":202,"name":"South Africa","suffix":""},
  {"key":29,"name":"Botswana","suffix":""},
  {"key":83,"name":"Ghana","suffix":""},
  {"key":111,"name":"Kenya","suffix":""},
  {"key":135,"name":"Mauritius","suffix":""},
  {"key":144,"name":"Mozambique","suffix":""},
  {"key":146,"name":"Namibia","suffix":""},
  {"key":154,"name":"Nigeria","suffix":""},
  {"key":190,"name":"Seychelles","suffix":""},
  {"key":214,"name":"Tanzania","suffix":""},
  {"key":226,"name":"Uganda","suffix":""},
  {"key":242,"name":"Zambia","suffix":""}
]`;

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
  {"key":0,"surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true,"attended":false},
  {"key":1,"surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true,"attended":true},
  {"key":2,"surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false,"attended":true},
  {"key":3,"surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true,"attended":false},
  {"key":4,"surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true,"attended":true}
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

export const jsonCompanyStatuses = `[
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

export const jsonCapacities = `[
  {"key":0,"name":"Executive Director"},
  {"key":1,"name":"Non-Executive Diretor"},
  {"key":2,"name":"Secretary"},
  {"key":3,"name":"Public Officer"}
  ]`;

export const jsonPeriods = `[
  {"key":0,"name":"Daily"},
  {"key":1,"name":"Weekly"},
  {"key":2,"name":"Monthly"},
  {"key":3,"name":"Quarterly"},
  {"key":4,"name":"Annualy"}
]`;

export const jsonIndividuals = `[
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

export const jsonCompanies = `[
    {"key":0,"name":"Aaron's, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":1,"name":"Applied Optoelectronics, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":2,"name":"AAON, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":3,"name":"American Assets Trust, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":4,"name":"Atlas Air Worldwide Holdings, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":5,"name":"Axon Enterprise, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":6,"name":"Ameris Bancorp","isActive":true,"countryKey":226,"suffix":""},
    {"key":7,"name":"Abeona Therapeutics, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":8,"name":"Asbury Automotive Group, Inc.","isActive":false,"countryKey":146,"suffix":""},
    {"key":9,"name":"ABM Industries, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":10,"name":"Allegiance Bancshares, Inc. (Texas)","isActive":true,"countryKey":144,"suffix":""},
    {"key":11,"name":"Associated Capital Group, Inc.","isActive":false,"countryKey":226,"suffix":""},
    {"key":12,"name":"Arcosa, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":13,"name":"ACADIA Pharmaceuticals, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":14,"name":"Atlantic Capital Bancshares, Inc.","isActive":false,"countryKey":144,"suffix":""},
    {"key":15,"name":"ACCO Brands Corp.","isActive":true,"countryKey":154,"suffix":""},
    {"key":16,"name":"Acer Therapeutics, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":17,"name":"Achillion Pharmaceuticals, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":18,"name":"Acacia Communications, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":19,"name":"ACI Worldwide, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":20,"name":"Axcelis Technologies, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":21,"name":"ACNB Corp.","isActive":true,"countryKey":144,"suffix":""},
    {"key":22,"name":"Acorda Therapeutics, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":23,"name":"Ares Commercial Real Estate Corp.","isActive":true,"countryKey":226,"suffix":""},
    {"key":24,"name":"Aclaris Therapeutics, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":25,"name":"AcelRx Pharmaceuticals, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":26,"name":"Acacia Research Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":27,"name":"Agree Realty Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":28,"name":"Advanced Emissions Solutions, Inc.","isActive":false,"countryKey":226,"suffix":""},
    {"key":29,"name":"ADMA Biologics, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":30,"name":"Adamas Pharmaceuticals, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":31,"name":"Adient plc","isActive":true,"countryKey":226,"suffix":""},
    {"key":32,"name":"Aduro BioTech, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":33,"name":"Advanced Disposal Services, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":34,"name":"ADTRAN, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":35,"name":"Addus HomeCare Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":36,"name":"Adverum Biotechnologies, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":37,"name":"Aegion Corp.","isActive":true,"countryKey":226,"suffix":""},
    {"key":38,"name":"Advanced Energy Industries, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":39,"name":"American Equity Investment Life Holding Co.","isActive":true,"countryKey":146,"suffix":""},
    {"key":40,"name":"American Eagle Outfitters, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":41,"name":"Aerie Pharmaceuticals, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":42,"name":"Armstrong Flooring, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":43,"name":"American Finance Trust, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":44,"name":"Affimed NV","isActive":false,"countryKey":229,"suffix":""},
    {"key":45,"name":"AgeX Therapeutics, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":46,"name":"Agenus, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":47,"name":"Aeglea Biotherapeutics, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":48,"name":"Federal Agricultural Mortgage Corp.","isActive":true,"countryKey":214,"suffix":""},
    {"key":49,"name":"PlayAGS, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":50,"name":"Argan, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":51,"name":"Agilysys, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":52,"name":"Armada Hoffler Properties, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":53,"name":"Ashford Hospitality Trust, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":54,"name":"Arlington Asset Investment Corp.","isActive":true,"countryKey":111,"suffix":""},
    {"key":55,"name":"Altra Industrial Motion Corp.","isActive":true,"countryKey":135,"suffix":""},
    {"key":56,"name":"Aimmune Therapeutics, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":57,"name":"Albany International Corp.","isActive":true,"countryKey":214,"suffix":""},
    {"key":58,"name":"AAR Corp.","isActive":true,"countryKey":111,"suffix":""},
    {"key":59,"name":"Airgain, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":60,"name":"Applied Industrial Technologies, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":61,"name":"Aerojet Rocketdyne Holdings, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":62,"name":"Great Ajax Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":63,"name":"Akebia Therapeutics, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":64,"name":"Akcea Therapeutics, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":65,"name":"Acadia Realty Trust","isActive":false,"countryKey":202,"suffix":""},
    {"key":66,"name":"Akero Therapeutics, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":67,"name":"Akorn, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":68,"name":"AK Steel Holding Corp.","isActive":true,"countryKey":144,"suffix":""},
    {"key":69,"name":"Akoustis Technologies, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":70,"name":"Albireo Pharma, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":71,"name":"Alico, Inc.","isActive":false,"countryKey":190,"suffix":""},
    {"key":72,"name":"Alder Biopharmaceuticals, Inc.","isActive":false,"countryKey":214,"suffix":""},
    {"key":73,"name":"Aldeyra Therapeutics, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":74,"name":"ALLETE, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":75,"name":"Alector, Inc.","isActive":false,"countryKey":202,"suffix":""},
    {"key":76,"name":"Alexander & Baldwin, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":77,"name":"Alamo Group, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":78,"name":"Allegiant Travel Co.","isActive":true,"countryKey":226,"suffix":""},
    {"key":79,"name":"Allakos, Inc.","isActive":false,"countryKey":190,"suffix":""},
    {"key":80,"name":"Allogene Therapeutics, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":81,"name":"AstroNova, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":82,"name":"Alarm.com Holdings, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":83,"name":"Altus Midstream Co.","isActive":true,"countryKey":146,"suffix":""},
    {"key":84,"name":"Altair Engineering, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":85,"name":"Alexander's, Inc.","isActive":false,"countryKey":230,"suffix":""},
    {"key":86,"name":"AMAG Pharmaceuticals, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":87,"name":"Amalgamated Bank","isActive":false,"countryKey":146,"suffix":""},
    {"key":88,"name":"Ambarella, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":89,"name":"Ambac Financial Group, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":90,"name":"AMC Entertainment Holdings, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":91,"name":"Amedisys, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":92,"name":"Apollo Medical Holdings, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":93,"name":"AssetMark Financial Holdings, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":94,"name":"Amkor Technology, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":95,"name":"AMN Healthcare Services, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":96,"name":"American National Bankshares, Inc. (Virginia)","isActive":true,"countryKey":226,"suffix":""},
    {"key":97,"name":"Allied Motion Technologies, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":98,"name":"Amphastar Pharmaceuticals, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":99,"name":"Ameresco, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":100,"name":"Amyris, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":101,"name":"Amneal Pharmaceuticals, Inc.","isActive":true,"countryKey":242,"suffix":""},
    {"key":102,"name":"American Superconductor Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":103,"name":"AMERISAFE, Inc.","isActive":true,"countryKey":146,"suffix":""}]`;

export const jsonContacts = `[
    {"key":0,"name":"Good contact","individualKey":"0","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"a@b.c","cellphone":"1234","landline":"","note":"Nice"},
    {"key":1,"name":"Not good","individualKey":"1","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"b@c.d","cellphone":"","landline":"5678","note":"Reliable"},
    {"key":2,"name":"Last Resord","individualKey":"2","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"e@d.f","cellphone":"","landline":"","note":"Always there"}
    ]`;
