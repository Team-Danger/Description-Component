import React from 'react';
import axios from 'axios';
import Title from './Title';

function endpoint(id) {
  return `http://localhost:3000/${id}/description`;
}

class Description extends React.Component {
  componentDidMount() {
    axios.get(endpoint('001'))
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

export default Description;
