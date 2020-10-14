class WorkSpacePage{
    constructor() {
        this.executive_name_id = "Executive Name";
        this.next_button_xpath = "//button[contains(@class,'ob-step-page-footer-btn')]";
        this.personal_timezone_xpath = "//label[text()='What is your timezone?']/following-sibling::div//div[contains(@class,'timezone-timepicker')]";
        this.executive_timezone_xpath = "//label[contains(text(),'What is your executive')]/following-sibling::div//div[contains(@class,'timezone-timepicker')]";
    }
}
module.exports = new WorkSpacePage();