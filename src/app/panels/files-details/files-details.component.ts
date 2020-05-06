import {
  Component,
  OnInit,
  Input,
  ElementRef, ViewChild, AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-files-details',
  templateUrl: './files-details.component.html',
  styleUrls: ['./files-details.component.css'],
})
export class FilesDetailsComponent implements OnInit {
  @Input() panelRows = 2;
  @Input() showFileFields: string[];
  filterText = '';
  hideWhen = true;
  hideWho = true;
  colspanFile = 3;
  thTop = '67px';
  colWidth = 0;
  colLeft0 = "25px"
  colLeft1 = "75px"; //"82.74px";
  colLeft2 = "125px"; //"165.3px";
  isDirty = false;
  isAdd = false;

  @ViewChild('thRow1') thRow1: ElementRef;
  @ViewChild('thCol1') thCol1: ElementRef;
  @ViewChild('thCol2') thCol2: ElementRef;
  @ViewChild('thCol3') thCol3: ElementRef;
  thRow1Height = 0;
  thCol1Left = 0;
  thCol2Left = 0;
  thCol3Width = 0;

  ngAfterViewInit() {
 
}

ngAfterViewChecked(){
  
}

ngAfterContentInit (){
  
}

  // entities= ['Entity Name',
  // 'Registration Number',
  // 'Previous Name',
  // 'Code',
  // 'Suffix',
  // 'Country',
  // 'Indusry',
  // 'Representative Office',
  // 'Foreign branch',
  // 'Incorporation Date',
  // 'Anniversary (month)',
  // 'Business Start Date',
  // 'Financial year end (month)',
  // 'Income Tax Number',
  // 'VAT Number',
  // 'Registered office address',
  // 'Postal address',
  // 'Business Area',
  // 'Business Division',
  // 'Legal classification',
  // 'Consolidated',
  // 'Entity status',
  // 'Entity status tiering',
  // 'Accounting classification',
  // 'Accounting classification tiering',
  // 'Direct parent/ownership',
  // 'Absa shareholding in entity (%)',
  // 'Appointed company secretary',
  // 'Internal secretary representative',
  // 'Entity Executive',
  // 'Entity Financial Officer',
  // 'Public Officer (income tax)']

  data = [
    [
      '82/03/13',
      'vlad',
      'MOI.pdf',
      'Savings her pleased are several started females met.',
      [
        'Entity Name',
        'Country',
        'Industry',
        'Representative Office',
        'Foreign branch',
        'Anniversary (month)',
        'Financial year end (month)',
        'Income Tax Number',
        'VAT Number',
        'Registered office address',
        'Business Area',
        'Legal classification',
        'Consolidated',
        'Entity status',
        'Accounting classification tiering',
        'Direct parent/ownership',
        'Absa shareholding in entity (%)',
        'Appointed company secretary',
        'Internal secretary representative',
        'Public Officer (income tax)',
      ],
    ],
    [
      '20/02/27',
      'sasha',
      '‡.pdf',
      'Short her not among being any.',
      [
        'Country',
        'Representative Office',
        'Foreign branch',
        'Incorporation Date',
        'Anniversary (month)',
        'VAT Number',
        'Legal classification',
        'Consolidated',
        'Direct parent/ownership',
        'Absa shareholding in entity (%)',
        'Appointed company secretary',
      ],
    ],
    [
      '18/10/27',
      'dean',
      'q.pdf',
      'Thing of judge fruit charm views do.',
      [
        'Previous Name',
        'Suffix',
        'Foreign branch',
        'Financial year end (month)',
        'Registered office address',
        'Business Area',
        'Consolidated',
        'Entity status',
        'Entity status tiering',
        'Accounting classification',
        'Accounting classification tiering',
        'Internal secretary representative',
        'Entity Financial Officer',
      ],
    ],
    [
      '17/05/27',
      'ulrich',
      '=.pdf',
      'Miles mr an forty along as he.',
      [
        'Previous Name',
        'Code',
        'Suffix',
        'Indusry',
        'Incorporation Date',
        'Business Start Date',
        'Financial year end (month)',
        'Registered office address',
        'Postal address',
        'Legal classification',
        'Entity status tiering',
        'Accounting classification',
        'Appointed company secretary',
      ],
    ],
    [
      '15/07/27',
      'dean',
      'q.pdf',
      'She education get middleton day agreement performed preserved unwilling.',
      [
        'Registration Number',
        'Previous Name',
        'Code',
        'Incorporation Date',
        'Anniversary (month)',
        'VAT Number',
        'Registered office address',
        'Business Area',
        'Business Division',
        'Legal classification',
        'Consolidated',
        'Entity status',
        'Entity status tiering',
        'Accounting classification',
        'Accounting classification tiering',
        'Absa shareholding in entity (%)',
        'Internal secretary representative',
        'Entity Executive',
      ],
    ],
    [
      '14/07/27',
      'vlad',
      '.pdf',
      'Do however as pleased offence outward beloved by present.',
      [
        'Entity Name',
        'Registration Number',
        'Previous Name',
        'Code',
        'Country',
        'Indusry',
        'Anniversary (month)',
        'Financial year end (month)',
        'Postal address',
        'Business Area',
        'Consolidated',
        'Accounting classification',
        'Direct parent/ownership',
        'Internal secretary representative',
      ],
    ],
    [
      '14/12/27',
      'sasha',
      '.pdf',
      'By outward neither he so covered amiable greater.',
      [
        'Registration Number',
        'Country',
        'Foreign branch',
        'Business Start Date',
        'Business Division',
        'Legal classification',
        'Consolidated',
        'Entity status',
        'Direct parent/ownership',
        'Appointed company secretary',
        'Internal secretary representative',
      ],
    ],
    [
      '14/12/27',
      'dean',
      'R.pdf',
      'Juvenile proposal betrayed he an informed weddings followed.',
      [
        'Registration Number',
        'Previous Name',
        'Code',
        'Suffix',
        'Indusry',
        'Foreign branch',
        'Anniversary (month)',
        'Postal address',
        'Business Area',
        'Legal classification',
        'Entity status',
        'Accounting classification tiering',
        'Direct parent/ownership',
        'Appointed company secretary',
        'Internal secretary representative',
        'Entity Executive',
        'Public Officer (income tax)',
      ],
    ],
    [
      '14/11/27',
      'ulrich',
      'E.pdf',
      'Precaution day see imprudence sympathize principles.',
      [
        'Code',
        'Country',
        'Indusry',
        'Incorporation Date',
        'VAT Number',
        'Registered office address',
        'Postal address',
        'Business Division',
        'Consolidated',
        'Entity status',
        'Accounting classification tiering',
        'Direct parent/ownership',
        'Appointed company secretary',
        'Internal secretary representative',
        'Entity Executive',
      ],
    ],
    [
      '17/04/27',
      'dean',
      '“.pdf',
      'At full leaf give quit to in they up. ',
      [
        'Registration Number',
        'Previous Name',
        'Suffix',
        'Country',
        'Indusry',
        'Representative Office',
        'Anniversary (month)',
        'Financial year end (month)',
        'VAT Number',
        'Postal address',
        'Business Division',
        'Consolidated',
        'Entity status tiering',
        'Accounting classification',
        'Accounting classification tiering',
        'Direct parent/ownership',
        'Internal secretary representative',
        'Entity Executive',
        'Entity Financial Officer',
        'Public Officer (income tax)',
      ],
    ],
    [
      '14/06/27',
      'vlad',
      '.pdf',
      'Do in laughter securing smallest sensible no mr hastened.',
      [
        'Entity Name',
        'Previous Name',
        'Code',
        'Suffix',
        'Country',
        'Representative Office',
        'Foreign branch',
        'Incorporation Date',
        'Financial year end (month)',
        'Income Tax Number',
        'Business Area',
        'Business Division',
        'Consolidated',
        'Entity status',
        'Entity status tiering',
        'Direct parent/ownership',
        'Absa shareholding in entity (%)',
        'Appointed company secretary',
        'Internal secretary representative',
        'Entity Executive',
        'Public Officer (income tax)',
      ],
    ],
    [
      '18/10/27',
      'sasha',
      'B.pdf',
      'As perhaps proceed in in brandon of limited unknown greatly.',
      [
        'Code',
        'Representative Office',
        'Incorporation Date',
        'Anniversary (month)',
        'Business Start Date',
        'Financial year end (month)',
        'Postal address',
        'Business Area',
        'Business Division',
        'Consolidated',
        'Entity status',
        'Accounting classification',
        'Accounting classification tiering',
        'Direct parent/ownership',
        'Internal secretary representative',
        'Entity Financial Officer',
      ],
    ],
    [
      '14/11/27',
      'dean',
      'š.pdf',
      'Distrusts fulfilled happiness unwilling as explained of difficult.',
      [
        'Indusry',
        'Representative Office',
        'Financial year end (month)',
        'VAT Number',
        'Registered office address',
        'Postal address',
        'Business Division',
        'Entity status tiering',
        'Absa shareholding in entity (%)',
        'Appointed company secretary',
        'Internal secretary representative',
        'Entity Executive',
        'Entity Financial Officer',
        'Public Officer (income tax)',
      ],
    ],
    [
      '17/07/27',
      'ulrich',
      'Z.pdf',
      'No landlord of peculiar ladyship attended if contempt ecstatic.',
      [
        'Registration Number',
        'Previous Name',
        'Code',
        'Suffix',
        'Foreign branch',
        'Incorporation Date',
        'Postal address',
        'Entity status tiering',
        'Accounting classification',
        'Direct parent/ownership',
        'Entity Executive',
        'Entity Financial Officer',
      ],
    ],
    [
      '15/09/27',
      'dean',
      'n.pdf',
      'Loud wish made on is am as hard.',
      [
        'Entity Name',
        'Registration Number',
        'Previous Name',
        'Code',
        'Suffix',
        'Country',
        'Indusry',
        'Foreign branch',
        'Anniversary (month)',
        'Income Tax Number',
        'VAT Number',
        'Postal address',
        'Business Area',
        'Consolidated',
        'Entity status tiering',
        'Internal secretary representative',
        'Entity Executive',
      ],
    ],
    [
      '12/04/27',
      'vlad',
      '….pdf',
      'Court so avoid in plate hence.',
      [
        'Code',
        'Country',
        'Indusry',
        'Foreign branch',
        'Income Tax Number',
        'VAT Number',
        'Registered office address',
        'Postal address',
        'Business Division',
        'Consolidated',
        'Accounting classification',
        'Accounting classification tiering',
        'Appointed company secretary',
        'Internal secretary representative',
        'Entity Executive',
        'Public Officer (income tax)',
      ],
    ],
    [
      '18/08/27',
      'sasha',
      'I.pdf',
      'Of received mr breeding concerns peculiar securing landlord.',
      [
        'Entity Name',
        'Registration Number',
        'Previous Name',
        'Suffix',
        'Country',
        'Anniversary (month)',
        'Business Start Date',
        'Financial year end (month)',
        'VAT Number',
        'Registered office address',
        'Business Area',
        'Business Division',
        'Legal classification',
        'Entity status',
        'Entity status tiering',
        'Accounting classification tiering',
        'Absa shareholding in entity (%)',
        'Internal secretary representative',
        'Entity Executive',
      ],
    ],
    [
      '13/02/27',
      'dean',
      'y.pdf',
      'Spot to many it four bred soon well to.',
      [
        'Entity Name',
        'Registration Number',
        'Previous Name',
        'Code',
        'Indusry',
        'Representative Office',
        'Foreign branch',
        'Incorporation Date',
        'Anniversary (month)',
        'Financial year end (month)',
        'Registered office address',
        'Postal address',
        'Business Area',
        'Consolidated',
        'Entity status',
        'Accounting classification',
        'Accounting classification tiering',
        'Direct parent/ownership',
        'Absa shareholding in entity (%)',
        'Appointed company secretary',
        'Public Officer (income tax)',
      ],
    ],
    [
      '12/11/27',
      'ulrich',
      '˜.pdf',
      'Or am promotion in no departure abilities.',
      [
        'Previous Name',
        'Code',
        'Suffix',
        'Representative Office',
        'Foreign branch',
        'Incorporation Date',
        'Anniversary (month)',
        'Income Tax Number',
        'VAT Number',
        'Postal address',
        'Consolidated',
        'Entity status tiering',
        'Accounting classification',
        'Entity Executive',
        'Entity Financial Officer',
        'Public Officer (income tax)',
      ],
    ],
    [
      '15/11/27',
      'dean',
      'o.pdf',
      'Whatever landlord yourself at by pleasure of children be. ',
      [
        'Entity Name',
        'Registration Number',
        'Code',
        'Indusry',
        'Representative Office',
        'Financial year end (month)',
        'Income Tax Number',
        'Postal address',
        'Business Area',
        'Business Division',
        'Legal classification',
        'Accounting classification',
        'Accounting classification tiering',
        'Direct parent/ownership',
        'Public Officer (income tax)',
      ],
    ],
    [
      '12/06/27',
      'vlad',
      'l.pdf',
      'Mind what no by kept.',
      [
        'Entity Name',
        'Registration Number',
        'Previous Name',
        'Code',
        'Country',
        'Indusry',
        'Incorporation Date',
        'Anniversary (month)',
        'Business Start Date',
        'Financial year end (month)',
        'VAT Number',
        'Business Area',
        'Business Division',
        'Consolidated',
        'Entity status tiering',
        'Accounting classification tiering',
        'Internal secretary representative',
        'Public Officer (income tax)',
      ],
    ],
    [
      '20/01/27',
      'sasha',
      'L.pdf',
      'Celebrated no he decisively thoroughly.',
      [
        'Registration Number',
        'Previous Name',
        'Suffix',
        'Incorporation Date',
        'Anniversary (month)',
        'VAT Number',
        'Postal address',
        'Business Division',
        'Entity status',
        'Entity status tiering',
        'Accounting classification',
        'Entity Executive',
        'Entity Financial Officer',
        'Public Officer (income tax)',
      ],
    ],
    [
      '20/01/27',
      'dean',
      '[.pdf',
      'Our asked sex point her she seems.',
      [
        'Registration Number',
        'Previous Name',
        'Indusry',
        'Incorporation Date',
        'Business Start Date',
        'Income Tax Number',
        'Postal address',
        'Business Area',
        'Consolidated',
        'Entity status tiering',
        'Accounting classification',
        'Absa shareholding in entity (%)',
        'Appointed company secretary',
        'Entity Financial Officer',
      ],
    ],
    [
      '19/12/27',
      'ulrich',
      'C.pdf',
      'New plenty she horses parish design you.',
      [
        'Previous Name',
        'Code',
        'Suffix',
        'Indusry',
        'Anniversary (month)',
        'Financial year end (month)',
        'VAT Number',
        'Registered office address',
        'Business Division',
        'Legal classification',
        'Consolidated',
        'Entity status',
        'Entity status tiering',
        'Absa shareholding in entity (%)',
        'Entity Executive',
      ],
    ],
  ];

  constructor() {}

  ngOnInit(): void {
    this.showFileFields = [];
  }

  doAdd() {
    this.isAdd = true;
    //this.isDirty = false;
    //console.log('doAdd');
  }

  doSave(){
    //console.log('saving');
    //save to DB
    //if saved then mark it so
    //this.isAdd = false;
    this.isDirty = false;
  }

  doCancel(){
    //console.log('reset');
    this.isAdd = false;
    this.isDirty = false;
  }

  doChangeCheckbox(event: any){
    console.log('doChangeCheckbox')
    this.isDirty = true;
  }

  isCheckedField(dataFields: string[], fieldName: string) {
    let r = -1;
    r = dataFields.indexOf(fieldName);
    return r > -1;
  }

  showDataRow(dataFields: string | string[]) {
    let r = false;
    if (this.showFileFields.length == 0) r = false;
    else {
      for (let s of this.showFileFields) {
        if (dataFields.indexOf(s) > -1) r = true;
      }
    }
    return r;
  }

  showIfInFilter(dataRow: any){
    return dataRow[2].toLowerCase().indexOf(this.filterText.toLowerCase())>-1
  }

  getCountFiltered() {
    return this.data.filter((e) => this.showDataRow(e[4]) && this.showIfInFilter(e)).length;
  }

  doFilter(event: any) {
    this.filterText = event;
  }

  doCheckField(option: string){
    if (option=="when"){
      this.hideWhen = !this.hideWhen;
    }
    if (option=="who"){
      this.hideWho = !this.hideWho;
    }
    if (this.hideWhen && this.hideWho) this.colspanFile = 3;
    else if(this.hideWhen && !this.hideWho) this.colspanFile = 2;
    else if(!this.hideWhen && this.hideWho) this.colspanFile = 2;
    else if(!this.hideWhen && !this.hideWho) this.colspanFile = 1;
  }
}
