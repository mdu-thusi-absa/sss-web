import * as M from './data-entity-classes';
import * as W from './data-workflow-classes';
import * as E from './data-entity-types';
import { DataService } from './data.service';

export function queWorkFlow(
  data: DataService,
  workFlow: W.WorkFlow
): W.WorkFlow {
  let map = new Map<number, W.WorkFlow>();
  let db = data.getEntities(E.EnumEntityType.Workflow);
  //let root = db.select('parentKey', -1);
  let flows: Map<number, W.TaskFlow> = new Map();
  let parent: W.TaskFlow;
  //initialise the tasks
  let kids = db.select('parentKey', -1);
  let child: M.EntityWorkflow = kids.get(kids.firstKey) as M.EntityWorkflow;
  let t = queKids(child, workFlow, data);
  workFlow.addNext(t);

  // db.forEach((value, key, map) => {
  //   if (value['activeIs']) {
  //     console.log(value);
  //     let f:string = value['functionName'];
  //     // let f = 'queCountry';
  //     // console.log(fs.trim()===f,value['functionName'].length,f.length)
  //     let fun = eval(f);
  //     if (value['parentKey']==-1) //root task flow
  //       parent = workFlow
  //     else
  //       parent = flows.get(value['parentKey'])
  //     let t = fun(parent, data);
  //     flows.set(key,t);
  //   }
  // });
  //connect the tasks parent and child

  return workFlow;
}

function queKids(
  parentWorkflow: M.EntityWorkflow,
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
      if (value.activeIs) queKids(value as M.EntityWorkflow, t, data);
    });
  return t;
}

interface que
{
    (parentWorkflow: M.EntityWorkflow,
      parent: W.TaskFlow,
      data: DataService): W.TaskFlow;
};

function queCountry (
  parentWorkflow: M.EntityWorkflow,
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
  parentWorkflow: M.EntityWorkflow,
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
  parentWorkflow: M.EntityWorkflow,
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
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let a = new W.TaskFlowSelect(data, 'reportKey');
  a.name = 'Report';
  a.sourceType = E.EnumEntityType.Report;
  let c = new W.TaskFlowSubTaskCondition('mainTaskTypeKey', 5, '==', 'number');
  let b = new W.TaskFlowSubTask(a, [c]);
  parent.addNextFork(b);

  let d = new W.TaskFlowSelect(data,'destinationTypeKey')
  d.name = 'Destination'
  d.sourceType = E.EnumEntityType.DestinationType;
  a.addNext(d)
  return a;
}
function queGeneralCompanyAmendment(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let a = new W.TaskFlowForm(data, 'companyDetails');
  a.name = 'The amendment';
  a.entityFieldKey = 'companyKey';
  a.inputObject = new M.EntityCompany('New Company');
  let c = new W.TaskFlowSubTaskCondition('mainTaskTypeKey', 3, '==', 'number');
  let b = new W.TaskFlowSubTask(a, [c]);
  parent.addNextFork(b);
  let d = new W.TaskFlowConfirm(data,'areYouSureIs')
  d.name = "Commit"
  d.ensure = true
  a.addNext(d)
  return a;
}

function queSpecificCompanyAmendment(
  parentWorkflow: M.EntityWorkflow,
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
  let b = new W.TaskFlowSubTask(a,[c]);

  parent.addNextFork(b);
  return a;
}
function queAquireNewEntity(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'aquireNewEntity');
}
function queAquireExistingEntity(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'aquireExistingEntity');
}
function queRegisterNewEntity(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'aquireNewEntity');
}
function queChangeCompanyName(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'name');
}
 
function queChangeLocationOfCompanyRecords(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'locationOfCompanyRecords');
}

function queChangeOfMainBusiness(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'mainBusinessDesc');
} 

function queChangeTypeOfCompany(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'changeTypeOfCompanyKey');
}

function queChangeAnArticleOfTheMOI(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'changeArticleOfMOI');
}

function queAdoptNewMOI(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'changeArticleOfMOI');
}

function queChangingTheMainAndorAuxilliaryPowersOfTheCompanyAndItsOfficeBearers(
  parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return new W.TaskFlowMessage(data, 'changeArticleOfMOI');
}
function queRemovingAmendingOrInsertingRingFencingConditionsIntoMOI(
  parentWorkflow: M.EntityWorkflow,
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
  let t1 = getCountry(data, workFlow);
  // workFlow.rootTask = t1;
  // console.log(workFlow.type);

  // let t2 = useEntityTypeForCountry(data, t1, 202,true); //select types only ZAF
  let t3 = useCompanyForEntityTypeForCountry(data, t1, 202); //select entities for type=company
  //let t4 = getCompany_Amend_RegisteredAddress(data, t3);
  let t4 = useCompanyAmendmentTypesForCountry(data, t3, 202);
  let t40 = useApprovalIfNotReport(data, t4, 39);
  {
    let t401 = useReportIfReport(data, t4);
    let t4011 = useReportDestination(data, t401);
    let t41 = useCompany_Amend_Specific(
      data,
      t40,
      'New registered address',
      'newAddress',
      'Additional Information'
    );
  }

  //let t5 = useEntityTypeForCountry(data, t1, 29,true); //select types only Botswana
  let t6 = useCompanyForCountry(data, t1, 242, true); //select Companies only for Botswana
  //let t6 = getCompany(data,t1)

  let t61 = useCompanyAmendmentTypesForCountry(data, t6, 242);
  let t611 = useCompany_Amend_Any(data, t61); //amend any detail for the company
  // let t612 = useReportIfReport(data, t61);
  // let t6121 = useReportDestination(data,t612)

  return workFlow;
}

// function getReport(data: DataService, parent: W.TaskFlow) {
//   let t1 = new W.TaskFlowSelect(data, 'reportKey');
//   t1.name = 'Report';
//   t1.sourceType = E.EnumEntityType.Report;
//   parent.addNext(t1);
//   return t1;
// }

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

// function useEntityTypeForCountry(
//   data: DataService,
//   parent: W.TaskFlow,
//   countryKey: number,
//   matchCountryIs: boolean
// ): W.TaskFlow {
//   let t2 = new W.TaskFlowSelect(data, 'entityTypeKey');
//   t2.name = 'Entity type';
//   t2.sourceType = E.EnumEntityType.EntityTypesForCountry;
//   let c = new W.TaskFlowSubTaskCondition(
//     'countryKey',
//     countryKey,
//     (matchCountryIs?'==':'!='),
//     'number'
//   );
//   let s = new W.TaskFlowSubTask(t2, [c]);
//   parent.addNextFork(s);
//   return t2;
// }

function useCompany_Amend_Any(
  data: DataService,
  parent: W.TaskFlow
): W.TaskFlow {
  let t7 = new W.TaskFlowForm(data, 'companyDetails');
  t7.name = 'The amendment';
  t7.entityFieldKey = 'companyKey';
  t7.inputObject = new M.EntityCompany('New Company');
  parent.addNext(t7);
  return t7;
}

function getFormForName(data: DataService, formName: string): W.TaskFlowForm {
  let t7 = new W.TaskFlowForm(data, 'formCoR211');
  t7.name = formName;
  t7.addInput(
    'effectiveDate',
    'date',
    'Effective date of change of address',
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

function queChangeOfRegisteredAddress(parentWorkflow: M.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
): W.TaskFlow {
  return useCompany_Amend_Specific(data,parent,'Change registered address','changeOfAddress','')
}

function useCompany_Amend_Specific(
  data: DataService,
  parent: W.TaskFlow,
  heading: string,
  fieldName: string,
  formName: string
): W.TaskFlow {
  let t5 = new W.TaskFlowForm(data, fieldName);
  t5.entityFieldKey = 'companyKey';
  t5.name = 'The amendment';
  t5.addInput(fieldName, data.getFieldTypeForFieldName(fieldName), heading, '');
  parent.addNext(t5);

  let t6 = new W.TaskFlowUploadDocs(data, 'uploadFileKeys');
  t6.name = 'Upload supporting files';
  t5.addNext(t6);

  //'CoR 21.1' or any other
  let t7 = getFormForName(data, formName);
  t6.addNext(t7);
  //let t8 = getApproval(data, t7);
  // let t8 = new W.TaskFlowConfirm(data, 'approvalRequestIs');
  // t8.name = 'Request approval';
  // t7.addNext(t8);
  // let t9 = new W.TaskFlowConfirm(data, 'approvedIs');
  // t9.name = 'Approval received';
  // t8.addNext(t9);
  // t9.value = true;
  let t10 = new W.TaskFlowSubmitDocs(data, 'submitFileKeys');
  t10.name = 'Submit following files to the regulator';
  t7.addNext(t10);
  let t11 = new W.TaskFlowForm(data, 'formSubmission');
  t11.name = 'Submission to regulator';
  t11.addInput(
    'submissionCode',
    'text',
    'Reference code',
    'Reference code of the submission'
  );
  //t11.addInput('submissionConfirmedIs', 'checkbox', 'Confirm submission', '');
  t10.addNext(t11);
  let t11_1 = new W.TaskFlowConfirm(data, 'confirmSubmissionIs');
  t11_1.name = 'Confirmation of submission';
  t11.addNext(t11_1);

  let t12 = new W.TaskFlowReminder(data, 'reminderDate');
  t12.name = 'Set reminder to follow up with the regulator';
  t11_1.addNext(t12);
  t12.offsetDays = 20;
  let t13 = new W.TaskFlowConfirm(data, 'regulatorApprovalIs');
  t13.name = 'Confirm approval from the regulator';
  t12.addNext(t13);
  let t14 = new W.TaskFlowUploadDocs(data, 'uploadApprovalFileKeys');
  t14.name = 'Upload approval files from the regulator';
  t13.addNext(t14);
  let t15 = new W.TaskFlowConfirm(data, 'taskCompleteIs');
  t15.name = 'Confirm completion of task';
  t14.addNext(t15);
  return t5;
}
