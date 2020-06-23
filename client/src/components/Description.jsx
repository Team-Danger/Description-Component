import React from 'react';
import axios from 'axios';

function endpoint(id) {
  return `http://localhost:3000/${id}/description`;
}

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: 'no data',
    };
  }

  componentDidMount() {
    axios.get(endpoint('001'))
      .then(({ data }) => {
        this.setState({ body: data.description });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    const { body } = this.state;
    return <div>{body}</div>;
  }
}

export default Description;
