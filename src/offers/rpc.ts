import moment from 'moment';
import { Offer, OfferId } from './index';

export default class RPC {
    readOffers(
        amount?: number,
        offset?: number
    ): Promise<{ id: OfferId; offer: Offer }[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        offer: {
                            title: 'Steppenwolf Tundar XTR',
                            newPrice: 1000,
                            oldPrice: 1500,
                            description: 'long description',
                            image:
                                'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                            thumb:
                                'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                            createdAt: moment(),
                            expiresAt: moment(),
                        },
                    },
                    {
                        id: 2,
                        offer: {
                            title: 'Merida VR',
                            newPrice: 1000,
                            oldPrice: 1500,
                            description: 'long description',
                            image:
                                'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                            thumb:
                                'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                            createdAt: moment(),
                            expiresAt: moment(),
                        },
                    },
                    {
                        id: 3,
                        offer: {
                            title: 'Victora Queens Lady',
                            newPrice: 1000,
                            oldPrice: 1500,
                            description: 'long description',
                            image:
                                'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                            thumb:
                                'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                            createdAt: moment(),
                            expiresAt: moment(),
                        },
                    },
                ]);
            }, 2 * 1000);
        });
    }

    readOffer(id: OfferId): Promise<Offer> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    title: 'Victora Queens Lady',
                    newPrice: 1000,
                    oldPrice: 1500,
                    description: 'long description',
                    image:
                        'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                    thumb:
                        'https://s.bikesale.de/images/pictures_sellbike/VF1vMk353Q4uJQ7nq~mV8ZKfLcH~tV6X_zoom.jpg',
                    createdAt: moment(),
                    expiresAt: moment(),
                });
            }, 0);
        });
    }
}
