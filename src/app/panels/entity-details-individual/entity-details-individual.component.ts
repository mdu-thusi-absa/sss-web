import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-entity-details-individual',
  templateUrl: './entity-details-individual.component.html',
  styleUrls: ['./entity-details-individual.component.css']
})
export class EntityDetailsIndividualComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';

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

}
