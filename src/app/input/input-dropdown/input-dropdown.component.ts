import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css'],
})
export class InputDropdownComponent implements OnInit {
  showDrop = true;
  position = { top: 0, left: 0 };
  msg = '';
  id = '0'

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.id = '' + Math.floor(Math.random() * 10000);   
    this.id = this.data.getID();
  }

  setPosition(){
    let el = $('#dropdown-button-' + this.id);

      var leftPos  = el[0].getBoundingClientRect().left   + $(window)['scrollLeft']();
      var rightPos = el[0].getBoundingClientRect().right  + $(window)['scrollLeft']();
      var topPos   = el[0].getBoundingClientRect().top    + $(window)['scrollTop']();
      var bottomPos= el[0].getBoundingClientRect().bottom + $(window)['scrollTop']();
      //console.log({leftPos:leftPos,rightPos:rightPos,topPos:topPos,bottomPos:bottomPos})

      let dialog = $('#dropdown-dialog-' + this.id);
      
      dialog[0].style.left = leftPos+'px';
      dialog[0].style.top = (bottomPos) + 'px';
      dialog[0].style.width = (rightPos - leftPos) + 'px';
      // console.log(this.id,'dialog',dialog);
      // console.log('el',el);
      // console.log(dialog[0].style.left);
  }

  ngAfterViewInit(): void{
    
  }

  selectMe(key: number){
    //console.log('selected',key);
    
  }

  get thisY(){
    return this.position.top+27.4;
  }


  get thisX(){
    return this.position.left;
  }

  ngAfterViewChecked(): void{
    //this.getPosition(this.elRef.nativeElement);
  }
  
  // move(ref: ElementRef) {
  //   console.log('offset',this.elRef.nativeElement.offsetLeft);
  // }

  doModal(event: any) {

    this.showDrop = true;
    this.setPosition();
    
  }

  // getPosition(element: any) {


  //   let offsetLeft = 0;
  //   let offsetTop = 0;

  //   let el = element;

  //   while (el) {
  //     offsetLeft += el.offsetLeft;
  //     offsetTop += el.offsetTop; 
  //     console.log(el, el.offsetTop,el.offsetTop);
  //     el = el.parentElement;
  //   }
  //   this.position = { top: offsetTop, left: offsetLeft };
  // }
}
