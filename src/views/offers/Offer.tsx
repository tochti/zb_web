import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import service from '../../offers/service';
import { State as OfferState } from '../../offersReducer';
import OfferComponent from '../../offers/components/Offer';
import { Offer, OfferId } from '../../offers';
import AppState from '../../appState';
import { viewOffer } from './actions';
import {
    startRequest,
    stopRequest,
    requestError,
} from '../../requestReducer/actions';

import './Offer.css';
import OfferBackBtn from './OfferBackBtn';

interface RouterProps {
    id: OfferId;
}

interface Props extends RouteComponentProps<RouterProps> {
    offers: OfferState;
    offer: Offer | null;
    dispatch: Dispatch<AppState>;
    error: Error;
    isRequesting: boolean;
}

class OfferView extends Component<Props> {
    componentDidMount() {
        const { match, dispatch, offers } = this.props;
        const id = match.params.id;

        const offer = offers.idx[match.params.id];
        if (!offer) {
            dispatch(startRequest('readOffer'));
            service
                .readOffer(id)
                .then(offer => {
                    dispatch(stopRequest('readOffer'));
                    dispatch(viewOffer(offer));
                })
                .catch(err => {
                    dispatch(requestError('offer', err));
                });

            return;
        }

        dispatch(viewOffer(offer));
    }

    render() {
        const { error, offer, isRequesting } = this.props;

        if (error) {
            return <div>{error}</div>;
        }

        if (!offer || isRequesting) {
            return <div>Loading...</div>;
        }

        return (
            <div className="offer-page">
                <OfferComponent
                    backBtn={<OfferBackBtn to="/" />}
                    offer={offer}
                />
            </div>
        );
    }
}

function stateToProps(state: AppState) {
    return {
        offers: state.offers,
        offer: state.views.offers.viewingOffer,
        error: state.request.errors['readOffer'],
        isRequesting: state.request.requesting['readOffer'],
    };
}

export default connect(stateToProps)(OfferView);
