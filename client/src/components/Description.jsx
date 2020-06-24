import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Title from './Title';
import Amenity from './Amenity':

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
    const { body, title, guests, bedrooms, beds, amenities } = this.state;
    const titleProps = { title, guests, bedrooms, beds };
    const amenityComponents = amenities.map(({ amenity, description }) => (
      <Amenity type={amenity} description={description} />
    ));
    return (
      <div>
        <Title {...titleProps}/>
        <p>{body}</p>
        {amenityComponents}
      </div>
    );
  }
}

Description.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Description;
