var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:letter', function (req, res) {
  var letter = req.params.letter;
  requestToApi(letter)
    .then(function (response) {
      console.log(response);
    });

  res.json('hello');
});

function requestToApi (letter) {
  var base = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/';
  var page = 1;

  var options = {
    url: base + letter + '/programmes?page=' + page,
    headers: {
      'User-Agent': 'request'
    }
  }

  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {
      if (error) return reject(error);
      if (response.statusCode !== 200) return reject(new Error(body));
      if (!error && response.statusCode === 200) {
        resolve(body);
      }
    });
  });
}

module.exports = router;
