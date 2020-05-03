import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-schedule',
  templateUrl: './input-schedule.component.html',
  styleUrls: ['./input-schedule.component.css']
})
export class InputScheduleComponent implements OnInit {
  @Input() title = '';
  @Input() stepNumber = 0;
  @Input() hideBody = true;
  constructor() { }

  ngOnInit(): void {
  }

  doFile(event: any){

  }

  doRecord(event: any){

  }

  doTask(event: any){

  }
}
