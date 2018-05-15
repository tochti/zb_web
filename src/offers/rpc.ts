import moment from 'moment';
import { Offer } from './index';

export default class RPC {
    readOffers(amount?: number, offset?: number): Promise<Offer[]> {
        return Promise.resolve([
            {
                title: 'test offer',
                newPrice: 1000,
                oldPrice: 1500,
                description: 'long description',
                image: 'http://urltoimage',
                thumb: 'http://urltothumb',
                createdAt: moment(),
                expiresAt: moment(),
            },
        ]);
    }
}
