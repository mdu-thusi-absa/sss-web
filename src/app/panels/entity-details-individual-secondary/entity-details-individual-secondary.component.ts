import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-individual-secondary',
  templateUrl: './entity-details-individual-secondary.component.html',
  styleUrls: ['./entity-details-individual-secondary.component.css']
})
export class EntityDetailsIndividualSecondaryComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  isAppointeeInput = false;
  isAppointeeNewInput =false;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  doRecord(event: any){
    this.onRecord.emit(event);
  }

  doTask(event: any){
    this.onTask.emit(event);
  }

  doFile(event: any){
    this.onFile.emit(event);
  }

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) == -1;
  }

  showAppointeeEdit(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNew(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNewEdit(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

  showAppointeeNewNew(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

}
