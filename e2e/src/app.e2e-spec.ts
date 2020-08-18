import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`filter entities by d'`, () => {
    page.navigateTo();
    // browser.sleep(1000)
    let lf = page.getLeft_Filter();
    lf.sendKeys('d');
    browser.sleep(2000)
    //console.log(t);
    
    // expect(page.getTitleText()).toEqual('sss app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
