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
  let kids = _GetSubMenus(parentEntity, data);
  let task: W.Task;
  let f = parentEntity.functionName;
  if (_BuildFromFunctionIs(kids)) {
    task = _buildSubMenus(parentEntity, parentTask, data);
    kids.forEach((value, key, map) => {
      if (value.activeIs) queKids(value as K.EntityWorkflow, task, data);
    });
  } else {
    task = _execFunction(data, parentTask, parentEntity, f);
  }
  return task;

  function _GetSubMenus(
    parentEntity: K.EntityWorkflow,
    data: DataService
  ): Entities<AnyEntity> {
    let db = data.getEntities(E.EnumEntityType.Workflow);
    return db.select('parentKey', parentEntity.key);
  }

  function _BuildFromFunctionIs(kids: Entities<AnyEntity>): boolean {
    return kids.size > 0;
  }

  function _execFunction(
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
    a.values = _GetKids(data, parentEntity);
    return a;

    function _GetKids(data: DataService, parentEntity: K.EntityWorkflow) {
      let d = data.getEntities(E.EnumEntityType.WorkflowForParent, {
        parentKey: parentEntity.key,
      });
      return d.select('activeIs', true);
    }
  }
}

interface queFunction {
  (
    parentEntity: K.EntityWorkflow,
    parentTask: W.Task,
    data: DataService
  ): W.Task;
}

function queChangeDirectParentPercentOwnership(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyNumber(parentEntity,parentTask,data,'parentHoldingWeight','Direct parent holding weight')}
function queChangeAbsaShareholdingInTheEntityPercent(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyNumber(parentEntity,parentTask,data,'clientHoldingWeight','Absa holding weight')}
function queChangePIScore(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyNumber(parentEntity,parentTask,data,'piScore','PI score')}
function _getChangeCompanyNumber(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(
    data,
    'companyKey',
    fieldName,
    fieldName,
    ''
  );
  taskList.add(G.getInputNumber(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue)
  return taskList.firstTask;
}


// function queChangeSelectionAbsaInterconnectedEntityName(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
//   {return _getChangeCompanySelection(parentEntity,parentTask,data,'clientInterconnectedEntityKey','Absa interconnected entity',E.EnumEntityType.Company)}
// function queChangeSelectionAbsaShareholdingInEntityShareholder(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService)
//   {return _getChangeCompanySelection(parentEntity,parentTask,data,'clientHoldingCompanyKey','Absa shareholding entity',E.EnumEntityType.Company)}
function queChangeSelectionDirectParentownershipMajorShareholder(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'parentCompanyKey','Direct parent/major shareholder',E.EnumEntityType.Company)}
function queChangeSelectionEntityStatusTiering(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'entityStatusTierKey','Entity status tier',E.EnumEntityType.EntityStatusTier)}
function queChangeSelectionBusinessDivision(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'businessDivisionKey','Business division',E.EnumEntityType.BusinessDivision)}
function queChangeSelectionAccountingClassification(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'accountingClassKey','Accounting classification',E.EnumEntityType.AccountingClass)}
function queChangeSelectionAccountingClassificationTiering(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'accountingClassTierKey','Accounting classification tier',E.EnumEntityType.AccountingClassTier)}  
function queChangeSelectionConsolidatednonconsolidated(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'consolidationKey','Consolidation status',E.EnumEntityType.Consolidation)}  
function queChangeSelectionEntityStatus(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'entityStatusKey','Entity status',E.EnumEntityType.EntityStatus)}  
function queChangeSelectionBusinessArea(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'businessAreaKey','Business area',E.EnumEntityType.BusinessArea)}  
function queChangeSelectionAppointedCompanySecretary(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'secretariatKey','Appointed secretariat',E.EnumEntityType.Secretariat)}
function queChangeSelectionCompanyType(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'companyTypeKey','Company type',E.EnumEntityType.CompanyType)}
function queChangeSelectionAbsaGroupSecretariatRepresentative(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'secretaryKey','Absa secretary representative',E.EnumEntityType.Secretary)}
function queChangeSelectionIndustry(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'industryKey','Industry',E.EnumEntityType.Industry)}
function queChangeSelectionLegalClassification(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'legalClassKey','Legal classification',E.EnumEntityType.LegalClass)}
function queChangeSelectionLegalEntityExecutive_LEE(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) 
  {return _getChangeCompanySelection(parentEntity,parentTask,data,'leeKey','Legal entity executive',E.EnumEntityType.Individual)}

function queChangeSelectionCountryOfIncorporation(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {
  //change country & suffix
  //return _getChangeCompanySelection(parentEntity,parentTask,data,'countryKey','Country of incorporation',E.EnumEntityType.Country)
  
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue_Country = new W.EntityValue(data,'companyKey','countryKey','countryKey','');
  let updateEntityValue_Suffix = new W.EntityValue(data,'companyKey','suffix','suffix','');
  taskList.add(G.getInputSelection(data, 'countryKey', 'Country of incorporation', updateEntityValue_Country,E.EnumEntityType.Country));
  taskList.add(G.getInputText(data, 'suffix', 'Suffix', updateEntityValue_Suffix));


  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue_Country)
  taskList.firstTask.targetsOfChange.push(updateEntityValue_Suffix)
  return taskList.firstTask;
}


function _getChangeCompanySelection(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string,
  sourceEnumEntityType: E.EnumEntityType
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(
    data,
    'companyKey',
    fieldName,
    fieldName,
    ''
  );
  taskList.add(G.getInputSelection(data, fieldName, heading, updateEntityValue,sourceEnumEntityType));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue)
  return taskList.firstTask;
}

function queChangeAnniversaryMonth(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyMonth(parentEntity,parentTask,data,'anniversaryMonthKey','Anniversary month')}
function queChangeFinancialYearMonth(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyMonth(parentEntity,parentTask,data,'fyeMonthKey','Financial year end')}

function _getChangeCompanyMonth(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(
    data,
    'companyKey',
    fieldName,
    fieldName,
    ''
  );
  taskList.add(G.getInputMonth(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue)
  return taskList.firstTask;
}

function queChangeStatusRepresentativeOffice(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyConfirm(parentEntity,parentTask,data,'representativeOfficeIs','Is a representative office')}
function queChangeStatusForeignBranch(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyConfirm(parentEntity,parentTask,data,'foreignBranchIs','Is foreign branch')}
function queChangeStatusCertificatesAreKept(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyConfirm(parentEntity,parentTask,data,'holdsCertificatesIs','Are certificates kept')}
function queChangeStatusInterconnectedWithinGroup(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyConfirm(parentEntity,parentTask,data,'connectedEntityIs','is internconnected in group')}
function queChangeStatusGroupCompany(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyConfirm(parentEntity,parentTask,data,'groupCompanyIs','Absa group')}

function _getChangeCompanyConfirm(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(
    data,
    'companyKey',
    fieldName,
    fieldName,
    ''
  );
  taskList.add(G.getInputConfirm(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue)
  return taskList.firstTask;
}

function queChangeIncorporationDate(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyDate(parentEntity,parentTask,data,'incorporationDate','Incorporation date')}
function queChangeBusinessStartDate(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyDate(parentEntity,parentTask,data,'businessStartDate','Business start date')}

function _getChangeCompanyDate(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(
    data,
    'companyKey',
    fieldName,
    fieldName,
    ''
  );
  taskList.add(G.getInputDate(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue)
  return taskList.firstTask;
}

function queChangeNatureOfBusinessForAnnualFinancialStatements(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyDesc(parentEntity,parentTask,data,'objectivePublishedDesc','Nature of business for annual financial statements')}
function queChangeNatureOfBusinessActivitiesForMOI(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyDesc(parentEntity,parentTask,data,'objectiveRegisteredDesc','Nature of business for MOI')}
function _getChangeCompanyDesc(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data,'companyKey',fieldName,fieldName,'');
  taskList.add(G.getInputDesc(data, fieldName, heading, updateEntityValue));
  _getFinaliseTask(data, taskList);
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queChangeCompanyName(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'name','Entity name')}
function queChangeInternalCode(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'internalCode','Internal code')}
function queChangeLECode(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'leCode','LE code')}
function queChangeRegistrationNumber(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'registrationCode','Registration number')}
function queChangeIncomeTaxNumber(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'incomeTax','Income tax number')}
function queChangeValueAddedTaxNumber(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'vatCode','Value Added Tax number')}
function queChangeShareCode(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'listedCode','Listed share code')}
function queChangeISINCode(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'isinCode','ISIN code')}
function queChangeLEINumber_Bloomberg(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'leiCode','LEI number (Bloomberg)')}
function queChangeReutersCode(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'reutersCode','Reuters code')}
function queChangeSuffix(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService) {return _getChangeCompanyText(parentEntity,parentTask,data,'suffix','Suffix')}

function _getChangeCompanyText(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(
    data,
    'companyKey',
    fieldName,
    fieldName,
    ''
  );
  taskList.add(G.getInputText(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queAppointmentDirector(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);

  _getCompany(data, taskList);

  taskList.add(G.getDirectorType(data));

  taskList.add(
    G.getConfirm(data, 'internalEmployeeIs', 'Internal employee', true, false)
  );

  taskList.add(G.getAppointmentAction(data));

  taskList.add(G.getIndividualEmployeeStatus(data));

  let secreatryDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  secreatryDownFileList
    .add(new K.EntityFileDownload('Sec 1'))
    .add(new K.EntityFileDownload('Sec 2'));
  taskList.add(
    G.getDownloadFiles(
      data,
      secreatryDownFileList,
      'secreatryDownFileList',
      'Documents for the Company Secretary to fill'
    )
  );

  let secreatryUpFileList = new Entities<K.EntityFileUpload>(K.EntityFileUpload)
    .add(new K.EntityFileUpload('Signed consent form from the director'))
    .add(new K.EntityFileUpload('Filled director procedural guidelines'))
    .add(new K.EntityFileUpload(`Person's ID`))
    .add(new K.EntityFileUpload(`Person's CV`));
  taskList.add(
    G.getUploadFiles(
      data,
      secreatryUpFileList,
      'secreatryUpFileList',
      `Company secreatry filed files`
    )
  );

  let individualDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  individualDownFileList
    .add(new K.EntityFileDownload('Consent form for the director to sign'))
    .add(new K.EntityFileDownload('Director procedural guideline pack'));
  taskList.add(
    G.getDownloadFiles(
      data,
      individualDownFileList,
      'individualDownFiles',
      'Documents for the individual to fill'
    )
  );

  let individualUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  )
    .add(new K.EntityFileUpload('Signed consent form from the director'))
    .add(new K.EntityFileUpload('Filled director procedural guidelines'))
    .add(new K.EntityFileUpload(`Person's ID`))
    .add(new K.EntityFileUpload(`Person's CV`));
  taskList.add(
    G.getUploadFiles(
      data,
      individualUpFileList,
      'individualFiles',
      `Individual's files`
    )
  );

  _getAuthorisation(data, taskList);
  _getApproval(
    data,
    taskList,
    'approvalLegalDepartmentIs',
    'Legal department approval'
  );

  let excoPackDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  excoPackDownFileList
    .add(new K.EntityFileDownload('Exco endorsement cover sheet for Exco'))
    .add(new K.EntityFileDownload('Exco supporting doc'));
  taskList.add(
    G.getDownloadFiles(
      data,
      excoPackDownFileList,
      'excoPackFiles',
      'Exco endorsement files'
    )
  );

  taskList.add(
    G.getConfirm(data, 'excoEndorsementApproveIs', 'Exco endorsed', true, true)
  );

  let excoEndorsementUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  ).add(new K.EntityFileUpload('Confirmation email file'));
  taskList.add(
    G.getUploadFiles(
      data,
      excoEndorsementUpFileList,
      'excoEndorsementUpFileList',
      `Exco proof of endorsement`
    )
  );

  let boardDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  boardDownFileList.add(new K.EntityFileDownload('Board approval'));
  taskList.add(
    G.getDownloadFiles(
      data,
      boardDownFileList,
      'boardDownFileList',
      'Board approval files'
    )
  );

  let boardUpFileList = new Entities<K.EntityFileUpload>(K.EntityFileUpload);
  boardUpFileList.add(new K.EntityFileUpload('Signed board resolution'));
  taskList.add(
    G.getUploadFiles(
      data,
      boardUpFileList,
      'boardUpFileList',
      'Approved board approval files'
    )
  );

  let regulatorDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  regulatorDownFileList
    .add(new K.EntityFileDownload('CoR39'))
    .add(new K.EntityFileDownload('Signed board resolution'))
    .add(new K.EntityFileDownload('Signed director consent form'))
    .add(new K.EntityFileDownload('Uploaded copy of director ID'));
  taskList.add(
    G.getDownloadFiles(
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
      'Regulator code for submission',
      new W.EntityValue(data, '', '', '', '')
    )
  );
  taskList.add(
    G.getInputDate(
      data,
      'regulatorSubmissionDate',
      'Date of submission to the regulator',
      new W.EntityValue(data,'','','',new Date())
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
  _getApproval(data, taskList, 'approvalRegulatortIs', 'Regulator approval');

  let regulatorUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  );
  regulatorUpFileList.add(
    new K.EntityFileUpload('Approval CoR39 from the regulator')
  );
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

function _getCompany(data: DataService, taskList: G.TaskList) {
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));
}

function _getApproval(
  data: DataService,
  taskList: G.TaskList,
  fieldName: string,
  heading: string
) {
  taskList.add(G.getConfirm(data, fieldName, heading, false, true));
}

function _getFinaliseTask(data: DataService, taskList: G.TaskList) {
  //TODO: put back after auditing is done: 
  //taskList.add(G.getRecordDate(data, 'recordDate', 'Record date'));
  taskList.add(G.getConfirm(data, 'commitIs', 'Commit record', false, true));
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
  _getFinaliseTask(data, taskList);

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
  a.entityFieldKeyName = 'companyKey'; //the form will retrieve the relevant object, if it needs to show any of it's fields
  a.name = 'The amendment';
  a.addInput(
    fieldName,
    data.getFieldTypeForFieldName(fieldName),
    heading,
    '',
    new W.EntityValue(data, 'companyKey', 'companyKey', fieldName, '')
  );

  taskList.add(a);
  //t.addNext(a)

  let upFiles = new Entities<K.EntityFileUpload>(K.EntityFileUpload);
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

  let submitFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  ).add(new K.EntityFileDownload('CoR39'));

  taskList.add(
    G.getDownloadFiles(
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

  let uploadApprovalFiles = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  );
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
