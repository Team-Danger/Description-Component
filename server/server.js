const Console = require('console');
const path = require('path');
const express = require('express');
const Listing = require('../db/Listing');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/:id/description', (req, res) => {
  Console.log(`got request for ${req.params.id}`);
  Listing.findOne({ user: { user_id: req.params.id } })
    .then((listing) => {
      Console.log(`sending object ${listing}`);
      res.send(listing);
    })
    .catch((err) => {
      Console.error(err);
    });
});

app.listen(port, () => {
  Console.log(`listening on port ${port}`);
});
