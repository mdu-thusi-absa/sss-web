// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

/**
 * @type { import("protractor").Config }
 */

// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
// //cleanDestination: false,
// var reporter = new HtmlScreenshotReporter({
//   dest: 'target/screenshots',
//   filename: 'my-report.html'
// });

// var HtmlReporter = require('protractor-html-screenshot-reporter');

// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

// var reporter = new HtmlScreenshotReporter({
//   dest: 'target/screenshots',
//   filename: 'my-report.html'
// });

// var AllureReporter = require('jasmine-allure-reporter');
// jasmine.getEnv().addReporter(new AllureReporter({
//   resultsDir: 'allure-results'
// }));
// onPrepare: function() {
//   var AllureReporter = require('jasmine-allure-reporter');
//   jasmine.getEnv().addReporter(new AllureReporter({
//     resultsDir: 'allure-results'
//   }));
// }



exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

      
  }



};

// .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
