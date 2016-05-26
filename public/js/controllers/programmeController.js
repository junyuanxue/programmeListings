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
  vm.numOfPages = null;
  vm.currentPage = 0;
  vm.currentLetter = null;

  vm.getProgrammes = function (letter) {
    vm.currentLetter = letter;
    vm.currentPage = 1;
    ProgrammeService.getProgrammes(letter)
      .then(_refreshProgrammes);
  }

  vm.loadNextPage = function () {
    vm.currentPage += 1;
    ProgrammeService.getProgrammes(vm.currentLetter, vm.currentPage)
      .then(_refreshProgrammes);
  }

  function _refreshProgrammes(response) {
    vm.programmes = response.programmes;
    vm.numOfPages = response.numOfPages;
  }
}
