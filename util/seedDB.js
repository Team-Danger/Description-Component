const fs = require('fs');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const { bedStrings, amenityStrings, titleStrings } = require('./seedStrings.js');

// call fn(time) a random number of times from max to min (inclusive)
function randomIterations(min, max, fn) {
  _.range(1, _.random(min, max)).map(fn);
}

// returns a promise that will resolve to a user object
async function generateUser(id) {
  const name = await axios.get('https://api.namefake.com/');
  const imagePath = path.join(__dirname, 'profileImages', `${id}.jpg`);
  const imageURL = `https://github.com/Team-Danger/FEC-Description-Component/profileImages/${id}.jpg`;
  const imageStream = await axios({
    method: 'get',
    url: 'https://source.unsplash.com/56x56/?profile,user',
    responseType: 'stream',
  });
  imageStream.data.pipe(fs.createWriteStream(imagePath));
  return {
    user_id: id,
    user_name: name,
    user_image: imageURL,
  };
}

function generateTitle() {
  const adjective = _.sample(titleStrings.adjective);
  const place = _.sample(titleStrings.place);
  const location = _.sample(titleStrings.location);
  return `${adjective} ${place} in ${location}`;
}

function generateIpsum(sentances = 10) {
  return axios.get(`https://baconipsum.com/api/?type=meat-and-filler&format=text&sentances=${sentances}`);
}

function generateArrangements() {
  let hasCommonArea = false;
  const arrangements = [];
  randomIterations(1, _.random(2, 10), (index) => {
    let location;
    // every iteration we have a 1 in 3 chance of making a common area
    if (!_.random(0, 3) && !hasCommonArea) {
      hasCommonArea = true;
      location = 'Common Space';
    } else if (hasCommonArea) {
      // if there is a common area it caused us to skip an index
      // so we have to do this to make the bedrooms count up right
      location = `Bedroom${index - 1}`;
    } else {
      // there's no common area so the index matches the bedroom number
      location = `Bedroom${index}`;
    }
    const beds = [];
    randomIterations(1, 10, () => {
      const bed = _.sample(bedStrings);
      beds.push({ amount: _.random(1, 5), bed });
    });
    arrangements.push({
      location,
      beds,
    });
  });
  return arrangements;
}

// returns a promise resolving to a list of 5 to 20 non repeating amenities
async function generateAmenities() {
  const amenities = [];

  randomIterations(5, 20, async () => {
    const category = _.sample(amenityStrings);
    // 50% chance of having a description
    const description = _.random(0, 1)
      ? await generateIpsum(1)
      : '';
    const amenity = ({
      type: category.type,
      amenity: _.sample(category.amenities),
      description,
    });
    _.remove(category.amenities, (a) => a === amenity.amenity);
    amenities.push(amenity);
  });
  return amenities;
}

// returns a promise that will resolve to a listing object
async function generateListing(listingId, userId) {
  // ensure that there is always at least one bathroom
  // but make it possible to have 0 public or 0 private baths
  const publicBaths = _.random(0, 10);
  const privateBaths = _.random(publicBaths === 0 ? 1 : 0, 10);
  return {
    listing_id: listingId,
    user: await generateUser(userId),
    title: generateTitle(),
    description: await generateIpsum(),
    guests: _.random(1, 10),
    bedrooms: _.random(0, 5),
    beds: _.random(1, 20),
    publicBaths,
    privateBaths,
    sleepingArrangements: generateArrangements(),
    amenities: generateAmenities(),
  };
}

export default generateListing;
