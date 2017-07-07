import { browser, by, element } from 'protractor';

export class TestProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(hTag) {
    return element(by.css('app-root ' + hTag)).getText();
  }

  hasPeopleListContainer() {
    return element(by.css('app-people-list .peopleList__content')).isPresent();
  }
}
