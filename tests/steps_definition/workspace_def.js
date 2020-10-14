"use strict";
const WorkSpacePage = require("../page_object/workspace_page_object.js");
const commons = require("../common/commons_action");
const workspacePage = new WorkSpacePage();

step("Enter value to Executive's Name", async() => {
    await workspacePage.enterValueToExecutiveNameTextbox()
})

step("Click Next button", async() => {
    await workspacePage.clickOnNextButton()
})

// step("Click Next button", async() => {
//     try{
        
//         await workspacePage.clickOnNextButton()
//     }
//     catch(e){
//         await commons.sleep(1000)
//     }
// })

step("Select <location> option on 'your timezone' dropdown", async (location) => {
    await workspacePage.clickOnTimezoneDropDown();
    await commons.clickElementByText(location);
})

step("Select <location> option on 'executive's timezone' dropdown", async(location) => {
    await workspacePage.clickOnExecutiveTimeZoneDropDown();
    await commons.clickElementByText(location);
})

