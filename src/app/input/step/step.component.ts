import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() stepNumber = 1;
  @Input() noHeader = false;
  @Input() hideBody = true;
  constructor() { }

  ngOnInit(): void {
  }

}
