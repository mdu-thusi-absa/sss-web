import * as M from './models';
import * as E from './data-entityTypes';
import { DataService } from './data.service';
import { mapCompanyHeadings } from './data-json.module';

export function getWorkFlow(
  workFlow: M.WorkFlow,
  data: DataService
): M.WorkFlow {
  let t1 = getCountry(data, workFlow);
  // workFlow.rootTask = t1;
  console.log(workFlow.type);

  let t2 = getEntityTypeFromCountry(data, t1, 202); //select types only ZAF
  let t3 = getCompanyForEntityTypeForCountry(data, t2, 9, 202); //select entities for type=company
  let t4 = getCompany_Amend_RegisteredAddress(data, t3);

  let t5 = getEntityTypeFromCountry(data, t1, 29); //select types only ZAF
  let t6 = getCompanyForCountry(data, t5, 29); //select types only ZAF
  let t7 = getCompany_Amend_Any(data, t6);

  return workFlow;
}

function getCountry(data: DataService, parent: M.TaskFlow) {
  let t1 = new M.TaskFlowSelect(data, 'countryKey');
  t1.name = 'Country';
  t1.sourceType = E.EnumEntityType.CountryWithTasks;
  parent.addNext(t1);
  return t1;
}

function getCompanyForCountry(
  data: DataService,
  parent: M.TaskFlow,
  countryKey: number
) {
  let t4 = new M.TaskFlowSelect(data, 'companyKey');
  t4.name = 'Company to be amended';
  t4.sourceType = E.EnumEntityType.CompaniesFromCountry;
  let c2 = new M.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  let s = new M.TaskFlowSubTask(t4, [c2]);

  parent.addNextFork(s);
  return t4;
}

function getCompanyForEntityTypeForCountry(
  data: DataService,
  parent: M.TaskFlow,
  entityTypeKey: number,
  countryKey: number
) {
  let t4 = new M.TaskFlowSelect(data, 'companyKey');
  t4.name = 'Company to be amended';
  t4.sourceType = E.EnumEntityType.CompaniesFromCountry;
  let c1 = new M.TaskFlowSubTaskCondition(
    'entityTypeKey',
    entityTypeKey,
    '==',
    'number'
  );
  let c2 = new M.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  let s = new M.TaskFlowSubTask(t4, [c1, c2]);

  parent.addNextFork(s);
  return t4;
}

function getLastWord(text: string): string{
  let L = text.length
  let k = L-1
  for (let i = L-1; i >-1 ; i--) {
    const a = text[i];
    if (a == a.toUpperCase()) {
      k = i; break;
    }
  }
  return text.slice(k)
}

function getFieldTypeForName(fieldName: string): string {
  let v = 'text';
  let lastWord = getLastWord(fieldName)
  switch (lastWord) {
    case 'Amount':
    case 'Weight':
    case 'Count':
      v = 'number'
      break;
    case 'Index':
    case 'Key':
      v = 'select-entity'
      break;
    case 'Keys':
      v = ''; break
    case 'Address':
      v = 'address'
      break;
    case 'Date':
      v = 'date'; break;
    case 'Desc':
      v = 'textarea'; break
  }
  return v;
}

function getEntityTypeFromCountry(
  data: DataService,
  parent: M.TaskFlow,
  countryKey: number
): M.TaskFlow {
  let t2 = new M.TaskFlowSelect(data, 'entityTypeKey');
  t2.name = 'Entity type to be amended';
  t2.sourceType = E.EnumEntityType.EntityTypesFromCountry;
  let c = new M.TaskFlowSubTaskCondition(
    'countryKey',
    countryKey,
    '==',
    'number'
  );
  let s = new M.TaskFlowSubTask(t2, [c]);
  parent.addNextFork(s);
  return t2;
}

function getCompany_Amend_Any(
  data: DataService,
  parent: M.TaskFlow
): M.TaskFlow {
  let t7 = new M.TaskFlowForm(data, 'companyDetails');
  t7.name = 'Company Details';
  t7.entityFieldKey = 'companyKey'
  let fields = new Map(eval(mapCompanyHeadings));
  fields.forEach((value, key, map) => {
    t7.addInput(key as string,getFieldTypeForName(key as string) , value as string, '');
  });
  parent.addNext(t7);
  return t7;
}

// returns end step of the workflow
function getCompany_Amend_RegisteredAddress(
  data: DataService,
  attachToTask: M.TaskFlow
): M.TaskFlow {
  let t5 = new M.TaskFlowForm(data, 'address');
  t5.entityFieldKey = 'companyKey'
  t5.name = 'New address';
  attachToTask.addNext(t5);
  t5.addInput('address', 'address', 'Amendment', 'New address of the company');
  let t6 = new M.TaskFlowUploadDocs(data, 'uploadFileKeys');
  t6.name = 'Upload supporting files';
  t5.addNext(t6);

  let t7 = new M.TaskFlowForm(data, 'formCoR211');
  t7.name = 'CoR 21.1';
  t7.addInput(
    'effectiveDate',
    'date',
    'Effective date of change of address',
    ''
  );
  t6.addNext(t7);
  let t8 = new M.TaskFlowConfirm(data, 'approvalRequestIs');
  t8.name = 'Request approval';
  t7.addNext(t8);
  let t9 = new M.TaskFlowConfirm(data, 'approvedIs');
  t9.name = 'Approval received';
  t8.addNext(t9);
  t9.value = true;
  let t10 = new M.TaskFlowSubmitDocs(data, 'submitFileKeys');
  t10.name = 'Submit following files to the regulator';
  t9.addNext(t10);
  let t11 = new M.TaskFlowForm(data, 'formSubmission');
  t11.name = 'Submission to regulator';
  t11.addInput(
    'submissionCode',
    'text',
    'Reference code',
    'Reference code of the submission'
  );
  t11.addInput('submissionConfirmedIs', 'checkbox', 'Confirm summission', '');
  t10.addNext(t11);
  let t12 = new M.TaskFlowReminder(data, 'reminderDate');
  t12.name = 'Set reminder to follow up with the regulator';
  t11.addNext(t12);
  t12.offsetDays = 20;
  let t13 = new M.TaskFlowConfirm(data, 'regulatorApprovalIs');
  t13.name = 'Confirm approval from the regulator';
  t12.addNext(t13);
  let t14 = new M.TaskFlowUploadDocs(data, 'uploadApprovalFileKeys');
  t14.name = 'Upload approval files from the regulator';
  t13.addNext(t14);
  let t15 = new M.TaskFlowConfirm(data, 'taskCompleteIs');
  t15.name = 'Confirm completion of task';
  t14.addNext(t15);
  return t5;
}
