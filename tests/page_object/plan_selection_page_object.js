const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const PlanSelectionPageLocator = require(`../page_ui/plan_selection_page_ui.js`);
const { version } = require("chai");
const faker = require('faker');
const {waitFor} = require("taiko")

class PlanSelectionPage {
    async clickOnSwitchButton() {
        await commons.clickElementByXpath(PlanSelectionPageLocator.switch_button_xpath)
    }

    async clickOnUpgradeToTeamButton(){
        await commons.clickElementByXpath(PlanSelectionPageLocator.upgrade_to_team_button_xpath)
        // await commons.focusAndClickByKeyboard(PlanSelectionPageLocator.upgrade_to_team_button_xpath)
    }

    async clickOnUpgradeToProButton(){
        await commons.clickElementByXpath(PlanSelectionPageLocator.upgrade_to_pro_button_xpath) 
    }

    async clickOnXIcon(){
        await commons.clickElementByXpath(PlanSelectionPageLocator.x_icon_xpath)
    }
}
module.exports = PlanSelectionPage;