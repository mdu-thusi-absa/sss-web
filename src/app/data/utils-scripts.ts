// setFocusOnSelecetedElement(){
//     let topPos = this.keysVisisble.indexOf(this.selectedEntityKey) * 31 //height of row
//     setTimeout(this.updateScroll, 50,this.eid,topPos)
//   }

  export function getJQueryElement(id:string): JQuery<HTMLElement>{
    return $('#' + id);
  }

  export function getJQueryElementTop(element: JQuery<HTMLElement>):number{
    return element[0].getBoundingClientRect().top //+ $(window)['scrollTop']();
  }

  export function updateElementScroll(id: string,scrollTop: number) {
    let tableContentId = id
    let elementTableContent = document.getElementById(tableContentId);
    elementTableContent.scrollTop = scrollTop
  }