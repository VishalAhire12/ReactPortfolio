// src/store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';

// A simple example reducer
const initialState = {};

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  example: exampleReducer, // This is the key you will use in your state
});

const store = createStore(rootReducer);

export default store;
