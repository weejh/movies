
var helpers = require('./helpers.e2e.js')

describe("movie app", function() {
  describe('login page', function() {
    beforeEach(() => {
      browser.loadAndWaitForAureliaPage('http://localhost:9000');
    })

    it('should display title login page', () => {
      expect(element(by.tagName('h1')).getText()).toBe('The Movie Diary');
    })

    it('should display text content', () => {
      expect(element(by.tagName('p')).getText()).toBe('Take note of all the upcoming movies and add them to your wishlist.\nLog in to check out all the features!')
    })

    it("should login succesfully using auth0 and see home page", function(){
      helpers.login();
      expect(element(by.tagName('h2')).getText()).toBe('Home');
    })
  })

  // describe('popular movies page', function () {
  //   beforeEach(() => {
  //        helpers.logout();
  //    });
  //
  //   it("should see popular-movies title", function() {
  //     helpers.login()
  //     browser.loadAndWaitForAureliaPage('http://localhost:9000/#/popular-movies');
  //     expect(element(by.tagName('h2')).getText()).toBe('Popular Movies');
  //   })
  // })
})
