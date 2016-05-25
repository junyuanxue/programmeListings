describe('Programme Listings', function () {
  it('has a programme listing', function () {
    browser.get('/');
    var programme = $('#programme');
    expect(programme.getText()).toEqual('First programme');
  });
});
