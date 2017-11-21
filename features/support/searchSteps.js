var chimp = require('chimp');

module.exports = function () {
    this.Given(/^I have visited Google$/, function () {
        browser.url("http://google.com");
    });

    this.When(/^I search for "([^"]*)"$/, function (value) {
        browser.setValue("input[name='q']", value);
        browser.keys("Enter");
    });

    this.Then(/^I see "([^"]*)"$/, function (link) {
        browser.waitForExist("a[href*='" + link +"'");
    });

    this.Then(/^I quit browser$/, function () {
        browser.endAll();
    });
}