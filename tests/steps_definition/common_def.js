"use strict";
const commons = require("../common/commons_action");
const globalVariables = require("../common/global_variables");
const {waitFor, screenshot} = require('taiko')
const CommonsPage = require("../page_object/commons_page_object.js");
const commonsPage = new CommonsPage();

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};
step("Navigate to Base QA site", async () => {
  await commons.navigateTo(globalVariables.url);
  await commons.sleep(5000)
});

step("Click to Sign in tab", async () => {
  await commons.clickElementByText("Sign in");
});

step("Click <text>", async (text) => {
  await waitFor(1000)
  await commons.clickElementByText(text)
  await waitFor(1000)
});

step("Enter <question> to <placeholderText>", async (question, placeholderText) => {
  await commons.enterValueToFieldByPlaceHolder(placeholderText, question)
});

step("Back to Decision Stream tab", async () => {
  await commons.closeTab()
});

step("Reload page", async () => {
  await commons.refreshPage()
});

step("Verify page title is <title>", async (title) => {
  await commonsPage.isTitleDisplay(title)
});

step("Verify <text> displays", async (text) => {
  await commons.checkTextDisplay(text)
});

