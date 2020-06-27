import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleLines = this.toggleLines.bind(this);
  }

  toggleLines(event) {
    event.preventDefault();
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  render() {
    const { expanded } = this.state;
    const { children } = this.props;
    return (
      <Truncate
        lines={!expanded && 5}
        ellipsis={(
          <span>
            ...
            <button type="button" onClick={this.toggleLines}>
              read more
            </button>
          </span>
      )}
      >
        {children}
      </Truncate>
    );
  }
}

Body.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Body;
