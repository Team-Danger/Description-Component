const fs = require('fs');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');

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
  const adjective = _.sample([
    'Cozy',
    'Humble',
    'Extravagant',
    'Rustic',
    'Private',
    'Amazing',
    'Extreme',
  ]);
  const place = _.sample([
    'apartment',
    'house',
    'condo',
    'cottage',
    'villa',
    'hovel',
    'room',
  ]);
  const location = _.sample([
    'Portland',
    'Seattle',
    'San Francisco',
    'Forest Grove',
    'Dodgeville',
    'Corvallis',
    'Philomath',
  ]);
  return `${adjective} ${place} in ${location}`;
}

function generateDescription() {
  return axios.get('https://baconipsum.com/api/?type=meat-and-filler&format=text');
}

function generateArrangements() {
  let hasCommonArea = false;
  return _.range(1, _.random(2, 10)).map((index) => {
    // every iteration we have a 1 in 3 chance of making a common area
    let location;
    if (_.random(0, 3) && !hasCommonArea) {
      hasCommonArea = true;
      location = 'Common Space';
    } else if (hasCommonArea) {
      // if there is a common area it caused us to skip an index
      // so we have to do this to make the bedrooms count up right
      location = `Bedroom${index - 1}`;
    } else {
      location = `Bedroom${index}`;
    }
    const bed = _.sample([
      'Double',
      'Queen',
      'Single',
      'Sofa Bed',
      'King',
      'Small Double',
      'Couch',
      'Bunk Bed',
      'Floor Mattress',
      'Air Mattress',
      'Crib',
      'Toddler Bed',
      'Hammock',
      'Water Bed',
    ]);
    return {
      location,
      bed,
    };
  });
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
    description: await generateDescription(),
    guests: _.random(1, 10),
    bedrooms: _.random(0, 5),
    beds: _.random(1, 20),
    publicBaths,
    privateBaths,
  };
}

export default generateListing;
