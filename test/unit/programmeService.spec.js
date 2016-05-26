describe('ProgrammeService', function () {
  beforeEach(module('programmeListings'));

  var ProgrammeService, httpBackend;

  var data = [
    { title: 'Abadas', image: 'http://abadas.jpg/' },
    { title: 'ABBA', image: 'http://abba.jpg/' }
  ];

  beforeEach(inject(function (_ProgrammeService_, _ProgrammeFactory_, $httpBackend) {
    ProgrammeService = _ProgrammeService_;
    ProgrammeFactory = _ProgrammeFactory_;
    httpBackend = $httpBackend;
  }));

  it('get a list of programmes from the server', function () {
    httpBackend.expectGET('/api/programmes/a').respond(data);
    var programme1 = new ProgrammeFactory('Abadas', 'http://abadas.jpg/');
    var programme2 = new ProgrammeFactory('ABBA', 'http://abba.jpg/');

    ProgrammeService.getProgrammes('a').then(function (programmes) {
      expect(programmes).toEqual([programme1, programme2]);
    });

    httpBackend.flush();
  });
});
