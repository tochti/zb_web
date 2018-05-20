import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import AppState from '../appState';
import logo from '../images/logo.svg';
import { openMenu } from './actions';

import './Btn.css';

interface Props {
    dispatch: Dispatch<AppState>;
}

function MenuBtn({ dispatch }: Props) {
    return (
        <div onClick={() => dispatch(openMenu())} className="menu-btn">
            <img src={logo} />
        </div>
    );
}
export default connect()(MenuBtn);
