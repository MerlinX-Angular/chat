import { Chatas1Page } from './app.po';

describe('chat App', () => {
  let page: Chatas1Page;

  beforeEach(() => {
    page = new Chatas1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
