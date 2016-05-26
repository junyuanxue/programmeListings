var chai = require('chai');
var chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');
var programmeList = require('../../app/models/programmeList');
var expect = chai.expect;

chai.use(chaiHttp);
chai.use(sinonChai);

var fakeData = {
  atoz_programmes: {
    elements:   [
        { title: 'Abadas', image: 'http://abadas.jpg/' },
        { title: 'ABBA', image: 'http://abba.jpg/' }
      ];
  }
}

var parsedData = [
  { title: 'Abadas', image: 'http://abadas.jpg/' },
  { title: 'ABBA', image: 'http://abba.jpg/' }
]

describe('ProgrammeList', function () {
  it('makes an external API call for a list or programmes', function () {
    var getRequest = sinon.stub(request, 'get');
    getRequest.returns(fakeData);
    callToApi('a')
      .then(function (response) {
        expect(response).to.equal(parsedData);
      });
  });
});
