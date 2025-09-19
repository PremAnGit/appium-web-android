# Appium Testing Framework

Appium is a strongly recommend to do Mobile Testing.

Install Appium as per the instructions in the actual Appium website : https://appium.io/docs/en/latest/

Start the appium : 
1. appium

Emulators :

To Setup an emulator :

1. Install and Open the Android Studio.
2. Follow the instructures here to set up a specific emulator.

Commands in Emulators :

1. Command to List Emulators : "emulator -list-avds"
2. Command to check list of Devices attached and status : adb devices
3. Command to Start an emulator 1 : emulator -avd Pixel_11
4. Command to start emulator 2 : emulator -avd nightwatch-android-11
5. Command to start emulator 2 : emulator -avd Galaxy_A22


To Run the tests from the config file. 

1. npm run wdio

To Run only a single test.
1. Select the respective test by adding it.only ( for eg: it.only (' should display the checkbox 1 selected and checkbox 2 deselected',.... ) to that test.
2. then in the termincal run the specific test file : npx wdio wdio.conf.js --spec ./test/specs/test.e2e.js

Command to generte and open Allure report

1. npx allure generate ./allure-results --clean -o ./allure-report  ( or npm run allure:generate)
2. npm run allure:open


Commands when updating node_modules and package-lock 
1. remove the node_module and package-lock ; rm -rf node_modules package-lock.json

2. command to clear cache
   npm cache clean --force

3. Install fresh
   npm install


