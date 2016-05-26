describe('Programme Listings', function () {
  var mock = require('protractor-http-mock');

  beforeEach(function () {
    browser.get('/');

    mock([{
      request: {
        path: '/api/programmes/a',
        method: 'GET'
      },
      response: {
        data: {
          numOfPages: 2,
          programmes: [
              { title: 'Abadas', image: 'http://abadas.jpg/' },
              { title: 'ABBA', image: 'http://abba.jpg/' }
            ]
        }
      }
    }]);

    var a = $$('#a-to-z li').first();
    a.click();
  });

  afterEach(function () {
    mock.teardown();
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('Programme Listings');
  });

  it('has links from A to Z', function () {
    var aToZ = $$('#a-to-z li');

    expect(aToZ.count()).toEqual(26);
    expect(aToZ.first().getText()).toEqual('A');
    expect(aToZ.last().getText()).toEqual('Z');
  });

  it('fetches a list of programmes and displays page count', function () {
    var programmes = $$('#programmes li p');
    var programmeImages = $$('#programmes li img');
    var pageCount = $$('#page-count li');

    expect(pageCount.last().getText()).toEqual('2');
    expect(programmes.first().getText()).toEqual('Abadas');
    expect(programmes.last().getText()).toEqual('ABBA');
    expect(programmeImages.first().getAttribute('src')).toEqual('http://abadas.jpg/');
    expect(programmeImages.last().getAttribute('src')).toEqual('http://abba.jpg/');
  });

  it('refreshes the list when user clickes on another page', function () {
    var page2 = $$('#page-count li').last();
    page2.click();
    var programmes = $$('#programmes li p');

    expect(programmes.first().getText()).not.toEqual('Abadas');
  })
});
