import React from 'react';
import { OpeningHours, Day } from './types';
import './opening_hours.css';

interface DayProps {
    day: Day;
}

function DayComponent(props: DayProps) {
    let isToday = props.day.isToday() ? 'is-today' : '';
    if (props.day.isOpenDay()) {
        return <li className={'open-day ' + isToday}>{props.day.short}</li>;
    }

    return (
        <li className={'closed-day ' + isToday}>
            {isToday}
            {props.day.short}
        </li>
    );
}

interface OverviewProps {
    hours: OpeningHours;
}

function WeekOverview(props: OverviewProps) {
    return (
        <ul id="week-overview">
            {props.hours
                .week()
                .map(day => <DayComponent key={day.key} day={day} />)}
        </ul>
    );
}
export default WeekOverview;
