import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Title from './Title';
import Amenity from './Amenity';

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
        body, title, guests, bedrooms, beds, amenities,
      } = this.state;
      const amenityComponents = amenities.map(({ amenity, description }) => (
        <Amenity type={amenity} description={description} />
      ));
      return (
        <div>
          <Title title={title} guests={guests} bedrooms={bedrooms} beds={beds} />
          <div>{body}</div>
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
