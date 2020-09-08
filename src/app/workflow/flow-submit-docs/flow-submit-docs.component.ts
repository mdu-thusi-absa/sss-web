import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskFlowSubmitDocs } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-submit-docs',
  templateUrl: './flow-submit-docs.component.html',
  styleUrls: ['./flow-submit-docs.component.css']
})
export class FlowSubmitDocsComponent implements OnInit {
  @Input() taskFlow: TaskFlowSubmitDocs;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Output() onSaveNext = new EventEmitter();
  @Input() stepNumber = 1
  
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
