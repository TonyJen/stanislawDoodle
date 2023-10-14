import React from 'react';

class Rects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        position: 'absolute',
        top: this.props.y,
        left: this.props.x,
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.color,
      }} />
    );
  }
}

export default Rects;
