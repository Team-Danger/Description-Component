const Console = require('console');
const path = require('path');
const express = require('express');
const app = require('./app');
require('../db/db');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  Console.log(`listening on port ${port}`);
});
