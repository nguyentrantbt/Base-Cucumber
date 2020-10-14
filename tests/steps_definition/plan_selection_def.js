"use strict";
const PlanSelectionPage = require("../page_object/plan_selection_page_object.js");
const commons = require("../common/commons_action");
const planSelectionPage = new PlanSelectionPage();
const {waitFor} = require("taiko")

step("Switch from Yearly to Monthly and verify prices are changed", async() => {
    await planSelectionPage.clickOnSwitchButton()
    //TODO: verify prices later
})

step("Click 'Upgrade to Team' button", async() => {
    await planSelectionPage.clickOnUpgradeToTeamButton()
})

step("Click 'Upgrade to Pro' button", async() => {
    await planSelectionPage.clickOnUpgradeToProButton()
})
step("Go to Plan Selection Page", async() => {
    await commons.navigateTo("https://app-qa.basehq.com/plan-selection");
})

step("Click X icon", async() => {
    await planSelectionPage.clickOnXIcon()
})