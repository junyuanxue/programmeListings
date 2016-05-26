describe('ProgrammeController', function () {
  beforeEach(module('programmeListings'));

  var ctrl;

  beforeEach(inject(function ($controller, _ProgrammeService_) {
    ctrl = $controller('ProgrammeController');
    ProgrammeService = _ProgrammeService_;
  }));

  it('has a list of alphabet', function () {
    var alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]
    expect(ctrl.letters).toEqual(alphabet);
  });

  it('initialises with an empty list of programmes', function () {
    expect(ctrl.programmes).toEqual([]);
  });

  it('gets a list of programmes from the server', function () {
    spyOn(ProgrammeService, 'getProgrammes').and.callThrough();
    ctrl.getProgrammes('a');

    expect(ProgrammeService.getProgrammes).toHaveBeenCalledWith('a');
  });

  it('shows the total number of programmes for each letter', function () {
    ctrl.getProgrammes('a');
    expect(ctrl.numOfProgrammes).toEqual(2);
  });
});
