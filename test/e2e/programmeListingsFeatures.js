describe('Programme Listings', function () {
  it('has a title', function () {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Programme Listings');
  });

  it('has links from A to Z', function () {
    browser.get('/');
    var aToZ = $$('#a-to-z li');

    expect(aToZ.count()).toEqual(26);
    expect(aToZ.first().getText()).toEqual('A');
    expect(aToZ.last().getText()).toEqual('Z');
  });

  it('fetches a list of programmes starting with the letter', function () {
    browser.get('/');
    var a = $$('#a-to-z li').first();
    a.click();

    //page displays a list of programmes under A:
    // expect()
  });
});
