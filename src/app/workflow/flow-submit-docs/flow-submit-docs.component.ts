import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskFlowSubmitDocs } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-flow-submit-docs',
  templateUrl: './flow-submit-docs.component.html',
  styleUrls: ['./flow-submit-docs.component.css']
})
export class FlowSubmitDocsComponent implements OnInit {
  @Input() taskFlow = new TaskFlowSubmitDocs();
  @Output() onSaveNext = new EventEmitter();
  
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    this.onSavePrev.emit();
  }

}
