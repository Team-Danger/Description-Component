import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import makeKey from '../../../util/makeKey';
import Title from './Title';
import Body from './Body';
import Amenity from './Amenity';
import Amenities from './Amenities';
import AmenitiesModal from './AmenitiesModal';
import SleepingArrangment from './SleepingArrangement';
import DescriptionStyle from './styles/Description.style';

function makeArrangements(sleepingArrangements) {
  return sleepingArrangements.map(({ location, beds }) => (
    <SleepingArrangment key={makeKey('dsa')} location={location} beds={beds} />
  ));
}

function Description({ data, showModal }) {
  const {
    body, title, guests, bedrooms, beds, amenities, sleepingArrangements, user,
  } = data;
  const sleepingComponents = makeArrangements(sleepingArrangements);
  return (
    <DescriptionStyle>
      <AmenitiesModal
        show={showModal}
        amenities={amenities}
      />
      <Title title={title} guests={guests} bedrooms={bedrooms} beds={beds} user={user} />
      <Body>{body}</Body>
      {sleepingComponents}
      <Amenities amenities={amenities} />
      <Link to="/amenities">All Amenities</Link>
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
    user: PropTypes.shape(Title.propTypes.user),
  }).isRequired,
};

Description.defaultProps = {
  showModal: false,
};

export default Description;
