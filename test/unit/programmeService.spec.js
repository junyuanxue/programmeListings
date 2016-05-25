describe('ProgrammeService', function () {
  beforeEach(module('programmeListings'));

  var ProgrammeService, httpBackend;

  var data = [
    { title: 'Abadas', image: 'abadas.jpg' },
    { title: 'ABBA', image: 'abba.jpg' }
  ];

  beforeEach(inject(function (_ProgrammeService_, _ProgrammeFactory_, $httpBackend) {
    ProgrammeService = _ProgrammeService_;
    ProgrammeFactory = _ProgrammeFactory_;
    httpBackend = $httpBackend;
  }));

  it('get a list of programmes from the server', function () {
    httpBackend.expectGET('/api/programmes').respond(data);
    var programme1 = new ProgrammeFactory('Abadas', 'abadas.jpg');
    var programme2 = new ProgrammeFactory('ABBA', 'abba.jpg');

    ProgrammeService.getProgrammes('a').then(function (programmes) {
      expect(programmes).toEqual([programme1, programme2]);
    });

    httpBackend.flush();
  });
});
