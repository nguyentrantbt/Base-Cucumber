class HomePage {
  constructor() {
    this.page_on_menu_xpath = "//div[@class='sidebar-nav-list']//*[text()='%s']";
    this.home_page_xpath = "//*[@title='Home']";
    this.add_workspace_button_xpath = "//a[contains(@class,'add-new')]";
    this.user_name_xpath = "//*[contains(@class,'signed-in-user')]";
  }
}

module.exports = new HomePage();
