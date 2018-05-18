import { AnyAction } from 'redux';
import {
    START_REQUEST,
    STOP_REQUEST,
    REQUEST_ERROR,
    CLEAR_REQUEST_ERROR,
} from './actions';

export interface State {
    requesting: {
        [index: string]: boolean;
    };

    errors: {
        [index: string]: Error;
    };
}

export const initState = {
    requesting: {},
    errors: {},
};

function reducer(state: State = initState, action: AnyAction) {
    switch (action.type) {
        case START_REQUEST:
            return {
                ...state,
                requesting: {
                    ...state.requesting,
                    [action.name]: true,
                },
            };
        case STOP_REQUEST:
            return {
                ...state,
                requesting: {
                    ...state.requesting,
                    [action.name]: false,
                },
            };
        case REQUEST_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.name]: action.error,
                },
            };
        case CLEAR_REQUEST_ERROR:
            return {
                ...state,
                requesting: {
                    ...state.requesting,
                    [action.name]: false,
                },
                errors: {
                    ...state.errors,
                    [action.name]: undefined,
                },
            };
        default:
            return state;
    }
}
export default reducer;
