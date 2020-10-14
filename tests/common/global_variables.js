var url = "https://app-qa.basehq.com/";
var headless_chrome = process.env.HEADLESS_CHROME !== "false";

module.exports = {
  url,
  headless_chrome,
};
