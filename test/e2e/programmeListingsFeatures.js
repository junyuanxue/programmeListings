describe('Programme Listings', function () {
  it('has a title', function () {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Programme Listings');
  });
});
