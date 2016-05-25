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

  vm.getProgrammes = function (letter) {
    
  }

}
