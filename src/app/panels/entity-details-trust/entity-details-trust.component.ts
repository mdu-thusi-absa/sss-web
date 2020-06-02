import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-trust',
  templateUrl: './entity-details-trust.component.html',
  styleUrls: ['./entity-details-trust.component.css']
})
export class EntityDetailsTrustComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  isAppointeeInput = false;
  isAppointeeNewInput =false;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-trust');
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

  showAppointeeEdit(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNew(){
    this.isAppointeeInput = !this.isAppointeeInput
  }

  showAppointeeNewEdit(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

  showAppointeeNewNew(){ this.isAppointeeNewInput = !this.isAppointeeNewInput   }

  hideByFilter(caption: string){
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

}

