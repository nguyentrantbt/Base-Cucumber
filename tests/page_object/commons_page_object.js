const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const CommonsPageLocator = require(`../page_ui/commons_page_ui.js`);
const { version } = require("chai");
var printf = require('printf');

class CommonsPage {
  async isTitleDisplay(title){
    let header_xpath = printf(CommonsPageLocator.header_text_xpath,title)
    await commons.checkXpathDisplay(header_xpath)
  }
  
}
module.exports = CommonsPage;
