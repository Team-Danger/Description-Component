const _ = require('lodash');
const path = require('path');
const { fail } = require('assert');
const Listing = require('../db/Listing');
const generateListing = require('../util/generateListing.js');
require('babel-polyfill'); // this is needed to make async/await work

test('it should make the right kind of object', async () => {
  // generating the listing uses _.random
  // checking every possible value would be complex and (hopefully) uneccessary
  // but we should make sure the edges of the range are valid at least
  expect.assertions(2);
  jest.setTimeout(90000);
  jest.unmock('lodash');
  const imagesPath = path.join(__dirname, 'testImages');
  _.random = (min) => min;
  const minListing = new Listing(await generateListing('001', '001', imagesPath));
  _.random = (min, max) => max;
  const maxListing = new Listing(await generateListing('001', '001', imagesPath));
  return minListing.validate()
    .then((err) => {
      expect(err).toBe(undefined);
      return maxListing.validate();
    })
    .then((err) => {
      expect(err).toBe(undefined);
    })
    .catch(fail);
});
