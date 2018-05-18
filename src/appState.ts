import { State as OffersState } from './offersReducer';
import { State as ViewsOffersState } from './views/offers/reducer';
import { State as OverviewState } from './views/Overview/reducer';
import { State as RequestState } from './requestReducer';

export default interface AppState {
    offers: OffersState;
    request: RequestState;
    views: {
        overview: OverviewState;
        offers: ViewsOffersState;
    };
}
