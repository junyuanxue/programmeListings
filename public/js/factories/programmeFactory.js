angular
  .module('programmeListings')
  .factory('ProgrammeFactory', function () {
    var Programme = function (title, image) {
      this.title = title;
      this.image = image;
    };

    return Programme
  });
