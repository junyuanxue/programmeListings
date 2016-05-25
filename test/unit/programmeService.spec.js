describe('ProgrammeService', function () {
  beforeEach(module('programmeListings'));

  var ProgrammeService, httpBackend;

  beforeEach(inject(function (_ProgrammeService_, $httpBackend) {
    ProgrammeService = _ProgrammeService_;
    httpBackend = $httpBackend;
  }));
});
