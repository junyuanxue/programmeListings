angular
  .module('programmeListings')
  .controller('ProgrammeController', ProgrammeController);

ProgrammeController.$inject = ['ProgrammeService'];

function ProgrammeController(ProgrammeService) {
  var vm = this;
  vm.letters = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];
  vm.programmes = [];
  vm.numOfProgrammes = null;

  vm.getProgrammes = function (letter) {
    ProgrammeService.getProgrammes(letter)
      .then(_refreshProgrammes);
  }

  function _refreshProgrammes(response) {
    vm.programmes = response.programmes;
    vm.numOfProgrammes = response.count;
  }
}
