import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() title = 'Step'
  @Input() stepNumber = 1;
  @Input() noHeader = false;
  @Input() hideBody = true;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
