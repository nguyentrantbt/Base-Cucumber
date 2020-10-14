"use strict";
const SignUpPage = require("../page_object/sign_up_page_object.js");
const commons = require("../common/commons_action");
const signUpPage = new SignUpPage();

step("Enter value to First Name textbox", async () => {
    await commons.waitForPageLoad()
    await commons.sleep(3000)
    await signUpPage.enterValueToFirstNameTextbox()
});

step("Enter value to Last Name textbox", async () => {
    await signUpPage.enterValueToLastNameTextbox()
});

step("Enter value to Email Address textbox", async () => {
    await signUpPage.enterValueToEmailAddressTextbox()
});

step("Enter value to Password", async () => {
    await signUpPage.enterValueToPasswordTextbox()
});

step("Enter value to Confirm Password", async () => {
    await signUpPage.enterValueToConfirmPasswordTextbox()
});

step("Click to 'Create Account' button", async () => {
    await signUpPage.clickToSignUpButton()
    await commons.sleep(5000)
});
