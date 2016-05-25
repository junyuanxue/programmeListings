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
            { title: 'Abadas', image: 'abadas.jpg' },
            { title: 'ABBA', image: 'abba.jpg' }
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
    var programmesStartWithA = $$('#programmes li');

    expect(programmesStartWithA.first().getText()).toEqual('Abadas');
    expect(programmesStartWithA.last().getText()).toEqual('ABBA');
  });
});
