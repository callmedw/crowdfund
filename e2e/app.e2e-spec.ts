import { CrowdfundPage } from './app.po';

describe('crowdfund App', () => {
  let page: CrowdfundPage;

  beforeEach(() => {
    page = new CrowdfundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
