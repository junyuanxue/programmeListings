describe('ProgrammeFactory', function () {
  beforeEach(module('programmeListings'));

  var programme;

  beforeEach(inject(function (ProgrammeFactory) {
    programme = new ProgrammeFactory('ABBA', 'http://abba.jpg/');
  }));

  it('has a title', function () {
    expect(programme.title).toEqual('ABBA');
  });

  it('has an image', function () {
    expect(programme.image).toEqual('http://abba.jpg/');
  });
});
