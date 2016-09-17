import { Ng02HnPage } from './app.po';

describe('ng02-hn App', function() {
  let page: Ng02HnPage;

  beforeEach(() => {
    page = new Ng02HnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hn works!');
  });
});
