import React from 'react';
import { OpeningHours, WeekDay } from './types';

interface DayProps {
    dayName: string;
    isOpenDay: boolean;
    isToday: boolean;
    isSelected: boolean;
    selectDay: (() => void) | undefined;
}

function DayComponent(props: DayProps) {
    let isOpen = props.isOpenDay ? 'open-day' : 'closed-day';
    let isToday = props.isToday ? 'is-today' : '';
    let isSelected = props.isSelected ? 'selected' : '';

    return (
        <li
            onClick={props.selectDay}
            className={isOpen + ' ' + isToday + ' ' + isSelected}>
            {props.dayName}
        </li>
    );
}

interface OverviewProps {
    hours: OpeningHours;
    selectedDay: WeekDay;
    selectDay: (d: WeekDay) => void;
}

function WeekOverview(props: OverviewProps) {
    return (
        <ul id="week-overview">
            {props.hours.week().map(day => {
                const isSelected = day.isDay(props.selectedDay);
                return (
                    <DayComponent
                        key={day.key}
                        dayName={day.short}
                        isOpenDay={day.isOpenDay()}
                        isToday={day.isToday()}
                        isSelected={isSelected}
                        selectDay={
                            isSelected
                                ? undefined
                                : () => props.selectDay(day.key)
                        }
                    />
                );
            })}
        </ul>
    );
}
export default WeekOverview;
