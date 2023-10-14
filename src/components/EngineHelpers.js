import React from 'react';

class EngineHelpers extends React.Component {
  constructor(props) {
    super(props);
    this.listeners = [];
  }

  probability(params) {
    return Math.random() < params.probability;
  }
}

  rangeRand(params) {
    return Math.random() * (params.max - params.min) + params.min;
  }

  intRangeRand(params) {
    return Math.floor(Math.random() * (params.max - params.min + 1) + params.min);
  }

  setRand(params) {
    return params.set[Math.floor(Math.random() * params.set.length)];
  }

  modulo(params) {
    return params.val - Math.floor(params.val / params.mod) * params.mod;
  }

  linear(t) {
    return t;
  }

  easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  easeIn(t) {
    return t * t * t;
  }

  easeInOut(t) {
    return 3 * t * t - 2 * t * t * t;
  }

  backHelper(x, t) {
    return Math.pow(t, 2) * ((x + 1) * t - x);
  }

  backEaseInOut(t) {
    if (t <= .5) {
      return this.backHelper(1.618, 2 * t) / 2;
    } else {
      return (2 - this.backHelper(1.618, 2 * (1 - t))) / 2;
    }
  }

  strongBackEaseOut(t) {
    if (t <= .5) {
      return this.easeOut(t) / 2;
    } else {
      return (2 - this.backHelper(10, 2 * (1 - t))) / 2;
    }
  }

  fall(t) {
    if (t < .82) {
      return this.easeIn(t / .82);
    } else if (t < .88) {
      return 1 - this.easeInOut((t - .82) / .06) * .05;
    } else if (t < .93) {
      return .95 + this.easeInOut((t - .88) / .05) * .05;
    } else if (t < .97) {
      return 1 - this.easeInOut((t - .93) / .04) * .02;
    } else {
      return .98 + this.easeInOut((t - .97) / .03) * .02;
    }
  }

  getElPagePos(params) {
    var el = params.el;
    var pos = { left: 0, top: 0 };

    while (el) {
      pos.left += el.offsetLeft;
      pos.top += el.offsetTop;

      el = el.offsetParent;
    }

    return pos;
  }

  addEventListener(params) {
    this.listeners.push(params);
    if (window.addEventListener) {
      params.el.addEventListener(params.type, params.handler, false);
    } else {
      params.el.attachEvent('on' + params.type, params.handler);
    }
  }

  removeEventListener(params) {
    if (window.removeEventListener) {
      params.el.removeEventListener(params.type, params.handler, false);
    } else {
      params.el.detachEvent('on' + params.type, params.handler);
    }
  }

  removeAllEventListeners() {
    var params;
    while (params = this.listeners.pop()) {
      this.removeEventListener.call(null, params);
    }
  }

  getDomEvent(params) {
    var event = window.event || params.event;
    event.targetEl = event.target ? event.target : event.srcElement;

    return event;
  }

  preventDefaultEvent(params) {
    if (params.event.preventDefault) {
      params.event.preventDefault();
    } else {
      params.event.returnValue = false;
    }
  }

  stopPropagationEvent(params) {
    if (params.event.stopPropagation) {
      params.event.stopPropagation();
    } else {
      params.event.cancelBubble = true;
    }
  }

  getDomElements(params) {
    if (params.el) {
      var el = params.el;
    } else {
      var el = document.body;
    }

    if (document.querySelectorAll) {
      var query = '';
      if (params.tagName) {
        query += params.tagName;
      }
      if (params.className) {
        query += '.' + params.className;
      }

      return el.querySelectorAll(query);
    } else if (document.getElementsByClassName) {
      if (params.tagName && params.className) {
        var els = el.getElementsByClassName(params.className);

        var newEls = [];
        for (var i = 0, el; el = els[i]; i++) {
          if (el.tagName.toLowerCase() == params.tagName) {
            newEls.push(el);
          }
        }

        return newEls;
      } else if (params.tagName) {
        return el.getElementsByTagName(params.tagName);
      } else if (params.className) {
        return el.getElementsByClassName(params.className);
      }
    } else {
      if (params.className) {
        if (params.tagName) {
          var els = el.getElementsByTagName(params.tagName);
        } else {
          var els = el.getElementsByTagName('*');
        }

        var regExp = new RegExp('(^|\ )' + params.className + '(\ |$)');

        var newEls = [];
        for (var i = 0, el; el = els[i]; i++) {
          if (el.className.match(regExp)) {
            newEls.push(el);
          }
        }

        return newEls;
      } else if (params.tagName) {
        return el.getElementsByTagName(params.tagName);
      }
    }
  }

  setEmptyCssCursor(params) {
    params.el.style.cursor = 'url(' + this.EMPTY_MOUSE_POINTER_URL + '), auto';
    if (!this.features.ie8OrLower) {
      params.el.style.cursor = 'none';
    }
  }

  requestAnimFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, this.REQUEST_ANIM_FRAME_FALLBACK_DELAY);
    };
}

export default EngineHelpers;
