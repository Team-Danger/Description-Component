import React from 'react';
import PropTypes from 'prop-types';

function Amenity(props) {
  const { amenity, description } = props;
  return (
    <div>
      <div>icon here</div>
      <div>{amenity}</div>
      <div>{description}</div>
    </div>
  );
}

Amenity.propTypes = {
  amenity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Amenity;
