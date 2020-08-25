import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaturalEntity, Company } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-entity-details-company-secondary',
  templateUrl: './entity-details-company-secondary.component.html',
  styleUrls: ['./entity-details-company-secondary.component.css']
})
export class EntityDetailsCompanySecondaryComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() persons: NaturalEntity[];
  @Input() entity: Company;
  

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onDirty = new EventEmitter();

  
  constructor(public data: DataService) { }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-company-secondary');
    this.data.progress += 1;
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
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }


}
