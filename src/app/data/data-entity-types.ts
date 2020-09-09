export const jsonEntityTypes = `[
	{"key":0,"name":"AccountingClass","pluralName":"AccountingClasses","dashboardIndex":-1,"activeIs":true,"keyName":"accountingClassKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAccountingClasses","storeName":"accountingClasses","headingsSource":""},
	{"key":1,"name":"AccountingClassTier","pluralName":"AccountingClassTiers","dashboardIndex":-1,"activeIs":true,"keyName":"accountingClassTierKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAccountingClassTiers","storeName":"accountingClassTiers","headingsSource":""},
	{"key":2,"name":"PostalAddress","pluralName":"PostalAddresses","dashboardIndex":-1,"activeIs":true,"keyName":"postalAddressKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPostalAddresses","storeName":"postalAddresses","headingsSource":""},
	{"key":3,"name":"Appointment","pluralName":"Appointments","dashboardIndex":-1,"activeIs":true,"keyName":"appointmentKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAppointments","storeName":"appointments","headingsSource":""},
	{"key":4,"name":"Auditor","pluralName":"Auditors","dashboardIndex":-1,"activeIs":true,"keyName":"auditorKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAuditors","storeName":"auditors","headingsSource":""},
	{"key":5,"name":"BusinessArea","pluralName":"BusinessAreas","dashboardIndex":-1,"activeIs":true,"keyName":"businessAreaKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonBusinessAreas","storeName":"businessAreas","headingsSource":""},
	{"key":6,"name":"BusinessDivision","pluralName":"BusinessDivisions","dashboardIndex":-1,"activeIs":true,"keyName":"businessDivisionKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonBusinessDivisions","storeName":"businessDivisions","headingsSource":""},
	{"key":7,"name":"Capacity","pluralName":"Capacities","dashboardIndex":-1,"activeIs":true,"keyName":"capacityKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCapacities","storeName":"capacities","headingsSource":""},
	{"key":8,"name":"City","pluralName":"Cities","dashboardIndex":-1,"activeIs":true,"keyName":"cityKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCities","storeName":"cities","headingsSource":""},
	{"key":9,"name":"Company","pluralName":"Companies","dashboardIndex":1,"activeIs":true,"keyName":"companyKey","canHoldSharesIs":"true","sourceType":"json","jsonSource":"jsonCompanies","storeName":"companies","headingsSource":"headingsCompany"},
	{"key":10,"name":"CompaniesForCountry","pluralName":"CompaniesForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"companiesForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCompaniesForCountry","headingsSource":""},
	{"key":11,"name":"CompanyType","pluralName":"CompanyTypes","dashboardIndex":-1,"activeIs":true,"keyName":"companyTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCompanyTypes","storeName":"companyTypes","headingsSource":""},
	{"key":12,"name":"Consolidation","pluralName":"Consolidation","dashboardIndex":-1,"activeIs":true,"keyName":"consolidationKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonConsolidation","storeName":"consolidation","headingsSource":""},
	{"key":13,"name":"Contact","pluralName":"Contacts","dashboardIndex":-1,"activeIs":true,"keyName":"contactKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonContacts","storeName":"contacts","headingsSource":""},
	{"key":14,"name":"Country","pluralName":"Countries","dashboardIndex":-1,"activeIs":true,"keyName":"countryKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCountries","storeName":"countries","headingsSource":""},
	{"key":15,"name":"CountryWithTasks","pluralName":"CountriesWithTasks","dashboardIndex":-1,"activeIs":true,"keyName":"countryWithTasksKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"countries","headingsSource":""},
	{"key":16,"name":"Custom","pluralName":"Custom","dashboardIndex":-1,"activeIs":true,"keyName":"customKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCustom","headingsSource":""},
	{"key":17,"name":"Dashboard","pluralName":"Dashboards","dashboardIndex":0,"activeIs":true,"keyName":"dashboardKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
	{"key":18,"name":"EntityStatus","pluralName":"EntityStatuses","dashboardIndex":-1,"activeIs":true,"keyName":"entityStatusKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonEntityStatuses","storeName":"entityStatuses","headingsSource":""},
	{"key":19,"name":"EntityStatusTier","pluralName":"EntityStatusTiers","dashboardIndex":-1,"activeIs":true,"keyName":"entityStatusTierKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonEntityStatusTiers","storeName":"entityStatusTiers","headingsSource":""},
	{"key":20,"name":"Individual","pluralName":"Individuals","dashboardIndex":2,"activeIs":true,"keyName":"individualKey","canHoldSharesIs":"true","sourceType":"json","jsonSource":"jsonIndividuals","storeName":"individuals","headingsSource":""},
	{"key":21,"name":"IndividualForCountries","pluralName":"IndividualsForCountries","dashboardIndex":-1,"activeIs":true,"keyName":"individualForCountriesKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsForCountries","headingsSource":""},
	{"key":22,"name":"Industry","pluralName":"Industries","dashboardIndex":-1,"activeIs":true,"keyName":"industryKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonIndustries","storeName":"industries","headingsSource":""},
	{"key":23,"name":"LegalClass","pluralName":"LegalClasses","dashboardIndex":-1,"activeIs":true,"keyName":"legalClassKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonLegalClasses","storeName":"legalClasses","headingsSource":""},
	{"key":24,"name":"Month","pluralName":"Months","dashboardIndex":-1,"activeIs":true,"keyName":"monthKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonMonths","storeName":"months","headingsSource":""},
	{"key":25,"name":"Portfolio","pluralName":"Portfolios","dashboardIndex":-1,"activeIs":true,"keyName":"portfolioKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPortfolios","storeName":"portfolios","headingsSource":""},
	{"key":26,"name":"Property","pluralName":"Properties","dashboardIndex":-1,"activeIs":true,"keyName":"propertyKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonProperties","storeName":"properties","headingsSource":""},
	{"key":27,"name":"Regulation","pluralName":"Regulations","dashboardIndex":-1,"activeIs":true,"keyName":"regulationKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulations","storeName":"regulations","headingsSource":""},
	{"key":28,"name":"Regulator","pluralName":"Regulators","dashboardIndex":-1,"activeIs":true,"keyName":"regulatorKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulators","storeName":"regulators","headingsSource":""},
	{"key":29,"name":"Search","pluralName":"Search","dashboardIndex":-1,"activeIs":true,"keyName":"searchKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
	{"key":30,"name":"Secretariat","pluralName":"Secretariats","dashboardIndex":-1,"activeIs":true,"keyName":"secretariatKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonSecretariats","storeName":"secretariats","headingsSource":""},
	{"key":31,"name":"Setting","pluralName":"Settings","dashboardIndex":-1,"activeIs":true,"keyName":"settingKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
	{"key":32,"name":"ShareCertificate","pluralName":"ShareCertificates","dashboardIndex":-1,"activeIs":true,"keyName":"shareCertificateKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonShareCertificates","storeName":"shareCertificates","headingsSource":""},
	{"key":33,"name":"Shareholding","pluralName":"Shareholdings","dashboardIndex":-1,"activeIs":true,"keyName":"shareholdingKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonShareholdings","storeName":"shareholdings","headingsSource":""},
	{"key":34,"name":"Template","pluralName":"Templates","dashboardIndex":-1,"activeIs":true,"keyName":"templateKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTemplates","headingsSource":""},
	{"key":35,"name":"Trust","pluralName":"Trusts","dashboardIndex":-1,"activeIs":true,"keyName":"trustKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTrusts","storeName":"trusts","headingsSource":""},
	{"key":36,"name":"User","pluralName":"Users","dashboardIndex":3,"activeIs":true,"keyName":"userKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonUsers","storeName":"users","headingsSource":""},
	{"key":37,"name":"Entity","pluralName":"Entities","dashboardIndex":-1,"activeIs":true,"keyName":"entityKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":38,"name":"File","pluralName":"Files","dashboardIndex":-1,"activeIs":true,"keyName":"fileKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonFiles","storeName":"files","headingsSource":""},
	{"key":39,"name":"Meeting","pluralName":"Meetings","dashboardIndex":-1,"activeIs":true,"keyName":"meetingKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonMeetings","storeName":"meetings","headingsSource":""},
	{"key":40,"name":"Functional","pluralName":"Functional","dashboardIndex":-1,"activeIs":true,"keyName":"functionalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":41,"name":"Legal","pluralName":"Legal","dashboardIndex":-1,"activeIs":true,"keyName":"legalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":42,"name":"Natural","pluralName":"Natural","dashboardIndex":-1,"activeIs":true,"keyName":"naturalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":43,"name":"AnniversaryMonth","pluralName":"AnniversaryMonths","dashboardIndex":-1,"activeIs":true,"keyName":"anniversaryMonthKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"months","headingsSource":""},
	{"key":44,"name":"ParentCompany","pluralName":"ParentCompanies","dashboardIndex":-1,"activeIs":true,"keyName":"parentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"companies","headingsSource":""},
	{"key":45,"name":"EntityType","pluralName":"EntityTypes","dashboardIndex":-1,"activeIs":true,"keyName":"entityTypeKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":46,"name":"HoldingParentCompany","pluralName":"HoldingParentCompanies","dashboardIndex":-1,"activeIs":true,"keyName":"holdingParentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"companies","headingsSource":""},
	{"key":47,"name":"Secretary","pluralName":"Secretaries","dashboardIndex":-1,"activeIs":true,"keyName":"secretaryKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"secretaries","headingsSource":""},
	{"key":48,"name":"Lee","pluralName":"Lee","dashboardIndex":-1,"activeIs":true,"keyName":"leeKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":49,"name":"FinancialOfficer","pluralName":"FinancialOfficers","dashboardIndex":-1,"activeIs":true,"keyName":"financialOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":50,"name":"PublicOfficer","pluralName":"PublicOfficers","dashboardIndex":-1,"activeIs":true,"keyName":"publicOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":51,"name":"AuditPartner","pluralName":"AuditPartners","dashboardIndex":-1,"activeIs":true,"keyName":"auditPartnerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":52,"name":"FyeMonth","pluralName":"FyeMonths","dashboardIndex":-1,"activeIs":true,"keyName":"fyeMonthKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"months","headingsSource":""},
	{"key":53,"name":"TasksForCountry","pluralName":"TasksForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"tasksForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForCountry","headingsSource":""},
	{"key":54,"name":"TaskType","pluralName":"TaskTypes","dashboardIndex":-1,"activeIs":true,"keyName":"taskTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTaskTypes","storeName":"taskTypes","headingsSource":""},
	{"key":55,"name":"TasksForEntityType","pluralName":"TasksForEntityType","dashboardIndex":-1,"activeIs":true,"keyName":"tasksForEntityTypeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForEntityType","headingsSource":""},
	{"key":56,"name":"TasksForEntityTypeForCountry","pluralName":"TasksForEntityTypeForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"tasksForEntityTypeForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForEntityTypeForCountry","headingsSource":""},
	{"key":57,"name":"CoR21_1","pluralName":"","dashboardIndex":-1,"activeIs":true,"keyName":"coR21_1Key","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"","headingsSource":"headingsCoR21_1"},
	{"key":58,"name":"YesNo","pluralName":"YesNo","dashboardIndex":-1,"activeIs":true,"keyName":"yesNoKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonYesNo","storeName":"","headingsSource":"headingsYesNo"},
	{"key":59,"name":"Period","pluralName":"Periods","dashboardIndex":-1,"activeIs":true,"keyName":"periodKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPeriods","storeName":"","headingsSource":"headingsPeriod"},
	{"key":60,"name":"ContactPreference","pluralName":"ContactPreferences","dashboardIndex":-1,"activeIs":true,"keyName":"contactPreferenceKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonContactPreferences","storeName":"","headingsSource":"headingsContactPreference"},
	{"key":61,"name":"Report","pluralName":"Reports","dashboardIndex":-1,"activeIs":true,"keyName":"reportKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonReports","storeName":"","headingsSource":"headingsReport"},
	{"key":62,"name":"Attendance","pluralName":"Attendances","dashboardIndex":-1,"activeIs":true,"keyName":"attendanceKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAttendances","storeName":"","headingsSource":"headingsAttendance"},
	{"key":63,"name":"TaskStatus","pluralName":"TaskStatuses","dashboardIndex":-1,"activeIs":true,"keyName":"taskStatusKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTaskStatuses","storeName":"","headingsSource":"headingsTaskStatus"},
	{"key":64,"name":"TemplateInput","pluralName":"TemplateInputs","dashboardIndex":-1,"activeIs":true,"keyName":"templateInputKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTemplateInputs","storeName":"","headingsSource":""},
	{"key":65,"name":"TaskTypesForCountry","pluralName":"TaskTypesForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"taskTypesForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTaskTypesForCountry","headingsSource":""},
	{"key":66,"name":"Task","pluralName":"Tasks","dashboardIndex":-1,"activeIs":true,"keyName":"taskKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTasks","storeName":"","headingsSource":""},
	{"key":67,"name":"DestinationType","pluralName":"DestinationTypes","dashboardIndex":-1,"activeIs":true,"keyName":"destinationTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonDestinationTypes","storeName":"","headingsSource":""},
	{"key":68,"name":"RegulatorType","pluralName":"RegulatorTypes","dashboardIndex":-1,"activeIs":true,"keyName":"regulatorTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulatorTypes","storeName":"","headingsSource":""},
	{"key":69,"name":"PhysicalAddress","pluralName":"PhysicalAddresses","dashboardIndex":-1,"activeIs":true,"keyName":"physicalAddressKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPhysicalAddresses","storeName":"physicalAddresses","headingsSource":""},
	{"key":70,"name":"Workflow","pluralName":"Workflows","dashboardIndex":-1,"activeIs":true,"keyName":"workflowKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonWorkflows","storeName":"workflows","headingsSource":""},
	{"key":71,"name":"WorkflowForParent","pluralName":"WorkflowsForParent","dashboardIndex":-1,"activeIs":true,"keyName":"workflowForParentKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getWorkflowForParent","headingsSource":""}]`
export enum EnumEntityType{
	AccountingClass,
	AccountingClassTier,
	PostalAddress,
	Appointment,
	Auditor,
	BusinessArea,
	BusinessDivision,
	Capacity,
	City,
	Company,
	CompaniesForCountry,
	CompanyType,
	Consolidation,
	Contact,
	Country,
	CountryWithTasks,
	Custom,
	Dashboard,
	EntityStatus,
	EntityStatusTier,
	Individual,
	IndividualForCountries,
	Industry,
	LegalClass,
	Month,
	Portfolio,
	Property,
	Regulation,
	Regulator,
	Search,
	Secretariat,
	Setting,
	ShareCertificate,
	Shareholding,
	Template,
	Trust,
	User,
	Entity,
	File,
	Meeting,
	Functional,
	Legal,
	Natural,
	AnniversaryMonth,
	ParentCompany,
	EntityType,
	HoldingParentCompany,
	Secretary,
	Lee,
	FinancialOfficer,
	PublicOfficer,
	AuditPartner,
	FyeMonth,
	TasksForCountry,
	TaskType,
	TasksForEntityType,
	TasksForEntityTypeForCountry,
	CoR21_1,
	YesNo,
	Period,
	ContactPreference,
	Report,
	Attendance,
	TaskStatus,
	TemplateInput,
	TaskTypesForCountry,
	Task,
	DestinationType,
	RegulatorType,
	PhysicalAddress,
	Workflow,
	WorkflowForParent}
import * as E from './data-entity-classes'; export function getInitEntities(entityTypeKey: EnumEntityType){ switch (entityTypeKey){
	case EnumEntityType.AccountingClass: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.AccountingClassTier: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.PostalAddress: return new E.Entities<E.EntityPostalAddress>(E.EntityPostalAddress); break;
	case EnumEntityType.Appointment: return new E.Entities<E.EntityAppointment>(E.EntityAppointment); break;
	case EnumEntityType.Auditor: return new E.Entities<E.EntityAuditor>(E.EntityAuditor); break;
	case EnumEntityType.BusinessArea: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.BusinessDivision: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Capacity: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.City: return new E.Entities<E.EntityCity>(E.EntityCity); break;
	case EnumEntityType.Company: return new E.Entities<E.EntityCompany>(E.EntityCompany); break;
	case EnumEntityType.CompaniesForCountry: return new E.Entities<E.EntityCompany>(E.EntityCompany); break;
	case EnumEntityType.CompanyType: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Consolidation: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Contact: return new E.Entities<E.EntityContact>(E.EntityContact); break;
	case EnumEntityType.Country: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.CountryWithTasks: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Custom: return new E.Entities<E.EntityCustomField>(E.EntityCustomField); break;
	case EnumEntityType.Dashboard: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.EntityStatus: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.EntityStatusTier: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Individual: return new E.Entities<E.EntityIndividual>(E.EntityIndividual); break;
	case EnumEntityType.IndividualForCountries: return new E.Entities<E.EntityIndividual>(E.EntityIndividual); break;
	case EnumEntityType.Industry: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.LegalClass: return new E.Entities<E.EntityLegal>(E.EntityLegal); break;
	case EnumEntityType.Month: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Portfolio: return new E.Entities<E.EntityPortfolio>(E.EntityPortfolio); break;
	case EnumEntityType.Property: return new E.Entities<E.EntityProperty>(E.EntityProperty); break;
	case EnumEntityType.Regulation: return new E.Entities<E.EntityRegulation>(E.EntityRegulation); break;
	case EnumEntityType.Regulator: return new E.Entities<E.EntityRegulator>(E.EntityRegulator); break;
	case EnumEntityType.Search: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Secretariat: return new E.Entities<E.EntitySecretariat>(E.EntitySecretariat); break;
	case EnumEntityType.Setting: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.ShareCertificate: return new E.Entities<E.EntityShareCertificate>(E.EntityShareCertificate); break;
	case EnumEntityType.Shareholding: return new E.Entities<E.EntityShareholding>(E.EntityShareholding); break;
	case EnumEntityType.Template: return new E.Entities<E.EntityTemplate>(E.EntityTemplate); break;
	case EnumEntityType.Trust: return new E.Entities<E.EntityTrust>(E.EntityTrust); break;
	case EnumEntityType.User: return new E.Entities<E.EntityUser>(E.EntityUser); break;
	case EnumEntityType.Entity: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.File: return new E.Entities<E.EntityFile>(E.EntityFile); break;
	case EnumEntityType.Meeting: return new E.Entities<E.EntityMeeting>(E.EntityMeeting); break;
	case EnumEntityType.Functional: return new E.Entities<E.EntityFunctional>(E.EntityFunctional); break;
	case EnumEntityType.Legal: return new E.Entities<E.EntityLegal>(E.EntityLegal); break;
	case EnumEntityType.Natural: return new E.Entities<E.EntityNatural>(E.EntityNatural); break;
	case EnumEntityType.AnniversaryMonth: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.ParentCompany: return new E.Entities<E.EntityCompany>(E.EntityCompany); break;
	case EnumEntityType.EntityType: return new E.Entities<E.EntityType>(E.EntityType); break;
	case EnumEntityType.HoldingParentCompany: return new E.Entities<E.EntityCompany>(E.EntityCompany); break;
	case EnumEntityType.Secretary: return new E.Entities<E.EntityIndividual>(E.EntityIndividual); break;
	case EnumEntityType.Lee: return new E.Entities<E.EntityIndividual>(E.EntityIndividual); break;
	case EnumEntityType.FinancialOfficer: return new E.Entities<E.EntityIndividual>(E.EntityIndividual); break;
	case EnumEntityType.PublicOfficer: return new E.Entities<E.EntityIndividual>(E.EntityIndividual); break;
	case EnumEntityType.AuditPartner: return new E.Entities<E.EntityIndividual>(E.EntityIndividual); break;
	case EnumEntityType.FyeMonth: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.TasksForCountry: return new E.Entities<E.EntityTask>(E.EntityTask); break;
	case EnumEntityType.TaskType: return new E.Entities<E.EntityTaskType>(E.EntityTaskType); break;
	case EnumEntityType.TasksForEntityType: return new E.Entities<E.EntityTask>(E.EntityTask); break;
	case EnumEntityType.TasksForEntityTypeForCountry: return new E.Entities<E.EntityTask>(E.EntityTask); break;
	case EnumEntityType.CoR21_1: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.YesNo: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Period: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.ContactPreference: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Report: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.Attendance: return new E.Entities<E.EntityAttendance>(E.EntityAttendance); break;
	case EnumEntityType.TaskStatus: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.TemplateInput: return new E.Entities<E.EntityTemplateInput>(E.EntityTemplateInput); break;
	case EnumEntityType.TaskTypesForCountry: return new E.Entities<E.EntityTaskType>(E.EntityTaskType); break;
	case EnumEntityType.Task: return new E.Entities<E.EntityTemplate>(E.EntityTemplate); break;
	case EnumEntityType.DestinationType: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.RegulatorType: return new E.Entities<E.Entity>(E.Entity); break;
	case EnumEntityType.PhysicalAddress: return new E.Entities<E.EntityPhysicalAddress>(E.EntityPhysicalAddress); break;
	case EnumEntityType.Workflow: return new E.Entities<E.EntityWorkflow>(E.EntityWorkflow); break;
	case EnumEntityType.WorkflowForParent: return new E.Entities<E.EntityWorkflow>(E.EntityWorkflow); break;}}
