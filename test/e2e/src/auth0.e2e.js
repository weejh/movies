describe("login module", function(){
    it("should login succesfully using auth0", function(){
        //set window size and navigate to the path where the template is loaded
        browser.driver.manage().window().setSize(1500, 1000);
        browser.driver.get(browser.baseUrl);
    });
});
