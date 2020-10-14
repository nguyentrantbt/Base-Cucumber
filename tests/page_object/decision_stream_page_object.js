const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const DecisionStreamPageLocator = require(`../page_ui/decision_stream_page_ui.js`);
const { version } = require("chai");
var printf = require('printf');
const faker = require('faker');

class DecisionStreamPage {
  async clickOnQuestionColumnCheckbox(title){
    let checkboxXpath = printf(DecisionStreamPageLocator.question_column_checkbox_xpath,title)

    try{
      await commons.clickElementByXpath(checkboxXpath)
    }
    catch(e){}
  }

  async clickOnResponseTypeDropdown(){
    await commons.clickElementByXpath(DecisionStreamPageLocator.response_type_dropdown_xpath)
  }

  async clickOnAnOptionInResponseTypeDropDown(optionValue){
    let optionXpath = printf(DecisionStreamPageLocator.option_value_dropdown_list_xpath,optionValue)

    await commons.clickElementByXpath(optionXpath)
  }

  async clickOnAddOptionButton(){
    await commons.clickElementByXpath(DecisionStreamPageLocator.add_option_button_xpath)
  }

  async clickOnCopyLinkButton(){
    await commons.clickElementByXpath(DecisionStreamPageLocator.copy_link_button_xpath)
  }

  async getAttributeValueOfCopyLinkTextbox(){
    return commons.getAttributeValue(DecisionStreamPageLocator.copy_link_textbox_xpath)
  }

  async verifyNumberOfQuestionsAreAnswered(number, columnName){
    let answer_questionXpath = printf(DecisionStreamPageLocator.answered_questions_xpath,columnName)
    await commons.verifyNumberInXpath(answer_questionXpath,number)
  }

  async clickOnExitIconShareModal(){
    await commons.clickElementByXpath(DecisionStreamPageLocator.exit_icon_share_modal_xpath)
  }

  async enterPhoneNumberToTextbox(){
    await commons.enterValueToFieldByID(DecisionStreamPageLocator.phone_number_textbox_id,"(704) 457-2562")
  }

  async clickOnSpecificQuestionCheckbox(question){
    let questionXpath = printf(DecisionStreamPageLocator.specific_question_checkbox_xpath,question)
    await commons.clickElementByXpath(questionXpath)
  }
  
}
module.exports = DecisionStreamPage;
