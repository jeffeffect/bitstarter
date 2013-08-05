var fs = require("fs");
var mybuf = fs.readFileSync('index.html');
var express = require('express');
var app = express();
app.use(express.logger());
app.get('/', function(request, response) {
  response.send(mybuf.toString('utf-8'));
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
