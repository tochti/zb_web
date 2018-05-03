import React from 'react';
import moment from 'moment';
import { Day, Period } from './types';

function ClosedState() {
    return <p className="closed">Geschlossen</p>;
}

interface PeriodProps {
    period: Period;
    isOpen: boolean;
}

function PeriodComponent(props: PeriodProps) {
    let opened = null;
    if (props.isOpen) {
        opened = '->';
    }
    return (
        <p>
            {opened} {props.period.from.format('HH:mm')} -{' '}
            {props.period.to.format('HH:mm')}
        </p>
    );
}

interface OverviewProps {
    day: Day;
}

function DayOverview(props: OverviewProps) {
    const now = moment();
    const elems: JSX.Element[] = [];
    let foundClosed = false;
    for (const p of props.day.openPeriods) {
        if (now.isBefore(p.from) && !foundClosed) {
            elems.push(<ClosedState />);
            elems.push(
                <PeriodComponent
                    key={p.from.toISOString()}
                    isOpen={false}
                    period={p}
                />
            );
            foundClosed = true;
        } else if (now.isBetween(p.from, p.to)) {
            elems.push(
                <PeriodComponent
                    key={p.from.toISOString()}
                    isOpen={true}
                    period={p}
                />
            );
        } else {
            elems.push(
                <PeriodComponent
                    key={p.from.toISOString()}
                    isOpen={false}
                    period={p}
                />
            );
        }
    }

    return <div id="day-overview">{elems}</div>;
}
export default DayOverview;
