import React from 'react';
import { Offer } from '..';

interface Props {
    offer: Offer;
    backBtn: JSX.Element;
}
export default function Offer({ offer, backBtn }: Props) {
    return (
        <div className="offer">
            <nav>{backBtn}</nav>
            <img src={offer.image} />
            <h1>{offer.title}</h1>
            <div className="bicycle-infos">
                <div className="bicycle-info">
                    <p>Neuer Preis</p>
                    <p>{offer.newPrice} €</p>
                </div>
                <div className="bicycle-info">
                    <p className="old-price-label">Alter Preis</p>
                    <p className="old-price">{offer.oldPrice} €</p>
                </div>
            </div>
            <h2>Beschreibung</h2>
            <div className="description">{offer.description}</div>
        </div>
    );
}
