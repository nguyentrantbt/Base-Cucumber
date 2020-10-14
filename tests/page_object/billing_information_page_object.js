const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const BillingInformationPageLocator = require(`../page_ui/billing_information_page_ui.js`);
const { version } = require("chai");
const faker = require('faker');
const {waitFor} = require("taiko");
var printf = require('printf');

class BillingInformationPage {
    async enterValueToCardHolderNameTextbox() {
        var cardHolderName = faker.name.firstName()
        await commons.enterValueToFieldByID(BillingInformationPageLocator.full_name_textbox_id, cardHolderName)
    }

    async enterValueToCardNumberTextbox() {
        for(let i=0; i<8;i++){
            await commons.enterValueToFieldByNameNotClear(BillingInformationPageLocator.card_number_textbox_name, "4")
            await commons.sleep(500)
            await commons.enterValueToFieldByNameNotClear(BillingInformationPageLocator.card_number_textbox_name, "2")
            await commons.sleep(500)
        }
    }

    async enterValueToExpirationDateTextbox() {
        await commons.enterValueToFieldByNameNotClear(BillingInformationPageLocator.expiration_date_name, "06")
        await commons.enterValueToFieldByNameNotClear(BillingInformationPageLocator.expiration_date_name, "22")

    }

    async enterValueToCVCTextbox() {
        await commons.enterValueToFieldByName(BillingInformationPageLocator.cvc_textbox_name, "111")
    }

    async selectOptionInCountryDropDown(country) {
        await commons.clickElementByXpath(BillingInformationPageLocator.billing_address_xpath)
        await commons.clickElementByText(country)
    }

    async enterValueToStreetLine() {
        var street_line_1 = faker.address.streetAddress()
        var street_line_2 = faker.address.streetName()
        await commons.enterValueToFieldByID(BillingInformationPageLocator.street_line_1_textbox_id, street_line_1)
        await commons.enterValueToFieldByID(BillingInformationPageLocator.street_line_2_textbox_id, street_line_2)
    }

    async enterValueToCity() {
        var city = faker.address.city()
        await commons.enterValueToFieldByID(BillingInformationPageLocator.city_textbox_id, city)
    }

    async enterValueToZipCode() {
        await commons.enterValueToFieldByID(BillingInformationPageLocator.postal_code_textbox_id, "94414")
    }

    async verifyTabActive(tabName) {
        let tabNameXpath = printf(BillingInformationPageLocator.billed_active_xpath,tabName)
        await commons.checkXpathDisplay(tabNameXpath)
    }
}
module.exports = BillingInformationPage;
