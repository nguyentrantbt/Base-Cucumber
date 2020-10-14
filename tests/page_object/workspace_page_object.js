const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const WorkSpacePageLocator = require(`../page_ui/workspace_page_ui.js`);
const { version } = require("chai");
const faker = require('faker');
const {waitFor} = require("taiko")

class WorkspacePage {
    async enterValueToExecutiveNameTextbox() {
        var executiveName = faker.name.firstName()
        await commons.enterValueToFieldByID(WorkSpacePageLocator.executive_name_id, executiveName)
    }

    async clickOnNextButton() {
        await commons.clickElementByXpathSpecial(WorkSpacePageLocator.next_button_xpath)
    }

    async clickOnTimezoneDropDown() {
        await commons.clickElementByXpath(WorkSpacePageLocator.personal_timezone_xpath)
    }

    async clickOnExecutiveTimeZoneDropDown() {
        await commons.clickElementByXpath(WorkSpacePageLocator.executive_timezone_xpath)
    }
}
module.exports = WorkspacePage;