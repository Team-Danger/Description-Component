const mongoose = require('mongoose');
const { bedStrings, amenityStrings } = require('../util/seedStrings.js');

mongoose.Promise = global.Promise;
const amenityTypes = amenityStrings.map(({ type }) => type);
const allAmenities = amenityStrings.reduce((acc, { amenities }) => acc.concat(amenities), []);
const listingSchema = new mongoose.Schema({
  listing_id: String,
  user: {
    user_id: String,
    user_name: String,
    user_image: String,
  },
  title: String,
  description: String,
  guests: Number,
  bedrooms: Number,
  beds: Number,
  publicBaths: Number,
  privateBaths: String,
  sleepingArrangements: [{
    location: String,
    beds: [{
      Amount: Number,
      bedType: {
        type: String,
        enum: bedStrings,
      },
    }],
  }],
  amenities: [{
    amenityType: {
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
