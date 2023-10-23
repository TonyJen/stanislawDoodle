import React from 'react';

const EngineConst = () => {
  const debugAllowed = true;
  const standalone = true;
  const BODY_GENERAL_EL_ID = 'doodle';
  const FAST_FORWARD_TICK_COUNT = 5;
  const FAST_FORWARD_TICK_COUNT_INC = .05;
  const FAST_FORWARD_TICK_COUNT_DEC = .5;
  const DEBUG_FAST_TICK_COUNT = 40;
  const MAIN_RECT_ID = 'main';
  const MIN_FPS = 10;
  const MAX_FPS = 65;
  const MIN_CUSTOM_MOUSE_POINTER_FPS = 20;
  const REQUEST_ANIM_FRAME_FALLBACK_DELAY = 16.67;
  const INACTIVE_SLEEP_TIME_ATTRACT_MODE = 18000;
  const INACTIVE_SLEEP_TIME_UNFOCUSED = 30000;
  const INACTIVE_SLEEP_TIME_FOCUSED = 120000;
  const SLOW_DOWN_TICK_MULTIPLIER = 5;
  const ROLLING_FPS_TICK_COUNT = 50;
  const EMPTY_MOUSE_POINTER_URL = 'http://www.google.com/mapfiles/ms/cleardot.cur';
  const BUTTON_PRESS_ANIMATION_SPEED = 40;
  const BUTTON_UNPRESS_ANIMATION_SPEED = 60;
  const PADDING_CLICK = 5;
  const PADDING_TOUCH = 15;
  const LANGUAGES = {
    'en': 'english',
    'pl': 'polish',
    'de': 'german',
    'fr': 'french',
    'it': 'italian',
    'ru': 'russian',
    'lv': 'russian',
    'lt': 'russian',
    'et': 'russian',
    'be': 'russian',
    'uk': 'ukrainian',
    'es': 'spanish',
    'cs': 'czech',
    'hu': 'hungarian',
    'bg': 'bulgarian'
  };
  const DOMAIN_TO_LANGUAGE = {
    'www.google.com': 'en',
    'www.google.pl': 'pl',
    'www.google.at': 'de',
    'www.google.de': 'de',
    'www.google.ch': 'de',
    'www.google.ru': 'ru',
    'www.google.by': 'be',
    'www.google.com.ua': 'uk',
    'www.google.lv': 'lv',
    'www.google.lt': 'lt',
    'www.google.ee': 'et',
    'www.google.es': 'es',
    'www.google.it': 'it',
    'www.google.ft': 'fr',
    'www.google.co.uk': 'en',
    'www.google.ie': 'en',
    'www.google.cz': 'cs',
    'www.google.sk': 'sk',
    'www.google.hu': 'hu',
    'www.google.bg': 'bg'
  };
  const LANGUAGE_MAPPINGS = {
    'rm': 'de',
    'sk': 'cs',
    'ga': 'en',
    'ca': 'es',
    'gl': 'es',
    'eu': 'es'
  };
  const SCREEN_WIDTH = -1;
  const SCREEN_HEIGHT = -1;
  const RENDER_NONE = 0;
  const RENDER_DOM = 1;
  const RENDER_CANVAS = 2;
  const ACTION_TYPE_EVENT = 1;
  const ACTION_TYPE_TRANSITION = 2;
  const CONTENTS_CLEAR = 1;
  const CONTENTS_WHITE = 2;
  const CONTENTS_BLACK = 3;
  const CONTENTS_IMAGE = 4;
  const ALIGN_START = 1;
  const ALIGN_CENTER = 2;
  const ALIGN_END = 3;
  const KEY_SHIFT = 16;
  const KEY_N = 78;
  const KEY_P = 80;
  const KEY_T = 84;

  return null;
};

export default EngineConst;
