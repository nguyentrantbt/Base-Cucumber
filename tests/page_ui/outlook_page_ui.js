class OutlookPage {
    constructor() {
        this.email_txb_name = "loginfmt";
        this.password_txb_name = "passwd";
        this.navigation_menu_button_id = "O365_MainLink_NavMenu";
        this.date_txt_xpath = "//input[contains(@id,'Date')]";
        this.start_time_xpath = "//input[@aria-label='Start time']";
        this.end_time_xpath = "//input[@aria-label='End time']";
        //placeholder = "Add a title"
        // this.add_title_xpath = "//input[@aria-label='Add details for the event']";
        this.go_to_next_month_xpath = "//button[@role ='menuitem' and contains(@title,'Go to next month')]";
        this.go_to_previous_month_xpath = "//button[@role ='menuitem' and contains(@title,'Go to previous month')]";
        this.jump_to_or_previous_month_xpath = "//*[@data-icon-name='ChevronDown']";
        this.go_to_previous_year_xpath = "//div[contains(@class,'navigation')]//button[contains(@title,'previous year')]"
        this.go_to_next_year_xpath = "//div[contains(@class,'navigation')]//button[contains(@title,'next year')]"
        this.go_to_next_month_navigation_xpath = "//div[contains(@class,'month')]//button[contains(@title,'next month')]"
        this.go_to_previous_month_navigation_xpath = "//div[contains(@class,'month')]//button[contains(@title,'previous month')]"
    }
}
module.exports = new OutlookPage();