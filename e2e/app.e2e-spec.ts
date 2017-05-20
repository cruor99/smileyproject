import { SmileyprojectPage } from './app.po';

describe('smileyproject App', function() {
  let page: SmileyprojectPage;

  beforeEach(() => {
    page = new SmileyprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
