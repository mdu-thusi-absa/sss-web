import * as E from './data-entity-types';
import { DataService } from './data.service';
import { Entity } from './data-entity-parent';
import { Entities, AnyEntity } from './data-entities';
import { EntityFile, EntityFileDownload, EntityFileUpload } from './data-entity-kids';
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
  entityFieldKey = ''; //to set the fieldNameKey to get entity to be worked on in the step
  entity: AnyEntity;
  actionName_ = '';
  private actionEntityName_ = '';
  private actionObjectName_ = '';
  private workflowValuesObject_ = {};
  get workflowValuesObject(): object {
    return this.workflowValuesObject_;
  }
  set workflowValuesObject(o: object) {
    this.workflowValuesObject_ = o;
  }

  get actionEntityName(): string {
    return this.actionEntityName_;
  }
  set actionEntityName(v: string) {
    this.actionEntityName_ = v;
  }
  get actionObjectName(): string {
    return this.actionObjectName_;
  }
  set actionObjectName(v: string) {
    this.actionObjectName_ = v;
  }
  get actionName(): string {
    return this.actionName_;
  }
  set actionName(v: string) {
    this.actionName_ = v;
  }
  get skip(): boolean {
    return false;
  }
  constructor(protected data: DataService, public fieldName) {}
  init(): boolean {
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
    let s = new Task_SubTaskCondition('', 0, '', '');
    let t = new Task_SubTask(taskFlow, [s]);
    this.subTasks.push(t);
  }

  addNextFork(subTask: Task_SubTask) {
    subTask.taskFlow.parent = this;
    this.hasFork = true;
    this.subTasks.push(subTask);
  }
}

export class TaskSelect extends Task {
  type = 'select';
  sourceType: E.EnumEntityType;
  value = 0; //the key of the selected item
  customEntities: Entities<Entity> = null;
  values: Entities<AnyEntity>;
  thisEntityNameIsSubjectName = false;
  thisEntityNameIsAction = false;
  thisEntityNameIsObjectName = false;

  canMoveOn(): boolean {
    if (this.values.size == 1) return true;
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
  private _init_needs_update(): boolean {
    return !this.values || this.sourceType != null;
  }
  private _init_verify_if_empty() {
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

export class TaskConfirm extends Task {
  type = 'confirm';
  value = false;
  ensure = true; //value must be true to move on
  defaultValue = false

  init():boolean{
    this.value = this.defaultValue
    return true
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
  get skip(): boolean {
    return false;
  }
}

export class TaskDate extends Task {
  type = 'date';
  value: Date = new Date();
  ensure = true; //value must be true to move on
  verify(): boolean {
    if ((this.ensure && this.value) || this.skip) {
      this.errorMessage = '';
      return true;
    } else {
      this.errorMessage = this.name + ' is required';
      return false;
    }
  }
  get skip(): boolean {
    return false;
  }
}

// export class TaskDoc extends Task {
//   type = 'doc';
//   doc: string; // file name
//   constructor(public fieldName: string,public heading: string){}
// }

export class TaskUpload extends Task {
  type = 'upload-docs';
  files = new Entities<EntityFileUpload>(EntityFileUpload); // file name
  init(): boolean{
    // this.files.forEach((value,key,map)=>{
    //   value.dataObject = this.workflowValuesObject
    // })
    return true
  }
}

export class TaskDownload extends Task {
  type = 'submit-docs';
  //whoTo: string; //submit to whom
  files = new Entities<EntityFileDownload>(EntityFileDownload); // file name
  init(): boolean{
    this.files.forEach((value,key,map)=>{
      value.dataObject = this.data.expandValues(this.workflowValuesObject)
    })
    return true
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
  defaultValue: any
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
    defaultValue: any
  ): TaskForm {
    let inp = new TaskForm_Input();
    inp.fieldName = fieldName;
    inp.type = type;
    inp.title = title;
    inp.description = description
    inp.defaultValue = defaultValue
    this.inputs.push(inp);
    return this;
  }

  private _init_formInputs() {
    let fields = this.inputObject.headingsMap;
    fields.forEach((value, key, map) => {
      this.addInput(
        key as string,
        this.data.getFieldTypeForFieldName(key as string),
        value as string,
        '',null
      );
    });
  }

  init(): boolean {
    if (this.inputObject) {
      if (this.inputs.length == 0) {
        this._init_formInputs();
      }
    }
    return true;
  }
}

export class TaskMessage extends Task {
  type = 'message';
}

export class TaskError extends Task {
  type = 'error';
  text = '';
}

// tasks[]: maintains the current state of the workflow/path, with each node = Task.
// getNext, getPrev: Follows the path with
// rootTask: first Task. Build tree by using Task object add..., then assign to rootTask;
export class TaskWalker extends Task {
  type = 'workflow';
  private rootTask: Task = null;
  private currentTask: Task = null;
  //private lastAddedTask: Task = null;
  private currentTaskIndex_ = -1;
  public tasks: Task[] = [];
  public que: Task[] = []; // que of tasks to come back to when isEnd taskFlow is true

  get name(): string {
    let s = 'Workflow';
    if (this.whenStarted) s = this.whenStarted.toISOString().slice(0, 10);
    if (this.actionName) s = s + ': ' + this.actionName;
    else s = s + ': New task';
    if (this.actionEntityName) s = s + " for '" + this.actionEntityName + "'";
    if (this.actionObjectName) s = s + " of '" + this.actionObjectName + "'";
    return s;
  }

  // set title(v: string){
  //   super.name = v
  // }

  addNext(taskFlow: Task) {
    this.rootTask = taskFlow;
  }

  // loads the rootTask, and builds the obvious branch, until the first fork
  public start(): boolean {
    this.tasks = [this.rootTask];
    this.currentTask = this.rootTask;
    this.currentTask.isCurrent = true;
    this.currentTask.isDone = false;
    this.actionEntityName = '';
    this.actionObjectName = '';
    this.entity = null;
    this.actionName = '';
    if (this.currentTask) this.currentTaskIndex_ = 0;
    this.rootTask.init()
    this._buildNext(this.rootTask);
    if (this.currentTask.canMoveOn()) this.moveToNext();
    return true;
  }
  public loopFromQue() {
    //todo: test
    let q = this.que.pop();
    this.tasks.push(q);
    this.currentTask = q;
    this.currentTask.isCurrent = true;
    this.currentTaskIndex_++;
    return this._buildNext(this.currentTask);
  }

  private _buildNext_addSubtask(fromTask, subTaskIndex: number): Task {
    let t = fromTask.subTasks[subTaskIndex].taskFlow;
    t.workflowValuesObject = this._collectValues();
    t.init();
    this.tasks.push(t);
    return t;
  }

  private _buildNext_canBeBuiltOn(task: Task): boolean {
    return task.isDone && task.subTasks.length > 0;
  }
  private _buildNext_checkIfConditionalBuildHasAdded(
    parent: Task,
    notAdded: boolean
  ) {
    if (notAdded)
      parent.errorMessage =
        'No further steps are available for this option, please select another one';
    else parent.errorMessage = '';
  }

  private _buildNext(fromTask: Task): boolean {
    if (this.currentTaskIndex_ == this.tasks.length - 1) {
      if (fromTask) {
        if (fromTask.isDone) {
          if (fromTask.actionName) this.actionName = fromTask.actionName;
          if (fromTask.actionObjectName)
            this.actionObjectName = fromTask.actionObjectName;
          if (fromTask.actionEntityName)
            this.actionEntityName = fromTask.actionEntityName;
          this.entity = fromTask.entity;
        }
        fromTask.workflowValuesObject = this._collectValues();
        // if (fromTask.init()) {
          //let t = fromTask;
          // while (!t.hasFork && t.subTasks.length>0 && t.entityFieldKey=='') {
          //   t = t.subTasks[0].taskFlow;
          //   t.workflowValuesObject = this.collectValues();
          //   t.init();
          //   this.tasks.push(t);
          // }
          //   console.log(
          //     fromTask.isDone,
          //     fromTask.hasFork,
          //     fromTask.subTasks.length
          //   );
          if (this._buildNext_canBeBuiltOn(fromTask)) {
            // console.log(0);
            if (!fromTask.hasFork) {
              this._buildNext_addSubtask(fromTask, 0);
            } else {
              // next task with conditions
              let notAdded = true;
              for (let i = 0; i < fromTask.subTasks.length; i++) {
                if (
                  fromTask.subTasks[i].matchCondition(
                    fromTask.workflowValuesObject
                  )
                ) {
                  let t = this._buildNext_addSubtask(fromTask, i);
                  this._buildNext(t);
                  notAdded = false;
                  break;
                }
              }
              this._buildNext_checkIfConditionalBuildHasAdded(fromTask, notAdded);
            }
          } else if (fromTask.isDone) {
            this.start();
            // this.currentTaskIndex_ = 0
            // this.tasks.slice(0,1)
          }
        // }

        return true;
      }
      return false;
    }
    return true;
  }

  private _collectValues(): object {
    //returns JSON
    let o = {};
    this.tasks.forEach((e) => {
      o[e.fieldName] = e.value;
    });
    return o;
  }

  // get entity(): AnyEntity{
  //   let r = this.tasks.find((e)=>{
  //     return e.entity
  //   })
  //   return r
  // }

  private _moreTasksToDo() {
    return this.currentTaskIndex_ < this.tasks.length - 1;
  }
  private _moveToNextTask() {
    this.currentTaskIndex_++;
    this.currentTask.isCurrent = false;
    this.currentTask = this.tasks[this.currentTaskIndex_];
    this.currentTask.isCurrent = true;
  }

  private _moveToNext_DoSaveUpdatesToEntity() {
    //TODO: implement the amendment
    //create RecordUpdate and entity.update(recordUpdate)
    if (this.entity) {
      // console.log(this.entity);
      //let recordUpdate = new RecordUpdate();
      //this.entity.updateFieldValue(recordUpdate);
    }
  }

  private _moveToNext_DoCurrentTaskAfterBuild() {
    this.entity = this.currentTask.entity;
    if (this._moreTasksToDo()) {
      //TODO: save workflow state to DB
      this._moveToNextTask();
    } else {
      this._moveToNext_DoSaveUpdatesToEntity();
    }
    //TODO: implement skip a task. Not needed at the moment
    // if (this.currentTask.skip) {
    //   // console.log(this.tasks);
    // }
  }

  private _moveToNext_DoVerified(): Task {
    this.currentTask.isDone = true;
    if (this._buildNext(this.currentTask)) {
      this._moveToNext_DoCurrentTaskAfterBuild();
    }
    return this.currentTask;
  }

  public moveToNext(): Task {
    let r = this._moveToNext();
    while (this.currentTask.canMoveOn()) {
      let numberOfTasks = this.tasks.length;
      r = this._moveToNext();
      if (numberOfTasks == this.tasks.length) break;
    }
    return r;
  }

  private _moveToNext(): Task {
    this.currentTask.errorMessage = '';
    if (this.currentTask.verify()) {
      return this._moveToNext_DoVerified();
    }
    return null;
  }

  private _deleteSubsequentTasks() {
    let v = this.tasks.slice(0, this.currentTaskIndex_ + 1);
    return v;
  }

  public moveToPrev(): Task {
    if (this.currentTask.parent) {
      this.currentTask.isDone = false;
      this.currentTask.isCurrent = false;
      if (this.currentTask.actionEntityName) this.actionEntityName = '';
      if (this.currentTask.actionName) this.actionName = '';
      if (this.currentTask.actionObjectName) this.actionObjectName = '';
      this.currentTaskIndex_--;
      // this.tasks = this.tasks.slice(0,this.currentTaskIndex_); //delete
      this.currentTask = this.tasks[this.currentTaskIndex_];
      this.currentTask.isCurrent = true;
      this.currentTask.isDone = false;

      //this.currentTask.init()
      //   console.log(
      //     this.currentTask.name,
      //     this.currentTask.hasFork,
      //     this.currentTask.actionEntityName,
      //     this.currentTask.actionName
      //   );

      // if (
      //   this.currentTask.hasFork ||
      //   this.currentTask.actionEntityName.length > 0 ||
      //   this.currentTask.actionName.length > 0 ||
      //   this.currentTask.actionObjectName.length > 0
      // ) {
      //delete all subsequent tasks
      this.tasks = this._deleteSubsequentTasks();
      // }

      // if (this.currentTask.subTasks.length > 1) {
      //   let v = this.tasks.slice(0, this.currentTaskIndex_ + 1);
      //   this.tasks = v;
      //   this.build(this.currentTask);
      // }
      return this.currentTask;
    }
    return null;
  }

  public get currentTaskIndex(): number {
    return this.currentTaskIndex_;
  }

  public get countTasks(): number {
    return this.tasks.length;
  }
}

// export class TaskFile {
//   constructor(public fieldName: string, public heading) {}
// }
