const request = require('supertest');
const path = require('path');
const app = require('../server/app');
const generateListing = require('../util/generateListing');
const Listing = require('../db/Listing');
require('babel-polyfill'); // this is needed to make async/await work

// this just tests that the code for responding to a get request is right
test('api should respond with the right data', async () => {
  const imagesPath = path.join(__dirname, 'testImages');
  const testId = '001';
  const testListing = new Listing(await generateListing(testId, testId, imagesPath));
  // don't need to test that mongo is working
  Listing.findOne = ({ user }) => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line camelcase
      if (user.user_id === testId) {
        resolve(testListing);
      } else {
        // eslint-disable-next-line camelcase
        reject(new Error(`fake error from apiEndpoint.test.js; user_id = ${user.user_id}`));
      }
    });
  };
  return request(app)
    .get('/001/description')
    .then((res) => {
      expect(res.statusCode).toBe(200);
      expect(res.text).toEqual(JSON.stringify(testListing));
    });
});
