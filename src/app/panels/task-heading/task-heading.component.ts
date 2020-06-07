import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-heading',
  templateUrl: './task-heading.component.html',
  styleUrls: ['./task-heading.component.css']
})
export class TaskHeadingComponent implements OnInit {
  @Input() task: Task;
  
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log(new Date().getTime(),'loaded:task-heading');
  }

}
