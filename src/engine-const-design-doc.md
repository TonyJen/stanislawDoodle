# Design Document for `engine-const.js`

## Introduction

The `engine-const.js` file is a central location for constants used throughout the doodle game engine. These constants maintain consistency across the codebase and avoid the use of magic numbers. They cover a range of functionalities, from setting frame rates to defining keyboard operations.

## Constants

### Debugging Constants

`engine.debugAllowed` is a boolean that allows debug features to be enabled by adding &doodle-debug to the URL. It doesn't do anything on its own and can be toggled to disable debugging altogether.

`engine.standalone` is a boolean that determines whether the doodle is integrated with the homepage or lives on a standalone page.

### Frame Rate Constants

`engine.MIN_FPS` and `engine.MAX_FPS` set the minimum and maximum frames per second for the doodle game. If the frame rate drops below `MIN_FPS`, the game will slow down instead of dropping frames. If the frame rate goes above `MAX_FPS`, the game will start dropping frames on purpose.

`engine.MIN_CUSTOM_MOUSE_POINTER_FPS` is a frame rate below which we don’t show the custom mouse pointer, but revert to a native mouse pointer for a better experience.

`engine.REQUEST_ANIM_FRAME_FALLBACK_DELAY` is the fallback fps for when we use setTimeout instead of requestAnimFrame.

### Language Constants

`engine.LANGUAGES`, `engine.DOMAIN_TO_LANGUAGE`, and `engine.LANGUAGE_MAPPINGS` are used to handle different languages and locales in the doodle. `LANGUAGES` is a mapping of language/locale codes to languages used by doodles. `DOMAIN_TO_LANGUAGE` is a list of mappings from domain names to languages, necessary for the standalone doodle. `LANGUAGE_MAPPINGS` is a list of some (usually secondary) languages that can be used for our doodle. In this case, we need to switch to another language.

### Rendering Constants

`engine.RENDER_NONE`, `engine.RENDER_DOM`, and `engine.RENDER_CANVAS` are used to determine the rendering method for an object. We support rendering via DOM and/or canvas. An object can be rendered with both or none -- the arguments should be powers of two.

### Action Type Constants

`engine.ACTION_TYPE_EVENT` and `engine.ACTION_TYPE_TRANSITION` are used to determine the type of action for an event or transition.

### Content Constants

`engine.CONTENTS_CLEAR`, `engine.CONTENTS_WHITE`, `engine.CONTENTS_BLACK`, and `engine.CONTENTS_IMAGE` are used to determine the content within a rect.

### Alignment Constants

`engine.ALIGN_START`, `engine.ALIGN_CENTER`, and `engine.ALIGN_END` are used to align images horizontally or vertically.

### Key Constants

`engine.KEY_SHIFT`, `engine.KEY_N`, `engine.KEY_P`, and `engine.KEY_T` are used for keyboard operations.

## Conclusion

This document provides a detailed explanation of the constants in the `engine-const.js` file. These constants are integral to the functionality of the doodle game engine. Any modifications to these constants should be done with caution, as they could have wide-ranging effects on the game's performance and behavior.
