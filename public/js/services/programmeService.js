angular
  .module('programmeListings')
  .service('ProgrammeService', ProgrammeService)

ProgrammeService.$inject = ['$http'];

function ProgrammeService($http) {

  this.getProgrammes = function (letter) {
    return $http.get('/api/programmes')
      .then(_handleProgrammesData);
  }

  var _handleProgrammesData = function (response) {
    return response.data.map(function (programme) {
      return programme;
    });
  }
}
