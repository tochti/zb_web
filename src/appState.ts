import { State as OffersState } from './offersReducer';
import { State as ViewsOffersState } from './views/offers/reducer';
import { State as OverviewState } from './views/Overview/reducer';
import { State as RequestState } from './requestReducer';
import { State as MenuState } from './menu/redcuer';

export default interface AppState {
    offers: OffersState;
    request: RequestState;
    menu: MenuState;
    views: {
        overview: OverviewState;
        offers: ViewsOffersState;
    };
}
