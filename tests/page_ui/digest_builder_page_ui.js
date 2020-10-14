class DigestBuilderPage {
    constructor() {
      this.add_all_button_xpath = "//p[contains(text(),'%s')]/following-sibling::button[text()='Add All']";
      this.name_events_on_event_collumn_xpath = "//p[contains(text(),'%s')]/parent::div/following-sibling::div[@class='cal-event-day-events']//*[contains(@id,'clamped-content')]";
      this.date_title_on_digest_builder_xpath = "//*[@name='dynamic-digest-header' and contains(@value,'%s')]";
      this.name_events_on_digest_builder_xpath = "//*[@class='digest-cal-event']//*[@class='title-display']";
      this.event_arrow_down_xpath = "//*[@class='chevron-down-icon']";
      this.add_event_button_last_xpath = "(//button[@name='add-section-btn'])[last()]";
      this.drop_calendar_area_xpath = "//*[@id='digest-section-empty-helper']";
      this.first_event_on_column_xpath = "(//div[contains(@id,'clamped-content')])[1]";
      this.first_event_on_digest_builder_xpath = "(//*[@class='digest-cal-event'])[1]";
      this.event_title_on_digest_builder = "//*[@class='title-display']";
      this.time_event_xpath = "//*[contains(@class,'digest-meeting-time-change')]";
      this.title_event_xpath = "//*[@id='digest-title-event-input']";
      this.add_a_description_textbox_xpath = "//*[@data-placeholder='Add a description']";
      this.first_cal_event_day_header_right_column_xpath = "(//p[@class='cal-event-day-header-text'])[1]";
      this.chevron_left_icon_xpath = "//*[@class='chevron-left-icon']/parent::button";
      this.timezone_dropdown_xpath = "//*[contains(@class,'tz')]";
      this.time_dropdown_xpath = "//*[contains(@class,'time')]";
      this.preview_modal_xpath = "//div[@class='digest-preview-wrapper']"
    }
  }
  module.exports = new DigestBuilderPage();
  