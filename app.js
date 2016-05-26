var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');

var index = require('./app/routes/index');
var programmes = require('./app/routes/programmes');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', index);
app.use('/api/programmes', programmes);

app.listen(port, function () {
  console.log('App listening on port ' + port);
});

module.exports = app;
