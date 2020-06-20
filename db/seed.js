const Console = require('console');
const _ = require('lodash');
const { connection } = require('./db');
const Listing = require('./Listing');
const generateListing = require('../util/generateListing.js');

function insertListings(amount) {
  const ids = _.range(1, amount).map((n) => n.toString().padStart(3, '0'));
  const listings = [];
  const listingTasks = ids.map((id) => (
    generateListing(id, id)
      .then((listing) => listings.push(listing))
  ));
  Promise.all(listingTasks)
    .then(() => Listing.create(listings))
    .then(() => connection.close())
    .catch((err) => Console.error(err));
}

insertListings(100);
