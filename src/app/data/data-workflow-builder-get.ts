import { DataService } from './data.service';
//import * as M from './data-entity-parent';
import * as K from './data-entity-kids';
import * as W from './data-workflow-classes';
import * as E from './data-entity-types';

//TODO: branch to various forms: 15.2, 25, 21.1...
export function getFormForName(data: DataService, formName: string): W.TaskFlowForm {
  let t7 = new W.TaskFlowForm(data, 'formCoR211');
  t7.name = formName;
  t7.addInput('effectiveDate', 'date', 'Effective date of the amendment', '');
  // todo: add source type for each form and mapHeading
  return t7;
}

// export function getCompany_ForParentSelection(config: ConfigWorkflow) {
//   let t = new W.TaskFlowSelect(config.data, 'companyKey');
//   t.name = 'Company';
//   t.sourceType = E.EnumEntityType.CompaniesForCountry;
//   t.actionEntityNameIsEntityName = true;

//   t = attachToParentSelection(
//     t,
//     config.parent,
//     config.parentConditionKey
//   ) as W.TaskFlowSelect;

//   return t;
// }

export function attachToParentSelection(
  childTask: W.TaskFlow,
  parentTask: W.TaskFlow,
  parentConditionKey: number
) {
  let cond = new W.TaskFlowSubTaskCondition(
    parentTask.fieldName,
    parentConditionKey,
    '==',
    'number'
  );
  let subTask = new W.TaskFlowSubTask(childTask, [cond]);
  parentTask.addNextFork(subTask);
  return childTask;
}

export function getConfirm(
  data: DataService,
  parent: W.TaskFlow,
  fieldName: string,
  heading: string,
  startValue: boolean
): W.TaskFlowConfirm {
  let a = new W.TaskFlowConfirm(data, fieldName);
  a.name = heading;
  a.value = startValue
  parent.addNext(a);
  return a;
}

export function getRecordDate(
  data: DataService,
  parent: W.TaskFlow,
  fieldName: string,
  heading: string
): W.TaskFlowDate {
  let a = new W.TaskFlowDate(data, fieldName);
  a.name = heading;
  parent.addNext(a);
  return a;
}

// export function getUploadDocs(
//   data: DataService,
//   parent: W.TaskFlow,
//   fieldName: string,
//   heading: string
// ): W.TaskFlowUploadDocs {
//   let a = new W.TaskFlowUploadDocs(data, fieldName);
//   a.name = heading;
//   parent.addNext(a);
//   return a;
// }

export function getReminder(
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

export function getInputText(
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

export function getSubmitFiles(
  data: DataService,
  parent: W.TaskFlow,
  fileList: W.TaskFileList
) {
  let a = new W.TaskFlowSubmitDocs(data, fileList.fieldName);
  a.fileList = fileList
  a.name = fileList.heading;
  parent.addNext(a);
  return a;
}

export function getUploadFiles(
  data: DataService,
  parent: W.TaskFlow,
  fileList: W.TaskFileList
) {
  let a = new W.TaskFlowUploadDocs(data, fileList.fieldName);
  a.fileList = fileList
  a.name = fileList.heading;
  parent.addNext(a);
  return a;
}

export function getAppointmentAction(
  data: DataService,
  parent: W.TaskFlow
) {
  let a = new W.TaskFlowSelect(data, 'appointmentActionKey');
  a.name = 'Appointment action';
  a.sourceType = E.EnumEntityType.AppointmentAction;
  a.thisEntityNameIsAction = true;
  parent.addNext(a);
  return a;
}

export function getCompany(data: DataService, parent: W.TaskFlow) {
  let a = new W.TaskFlowSelect(data, 'companyKey');
  a.name = 'Company';
  a.sourceType = E.EnumEntityType.CompaniesForCountry;
  a.thisEntityNameIsSubjectName = true;
  let s = new W.TaskFlowSubTask(a);

  parent.addNextFork(s);
  return a;
}

export function getDirectorType(data: DataService, parent: W.TaskFlow) {
  let a = new W.TaskFlowSelect(data, 'directorTypeKey');
  a.name = 'Director type';
  a.sourceType = E.EnumEntityType.DirectorType;
  // a.actionEntityNameIsEntityName = true;
  let s = new W.TaskFlowSubTask(a);

  parent.addNextFork(s);
  return a;
}

export function getIndividual(data: DataService, parent: W.TaskFlow) {
  let a = new W.TaskFlowSelect(data, 'individualKey');
  a.name = 'Individual';
  a.sourceType = E.EnumEntityType.Individual;
  a.thisEntityNameIsObjectName = true;
  parent.addNext(a);
  return a;
}

export function getMessage(data: DataService, parent: W.TaskFlow, messageText: string) {
  let a = new W.TaskFlowMessage(data, 'message');
  a.name = 'Message';
  a.description = messageText
  parent.addNext(a);
  return a;
}

//public parentConditionKey: number,
// public formName: string
export class ConfigWorkflow {
  constructor(
    public data: DataService,
    public parent: W.TaskFlow,
    public heading: string,
    public fieldName: string,
    public parentWorkflow: K.EntityWorkflow
  ) {}
}

export function getCompany_EditAll(data: DataService, parent: W.TaskFlow){
  let a = new W.TaskFlowForm(data, 'companyDetails');
  a.name = 'The amendment';
  a.entityFieldKey = 'companyKey';
  a.inputObject = new K.EntityCompany('New Company');
  parent.addNext(a);
  return a
}

// export function getCountry(data: DataService, parent: W.TaskFlow) {
//   let a = new W.TaskFlowSelect(data, 'countryKey');
//   a.name = 'Country';
//   a.sourceType = E.EnumEntityType.CountryWithTasks;
//   parent.addNext(a);
//   return a;
// }

export function getCountry_AttachedToParentMenuSelection(data: DataService, parent: W.TaskFlow,parentFieldName: string, parentConditionKey: number) {
  let a = new W.TaskFlowSelect(data, 'countryKey');
  a.name = 'Country';
  a.sourceType = E.EnumEntityType.CountryWithTasks;

  let condition = new W.TaskFlowSubTaskCondition(parentFieldName,parentConditionKey,'==','number')
  let subTask = new W.TaskFlowSubTask(a,[condition])
  parent.addNextFork(subTask);
  return a;
}

// function getCountry(
//   parentWorkflow: K.EntityWorkflow,
//   parent: W.TaskFlow,
//   data: DataService
// ): W.TaskFlowSelect {
//   let t = new W.TaskFlowSelect(data, 'countryKey');
//   t.name = 'Country';
//   t.sourceType = E.EnumEntityType.CountryWithTasks;
//   // parent.addNext(t);
//   return t;
// }

