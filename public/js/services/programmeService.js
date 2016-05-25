angular
  .module('programmeListings')
  .service('ProgrammeService', ProgrammeService)

ProgrammeService.$inject = ['$http', 'ProgrammeFactory'];

function ProgrammeService($http, ProgrammeFactory) {

  this.getProgrammes = function (letter) {
    return $http.get('/api/programmes')
      .then(_handleProgrammesData);
  }

  function _handleProgrammesData(response) {
    return response.data.map(function (programme) {
      return new ProgrammeFactory(programme.title, programme.image);
    });
  }
}
