import * as M from './data-entity-parent';
import * as K from './data-entity-kids';
import * as W from './data-workflow-classes';
import * as E from './data-entity-types';
import * as G from './data-workflow-builder-get';
import { DataService } from './data.service';
import { AnyEntity, Entities } from './data-entities';

export function buildWorkFlow(data: DataService): W.WorkFlow {
  let workFlow = new W.WorkFlow(this, 'workflow');
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
  parentTaskFlow: W.TaskFlow,
  data: DataService
): W.TaskFlow {
  let kids = _queKids_GetSubMenus(parentWorkflow, data);
  let t: W.TaskFlow;
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
    parent: W.TaskFlow,
    data: DataService
  ): W.TaskFlow;
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
  parent: W.TaskFlow,
  data: DataService
): W.TaskFlowSelect {
  let a = new W.TaskFlowSelect(data, parentWorkflow.key + '_Key');
  a.name = parentWorkflow.name;
  a = G.attachToParentSelection(
    a,
    parent,
    parentWorkflow.key
  ) as W.TaskFlowSelect;

  a.values = _buildSubMenus_GetKids(data, parentWorkflow);

  return a;
}

class TaskList {
  private _list: W.TaskFlow[] = [];
  lastTask: W.TaskFlow;
  constructor(public parent: W.TaskFlow) {
    this.lastTask = parent;
  }
  add(t: W.TaskFlow) {
    this._list.push(t);
    this.lastTask = t;
  }
  get firstTask() {
    return this._list[0];
  }
}

function queAppointmentDirector(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let taskList = new TaskList(parent);

  console.log(parentWorkflow);
  
  taskList.add(
    G.getCountryForTask_AttachedToParentMenuSelection(
      data,
      taskList.lastTask,
      parent.fieldName,
      parentWorkflow.key
    )
  );

  taskList.add(G.getCompany(data, taskList.lastTask));

  taskList.add(G.getDirectorType(data, taskList.lastTask));

  taskList.add(
    G.getConfirm(
      data,
      taskList.lastTask,
      'internalEmployeeIs',
      'Internal employee',
      true,
      false
    )
  );

  taskList.add(G.getAppointmentAction(data, taskList.lastTask));

  taskList.add(G.getIndividualEmployeeStatus(data, taskList.lastTask));

  let individualDownFileList = new Entities<K.EntityFile>(K.EntityFile);
  individualDownFileList
    .add(new K.EntityFile('Consent form for the director to sign'))
    .add(new K.EntityFile('Director procedural guideline pack'));
  taskList.add(
    G.getSubmitFiles(
      data,
      taskList.lastTask,
      individualDownFileList,
      'individualDownFiles',
      'Documents for the individual to fill'
    )
  );

  let individualUpFileList = new Entities<K.EntityFile>(K.EntityFile)
    .add(new K.EntityFile('Signed consent form from the director'))
    .add(new K.EntityFile('Filled director procedural guidelines'));
  taskList.add(
    G.getUploadFiles(
      data,
      taskList.lastTask,
      individualUpFileList,
      'individualFiles',
      `Individual's files`
    )
  );

  let excoPackDownFileList = new Entities<K.EntityFile>(K.EntityFile);
  excoPackDownFileList
    .add(new K.EntityFile('Exco endorsement cover sheet for Exco'))
    .add(new K.EntityFile('Exco supporting doc'));
  taskList.add(
    G.getSubmitFiles(
      data,
      taskList.lastTask,
      excoPackDownFileList,
      'excoPackFiles',
      'Exco endorsement files'
    )
  );

  taskList.add(
    G.getConfirm(
      data,
      taskList.lastTask,
      'excoEndorsementApproveIs',
      'Exco endorsed',
      true,
      true
    )
  );

  // let consentUpFileList = new W.TaskFileList(
  //   'consentInFormFiles',
  //   'Consent form for the director'
  // );
  // consentUpFileList.add(
  //   new K.EntityFile('consentFormDoc', 'Signed consent for the director')
  // );
  // taskList.add(G.getUploadFiles(data, taskList.lastTask, consentUpFileList));

  getAuthorisation_(data, taskList);

  // getApproval_(data,taskList,'approvalHeadCoSecDepartmentIs','Head of CoSec approval')
  getApproval_(
    data,
    taskList,
    'approvalLegalDepartmentIs',
    'Legal department approval'
  );

  let boardDownFileList = new Entities<K.EntityFile>(K.EntityFile);
  boardDownFileList.add(new K.EntityFile('Board resolution to approve'));
  taskList.add(
    G.getSubmitFiles(
      data,
      taskList.lastTask,
      boardDownFileList,
      'boardDownFileList',
      'Board proposal files to approve'
    )
  );

  let boardUpFileList = new Entities<K.EntityFile>(K.EntityFile);
  boardUpFileList.add(new K.EntityFile('Signed board resolution'));
  taskList.add(
    G.getUploadFiles(
      data,
      taskList.lastTask,
      boardUpFileList,
      'boardUpFileList',
      'Approved board proposal files'
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
      taskList.lastTask,
      regulatorDownFileList,
      'regulatorDownFileList',
      'Regulator submission files'
    )
  );

  taskList.add(
    G.getInputText(
      data,
      taskList.lastTask,
      'regulatorSubmissionCode',
      'Regulator code for submission'
    )
  );
  //taskList.add(G.getConfirm(data, taskList.lastTask,'regulatorSubmissionConfirmIs','Regulator submited',false));
  taskList.add(
    G.getReminder(
      data,
      taskList.lastTask,
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
      taskList.lastTask,
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
  taskList: TaskList,
  fieldName: string,
  heading: string
) {
  taskList.add(
    G.getConfirm(data, taskList.lastTask, fieldName, heading, false, true)
  );
}

function getFinaliseTask_(data: DataService, taskList: TaskList) {
  taskList.add(
    G.getRecordDate(data, taskList.lastTask, 'recordDate', 'Record date')
  );

  taskList.add(
    G.getConfirm(data, taskList.lastTask, 'commitIs', 'Commit', false, true)
  );
}

function getAuthorisation_(data: DataService, taskList: TaskList) {
  taskList.add(
    G.getConfirm(
      data,
      taskList.lastTask,
      'requestAuthoIs',
      'Request authorisation',
      true,
      true
    )
  );

  taskList.add(
    G.getConfirm(
      data,
      taskList.lastTask,
      'receivedAuthoIs',
      'Received authorisation',
      false,
      true
    )
  );
}

function queResignDirector(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queAppointmentAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queAppointmentCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queAppointmentCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queAppointmentEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queAppointmentLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queAppointmentPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queAppointmentAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queRetireDirector(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queRegulatorySubmissions(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAppointAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAppointAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAppointCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAppointCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAppointEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAppointLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAppointPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRemoveAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRemoveAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRemoveCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRemoveCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRemoveEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRemoveLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRemovePublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queResignAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queResignAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queResignCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queResignCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queResignEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queResignLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queResignPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRetireAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRetireAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRetireCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRetireCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRetireEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRetireLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queRetirePublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queCreateNewEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queCreateOffTheShelf(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queReinstateEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queCloseByCourtOrderliquidtion(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queCloseInsolvent(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queCloseSolvent(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queSubmitAnnualReturns(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queSubmitCIPCComplianceChecklist(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queSubmitIXBRLOrFAS(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queChangeShareCapital(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queConvertShares(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queTransferShares(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAdoptNewMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queChangeRingFencingConditionsInMOI(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
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
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAmalgamateOrMerge(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queAquireAnEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queSellOrTransferOfEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queGenerateOganogram(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queGenerateReport1(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}
function queGenerateReport2(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(
    data,
    parent,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  );
}

function queChangeAnyDetails(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  let countrySet = G.getCountry_AttachedToParentMenuSelection(
    data,
    parent,
    parent.fieldName,
    parentWorkflow.key
  );

  let companySet = G.getCompany(data, countrySet);

  let companyEdit = G.getCompany_EditAll(data, companySet);
  let recordDateSet = G.getRecordDate(
    data,
    companyEdit,
    'recordDate',
    'Record date'
  );

  let doneSet = G.getConfirm(
    data,
    recordDateSet,
    'commitIs',
    'Commit',
    false,
    true
  );

  return countrySet;
}

function _useCompany_Amend_Specific(config: G.ConfigWorkflow): W.TaskFlow {
  let countryTask = G.getCountry_AttachedToParentMenuSelection(
    config.data,
    config.parent,
    config.parent.fieldName,
    config.parentWorkflow.key
  );
  let companyTask = G.getCompany(config.data, countryTask);
  let a = new W.TaskFlowForm(config.data, config.fieldName);
  a.entityFieldKey = 'companyKey'; //the form will retrieve the relevant object, if it needs to show any of it's fields
  a.name = 'The amendment';
  a.addInput(
    config.fieldName,
    config.data.getFieldTypeForFieldName(config.fieldName),
    config.heading,
    ''
  );

  companyTask.addNext(a);
  //t.addNext(a)

  let upFiles = new Entities<K.EntityFile>(K.EntityFile);
  let b = G.getUploadFiles(
    config.data,
    a,
    upFiles,
    'uploadFiles',
    'Please upload the following files'
  );

  //'CoR 21.1' or any other
  let c = G.getFormForName(config.data, 'Required inputs');
  b.addNext(c);

  let submitFileList = new Entities<K.EntityFile>(K.EntityFile).add(
    new K.EntityFile('CoR form')
  );

  let d = G.getSubmitFiles(
    config.data,
    c,
    submitFileList,
    'submitFileKeys',
    'Submit following files to the regulator'
  );

  let e = G.getConfirm(
    config.data,
    d,
    'confirmSubmissionIs',
    'Confirmation of submission',
    false,
    true
  );

  let f = G.getReminder(
    config.data,
    e,
    'reminderDate',
    'Set reminder to follow up with the regulator'
  );

  let g = G.getConfirm(
    config.data,
    f,
    'regulatorApprovalIs',
    'Confirm approval from the regulator',
    false,
    true
  );

  let uploadApprovalFiles = new Entities<K.EntityFile>(K.EntityFile);
  let h = G.getUploadFiles(
    config.data,
    g,
    uploadApprovalFiles,
    'uploadApprovalFileKeys',
    'Upload approval files from the regulator'
  );
  let i = G.getRecordDate(config.data, h, 'recordDate', 'Record date');
  let j = G.getConfirm(
    config.data,
    i,
    'taskCompleteIs',
    'Confirm completion of task',
    false,
    true
  );
  return countryTask;
}
