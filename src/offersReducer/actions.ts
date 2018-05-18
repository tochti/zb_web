import { Offer, OfferId } from '../offers';

export const APPEND_OFFERS = 'APPEND_OFFERS';
export function appendOffers(offers: Array<{ id: OfferId; offer: Offer }>) {
    return {
        type: APPEND_OFFERS,
        offers,
    };
}
