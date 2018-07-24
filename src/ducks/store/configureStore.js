import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash';
import rootReducer from '../reducers';
import { saveState, loadState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();

  /* eslint-disable */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  store.subscribe(
    throttle(() => {
      saveState({
        memos: store.getState().memos,
      });
    }, 1000),
  );

  return store;
};

export default configureStore;
