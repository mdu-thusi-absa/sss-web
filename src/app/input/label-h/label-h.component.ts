import { Component, OnInit, Input } from '@angular/core';
import { Entity } from 'src/app/data/data-entity-paren';

@Component({
  selector: 'app-label-h',
  templateUrl: './label-h.component.html',
  styleUrls: ['./label-h.component.css']
})
export class LabelHComponent implements OnInit {
  _title = '';
  @Input() set title(v: string){
    this._title = Entity.sentanceCase(v);
  }
  @Input() hr = false;
  constructor() { }

  ngOnInit(): void {
  }

}
