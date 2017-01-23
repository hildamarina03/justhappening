import { MySecondAngularPage } from './app.po';

describe('my-second-angular App', function() {
  let page: MySecondAngularPage;

  beforeEach(() => {
    page = new MySecondAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
