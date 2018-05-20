import { CYBLOGPage } from './app.po';

describe('cyblog App', () => {
  let page: CYBLOGPage;

  beforeEach(() => {
    page = new CYBLOGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
