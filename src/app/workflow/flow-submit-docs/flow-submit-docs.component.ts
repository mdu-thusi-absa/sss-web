import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskDownload } from 'src/app/data/data-workflow-classes';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-flow-submit-docs',
  templateUrl: './flow-submit-docs.component.html',
  styleUrls: ['./flow-submit-docs.component.css']
})
export class FlowSubmitDocsComponent implements OnInit {
  @Input() taskFlow: TaskDownload;
  @Input() showSavePrev = false;
  @Input() showSaveNext = false;
  @Output() onSaveNext = new EventEmitter();
  @Input() stepNumber = 1
  @Output() onDrill = new EventEmitter()
  
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  doDrill(){
    console.log('flow-submit','doDrill');
    
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
