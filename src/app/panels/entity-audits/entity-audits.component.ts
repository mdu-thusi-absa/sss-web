import { Component, OnInit, Input } from '@angular/core';
import { Task, Step } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-entity-audits',
  templateUrl: './entity-audits.component.html',
  styleUrls: ['./entity-audits.component.css']
})
export class EntityAuditsComponent implements OnInit {
  @Input() isNarrow = false;
  filterText = '';
  isNew = false;
  isFilterByTextToo = false;
  rdoChoice = 'active'; 
  newTask = new Task(new Step('New Task',new Date(),new Date(),new Date(),new Date(),'vlad','dean','Appointment','',false),[]);

  list: Task[] = [
    new Task(
      new Step(
        'Appoint: Smith',
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
          'Publish: Resolution',
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
          'Send: Resolution',
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
          'Appointment: correct appointment date',
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
        'Appointment: Resignation of Merry',
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        'dean',
        '',
        'Resignation',
        'Monroe, Mary',
        false
      ),
      [
        new Step(
          'Resolution: get it signed',
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
          'Resolution: get acknoledgement',
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
          'Appointment: update details',
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
        'AFS: 2029, verify with Finance',
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
          'AFS: 2029, obtain from Finance',
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
          'AFS: 2029, confirm with Auditors',
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
          'AFS: 2029, email publisher',
          new Date(),
          new Date(),
          new Date(),
          new Date(),
          'vlad',
          'dean',
          'AFS',
          'Send to publisher',
          true
        ),
        new Step(
          'AFS: 2029, confirm publication',
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
        'Name: change',
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
          'Resolution: get it',
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
          'CIPC: send application',
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
          'CIPC: follow up telephonically',
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
          'CIPC: get the notice',
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
          'SSS: update the name',
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
        'Appointment: New, Jones',
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
          'Resolution: signed?',
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
          'CIPC: send application',
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
          'CIPC: follow up on status',
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
          'CIPC: get the notice',
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
          'Name: update',
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

  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entity-audits');
    this.data.progress += 1;
  }

  getCount_Done(){
    return this.list.filter(e => e.mainGoal.isDone).length;
  }

  getCount_All(){
    return this.list.length;
  }

  getCount_Active(){
    return this.list.filter(e => !e.mainGoal.isDone).length;
  }

  doFilter(event: any){
    this.filterText = event;
  }

  getCountFiltered(){
    return this.list.filter(e => !this.shouldHideTask(e)).length;
  }

  doAdd(){
    this.isNew = true;
  }

  doCancel(){
    this.isNew = false;
  }

  shouldHideTask(msg: Task) {
    let inFilter = true;
    let inText = true;
    let inTitle = true;
    let inWhen = true;
    let inWho = true;
    if (this.filterText.length > 0) {
      inTitle =  msg.mainGoal.title.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      if (this.isFilterByTextToo)
        inText =  msg.mainGoal.text.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      else inText = false;
      inWhen = msg.mainGoal.whenStringCreated().indexOf(this.filterText.toLowerCase()) > -1;
      inWho = msg.mainGoal.whoCreated.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      inFilter = inTitle || inText || inWhen || inWho;
    }
    let inReadChoice = true;
    if (this.rdoChoice === 'all') {
      inReadChoice = true;
    } else if (this.rdoChoice === 'play') {
      inReadChoice = !msg.mainGoal.isDone;
    } else if (this.rdoChoice === 'ok') {
      inReadChoice = msg.mainGoal.isDone;
    }

    let doShow = inFilter && inReadChoice;
    return !doShow;
  }

}

