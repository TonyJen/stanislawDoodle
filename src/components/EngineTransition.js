import React from 'react';
import PropTypes from 'prop-types';

class EngineTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ACTION_TYPE_TRANSITION',
      prepared: false,
      id: props.id,
      actorId: props.actorId,
      innerId: props.innerId,
      startTime: props.startTime,
      endTime: props.endTime,
      properties: props.properties,
      onFinish: props.onFinish,
      align: props.align,
      playCount: 0,
      maxPlayCount: props.maxPlayCount || 1,
      easing: props.easing || this.easeInOut,
      alternate: props.alternate,
      clearOnFinish: !!props.clearOnFinish,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      type: 'ACTION_TYPE_TRANSITION',
      prepared: false,
      id: props.id,
      actorId: props.actorId,
      innerId: props.innerId,
      startTime: props.startTime,
      endTime: props.endTime,
      properties: props.properties,
      onFinish: props.onFinish,
      align: props.align,
      playCount: 0,
      maxPlayCount: props.maxPlayCount || 1,
      easing: props.easing || this.easeInOut,
      alternate: props.alternate,
      clearOnFinish: !!props.clearOnFinish,
    };

    this.tick = this.tick.bind(this);
    this.lastTick = this.lastTick.bind(this);
  }

  prepare() {
    // Set start values, end values, and value ranges for each property
    // based on the properties object in the state
  }

  tick(params) {
    // Calculate the current position of the transition and update the values
    // of the properties being transitioned
    // Handle the last tick of the transition if params.lastTick is true
  }

  lastTick() {
    // Prepare for another transition run, clear the rect if necessary, and
    // remove the action
    // Increment the play count and check if the transition should be removed
    // or prepared for another run
  }

  render() {
    // implementation
  }
}

EngineTransition.propTypes = {
  id: PropTypes.string,
  actorId: PropTypes.string,
  innerId: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  properties: PropTypes.object,
  onFinish: PropTypes.func,
  align: PropTypes.string,
  maxPlayCount: PropTypes.number,
  easing: PropTypes.func,
  alternate: PropTypes.bool,
  clearOnFinish: PropTypes.bool,
};

export default EngineTransition;
