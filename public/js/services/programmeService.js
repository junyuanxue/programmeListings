angular
  .module('programmeListings')
  .service('ProgrammeService', ProgrammeService)

ProgrammeService.$inject = ['$httpBackend'];

function ProgrammeService($httpBackend) {

}
