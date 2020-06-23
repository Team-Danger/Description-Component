import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Description from './components/Description';

function App({ id }) {
  return <Description id={id} />;
}

App.propTypes = {
  id: PropTypes.string.isRequired,
};

ReactDOM.render(<App data="001" />, document.getElementById('container'));
