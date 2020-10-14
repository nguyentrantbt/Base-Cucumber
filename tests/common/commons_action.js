/* globals gauge*/
"use strict";
const {
  $,
  attach,
  below,
  button,
  clear,
  click,
  closeTab,
  dragAndDrop,
  dropDown,
  doubleClick,
  evaluate,
  hover,
  fileField,
  focus,
  goto,
  goBack,
  into,
  link,
  openTab,
  press,
  reload,
  scrollTo,
  text,
  textBox,
  to,
  toRightOf,
  waitFor,
  write,
} = require("taiko");
const chai = require("chai");
const expect = chai.expect;
const assert = require("assert");

class baseAction {
  async checkElementBackGround(rowName, color) {
    var background = await evaluate(
      (element, args) => {
        var xPath =
          "//a[contains(., '" + args[0] + "')]/ancestor::div[@role='row']";
        var xPathResult = document.evaluate(xPath, document).iterateNext();
        return xPathResult.style.backgroundColor;
      },
      { args: [rowName] }
    );

    assert.equal(color, background);
  }

  async goBackToPreviousPage() {
    await goBack();
  }

  async waitForPageLoad(){
    try{
        var waitCount = 0;
        var state = (await evaluate(()=>{return document.readyState}))
        while(state != 'complete' &&waitCount<120){
            //wait for page load with document ready state
            await waitFor(500);
            state = await evaluate(()=>{return document.readyState})
            waitCount ++;
        }
    } catch (ex){}
}

  async verifydeepEqual(actual, expected) {
    assert.deepEqual(actual, expected);
  }

  async getAttributeValue(xpath){
    return await evaluate($(xpath), (elem) => {return elem.getAttribute('value')})
  }

  async clickButtonByID(buttonID) {
    await click(button({ id: buttonID }));
  }

  async clickButtonByName(buttonName) {
    await click(button({ name: buttonName }));
  }

  async clickLinkByID(linkID) {
    await click(link({ id: linkID }));
  }

  async clickElementByCss(css) {
    await click($(css));
  }

  async clickElementByText(elementText) {
    await click(elementText);
  }

  async clickElementByXpath(xpath) {
    await click($(xpath));
  }

  async clickElementByXpathSpecial(xpath) {
    await click($(xpath),{waitForEvents:['loadEventFired']});
  }

  async clickElementByXpathAndID(ID) {
    await click($("//*[@id = '" + ID + "']"));
  }

  async clickButtonToRightOf(buttonID, value) {
    await click(button({ id: buttonID }), toRightOf(value));
  }

  async clickElementTextToRightOf(elementText, value) {
    await click(elementText, toRightOf(value));
  }

  async verifyNumberInXpath(xpath, number) {
    let productNumber = (await $(xpath).elements()).length;
    await this.verifyActualAndExpectedResult(productNumber, number);
  }

  async getSizeOfArray(xpath){
    return (await $(xpath).elements()).length;
  }

  async getElementsOfArray(xpath){
    return await $(xpath).elements();
  }

  async compareArrays(arr1_xpath, arr2_xpath){
    for(let i=0; i<this.getSizeOfArray(arr2_xpath); i++){
      if(this.getElementsOfArray(arr1_xpath)[i]!=this.getElementsOfArray(arr2_xpath)[i]){
        return false;
      }
    }
    return true;
  }

  async doubleClickElementByText(elementText) {
    await doubleClick(elementText);
  }

  async enterValueToFieldByID(fieldID, fieldValue) {
    await clear(textBox({ id: fieldID }));
    await write(fieldValue, into(textBox({ id: fieldID })));
  }

  async enterValueToFieldByName(fieldName, fieldValue) {
    await clear(textBox({ name: fieldName }));
    await write(fieldValue, into(textBox({ name: fieldName })));
  }

  async enterValueToFieldByNameNotClear(fieldName, fieldValue) {
    await write(fieldValue, into(textBox({ name: fieldName })));
  }

  async enterValueToFieldByXpath(xpath, fieldValue) {
    await clear($(xpath));
    await write(fieldValue, into($(xpath)));
  }

  async enterValueToFieldByPlaceHolder(placeHolder, fieldValue) {
    let xpath = "(//*[@placeholder='"+placeHolder+"'])[last()]";
    await clear($(xpath));
    await write(fieldValue, into($(xpath)));
  }

  async enterValueToFieldByCss(css, fieldValue) {
    await clear($(css));
    await write(fieldValue, into($(css)));
  }

  async enterTomorrowDateToFieldByXpath(xpath) {
    let today = new Date();
    let dd = today.getDate() + 2;
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let date = mm + "/" + dd + "/" + yyyy;
    await clear($(xpath));
    await write(date, into($(xpath)));
  }

  async hoverElementByText(text) {
    await hover(text);
  }

  async hoverElementByXpath(xpath) {
    await hover($(xpath));
  }

  async checkAttributeValue(elementID, attribute, attributeValue) {
    await waitFor(1000);
    assert.equal(
      (
        await evaluate(
          button({ id: elementID }),
          (element, args) => {
            return element.getAttribute(args[0]);
          },
          { args: [attribute] }
        )
      ).result,
      attributeValue
    );
  }

  async clickByJS(xpath){
    await evaluate($(xpath), (element) => element.clic("value", "01-01-2020"))
  }

  async checkButtonByIDDisabled(buttonID) {
    expect(await button({ id: buttonID }).isDisabled()).to.be.true;
  }

  async checkTextDisplay(value) {
    expect(await text(value).exists()).to.be.true;
  }

  async checkTextToRightOfDisplay(keyword, value) {
    expect(await text(keyword, toRightOf(value)).exists()).to.be.true;
  }

  async checkXpathDisplay(xpath) {
    expect(await $(xpath).exists()).to.be.true;
  }

  async checkTextNotDisplay(value) {
    assert.ok(!(await text(value).exists()));
  }

  async checkElementByXpathDisplay(xpath) {
    expect(await $(xpath).exists()).to.be.true;
  }

  async focusAndClickByKeyboard(xpath) {
    await focus($(xpath));
    await this.pressKeyOnKeyboard("Enter");
  }

  async pressKeyOnKeyboard(key) {
    await press(key);
  }

  async navigateTo(url) {
    await goto(url);
  }

  async refreshPage() {
    await reload({ navigationTimeout: 10000 });
  }

  async selectDropDownByID(dropdownID, dropDownOption) {
    await dropDown({ id: dropdownID }).select(dropDownOption);
  }

  async selectDropDownByName(dropdownName, dropDownOption) {
    await dropDown({ name: dropdownName }).select(dropDownOption);
  }

  async selectDropDownBelowText(text, dropDownOption) {
    await dropDown(below(text)).select(dropDownOption);
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async uploadFileByFieldID(fieldID, fileName) {
    await attach(`./files/${fileName}`, to(fileField({ id: fieldID })));
  }

  async verifyActualAndExpectedResult(actual, expected) {
    assert.equal(
      actual,
      expected,
      "Actual: " + actual + " But Expected: " + expected
    );
  }

  async waitForButtonVisible(buttonID) {
    await waitFor(async () => await button({ id: buttonID }).isVisible());
  }

  async waitForLinkVisible(linkID) {
    await waitFor(async () => await link({ id: linkID }).isVisible());
  }

  async waitForElementByCssVisible(css) {
    await waitFor(async () => await $(css).isVisible());
  }

  async waitForElementByXpathVisible(xpath) {
    await waitFor(async () => await $(xpath).isVisible());
  }

  async waitForElementByXpathAndIDVisible(ID) {
    await waitFor(async () => await $("//*[@id = '" + ID + "']").isVisible());
  }

  async isXpathDisabled(xpath){
    return $(xpath).isDisabled()
  }

  async openNewTabWithUrl(url){
    await openTab(url)
  }

  async closeTab(){
    await closeTab()
  }

  async getText(xpath){
    return await $(xpath).text()
  }

  async dragAndDropFromSourceToDestination(source_xpath,destination_xpath){
    await dragAndDrop($(source_xpath),into($(destination_xpath)))
  }

  async scrollTo(text){
    await this.scrollTo(text)
  }
}

module.exports = new baseAction();