import { AnyAction } from 'redux';
import newState from 'immer';
import { Offer, OfferId } from '../offers';
import { APPEND_OFFERS } from './actions';

export interface State {
    idx: {
        [index: number]: Offer;
    };
    byCreatedAt: { id: OfferId; offer: Offer }[];
}

export const initState = {
    idx: {},
    byCreatedAt: [],
};

const appendOffers = (state: State, action: AnyAction) =>
    newState(state, draft => {
        if (action.offers.length === 0) {
            return;
        }

        draft.byCreatedAt = [];

        action.offers.forEach(
            ({ id, offer }: { id: OfferId; offer: Offer }) => {
                draft.idx[id] = offer;
                draft.byCreatedAt.push({ id, offer });
            }
        );

        draft.byCreatedAt.sort((a, b) => {
            return a.offer.createdAt.diff(b.offer.createdAt);
        });
    });

function reducer(state: State = initState, action: AnyAction) {
    switch (action.type) {
        case APPEND_OFFERS:
            return appendOffers(state, action);
        default:
            return state;
    }
}
export default reducer;
