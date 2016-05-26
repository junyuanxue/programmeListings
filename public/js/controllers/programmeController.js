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
  vm.pages = [];
  vm.currentLetter = null;
  vm._numOfPages = 0;

  vm.getProgrammes = function (letter) {
    vm.currentLetter = letter;
    ProgrammeService.getProgrammes(letter, 1)
      .then(_refreshProgrammes);
  }

  vm.loadPage = function (page) {
    ProgrammeService.getProgrammes(vm.currentLetter, page)
      .then(_refreshProgrammes);
  }

  function _refreshProgrammes(response) {
    vm.programmes = response.programmes;
    vm._numOfPages = response.numOfPages;
    _updatePages();
  }

  function _updatePages() {
    vm.pages = [];
    for(i = 1; i <= vm._numOfPages; i++) {
      vm.pages.push(i);
    }
  }
}
