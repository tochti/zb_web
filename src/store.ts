import { createStore } from 'redux';
import AppState from './state';
import rootReducer from './reducer';

const store = createStore<AppState>(rootReducer, {});

export default store;
