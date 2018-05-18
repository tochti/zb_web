import { Offer } from '../../offers';

export const VIEW_OFFER = 'VIEW_OFFER';
export function viewOffer(offer: Offer) {
    return {
        type: VIEW_OFFER,
        offer,
    };
}
