import React from 'react';
import PropTypes from 'prop-types';
import makeKey from '../../../util/makeKey';
import Amenity from './Amenity';
import { AmenitiesBox, AmenitiesColumn } from './styles/Amenities.style';

function Amenities({ amenities }) {
  const amenityComponents = amenities.slice(0, 10).map(({ amenity }) => (
    <Amenity key={makeKey('al')} amenity={amenity} />
  ));

  return (
    <AmenitiesBox>
      <AmenitiesColumn>
        {amenityComponents.slice(0, 5)}
      </AmenitiesColumn>
      <AmenitiesColumn>
        {amenityComponents.slice(5)}
      </AmenitiesColumn>
    </AmenitiesBox>
  );
}

Amenities.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.shape(Amenity.propTypes)).isRequired,
};

export default Amenities;
