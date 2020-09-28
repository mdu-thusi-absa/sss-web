import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-material',
  templateUrl: './test-material.component.html',
  styleUrls: ['./test-material.component.css']
})
export class TestMaterialComponent implements OnInit {
  // isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // hide1 = true;

  constructor() {}

  ngOnInit() {
  }

  cancelTaskIs = false

  eid = '0'
  viewAll = false
  showDrop = true
  thisX = 0
  thisY = 0
  dropUp = false
  doModal(event: any) {
    this.viewAll = true;
    this.showDrop = true;
    //this.setPosition(false);
    //this.setFocus(event);
  }

  
}