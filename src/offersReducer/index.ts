import { AnyAction } from 'redux';
import { Offer } from '../offers';

export interface State {
    idx: {
        [index: number]: Offer;
    };
    byCreatedAt: Offer[];
}

export const initState = {
    idx: {},
    byCreatedAt: [],
};

function reducer(state: State = initState, action: AnyAction) {
    return state;
}
export default reducer;
