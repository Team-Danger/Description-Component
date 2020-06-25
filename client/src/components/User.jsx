import React from 'react';
import PropTypes from 'prop-types';

function User({ name, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <div>{name}</div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default User;
