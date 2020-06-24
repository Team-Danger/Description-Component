import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
  return (
    <div>{title}</div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
