"use strict";
const commons = require("../common/commons_action");
const DecisionStreamPage = require("../page_object/decision_stream_page_object.js");
const {waitFor} = require('taiko')
const decisionStreamPage = new DecisionStreamPage();

step("Select all existing questions", async () => {
  await waitFor(5000)
  await decisionStreamPage.clickOnQuestionColumnCheckbox("Answered")
  await decisionStreamPage.clickOnQuestionColumnCheckbox("Awaiting Response")
  await decisionStreamPage.clickOnQuestionColumnCheckbox("Draft")
});

step("Select <optionValue> option on Response Type dropdown", async (optionValue) => {
  await decisionStreamPage.clickOnResponseTypeDropdown()
  await decisionStreamPage.clickOnAnOptionInResponseTypeDropDown(optionValue)
  await waitFor(2000)
});

step("Click button before <text>", async (text) => {
  await decisionStreamPage.clickOnAddOptionButton()
});

step("Select all <value> questions", async (value) => {
  await commons.waitForPageLoad()
  await decisionStreamPage.clickOnQuestionColumnCheckbox(value)
});

step("Click on Copy Link button", async () => {
  await decisionStreamPage.clickOnCopyLinkButton()
});

step("Copy-to-clipboard URL and open the link in new tab", async () => {
  let link = await decisionStreamPage.getAttributeValueOfCopyLinkTextbox()

  await commons.openNewTabWithUrl(link)
});

step("Close Share modal", async () => {
  await decisionStreamPage.clickOnExitIconShareModal()
});

step("Select question <question>", async (question) => {
  await decisionStreamPage.clickOnSpecificQuestionCheckbox(question)
});

step("Verify <number> answers load under <columnName> column", async (number, columnName) => {
  await decisionStreamPage.verifyNumberOfQuestionsAreAnswered(number, columnName)
});

step("Enter value to Phone Number", async () => {
  await decisionStreamPage.enterPhoneNumberToTextbox()
});
