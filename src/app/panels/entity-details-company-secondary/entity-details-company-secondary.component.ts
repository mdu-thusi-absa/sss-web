import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaturalEntity } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-company-secondary',
  templateUrl: './entity-details-company-secondary.component.html',
  styleUrls: ['./entity-details-company-secondary.component.css']
})
export class EntityDetailsCompanySecondaryComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() persons: NaturalEntity[];
  

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
    return caption.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }


}
