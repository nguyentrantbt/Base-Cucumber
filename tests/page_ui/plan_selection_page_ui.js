class PlanSelectionPage {
    constructor() {
        this.switch_button_xpath = "//*[contains(@class,'react-switch-handle')]";
        this.upgrade_to_team_button_xpath = "//button[text()='Upgrade to Team']";
        this.upgrade_to_pro_button_xpath = "//button[text()='Upgrade to Pro']";
        this.x_icon_xpath = "//*[@class='x-icon']"
    }
}
module.exports = new PlanSelectionPage();