import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../../models'


@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  filterText = '';
  rdoActiveDormantAll = 'flash';
  isNewMessage = false;
  @Input() panelRows = 1;
  entities: Entity[] = [
    {name: 'Google Pty Ltd',tasksCount:2,suffix:'', country: 'South Africa',isActive: true},
    {name: 'Microsoft Pty Ltd',tasksCount:3,suffix:'', country: 'South Africa',isActive: true},
    {name: 'Apple Inc',tasksCount:0,suffix:'', country: 'Botswana',isActive: false},
    {name: 'Amazon',tasksCount:0,suffix:'USA', country: 'Ghana',isActive: true},
    {name: 'Amazon',tasksCount:2,suffix:'SA', country: 'Ghana',isActive: true},
    {name: 'Alphabet',tasksCount:1, suffix:'',country: 'Ghana',isActive: false},
    {name: 'Facebook',tasksCount:0,suffix:'', country: 'Kenya',isActive: false},
    {name: 'Alibaba',tasksCount:0,suffix:'', country: 'Kenya',isActive: true},
    {name: 'Tencent Holdings',tasksCount:5,suffix:'', country: 'Mauritius',isActive: false},
    {name: 'Johnson and Johnson',tasksCount:0,suffix:'', country: 'Mauritius',isActive: false},
    {name: 'Walmart',tasksCount:0,suffix:'', country: 'Mozambique',isActive: false},
    {name: 'Nestle',tasksCount:3,suffix:'', country: 'Mozambique',isActive: true},
    {name: 'Samsung',tasksCount:1,suffix:'', country: 'Seychelles',isActive: true},
    {name: 'Procter and Gamble',tasksCount:0,suffix:'', country: 'ZAF',isActive: false},
    {name: 'Intel',tasksCount:4,suffix:'', country: 'TZA',isActive: false},
    {name: 'Cisco Systems',tasksCount:3,suffix:'', country: 'TZA', isActive: false}    
  ];

  constructor() { }

  ngOnInit(): void {
    this.entities.sort(Entity.compare);
  }

  shouldBeHidden(e: Entity): boolean{
    let inFilter = true;
    let inName = true;
    //let inInfo = true;
    if (this.filterText.length>0){
      inName = e.name.toLowerCase().indexOf(this.filterText.toLowerCase())>-1
      //inInfo = e.info.toLowerCase().indexOf(this.filterText.toLowerCase())>-1
      inFilter = inName; // || inInfo;
    }

    let inStatus = true;
    if (this.rdoActiveDormantAll== 'all') inStatus = true;
    else if (this.rdoActiveDormantAll == 'play') inStatus = e.isActive;
    else if (this.rdoActiveDormantAll == 'pause') inStatus = !e.isActive;
    else if (this.rdoActiveDormantAll == 'flash') inStatus = e.tasksCount>0;

    let doShow = inFilter && inStatus;

    return !doShow;
  }

  isFullScreen(){
    return this.panelRows == 1;
  }

  isHalfScreen(){
    return this.panelRows == 2;
  }

  isThirdScreen(){
    return this.panelRows == 3;
  }

  getCount_Active(){
    return this.entities.filter(e => e.isActive).length;
  }

  getCount_Dormant(){
    return this.entities.filter(e => !e.isActive).length;
  }

  getCount_Tasks(){
    return this.entities.filter(e => e.tasksCount>0).length;
  }

  getCount_All(){
    return this.entities.length;
  }

  doFilter(event: any){
    this.filterText = event;
  }

  getCountFiltered(){
    return this.entities.filter(e => !this.shouldBeHidden(e)).length;
  }

  doAdd(){
    this.isNewMessage = true;
  }
  doCancel(){
    this.isNewMessage = false;
  }
}
