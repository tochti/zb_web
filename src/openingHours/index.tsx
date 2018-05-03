import React from 'react';

import hours from './hours';
import WeekOverview from './WeekOverview';
import DayOverview from './DayOverview';

function OpeningHours() {
    return (
        <div id="opening-hours">
            <h1>Öffnungszeiten</h1>
            <WeekOverview hours={hours} />
            <DayOverview day={hours.today()} />
        </div>
    );
}

export default OpeningHours;
