const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./app/models');

const app = express();

app.use(bodyParser.urlencoded( { extended: false }));

User.create({name: 'Zora', email: 'zora@zora', password: '123'});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);