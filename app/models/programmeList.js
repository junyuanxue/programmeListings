var request = require('request');
var IMAGE_SIZE = {
  small: '192x108',
  medium: '406x228',
  large: '560x315'
};

exports.callToApi = function (letter) {
  var base = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/';
  var page = 1;
  var options = {
    url: base + letter + '/programmes?page=' + page,
    headers: {
      'User-Agent': 'request'
    }
  }

  return new Promise(function (resolve, reject) {
    request.get(options, function (error, response, body) {
      if (error) return reject(error);
      if (response.statusCode !== 200) return reject(new Error(body));
      if (!error && response.statusCode === 200) {
        var list = _handleResponse(JSON.parse(body));
        resolve(list);
      }
    });
  });
}

function _handleResponse(data) {
  //data that will be useful with pagination:
  var numPerPage = data.atoz_programmes.per_page;
  var count = data.atoz_programmes.count;
  var currentPage = data.atoz_programmes.page;

  var numOfPages = Math.ceil(count / numPerPage);
  var programmes = data.atoz_programmes.elements.map(function (programme) {
    return _parseProgrammeData(programme);
  });

  return { numOfPages: numOfPages, programmes: programmes };
}

function _parseProgrammeData(programme) {
  var title = programme.title;
  var imageUrlWithRecipe = programme.images.standard;
  var imageUrl = imageUrlWithRecipe.replace('{recipe}', IMAGE_SIZE.small);
  return { title: title, image: imageUrl };
}
