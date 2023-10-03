// Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Set port
app.set('port', 3000);

// Set static directory before defining routes
// so that it can be used for any route
app.use(express.static(path.join(__dirname, 'public')));

// Route to homepage
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to get a list of comments
app.get('/comments', function(req, res) {
  // Dummy data
  var comments = [
    {