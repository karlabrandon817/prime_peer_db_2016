var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var assignmentRouter = require('./routes/assignments');
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get("port"));
});

app.use(bodyParser.json());
app.use('/', assignmentRouter);

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function() {
console.log('mongodb connection open!');
});

app.use(express.static('public'));
