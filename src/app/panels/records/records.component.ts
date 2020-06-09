import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../models';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  @Input() panelRows: number;
  records: Record[];
  filterText = '';
  listTaskType = 'all';
  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.records = [
      new Record(new Date(2020, 0, 13,8,20), 'vlad', 'Appointment', '', '', ''),
      new Record(new Date(2019, 10, 3,15,30), 'dean', 'Rename', '', '', ''),
      new Record(new Date(2019, 7, 20,10,5), 'sasha', 'No note', '', '', ''),
      new Record(new Date(2019, 3, 25,13,43), 'ulrich', 'Register', '', '', ''),
      new Record(new Date(2018, 8, 31,17,23), 'dean', 'Add post', '', '', ''),
      new Record(new Date(2017, 6, 15,9,15), 'dean', 'Send email', '', '', ''),
      new Record(new Date(2016, 4, 2,11,35), 'vlad', 'Resignation', '', '', ''),
    ];
    if (this.data.lg) console.log(new Date().getTime(),'loaded:records');
    this.data.progress += 1;
  }

  isFullScreen() {
    return this.panelRows === 1;
  }

  isHalfScreen() {
    return this.panelRows === 2;
  }

  shoudHideRecord(record: Record): boolean {
    let r = false;
    let notInText =
      this.filterText.length === 0
        ? false
        : record.who.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
    let notInDate =
      this.filterText.length === 0
        ? false
        : record.whenString().indexOf(this.filterText.toLowerCase()) === -1;
    r = notInText && notInDate;

    let notInList =
      this.listTaskType === 'all'
        ? false
        : record.who.toLowerCase() != this.listTaskType.toLowerCase();
    r = r || notInList;
    return r;
  }
}
