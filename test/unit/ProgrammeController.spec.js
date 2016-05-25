describe('ProgrammeController', function () {
  beforeEach(module('programmeListings'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ProgrammeController');
  }));

  it('initialises with an empty list of programmes', function () {
    expect(ctrl.programmes).toEqual([]);
  });

});
