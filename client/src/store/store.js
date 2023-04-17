import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  // Add your reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;