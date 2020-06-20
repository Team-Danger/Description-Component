const _ = require('lodash');
const path = require('path');
const { generateListing } = require('../util/seedDB.js');

test('it should make the right kind of object', async () => {
  const checkFields = async () => {
    const imagesPath = path.join(__dirname, 'testImages');
    const listing = await generateListing('001', '001', imagesPath);
    // check top level fields
    expect(typeof listing.title).toBe('string');
    expect(typeof listing.listing_id).toBe('string');
    expect(typeof listing.user).toBe('object');
    expect(typeof listing.description).toBe('string');
    expect(typeof listing.guests).toBe('number');
    expect(typeof listing.beds).toBe('number');
    expect(typeof listing.bedrooms).toBe('number');
    expect(typeof listing.publicBaths).toBe('number');
    expect(typeof listing.privateBaths).toBe('number');
    expect(typeof listing.sleepingArrangements).toBe('object');
    expect(typeof listing.amenities).toBe('object');
    // check user fields
    expect(typeof listing.user.user_id).toBe('string');
    expect(typeof listing.user.name).toBe('string');
    expect(typeof listing.user.image).toBe('string');
    // check amenities fields
    expect(typeof listing.amenities[0]).toBe('object');
    expect(typeof listing.amenities[0].type).toBe('string');
    expect(typeof listing.amenities[0].amenity).toBe('string');
    expect(typeof listing.amenities[0].description).toBe('string');
    // check arrangement fields
    expect(typeof listing.sleepingArrangements[0]).toBe('object');
    expect(typeof listing.sleepingArrangements[0].location).toBe('string');
    expect(typeof listing.sleepingArrangements[0].beds).toBe('object');
    expect(typeof listing.sleepingArrangements[0].beds[0]).toBe('object');
    expect(typeof listing.sleepingArrangements[0].beds[0].amount).toBe('number');
    expect(typeof listing.sleepingArrangements[0].beds[0].type).toBe('string');
  };
  // generating the listing uses random
  // checking every possible value would be complex and (hopefully) uncessasry
  // but we should make sure the edges of the range are valid
  jest.setTimeout(30000);
  jest.unmock('lodash');
  _.random = (min, max) => max;
  await checkFields();
  _.random = (min) => min;
  await checkFields();
});
