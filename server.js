// get the pacakages and variables we need
var express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 8080;

// set node to return assets from public directory
app.use(express.static(__dirname + '/public'));

// catchall route
app.get('*', function(req, res) {
  res.sendFile(path.join('public/views/index.html'));
});

// start the server
app.listen(port);
console.log('App on http://localhost:' + port);