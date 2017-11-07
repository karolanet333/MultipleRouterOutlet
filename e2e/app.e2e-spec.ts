import { MultipleRouterOutletPage } from './app.po';

describe('multiple-router-outlet App', () => {
  let page: MultipleRouterOutletPage;

  beforeEach(() => {
    page = new MultipleRouterOutletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
