import { ResteavivrePage } from './app.po';

describe('resteavivre App', () => {
  let page: ResteavivrePage;

  beforeEach(() => {
    page = new ResteavivrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
