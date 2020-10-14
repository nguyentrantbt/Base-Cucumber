class SignUpPage {
    constructor() {
        this.first_name_txb_id = "firstName";
        this.last_name_txb_id = "lastName";
        this.email_txb_id = "email";
        this.password_txb_id = "password";
        this.confirm_password_id = "confirm_password";
        this.create_account_button_name = "Create account";
        this.agree_term_conditions_name = "agree terms and conditions";
    }
  }
  
  module.exports = new SignUpPage();