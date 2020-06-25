import React from 'react';
import PropTypes from 'prop-types';

function User({ name, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default User;
