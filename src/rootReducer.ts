import AppState from './appState';
import offersReducer, { initState as offersInitState } from './offersReducer';
import { AnyAction } from 'redux';

const initState = {
    offers: offersInitState,
};

const reducer = (state: AppState = initState, action: AnyAction): AppState => {
    return {
        offers: offersReducer(state.offers, action),
    };
};

export default reducer;
