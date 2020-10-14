"use strict";
const commons = require("../common/commons_action");
const DigestBuilderPage = require("../page_object/digest_builder_page_object.js");
const {waitFor} = require('taiko')
const digestBuilderPage = new DigestBuilderPage();

step("Click Add All button of <day>", async (day) => {
    await digestBuilderPage.clickAddAllButtonOfDay(day)
});

step("Verify digest has day <day>", async (day) => {
    await digestBuilderPage.verifyDayOfEventExist(day)
})

step("Verify all events display on Digest Builder", async (day) => {
    await digestBuilderPage.verifyDayOfEventExist(day)
})

step("Drag event of <day> onto Digest", async (day) => {
    await digestBuilderPage.dragEventToDigest(day)
})

step("Verify all events of <date> display on Digest Builder", async (date) => {
    await digestBuilderPage.verifyEventsAreAddedToDigestBuilder(date)
})

step("Drag an event on right column onto Digest", async () => {
    await digestBuilderPage.dragEventFromColumnToDragArea()
})

step("Verify the event is added on Digest Builder", async () => {
    await digestBuilderPage.verifyEventIsAddedOnDigestBuilder()
})

step("Add a header with <date>", async (date) => {
    await digestBuilderPage.clickOnAddEventButtonLast()
    await commons.clickElementByText('Add a header')
    await commons.clickElementByText('Header')
    await commons.enterValueToFieldByPlaceHolder('Header','date')
})

step("Select the first event", async () => {
    await digestBuilderPage.clickOnFirstEventDigestBuilder()
})

step("Enter <value> to 'Add a description'", async (value) => {
    await waitFor(1000)
    await digestBuilderPage.enterValueToAddADescriptionTextbox(value)
})

step("Verify time is added", async () => {
    await digestBuilderPage.verifyTimeEventDisplay()
})

step("Verify title is added", async () => {
    await digestBuilderPage.verifyTitleDisplay()
})

step("Click outside to Save Description", async () => {
    await digestBuilderPage.clickOnFirstEventHeader()
    await waitFor(2000)
})

step("Verify the preview loads", async () => {
    await digestBuilderPage.verifyPreviewLoad()
})

step("Open mail and verify user can receive mail", async () => {
})

step("Click chevron left icon to show the Digest Builder list", async() => {
    await commons.sleep(1000)
    await digestBuilderPage.clickToChevronLeftIcon()
})

step("Select <time_zone> for time zone", async(time_zone) => {
    await digestBuilderPage.clickOnTimeZoneDropDown()
    await commons.clickElementByText(time_zone)
})

step("Select <time> for time schedule", async(time) => {
    await digestBuilderPage.clickOnTimeDropDown()
    await commons.clickElementByText(time)
})

step("Verify message <messageText> appears", async(messageText) => {
    await commons.checkTextDisplay(messageText)
})

step("Verify the event <eventName> on <date> is listed under Events", async(eventName,date) => {
    
})