class BillingInformationPage{
    constructor() {
        this.full_name_textbox_id = "cardHolder";
        this.card_number_textbox_name = "cardnumber";
        this.expiration_date_name = "exp-date";
        this.cvc_textbox_name = "cvc";
        this.street_line_1_textbox_id = "addressLine";
        this.street_line_2_textbox_id = "addressLine2";
        this.city_textbox_id = "city";
        this.postal_code_textbox_id = "postalCode";
        this.coupon_code_textbox_id = "couponCode";
        this.billed_active_xpath = "//div[@class = 'active' and text() = '%s']";
        this.country_dropdown_xpath = "//*[contains(@class,'country-select')]//div[contains(@class,'singleValue')]";
    }
}
module.exports = new BillingInformationPage();