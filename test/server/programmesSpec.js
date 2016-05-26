var chai = require('chai');
var chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var server = require('../../app');
var programmeList = require('../../app/models/programmeList');
var expect = chai.expect;

chai.use(chaiHttp);
chai.use(sinonChai);

describe('Programme Listings server', function () {
  before(function () {
    var data = {
      numOfPages: 1,
      programmes: [
          { title: 'Abadas', image: 'http://abadas.jpg/' },
          { title: 'ABBA', image: 'http://abba.jpg/' }
        ]
    };
    var callToApi = sinon.stub(programmeList, 'callToApi');
    callToApi.returns(Promise.resolve(data));
  });

  it('returns a list of programmes on /api/programmes GET', function (done) {
    chai.request(server)
      .get('/api/programmes/a?page=1')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.numOfPages).to.equal(1);
        expect(res.body.programmes[0].title).to.equal('Abadas');
        expect(res.body.programmes[0].image).to.equal('http://abadas.jpg/');
        expect(res.body.programmes[1].title).to.equal('ABBA');
        expect(res.body.programmes[1].image).to.equal('http://abba.jpg/');
        done();
      });
  });
});
