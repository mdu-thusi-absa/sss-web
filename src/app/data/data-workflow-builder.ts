// import * as M from './data-entity-parentTask';
import * as K from './data-entity-kids';
import * as W from './data-workflow-classes';
import * as E from './data-entity-types';
import * as G from './data-workflow-builder-get';
import { DataService } from './data.service';
import { AnyEntity, Entities } from './data-entities';

export function buildWorkFlow(data: DataService): W.TaskWalker {
  let workFlow = new W.TaskWalker(this, 'workflow');
  workFlow.description = 'Execute a company secretarial task';

  let db = data.getEntities(E.EnumEntityType.Workflow);
  let kids = db.select('parentKey', -1);
  let child: K.EntityWorkflow = kids.get(kids.firstKey) as K.EntityWorkflow;
  let t = queKids(child, workFlow, data);
  workFlow.addNext(t);

  return workFlow;
}

function queKids(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
): W.Task {
  let kids = _queKids_GetSubMenus(parentEntity, data);
  let task: W.Task;
  let f = parentEntity.functionName;
  if (_queKids_BuildFromFunctionIs(kids)) {
    task = _buildSubMenus(parentEntity, parentTask, data);
    kids.forEach((value, key, map) => {
      if (value.activeIs) queKids(value as K.EntityWorkflow, task, data);
    });
  } else {
    task = _queKids_execFunction(data, parentTask, parentEntity, f);
  }
  return task;
}

function _queKids_execFunction(
  data: DataService,
  parentTask: W.Task,
  parentEntity: K.EntityWorkflow,
  functionName: string
): W.Task {
  try {
    let fun: queFunction = eval(functionName);
    return fun(parentEntity, parentTask, data);
  } catch {
    console.log(
      'Error:',
      'data-workflow-builder.ts:',
      `Please implement function '${functionName}'`
    );
    return G.getFinalPage(data, parentTask, parentEntity);
  }
}

function _queKids_BuildFromFunctionIs(kids: Entities<AnyEntity>): boolean {
  return kids.size > 0;
}

function _queKids_GetSubMenus(
  parentEntity: K.EntityWorkflow,
  data: DataService
): Entities<AnyEntity> {
  let db = data.getEntities(E.EnumEntityType.Workflow);
  return db.select('parentKey', parentEntity.key);
}

interface queFunction {
  (
    parentEntity: K.EntityWorkflow,
    parentTask: W.Task,
    data: DataService
  ): W.Task;
}

function _buildSubMenus_GetKids(
  data: DataService,
  parentEntity: K.EntityWorkflow
) {
  let d = data.getEntities(E.EnumEntityType.WorkflowForParent, {
    parentKey: parentEntity.key,
  });
  return d.select('activeIs', true);
}

function _buildSubMenus(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
): W.TaskSelect {
  let a = new W.TaskSelect(data, parentEntity.key + '_Key');
  a.name = parentEntity.name;
  a = G.attachToParentSelection(
    a,
    parentTask,
    parentEntity.key
  ) as W.TaskSelect;

  a.values = _buildSubMenus_GetKids(data, parentEntity);

  return a;
}

function queAppointmentDirector(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);

  taskList.add(G.getCountryForTask(data));

  taskList.add(G.getCompany(data));

  taskList.add(G.getDirectorType(data));

  taskList.add(
    G.getConfirm(data, 'internalEmployeeIs', 'Internal employee', true, false)
  );

  taskList.add(G.getAppointmentAction(data));

  taskList.add(G.getIndividualEmployeeStatus(data));

  let individualDownFileList = new Entities<K.EntityFile>(K.EntityFile);
  individualDownFileList
    .add(new K.EntityFile('Consent form for the director to sign'))
    .add(new K.EntityFile('Director procedural guideline pack'));
  taskList.add(
    G.getSubmitFiles(
      data,
      individualDownFileList,
      'individualDownFiles',
      'Documents for the individual to fill'
    )
  );

  let individualUpFileList = new Entities<K.EntityFile>(K.EntityFile)
    .add(new K.EntityFile('Signed consent form from the director'))
    .add(new K.EntityFile('Filled director procedural guidelines'))
    .add(new K.EntityFile(`Person's ID`))
    .add(new K.EntityFile(`Person's CV`));
  taskList.add(
    G.getUploadFiles(
      data,
      individualUpFileList,
      'individualFiles',
      `Individual's files`
    )
  );

  _getAuthorisation(data, taskList);
  getApproval(
    data,
    taskList,
    'approvalLegalDepartmentIs',
    'Legal department approval'
  );

  let excoPackDownFileList = new Entities<K.EntityFile>(K.EntityFile);
  excoPackDownFileList
    .add(new K.EntityFile('Exco endorsement cover sheet for Exco'))
    .add(new K.EntityFile('Exco supporting doc'));
  taskList.add(
    G.getSubmitFiles(
      data,
      excoPackDownFileList,
      'excoPackFiles',
      'Exco endorsement files'
    )
  );

  taskList.add(
    G.getConfirm(data, 'excoEndorsementApproveIs', 'Exco endorsed', true, true)
  );

  // let consentUpFileList = new W.TaskFileList(
  //   'consentInFormFiles',
  //   'Consent form for the director'
  // );
  // consentUpFileList.add(
  //   new K.EntityFile('consentFormDoc', 'Signed consent for the director')
  // );
  // taskList.add(G.getUploadFiles(data, taskList.lastTask, consentUpFileList));

  let boardDownFileList = new Entities<K.EntityFile>(K.EntityFile);
  boardDownFileList.add(new K.EntityFile('Board approval'));
  taskList.add(
    G.getSubmitFiles(
      data,
      boardDownFileList,
      'boardDownFileList',
      'Board approval files'
    )
  );

  let boardUpFileList = new Entities<K.EntityFile>(K.EntityFile);
  boardUpFileList.add(new K.EntityFile('Signed board resolution'));
  taskList.add(
    G.getUploadFiles(
      data,
      boardUpFileList,
      'boardUpFileList',
      'Approved board approval files'
    )
  );

  let regulatorDownFileList = new Entities<K.EntityFile>(K.EntityFile);
  regulatorDownFileList
    .add(new K.EntityFile('CoR39'))
    .add(new K.EntityFile('Signed board resolution'))
    .add(new K.EntityFile('Signed director consent form'))
    .add(new K.EntityFile('Uploaded copy of director ID'));
  taskList.add(
    G.getSubmitFiles(
      data,
      regulatorDownFileList,
      'regulatorDownFileList',
      'Regulator submission files'
    )
  );

  taskList.add(
    G.getInputText(
      data,
      'regulatorSubmissionCode',
      'Regulator code for submission'
    )
  );
  taskList.add(
    G.getInputDate(
      data,
      'regulatorSubmissionDate',
      'Date of submission to the regulator'
    )
  );
  //taskList.add(G.getConfirm(data, taskList.lastTask,'regulatorSubmissionConfirmIs','Regulator submited',false));
  taskList.add(
    G.getReminder(
      data,
      'regulatorSubmissionConfirmIs',
      'Regulator follow up reminder'
    )
  );
  getApproval(data, taskList, 'approvalRegulatortIs', 'Regulator approval');

  let regulatorUpFileList = new Entities<K.EntityFile>(K.EntityFile);
  regulatorUpFileList.add(new K.EntityFile('Registered CoR39'));
  taskList.add(
    G.getUploadFiles(
      data,
      regulatorUpFileList,
      'regulatorApprovalFileList',
      'Regulator approval files'
    )
  );

  _getFinaliseTask(data, taskList);

  return taskList.firstTask;
}

function getApproval(
  data: DataService,
  taskList: G.TaskList,
  fieldName: string,
  heading: string
) {
  taskList.add(G.getConfirm(data, fieldName, heading, false, true));
}

function _getFinaliseTask(data: DataService, taskList: G.TaskList) {
  taskList.add(G.getRecordDate(data, 'recordDate', 'Record date'));
  taskList.add(G.getConfirm(data, 'newTaskIs', 'New task', false, true));
}

function _getAuthorisation(data: DataService, taskList: G.TaskList) {
  taskList.add(
    G.getConfirm(data, 'requestAuthoIs', 'Request authorisation', true, true)
  );

  taskList.add(
    G.getConfirm(data, 'receivedAuthoIs', 'Received authorisation', false, true)
  );
}

function queAdoptNewMOI(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queAmendJVAgreement(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queAmendTrustDeed(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queChangeArticleOfTheMOI(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queChangeLocationOfRecords(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queChangeMainBusiness(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queChangeRegisteredAddress(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queChangeTypeOfCompany(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queChangeCompanyName(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}
function queChangeFinancialYearEnd(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}

function queChangeRingFencingConditionsInMOI(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _useCompany_Amend_Specific(data, parentTask, parentEntity);
}

function queChangeAnyDetails(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));

  taskList.add(G.getCompany(data));

  taskList.add(G.getCompany_EditAll(data));
  _getFinaliseTask(data,taskList)

  return taskList.firstTask;
}

function _useCompany_Amend_Specific(
  data: DataService,
  parentTask: W.Task,
  parentEntity: K.EntityWorkflow
): W.Task {
  let taskList = new G.TaskList(parentTask, parentEntity);
  let heading = parentTask.name;
  let fieldName = parentEntity.functionName;
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));
  let a = new W.TaskForm(data, fieldName);
  a.entityFieldKey = 'companyKey'; //the form will retrieve the relevant object, if it needs to show any of it's fields
  a.name = 'The amendment';
  a.addInput(
    fieldName,
    data.getFieldTypeForFieldName(fieldName),
    heading,
    '',
    new Date()
  );

  taskList.add(a);
  //t.addNext(a)

  let upFiles = new Entities<K.EntityFile>(K.EntityFile);
  taskList.add(
    G.getUploadFiles(
      data,
      upFiles,
      'uploadFiles',
      'Please upload the following files'
    )
  );

  //'CoR 21.1' or any other
  taskList.add(G.getFormForName(data, 'Required inputs'));

  let submitFileList = new Entities<K.EntityFile>(K.EntityFile).add(
    new K.EntityFile('CoR form')
  );

  taskList.add(
    G.getSubmitFiles(
      data,
      submitFileList,
      'submitFileKeys',
      'Submit following files to the regulator'
    )
  );

  taskList.add(
    G.getConfirm(
      data,
      'confirmSubmissionIs',
      'Confirmation of submission',
      false,
      true
    )
  );

  taskList.add(
    G.getReminder(
      data,
      'reminderDate',
      'Set reminder to follow up with the regulator'
    )
  );

  taskList.add(
    G.getConfirm(
      data,
      'regulatorApprovalIs',
      'Confirm approval from the regulator',
      false,
      true
    )
  );

  let uploadApprovalFiles = new Entities<K.EntityFile>(K.EntityFile);
  taskList.add(
    G.getUploadFiles(
      data,
      uploadApprovalFiles,
      'uploadApprovalFileKeys',
      'Upload approval files from the regulator'
    )
  );
  taskList.add(G.getRecordDate(data, 'recordDate', 'Record date'));
  taskList.add(
    G.getConfirm(
      data,
      'taskCompleteIs',
      'Confirm completion of task',
      false,
      true
    )
  );
  return taskList.firstTask;
}
