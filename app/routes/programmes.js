var express = require('express');
var router = express.Router();
var programmeList = require('../models/programmeList');

router.get('/:letter', function (req, res) {
  var letter = req.params.letter;
  programmeList.callToApi(letter)
    .then(function (programmesData) {
      res.send(programmesData);
    }).catch(function (error) {
      res.send(error);
    });
});

module.exports = router;
