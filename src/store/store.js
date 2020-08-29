import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import {
  showStructureElems,
} from './reducers';

const middleware = [thunk];
const composeEnhancers = compose;

const rootReducer = combineReducers({
  showStructureElems,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

