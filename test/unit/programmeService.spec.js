describe('ProgrammeService', function () {
  beforeEach(module('programmeListings'));

  var ProgrammeService, httpBackend;

  var data = [
    { title: 'Abadas', image: 'abadas.jpg' },
    { title: 'ABBA', image: 'abba.jpg' }
  ];

  beforeEach(inject(function (_ProgrammeService_, $httpBackend) {
    ProgrammeService = _ProgrammeService_;
    httpBackend = $httpBackend;
  }));

  it('get a list of programmes from the server', function () {
    httpBackend.expectGET('/api/programmes').respond(data);
    var programme1 = { title: 'Abadas', image: 'abadas.jpg' };
    var programme2 = { title: 'ABBA', image: 'abba.jpg' };

    ProgrammeService.getProgrammes('a').then(function (programmes) {
      expect(programmes).toEqual([programme1, programme2]);
    });

    httpBackend.flush();
  });
});
