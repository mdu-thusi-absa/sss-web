// import * as M from './data-entity-parent';
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
  parentWorkflow: K.EntityWorkflow,
  parentTaskFlow: W.Task,
  data: DataService
): W.Task {
  let kids = _queKids_GetSubMenus(parentWorkflow, data);
  let t: W.Task;
  let f = parentWorkflow.functionName;
  if (_queKids_BuildFromFunctionIs(kids)) {
    t = _buildSubMenus(parentWorkflow, parentTaskFlow, data);
    kids.forEach((value, key, map) => {
      if (value.activeIs) queKids(value as K.EntityWorkflow, t, data);
    });
  } else {
    let fun: queFunction = eval(f);
    t = fun(parentWorkflow, parentTaskFlow, data);
  }
  return t;
}
function _queKids_BuildFromFunctionIs(kids: Entities<AnyEntity>): boolean {
  return kids.size > 0;
}

function _queKids_GetSubMenus(
  parentWorkflow: K.EntityWorkflow,
  data: DataService
): Entities<AnyEntity> {
  let db = data.getEntities(E.EnumEntityType.Workflow);
  return db.select('parentKey', parentWorkflow.key);
}

interface queFunction {
  (
    parentWorkflow: K.EntityWorkflow,
    parent: W.Task,
    data: DataService
  ): W.Task;
}

function _buildSubMenus_GetKids(
  data: DataService,
  parentWorkflow: K.EntityWorkflow
) {
  let d = data.getEntities(E.EnumEntityType.WorkflowForParent, {
    parentKey: parentWorkflow.key,
  });
  return d.select('activeIs', true);
}

function _buildSubMenus(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
): W.TaskSelect {
  let a = new W.TaskSelect(data, parentWorkflow.key + '_Key');
  a.name = parentWorkflow.name;
  a = G.attachToParentSelection(
    a,
    parent,
    parentWorkflow.key
  ) as W.TaskSelect;

  a.values = _buildSubMenus_GetKids(data, parentWorkflow);

  return a;
}

function queAppointmentDirector(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);

  //console.log(parentWorkflow);

  // taskList.add(
  //   G.getCountryForTask_AttachedToParentMenuSelection(
  //     data,
  //     taskList.lastTask,
  //     parent.fieldName,
  //     parentWorkflow.key
  //   )
  // );

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
    .add(new K.EntityFile(`Person's CV`))
  taskList.add(
    G.getUploadFiles(
      data,
      individualUpFileList,
      'individualFiles',
      `Individual's files`
    )
  );

  getAuthorisation_(data, taskList);
  getApproval_(
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
  getApproval_(data, taskList, 'approvalRegulatortIs', 'Regulator approval');

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

  getFinaliseTask_(data, taskList);

  return taskList.firstTask;
}

function getApproval_(
  data: DataService,
  taskList: G.TaskList,
  fieldName: string,
  heading: string
) {
  taskList.add(G.getConfirm(data, fieldName, heading, false, true));
}

function getFinaliseTask_(data: DataService, taskList: G.TaskList) {
  taskList.add(G.getRecordDate(data, 'recordDate', 'Record date'));

  taskList.add(G.getConfirm(data, 'commitIs', 'Commit', false, true));
}

function getAuthorisation_(data: DataService, taskList: G.TaskList) {
  taskList.add(
    G.getConfirm(data, 'requestAuthoIs', 'Request authorisation', true, true)
  );

  taskList.add(
    G.getConfirm(data, 'receivedAuthoIs', 'Received authorisation', false, true)
  );
}

function queResignDirector(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(
    G.getMessage(
      data,
      parentWorkflow.name +
        `: test page for end of workflow. Press 'Save & Next' to reset`
    )
  );
  return taskList.firstTask;
}

function queAppointmentAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(
    G.getMessage(
      data,
      parentWorkflow.name +
        `: test page for end of workflow. Press 'Save & Next' to reset`
    )
  );
  return taskList.firstTask;
}

function queAppointmentCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(
    G.getMessage(
      data,
      parentWorkflow.name +
        `: test page for end of workflow. Press 'Save & Next' to reset`
    )
  );
  return taskList.firstTask;
}

function queAppointmentCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(
    G.getMessage(
      data,
      parentWorkflow.name +
        `: test page for end of workflow. Press 'Save & Next' to reset`
    )
  );
  return taskList.firstTask;
}

function queAppointmentEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(
    G.getMessage(
      data,
      parentWorkflow.name +
        `: test page for end of workflow. Press 'Save & Next' to reset`
    )
  );
  return taskList.firstTask;
}

function queAppointmentLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(
    G.getMessage(
      data,
      parentWorkflow.name +
        `: test page for end of workflow. Press 'Save & Next' to reset`
    )
  );
  return taskList.firstTask;
}

function queAppointmentPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(
    G.getMessage(
      data,
      parentWorkflow.name +
        `: test page for end of workflow. Press 'Save & Next' to reset`
    )
  );
  return taskList.firstTask;
}

function queAppointmentAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}

function queRetireDirector(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}

function queRegulatorySubmissions(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAppointAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAppointAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAppointCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAppointCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAppointEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAppointLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAppointPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRemoveAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRemoveAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRemoveCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRemoveCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRemoveEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRemoveLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRemovePublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queResignAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queResignAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queResignCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queResignCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queResignEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queResignLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queResignPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRetireAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRetireAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRetireCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRetireCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRetireEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRetireLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queRetirePublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queCreateNewEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queCreateOffTheShelf(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queReinstateEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queCloseByCourtOrderliquidtion(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queCloseInsolvent(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queCloseSolvent(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  // return G.getMessage(
  //   data,
  //   parent,
  //   parentWorkflow.name +
  //     `: test page for end of workflow. Press 'Save & Next' to reset`
  // );
}
function queSubmitAnnualReturns(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queSubmitCIPCComplianceChecklist(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queSubmitIXBRLOrFAS(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queChangeShareCapital(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queConvertShares(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queTransferShares(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAdoptNewMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queAmendJVAgreement(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queAmendTrustDeed(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangeArticleOfTheMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangeLocationOfRecords(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangeMainBusiness(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangeRegisteredAddress(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangeTypeOfCompany(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangeCompanyName(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangeFinancialYearEnd(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}
function queChangePowersOfTheCompanyAndItsOfficeBearers(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queChangeRingFencingConditionsInMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let config = new G.ConfigWorkflow(
    data,
    parent,
    parent.name,
    parentWorkflow.functionName,
    parentWorkflow
  );
  return _useCompany_Amend_Specific(config);
}

function queAmendIndividualDetails(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAmalgamateOrMerge(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queAquireAnEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queSellOrTransferOfEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queGenerateOganogram(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queGenerateReport1(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}
function queGenerateReport2(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  return G.getFinalPage(data, parent, parentWorkflow);
}

function queChangeAnyDetails(
  parentWorkflow: K.EntityWorkflow,
  parent: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parent, parentWorkflow);
  taskList.add(G.getCountryForTask(data));

  taskList.add(G.getCompany(data));

  taskList.add(G.getCompany_EditAll(data));
  taskList.add(G.getRecordDate(data, 'recordDate', 'Record date'));

  taskList.add(G.getConfirm(data, 'commitIs', 'Commit', false, true));

  return taskList.firstTask;
}

function _useCompany_Amend_Specific(config: G.ConfigWorkflow): W.Task {
  let taskList = new G.TaskList(config.parent,config.parentWorkflow)
  taskList.add(G.getCountryForTask(
    config.data,
  ))
  taskList.add(G.getCompany(config.data))
  let a = new W.TaskForm(config.data, config.fieldName);
  a.entityFieldKey = 'companyKey'; //the form will retrieve the relevant object, if it needs to show any of it's fields
  a.name = 'The amendment';
  a.addInput(
    config.fieldName,
    config.data.getFieldTypeForFieldName(config.fieldName),
    config.heading,
    '',
    new Date()
  );

  taskList.add(a);
  //t.addNext(a)

  let upFiles = new Entities<K.EntityFile>(K.EntityFile);
  taskList.add(G.getUploadFiles(
    config.data,
    upFiles,
    'uploadFiles',
    'Please upload the following files'
  ))

  //'CoR 21.1' or any other
  taskList.add(G.getFormForName(config.data, 'Required inputs'))

  let submitFileList = new Entities<K.EntityFile>(K.EntityFile).add(
    new K.EntityFile('CoR form')
  );

  taskList.add(G.getSubmitFiles(
    config.data,
    submitFileList,
    'submitFileKeys',
    'Submit following files to the regulator'
  ))

  taskList.add(G.getConfirm(
    config.data,
    'confirmSubmissionIs',
    'Confirmation of submission',
    false,
    true
  ))

  taskList.add(G.getReminder(
    config.data,
    'reminderDate',
    'Set reminder to follow up with the regulator'
  ))

  taskList.add(G.getConfirm(
    config.data,
    'regulatorApprovalIs',
    'Confirm approval from the regulator',
    false,
    true
  ))

  let uploadApprovalFiles = new Entities<K.EntityFile>(K.EntityFile);
  taskList.add(G.getUploadFiles(
    config.data,
    uploadApprovalFiles,
    'uploadApprovalFileKeys',
    'Upload approval files from the regulator'
  ))
  taskList.add(G.getRecordDate(config.data, 'recordDate', 'Record date'))
  taskList.add(G.getConfirm(
    config.data,
    'taskCompleteIs',
    'Confirm completion of task',
    false,
    true
  ))
  return taskList.firstTask;
}
