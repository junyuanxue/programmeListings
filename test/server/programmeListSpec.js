var chai = require('chai');
var chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');
var programmeList = require('../../app/models/programmeList');
var expect = chai.expect;

chai.use(chaiHttp);
chai.use(sinonChai);

describe('ProgrammeList', function () {
  var fakeData = {
    atoz_programmes: {
      elements:   [
          { title: 'Abadas', image: 'http://abadas.jpg/' },
          { title: 'ABBA', image: 'http://abba.jpg/' }
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
    var parsedData = [
      { title: 'Abadas', image: 'http://abadas.jpg/' },
      { title: 'ABBA', image: 'http://abba.jpg/' }
    ];

    programmeList.callToApi('a')
      .then(function (result) {
        console.log(result);
        expect(result).to.equal(parsedData);
        console.log('past the expect');
        done();
        console.log('past the done i shouldn\'t be here');
      })
  });
});
