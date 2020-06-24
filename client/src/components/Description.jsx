import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Title from './Title';

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
    const { description, title } = this.state;
    return (
      <div>
        <Title title={title} />
        {description}
      </div>
    );
  }
}

Description.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Description;
