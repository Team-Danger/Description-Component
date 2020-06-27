import React from 'react';
import PropTypes from 'prop-types';
import makeKey from '../../../util/makeKey';
import pluralString from '../../../util/pluralString';
import Bed from './Bed';
import {
  ArrangementBox,
  BedIcon,
  LocationTitle,
  BedTitle,
} from './styles/SleepingArrangement.style';
import BedImage from './svg/bedImage.svg';

function SleepingArrangment({ beds, location }) {
  const bedComponents = beds.map(({ amount, type }) => (
    <BedTitle key={makeKey('sa')}>{pluralString(amount, type)}</BedTitle>
  ));
  return (
    <ArrangementBox>
      <BedIcon>
        <BedImage />
      </BedIcon>
      <LocationTitle>{location}</LocationTitle>
      {bedComponents}
    </ArrangementBox>
  );
}

SleepingArrangment.propTypes = {
  location: PropTypes.string.isRequired,
  beds: PropTypes.arrayOf(PropTypes.shape(Bed.propTypes)).isRequired,
};

export default SleepingArrangment;
