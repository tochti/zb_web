import { BicyclesIndex, OffersIndex } from './bicycle';
import { BackendCondition } from './BackendCondition';

export default interface AppState {
    bicycles?: BicyclesIndex;
    offers?: OffersIndex;
    backendCondition?: BackendCondition;
}
