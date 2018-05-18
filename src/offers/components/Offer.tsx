import React from 'react';
import { Offer } from '..';

interface Props {
    offer: Offer;
}
export default function Offer({ offer }: Props) {
    return <div className="offer">{offer.title}</div>;
}
