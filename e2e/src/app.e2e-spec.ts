import { AppPage } from './app.po';
import * as fs from 'fs';
import { browser, logging,promise } from 'protractor';

// async function writeScreenShot(data: promise.Promise<string>, filename: string) {
//   fs.mkdirSync('screenshots', { recursive: true });
//   const config = await browser.getProcessedConfig();
//   const stream = fs.createWriteStream(`screenshots/${filename}.png`);
//   //stream.write(Buffer.from(data, 'base64'));
  
//   //data.then((v)=>{
//   await stream.write(Buffer.from(data, 'base64'));
//   //})
//   stream.end();
// }

describe('SSS Angular App: e2e testing', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`filter entities by 'v'`, () => {
    page.navigateTo();
    // browser.waitForAngular();
    let lf = page.getLeft_Filter();
    lf.sendKeys('reg');
    let list = page.getLeft_FilterRowsVisible();
    expect(list.count()).toBe(2); 
    browser.sleep(2000);
    //count the header
    //writeScreenShot(browser.takeScreenshot(), '1 Start');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});

/*
browser.wait(function() {
   return element(by.id('create')).isPresent();
}, 5000);
element(by.id('create')).click();


element(by.id('create')).isPresent() // Be careful with this: element is often present while it's not displayed...
element(by.id('create')).isEnabled() //Enabled/disabled, as in ng-disabled...
element(by.id('create')).isDisplayed() //Is element currently visible/displayed?

element(by.id('user_name'))
element(by.css('#myItem'))
element(by.model('person.name')) // refers to ng-model directive
element(by.binding('person.concatName')); // refers to ng-bind directive
element(by.textarea('person.extraDetails'));
element (by.input( 'username' ));
element (by.input( 'username' )).clear();
element(by.buttonText('Save'));
element(by.partialButtonText('Save'));
element(by.linkText('Save'));
element(by.partialLinkText('Save'));
element(by.css('[ng-click="cancel()"]')); 
var dog = element(by.cssContainingText('.pet', 'Dog'));
var allOptions = element.all(by.options('c c in colors')); //When ng-options is used with selectbox

var list = element.all(by.css('.items));
var list2 = element.all(by.repeater('personhome.results'));
var list3 = element.all(by.xpath('//div
expect(list.count()).toBe(3);
expect(list.get(0).getText()).toBe('First’)
expect(list.get(1).getText()).toBe('Second’)
expect(list.first().getText()).toBe('First’)
expect(list.last().getText()).toBe('Last’)

element(by.id('user_name').sendKeys("user1");
sendKeys(protractor.Key.ENTER);
sendKeys(protractor.Key.TAB);
element(by.id('user_name')).clear()

to(N­ot)­Be( null | true | false )
to(N­ot)­Equ­al( value )
to(N­ot)­Mat­ch( regex | string )
toBe­Def­ine­d()
toBe­Und­efi­ned()
toBe­Nul­l()
toBe­Tru­thy()
toBe­Fal­sy()
to(N­ot)­Con­tain( string )
toBe­Les­sTh­an( number )
toBe­Gre­ate­rTh­an( number )
toBe­NaN()
toBe­Clo­seTo( number, precision )
toTh­row()

*/
