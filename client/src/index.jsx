import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Description from './components/Description';

function makeUrl(id) {
  return `http://localhost:3000/${id}/description`;
}

function App({ endpoint }) {
  return <Description endpoint={endpoint} />;
}

App.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

ReactDOM.render(<App endpoint={makeUrl('001')} />, document.getElementById('container'));
