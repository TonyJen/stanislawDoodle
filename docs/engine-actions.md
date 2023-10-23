file_path: "docs/engine-actions.md"
file_content: 
'''
# Engine Actions

The `engine-actions.js` file is a part of a doodle game engine. It contains the definitions for `EngineAction` and `EngineTransition` classes which are used to create actions and transitions in the game.

## EngineAction Class

The `EngineAction` class is used to create an action which is something that happens one time or every tick during a specific time span. It has the following properties:

- `type`: The type of the action.
- `startTime`: The start time of the action in absolute milliseconds.
- `endTime`: The end time of the action in absolute milliseconds.
- `onAction`: A function to be called while the action is active and within `startTime`/`endTime`.

## EngineTransition Class

The `EngineTransition` class is a specialized type of action that interpolates one property from one value to another over a specific time span. It has the following properties:

- `type`: The type of the transition.
- `prepared`: Whether necessary first-run preparations have been made.
- `id`: The id of the transition.
- `actorId`: The id of the actor.
- `actor`: Reference to the actor.
- `innerId`: An id of an inner element that the transition affects.
- `startTime`: The start time of the transition.
- `endTime`: The end time of the transition.
- `properties`: The properties of the transition.
- `onAction`: A function to be called while the action is active and within `startTime`/`endTime`.
- `onFinish`: An optional handler when the transition is done.
- `align`: Image alignment.
- `playCount`: How many times have a transition played already.
- `maxPlayCount`: How many times a transition can play.
- `easing`: Easing function for the transition.
- `alternate`: Whether the transition alternates back and forth.
- `clearOnFinish`: Whether to clear the contents after playing the transition.

It also has the following methods:

- `prepare`: Prepares a transition by setting up the start and end values.
- `tick`: Executes a tick of the transition.
- `lastTick`: Executes the last tick of the transition and prepares for another transition run if necessary.

## Usage

`EngineAction` could be used to create a one-time event like a sound effect or a recurring event like an animation. `EngineTransition` could be used to create a transition like moving an object from one place to another.

## Interaction with Other Components

`EngineAction` and `EngineTransition` might be used by an `EngineActor` to perform actions and transitions.

## Conclusion

In conclusion, `EngineAction` and `EngineTransition` are crucial parts of the doodle game engine that allow for the creation of dynamic and interactive elements in the game.
'''
