import React from 'react';
import PropTypes from 'prop-types';
import makeKey from '../../../util/makeKey';
import Title from './Title';
import Amenity from './Amenity';
import AmenitiesModal from './AmenitiesModal';
import SleepingArrangment from './SleepingArrangement';
import User from './User';
import DescriptionStyle from './styles/Description.style';

function makeAmenities(amenities) {
  return amenities.map(({ amenity, description }) => (
    <Amenity key={makeKey('da')} amenity={amenity} description={description} />
  ));
}

function makeArrangements(sleepingArrangements) {
  return sleepingArrangements.map(({ location, beds }) => (
    <SleepingArrangment key={makeKey('dsa')} location={location} beds={beds} />
  ));
}

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: props.data,
    };
    this.setModalShown = this.setModalShown.bind(this);
  }

  setModalShown(show) {
    this.setState({ show });
  }

  render() {
    const { data, show } = this.state;
    const {
      body, title, guests, bedrooms, beds, amenities, sleepingArrangements, user,
    } = data;
    console.log(amenities);
    const amenityComponents = makeAmenities(amenities);
    const sleepingComponents = makeArrangements(sleepingArrangements);
    return (
      <DescriptionStyle>
        <AmenitiesModal
          show={show}
          handleClose={() => this.setModalShown(false)}
          amenities={amenities}
        />
        <button type="button" onClick={() => this.setModalShown(true)}>show</button>
        <Title title={title} guests={guests} bedrooms={bedrooms} beds={beds} />
        <User name={user.name} image={user.image} />
        <div>{body}</div>
        {sleepingComponents}
        {amenityComponents}
      </DescriptionStyle>
    );
  }
}

Description.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.shape(Amenity.propTypes)),
    sleepingArrangements: PropTypes.arrayOf(PropTypes.shape(SleepingArrangment.propTypes)),
    user: PropTypes.shape(User.propTypes),
  }).isRequired,
};

export default Description;
