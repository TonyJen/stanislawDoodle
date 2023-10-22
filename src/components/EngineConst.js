import React from 'react';
import PropTypes from 'prop-types';

class EngineConst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      rect: null,
      innerRects: {},
      innerRectCount: 0,
      ticksWhenInvisible: false,
      curPressed: false,
    };
  }

  addMainInnerRect() {
    this.setState({ mainInnerRect: {} });
  }

  addInnerRects(params) {
    this.setState({ innerRects: params });
  }

  getRect(params) {
    return this.state.rect;
  }

  setRender(params) {
    this.setState({ render: params });
  }

  setState(params) {
    this.setState(params);
  }

  setVisible(params) {
    this.setState({ visible: params });
  }

  render() {
    return this.state.render ? this.state.render() : null;
  }
}

EngineConst.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  visible: PropTypes.bool,
  render: PropTypes.func,
};

export default EngineConst;
