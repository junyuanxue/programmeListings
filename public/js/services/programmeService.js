angular
  .module('programmeListings')
  .service('ProgrammeService', ProgrammeService)

ProgrammeService.$inject = ['$http', 'ProgrammeFactory'];

function ProgrammeService($http, ProgrammeFactory) {
  this.getProgrammes = function (letter) {
    return $http.get('/api/programmes/' + letter)
      .then(_handleProgrammesData);
  }

  function _handleProgrammesData(response) {
    var programmes = response.data.programmes.map(function (programme) {
      return new ProgrammeFactory(programme.title, programme.image);
    });

    var list = {
      count: response.data.count,
      programmes: programmes
    };
    
    return list;
  }
}
