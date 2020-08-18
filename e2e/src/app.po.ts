import { browser, by, element, ElementFinder, WebElement, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('input-filter-add-1')).getText() as Promise<string>;
  }

  getLeft_Filter(): ElementFinder {
    return element(by.id('input-filter-add-1')) as ElementFinder;
  }
}
