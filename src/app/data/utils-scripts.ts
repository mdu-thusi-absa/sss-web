// setFocusOnSelecetedElement(){
//     let topPos = this.keysVisisble.indexOf(this.selectedEntityKey) * 31 //height of row
//     setTimeout(this.updateScroll, 50,this.eid,topPos)
//   }

import { EntityAddress } from './data-entity-kids';

export function getHtmlElementById_Top(id: string): number {
  let e = getHtmlElementById(id);
  return getJQueryElementTop(e);
}

export function getHtmlElementById_Height(id: string): number {
  let e = getHtmlElementById(id);
  return getJQueryElementHeight(e);
}

export function getHtmlElementById(id: string): JQuery<HTMLElement> {
  return $('#' + id);
}

export function getJQueryElementTop(element: JQuery<HTMLElement>): number {
  return element[0].getBoundingClientRect().top; //+ $(window)['scrollTop']();
}

export function getJQueryElementHeight(element: JQuery<HTMLElement>): number {
  return element[0].getBoundingClientRect().height; //+ $(window)['scrollTop']();
}

export function updateElementScroll(id: string, scrollTop: number) {
  let tableContentId = id;
  let elementTableContent = document.getElementById(tableContentId);
  elementTableContent.scrollTop = scrollTop;
}

export function objectHasAttribute(object: object, fieldName): boolean {
  return Object.keys(object).indexOf(fieldName) > -1;
}

export function parseJson(json: string): object{
  let o = JSON.parse(json)
  let keys = Object.keys(o)
  keys.forEach((fieldName)=>{
    let v = o[fieldName]
    if (fieldName.slice(-4)=='Date'){
      o[fieldName] = new Date(v)
    }else {
      o[fieldName] = v
    }
  })
  return o
}

export function replaceDateStrWithDateInObject(object: object): object{
  let keys = Object.keys(object)
  keys.forEach((fieldName)=>{
    let v = object[fieldName]
    if (fieldName.slice(-4)=='Date'){
      object[fieldName] = new Date(v)
    }else {
      object[fieldName] = v
    }
  })
  return object
}