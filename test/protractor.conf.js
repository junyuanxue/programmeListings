exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.js'],
  baseUrl: 'http://localhost:8080',
  onPrepare: function() {
    require('protractor-http-mock').config = {
        rootDirectory: __dirname, // default value: process.cwd()
        protractorConfig: 'protractor.conf.js' // default value: 'protractor-conf.js'
    };

    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
}
