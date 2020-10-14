"use strict";
const LoginPage = require("../page_object/login_page_object.js");
const commons = require("../common/commons_action");
const loginPage = new LoginPage();

step("Login with existing user <user>", async (user) => {
  await commons.waitForPageLoad()
  await commons.sleep(5000)
  await loginPage.enterValueToEmailTextbox(user);
  await loginPage.enterValueToPasswordTextbox();
  await loginPage.clickToSignInButton();
  await commons.sleep(5000)
});