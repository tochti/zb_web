import { AnyAction } from 'redux';
import { WeekDay } from '../../OpeningHours/types';
import { VIEW_DAY } from './actions';

export interface State {
    viewingDay: WeekDay | null;
}

export const initState = {
    viewingDay: null,
};

function reducer(state: State, action: AnyAction) {
    switch (action.type) {
        case VIEW_DAY:
            return { ...state, viewingDay: action.day };
        default:
            return state;
    }
}
export default reducer;
