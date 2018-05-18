import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import AppState from '../../appState';
import NewestOffers from './NewestOffers';
import OpeningHours from '../../openingHours';
import { WeekDay } from '../../openingHours/types';
import { viewDay } from './actions';

import './Overview.css';
import './OpeningHours.css';

interface Props {
    viewingDay: WeekDay | null;
    dispatch: Dispatch<AppState>;
}

class Overview extends Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { viewingDay, dispatch } = this.props;

        return (
            <div id="Overview">
                <OpeningHours
                    selectDay={(d: WeekDay) => dispatch(viewDay(d))}
                    selectedDay={viewingDay}
                />
                <NewestOffers />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    viewingDay: state.views.overview.viewingDay,
});

export default connect(mapStateToProps)(Overview);
