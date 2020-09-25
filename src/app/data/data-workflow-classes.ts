import * as E from './data-entity-types';
import { DataService } from './data.service';
import { Entity } from './data-entity-parent';
import { Entities, AnyEntity } from './data-entities';
import {
  EntityAddress,
  EntityFile,
  EntityFileDownload,
  EntityFileUpload,
} from './data-entity-kids';
import { ThrowStmt } from '@angular/compiler';
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
  private name_ = 'task name';
  get name(): string {
    return this.name_;
  }
  set name(v: string) {
    this.name_ = v;
  }
  targetsOfChange: EntityValue[] = [];
  description = '';
  value: any = '';
  whenStarted = new Date();
  whenDone = new Date();
  whoCreated = '';
  isDone = false;
  isCurrent = false;
  isEnd = false;
  notes = '';
  parent: Task = null;

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

  get skip(): boolean {
    return false;
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
  canMoveOn(): boolean {
    // to be implemented by child classes, if they need to initialise data
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
  value: any = 0; //the key of the selected item
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
    return !this.values || this.sourceType != null;
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

export class TaskSelectMulti extends TaskSelect {
  type = 'select-multi';
  selectedSourceType: E.EnumEntityType;
  value: number[] = []; //the key of the selected items
  values: Entities<AnyEntity>;
  minSelectedItems = 0;

  canMoveOn(): boolean {
    return false; //for now
  }

  init(): boolean {
    super.init();
    if (this._init_needs_update()) {
      this.values = this.data.getEntities(
        this.sourceType,
        this.workflowValuesObject
      );
      this.value = []; ////get selected values from db source
    }
    return true;
  }

  verify(): boolean {
    return true; //for now
  }
}

export class TaskConfirm extends Task {
  type = 'confirm';
  value = false;
  ensure = true; //value must be true to move on
  //TODO: replace with EntityValue
  //defaultValue = false;

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
    if (this.ensure && !this.value) {
      this.errorMessage = this.name + ' is required';
      return false;
    } else {
      this.errorMessage = '';
      return true;
    }
  }
}

export class TaskText extends Task {
  type = 'text';
  value: '';
  required = false;
  mustChange = false;
  minLen = 3; //value must be true to move on
  maxLen = 100;
  //defaultValue = false;

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
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
  }
}

export class TaskAddress extends Task {
  type = 'address';
  value: EntityAddress;
  ensure = true;
  defaultValue = false;

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
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
  value: string = '';
  ensure = true;
  minValue = 0;
  maxValue = 1000000000;
  defaultValue = false;

  init(): boolean {
    return super.init();
  }
  verify(): boolean {
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
  }
}

export class TaskDesc extends TaskText {
  type = 'desc';
  minLen = 3;
  maxLen = 1000;
}

export class TaskDate extends Task {
  type = 'date';
  value: Date = new Date();
  ensure = true; //value must be true to move on
  thisValueIsRecordDate = false;
  verify(): boolean {
    if ((this.ensure && this.value) || this.skip) {
      this.errorMessage = '';
      return true;
    } else {
      this.errorMessage = this.name + ' is required';
      return false;
    }
  }
  get actionRecordDateStr(): string {
    if (this.thisValueIsRecordDate)
      return this.value.toISOString().slice(0, 10);
    return '';
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
  reminderDate_ = new Date();
  offsetDays_ = 0;

  set offsetDays(v: number) {
    this.offsetDays_ = v;
    this.addDays();
  }

  get reminderDate() {
    return this.reminderDate_;
  }

  public addDays() {
    let date = new Date(new Date().valueOf());
    date.setDate(date.getDate() + this.offsetDays_);
    this.reminderDate_ = date;
  }
}

export class TaskForm_Input {
  type = 'text';
  title = 'Input';
  fieldName = 'fieldName';
  description = '';
  value: EntityValue;
}

export class EntityValue {
  constructor(
    public data: DataService,
    public entityKeyFieldName: string,
    public entityFieldName: string,
    public sourceValuesObject_FieldName: string,
    public defaultValue: any
  ) {}
  getValue(sourceValuesObject: object) {
    if (this.entityKeyFieldName && this.sourceValuesObject_FieldName) {
      let entity = this._getEntity(sourceValuesObject);
      let v = this.data.getEntityFieldValue(entity, this.entityFieldName);

      return v;
    } else {
      return this.defaultValue;
    }
  }

  _log(...args: any[]) {
    console.log('Error: EntityValue.save');
    console.log(...args);
  }

  save(sourceValuesObject: object) {
    if (_hasToBeSaved(this.entityKeyFieldName)) {
      if (this.sourceValuesObject_FieldName) {
        let entity = this._getEntity(sourceValuesObject);
        entity.setValue(
          this.entityFieldName,
          sourceValuesObject[this.sourceValuesObject_FieldName]
        );
      } else {
        this._log('sourceValuesObject_FieldName was not provided', {
          sourceValuesObject_FieldName: this.sourceValuesObject_FieldName,
          sourceValuesObject,
        });
      }
    }

    function _hasToBeSaved(prividedSetting: string) {
      return prividedSetting.length > 0;
    }
  }

  private _getEntity(workflowValuesObject: object) {
    let entityKey = workflowValuesObject[this.entityKeyFieldName];
    let elements = this.data.getEntitiesByKeyField(this.entityKeyFieldName);
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

// export class TaskError extends Task {
//   type = 'error';
//   text = '';
// }

// tasks[]: maintains the current state of the workflow/path, with each node = Task.
// getNext, getPrev: Follows the path with
// rootTask: first Task. Build tree by using Task object add..., then assign to rootTask;
export class TaskWalker extends Task {
  type = 'workflow';
  private rootTask: Task = null;
  private currentTask: Task = null;
  //private lastAddedTask: Task = null;
  private _currentTaskIndex = -1;
  public tasks: Task[] = [];
  public que: Task[] = []; // que of tasks to come back to when isEnd taskFlow is true
  public historyOfNames: string[] = [];

  get name(): string {
    let s = 'Workflow';
    if (this.whenStarted) s = this.whenStarted.toISOString().slice(0, 10);
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

  init(): boolean {
    this.actionEntityName = '';
    this.actionName = '';
    this.actionObjectName = '';
    this.entity = null;
    this.workflowValuesObject = {};
    return true;
  }
  // loads the rootTask, and builds the obvious branch, until the first fork
  public start(): boolean {
    this.init();
    this.tasks = [this.rootTask];
    this.currentTask = this.rootTask;
    this.currentTask.isCurrent = true;
    if (this.currentTask) this._currentTaskIndex = 0;
    //this.rootTask.init();
    this.tasks.forEach((t) => {
      //t.isDone = false;
      t.init();
    });
    this._buildNext(this.rootTask);
    if (this.currentTask.canMoveOn()) this.moveToNext();
    return true;
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

  private _ifTaskIsDone(fromTask: Task, that: TaskWalker): boolean {
    collectValuesIntoThisWalkerFromTask(fromTask, that);
    if (that._canBeBuiltOn(fromTask)) {
      that._addChildTask(fromTask, that);
    } else {
      that._saveToTargetObject();
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
        if (text) return text;
        else return oldText;
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
    let o = {};
    this.tasks.forEach((e) => {
      o[e.fieldName] = e.value;
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
        r.push(target);
      });
    });
    return r;
  }

  private _saveToTargetObject() {
    this._collectStateFromTasks();
    _saveCollectedValuesToEachTarget(this);
    this._addHistory();
    this.notify('saved');

    function _saveCollectedValuesToEachTarget(that: TaskWalker) {
      that.targetsOfChange.forEach((target) => {
        target.save(that.workflowValuesObject);
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
      _notifyEachListener(this)
    }

    function _notifyEachListener(that: TaskWalker){
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
    if (this._buildNext(this.currentTask)) {
      this._moveToNext_DoCurrentTaskAfterBuild();
    }
    return this.currentTask;
  }

  public moveToNext(): Task {
    do {
      this._moveToNext();
    } while (this.currentTask.canMoveOn());
    return this.currentTask;
  }

  private _moveToNext(): Task {
    this.currentTask.errorMessage = '';
    if (this.currentTask.verify()) {
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
      _markCurrentTaskAsDone(this)
      let parentValue = this.currentTask.parent.value;
      _resetActionValues(this)
      this._currentTaskIndex--;
      _setCurrentTask(this)
      this.currentTask.value = parentValue;
      this.tasks = this._deleteSubsequentTasks();
      return this.currentTask;
    }
    return null;

    function _markCurrentTaskAsDone(that:TaskWalker){
      that.currentTask.isDone = false;
      that.currentTask.isCurrent = false;
    }
    function _resetActionValues(that: TaskWalker){
      if (that.currentTask.actionEntityName) that.actionEntityName = '';
      if (that.currentTask.actionName) that.actionName = '';
      if (that.currentTask.actionObjectName) that.actionObjectName = '';
    }
    function _setCurrentTask(that: TaskWalker){
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
