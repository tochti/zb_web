import { Moment } from 'moment';

export interface Offer {
    title: string;
    newPrice: number;
    oldPrice: number;
    description: string;
    image: string;
    thumb: string;
    createdAt: Moment;
    expiresAt: Moment;
}

export interface Service {
    readOffers(amount?: number, offset?: number): Promise<Offer[]>;
}
