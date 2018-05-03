import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Overview from './views/Overview';
import BackendCondition from './BackendCondition';

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <BackendCondition />
                    <Router>
                        <Route path="/" component={Overview} />
                    </Router>
                </React.Fragment>
            </Provider>
        );
    }
}

export default Root;
