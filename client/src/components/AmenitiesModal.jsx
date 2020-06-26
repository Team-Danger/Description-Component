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

function AmenitiesModal({ show, handleClose, amenities }) {
  // const amenityTypes = sortAmenities(amenities);
  //   <div>
  //     <h1>amenity.type</h1>
  //     <p>amenity.description</p>
  //   </div>
  // ));
  return (
    <Modal show={show}>
      <ModalMain>
        <div>test</div>
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
