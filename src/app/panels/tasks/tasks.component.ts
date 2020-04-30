import { Component, OnInit, Input } from '@angular/core';
import { Entity, Task, Step } from '../../models/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  filterText = '';
  @Input() panelRows = 1;
  hideActive = true;
  hideInActive = true;
  rdoActiveInActiveAll = 'Active';
  listTaskType = 'all';

  entities: Task[] = [
    new Task(
      new Step(
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        'vlad',
        'dean',
        'Appointment',
        'Smith, Jordan',
        true
      ),
      [
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'dean',
          'vlad',
          'Resolution',
          'Obtain signed copy and upload',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'dean',
          '',
          'Resolution',
          'Contact Appointee, get acknowledgement',
          false
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'dean',
          '',
          'SSS',
          'Update appointment details',
          false
        ),
      ]
    ),
    new Task(
      new Step(
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        'dean',
        '',
        'Resignation',
        'Monroe, Merry',
        false
      ),
      [
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          '',
          'Resolution',
          'Obtain signed copy and upload',
          false
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          '',
          'Resolution',
          'Contact Appointee, get acknowledgement',
          false
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          '',
          'SSS',
          'Update appointment details',
          false
        ),
      ]
    ),
    new Task(
      new Step(
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        'dean',
        '',
        'Publish',
        'AFS: 2019',
        true
      ),
      [
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'AFS',
          'Obtain from Finance',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'AFS',
          'Confirm to auditors',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'AFS',
          'Sen to publisher',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'AFS',
          'Confirm publicastion',
          true
        ),
      ]
    ),
    new Task(
      new Step(
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        'dean',
        '',
        'Rename',
        'Fancy (Pty) Ltd',
        false
      ),
      [
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Resolution',
          'Obtain signed copy and upload',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Application',
          'Send application to CIPC',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Application',
          'Follow up with CIPC',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Application',
          'Get CIPC notice',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          '',
          'SSS',
          'Update company name details',
          false
        ),
      ]
    ),
    
    new Task(
      new Step(
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        'dean',
        '',
        'Appointment',
        'Jones, Tom',
        true
      ),
      [
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Resolution',
          'Obtain signed copy and upload',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Application',
          'Send application to CIPC',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Application',
          'Follow up with CIPC',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'Application',
          'Get CIPC notice',
          true
        ),
        new Step(
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          '',
          'SSS',
          'Update company name details',
          false
        ),
      ]
    ),

  ];

  constructor() {}

  ngOnInit(): void {}

  isFullScreen() {
    return this.panelRows == 1;
  }

  isHalfScreen() {
    return this.panelRows == 2;
  }

  isThirdScreen() {
    return this.panelRows == 3;
  }

  shoudHideTask(task: Task): boolean {
    let r = false;
    let notInText =
      this.filterText.length == 0
        ? false
        : task.mainGoal.text
            .toLowerCase()
            .indexOf(this.filterText.toLowerCase()) == -1;
    if (this.rdoActiveInActiveAll == 'All') {
      r = notInText;
    } else if (this.rdoActiveInActiveAll == 'Active') {
      r = notInText || task.mainGoal.isDone;
    } else if (this.rdoActiveInActiveAll == 'Done') {
      r = notInText || !task.mainGoal.isDone;
    }
    if (this.listTaskType.toLowerCase() != 'all')
      r =
        r ||
        !(
          this.listTaskType.toLowerCase() ==
          task.mainGoal.taskType.toLowerCase()
        );
    //console.log(r, notInText,'Same type:',  this.listTaskType.toLowerCase() == task.mainGoal.taskType,'goalType:' + task.mainGoal.taskType.toLowerCase(), "listTaskType:" + this.listTaskType);
    //console.log(r,!(this.listTaskType.toLowerCase() == task.mainGoal.taskType.toLowerCase()),this.listTaskType.toLowerCase(), task.mainGoal.taskType.toLowerCase());
    //console.log(r,notInText,this.rdoActiveInActiveAll, task.mainGoal.isDone, this.filterText,task.mainGoal.text)
    return r;
  }

  getTaskCountActive() {
    return this.entities.filter((e) => !e.mainGoal.isDone).length;
  }

  getTaskCountDone() {
    return this.entities.filter((e) => e.mainGoal.isDone).length;
  }

  getTaskCountAll() {
    return this.entities.length;
  }

  doFilter(event: any){
    this.filterText = event;
  }

  getCountFiltered(){
    return this.entities.filter(e => !this.shoudHideTask(e)).length;
  }
}
