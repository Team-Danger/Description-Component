import React from 'react';
import PropTypes from 'prop-types';
import Amenity from './Amenity';
import { Modal, ModalMain } from './styles/AmenitiesModal.style';

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
    <div>
      <h2>{amenity.amenity}</h2>
      <p>{amenity.description}</p>
      <hr />
    </div>
  ));
  return (
    <div>
      <h1>{type}</h1>
      {amenityComponents}
    </div>
  );
}

function AmenitiesModal({ show, handleClose, amenities }) {
  const amenityTypes = sortAmenities(amenities);
  const typeComponents = Object.entries(amenityTypes).map(AmenityType);
  return (
    <Modal show={show} onClick={handleClose}>
      <ModalMain onClick={(e) => e.stopPropagation()}>
        {typeComponents}
        <button type="button" onClick={handleClose}>X</button>
      </ModalMain>
    </Modal>
  );
}

AmenitiesModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.shape({
    ...Amenity.propTypes,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

AmenitiesModal.defaultProps = {
  show: false,
};

export default AmenitiesModal;
