const Console = require('console');
const express = require('express');
const Listing = require('../db/Listing');

const app = express();

app.get('/:id/description', (req, res) => {
  Console.log(`got request for ${req.params.id}`);
  Listing.findOne({ user: { user_id: req.params.id } })
    .then((listing) => {
      Console.log(`sending object ${listing}`);
      res.send(listing);
    })
    .catch((err) => {
      res.sendStatus(500);
      Console.error(err);
    });
});

module.exports = app;
