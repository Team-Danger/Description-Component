import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import makeKey from '../../../util/makeKey';
import Title from './Title';
import Amenity from './Amenity';
import AmenitiesModal from './AmenitiesModal';
import SleepingArrangment from './SleepingArrangement';
import User from './User';
import DescriptionStyle from './styles/Description.style';

function makeAmenities(amenities) {
  return amenities.map(({ amenity, description }) => (
    <Amenity key={makeKey('da')} amenity={amenity} description={description} />
  ));
}

function makeArrangements(sleepingArrangements) {
  return sleepingArrangements.map(({ location, beds }) => (
    <SleepingArrangment key={makeKey('dsa')} location={location} beds={beds} />
  ));
}

function Description({ data, showModal }) {
  const {
    body, title, guests, bedrooms, beds, amenities, sleepingArrangements, user,
  } = data;
  const amenityComponents = makeAmenities(amenities);
  const sleepingComponents = makeArrangements(sleepingArrangements);
  return (
    <DescriptionStyle>
      <AmenitiesModal
        show={showModal}
        amenities={amenities}
      />
      <Link to="/amenities">All Amenities</Link>
      <Title title={title} guests={guests} bedrooms={bedrooms} beds={beds} />
      <User name={user.name} image={user.image} />
      <div>{body}</div>
      {sleepingComponents}
      {amenityComponents}
    </DescriptionStyle>
  );
}

Description.propTypes = {
  showModal: PropTypes.bool,
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

Description.defaultProps = {
  showModal: false,
};

export default Description;
