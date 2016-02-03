export class PageObjectHome {

  constructor() {

  }

  getHeader() {
    return element(by.tagName('h2')).getText();
  }

}
