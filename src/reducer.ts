import AppState from './state';
import { reducer as backendConditionReducer } from './BackendCondition';
import { AppAction } from './actions';

const reducer = (state: AppState, action: AppAction): AppState => {
    return {
        bicycles: undefined,
        offers: undefined,
        backendCondition: backendConditionReducer(
            state.backendCondition,
            action
        ),
    };
};

export default reducer;
