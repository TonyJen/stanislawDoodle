/**
 * Creates an action. Action is something that happens one time, or every tick
 * during a specific time span (we’re not using a term “event” since that
 * would conflict with browser events). We need our separate action system
 * instead of relying on setTimeouts, because at any given point our doodle
 * time can get divorced from physical time as it gets faster (fast forward),
 * slower (low frame rate or falling asleep to save CPU), stops altogether
 * (waiting for images to finish loading), or just lags behind physical time.
 * @param {Object} params Constructor parameters (explained below).
 * @constructor
 */
function EngineAction(params) {
  this.type = engine.ACTION_TYPE_EVENT;

  /**
   * Start time (in absolute ms).
   */
  this.startTime = params.startTime;

  /**
   * End time (in absolute ms).
   */
  this.endTime = params.endTime;

  /**
   * A function to be called while the action is active and within
   * startTime/endTime.
   */
  this.onAction = params.onAction;
}

/**
 * Creates a transition. A transition is a specialized type of action running
 * in a specific time span that interpolates one property from one value to
 * another.
 * @param {Object} params Constructor parameters (explained below).
 * @constructor
 */
function EngineTransition(params) {
  this.type = engine.ACTION_TYPE_TRANSITION;

  /**
   * Whether necessary first-run preparations have been made.
   */
  this.prepared = false;

  /**
   * Transitions can have their separate ids so that they can be removed
   * by ids.
   */
  this.id = params.id;

  /**
   * An id of the actor.
   */
  this.actorId = params.actorId;

  /**
   * Reference to the actor.
   */
  if (this.actorId) {
    this.actor = $a(this.actorId);
  }

  /**
   * (Optionally) an id of an inner element that the transition
   * affects.
   */
  this.innerId = params.innerId;

  /**
   * Transition start time (relative!). If not specified, starts right now.
   */
  this.startTime = engine.curGameTime + (params.startTime || 0);

  /**
   * Transition end time (relative!). Either specified as .duration or
   * .endTime relative to the current time.
   */
  if (!params.endTime) {
    this.endTime = this.startTime + params.duration;
  } else {
    this.endTime = engine.curGameTime + params.endTime;
  }

  /**
   * Transition properties.
   */
  this.properties = params.properties;

  this.onAction = engine.bind(this.tick, this);

  /**
   * Optional handler when we’re done.
   */
  this.onFinish = params.onFinish;

  /**
   * Image alignment.
   */
  this.align = params.align;

  /**
   * How many times have a transition played already.
   */
  this.playCount = 0;

  /**
   * How many times a transition can play (defaults to 1 if not specified).
   */
  this.maxPlayCount = params.count || 1;

  /**
   * Easing function for the transition (defaults to ease in/out if not
   * specified).
   */
  this.easing = params.easing || engine.easeInOut;

  /**
   * Whether the transition alternates back and forth. Note: play count
   * has to equal at least 2 to go both ways.
   */
  this.alternate = params.alternate;

  /**
   * Whether to clear the contents after playing the transition (defaults
   * to no).
   */
  this.clearOnFinish = !!params.clearOnFinish;
}

/**
 * Prepare a transition: Make sure we know how long we’re running, what are
 * the start/end values, etc.
 */
EngineTransition.prototype.prepare = function () {
  // ... (code omitted for brevity)
};

/**
 * Transition tick.
 * @param {Object} params
 * - {boolean} .lastTick Whether this is a last tick.
 */
EngineTransition.prototype.tick = function (params) {
  // ... (code omitted for brevity)
};

/**
 * Last transition tick. We call it to make sure we are always leaving at
 * the precise desired transition end value, and we also prepare for another
 * transition run.
 */
EngineTransition.prototype.lastTick = function () {
  // ... (code omitted for brevity)
};
