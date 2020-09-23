import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskUpload } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-upload-docs',
  templateUrl: './flow-upload-docs.component.html',
  styleUrls: ['./flow-upload-docs.component.css']
})
export class FlowUploadDocsComponent implements OnInit {
  @Input() taskFlow: TaskUpload;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Output() onSaveNext = new EventEmitter();
  @Output() onDrill = new EventEmitter()
  @Input() stepNumber = 1

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }
  

  doDrill(){
    this.onDrill.emit()
  }

  doSaveNext(){
    this.onSaveNext.emit();
  }

  @Output() onSavePrev = new EventEmitter();
  doSavePrev(){
    this.onSavePrev.emit();
  }
}
