var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Programme Listings server', function () {
  it('has an index page', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.equal('Programmes');
        done();
      });
  });

  it('returns a list of programmes on /api/programmes GET', function (done) {
    chai.request(server)
      .get('/api/programmes')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
