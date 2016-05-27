describe('Programme Listings', function () {
  var mock = require('protractor-http-mock');

  beforeEach(function () {
    mock([{
      request: {
        path: '/api/programmes/a',
        method: 'GET',
        queryString: { page:  '1' }
      },
      response: {
        data: {
          numOfPages: 2,
          programmes: [
              { title: 'Abadas', image: 'https://abadas.jpg/' },
              { title: 'ABBA', image: 'https://abba.jpg/' }
            ]
        }
      }
    }]);

    browser.get('/');
    var letterA = $$('.a-to-z').first();
    letterA.click();
  });

  afterEach(function () {
    mock.teardown();
  });

  it('has links from A to Z and 0-9', function () {
    var aToZ = $$('.a-to-z');

    expect(aToZ.count()).toEqual(27);
    expect(aToZ.first().getText()).toEqual('A');
    expect(aToZ.last().getText()).toEqual('0-9');
  });

  it('fetches a list of programmes and displays page count', function () {
    var programmes = $$('.programme-title');
    var programmeImages = $$('.programme-info img');
    var pageCount = $$('.page-count');

    expect(pageCount.first().getText()).toEqual('1');
    expect(pageCount.last().getText()).toEqual('2');
    expect(programmes.first().getText()).toEqual('Abadas');
    expect(programmes.last().getText()).toEqual('ABBA');
    expect(programmeImages.first().getAttribute('src')).toEqual('https://abadas.jpg/');
    expect(programmeImages.last().getAttribute('src')).toEqual('https://abba.jpg/');
  });

  it('refreshes the list when user clickes on another page', function () {
    mock.add([{
      request: {
        path: '/api/programmes/a',
        method: 'GET',
        queryString: { page:  '2' }
      },
      response: {
        data: {
          numOfPages: 2,
          programmes: [
              { title: 'All Mod Cons', image: 'https://all-mod-cons.jpg/' }
            ]
        }
      }
    }]);

    var page2 = $$('.page-count').last();
    page2.click();
    var programmes = $$('.programme-title');
    var programmeImages = $$('.programme-info img');

    expect(programmes.first().getText()).not.toEqual('Abadas');
    expect(programmes.first().getText()).toEqual('All Mod Cons');
    expect(programmeImages.first().getAttribute('src')).toEqual('https://all-mod-cons.jpg/');
  });
});
