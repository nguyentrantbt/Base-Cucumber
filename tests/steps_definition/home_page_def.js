"use strict";
const HomePage = require("../page_object/home_page_object.js");

const homePage = new HomePage();

step("Go to <page> on Menu", async (page) => {
  await homePage.clickToPageOnMenu(page)
  await homePage.hoverToHomePageIcon()
});

step("Verify Home page displays", async () => {
  await homePage.verifyHomePageDisplays()
});

step("Verify the calendar events show on the dashboard", async() => {
  //TODO: after connecting to an account with an event, will work with this step later
});


step("Verify user is redirected to the dashboard", async() => {

});

step("Verify Pro Trial text doesn't appear", async() => {

});

step("Click to Add Wokspace button", async () => {
  await homePage.clickAddWorkspaceButton()
});

step("Click to Username on top right corner", async () => {
  await homePage.clickToUsername()
});