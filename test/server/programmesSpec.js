var chai = require('chai');
var chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var server = require('../../app');
var programmeList = require('../../app/models/programmeList');
var expect = chai.expect;

chai.use(chaiHttp);
chai.use(sinonChai);

var fakeData = [
  { title: 'Abadas', image: 'http://abadas.jpg/' },
  { title: 'ABBA', image: 'http://abba.jpg/' }
];

describe('Programme Listings server', function () {
  beforeEach(function () {
    var callToApi = sinon.stub(programmeList, 'callToApi');
    callToApi.returns(Promise.resolve(fakeData));
  });

  it('returns a list of programmes on /api/programmes GET', function (done) {
    chai.request(server)
      .get('/api/programmes/a')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body[0].title).to.equal('Abadas');
        expect(res.body[1].image).to.equal('http://abba.jpg/');
        done();
      });
  });
});
