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
      prepared: props.prepared,
      id: props.id,
      actorId: props.actorId,
      actor: props.actor,
      innerId: props.innerId,
      properties: props.properties,
      onFinish: props.onFinish,
      align: props.align,
      playCount: props.playCount,
      maxPlayCount: props.maxPlayCount,
      easing: props.easing,
      alternate: props.alternate,
      clearOnFinish: props.clearOnFinish,
    };
  }
  
  tick = (params) => {
    if (!this.state.prepared) {
      this.prepare();
    }
  
    if (params && params.lastTick) {
      var pos = 1;
    } else {
      var transitionTime = this.props.curGameTime - this.state.startTime;
      var pos = this.props.easing(transitionTime / (this.state.endTime - this.state.startTime));
    }
  
    this.setState(prevState => ({
      ...prevState,
      pos: pos,
      properties: this.state.properties
    }));
  }
  
  prepare = () => {
    this.setState(prevState => ({
      ...prevState,
      startValues: this.state.properties,
      endValues: this.state.properties,
      altValues: this.state.properties,
      valueRange: this.state.properties
    }));
  }
  
  lastTick = () => {
    this.setState(prevState => ({
      ...prevState,
      playCount: prevState.playCount + 1
    }), () => {
      if (this.state.playCount < this.state.maxPlayCount) {
        this.setState(prevState => ({
          ...prevState,
          startValues: this.state.endValues,
          endValues: this.state.startValues,
          valueRange: this.state.endValues - this.state.startValues
        }));
      } else {
        if (this.state.onFinish) {
          this.state.onFinish();
        }
        // Call function to remove action here
      }
    });
  }
  
  render() {
    return (
      <div key={this.state.id}>
        {/* Render content based on state here */}
      </div>
    );
  }
  
  EngineAction.propTypes = {
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    onAction: PropTypes.func.isRequired,
  };
}

EngineAction.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default EngineAction;
