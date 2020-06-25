import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import makeKey from '../../../util/makeKey';
import Title from './Title';
import Amenity from './Amenity';
import SleepingArrangment from './SleepingArrangement';
import User from './User';

class Description extends React.Component {
  componentDidMount() {
    const { endpoint } = this.props;
    axios.get(endpoint)
      .then(({ data }) => {
        this.setState(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    if (this.state) {
      const {
        body, title, guests, bedrooms, beds, amenities, sleepingArrangements, user
      } = this.state;
      const amenityComponents = amenities.map(({ amenity, description }) => (
        <Amenity key={makeKey('desc')} type={amenity} description={description} />
      ));
      const sleepingComponents = sleepingArrangements.map(({ location, beds: bedsList }) => (
        <SleepingArrangment key={makeKey('desc')} location={location} beds={bedsList} />
      ));
      return (
        <div>
          <Title title={title} guests={guests} bedrooms={bedrooms} beds={beds} />
          <User name={user.name} imageUrl={user.imageUrl} />
          <div>{body}</div>
          {sleepingComponents}
          {amenityComponents}
        </div>
      );
    }
    return <div>no data</div>;
  }
}

Description.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Description;
