const { error } = require('console');
const express = require('express');
const Listing = require('../db/Listing');

const app = express();

app.get('/:id/description', (req, res) => {
  Listing.findOne({ listingId: req.params.id })
    .then((listing) => {
      res.send(listing);
    })
    .catch((err) => {
      res.sendStatus(500);
      error(err);
    });
});

module.exports = app;
