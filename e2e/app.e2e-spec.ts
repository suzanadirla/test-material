import {TestProjectPage} from './app.po';
import {ExpectedDisplayMessages} from './app.display-messages';

const expectedTitle = ExpectedDisplayMessages.APP_TITLE;
const expectedSubtitle = ExpectedDisplayMessages.APP_SUBTITLE;

describe('test-project App', () => {
  let page: TestProjectPage;

  beforeEach(() => {
    page = new TestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText('h1')).toEqual('Welcome to ' + expectedTitle);
  });

  it('should display \'' + expectedSubtitle + '\' as subtitle', () => {
    page.navigateTo();
    expect(page.getParagraphText('h2')).toEqual(expectedSubtitle);
  });

  it('should display list of people', () => {
    page.navigateTo();
    expect(page.hasPeopleListContainer()).toBeTruthy();
  });
});
