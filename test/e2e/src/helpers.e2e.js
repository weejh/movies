var helpers = function helpers(){
    this.login = function(){
        //set window size and navigate to the path where the template is loaded
        browser.driver.manage().window().setSize(1500, 1000);
        browser.driver.get(browser.baseUrl);

        //check if login button is present & visible
        var loginButtonExists = by.id('loginButton');
        browser.driver.wait(function() {
            return browser.driver.isElementPresent(loginButtonExists);
        }, 5000);
        var loginButton = element(by.id('loginButton'));
        loginButton.click();

        //check if email field exists to see if the pop-up has been succesfully loaded
        var emailFieldExists = by.id('a0-signin_easy_email');
        browser.driver.wait(function() {
            return browser.driver.isElementPresent(emailFieldExists);
        }, 5000);
        //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
        browser.driver.sleep(2000);

        //type credentials and click the 'access' button to log in
        var emailField = element(by.id('a0-signin_easy_email'));
        emailField.sendKeys('test@user.com');
        var passWordField = element(by.id('a0-signin_easy_password'));
        passWordField.sendKeys('0000');
        var accessButton = element(by.css('.a0-notloggedin .a0-primary'));
        accessButton.click();

        //verify that the login was succesfull by checking if the logout button is displayed
        var profilePictureExists = by.id('profile-picture');
        browser.driver.wait(function() {
            return browser.driver.isElementPresent(profilePictureExists);
        }, 5000);
    };


    this.logout = function(){
        browser.driver.get(browser.baseUrl);
        browser.executeScript('window.localStorage.clear();');
    }
};

module.exports = new helpers();
