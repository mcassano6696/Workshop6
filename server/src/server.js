// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
// Defines what happens when it receives the `GET /` request
// Starts the server on port 3000!
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

var util = require('./util');
var reverseString = util.reverseString;
var bodyParser = require('body-parser');
app.use(bodyParser.text());

// Handle POST /reverse [data]
app.use(express.static('../client/build'));





