import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Entities, EveryEntity } from 'src/app/models';
//import { CompileShallowModuleMetadata } from '@angular/compiler';
import { MatCardModule } from '@angular/material/card';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { EnvService } from 'src/app/env.service';

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html',
  styleUrls: ['./entities-container.component.css'],
})
export class EntitiesContainerComponent implements OnInit {
  constructor(public data: DataService, public env: EnvService) {}

  ngOnInit(): void {
    this.panelRows = 1; //this.hideHistory && this.hideFiles ? 1 : 2;
    this.showFileFields = [];
    this.entityTypes = this.data.entityTypes;
    if (this.data.lg)
      console.log(new Date().getTime(), 'loaded:entities-container');
    this.data.progress += 1;
  }

  entityTypes: Entities<EveryEntity>;
  title = 'SSS';
  name: string = 'Max';

  showPanelRight = false;
  hidePosts = true;
  isHalf = false;

  hideTasks = false;
  hideAudits = true;
  hideHistory = true;
  hideFiles = true;
  panelRows = 1;

  expandTaskDetail = false;
  expandHistoryDetail = false;
  expandFilesDetail = false;

  innerWidth: any;
  showFileFields: string[];
  isShowAllFiles = true;

  hidePrimary = false;
  hideSecondary = true;
  hideOptional = true;
  hideCustom = true;
  hideDetailFiles = true;
  hideUsers = true;
  hideContacts = true;
  hideHeader = true;
  hideMeetings = true;
  hideReminders = true;

  entityType = 0;
  entityKey = 0;

  isPageLoaded: string[] = [];
  isPageLoaded_index = 0;
  isPageLoaded_CalledToLoad: string[] = [];

  entities = [
    'Entity Name',
    'Registration Number',
    'Previous Name',
    'Code',
    'Suffix',
    'Country',
    'Industry',
    'Representative Office',
    'Foreign branch',
    'Incorporation Date',
    'Anniversary (month)',
    'Business Start Date',
    'Financial year end (month)',
    'Income Tax Number',
    'VAT Number',
    'Registered office address',
    'Postal address',
    'Business Area',
    'Business Division',
    'Legal classification',
    'Consolidated',
    'Entity status',
    'Entity status tiering',
    'Accounting classification',
    'Accounting classification tiering',
    'Direct parent/ownership',
    'Absa shareholding in entity (%)',
    'Appointed company secretary',
    'Internal secretary representative',
    'Entity Executive',
    'Entity Financial Officer',
    'Public Officer (income tax)',
  ];

  get pagesAreExpanded() {
    return (
      !this.hidePrimary &&
      !this.hideSecondary &&
      !this.hideOptional &&
      !this.hideCustom &&
      !this.hideDetailFiles &&
      !this.hideContacts &&
      !this.hideHeader &&
      !this.hideMeetings &&
      !this.hideReminders
    );
  }

  setHidePage(that: any, hidePage: string, setValue: boolean) {
    that[hidePage] = setValue;
  }

  expandContractAllPages() {
    let needToHide = this.pagesAreExpanded;
    let btns = ['hideHeader','hidePrimary','hideSecondary','hideOptional', 'hideCustom', 'hideDetailFiles', 'hideContacts', 'hideMeetings', 'hideReminders'];
    for (let i=0;i<btns.length;i++){
      setTimeout(this.setHidePage, (i+1)*3, this, btns[i], needToHide);
    }
    
    // setTimeout(this.setHidePage, 10, this, 'hidePrimary', needToHide);
    // setTimeout(this.setHidePage, 20, this, 'hideSecondary', needToHide);
    // setTimeout(this.setHidePage, 30, this, 'hideOptional', needToHide);
    // setTimeout(this.setHidePage, 40, this, 'hideCustom', needToHide);
    // setTimeout(this.setHidePage, 50, this, 'hideDetailFiles', needToHide);
    // //setTimeout(this.setHidePage,10,//this.hideUsers needToHide;
    // setTimeout(this.setHidePage, 60, this, 'hideContacts', needToHide);
    // setTimeout(this.setHidePage, 80, this, 'hideMeetings', needToHide);
    // setTimeout(this.setHidePage, 90, this, 'hideReminders', needToHide);
  }

  getIsLoaded(setTo: boolean, key: string, doLazy: boolean = true) {
    let r: boolean;
    if (setTo) {
      r = setTo;
      if (this.isPageLoaded.indexOf(key) < 0) {
        this.isPageLoaded.push(key);
      }
    } else {
      r = this.isPageLoaded.indexOf(key) > -1;
      //if not loaded load later
      if (!r)
        if (this.isPageLoaded_CalledToLoad.indexOf(key) == -1) {
          this.isPageLoaded_CalledToLoad.push(key);
          if (doLazy && this.isPageLoaded.indexOf(key) == -1) {
            this.isPageLoaded_index += 1;
            setTimeout(
              this.delayLoader,
              this.isPageLoaded_index * 3000,
              key,
              this.isPageLoaded
            );
          }
        }
    }
    return r;
  }

  delayLoader(key: string, isPageLoaded: string[]) {
    //optimise lazy loader
    if (isPageLoaded.indexOf(key) == -1) isPageLoaded.push(key);
  }

  get entityTypeName(): string {
    return this.entityTypes.get(this.entityType).name.toLowerCase();
  }

  doEntityTypeChange(event: any) {
    this.entityType = +event;
  }

  doEntityChange(event: any) {
    this.entityKey = +event;
  }

  doSelectFields(selectedFields: string[]) {
    this.showFileFields = selectedFields;
  }

  showFilesAll() {
    this.isShowAllFiles = true;
    this.showHideFiles('');
  }

  doFile(event: any) {
    this.isShowAllFiles = false;
    this.showHideFiles(event);
  }
  doRecord(event: any) {
    this.showHideAudits();
  }

  doTask(event: any) {
    this.showHideTasks();
  }

  doSave_EntityDetail() {}
  doCancel_EntityDetail() {}

  private max(v: number, w: number) {
    if (v > w) return v;
    else return w;
  }

  showHideAudits() {
    this.hideAudits = !this.hideAudits;
    this.hidePosts = !this.hideAudits;
    this.hideTasks = !this.hideAudits;
  }
  showHideTasks() {
    this.hideTasks = !this.hideTasks;
    this.hidePosts = !this.hideTasks;
    this.hideAudits = !this.hideTasks;
  }
  showHideArticles() {
    this.hidePosts = !this.hidePosts;
    this.hideTasks = !this.hidePosts;
    this.hideAudits = !this.hideTasks;
  }

  showHideFiles(attribute: string, doShow: boolean = null) {
    this.showHide_(2, doShow);
    this.setPaneRowCount();
    if (attribute.length > 0) this.showFileFields = [attribute];
    else {
      this.showFileFields = this.entities;
    }
  }

  showHideHistory(doShow: boolean = null) {
    // this.showHide_(1, doShow);
    // this.setPaneRowCount();
    this.showHideAudits;
  }

  private showHide_(hideIndex: number, doShow: boolean = null) {
    let b0 = false;
    let b1 = false;
    let b2 = false;
    let bD0 = false;
    let bD1 = false;
    let bD2 = false;

    if (hideIndex === 0) {
      //b0 = this.hideTasks;
      b1 = this.hideHistory;
      b2 = this.hideFiles;
      bD0 = this.expandTaskDetail;
      bD1 = this.expandHistoryDetail;
      bD2 = this.expandFilesDetail;
    } else if (hideIndex === 1) {
      //b1 = this.hideTasks;
      b0 = this.hideHistory;
      b2 = this.hideFiles;
      bD1 = this.expandTaskDetail;
      bD0 = this.expandHistoryDetail;
      bD2 = this.expandFilesDetail;
    } else if (hideIndex === 2) {
      //b2 = this.hideTasks;
      b1 = this.hideHistory;
      b0 = this.hideFiles;
      bD2 = this.expandTaskDetail;
      bD1 = this.expandHistoryDetail;
      bD0 = this.expandFilesDetail;
    }

    b0 = !b0;

    if (!b0) {
      b1 = true;
      b2 = true;
    }
    bD0 = bD1 || bD2;

    if (hideIndex === 0) {
      //this.hideTasks = b0;
      this.hideHistory = b1;
      this.hideFiles = b2;
      //this.expandTaskDetail = bD0;
      this.expandHistoryDetail = bD1;
      this.expandFilesDetail = bD2;
    } else if (hideIndex === 1) {
      //this.hideTasks = b1;
      this.hideHistory = b0;
      this.hideFiles = b2;
      // this.expandTaskDetail = bD1;
      this.expandHistoryDetail = bD0;
      this.expandFilesDetail = bD2;
    } else if (hideIndex === 2) {
      //this.hideTasks = b2;
      this.hideHistory = b1;
      this.hideFiles = b0;
      //this.expandTaskDetail = bD2;
      this.expandHistoryDetail = bD1;
      this.expandFilesDetail = bD0;
    }
  }

  setPaneRowCount() {
    //this.panelRows = 1;
    if (this.hideHistory && this.hideFiles) this.panelRows = 1;

    // if (!this.hideHistory && !this.hideFiles)
    //   this.panelRows = 1;
    if (!this.hideHistory && this.hideFiles) this.panelRows = 2;
    if (this.hideHistory && !this.hideFiles) this.panelRows = 2;

    // if (this.hideHistory && this.hideFiles)
    //   this.panelRows = 1;
    if (!this.hideHistory && this.hideFiles) this.panelRows = 2;
    if (this.hideHistory && !this.hideFiles) this.panelRows = 2;
  }

  isFullPanel(): boolean {
    return this.panelRows == 0 ? true : this.panelRows == 1;
  }
  isHalfPanel(): boolean {
    return this.panelRows == 0 ? false : this.panelRows == 2;
  }

  // showForEntityType(label: number): boolean{
  //   return this.entityType== label;
  // }
}
