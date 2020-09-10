import * as M from './data-entity-parent';
import * as K from './data-entity-kids';
import * as W from './data-workflow-classes';
import * as E from './data-entity-types';
import { DataService } from './data.service';
import { fileURLToPath } from 'url';
import { data } from 'jquery';

export function queWorkFlow(
  data: DataService,
  workFlow: W.WorkFlow
): W.WorkFlow {
  // let map = new Map<number, W.WorkFlow>();
  let db = data.getEntities(E.EnumEntityType.Workflow);
  //let root = db.select('parentKey', -1);
  // let flows: Map<number, W.TaskFlow> = new Map();
  // let parent: W.TaskFlow;
  //initialise the tasks
  let kids = db.select('parentKey', -1);
  let child: K.EntityWorkflow = kids.get(kids.firstKey) as K.EntityWorkflow;
  let t = queKids(child, workFlow, data);
  workFlow.addNext(t);

  return workFlow;
}

function queKids(
  parentWorkflow: K.EntityWorkflow,
  parentTaskFlow: W.TaskFlow,
  data: DataService
): W.TaskFlow {
  let f = parentWorkflow.functionName;
  let fun: que = eval(f);
  let t = fun(parentWorkflow, parentTaskFlow, data);

  let db = data.getEntities(E.EnumEntityType.Workflow);
  let kids = db.select('parentKey', parentWorkflow.key);
  if (kids.size > 0)
    kids.forEach((value, key, map) => {
      if (value.activeIs) queKids(value as K.EntityWorkflow, t, data);
    });
  return t;
}

interface que {
  (
    parentWorkflow: K.EntityWorkflow,
    parent: W.TaskFlow,
    data: DataService
  ): W.TaskFlow;
}

function queCountry(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
): W.TaskFlowSelect {
  let t1 = new W.TaskFlowSelect(data, 'countryKey');
  t1.name = 'Country';
  t1.sourceType = E.EnumEntityType.CountryWithTasks;
  parent.addNext(t1);
  return t1;
}
function queCompany(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let t4 = new W.TaskFlowSelect(data, 'companyKey');
  t4.name = 'Company';
  t4.sourceType = E.EnumEntityType.CompaniesForCountry;
  t4.actionEntityNameIsEntityName = true;
  let s = new W.TaskFlowSubTask(t4);

  parent.addNextFork(s);
  return t4;
}

function queWorkflow(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let t4 = new W.TaskFlowSelect(data, 'mainTaskTypeKey');
  t4.name = 'Task type';
  //t4.sourceType = E.EnumEntityType.WorkflowForParent;
  let d = data.getEntities(E.EnumEntityType.WorkflowForParent, {
    parentKey: parentWorkflow.key,
  });
  t4.values = d.select('activeIs', true);
  t4.actionNameIsEntityName = true;
  let s = new W.TaskFlowSubTask(t4);

  parent.addNextFork(s);
  return t4;
}

function queReport(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let a = new W.TaskFlowSelect(data, 'reportKey');
  a.name = 'Report';
  a.sourceType = E.EnumEntityType.Report;
  let c = new W.TaskFlowSubTaskCondition('mainTaskTypeKey', parentWorkflow.key, '==', 'number');
  let b = new W.TaskFlowSubTask(a, [c]);
  parent.addNextFork(b);

  let d = new W.TaskFlowSelect(data, 'destinationTypeKey');
  d.name = 'Destination';
  d.sourceType = E.EnumEntityType.DestinationType;
  a.addNext(d);
  return a;
}
function queGeneralCompanyAmendment(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let a = new W.TaskFlowForm(data, 'companyDetails');
  a.name = 'The amendment';
  a.entityFieldKey = 'companyKey';
  a.inputObject = new K.EntityCompany('New Company');
  let c = new W.TaskFlowSubTaskCondition('mainTaskTypeKey', parentWorkflow.key, '==', 'number');
  let b = new W.TaskFlowSubTask(a, [c]);
  parent.addNextFork(b);
  let d = new W.TaskFlowConfirm(data, 'areYouSureIs');
  d.name = 'Commit';
  d.ensure = true;
  a.addNext(d);
  return a;
}

function queSpecificCompanyAmendment(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let d = data.getEntities(E.EnumEntityType.WorkflowForParent, {
    parentKey: parentWorkflow.key,
  });

  let a = new W.TaskFlowSelect(data, 'specificCompanyAmendment');
  a.name = 'Specific company amendment';
  a.values = d.select('activeIs', true);
  a.actionNameIsEntityName = true;
  let c = new W.TaskFlowSubTaskCondition('mainTaskTypeKey', 4, '==', 'number');
  let b = new W.TaskFlowSubTask(a, [c]);

  parent.addNextFork(b);
  return a;
}
function queAquireNewEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'aquireNewEntity');
}
function queAquireExistingEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'aquireExistingEntity');
}
function queRegisterNewEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'aquireNewEntity');
}
function queChangeCompanyName(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'name');
}

function queChangeLocationOfCompanyRecords(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return useCompany_Amend_Specific(
    new ConfigCompanyAmendSpecific(
      data,
      parent,
      'specificCompanyAmendment',
      parentWorkflow.key,
      'Change location of records',
      'changeRecordsAddress',
      'CoR 22'
    )
  );
}

function queChangeTypeOfCompany(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return useCompany_Amend_Specific(
    new ConfigCompanyAmendSpecific(
      data,
      parent,
      'specificCompanyAmendment',
      parentWorkflow.key,
      'Change company type',
      'companyTypeKey',
      'CoR 15.2'
    )
  );
}

function queChangeAnArticleOfTheMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return useCompany_Amend_Specific(
    new ConfigCompanyAmendSpecific(
      data,
      parent,
      'specificCompanyAmendment',
      parentWorkflow.key,
      'Change an article of the MOI',
      'articleOfMOIDesc',
      'CoR 15.2'
    )
  );
}

function queAdoptNewMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return useCompany_Amend_Specific(
    new ConfigCompanyAmendSpecific(
      data,
      parent,
      'specificCompanyAmendment',
      parentWorkflow.key,
      'Adopt new MOI',
      'newMOIDesc',
      'CoR 15.2'
    )
  );
}

function queChangeFinancialYearEnd(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return useCompany_Amend_Specific(
    new ConfigCompanyAmendSpecific(
      data,
      parent,
      'specificCompanyAmendment',
      parentWorkflow.key,
      'change of Financial Year End',
      'fyeDate',
      'CoR 25'
    )
  );
}

function queChangingTheMainAndorAuxilliaryPowersOfTheCompanyAndItsOfficeBearers(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'changeArticleOfMOI');
}

function queRemovingAmendingOrInsertingRingFencingConditionsIntoMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'changeArticleOfMOI');
}

export function getWorkFlow(
  workFlow: W.WorkFlow,
  data: DataService
): W.WorkFlow {
  queWorkFlow(data, workFlow);

  return workFlow;
}

function getCountry(data: DataService, parent: W.TaskFlow) {
  let t1 = new W.TaskFlowSelect(data, 'countryKey');
  t1.name = 'Country';
  t1.sourceType = E.EnumEntityType.CountryWithTasks;
  parent.addNext(t1);
  return t1;
}

function getCompany(data: DataService, parent: W.TaskFlow) {
  let t1 = new W.TaskFlowSelect(data, 'companyKey');
  t1.name = 'Company';
  t1.sourceType = E.EnumEntityType.CompaniesForCountry;
  parent.addNext(t1);
  return t1;
}

function useReportDestination(
  data: DataService,
  parent: W.TaskFlow
): W.TaskFlowSelect {
  let a = new W.TaskFlowSelect(data, 'destinationTypeKey');
  a.name = 'Destination';
  a.sourceType = E.EnumEntityType.DestinationType;
  // console.log(E.EnumEntityType.DestinationType);
  // console.log(a.sourceType);

  parent.addNext(a);
  // todo: add source type for each form and mapHeading
  return a;
}

function useCompanyForCountry(
  data: DataService,
  parent: W.TaskFlow,
  countryKey: number,
  matchCountryIs: boolean
) {
  let t4 = new W.TaskFlowSelect(data, 'companyKey');
  t4.name = 'Company';
  t4.sourceType = E.EnumEntityType.CompaniesForCountry;
  t4.actionEntityNameIsEntityName = true;

  let c2 = new W.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    matchCountryIs ? '==' : '!=',
    'number'
  );
  let s = new W.TaskFlowSubTask(t4, [c2]);

  parent.addNextFork(s);
  return t4;
}

function useCompanyForEntityTypeForCountry(
  data: DataService,
  parent: W.TaskFlow,
  countryKey: number
) {
  let t4 = new W.TaskFlowSelect(data, 'companyKey');
  t4.name = 'Company';
  t4.sourceType = E.EnumEntityType.CompaniesForCountry;
  t4.actionEntityNameIsEntityName = true;
  let c2 = new W.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  let s = new W.TaskFlowSubTask(t4, [c2]);

  parent.addNextFork(s);
  return t4;
}

function useCompanyAmendmentTypesForCountry(
  data: DataService,
  parent: W.TaskFlow,
  countryKey: number
): W.TaskFlow {
  let t = new W.TaskFlowSelect(data, 'taskTypeKey');
  t.name = 'Amendment type';
  t.sourceType = E.EnumEntityType.TaskTypesForCountry;
  let c = new W.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  t.actionNameIsEntityName = true;
  let s = new W.TaskFlowSubTask(t, [c]);
  parent.addNextFork(s);
  return t;
}

function useCompany_Amend_Any(
  data: DataService,
  parent: W.TaskFlow
): W.TaskFlow {
  let t7 = new W.TaskFlowForm(data, 'companyDetails');
  t7.name = 'The amendment';
  t7.entityFieldKey = 'companyKey';
  t7.inputObject = new K.EntityCompany('New Company');
  parent.addNext(t7);
  return t7;
}

//TODO: branch to various forms: 15.2, 25, 21.1...
function getFormForName(data: DataService, formName: string): W.TaskFlowForm {
  let t7 = new W.TaskFlowForm(data, 'formCoR211');
  t7.name = formName;
  t7.addInput(
    'effectiveDate',
    'date',
    'Effective date of the amendment',
    ''
  );
  // todo: add source type for each form and mapHeading
  return t7;
}

function useAdditionalInfo(
  data: DataService,
  parent: W.TaskFlow,
  formName: string
): W.TaskFlowForm {
  let t7 = new W.TaskFlowForm(data, 'formCoR211');
  t7.name = formName;
  t7.addInput(
    'effectiveDate',
    'date',
    'Effective date of change of address',
    ''
  );
  parent.addNext(t7);
  // todo: add source type for each form and mapHeading
  return t7;
}

function useReportIfReport(data: DataService, parent: W.TaskFlow): W.TaskFlow {
  let t2 = new W.TaskFlowSelect(data, 'reportKey');
  t2.name = 'Report';
  t2.sourceType = E.EnumEntityType.Report;
  let c = new W.TaskFlowSubTaskCondition('taskTypeKey', 39, '==', 'number');
  let s = new W.TaskFlowSubTask(t2, [c]);
  parent.addNextFork(s);
  return t2;
}

function useApprovalIfNotReport(
  data: DataService,
  parent: W.TaskFlow,
  taskTypeKey: number
): W.TaskFlow {
  let a = new W.TaskFlowConfirm(data, 'authRequestedIs');
  a.name = 'Request authorisation';
  let c = new W.TaskFlowSubTaskCondition(
    'taskTypeKey',
    taskTypeKey,
    '!=',
    'number'
  );
  let s = new W.TaskFlowSubTask(a, [c]);
  parent.addNextFork(s);
  let b = new W.TaskFlowConfirm(data, 'authReceivedisedIs');
  b.name = 'Received authorisation';
  b.value = true;
  a.addNext(b);

  return b;
}

// function getApproval(
//   data: DataService,
//   parent: W.TaskFlow,
// ): W.TaskFlow {
//   let a = new W.TaskFlowConfirm(data, 'authRequestedIs');
//   a.name = 'Request authorisation';
//   // parent.addNext(a)
//   let b = new W.TaskFlowConfirm(data, 'authReceivedisedIs');
//   b.name = 'Received authorisation';
//   b.value = true;
//   a.addNext(b)
//   return a
// }

function queChangeOfRegisteredAddress(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
): W.TaskFlow {
  return useCompany_Amend_Specific(
    new ConfigCompanyAmendSpecific(
      data,
      parent,
      'specificCompanyAmendment',
      10,
      'Change registered address',
      'changeRegisteredAddress',
      'CoR 21.1'
    )
  );
}

function queChangeOfMainBusiness(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
): W.TaskFlow {
  return useCompany_Amend_Specific(
    new ConfigCompanyAmendSpecific(
      data,
      parent,
      'specificCompanyAmendment',
      11,
      'Change main business',
      'changeMainBusinessDesc',
      'CoR 15.2'
    )
  );
}


class ConfigCompanyAmendSpecific {
  constructor(
    public data: DataService,
    public parent: W.TaskFlow,
    public parentTaskFieldName: string,
    public parentConditionKey: number,
    public heading: string,
    public fieldName: string,
    public formName: string
  ) {}
}

function useCompany_Amend_Specific(
  config: ConfigCompanyAmendSpecific
): W.TaskFlow {
  let t5 = new W.TaskFlowForm(config.data, config.fieldName);
  t5.entityFieldKey = 'companyKey'; //the form will retrieve the relevant object, if it needs to show any of it's fields
  t5.name = 'The amendment';
  t5.addInput(
    config.fieldName,
    config.data.getFieldTypeForFieldName(config.fieldName),
    config.heading,
    ''
  );

  let cond = new W.TaskFlowSubTaskCondition(
    config.parentTaskFieldName,
    config.parentConditionKey,
    '==',
    'number'
  );
  let subTask = new W.TaskFlowSubTask(t5, [cond]);
  config.parent.addNextFork(subTask);

  let t6 = getUploadDocs(config.data,t5,'uploadFileKeys','Upload supporting files')
  
  //'CoR 21.1' or any other
  let t7 = getFormForName(config.data, config.formName);
  t6.addNext(t7);

  let t11 = getSubmitFiles(
    config.data,
    t7,
    'submitFileKeys',
    'Submit following files to the regulator'
  );

  let t11_1 = getConfirm(
    config.data,
    t11,
    'confirmSubmissionIs',
    'Confirmation of submission'
  );

  let t12 = getReminder(
    config.data,
    t11_1,
    'reminderDate',
    'Set reminder to follow up with the regulator'
  );

  let t13 = getConfirm(
    config.data,
    t12,
    'regulatorApprovalIs',
    'Confirm approval from the regulator'
  );
  let t14 = getUploadDocs(
    config.data,
    t13,
    'uploadApprovalFileKeys',
    'Upload approval files from the regulator'
  );
  let t15 = getConfirm(
    config.data,
    t14,
    'taskCompleteIs',
    'Confirm completion of task'
  );
  return t5;
}

function getConfirm(
  data: DataService,
  parent: W.TaskFlow,
  fieldName: string,
  heading: string
): W.TaskFlowConfirm {
  let a = new W.TaskFlowConfirm(data, fieldName);
  a.name = heading;
  parent.addNext(a);
  return a;
}

function getUploadDocs(
  data: DataService,
  parent: W.TaskFlow,
  fieldName: string,
  heading: string
): W.TaskFlowUploadDocs {
  let a = new W.TaskFlowUploadDocs(data, fieldName);
  a.name = heading;
  parent.addNext(a);
  return a;
}

function getReminder(
  data: DataService,
  parent: W.TaskFlow,
  fieldName: string,
  heading: string
): W.TaskFlowReminder {
  let a = new W.TaskFlowReminder(data, fieldName);
  a.name = heading;
  parent.addNext(a);
  a.offsetDays = 20;
  return a;
}

function getInputText(
  data: DataService,
  parent: W.TaskFlow,
  fieldName: string,
  heading: string
): W.TaskFlowForm {
  let a = new W.TaskFlowForm(data, 'form_' + fieldName);
  a.name = heading;
  a.addInput(fieldName, 'text', heading, '');
  //t11.addInput('submissionConfirmedIs', 'checkbox', 'Confirm submission', '');
  parent.addNext(a);
  return a;
}

function getSubmitFiles(
  data: DataService,
  parent: W.TaskFlow,
  fieldName: string,
  heading: string
) {
  let a = new W.TaskFlowSubmitDocs(data, fieldName);
  a.name = heading;
  parent.addNext(a);
  return a
}
