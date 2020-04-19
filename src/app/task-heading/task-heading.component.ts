import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/models';

@Component({
  selector: 'app-task-heading',
  templateUrl: './task-heading.component.html',
  styleUrls: ['./task-heading.component.css']
})
export class TaskHeadingComponent implements OnInit {
  @Input() task: Task;
  
  constructor() { }

  ngOnInit(): void {
  }

}
