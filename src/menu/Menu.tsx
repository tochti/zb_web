import React from 'react';
import { connect } from 'react-redux';

import { closeMenu } from './actions';
import close from '../images/close.svg';
import { Dispatch } from 'redux';
import AppState from '../appState';

import './Menu.css';

interface Props {
    dispatch: Dispatch<AppState>;
}

function Menu({ dispatch }: Props) {
    return (
        <div className="menu">
            <h1>Menu</h1>
            <ul>
                <li className="menu-entry">Aktuelle Angebote</li>
                <li className="menu-entry">Login</li>
            </ul>
            <div
                onClick={() => dispatch(closeMenu())}
                className="close-menu-btn">
                <img src={close} />
            </div>
        </div>
    );
}
export default connect()(Menu);
