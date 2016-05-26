var express = require('express');
var router = express.Router();
var programmeList = require('../models/programmeList');

router.get('/:letter', function (req, res) {
  var letter = req.params.letter;
  var page = req.query.page;
  programmeList.callToApi(letter, page)
    .then(function (programmes) {
      res.send(programmes);
    }).catch(function (error) {
      res.send(error);
    });
});

module.exports = router;
