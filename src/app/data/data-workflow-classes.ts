import * as E from './data-entity-types';
import { DataService } from './data.service';
import { Entity } from './data-entity-parent';
import { Entities, AnyEntity } from './data-entities';
import {
  EntityAddress,
  EntityFileDownload,
  EntityFileUpload,
  EntityTaskWalker,
} from './data-entity-kids';
import { ThrowStmt } from '@angular/compiler';
import { throwError } from 'rxjs';
import { objectHasAttribute, parseJson } from './utils-scripts';
// import * as D from './data.service'

export class Task_SubTaskCondition {
  constructor(
    public fieldName: string,
    public value: any,
    public operator: string,
    public type: string //'number', or string, or Date, or...
  ) {}

  matchCondition(data: object): boolean {
    let r = false;
    let v = data[this.fieldName];
    if (v === 0 || v) {
      let mO = ['>', '<', '==', '!='];
      let mS = ['in', 'notin'];
      if (mO.indexOf(this.operator) > -1) {
        let f = v + this.operator + this.value;
        return eval(f);
      } else if (mS.indexOf(this.operator)) {
        if (this.operator == 'in') {
          return this.value.indexOf(v) > -1;
        } else if (this.operator == 'notin') {
          return this.value.indexOf(v) == -1;
        }
      }
      return r;
    }
  }
}

export class Task_SubTask {
  // '' means no operator; can be: ==, >, <, maybe(in, not in)
  constructor(
    public taskFlow: Task,
    public conditions: Task_SubTaskCondition[] = []
  ) {}

  matchCondition(data: object): boolean {
    let r = true;
    for (let i = 0; i < this.conditions.length; i++) {
      const e = this.conditions[i];
      r = r && e.matchCondition(data);
      if (!r) break;
    }
    return r;
  }
}

export class Task {
  type = 'task-flow'; // to differenciate task types, and JSON names
  private _name = 'task name';
  get name(): string {
    return this._name;
  }
  set name(v: string) {
    this._name = v;
  }
  targetsOfChange: EntityValue[] = [];
  description = '';
  protected _value: any;
  set value(v: any) {
    this._value = v;
  }
  get value() {
    return this._value;
  }

  startDate = new Date();
  doneDate = new Date();
  whoCreated = '';
  isDone = false;
  isCurrent = false;
  isEnd = false;
  notes = '';
  parent: Task = null;
  needToVerify = true;

  subTasks: Task_SubTask[] = [];
  hasFork = false;
  errorMessage = '';
  entityFieldKeyName = ''; //to set the fieldNameKey to get entity to be worked on in the step
  entity: AnyEntity;
  protected _actionName = '';
  //amendmentSourceFieldName = '';
  protected _actionEntityName = '';
  protected _actionObjectName = '';
  private _workflowValuesObject = {};
  protected initialValue: any;
  get workflowValuesObject(): object {
    return this._workflowValuesObject;
  }
  set workflowValuesObject(o: object) {
    this._workflowValuesObject = o;
  }

  get actionEntityName(): string {
    return this._actionEntityName;
  }
  set actionEntityName(v: string) {
    this._actionEntityName = v;
  }
  get actionObjectName(): string {
    return this._actionObjectName;
  }
  set actionObjectName(v: string) {
    this._actionObjectName = v;
  }
  get actionName(): string {
    return this._actionName;
  }
  set actionName(v: string) {
    this._actionName = v;
  }
  get actionRecordDateStr() {
    return this._actionRecordDateStr;
  }
  _actionRecordDateStr = '';
  set actionRecordDateStr(v: string) {
    this._actionRecordDateStr = v;
  }
  constructor(protected data: DataService, public fieldName) {}
  init(): boolean {
    this.isDone = false;
    this.errorMessage = '';

    if (this.targetsOfChange.length > 0)
      this.value = this.targetsOfChange[0].getValue(this.workflowValuesObject);
    this.initialValue = this.value;
    return true;
  } // to be implemented by child classes, if they need to initialise data
  /*
      subTasks are there to provide the next task
    */
  private _showIf_fieldName = '';
  private _showIf_value: any = true;
  setSkipIf(fieldName: string, showIfValue: any) {
    this._showIf_fieldName = fieldName;
    this._showIf_value = showIfValue;
  }

  getDoNotSkip(): boolean {
    //sourceValuesObject: object
    if (this._showIf_fieldName) {
      return (
        this.workflowValuesObject[this._showIf_fieldName] == this._showIf_value
      );
    }
    return true;
  }
  canMoveOn(): boolean {
    // to be implemented by child classes, if they need to initialise data
    return false;
  }

  hasAnswer(): boolean {
    if (
      Object.keys(this.workflowValuesObject).indexOf(this.fieldName) > -1
    ) {
      this.value = this.workflowValuesObject[this.fieldName];
      this.isDone = true;
      return true;
    }
    return false;
  }

  verify(): boolean {
    // to be implemented by child classes, if they need to initialise data
    return true;
  }
  addNext(taskFlow: Task) {
    taskFlow.parent = this;
    // this.targetOfChange = taskFlow.targetOfChange
    let s = new Task_SubTaskCondition('', 0, '', '');
    let t = new Task_SubTask(taskFlow, [s]);
    this.subTasks.push(t);
  }

  addNextFork(subTask: Task_SubTask) {
    subTask.taskFlow.parent = this;
    // this.targetOfChange = subTask.taskFlow.targetOfChange
    this.hasFork = true;
    this.subTasks.push(subTask);
  }
}

export class TaskSelect extends Task {
  type = 'select';
  sourceType: E.EnumEntityType;
  _value = 0;
  //value: any = 0; //the key of the selected item
  customEntities: Entities<Entity> = null;
  values: Entities<AnyEntity>;
  thisEntityNameIsSubjectName = false;
  thisEntityNameIsAction = false;
  thisEntityNameIsObjectName = false;

  canMoveOn(): boolean {
    if (this.values.size == 1) {
      // this.value = this.values.firstKey
      // this.isDone = true
      return true;
    }
    return false;
  }
  get actionEntityName(): string {
    if (this.thisEntityNameIsSubjectName) return this.entityName;
    return '';
  }
  set actionEntityName(v: string) {
    super.actionEntityName = v;
  }

  get actionObjectName(): string {
    if (this.thisEntityNameIsObjectName) return this.entityName;
    return '';
  }
  set actionObjectName(v: string) {
    super.actionObjectName = v;
  }

  get actionName(): string {
    if (this.thisEntityNameIsAction) return this.entityName;
    return '';
  }
  set actionName(v: string) {
    super.actionName = v;
  }

  get entityName() {
    if (this.entity) {
      // if (this.values.has(this.value)) {
      return this.entity.name;
      // }
    }
  }
  protected _init_needs_update(): boolean {
    //return !this.values || this.sourceType != null;
    return this.sourceType != null;
  }
  protected _init_verify_if_empty() {
    if (this.values) {
      if (this.values.size > 0) return true;
      else {
        this.errorMessage =
          'List is empty, please go back to choose another path';
        return false;
      }
    }
  }
  init(): boolean {
    super.init();

    if (this._init_needs_update()) {
      this.values = this.data.getEntities(
        this.sourceType,
        this.workflowValuesObject
      );
    }
    if (this._init_verify_if_empty()) this.value = this.values.firstKey;
    return true;
  }

  verify(): boolean {
    if (this.needToVerify) return true
      if (this.value > -1)
        if (this.values)
          if (this.values.size > 0)
            if (this.values.has(this.value)) {
              this.entity = this.values.get(this.value);
              return true;
            }
    return false;
  }
}

// export class TaskSelectMulti extends TaskSelect {
//   type = 'select-multi';
//   selectedSourceType: E.EnumEntityType;
//   _value: number[] = []; //the key of the selected items
//   values: Entities<AnyEntity>;
//   minSelectedItems = 0;

//   canMoveOn(): boolean {
//     return false; //for now
//   }

//   init(): boolean {
//     super.init();
//     if (this._init_needs_update()) {
//       this.values = this.data.getEntities(
//         this.sourceType,
//         this.workflowValuesObject
//       );
//       this.value = []; ////get selected values from db source
//     }
//     return true;
//   }

//   verify(): boolean {
//     return true; //for now
//   }
// }

export class TaskConfirm extends Task {
  type = 'confirm';
  _value = false;
  ensure = true; //value must be true to move on

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
    if (this.needToVerify)
      if (this.ensure && !this.value) {
        this.errorMessage = this.name + ' is required';
        return false;
      } else {
        this.errorMessage = '';
        return true;
      }
    else return true;
  }
}

export class TaskText extends Task {
  type = 'text';
  _value: '';
  required = false;
  mustChange = false;
  minLen = 3; //value must be true to move on
  maxLen = 100;
  //defaultValue = false;

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
    if (this.needToVerify)
      if (this.required && !this.value) {
        this.errorMessage = this.name + ' is required';
        return false;
      } else if (this.value.length < this.minLen) {
        this.errorMessage = this.name + ' is too short';
        return false;
      } else if (this.value.length > this.maxLen) {
        this.errorMessage = this.name + ' is too long';
        return false;
      } else if (this.mustChange && this.value === this.initialValue) {
        this.errorMessage = this.name + ' did not change';
        return false;
      } else {
        this.errorMessage = '';
        return true;
      }
    else return true;
  }
}

export class TaskAddress extends Task {
  type = 'address';
  _value: EntityAddress;
  ensure = true;
  defaultValue = false;

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
    if (this.needToVerify)
      if (this.ensure) {
        if (this.value.countryKey < 0) {
          this.errorMessage = 'Country is required';
          return false;
        }
        if (this.value.cityKey < 0) {
          this.errorMessage = 'City is required';
          return false;
        }
        if (this.value.text.trim().length == 0) {
          this.errorMessage = 'Text is required';
          return false;
        }
      }
    return true;
  }
}

export class TaskNumber extends Task {
  type = 'number';
  _value: string = '';
  ensure = true;
  minValue = 0;
  maxValue = 1000000000;
  defaultValue = false;

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
    if (this.needToVerify)
      if (this.ensure && this.value.length == 0) {
        this.errorMessage = this.name + ' is required';
        return false;
      } else if (!Number(this.value)) {
        if (this.value == '0') {
          if (+this.value == 0) this.value = '0';
          return true;
        } else {
          this.errorMessage = this.name + ' is not a number';
          return false;
        }
      } else if (+this.value < this.minValue) {
        this.errorMessage = this.name + ' is too low';
        return false;
      } else if (+this.value > this.maxValue) {
        this.errorMessage = this.name + ' is too high';
        return false;
      } else {
        this.errorMessage = '';
        this.value = +this.value + '';
        return true;
      }
    return true;
  }
}

export class TaskDesc extends TaskText {
  type = 'desc';
  minLen = 3;
  maxLen = 1000;
}

export class TaskDate extends Task {
  type = 'date';
  ensure = true; //value must be true to move on
  thisValueIsRecordDate = false;
  verify(): boolean {
    if (this.needToVerify)
      if (this.ensure && this.value) {
        this.errorMessage = '';
        return true;
      } else {
        this.errorMessage = this.name + ' is required';
        return false;
      }
    return true;
  }
  get actionRecordDateStr(): string {
    if (this.thisValueIsRecordDate) {
      return (this.value as Date).toISOString().slice(0, 10);
    }
    return '';
  }

  get value(): Date {
    return this._value;
  }
  set value(v: Date) {
    if (typeof v == 'string') this._value = new Date(v);
    else this._value = v;
  }
}

export class TaskUpload extends Task {
  type = 'upload-docs';
  files = new Entities<EntityFileUpload>(EntityFileUpload); // file name
  init(): boolean {
    // this.files.forEach((value,key,map)=>{
    //   value.dataObject = this.workflowValuesObject
    // })
    return true;
  }
}

export class TaskDownload extends Task {
  type = 'submit-docs';
  //whoTo: string; //submit to whom
  files = new Entities<EntityFileDownload>(EntityFileDownload); // file name
  init(): boolean {
    this.files.forEach((value, key, map) => {
      value.dataObject = this.data.expandValues(this.workflowValuesObject);
    });
    return true;
  }
}

export class TaskReminder extends Task {
  type = 'set-reminder';
  _reminderDate = new Date();
  _offsetDays = 0;
  _refferenceFieldName = '';

  set referenceFieldName(v: string) {
    this._refferenceFieldName = v;
  }

  get referenceFieldName() {
    return this._refferenceFieldName;
  }

  get referenceCode() {
    return this.workflowValuesObject[this._refferenceFieldName];
  }

  set offsetDays(v: number) {
    this._offsetDays = v;
    this.addDays();
  }

  get reminderDate() {
    return this._reminderDate;
  }

  public addDays() {
    let date = new Date(new Date().valueOf());
    date.setDate(date.getDate() + this._offsetDays);
    this._reminderDate = date;
  }
}

export class TaskForm_Input {
  type = 'text';
  title = 'Input';
  fieldName = 'fieldName';
  description = '';
  value: EntityValue;
}

enum EnumEntityPersistType {
  UPDATE,
  DELETE,
  INSERT,
}

export class EntityValue {
  actionType: EnumEntityPersistType;
  actionAtFinish = true;
  overWrite_fieldName = '';
  overWrite_value: any;
  constructor(public data: DataService) {}

  private notifySpecs: [string, string][] = [];
  addNotify(entityKeyFieldName: string, fieldName: string): EntityValue {
    let note: [string, string] = [entityKeyFieldName, fieldName];
    this.notifySpecs.push(note);
    return this;
  }
  private notify(sourceValuesObject: object) {
    this.notifySpecs.forEach((note) => {
      let notifyEntity = this._getEntity(note[0], sourceValuesObject);
      notifyEntity.notify(notifyEntity, note[1]);
    });
  }

  private _v_entityKeyFieldName: string;
  private _v_getValueFieldName: string;
  private _v_defaultValue: any;
  initValue(
    entityKeyFieldName: string,
    getValueFieldName: string,
    defaultValue: any
  ): EntityValue {
    this._v_entityKeyFieldName = entityKeyFieldName;
    this._v_getValueFieldName = getValueFieldName;
    this._v_defaultValue = defaultValue;
    return this;
  }

  getValue(sourceValuesObject: object) {
    if (this._v_entityKeyFieldName) {
      let entity = this._getEntity(
        this._v_entityKeyFieldName,
        sourceValuesObject
      );
      let v = this.data.getEntityFieldTextOrEntity(
        entity,
        this._v_getValueFieldName
      );

      return v;
    } else {
      return this._v_defaultValue;
    }
  }

  private _log(...args: any[]) {
    console.log('Error: EntityValue.save');
    console.log(...args);
  }

  persist(sourceValuesObject: object): object {
    let o = {};
    switch (this.actionType) {
      case EnumEntityPersistType.UPDATE:
        o = this._update(sourceValuesObject);
        break;
      case EnumEntityPersistType.INSERT:
        o = this._insert(sourceValuesObject);
        sourceValuesObject = _transferInfo(sourceValuesObject, o);
        break;
      case EnumEntityPersistType.DELETE:
        this._delete(sourceValuesObject);
        break;
    }
    return sourceValuesObject;

    function _transferInfo(target: object, source: object): object {
      target[source['fieldName']] = source['key'];
      return target;
    }
  }

  private _u_entityKeyFieldName: string;
  private _u_entityFieldName: string;
  private _u_sourceValuesObject_FieldName: string;

  initUpdate(
    entityKeyFieldName: string,
    entityFieldName: string,
    sourceValuesObject_FieldName: string
  ): EntityValue {
    this._u_entityKeyFieldName = entityKeyFieldName;
    this._u_sourceValuesObject_FieldName = sourceValuesObject_FieldName;
    this._u_entityFieldName = entityFieldName;
    this.actionType = EnumEntityPersistType.UPDATE;
    return this;
  }

  private _update(sourceValuesObject: object) {
    let o = {};
    if (_hasToBeSaved(this)) {
      if (this._u_sourceValuesObject_FieldName) {
        let entity = this._getEntity(
          this._u_entityKeyFieldName,
          sourceValuesObject
        );
        entity.setValue(
          this._u_entityFieldName,
          sourceValuesObject[this._u_sourceValuesObject_FieldName]
        );
        this.notify(sourceValuesObject);
        o = {
          fieldName: this._u_entityFieldName,
          key: sourceValuesObject[this._u_sourceValuesObject_FieldName],
        };
      } else {
        this._log('sourceValuesObject_FieldName was not provided', {
          sourceValuesObject_FieldName: this._u_sourceValuesObject_FieldName,
          sourceValuesObject,
        });
      }
      return o;
    }

    function _hasToBeSaved(that: EntityValue) {
      return (
        that._u_entityKeyFieldName.length > 0 &&
        that._u_entityFieldName.length > 0
      );
    }
  }

  private _i_insertFieldNames: string[] = [];
  private _i_sourceValuesObject_FieldNames: string[] = [];
  private _i_targetStoreEnum: E.EnumEntityType;
  private _i_fieldName_forNewKey: string = '';
  initInsert(
    targetStore: E.EnumEntityType,
    entityFieldNames: string[],
    sourceValuesObject_FieldNames: string[],
    fieldName_forNewKey: string
  ): EntityValue {
    this._i_insertFieldNames = entityFieldNames;
    this._i_sourceValuesObject_FieldNames = sourceValuesObject_FieldNames;
    this._i_targetStoreEnum = targetStore;
    this._i_fieldName_forNewKey = fieldName_forNewKey;
    this.actionType = EnumEntityPersistType.INSERT;
    return this;
  }
  private _insert(sourceValuesObject: object): object {
    //fields, sourceValuesObject_Fields, target store
    let d = this.data.getEntities(this._i_targetStoreEnum);
    let entity = d.createEntity();

    this._i_insertFieldNames.forEach((value, index) => {
      entity[value] =
        sourceValuesObject[this._i_sourceValuesObject_FieldNames[index]];
    });
    entity.key = d.lastKey + 1;
    d.add(entity);
    this.notify(sourceValuesObject);
    let o = { fieldName: this._i_fieldName_forNewKey, key: entity.key };
    this.overWrite_fieldName = this._i_fieldName_forNewKey;
    this.overWrite_value = entity.key;
    return o;
  }

  initDelete(sourceValuesObject: object) {
    this.actionType = EnumEntityPersistType.DELETE;
  }
  private _delete(sourceValuesObject: object) {
    throwError('Implement EntityValue._delete()');
  }

  private _getEntity(entityKeyFieldName: string, workflowValuesObject: object) {
    let entityKey = workflowValuesObject[entityKeyFieldName];
    let elements = this.data.getEntitiesByKeyField(entityKeyFieldName);
    let entity = elements.get(entityKey);
    if (entity) return entity;
    //this._log('entity not found', this.entityFieldName);
    //TODO: create entity with all fields from the workflowValuesObject, less menu_Keys
    return null;
  }
}

export class TaskForm extends Task {
  type = 'form';
  inputs: TaskForm_Input[] = [];
  inputObject: AnyEntity;

  addInput(
    fieldName: string,
    type: string,
    title: string,
    description: string,
    value: EntityValue
  ): TaskForm {
    let inp = new TaskForm_Input();
    inp.fieldName = fieldName;
    inp.type = type;
    inp.title = title;
    inp.description = description;
    inp.value = value;
    this.inputs.push(inp);
    return this;
  }

  init(): boolean {
    super.init();
    if (this.inputObject) {
      if (this.inputs.length == 0) {
        _init_formInputs();
      }
    }
    return true;

    function _init_formInputs() {
      let fields = this.inputObject.headingsMap;
      fields.forEach((value, key, map) => {
        this.addInput(
          key as string,
          this.data.getFieldTypeForFieldName(key as string),
          value as string,
          '',
          null
        );
      });
    }
  }
}

export class TaskMessage extends Task {
  type = 'message';
}

enum EnumTaskStatus {
  Paused,
  Finilised,
  Cancelled,
  Authorised,
  AwaitingAuthorisation,
}

// export class TaskError extends Task {
//   type = 'error';
//   text = '';
// }

// tasks[]: maintains the current state of the workflow/path, with each node = Task.
// getNext, getPrev: Follows the path with
// rootTask: first Task. Build tree by using Task object add..., then assign to rootTask;
export class TaskWalker extends Task {
  type = 'workflow';
  isFinilised = false
  private rootTask: Task = null;
  private currentTask: Task = null;
  //private lastAddedTask: Task = null;
  private _currentTaskIndex = -1;
  public tasks: Task[] = [];
  public que: Task[] = []; // que of tasks to come back to when isEnd taskFlow is true
  public historyOfNames: string[] = [];

  get name(): string {
    let s = 'Workflow';
    if (this.startDate) s = this.startDate.toISOString().slice(0, 10);
    if (this.actionName) s = s + ': ' + this.actionName;
    else s = s + ': Task';
    if (this.actionEntityName) s = s + " for '" + this.actionEntityName + "'";
    if (this.actionObjectName) s = s + " of '" + this.actionObjectName + "'";
    if (this.actionRecordDateStr) s = s + ' on ' + this.actionRecordDateStr;
    return s;
  }

  addNext(taskFlow: Task) {
    this.rootTask = taskFlow;
  }

  init(preserveWorkFlowObject: boolean = false): boolean {
    this.entity = null;
    if (!preserveWorkFlowObject) {
      this.actionEntityName = '';
      this.actionName = '';
      this.actionObjectName = '';
      this.workflowValuesObject = {};
    }
    return true;
  }
  public start(preserveWorkFlowObject: boolean = false): boolean {
    this.init(preserveWorkFlowObject);
    this.tasks = [this.rootTask];
    this.currentTask = this.rootTask;
    this.currentTask.isCurrent = true;
    if (this.currentTask) this._currentTaskIndex = 0;
    this.tasks.forEach((t) => {
      t.init();
    });
    this._buildNext(this.rootTask);
    this.currentTask.workflowValuesObject = this.workflowValuesObject;
    if (this.currentTask.canMoveOn() || this.currentTask.hasAnswer()){
      this.moveToNext();
    }
    return true;
  }
  public load(object: object | string) {
    let o = {};
    if (typeof object == 'string') o = parseJson(object);
    else o = object;
    this.workflowValuesObject = o;
    
    let keys = Object.keys(o);
    keys.forEach((fieldName, index) => {
      let a = o[fieldName];
      this.workflowValuesObject[fieldName] = a;
      if (objectHasAttribute(this, fieldName)) {
        this[fieldName] = a;
      }
      if (objectHasAttribute(this, '_' + fieldName)) {
        this['_' + fieldName] = a;
      }
    });
    this.start(true);
  }
  // public loopFromQue() {
  //   //todo: test
  //   let q = this.que.pop();
  //   this.tasks.push(q);
  //   this.currentTask = q;
  //   this.currentTask.isCurrent = true;
  //   this._currentTaskIndex++;
  //   return this._buildNext(this.currentTask);
  // }

  private _buildNext(fromTask: Task): boolean {
    let r = true;
    if (this._currentTaskIndex == this.tasks.length - 1) {
      r = fromTask?.isDone ? this._ifTaskIsDone(fromTask, this) : false;
      // if (fromTask) {
      //   if (fromTask.isDone) {
      //     this._ifTaskIsDone(fromTask,this)
      //   }
      //   return true;
      // }
      // return false;
    }
    return r;
  }

  private _canBeBuiltOn(task: Task): boolean {
    return task.isDone && task.subTasks.length > 0;
  }

  addPaused() {
    this._saveThisToDataSource(EnumTaskStatus.Paused);
  }

  private _saveThisToDataSource(taskStatusKey: EnumTaskStatus) {
    let t = new EntityTaskWalker(this.name, this.data);
    let s = (t.value = JSON.parse(JSON.stringify(this.workflowValuesObject)));
    let d = this.data.getEntities(E.EnumEntityType.TaskWalker);
    t.taskStatusKey = taskStatusKey;
    if (objectHasAttribute(this.workflowValuesObject, 'key'))
      d.set(this.workflowValuesObject['key'], t);
    else d.add(t);
  }

  _addTaskWalkerDB_Finalised() {
    this._saveThisToDataSource(EnumTaskStatus.Finilised);
  }

  private _ifTaskIsDone(fromTask: Task, that: TaskWalker): boolean {
    collectValuesIntoThisWalkerFromTask(fromTask, that);
    if (that._canBeBuiltOn(fromTask)) {
      that._addChildTask(fromTask, that);
    } else {
      that._saveToTargetObjectAtFinish();
      this._addTaskWalkerDB_Finalised();
      that.start();
    }
    return true;

    function collectValuesIntoThisWalkerFromTask(
      fromTask: Task,
      that: TaskWalker
    ) {
      that.actionName = _returnNewIfNotEmpty(
        that.actionName,
        fromTask.actionName
      );
      that.actionObjectName = _returnNewIfNotEmpty(
        that.actionObjectName,
        fromTask.actionObjectName
      );
      that.actionEntityName = _returnNewIfNotEmpty(
        that.actionEntityName,
        fromTask.actionEntityName
      );
      that.actionRecordDateStr = _returnNewIfNotEmpty(
        that.actionRecordDateStr,
        fromTask.actionRecordDateStr
      );
      fromTask.workflowValuesObject = that._collectValues();

      function _returnNewIfNotEmpty(oldText: string, text: string): string {
        if (oldText){
          return oldText
        } else
          if (text)
            return text
          else
            return oldText
      }
    }
  }

  private _addChildTask(fromTask: Task, that: TaskWalker) {
    if (!fromTask.hasFork) {
      that._addSubtask(that, fromTask, 0);
    } else {
      let notAdded = true;
      for (let i = 0; i < fromTask.subTasks.length; i++) {
        notAdded = that._findAndBuildNextChildTask(fromTask, that, i);
        if (!notAdded) break;
      }
      that._checkIfConditionalBuildHasAdded(fromTask, notAdded);
    }
  }
  private _findAndBuildNextChildTask(
    fromTask: Task,
    that: TaskWalker,
    subTaskIndex: number
  ): boolean {
    if (
      fromTask.subTasks[subTaskIndex].matchCondition(
        fromTask.workflowValuesObject
      )
    ) {
      let t = that._addSubtask(that, fromTask, subTaskIndex);
      that._buildNext(t);
      return false;
    }
    return true;
  }
  private _checkIfConditionalBuildHasAdded(parent: Task, notAdded: boolean) {
    if (notAdded)
      parent.errorMessage =
        'No further steps are available for this option, please select another one';
    else parent.errorMessage = '';
  }
  private _addSubtask(
    that: TaskWalker,
    fromTask: Task,
    subTaskIndex: number
  ): Task {
    let t = fromTask.subTasks[subTaskIndex].taskFlow;
    t.workflowValuesObject = that._collectValues();
    t.init();
    that.tasks.push(t);
    return t;
  }

  private _collectValues(): object {
    let o = this.workflowValuesObject;
    //o['currentTaskIndex'] = this.currentTaskIndex;
    let keys = [
      'currentTaskIndex',
      'startDate',
      'actionName',
      'actionEntityName',
      'actionObjectName',
      'actionRecordDateStr',
    ];
    keys.forEach((fieldName) => {
      o[fieldName] = this[fieldName];
    });
    this.tasks.forEach((e) => {
      let doNotSkip = e.getDoNotSkip();
      if (doNotSkip) {
        o[e.fieldName] = e.value;
      }
    });
    return o;
  }

  private _moreTasksToDo() {
    return this._currentTaskIndex < this.tasks.length - 1;
  }
  private _moveToNextTask() {
    this._currentTaskIndex++;
    this.currentTask.isCurrent = false;
    this.currentTask = this.tasks[this._currentTaskIndex];
    this.currentTask.isCurrent = true;
  }

  private _collectTargetOfChange(): EntityValue[] {
    let r: EntityValue[] = [];
    this.tasks.forEach((e) => {
      e.targetsOfChange.forEach((target) => {
        if (e.getDoNotSkip()) r.push(target);
      });
    });
    return r;
  }

  private _saveToTargetObjectAtFinish() {
    this._collectStateFromTasks();
    _saveCollectedValuesToEachTarget(this);
    this._addHistory();
    this.notify('saved');

    function _saveCollectedValuesToEachTarget(that: TaskWalker) {
      that.targetsOfChange.forEach((target) => {
        if (target.actionAtFinish)
          that.workflowValuesObject = target.persist(that.workflowValuesObject);
      });
    }
  }

  private _collectStateFromTasks() {
    this.workflowValuesObject = this._collectValues();
    this.targetsOfChange = this._collectTargetOfChange();
  }

  private _addHistory() {
    this.historyOfNames.push(this.name);
    this.historyOfNames.reverse();
  }

  listeners: any[] = [];
  addListener(e: any) {
    if (this.listeners.indexOf(e) < 0) this.listeners.push(e);
  }

  notifyIs = false;
  notify(...args) {
    if (this.notifyIs) {
      _notifyEachListener(this);
    }

    function _notifyEachListener(that: TaskWalker) {
      that.listeners.forEach((e) => {
        e.notify(args[0], that);
      });
    }
  }

  private _moveToNext_DoCurrentTaskAfterBuild() {
    this.entity = this.currentTask.entity;
    if (this._moreTasksToDo()) {
      this._moveToNextTask();
    }
  }

  private _moveToNext_DoVerified(): Task {
    this.currentTask.isDone = true;
    this.workflowValuesObject = this._collectValues();
    _saveRealTimeTargetsOfChange(this.currentTask, this.workflowValuesObject);
    if (this._buildNext(this.currentTask)) {
      this._moveToNext_DoCurrentTaskAfterBuild();
    }
    return this.currentTask;

    function _saveRealTimeTargetsOfChange(
      task: Task,
      sourceValuesObject: object
    ) {
      task.targetsOfChange.forEach((target) => {
        if (!target.actionAtFinish && task.getDoNotSkip()) {
          sourceValuesObject = target.persist(sourceValuesObject);
          if (target.overWrite_fieldName)
            task.fieldName = target.overWrite_fieldName;
          if (target.overWrite_value) task.value = target.overWrite_value;
        }
      });
    }
  }

  public moveToNext(): Task {
    let showTask = true;
    do {
      this._moveToNext();
      showTask = this.currentTask.getDoNotSkip();
    } while (
      _canGoToNextTask(this,showTask) && this.currentTask.fieldName != 'finaliseIs' 
    )
    if (this.currentTask.hasAnswer() && this.currentTask.fieldName=='finaliseIs'){
      this.isFinilised = true
      this.moveToPrev()
      this.currentTask.isDone = true
    }
    return this.currentTask;

    function _canGoToNextTask(that: TaskWalker,showTask: boolean): boolean{
      let b = that.currentTask.canMoveOn() ||
      !showTask ||
      that.currentTask.hasAnswer()
      return b
    }
  }

  private _moveToNext(): Task {
    this.currentTask.errorMessage = '';
    this.currentTask.needToVerify = this.needToVerify

    if (this.currentTask.verify() || !this.currentTask.getDoNotSkip()) {
      return this._moveToNext_DoVerified();
    }
    return null;
  }

  private _deleteSubsequentTasks() {
    let v = this.tasks.slice(0, this._currentTaskIndex + 1);
    return v;
  }

  public moveToPrev(): Task {
    if (this.currentTask.parent) {
      do {
        _stepToPrevTask(this);
      } while (!this.currentTask.getDoNotSkip());
      return this.currentTask;
    }
    return null;

    function _stepToPrevTask(that: TaskWalker) {
      _markCurrentTaskAsDone(that);
      let parentValue = that.currentTask.parent.value;
      console.log(that.actionEntityName)
      console.log(that.actionEntityName)
      that._currentTaskIndex--;
      that.currentTask.value = parentValue;
      that.tasks = that._deleteSubsequentTasks();
      that.workflowValuesObject = that._collectValues();
    }

    function _markCurrentTaskAsDone(that: TaskWalker) {
      that.currentTask.isDone = false;
      that.currentTask.isCurrent = false;
    }
    function _resetActionValues(that: TaskWalker) {
      if (that.currentTask.actionEntityName) that.actionEntityName = '';
      if (that.currentTask.actionName) that.actionName = '';
      if (that.currentTask.actionObjectName) that.actionObjectName = '';
    }
    function _setCurrentTask(that: TaskWalker) {
      that.currentTask = that.tasks[that._currentTaskIndex];
      that.currentTask.init();
      that.currentTask.isCurrent = true;
    }
  }

  public get currentTaskIndex(): number {
    return this._currentTaskIndex;
  }

  public get countTasks(): number {
    return this.tasks.length;
  }
}
