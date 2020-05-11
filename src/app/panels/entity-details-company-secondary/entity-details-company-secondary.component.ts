import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person, CountryCities } from 'src/app/models';

@Component({
  selector: 'app-entity-details-company-secondary',
  templateUrl: './entity-details-company-secondary.component.html',
  styleUrls: ['./entity-details-company-secondary.component.css']
})
export class EntityDetailsCompanySecondaryComponent implements OnInit {
  @Input() filterText = '';
  @Input() persons: Person[];
  @Input() countriesCities: CountryCities[];
  

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();

  
  constructor() { }

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


}
