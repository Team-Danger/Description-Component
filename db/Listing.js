const mongoose = require('mongoose');
const { bedStrings, amenityStrings } = require('../util/seedStrings.js');

mongoose.Promise = global.Promise;
const amenityTypes = amenityStrings.map(({ type }) => type);
const allAmenities = amenityStrings.reduce((acc, { amenities }) => acc.concat(amenities), []);
const listingSchema = new mongoose.Schema({
  listingId: String,
  user: {
    userId: String,
    name: String,
    image: String,
  },
  title: String,
  body: String,
  guests: Number,
  bedrooms: Number,
  beds: Number,
  publicBaths: Number,
  privateBaths: String,
  sleepingArrangements: [{
    location: String,
    beds: [{
      amount: Number,
      type: {
        type: String,
        enum: bedStrings,
      },
    }],
  }],
  amenities: [{
    type: {
      type: String,
      enum: amenityTypes,
    },
    amenity: {
      type: String,
      enum: allAmenities,
    },
    description: String,
  }],
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
