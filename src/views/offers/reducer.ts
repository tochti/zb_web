import { Offer } from '../../offers';
import { AnyAction } from 'redux';
import { VIEW_OFFER } from './actions';

export interface State {
    viewingOffer: Offer | null;
}

export const initState = {
    viewingOffer: null,
};

function reducer(state: State = initState, action: AnyAction) {
    switch (action.type) {
        case VIEW_OFFER:
            return { ...state, viewingOffer: action.offer };
        default:
            return state;
    }
}
export default reducer;
