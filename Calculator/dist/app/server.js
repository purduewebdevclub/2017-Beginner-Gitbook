'use strict';

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
	res.sendFile(path.resolve('./src/public/calculator.html'));
});

app.use(express.static(__dirname + '/../../src/public'));
app.use(express.static(__dirname));

app.listen(3000, function () {
	console.log("Listening on port 3000");
});