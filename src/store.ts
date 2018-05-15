import { createStore } from 'redux';
import AppState from './appState';
import rootReducer from './rootReducer';

const store = createStore<AppState>(rootReducer);

export default store;
