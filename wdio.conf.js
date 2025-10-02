exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    port: 4723,
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    specs: ['./test/specs/**/*.js'],
    capabilities: [
        {
        // capabilities for local Appium web tests on an Android Emulator - Pixel_11
       
       platformName: 'Android',
       'appium:automationName': 'UiAutomator2',
       'appium:deviceName': 'Pixel_11',
       'appium:platformVersion': '11.0',
       browserName: 'Chrome',
       'appium:udid': 'emulator-5554',
       'appium:noReset': true,
       'appium:newCommandTimeout': 240,
       'appium:systemPort': 8200,
       'appium:chromedriverPort': 9515,
       'appium:chromedriverUseSystemExecutable': false,
        maxInstances: 1
    },
     {
        // capabilities for local Appium web tests on an Android Emulator - 2 - nightwatch-android-11
        specs: ['./test/specs/**/*.js'],
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'nightwatch-android-11',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:udid': 'emulator-5556',
        'appium:systemPort': 8201,
        'appium:chromedriverPort': 9516,
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        'appium:chromedriverUseSystemExecutable': true,
        "appium:webSocketUrl": true,
        "appium:unhandledPromptBehavior": "ignore",
        maxInstances: 1
    }  
   // {
        // capabilities for local App tests to run on Emulator -3 
  //  }

],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['appium', {
        logPath: './logs/appium',
        command: 'appium',
        args: {
            address:'localhost',
            port:4723,
            relaxedSecurity: true,
            allowInsecure: ['chromedriver_autodownload'],
            sessionOverride: true,
        }
    }],'visual'
],
    framework: 'mocha',
    reporters: [
        ['allure', {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: false,
          disableWebdriverScreenshotsReporting: false,
        }]
      ],
        mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
