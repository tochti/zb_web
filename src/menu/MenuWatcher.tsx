import React from 'react';
import { State as MenuState } from './redcuer';
import Menu from './Menu';

interface Props {
    state: MenuState;
}

function MenuWatcher({ state }: Props) {
    return state.open ? <Menu /> : null;
}
export default MenuWatcher;
