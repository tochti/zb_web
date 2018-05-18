import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import AppState from './appState';
import rootReducer from './rootReducer';

const store = createStore<AppState>(rootReducer, applyMiddleware(reduxLogger));

export default store;
