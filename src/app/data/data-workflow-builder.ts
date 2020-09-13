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

function _buildSubMenus_GetKids(data:DataService,parentWorkflow: K.EntityWorkflow){
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
  
  let a = new W.TaskFlowSelect(data, parentWorkflow.functionName + '_Key');
  a.name = parentWorkflow.name;;
  a = G.attachToParentSelection(
    a,
    parent,
    parentWorkflow.key
  ) as W.TaskFlowSelect;

  a.values = _buildSubMenus_GetKids(data,parentWorkflow)

  

  return a;
}

function queRegulatorySubmissions(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAppointAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAppointAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAppointCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAppointCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAppointEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAppointLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAppointPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRemoveAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRemoveAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRemoveCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRemoveCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRemoveEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRemoveLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRemovePublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queResignAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queResignAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queResignCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queResignCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queResignEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queResignLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queResignPublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRetireAuditFirmAndDesignatedPartner(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRetireAuditorsAuditCommitteeMembersOrCompanySecretaries(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRetireCompanySecretary_CoSec(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRetireCompanySecretaryRepresentatve(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRetireEntityFinancialOfficer_EFO(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRetireLegalEntityExecutive_LEE(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queRetirePublicOfficer(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queCreateNewEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queCreateOffTheShelf(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queReinstateEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queCloseByCourtOrderliquidtion(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queCloseInsolvent(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queCloseSolvent(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queSubmitAnnualReturns(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queSubmitCIPCComplianceChecklist(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queSubmitIXBRLOrFAS(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queChangeShareCapital(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queConvertShares(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queTransferShares(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
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
  console.log(config);

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
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
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
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAmalgamateOrMerge(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queAquireAnEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queSellOrTransferOfEntity(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queGenerateOganogram(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queGenerateReport1(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}
function queGenerateReport2(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  return G.getMessage(data,parent,parentWorkflow.name + `: test page for end of workflow. Press 'Save & Next' to reset` )
}

function queChangeAnyDetails(
  parentWorkflow: K.EntityWorkflow,
  parent: W.TaskFlow,
  data: DataService
) {
  console.log('in que', parentWorkflow, parent);

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

  let doneSet = G.getConfirm(data, recordDateSet, 'commitIs', 'Commit');

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

  let b = G.getUploadDocs(
    config.data,
    a,
    'uploadFileKeys',
    'Upload supporting files'
  );

  //'CoR 21.1' or any other
  let c = G.getFormForName(config.data, 'Required inputs');
  b.addNext(c);

  let d = G.getSubmitFiles(
    config.data,
    c,
    'submitFileKeys',
    'Submit following files to the regulator'
  );

  let e = G.getConfirm(
    config.data,
    d,
    'confirmSubmissionIs',
    'Confirmation of submission'
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
    'Confirm approval from the regulator'
  );
  let h = G.getUploadDocs(
    config.data,
    g,
    'uploadApprovalFileKeys',
    'Upload approval files from the regulator'
  );
  let i = G.getRecordDate(config.data, h, 'recordDate', 'Record date');
  let j = G.getConfirm(
    config.data,
    i,
    'taskCompleteIs',
    'Confirm completion of task'
  );
  return countryTask;
}
