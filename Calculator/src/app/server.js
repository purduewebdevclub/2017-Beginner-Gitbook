const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.resolve('./src/public/calculator.html'));
});

app.use(express.static(__dirname + '/../../src/public'));
app.use(express.static(__dirname));

app.listen(3000, () => {
	console.log("Listening on port 3000");
});