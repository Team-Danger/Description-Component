import React from 'react';
import PropTypes from 'prop-types';
import makeKey from '../../../util/makeKey';
import Title from './Title';
import Amenity from './Amenity';
import SleepingArrangment from './SleepingArrangement';
import User from './User';

function makeAmenities(amenities) {
  return amenities.map(({ amenity, description }) => (
    <Amenity key={makeKey('desc')} type={amenity} description={description} />
  ));
}

function makeArrangements(sleepingArrangements) {
  return sleepingArrangements.map(({ location, beds: bedsList }) => (
    <SleepingArrangment key={makeKey('desc')} location={location} beds={bedsList} />
  ));
}

function Description({ data }) {
  if (data) {
    const {
      body, title, guests, bedrooms, beds, amenities, sleepingArrangements, user,
    } = data;
    const amenityComponents = makeAmenities(amenities);
    const sleepingComponents = makeArrangements(sleepingArrangements);
    return (
      <div>
        <Title title={title} guests={guests} bedrooms={bedrooms} beds={beds} />
        <User name={user.name} imageUrl={user.imageUrl} />
        <div>{body}</div>
        {sleepingComponents}
        {amenityComponents}
      </div>
    );
  }
  return <div>no data</div>;
}

Description.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.shape(Amenity.propTypes)),
    sleepingArrangements: PropTypes.arrayOf(PropTypes.shape(SleepingArrangment.propTypes)),
    user: PropTypes.shape(User.propTypes),
  }).isRequired,
};

export default Description;
