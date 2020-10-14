const commons = require("../common/commons_action.js");
const chai = require("chai").should();
const SignUpPageLocator = require(`../page_ui/sign_up_page_ui.js`);
const { version } = require("chai");
const faker = require('faker');
const {waitFor} = require("taiko")

class SignUpPage {
  async enterValueToFirstNameTextbox() {
    var firstName = faker.name.firstName()
    await commons.enterValueToFieldByID(SignUpPageLocator.first_name_txb_id, firstName)
  }

  async enterValueToLastNameTextbox() {
    let lastName = faker.name.lastName()
    await commons.enterValueToFieldByID(SignUpPageLocator.last_name_txb_id, lastName)
  }

  async enterValueToEmailAddressTextbox() {
    let email = "quynhlv+"+faker.random.number()+"@dwarvesv.com"
    await commons.enterValueToFieldByID(SignUpPageLocator.email_txb_id, email)
  }

  async enterValueToPasswordTextbox() {
    await commons.enterValueToFieldByID(SignUpPageLocator.password_txb_id, "Base1234")
  }

  async enterValueToConfirmPasswordTextbox(password) {
    await commons.enterValueToFieldByID(SignUpPageLocator.confirm_password_id, "Base1234")
  }

  async clickToSignUpButton(){
    await commons.clickButtonByName(SignUpPageLocator.create_account_button_name)
  }
  
}
module.exports = SignUpPage;