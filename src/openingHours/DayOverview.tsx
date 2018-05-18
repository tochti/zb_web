import React from 'react';
import moment from 'moment';
import { Day, Period } from './types';

function ClosedState() {
    return <li className="is-now closed">geschlossen</li>;
}

interface PeriodProps {
    period: Period;
    isOpen: boolean;
    isNow: boolean;
}

function PeriodComponent(props: PeriodProps) {
    let cls = 'period';
    if (props.isOpen) {
        cls = cls + ' is-open';
    }
    if (props.isNow) {
        cls = cls + ' is-now';
    }

    return (
        <li className={cls}>
            {props.period.from.format('HH:mm')} -{' '}
            {props.period.to.format('HH:mm')}
        </li>
    );
}

interface OverviewProps {
    day: Day;
}

function DayOverview(props: OverviewProps) {
    if (props.day.openPeriods.length === 0) {
        return (
            <div id="day-overview">
                <p id="closed-day">nicht geöffnet</p>
            </div>
        );
    }

    const now = moment();
    const elems: JSX.Element[] = [];
    let foundClosed = false;
    for (const p of props.day.openPeriods) {
        if (now.isBefore(p.from) && !foundClosed) {
            elems.push(<ClosedState key={'closed'} />);
            elems.push(
                <PeriodComponent
                    key={p.from.toISOString()}
                    isOpen={false}
                    isNow={false}
                    period={p}
                />
            );
            foundClosed = true;
        } else if (now.isBetween(p.from, p.to)) {
            elems.push(
                <PeriodComponent
                    key={p.from.toISOString()}
                    isOpen={true}
                    isNow={true}
                    period={p}
                />
            );
        } else {
            elems.push(
                <PeriodComponent
                    key={p.from.toISOString()}
                    isOpen={false}
                    isNow={false}
                    period={p}
                />
            );
            elems.push(<ClosedState key={'closed'} />);
        }
    }

    return <ul id="day-overview">{elems}</ul>;
}
export default DayOverview;
