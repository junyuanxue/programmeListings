describe('ProgrammeService', function () {
  beforeEach(module('programmeListings'));

  var ProgrammeService, ProgrammeFactory, httpBackend;

  var data = {
    numOfPages: 1,
    programmes: [
      { title: 'Abadas', image: 'https://abadas.jpg/' },
      { title: 'ABBA', image: 'https://abba.jpg/' }
    ]
  };

  beforeEach(inject(function (_ProgrammeService_, _ProgrammeFactory_, $httpBackend) {
    ProgrammeService = _ProgrammeService_;
    ProgrammeFactory = _ProgrammeFactory_;
    httpBackend = $httpBackend;
  }));

  it('get a list of programmes from the server', function () {
    httpBackend.expectGET('/api/programmes/a?page=1').respond(data);
    var programme1 = new ProgrammeFactory('Abadas', 'https://abadas.jpg/');
    var programme2 = new ProgrammeFactory('ABBA', 'https://abba.jpg/');
    var parsedData = {
      numOfPages: 1,
      programmes: [programme1, programme2]
    }

    ProgrammeService.getProgrammes('a', 1).then(function (result) {
      expect(result).toEqual(parsedData);
    });

    httpBackend.flush();
  });
});
