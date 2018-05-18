import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Overview from './views/Overview';
import Offer from './views/offers/Offer';

import './Root.css';

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <Router>
                        <>
                            <Route path="/offer/:id" component={Offer} />
                            <Route exact path="/" component={Overview} />
                        </>
                    </Router>
                </>
            </Provider>
        );
    }
}

export default Root;
