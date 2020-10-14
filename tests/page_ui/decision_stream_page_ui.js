class DecisionStreamPage {
  constructor() {
    this.question_column_checkbox_xpath = "//*[contains(text(),'%s')]/preceding-sibling::*//input[@type='checkbox']";
    this.response_type_dropdown_xpath = "//*[text()='Response Type']/following-sibling::*[contains(@class,'dropdown')]";
    this.option_value_dropdown_list_xpath = "//li//*[text()='%s']";
    this.add_option_button_xpath = "//*[text()='Add Option']/preceding-sibling::button";
    this.copy_link_button_xpath = "//button[contains(@class,'copy-btn')]";
    this.copy_link_textbox_xpath = "//input[contains(@class,'input-with-copy')]";
    this.answered_questions_xpath = "//p[contains(text(),'%s')]/ancestor::div[@class='ds-kanban-board-header']/following-sibling::div[@class='ds-question-list-container']/div[@class='ds-card-container']";
    this.exit_icon_share_modal_xpath = "//*[@class='exit-icon']";
    this.phone_number_textbox_id = "ds-number";
    this.time_xpath = "//*[contains(@class,'select-time')]//div[contains(@class,'singleValue')]";
    this.specific_question_checkbox_xpath = "//p[text()='%s']/parent::div[contains(@class,'card')]/preceding-sibling::div//input[@type='checkbox']";
  }
}

module.exports = new DecisionStreamPage();
