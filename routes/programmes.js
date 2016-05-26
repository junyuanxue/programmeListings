var express = require('express');
var router = express.Router();
var programmeList = require('../models/programmeList');

router.get('/:letter', function (req, res) {
  var letter = req.params.letter;
  programmeList.callToApi(letter)
    .then(function (response) {
      console.log(response);
    });

  res.json('hello');
});

module.exports = router;
