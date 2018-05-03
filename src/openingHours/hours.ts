import { newPeriod, OpeningHours } from './types';

const weekDefault = [newPeriod('15:30', '18:30')];

const openingHours = new OpeningHours(
    [],
    weekDefault,
    [],
    weekDefault,
    weekDefault,
    [newPeriod('9:00', '13:00')],
    []
);

export default openingHours;
