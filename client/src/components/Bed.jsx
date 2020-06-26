import React from 'react';
import PropTypes from 'prop-types';

function Bed({ type, amount }) {
  return (
    <div>
      <div>{amount}</div>
      <div>{type}</div>
    </div>
  );
}

Bed.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Bed;
