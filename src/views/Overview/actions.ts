import { WeekDay } from '../../OpeningHours/types';

export const VIEW_DAY = 'VIEW_DAY';
export function viewDay(day: WeekDay) {
    return {
        type: VIEW_DAY,
        day,
    };
}
