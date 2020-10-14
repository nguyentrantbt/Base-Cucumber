const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const DigestBuilderPageLocator = require(`../page_ui/digest_builder_page_ui.js`);
const { version } = require("chai");
var printf = require('printf');

class DigestBuilderPage {
  async clickAddAllButtonOfDay(date){
    let addAllButtonXpath = printf(DigestBuilderPageLocator.add_all_button_xpath,date)
    await commons.clickElementByXpath(addAllButtonXpath)
  }

  async verifyDayOfEventExist(date){
    let dateTitleXpath = printf(DigestBuilderPageLocator.date_title_on_digest_builder_xpath,date)
    await commons.checkXpathDisplay(dateTitleXpath)
  }

  async verifyEventsAreAddedToDigestBuilder(date){
    let dateTitleColumnXpath = printf(DigestBuilderPageLocator.name_events_on_event_collumn_xpath,date)
    await commons.compareArrays(dateTitleColumnXpath, DigestBuilderPageLocator.name_events_on_digest_builder_xpath)
  }

  async dragEventAndDropToDigestBuilder(eventName, date){
    await commons.dragAndDropFromSourceToDestination()
  }


  async clickOnAddEventButtonLast(){
    await commons.clickElementByXpath(DigestBuilderPageLocator.add_event_button_last_xpath)
  }

  async clickOnFirstEventHeader(){
    await commons.clickElementByXpath(DigestBuilderPageLocator.first_cal_event_day_header_right_column_xpath)
  }

  async dragEventFromColumnToDragArea(){
    await commons.dragAndDropFromSourceToDestination(DigestBuilderPageLocator.first_event_on_column_xpath,DigestBuilderPageLocator.drop_calendar_area_xpath)
  }

  async verifyEventIsAddedOnDigestBuilder(){
    let actualEventName = await commons.getText(DigestBuilderPageLocator.event_title_on_digest_builder)
    let expectedEventName = await commons.getText(DigestBuilderPageLocator.first_event_on_column_xpath)
    await commons.verifyActualAndExpectedResult(actualEventName, expectedEventName)
  }

  async clickOnFirstEventDigestBuilder(){
    await commons.clickElementByXpath(DigestBuilderPageLocator.first_event_on_digest_builder_xpath)
  }

  async enterValueToAddADescriptionTextbox(value){
    await commons.enterValueToFieldByXpath(DigestBuilderPageLocator.add_a_description_textbox_xpath,value)
  }

  async verifyTimeEventDisplay(){
    await commons.checkXpathDisplay(DigestBuilderPageLocator.time_event_xpath)
  }

  async verifyTitleDisplay(){
    await commons.checkXpathDisplay(DigestBuilderPageLocator.title_event_xpath)
  }
  
  async clickToChevronLeftIcon() {
    await commons.clickElementByXpath(DigestBuilderPageLocator.chevron_left_icon_xpath)
  }

  async clickOnTimeZoneDropDown() {
    await commons.clickElementByXpath(DigestBuilderPageLocator.timezone_dropdown_xpath)
  }

  async clickOnTimeDropDown() {
    await commons.clickElementByXpath(DigestBuilderPageLocator.time_dropdown_xpath)
  }

  async verifyPreviewLoad(){
    await commons.checkXpathDisplay(DigestBuilderPageLocator.preview_modal_xpath)
  }
}
module.exports = DigestBuilderPage;
