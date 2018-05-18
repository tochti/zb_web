import { WeekDay } from '../../openingHours/types';

export const VIEW_DAY = 'VIEW_DAY';
export function viewDay(day: WeekDay) {
    return {
        type: VIEW_DAY,
        day,
    };
}
