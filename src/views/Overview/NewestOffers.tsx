import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppState from '../../appState';
import { State as OffersState } from '../../offersReducer';
import offerService from '../../offers/service';
import { Dispatch } from 'redux';
import { appendOffers } from '../../offersReducer/actions';
import { Link } from 'react-router-dom';

import './NewestOffers.css';
import { startRequest, stopRequest } from '../../requestReducer/actions';
import RequestingIndicator from '../../components/RequestingIndicator';
import NothingThere from '../../components/NothingThere';

interface Props {
    offers: OffersState;
    isRequesting: boolean;
    dispatch: Dispatch<AppState>;
}

class NewestOffer extends Component<Props> {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(startRequest('readOffers'));
        offerService.readOffers(5).then(offers => {
            dispatch(stopRequest('readOffers'));
            dispatch(appendOffers(offers));
        });
    }

    render() {
        const { offers, isRequesting } = this.props;

        let offersList = <NothingThere />;

        if (isRequesting) {
            offersList = <RequestingIndicator />;
        }

        if (Object.keys(offers.idx).length !== 0) {
            offersList = (
                <ul>
                    {offers.byCreatedAt.map(({ id, offer }) => {
                        return (
                            <li key={id}>
                                <Link to={`/offer/${id}`}>
                                    <img src={offer.thumb} />
                                    <p>{offer.title}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            );
        }

        return (
            <div id="newest-offers">
                <h1>Aktuelle Angebote</h1>
                {offersList}
                {Object.keys(offers.idx).length === 0 || (
                    <button id="goto-offers-overview" className="btn">
                        Alle Angebote
                    </button>
                )}
            </div>
        );
    }
}

function s2p(state: AppState) {
    return {
        offers: state.offers,
        isRequesting: state.request.requesting['readOffers'],
    };
}

export default connect(s2p)(NewestOffer);
