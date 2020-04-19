import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {
  applyAlert_attribute = '';
  applyAlert_value = '';
  showApplyAlert = false;
  @Input() panelRows: number;
  constructor() { }

  ngOnInit(): void {
  }

  showConfirm(attribute: string, value: string){
    // this.applyAlert_attribute = attribute;
    // this.applyAlert_value = value;
    // this.showApplyAlert = true;
    if (value=='') confirm("Are you sure you want to apply all values from '" + attribute + "' column");
    else confirm("Are you sure you want to apply '" + value + "' to '" + attribute + "'");
  }


}
