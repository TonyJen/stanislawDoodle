import React from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from '../constants/engine-const';

class EngineConst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...CONSTANTS,
    };
  }

  render() {
    return (
      <div>
        {Object.keys(this.state).map((key) => (
          <p key={key}>{`${key}: ${this.state[key]}`}</p>
        ))}
      </div>
    );
  }
}

EngineConst.propTypes = {
  ...Object.keys(CONSTANTS).reduce((acc, key) => {
    acc[key] = PropTypes.string; // Assuming all constants are strings
    return acc;
  }, {}),
};

export default EngineConst;
