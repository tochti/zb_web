import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppState from '../../appState';
import { State as OffersState } from '../../offersReducer';
import offerService from '../../offers/service';
import { Dispatch } from 'redux';
import { appendOffers } from '../../offersReducer/actions';
import { Link } from 'react-router-dom';

interface Props {
    offers: OffersState;
    dispatch: Dispatch<AppState>;
}

class NewestOffer extends Component<Props> {
    componentDidMount() {
        const { dispatch } = this.props;

        offerService.readOffers(5).then(offers => {
            dispatch(appendOffers(offers));
        });
    }

    render() {
        const { offers } = this.props;

        return (
            <div className="newest-offers">
                <h1>Aktuelle Angebote</h1>
                <ol>
                    {offers.byCreatedAt.map(({ id, offer }) => {
                        return (
                            <Link key={id} to={`/offer/${id}`}>
                                <li>
                                    <p>{offer.thumb}</p>
                                    <p>{offer.title}</p>
                                </li>
                            </Link>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

function s2p(state: AppState) {
    return {
        offers: state.offers,
    };
}

export default connect(s2p)(NewestOffer);
