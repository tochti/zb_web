import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import AppState from '../appState';
import NewestOffers from './NewestOffers';
import OpeningHours from '../openingHours';

interface Props {
    dispatch: Dispatch<AppState>;
}

class Overview extends Component<Props> {
    clearRequestOffersTicker: () => void;

    constructor(props: any) {
        super(props);
    }

    async componentDidUpdate() {
        // const { dispatch } = this.props;
        // const isOK = await requestOffers(dispatch);
        // if (!isOK) {
        //     this.clearRequestOffersTicker = retryRequestOffers(dispatch);
        // }
    }

    componentWillUnmount() {
        this.clearRequestOffersTicker();
    }

    render() {
        return (
            <div className="Overview">
                <NewestOffers />
                <OpeningHours />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({});

export default connect(mapStateToProps)(Overview);
