const{ $,$$ } = require('@Wdio/globals')
const Page = require('./page');


class CheckboxesPage extends Page {

    get allCheckboxes () 
    {
        return $$('input[type="checkbox"]');
   }
   
   get checkbox1()
   {
    return this.allCheckboxes[0];
   }

   get checkbox2()
   {
    return this.allCheckboxes[1];
   }

   // Method to perform the action on Checkbox 1
   async checkFirstbox() 
   {
    await this.checkbox1.waitForDisplayed({timeout: 5000});
    const isSelected1 = await this.checkbox1.isSelected();
    if(!isSelected1)
    {
        await this.checkbox1.click();
    }
}

    // Method to perform the action on Checkbox 2
    async uncheckSecondCheckbox()
    {
        await this.checkbox2.waitForDisplayed({timeout: 5000});
        const isSelected2 = await this.checkbox2.isSelected();
        if(isSelected2)
        {
        await this.checkbox2.click();
    }
    }

    // toggle the checkboxes

    async toggleCheckboxes()
    {
        await this.checkFirstbox();
        await this.uncheckSecondCheckbox();
    }
   
    // check box Open page
    open()
    {

        return super.open('checkboxes');
    }

}

module.exports = new CheckboxesPage();