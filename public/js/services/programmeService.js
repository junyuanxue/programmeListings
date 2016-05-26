angular
  .module('programmeListings')
  .service('ProgrammeService', ProgrammeService)

ProgrammeService.$inject = ['$http', 'ProgrammeFactory'];

function ProgrammeService($http, ProgrammeFactory) {
  this.getProgrammes = function (letter, page) {
    var page = page || 1;
    return $http.get('/api/programmes/' + letter + '?page=' + page)
      .then(_handleProgrammesData);
  }

  function _handleProgrammesData(response) {
    var programmes = response.data.programmes.map(function (programme) {
      return new ProgrammeFactory(programme.title, programme.image);
    });

    var list = {
      numOfPages: response.data.numOfPages,
      programmes: programmes
    };

    return list;
  }
}
