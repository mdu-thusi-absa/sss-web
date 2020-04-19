import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html',
  styleUrls: ['./entities-container.component.css']
})
export class EntitiesContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'SSS';
  name: string = 'Max';

  showPosts = false;
  isHalf = false;

  hideTasks = false;
  hideHistory = true;
  expandTaskDetail = false;
  expandHistoryDetail = false;
  panelRows = this.hideHistory && this.hideTasks ? 1 : 2;
  innerWidth: any;

  private max(v: number, w: number) {
    if (v>w) return v;
    else return w;
  }

  showHideTasks() {
    this.hideTasks = !this.hideTasks;
    if (!this.hideTasks) this.hideHistory = true;
    this.expandTaskDetail = this.expandHistoryDetail;

    if (this.hideTasks && this.hideHistory) this.panelRows = 1;
    if (this.hideTasks && !this.hideHistory) this.panelRows = 2;
    if (!this.hideTasks && this.hideHistory) this.panelRows = 2;
  }

  showHideHistory() {
    this.hideHistory = !this.hideHistory;
    if (!this.hideHistory) this.hideTasks = true;
    this.expandHistoryDetail = this.expandTaskDetail;

    if (this.hideTasks && this.hideHistory) this.panelRows = 1;
    if (this.hideTasks && !this.hideHistory) this.panelRows = 2;
    if (!this.hideTasks && this.hideHistory) this.panelRows = 2;
  }

}
