export class PageObjectLogin {

  constructor() {

  }

  getHeader() {
    return element(by.tagName('h1')).getText();
  }

  getContent() {
    return element(by.tagName('p')).getText();
  }

  pressLoginButton() {
    return element(by.id('login')).click();
  }
}
