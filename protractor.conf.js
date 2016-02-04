// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }],

  //seleniumAddress: 'http://0.0.0.0:4444',
  specs: ['./helpers.e2e.js', 'test/e2e/dist/*.js'],

  baseUrl: 'http://localhost:9000/#/',

  plugins: [{
    path: 'aurelia.protractor.js'
  }],


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
