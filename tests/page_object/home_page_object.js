const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const HomePageLocator = require(`../page_ui/home_page_ui.js`);
const { version } = require("chai");
var printf = require('printf');

class HomePage {
  async clickToPageOnMenu(page){
    let pageOnMenuXpath = printf(HomePageLocator.page_on_menu_xpath,page)
    await commons.clickElementByXpath(pageOnMenuXpath)
  }

  async hoverToHomePageIcon(){
    await commons.hoverElementByXpath(HomePageLocator.home_page_xpath)
  }

  async verifyHomePageDisplays(){
    await commons.checkXpathDisplay(HomePageLocator.home_page_xpath)
    await commons.sleep(5000)
  }
  
  async clickAddWorkspaceButton(){
    await commons.clickElementByXpath(HomePageLocator.add_workspace_button_xpath)
  }

  async clickToUsername(){
    await commons.clickElementByXpath(HomePageLocator.user_name_xpath)
  }


}
module.exports = HomePage;
