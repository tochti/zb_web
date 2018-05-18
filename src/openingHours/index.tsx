import React from 'react';

import hours from './hours';
import WeekOverview from './WeekOverview';
import DayOverview from './DayOverview';
import { WeekDay } from './types';

interface Props {
    selectedDay: WeekDay | null;
    selectDay: (d: WeekDay) => void;
}

function OpeningHours(props: Props) {
    const selectedDay = !props.selectedDay
        ? hours.today()
        : hours.day(props.selectedDay);

    return (
        <div id="opening-hours">
            <h1>Öffnungszeiten</h1>
            <WeekOverview
                selectDay={props.selectDay}
                selectedDay={selectedDay.key}
                hours={hours}
            />
            <DayOverview day={selectedDay} />
        </div>
    );
}

export default OpeningHours;
