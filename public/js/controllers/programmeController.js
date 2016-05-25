angular
  .module('programmeListings')
  .controller('ProgrammeController', ProgrammeController);

ProgrammeController.$inject = [];

function ProgrammeController() {
  var vm = this;
  vm.programmes = [];
  
}
