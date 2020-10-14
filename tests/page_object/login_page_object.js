const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const LoginPageLocator = require(`../page_ui/login_page_ui.js`);
const { version } = require("chai");

class LoginPage {
  async enterValueToEmailTextbox(keyword) {
    await commons.enterValueToFieldByID(LoginPageLocator.email_txb_id, keyword)
  }

  async enterValueToPasswordTextbox() {
    await commons.enterValueToFieldByID(LoginPageLocator.password_txb_id, "Base1234")
  }

  async clickToSignInButton(){
    await commons.clickButtonByName(LoginPageLocator.sign_in_button_name)
  }
  
}
module.exports = LoginPage;
