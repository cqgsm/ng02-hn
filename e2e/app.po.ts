import { browser, element, by } from 'protractor/globals';

export class Ng02HnPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hn-root h1')).getText();
  }
}
