import React from 'react';
import PropTypes from 'prop-types';
import makeKey from '../../../util/makeKey';
import Bed from './Bed';

function SleepingArrangment({ beds, location }) {
  const bedComponents = beds.map(({ amount, type }) => (
    <Bed key={makeKey('sa')} amount={amount} type={type} />
  ));
  return (
    <div>
      <div>{location}</div>
      <div>{bedComponents}</div>
    </div>
  );
}

SleepingArrangment.propTypes = {
  location: PropTypes.string.isRequired,
  beds: PropTypes.arrayOf(PropTypes.shape(Bed.propTypes)).isRequired,
};

export default SleepingArrangment;
