import React from 'react';
import PropTypes from 'prop-types';

function Title({
  title, guests, bedrooms, beds,
}) {
  return (
    <div>
      <div>{title}</div>
      <div>{guests}</div>
      <div>{bedrooms}</div>
      <div>{beds}</div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  guests: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
};

export default Title;
