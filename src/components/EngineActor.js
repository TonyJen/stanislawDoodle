import React from 'react';
import PropTypes from 'prop-types';

class EngineActor extends React.Component {
  static propTypes = {
    curPressed: PropTypes.bool.isRequired,
    this.state = {
      id: props.id,
      rect: null,
      innerRects: {},
      origActorData: props.origActorData,
      planeCorrection: props.planeCorrection,
      innerRectCount: props.innerRectCount,
      ticksWhenInvisible: props.ticksWhenInvisible,
      curPressed: props.curPressed,
    };
    
    // methods from engine-actors.js converted to React...
    this.addMainInnerRect = function() {
      const origActorData = this.state.origActorData;
      const innerRectsData = {};
      innerRectsData[engine.MAIN_RECT_ID] = {
          x: 0, y: 0,
          width: origActorData.WIDTH, height: origActorData.HEIGHT,
          clampRotate: origActorData.CLAMP_ROTATE
      };
      this.addInnerRects({ innerRectsData: innerRectsData });
    }.bind(this);
    this.addInnerRects = function(params) {
      for (let id in params.innerRectsData) {
        let innerRectData = params.innerRectsData[id];
        let innerCount = id === engine.MAIN_RECT_ID ? -1 : this.state.innerRectCount++;
        this.setState(prevState => {
          prevState.innerRects[id] = new EngineRect({
            actor: this, id: this.id,
            innerId: id,
            innerCount: innerCount,
            forceRenderDom: innerRectData.forceRenderDom,
            horLoopSize: innerRectData.horLoopSize });
          innerRectData.visible = true;
          prevState.innerRects[id].transform(innerRectData);
          return prevState;
        });
      }
    }.bind(this);
    this.unpressButton = function(params) {
      if (this.state.curPressed) {
        let speed = engine.BUTTON_UNPRESS_ANIMATION_SPEED;
        if (engine.features.touch) {
          speed *= 3;
        }
        this.showAnimation({
          innerId: params.innerId, speed: speed, count: 1,
          imageIds: params.imageIds });
      }
    }.bind(this);
    this.update = function(params) {
      this.rect.update();
      if (params && params.allInnerRects) {
        for (var i in this.innerRects) {
          this.innerRects[i].update();
        }
      }
    }.bind(this);
    this.onClickableMouseOver = function(e) {
      var event = engine.getDomEvent({ event: e });
      engine.interaction();
      if (engine.customMousePointer) {
        engine.setEmptyCssCursor({ el: event.targetEl });
        $a('mouse-pointer').setState({ state: 'hover' });
      } else {
        event.targetEl.style.cursor = 'pointer';
      }
    }.bind(this);
    this.onClickableMouseOut = function(e) {
      var event = engine.getDomEvent({ event: e });
      engine.interaction();
      if (this.curPressed && event.targetEl.rect.clickableEl.onMouseUpHandler) {
        event.targetEl.rect.clickableEl.onMouseUpHandler();
      }
      this.curPressed = false;
      if (engine.customMousePointer) {
        $a('mouse-pointer').setState({ state: 'normal' });
      }
    }.bind(this);
    this.onMouseDown = function(e) {
      var event = engine.getDomEvent({ event: e });
      if (event.targetEl.onMouseDownHandler) {
        engine.interaction({ meaningful: true });
        event.targetEl.onMouseDownHandler(event);
      }
      this.curPressed = true;
    }.bind(this);
    this.onMouseUp = function(e) {
      var event = engine.getDomEvent({ event: e });
      if (event.targetEl.onMouseUpHandler) {
        event.targetEl.onMouseUpHandler(event);
      }
    }.bind(this);
    this.onMouseClick = function(e) {
      var event = engine.getDomEvent({ event: e });
      if (this.curPressed) {
        engine.interaction({ meaningful: true });
        this.onClick({ innerId: event.targetEl.innerId });
        this.curPressed = false;
        engine.preventDefaultEvent({ event: event });
        engine.stopPropagationEvent({ event: event });
      }
    }.bind(this);
    this.turnIntoButton = function(params) {
      this.setClickable({
          innerId: params.innerId,
          clickable: params.clickable,
          noPadding: params.noPadding,
          onMouseDown: engine.bind(
              function() {
                this.pressButton({ innerId: params.innerId,
                                   imageIds: params.pressAnimImageIds }) },
              this),
          onMouseUp: engine.bind(
              function() {
                this.unpressButton({ innerId: params.innerId,
                                     imageIds: params.unpressAnimImageIds }) },
              this)
      });
    }.bind(this);
    this.pressButton = function(params) {
      this.showAnimation({
        innerId: params.innerId,
        speed: engine.BUTTON_PRESS_ANIMATION_SPEED, count: 1,
        imageIds: params.imageIds });
    }.bind(this);
    // other methods...
      innerRectCount: 0,
      ticksWhenInvisible: false,
      curPressed: false,
      // additional state variables...
    };
  }

      <div className="rect" style={{ width: this.state.rect.width, height: this.state.rect.height }}>
        {Object.values(this.state.innerRects).map((innerRect, index) => (
          <div key={index} className="innerRect" style={{ width: innerRect.width, height: innerRect.height }}></div>
        ))}
      </div>
      <div className="origActorData" style={{ width: this.state.origActorData.width, height: this.state.origActorData.height }}></div>
      <div className="planeCorrection" style={{ width: this.state.planeCorrection.width, height: this.state.planeCorrection.height }}></div>
      <div className="innerRectCount" style={{ width: this.state.innerRectCount, height: 'auto' }}></div>
      <div className="ticksWhenInvisible" style={{ width: this.state.ticksWhenInvisible ? '100%' : '0', height: 'auto' }}></div>
      <div className="curPressed" style={{ width: this.state.curPressed ? '100%' : '0', height: 'auto' }}></div>
    </div>
  );
  
  export default EngineActor;
  \n
