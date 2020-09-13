import * as E from './data-entity-types';
import { DataService } from './data.service';
import { Entity, RecordUpdate } from './data-entity-parent';
import { Entities, AnyEntity } from './data-entities';
// import * as D from './data.service'

export class TaskFlowSubTaskCondition {
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

export class TaskFlowSubTask {
  // '' means no operator; can be: ==, >, <, maybe(in, not in)
  constructor(
    public taskFlow: TaskFlow,
    public conditions: TaskFlowSubTaskCondition[] = []
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

export class TaskFlow {
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
  parent: TaskFlow = null;

  subTasks: TaskFlowSubTask[] = [];
  hasFork = false;
  errorMessage = '';
  entityFieldKey = ''; //to set the fieldNameKey to get entity to be worked on in the step
  entity: AnyEntity;
  actionName_ = '';
  private actionEntityName_ = '';
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
  verify(): boolean {
    // to be implemented by child classes, if they need to initialise data
    return true;
  }
  addNext(taskFlow: TaskFlow) {
    taskFlow.parent = this;
    let s = new TaskFlowSubTaskCondition('', 0, '', '');
    let t = new TaskFlowSubTask(taskFlow, [s]);
    this.subTasks.push(t);
  }

  addNextFork(subTask: TaskFlowSubTask) {
    subTask.taskFlow.parent = this;
    this.hasFork = true;
    this.subTasks.push(subTask);
  }
}

export class TaskFlowSelect extends TaskFlow {
  type = 'select';
  sourceType: E.EnumEntityType;
  value = 0; //the key of the selected item
  customEntities: Entities<Entity> = null;
  values: Entities<AnyEntity>;
  actionEntityNameIsEntityName = false;
  actionNameIsEntityName = false;

  get actionEntityName(): string {
    if (this.actionEntityNameIsEntityName) return this.entityName;
    return '';
  }
  set actionEntityName(v: string) {
    super.actionEntityName = v;
  }

  get actionName(): string {
    if (this.actionNameIsEntityName) return this.entityName;
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
  private init_needs_update(): boolean {
    return !this.values || this.sourceType != null;
  }
  private init_verify_if_empty() {
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
    if (this.init_needs_update()) {
      this.values = this.data.getEntities(
        this.sourceType,
        this.workflowValuesObject
      );
      this.init_verify_if_empty();
    }
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

export class TaskFlowConfirm extends TaskFlow {
  type = 'confirm';
  value = false;
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

export class TaskFlowDate extends TaskFlow {
  type = 'date';
  value: Date = new Date()
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

export class TaskFlowDoc extends TaskFlow {
  type = 'doc';
  doc: string; // file name
}

export class TaskFlowUploadDocs extends TaskFlow {
  type = 'upload-docs';
  docs: TaskFlowDoc[] = []; // file name
  addInput(fieldName: string, type: string, name: string, description: string) {
    let d = new TaskFlowDoc(this.data, fieldName);
    d.type = type;
    d.name = name;
    d.description = description;
    this.docs.push;
  }
}

export class TaskFlowSubmitDocs extends TaskFlow {
  type = 'submit-docs';
  whoTo: string; //submit to whom
  docs: TaskFlowDoc[] = []; // file name
  addInput(fieldName: string, type: string, name: string, description: string) {
    let d = new TaskFlowDoc(this.data, fieldName);
    d.type = type;
    d.name = name;
    d.description = description;
    this.docs.push;
  }
}

export class TaskFlowReminder extends TaskFlow {
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

export class TaskFlowFormInput {
  type = 'text';
  title = 'Input';
  fieldName = 'fieldName';
  description = '';
  value: any = '';
}

export class TaskFlowForm extends TaskFlow {
  type = 'form';
  inputs: TaskFlowFormInput[] = [];
  inputObject: AnyEntity;

  addInput(
    fieldName: string,
    type: string,
    title: string,
    description: string
  ): TaskFlowForm {
    let inp = new TaskFlowFormInput();
    inp.fieldName = fieldName;
    inp.type = type;
    inp.title = title;
    inp.description = description;
    this.inputs.push(inp);
    return this;
  }

  private init_formInputs() {
    let fields = this.inputObject.headingsMap;
    fields.forEach((value, key, map) => {
      this.addInput(
        key as string,
        this.data.getFieldTypeForFieldName(key as string),
        value as string,
        ''
      );
    });
  }

  init(): boolean {
    if (this.inputObject) {
      if (this.inputs.length == 0) {
        this.init_formInputs();
      }
    }
    return true;
  }
}

export class TaskFlowMessage extends TaskFlow {
  type = 'message';
}

export class TaskFlowError extends TaskFlow {
  type = 'error';
  text = '';
}

// tasks[]: maintains the current state of the workflow/path, with each node = TaskFlow.
// getNext, getPrev: Follows the path with
// rootTask: first TaskFlow. Build tree by using TaskFlow object add..., then assign to rootTask;
export class WorkFlow extends TaskFlow {
  type = 'workflow';
  private rootTask: TaskFlow = null;
  private currentTask: TaskFlow = null;
  //private lastAddedTask: TaskFlow = null;
  private currentTaskIndex_ = -1;
  public tasks: TaskFlow[] = [];
  public que: TaskFlow[] = []; // que of tasks to come back to when isEnd taskFlow is true

  get name(): string {
    let s = 'Workflow';
    if (this.whenStarted) s = this.whenStarted.toISOString().slice(0, 10);
    if (this.actionName) s = s + ': ' + this.actionName;
    else s = s + ': New task';
    if (this.actionEntityName) s = s + " for '" + this.actionEntityName + "'";
    return s;
  }

  // set title(v: string){
  //   super.name = v
  // }

  addNext(taskFlow: TaskFlow) {
    this.rootTask = taskFlow;
  }

  // loads the rootTask, and builds the obvious branch, until the first fork
  public start(): boolean {
    //this.rootTask.init()
    this.tasks = [this.rootTask];
    this.currentTask = this.rootTask;
    this.currentTask.isCurrent = true;
    this.currentTask.isDone = false;
    this.actionEntityName = '';
    this.entity = null;
    this.actionName = '';
    if (this.currentTask) this.currentTaskIndex_ = 0;
    return this.build(this.rootTask);
  }
  public loopFromQue() {
    //todo: test
    let q = this.que.pop();
    this.tasks.push(q);
    this.currentTask = q;
    this.currentTask.isCurrent = true;
    this.currentTaskIndex_++;
    return this.build(this.currentTask);
  }

  private build_addSubtask(fromTask, subTaskIndex: number): TaskFlow {
    let t = fromTask.subTasks[subTaskIndex].taskFlow;
    t.workflowValuesObject = this.collectValues();
    t.init();
    this.tasks.push(t);
    return t;
  }

  private build_canBeBuiltOn(task: TaskFlow): boolean {
    return task.isDone && task.subTasks.length > 0;
  }
  private build_checkIfConditionalBuildHasAdded(
    parent: TaskFlow,
    notAdded: boolean
  ) {
    if (notAdded)
      parent.errorMessage =
        'No further steps are available for this option, please select another one';
    else parent.errorMessage = '';
  }

  private build(fromTask: TaskFlow): boolean {
    if (this.currentTaskIndex_ == this.tasks.length - 1) {
      if (fromTask) {
        if (fromTask.isDone) {
          if (fromTask.actionName) this.actionName = fromTask.actionName;
          if (fromTask.actionEntityName)
            this.actionEntityName = fromTask.actionEntityName;
          this.entity = fromTask.entity;
        }
        fromTask.workflowValuesObject = this.collectValues();
        if (fromTask.init()) {
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
          if (this.build_canBeBuiltOn(fromTask)) {
            // console.log(0);
            if (!fromTask.hasFork) {
              this.build_addSubtask(fromTask, 0);
            } else {
              // next task with conditions
              let notAdded = true;
              for (let i = 0; i < fromTask.subTasks.length; i++) {
                if (
                  fromTask.subTasks[i].matchCondition(
                    fromTask.workflowValuesObject
                  )
                ) {
                  let t = this.build_addSubtask(fromTask, i);
                  this.build(t);
                  notAdded = false;
                  break;
                }
              }
              this.build_checkIfConditionalBuildHasAdded(fromTask, notAdded);
            }
          } else if (fromTask.isDone) {
            this.start();
            // this.currentTaskIndex_ = 0
            // this.tasks.slice(0,1)
          }
        }

        return true;
      }
      return false;
    }
    return true;
  }

  collectValues(): object {
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

  private moreTasksToDo_() {
    return this.currentTaskIndex_ < this.tasks.length - 1;
  }
  private moveToNextTask_() {
    this.currentTaskIndex_++;
    this.currentTask.isCurrent = false;
    this.currentTask = this.tasks[this.currentTaskIndex_];
    this.currentTask.isCurrent = true;
  }

  private moveToNext_DoSaveUpdatesToEntity_(){
//TODO: implement the amendment
      //create RecordUpdate and entity.update(recordUpdate)
      if (this.entity) {
        // console.log(this.entity);

        //let recordUpdate = new RecordUpdate();
        //this.entity.updateFieldValue(recordUpdate);
      }
  }

  private moveToNext_DoCurrentTaskAfterBuild_() {
    this.entity = this.currentTask.entity;
    if (this.moreTasksToDo_()) {
      //TODO: save workflow state to DB
      this.moveToNextTask_();
    } else {
      this.moveToNext_DoSaveUpdatesToEntity_()
    }
    //TODO: implement skip a task. Not needed at the moment
    // if (this.currentTask.skip) {
    //   // console.log(this.tasks);
    // }
  }

  private moveToNext_DoVerified_(): TaskFlow {
    this.currentTask.isDone = true;
    if (this.build(this.currentTask)) {
      this.moveToNext_DoCurrentTaskAfterBuild_();
    }
    return this.currentTask;
  }

  public moveToNext(): TaskFlow {
    this.currentTask.errorMessage = '';
    if (this.currentTask.verify()) {
      return this.moveToNext_DoVerified_();
    }
    return null;
  }

  public moveToPrev(): TaskFlow {
    if (this.currentTask.parent) {
      this.currentTask.isDone = false;
      this.currentTask.isCurrent = false;
      if (this.currentTask.actionEntityName) this.actionEntityName = '';
      if (this.currentTask.actionName) this.actionName = '';
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

      if (
        this.currentTask.hasFork ||
        this.currentTask.actionEntityName.length > 0 ||
        this.currentTask.actionName.length > 0
      ) {
        let v = this.tasks.slice(0, this.currentTaskIndex_ + 1);
        this.tasks = v;
      }

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
