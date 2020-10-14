"use strict";
const AddCalendarPage = require("../page_object/add_calendar_page_object.js");
const commons = require("../common/commons_action");
const addCalendarPage = new AddCalendarPage();

step("Select an email and process to add successfully", async() => {
    await commons.goBackToPreviousPage();
});

step("Click checkbox before email", async() => {
});

step("Click Add button", async() => {
    addCalendarPage.clickOnAddAccountButton()
});