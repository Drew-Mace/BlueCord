import { BluecordPage } from './app.po';

describe('bluecord App', () => {
  let page: BluecordPage;

  beforeEach(() => {
    page = new BluecordPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
