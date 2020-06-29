import React from 'react';
import PropTypes from 'prop-types';
import makeKey from '../../../util/makeKey';
import pluralString from '../../../util/pluralString';
import Bed from './Bed';
import { Section } from './styles/Description.style';
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
    <Section>
      <ArrangementBox>
        <BedIcon>
          <BedImage />
        </BedIcon>
        <LocationTitle>{location}</LocationTitle>
        {bedComponents}
      </ArrangementBox>
    </Section>
  );
}

SleepingArrangment.propTypes = {
  location: PropTypes.string.isRequired,
  beds: PropTypes.arrayOf(PropTypes.shape(Bed.propTypes)).isRequired,
};

export default SleepingArrangment;
