import { Component, OnInit } from '@angular/core';
import { makeDocForName } from 'src/app/data/doc-build';

@Component({
  selector: 'app-input-gen-doc',
  templateUrl: './input-gen-doc.component.html',
  styleUrls: ['./input-gen-doc.component.css']
})
export class InputGenDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  genDoc(){
    let dataObject = {
      nameCompany: 'Docs are US Inc.'
    }
    //makeDocFromTemplate(url,dataObject,outFileName)
    makeDocForName('Cor39',dataObject)
  }

}
