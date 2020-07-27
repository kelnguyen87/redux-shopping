import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import Async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import logger from 'redux-logger'

let store;

export default (initialState) => {
  const persistedState = loadState();
  store = createStore(rootReducer, persistedState, applyMiddleware(logger, Async, stateValidator),window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());

  store.subscribe(
      // Throttle: invokes a function at most once per every 1000 milliseconds.
      throttle(() => {
        saveState({
          cart: store.getState().cart
        });
      }, 1000)
  );
  return store;
}
