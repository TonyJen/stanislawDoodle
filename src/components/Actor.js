import React from 'react';

class Actor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
      debugShiftPressed: false,
      startValues: {},
      endValues: {},
      altValues: {},
      valueRange: {},
      curPressed: false,
      ticksWhenInvisible: true,
      innerRects: {top: 0, left: 0, width: 0, height: 0},
      innerRectCount: 1,
    };
  }

  onKeyUp(e) {
    this.setState({ debugShiftPressed: e.shiftKey });
  }

  onPageClick(e) {
    this.setState({ mouseX: e.clientX, mouseY: e.clientY });
  }

  onBodyMouseDown(e) {
    this.setState({ curPressed: true });
  }

  onPageMouseUp(e) {
    this.setState({ curPressed: false });
  }

  onMouseMove(e) {
    this.setState({ mouseX: e.clientX, mouseY: e.clientY });
  }

  tick(params) {
    this.setState({ startValues: params.startValues });
  }

  lastTick() {
    this.setState({ endValues: params.endValues });
  }

  render() {
    return (
      <div>
        {this.state.innerRects.map((rect, index) => (
          <div
            key={index}
            style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
            onClick={this.onPageClick}
            onMouseDown={this.onBodyMouseDown}
            onMouseUp={this.onPageMouseUp}
            onMouseMove={this.onMouseMove}
          ></div>
        ))}
      </div>
    );
  }
}

export default Actor;
