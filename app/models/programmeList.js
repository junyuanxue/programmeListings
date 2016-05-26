var request = require('request');

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
        var programmes = _handleResponse(JSON.parse(body));
        resolve(programmes);
      }
    });
  });
}

function _handleResponse(data) {
  console.log(data.atoz_programmes);
}
