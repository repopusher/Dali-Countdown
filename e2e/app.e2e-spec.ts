import { DaliPage } from './app.po';

describe('dali App', function() {
  let page: DaliPage;

  beforeEach(() => {
    page = new DaliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
