import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Amenity from './Amenity';
import {
  Modal,
  ModalMain,
  AmenitiesSection,
  AmenitiesRow,
  AmenityTitle,
  AmenityDescription,
  CloseSection,
  CloseButton,
} from './styles/AmenitiesModal.style';
import makeKey from '../../../util/makeKey';

function sortAmenities(amenities) {
  const amenityTypes = {};
  amenities.forEach((amenity) => {
    let amenityType = amenityTypes[amenity.type];
    if (amenityType === undefined) {
      amenityType = [amenity];
    } else {
      amenityType.push(amenity);
    }
    amenityTypes[amenity.type] = amenityType;
  });
  return amenityTypes;
}

// this takes a tuple because that's what Object.entries returns
function AmenityType([type, amenities]) {
  const amenityComponents = amenities.map((amenity) => (
    <AmenitiesRow key={makeKey('aml')}>
      <AmenityTitle>{amenity.amenity}</AmenityTitle>
      <AmenityDescription>{amenity.description}</AmenityDescription>
    </AmenitiesRow>
  ));
  return (
    <div key={makeKey('amt')}>
      <h3>{type}</h3>
      {amenityComponents}
    </div>
  );
}

function AmenitiesModal({ show, amenities }) {
  const history = useHistory();
  const navHome = () => history.replace('/');
  const amenityTypes = sortAmenities(amenities);
  const typeComponents = Object.entries(amenityTypes).map(AmenityType);
  return (
    <Modal show={show} onClick={navHome}>
      <ModalMain onClick={(e) => e.stopPropagation()}>
        <CloseSection>
          <CloseButton type="button" onClick={navHome}>x</CloseButton>
        </CloseSection>
        <AmenitiesSection>
          <h2>Amenities</h2>
          {typeComponents}
        </AmenitiesSection>
      </ModalMain>
    </Modal>
  );
}

AmenitiesModal.propTypes = {
  show: PropTypes.bool,
  amenities: PropTypes.arrayOf(PropTypes.shape({
    ...Amenity.propTypes,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

AmenitiesModal.defaultProps = {
  show: false,
};

export default AmenitiesModal;
