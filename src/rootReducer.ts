import AppState from './appState';
import offersReducer, { initState as offersInitState } from './offersReducer';
import viewsOffersReducer, {
    initState as viewsOffersInitState,
} from './views/offers/reducer';
import requestReducer, {
    initState as requestInitState,
} from './requestReducer';
import viewsOverviewReducer, {
    initState as viewsOverviewInitState,
} from './views/Overview/reducer';
import { AnyAction } from 'redux';
import menuReducer, { initState as menuInitState } from './menu/redcuer';

const initState = {
    offers: offersInitState,
    request: requestInitState,
    menu: menuInitState,
    views: {
        overview: viewsOverviewInitState,
        offers: viewsOffersInitState,
    },
};

const reducer = (state: AppState = initState, action: AnyAction): AppState => {
    return {
        offers: offersReducer(state.offers, action),
        request: requestReducer(state.request, action),
        menu: menuReducer(state.menu, action),
        views: {
            overview: viewsOverviewReducer(state.views.overview, action),
            offers: viewsOffersReducer(state.views.offers, action),
        },
    };
};

export default reducer;
