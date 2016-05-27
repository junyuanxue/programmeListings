var request = require('request');
var IMAGE_SIZES = {
  small: '192x108',
  medium: '406x228',
  large: '560x315'
};
var imageSize = IMAGE_SIZES.small;

exports.callToApi = function (letter, page) {
  var base = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/';
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
  var numPerPage = data.atoz_programmes.per_page;
  var count = data.atoz_programmes.count;

  var numOfPages = Math.ceil(count / numPerPage);
  var programmes = data.atoz_programmes.elements.map(function (programme) {
    return _parseProgrammeData(programme);
  });

  return { numOfPages: numOfPages, programmes: programmes };
}

function _parseProgrammeData(programme) {
  var title = programme.title;
  var imageUrl = _parseImageUrl(programme.images.standard);
  return { title: title, image: imageUrl };
}

function _parseImageUrl(url) {
  var imageUrlWithSize = url.replace('{recipe}', imageSize);
  var finalImageUrl = imageUrlWithSize.replace('http', 'https');
  return finalImageUrl;
};
