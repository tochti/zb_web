import { AnyAction } from 'redux';
import { OPEN_MENU, CLOSE_MENU } from './actions';

export interface State {
    open: boolean;
}

export const initState = {
    open: false,
};

function reducer(state: State = initState, action: AnyAction) {
    switch (action.type) {
        case OPEN_MENU:
            return { ...state, open: true };
        case CLOSE_MENU:
            return { ...state, open: false };
        default:
            return state;
    }
}
export default reducer;
