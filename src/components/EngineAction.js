import React from 'react';
import PropTypes from 'prop-types';

class EngineAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ACTION_TYPE_EVENT',
      startTime: props.startTime,
      endTime: props.endTime,
      onAction: props.onAction,
    };
  }

  tick = (params) => {
    // implementation
  }

  render() {
    // implementation
  }
}

EngineAction.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default EngineAction;
