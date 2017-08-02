const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./src/public/calculator.html'));
});

const generateResponse = (reqObject, operationType) => {
  switch (operationType) {
    case 'add':
      return parseInt(reqObject.query.num1) + parseInt(reqObject.query.num2);
    case 'sub':
      return parseInt(reqObject.query.num1) - parseInt(reqObject.query.num2);
    case 'mul':
      return parseInt(reqObject.query.num1) * parseInt(reqObject.query.num2);
    case 'div':
      return parseInt(reqObject.query.num1) / parseInt(reqObject.query.num2);
    case 'mod':
      return parseInt(reqObject.query.num1) % parseInt(reqObject.query.num2);
  }
};

app.get('/add', (req, res) => {
  res.send(JSON.stringify(generateResponse(req, 'add')));
});

app.get('/sub', (req, res) => {
  res.send(JSON.stringify(generateResponse(req, 'sub')));
});

app.get('/mul', (req, res) => {
  res.send(JSON.stringify(generateResponse(req, 'mul')));
});

app.get('/div', (req, res) => {
  res.send(JSON.stringify(generateResponse(req, 'div')));
});

app.get('/mod', (req, res) => {
  res.send(JSON.stringify(generateResponse(req, 'mod')));
});

// using all middlewares here
app.use(express.static(__dirname + '/../../src/public'));
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
