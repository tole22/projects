import { NgVotesAppPage } from './app.po';

describe('ng-votes-app App', () => {
  let page: NgVotesAppPage;

  beforeEach(() => {
    page = new NgVotesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
