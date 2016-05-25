describe('Programme Listings', function () {
  var mock = require('protractor-http-mock');

  beforeEach(function () {
    mock([{
      request: {
        path: "/api/programmes",
        method: 'GET'
      },

      response: {
        data: [
            { title: 'Abadas', image: 'http://abadas.jpg/' },
            { title: 'ABBA', image: 'http://abba.jpg/' }
          ]
        }
      }
    ]);
  });

  afterEach(function () {
    mock.teardown();
  });

  it('has a title', function () {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Programme Listings');
  });

  it('has links from A to Z', function () {
    browser.get('/');
    var aToZ = $$('#a-to-z li');

    expect(aToZ.count()).toEqual(26);
    expect(aToZ.first().getText()).toEqual('a');
    expect(aToZ.last().getText()).toEqual('z');
  });

  it('fetches a list of programmes starting with the letter', function () {
    browser.get('/');
    var a = $$('#a-to-z li').first();
    a.click();
    var programmes = $$('#programmes li');
    var programmeImages = $$('#programmes li img');

    expect(programmes.first().getText()).toEqual('Abadas');
    expect(programmes.last().getText()).toEqual('ABBA');
    expect(programmeImages.first().getAttribute('src')).toEqual('http://abadas.jpg/');
    expect(programmeImages.last().getAttribute('src')).toEqual('http://abba.jpg/');
  });
});
