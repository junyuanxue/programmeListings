describe('ProgrammeController', function () {
  beforeEach(module('programmeListings'));

  var ctrl, ProgrammeService, ProgrammeFactory, httpBackend;

  var data = {
    numOfPages: 2,
    programmes: [
      { title: 'Abadas', image: 'http://abadas.jpg/' },
      { title: 'ABBA', image: 'http://abba.jpg/' }
    ]
  };

  beforeEach(inject(function ($controller, _ProgrammeService_, _ProgrammeFactory_, $httpBackend) {
    ctrl = $controller('ProgrammeController');
    ProgrammeService = _ProgrammeService_;
    ProgrammeFactory = _ProgrammeFactory_;
    httpBackend = $httpBackend;
    httpBackend.expectGET('/api/programmes/a?page=1').respond(data);
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

  it('initialises with no pages', function () {
    expect(ctrl.pages).toEqual([]);
  });

  it('gets a list of programmes from the server', function () {
    spyOn(ProgrammeService, 'getProgrammes').and.callThrough();
    ctrl.getProgrammes('a');

    expect(ProgrammeService.getProgrammes).toHaveBeenCalledWith('a', 1);
  });

  it('updates the programmes', function () {
    ctrl.getProgrammes('a');
    httpBackend.flush();

    var programme1 = new ProgrammeFactory('Abadas', 'http://abadas.jpg/');
    var programme2 = new ProgrammeFactory('ABBA', 'http://abba.jpg/');

    expect(ctrl.programmes).toEqual([programme1, programme2]);
  });

  it('loads the next page', function () {
    spyOn(ProgrammeService, 'getProgrammes').and.callThrough();
    ctrl.currentLetter = 'a';
    ctrl.loadPage(2);

    expect(ProgrammeService.getProgrammes).toHaveBeenCalledWith('a', 2);
  });
});
