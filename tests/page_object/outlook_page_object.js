const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const OutlookPageLocator = require(`../page_ui/outlook_page_ui.js`);
const { version } = require("chai");
const faker = require('faker');
const {waitFor} = require("taiko")

class OutlookPage {
    async enterValueToEmailTextbox(keyword) {
        await commons.enterValueToFieldByName(OutlookPageLocator.email_txb_name, keyword)
    }
    async enterValueToPasswordTextbox() {
        await commons.enterValueToFieldByName(OutlookPageLocator.password_txb_name, "nrj8kueb")
    }

    async clickNavigationMenu() {
        await commons.clickButtonByID(OutlookPageLocator.navigation_menu_button_id)
    }

    async clickDateFieldOnCalendar() {
        await commons.enterTomorrowDateToFieldByXpath(OutlookPageLocator.date_txt_xpath)
    }

    async enterValueToStartTime(startTime) {
        await commons.enterValueToFieldByXpath(OutlookPageLocator.start_time_xpath,startTime)
    }

    async enterValueToEndTime(endTime) {
        await commons.enterValueToFieldByXpath(OutlookPageLocator.end_time_xpath,endTime)
    }
}
module.exports = OutlookPage;