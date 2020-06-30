import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Description from './components/Description';

function makeUrl(id) {
  return `/api/description/${id}`;
}

class App extends React.Component {
  componentDidMount() {
    const { endpoint } = this.props;
    axios.get(endpoint)
      .then(({ data }) => {
        this.setState({ data });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    if (this.state) {
      const { data } = this.state;
      return (
        <Router>
          <Switch>
            <Route path="/amenities">
              <Description showModal data={data} />
            </Route>
            <Route path="/">
              <Description data={data} />
            </Route>
          </Switch>
        </Router>
      );
    }
    return <div>no data</div>;
  }
}

App.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

ReactDOM.render(<App endpoint={makeUrl('001')} />, document.getElementById('container'));
