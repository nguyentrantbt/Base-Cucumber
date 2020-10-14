const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const AddCalendarPageLocator = require(`../page_ui/add_calendar_page_ui.js`);
const { version } = require("chai");
const faker = require('faker');
const {waitFor} = require("taiko")

class AddCalendarPage {
    async clickOnAddAccountButton() {
        await commons.clickElementByXpath(AddCalendarPageLocator.add_account_xpath)
    }
}
module.exports = AddCalendarPage;