import { Component, OnInit, Input } from '@angular/core';
import { Entity, Task } from '../../models';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() isNarrow = false;
  filterText = '';
  isCountryInput = false;
  isPositionInput = false;
  isAppointeeInput = false;
  isAppointeeNewInput =false;
  @Input() panelRows = 2;
  task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1;
  }

  isFullScreen(){
    return this.panelRows == 1;
  }

  isHalfScreen(){
    return this.panelRows == 2;
  }

  isThirdScreen(){
    return this.panelRows == 3;
  }

  showCountryEdit(){
    this.isCountryInput = !this.isCountryInput
  }

  showCountryNew(){
    this.isCountryInput = !this.isCountryInput
  }

  showPositionEdit(){
    this.isPositionInput = !this.isPositionInput
  }

  showPositionNew(){
    this.isPositionInput = !this.isPositionInput
  }

  showAppointeeEdit(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNew(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNewEdit(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

  showAppointeeNewNew(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }


  showAppointmentNew(){

  }

  showAppointmentEdit(){

  }


}
