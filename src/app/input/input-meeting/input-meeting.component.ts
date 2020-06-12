import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-meeting',
  templateUrl: './input-meeting.component.html',
  styleUrls: ['./input-meeting.component.css']
})
export class InputMeetingComponent implements OnInit {
  @Input() filterText='';
  @Input() doHideByFilter = true;
  @Input() title="File"
  @Input() disabled=false;
  @Input() value='';
  @Input() hideBody = true;
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showTitleInput = true;
  @Input() showDownload = false;
  @Input() showShare = false;
  @Input() showSelect = false;
  @Input() showCheck = false;
  @Input() showPanelHeading = true;
  @Input() isNarrow = false;
  isDown_MeetingAttendees = false;
  isDown_Files = false;

  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onCheck = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    setTimeout((that) => {that.value=true}, 1000, this);
    setTimeout((that) => {that.value=false}, 2000, this);
  }

  doCheckField(event: any){
    //let f = event.target.value;
    let c = event.target.checked;
    this.onCheck.emit(c);
  }

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }
  doTask() {
    this.onTask.emit(this.title);
  }
  hideByFilter() {
    if (!this.doHideByFilter) return false;
    else
      return (
        this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      );
  }
  getID() {
    let s = / /g;
    let t = this.title.toLowerCase().replace(s, '-');
    s = /\//g;
    t = t.toLowerCase().replace(s, '-');
    s = /\:/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\,/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\-\-/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\(/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\)/g;
    t = t.toLowerCase().replace(s, '-');
    return t;
  }
  doChange(event: any){
    this.onChange.emit(event);
  }

  doChangeTitle(event: any){
    this.title = event;
  }

}

