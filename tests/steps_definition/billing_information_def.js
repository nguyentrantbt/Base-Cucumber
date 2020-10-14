"use strict";
const commons = require("../common/commons_action");
const BillingInformationPage = require("../page_object/billing_information_page_object.js");
const {waitFor} = require('taiko')
const billingInformationPage = new BillingInformationPage();

step("Verify <tabName> is default tab", async(tabName) => {
    await billingInformationPage.verifyTabActive(tabName)
})

step("Verify price is changed", async() => {
})

step("Fill in fake valid billing information", async() => {
    await billingInformationPage.enterValueToCardHolderNameTextbox()
    await billingInformationPage.enterValueToCardNumberTextbox()
    await billingInformationPage.enterValueToExpirationDateTextbox()
    await billingInformationPage.enterValueToCVCTextbox()
    await billingInformationPage.enterValueToStreetLine()
    await billingInformationPage.enterValueToCity()
    await billingInformationPage.enterValueToZipCode()
})