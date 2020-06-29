import React from 'react';
import PropTypes from 'prop-types';
import AC from './svg/ac.svg';
import CarbonMonoxide from './svg/carbonmonoxide.svg';
import Essentials from './svg/essentials.svg';
import Fireplace from './svg/fireplace.svg';
import Kitchen from './svg/kitchen.svg';
import Parking from './svg/parking.svg';
import TV from './svg/tv.svg';
import Wifi from './svg/wifi.svg';
import Unknown from './svg/unknown.svg';
import { AmenityRow, IconBox } from './styles/Amenities.style';

const iconMap = {
  'Air Conditioning': AC,
  Essentials,
  'Carbon Monoxide Detector': CarbonMonoxide,
  Fireplace,
  Kitchen,
  'On-Street Parking': Parking,
  'On-Site Parking': Parking,
  TV,
  Wifi,
};

function Amenity({ amenity }) {
  const Icon = iconMap[amenity]
    ? iconMap[amenity]
    : Unknown;
  return (
    <AmenityRow>
      <IconBox>
        <Icon />
      </IconBox>
      <div>{amenity}</div>
    </AmenityRow>
  );
}

Amenity.propTypes = {
  amenity: PropTypes.string.isRequired,
};

export default Amenity;
