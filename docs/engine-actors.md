# EngineActor Class

The `EngineActor` class represents a character or background element in the game with its own logic and behavior. Each actor has a unique identifier and can have multiple rectangles representing different parts of the actor.

## Properties

- `id`: The unique identifier of the actor.
- `rect`: The main rectangle that represents the actor.
- `innerRects`: Additional rectangles within the main rectangle. These are used for more complex actors that need to display multiple elements.
- `innerRectCount`: The number of inner rectangles.
- `curPressed`: A boolean indicating whether the actor (if a button) is currently pressed.

## Methods

- `addMainInnerRect()`: Creates the main inner rectangle for the actor.
- `addInnerRects(params)`: Creates additional inner rectangles for the actor based on the provided parameters.
- `getRect(params)`: Returns a specific rectangle based on the provided parameters.
- `setRender(params)`: Sets the rendering method for the actor.
- `setState(params)`: Sets the state of the actor.
- `setVisible(params)`: Sets the visibility of the actor.
- `setClickable(params)`: Sets whether the actor is clickable.
- `setAttachedToDocumentBody(params)`: Sets whether the actor is attached directly to the document body.
- `showAnimation(params)`: Shows an animation within a rectangle of the actor.
- `showImage(params)`: Shows an image within a rectangle of the actor.
- `showBlack(params)`: Fills a rectangle of the actor with black.
- `showWhite(params)`: Fills a rectangle of the actor with white.
- `clear(params)`: Clears a rectangle of the actor.
- `addTransition(params)`: Adds a transition to the actor.
- `transform(params)`: Transforms a rectangle of the actor.
- `update(params)`: Updates the main rectangle or all rectangles of the actor.
- `onClickableMouseOver(e)`: Handles a mouse over event on a clickable element.
- `onClickableMouseOut(e)`: Handles a mouse out event on a clickable element.
- `onMouseDown(e)`: Handles a mouse down event on the actor.
- `onMouseUp(e)`: Handles a mouse up event on the actor.
- `onMouseClick(e)`: Handles a mouse click event on the actor.
- `turnIntoButton(params)`: Turns the actor into a button.
- `pressButton(params)`: Plays a button press animation.
- `unpressButton(params)`: Plays a button unpress animation.

## Interactions

The `EngineActor` class interacts with other parts of the game engine. It uses the `EngineAction` class to handle actions, the `EngineConst` class for constants, and the `EngineTransition` class for transitions. These interactions contribute to the overall functionality of the game engine.

## Conclusion

The `EngineActor` class is a crucial part of the game engine. It represents the characters and elements in the game and handles their behavior and interactions. By understanding how the `EngineActor` class works, we can better understand the overall structure and functionality of the game engine.
