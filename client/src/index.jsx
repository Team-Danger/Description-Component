import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Description from './components/Description';

function endpoint(id) {
  return `http://localhost:3000/${id}/description`;
}

function App({ endpoint }) {
  return <Description endpoint={endpoint} />;
}

App.propTypes = {
  id: PropTypes.string.isRequired,
};

ReactDOM.render(<App endpoint={endpoint('001')} />, document.getElementById('container'));
