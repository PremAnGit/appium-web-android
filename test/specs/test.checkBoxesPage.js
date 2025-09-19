const { expect } = require('@wdio/globals')
const CheckboxesPage = require('../pageobjects/checkboxes.page')

describe ('My checkbox page validation', () => {
    it('should display the checkbox 1 selected and checkbox 2 deselected', async () => {
        await CheckboxesPage.open()
        await CheckboxesPage.toggleCheckboxes()
        // wait until states are as expected
        await browser.waitUntil(async () => 
        {
            return (await CheckboxesPage.checkbox1.isSelected()) === true && (await CheckboxesPage.checkbox2.isSelected()) === false;
          }, 
          {
            timeout: 5000,
            timeoutMsg: 'checkbox1 did not become selected and/or checkbox2 did not become deselected in time'
          });
    
        //  verify checkbox states
        expect(await CheckboxesPage.checkbox1.isSelected()).toBe(true);
        expect(await CheckboxesPage.checkbox2.isSelected()).toBe(false);
    
    })
    })