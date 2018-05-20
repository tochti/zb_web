import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Overview from './views/Overview';
import Offer from './views/offers/Offer';
import { State as MenuState } from './menu/redcuer';

import './Root.css';
import AppState from './appState';
import MenuWatcher from './menu/MenuWatcher';

interface Props {
    menuState: MenuState;
}

class Root extends Component<Props> {
    render() {
        return (
            <>
                <MenuWatcher state={this.props.menuState} />
                <Router>
                    <>
                        <Route path="/offer/:id" component={Offer} />
                        <Route exact path="/" component={Overview} />
                    </>
                </Router>
            </>
        );
    }
}

function stateToProps(state: AppState) {
    return {
        menuState: state.menu,
    };
}

export default connect(stateToProps)(Root);
