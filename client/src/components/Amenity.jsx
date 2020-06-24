import React from 'react';
import PropTypes from 'prop-types'

function Amenity(props) {
  const { type, description } = props;
  return (
    <div>
      <div>icon here</div>
      <div>{type}</div>
      <div>{description}</div>
    </div>
  );
}

Amenity.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Amenity;
