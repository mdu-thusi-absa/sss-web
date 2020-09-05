import * as M from './data-models';
import * as W from './data-models-workflow'
import * as E from './data-entityTypes';
import { DataService } from './data.service';

export function getWorkFlow(
  workFlow: W.WorkFlow,
  data: DataService
): W.WorkFlow {
  let t1 = getCountry(data, workFlow);
  // workFlow.rootTask = t1;
  // console.log(workFlow.type);

  let t2 = getEntityTypeForCountry(data, t1, 202); //select types only ZAF
  let t3 = getCompanyForEntityTypeForCountry(data, t2, 9, 202); //select entities for type=company
  //let t4 = getCompany_Amend_RegisteredAddress(data, t3);
  let t4 = getCompanyAmendmentTypes(data, t3, 202);
  let t41 = getCompany_Amend_Specific(
    data,
    t4,
    'New registered address',
    'newAddress',
    'CoR 21.1'
  );

  let t5 = getEntityTypeForCountry(data, t1, 29); //select types only ZAF
  let t6 = getCompanyForCountry(data, t5, 29); //select types only ZAF
  let t7 = getCompany_Amend_Any(data, t6);

  return workFlow;
}

function getCountry(data: DataService, parent: W.TaskFlow) {
  let t1 = new W.TaskFlowSelect(data, 'countryKey');
  t1.name = 'Country';
  t1.sourceType = E.EnumEntityType.CountryWithTasks;
  parent.addNext(t1);
  return t1;
}

function getCompanyForCountry(
  data: DataService,
  parent: W.TaskFlow,
  countryKey: number
) {
  let t4 = new W.TaskFlowSelect(data, 'companyKey');
  t4.name = 'Company to be amended';
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

function getCompanyForEntityTypeForCountry(
  data: DataService,
  parent: W.TaskFlow,
  entityTypeKey: number,
  countryKey: number
) {
  let t4 = new W.TaskFlowSelect(data, 'companyKey');
  t4.name = 'Company to be amended';
  t4.sourceType = E.EnumEntityType.CompaniesForCountry;
  t4.actionEntityNameIsEntityName = true;
  let c1 = new W.TaskFlowSubTaskCondition(
    'entityTypeKey',
    entityTypeKey,
    '==',
    'number'
  );
  let c2 = new W.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  let s = new W.TaskFlowSubTask(t4, [c1, c2]);

  parent.addNextFork(s);
  return t4;
}

function getCompanyAmendmentTypes(
  data: DataService,
  parent: W.TaskFlow,
  countryKey: number
): W.TaskFlow {
  let t = new W.TaskFlowSelect(data, 'taskTypeKey');
  t.name = 'Amendment type';
  t.sourceType = E.EnumEntityType.TaskType;
  let c = new W.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  t.actionNameIsEntityName = true
  let s = new W.TaskFlowSubTask(t, [c]);
  parent.addNextFork(s);
  return t;
}

function getEntityTypeForCountry(
  data: DataService,
  parent: W.TaskFlow,
  countryKey: number
): W.TaskFlow {
  let t2 = new W.TaskFlowSelect(data, 'entityTypeKey');
  t2.name = 'Entity type to be amended';
  t2.sourceType = E.EnumEntityType.EntityTypesForCountry;
  let c = new W.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  let s = new W.TaskFlowSubTask(t2, [c]);
  parent.addNextFork(s);
  return t2;
}

function getCompany_Amend_Any(
  data: DataService,
  parent: W.TaskFlow
): W.TaskFlow {
  let t7 = new W.TaskFlowForm(data, 'companyDetails');
  t7.name = 'The amendment';
  t7.entityFieldKey = 'companyKey';
  t7.inputSourceType = E.EnumEntityType.Company;
  parent.addNext(t7);
  return t7;
}

// returns end step of the workflow
// function getCompany_Amend_RegisteredAddress(
//   data: DataService,
//   attachToTask: W.TaskFlow
// ): W.TaskFlow {
//   let t5 = new W.TaskFlowForm(data, 'address');
//   t5.entityFieldKey = 'companyKey';
//   t5.name = 'New address';
//   // t5.actionName = 'Amend company address';
//   attachToTask.addNext(t5);
//   t5.addInput('address', 'address', 'New addressed', 'The amendment');
//   let t6 = new W.TaskFlowUploadDocs(data, 'uploadFileKeys');
//   t6.name = 'Upload supporting files';
//   t5.addNext(t6);

//   let t7 = new W.TaskFlowForm(data, 'formCoR211');
//   t7.name = 'CoR 21.1';
//   t7.addInput(
//     'effectiveDate',
//     'date',
//     'Effective date of change of address',
//     ''
//   );
//   t6.addNext(t7);
//   let t8 = new W.TaskFlowConfirm(data, 'approvalRequestIs');
//   t8.name = 'Request approval';
//   t7.addNext(t8);
//   let t9 = new W.TaskFlowConfirm(data, 'approvedIs');
//   t9.name = 'Received approval';
//   t8.addNext(t9);
//   t9.value = true;
//   let t10 = new W.TaskFlowSubmitDocs(data, 'submitFileKeys');
//   t10.name = 'Submit following files to the regulator';
//   t9.addNext(t10);
//   let t11 = new W.TaskFlowForm(data, 'formSubmission');
//   t11.name = 'Submission to regulator';
//   t11.addInput(
//     'submissionCode',
//     'text',
//     'Reference code',
//     'Reference code of the submission'
//   );
//   t11.addInput('submissionConfirmedIs', 'checkbox', 'Confirm summission', '');
//   t10.addNext(t11);
//   let t12 = new W.TaskFlowReminder(data, 'reminderDate');
//   t12.name = 'Set reminder to follow up with the regulator';
//   t11.addNext(t12);
//   t12.offsetDays = 20;
//   let t13 = new W.TaskFlowConfirm(data, 'regulatorApprovalIs');
//   t13.name = 'Confirm approval from the regulator';
//   t12.addNext(t13);
//   let t14 = new W.TaskFlowUploadDocs(data, 'uploadApprovalFileKeys');
//   t14.name = 'Upload approval files from the regulator';
//   t13.addNext(t14);
//   let t15 = new W.TaskFlowConfirm(data, 'taskCompleteIs');
//   t15.name = 'Confirm completion of task';
//   t14.addNext(t15);
//   return t5;
// }

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

function getApproval(data: DataService, parent: W.TaskFlow): W.TaskFlow {
  let t8 = new W.TaskFlowConfirm(data, 'authRequestedIs');
  t8.name = 'Request authorisation';
  parent.addNext(t8);
  let t9 = new W.TaskFlowConfirm(data, 'authReceivedisedIs');
  t9.name = 'Received authorisation';
  t8.addNext(t9);
  t9.value = true;
  return t9;
}

function getCompany_Amend_Specific(
  data: DataService,
  parent: W.TaskFlow,
  heading: string,
  fieldName: string,
  formName: string
): W.TaskFlow {
  let t5 = new W.TaskFlowForm(data, fieldName);
  t5.entityFieldKey = 'companyKey';
  t5.name = 'The amendment';
  t5.addInput(fieldName, data.getFieldTypeForName(fieldName), heading, '');
  parent.addNext(t5);

  let t6 = new W.TaskFlowUploadDocs(data, 'uploadFileKeys');
  t6.name = 'Upload supporting files';
  t5.addNext(t6);

  //'CoR 21.1' or any other
  let t7 = getFormForName(data, formName);
  t6.addNext(t7);
  let t8 = getApproval(data, t7);
  // let t8 = new W.TaskFlowConfirm(data, 'approvalRequestIs');
  // t8.name = 'Request approval';
  // t7.addNext(t8);
  // let t9 = new W.TaskFlowConfirm(data, 'approvedIs');
  // t9.name = 'Approval received';
  // t8.addNext(t9);
  // t9.value = true;
  let t10 = new W.TaskFlowSubmitDocs(data, 'submitFileKeys');
  t10.name = 'Submit following files to the regulator';
  t8.addNext(t10);
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
