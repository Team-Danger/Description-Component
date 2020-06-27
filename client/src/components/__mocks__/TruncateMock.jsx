import React from 'react';
import PropTypes from 'prop-types';

function Truncate({ children }) {
  return (<span>{children}</span>);
}

Truncate.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Truncate;
