import { LimetoolsPage } from './app.po';

describe('limetools App', () => {
  let page: LimetoolsPage;

  beforeEach(() => {
    page = new LimetoolsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
