// import {
//   browser,
//   by,
//   element,
//   ElementFinder,
//   ElementArrayFinder,
// } from 'protractor';

// export class AppPage {
//   navigateTo(): Promise<unknown> {
//     return browser.get(browser.baseUrl) as Promise<unknown>;
//   }

//   getTitleText(): Promise<string> {
//     return element(by.id('input-filter-add-2')).getText() as Promise<string>;
//   }

//   getLeft_Filter(): ElementFinder {
//     return element(by.id('input-filter-add-2')) as ElementFinder;
//   }

//   getLeft_FilterRowsVisible(): ElementArrayFinder {
//     // return element(by.id('panel-entities-1-a-')) as ElementFinder;
//     //return element.all(by.css('tr td a')) as ElementArrayFinder;
//     // .tr-show
//     return element.all(by.css('.table-show .tr-show')) as ElementArrayFinder;
//     //return this.getVisibleElements('tr');
//   }

//   // getLeft_FilterAnchorsHidden(): ElementArrayFinder {
//   //   // return element(by.id('panel-entities-1-a-')) as ElementFinder;
//   //   return element.all(by.css('tr hidden td a')) as ElementArrayFinder;
//   // }

//   // getFirstVisibleProtractorElement(selector) {
//   //   var allElementsOfSelector = element.all(by.css(selector.locator().value));
//   //   return allElementsOfSelector
//   //     .filter(function (elem) {
//   //       return elem.isDisplayed().then(function (displayedElement) {
//   //         return displayedElement;
//   //       });
//   //     })
//   //     .first();
//   // }

//   getVisibleElements(selector): ElementArrayFinder{
//     let allElementsOfSelector = element.all(by.css(selector));
//     return allElementsOfSelector.filter((elem)=> {
//         return elem.isDisplayed().then((displayedElement)=>{
//              return displayedElement;
//         });
//     })
//   }
// }
