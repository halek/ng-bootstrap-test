import { BootstrapPage } from './app.po';

describe('bootstrap App', () => {
  let page: BootstrapPage;

  beforeEach(() => {
    page = new BootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
