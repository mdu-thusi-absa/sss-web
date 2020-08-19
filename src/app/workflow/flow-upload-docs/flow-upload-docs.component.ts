import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskFlowUploadDocs } from 'src/app/models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-flow-upload-docs',
  templateUrl: './flow-upload-docs.component.html',
  styleUrls: ['./flow-upload-docs.component.css']
})
export class FlowUploadDocsComponent implements OnInit {
  @Input() taskFlow = new TaskFlowUploadDocs();
  @Input() showSavePrev = false;
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
