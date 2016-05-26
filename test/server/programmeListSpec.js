var chai = require('chai');
var chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var chaiJsonEqual = require('chai-json-equal');
var request = require('request');
var programmeList = require('../../app/models/programmeList');
var expect = chai.expect;

chai.use(chaiHttp);
chai.use(sinonChai);
chai.use(chaiJsonEqual);

describe('ProgrammeList', function () {
  var fakeData = {
    atoz_programmes: {
      count: 2,
      per_page: 20,
      elements: [
          {
            title: 'Abadas',
            images: {
              standard: 'http://{recipe}/abadas.jpg/'
            }
          },
          {
            title: 'ABBA',
            images: {
              standard: 'http://{recipe}/abba.jpg/'
            }
          }
        ]
    }
  };

  before(function (done) {
    var response = { statusCode: 200 };
    sinon
      .stub(request, 'get')
      .yields(null, response, JSON.stringify(fakeData));
      done();
  });

  after(function (done) {
    request.get.restore();
    done();
  })

  it('makes an external API call', function (done) {
    var size = '192x108';
    var parsedData = {
      numOfPages: 1,
      programmes: [
          { title: 'Abadas', image: 'http://' + size + '/abadas.jpg/' },
          { title: 'ABBA', image: 'http://' + size + '/abba.jpg/' }
        ]
    };

    programmeList.callToApi('a', 1)
      .then(function (result) {
        expect(result).to.jsonEqual(parsedData);
        done();
      });
  });
});
