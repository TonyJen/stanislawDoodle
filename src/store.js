import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  actors: [],
  actions: [],
  transitions: [],
};

const actorsReducer = (state = initialState.actors, action) => {
  switch (action.type) {
    case 'ADD_ACTOR':
      return [...state, action.payload];
    case 'UPDATE_ACTOR':
      return state.map(actor => actor.id === action.payload.id ? action.payload : actor);
    case 'REMOVE_ACTOR':
      return state.filter(actor => actor.id !== action.payload.id);
    default:
      return state;
  }
};

const actionsReducer = (state = initialState.actions, action) => {
  switch (action.type) {
    case 'ADD_ACTION':
      return [...state, action.payload];
    case 'UPDATE_ACTION':
      return state.map(actionItem => actionItem.id === action.payload.id ? action.payload : actionItem);
    case 'REMOVE_ACTION':
      return state.filter(actionItem => actionItem.id !== action.payload.id);
    default:
      return state;
  }
};

const transitionsReducer = (state = initialState.transitions, action) => {
  switch (action.type) {
    case 'ADD_TRANSITION':
      return [...state, action.payload];
    case 'UPDATE_TRANSITION':
      return state.map(transition => transition.id === action.payload.id ? action.payload : transition);
    case 'REMOVE_TRANSITION':
      return state.filter(transition => transition.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  actors: actorsReducer,
  actions: actionsReducer,
  transitions: transitionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
+});
+
+const store = createStore(rootReducer, applyMiddleware(thunk));
+
+export default store;
