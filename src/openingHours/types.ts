import moment, { Moment } from 'moment';

export class Period {
    from: Moment;
    to: Moment;

    constructor(from: Moment, to: Moment) {
        this.from = from;
        this.to = to;
    }
}

export type WeekDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type OpenPeriods = Period[];

export class Day {
    key: WeekDay;
    openPeriods: OpenPeriods;
    name: string;
    short: string;

    constructor(
        key: WeekDay,
        name: string,
        short: string,
        openPeriods: OpenPeriods
    ) {
        this.key = key;
        this.name = name;
        this.short = short;
        this.openPeriods = openPeriods;
    }

    isDay(x: WeekDay): boolean {
        return this.key === x;
    }

    isToday(): boolean {
        const today = moment().isoWeekday();
        return this.key === today;
    }

    isOpenDay(): boolean {
        return this.openPeriods.length > 0;
    }
}

export class OpeningHours {
    monday: Day;
    tuesday: Day;
    wednesday: Day;
    thursday: Day;
    friday: Day;
    saturday: Day;
    sunday: Day;

    constructor(
        mo: OpenPeriods,
        tu: OpenPeriods,
        we: OpenPeriods,
        th: OpenPeriods,
        fr: OpenPeriods,
        sa: OpenPeriods,
        so: OpenPeriods
    ) {
        this.monday = new Day(1, 'Montag', 'Mo', mo);
        this.tuesday = new Day(2, 'Dienstag', 'Di', tu);
        this.wednesday = new Day(3, 'Mittwoch', 'Mi', we);
        this.thursday = new Day(4, 'Donnerstag', 'Do', th);
        this.friday = new Day(5, 'Freitag', 'Fr', fr);
        this.saturday = new Day(6, 'Samstag', 'Sa', sa);
        this.sunday = new Day(7, 'Sonntag', 'So', so);
    }

    public week(): Day[] {
        return [
            this.monday,
            this.tuesday,
            this.wednesday,
            this.thursday,
            this.friday,
            this.saturday,
            this.sunday,
        ];
    }

    public day(d: WeekDay): Day {
        switch (d as number) {
            case 1:
                return this.monday;
            case 2:
                return this.tuesday;
            case 3:
                return this.wednesday;
            case 4:
                return this.thursday;
            case 5:
                return this.friday;
            case 6:
                return this.saturday;
            case 7:
                return this.sunday;
        }

        throw new Error('Unkown day');
    }

    public today(): Day {
        const today = moment().isoWeekday();
        return this.day(today as WeekDay);
    }
}

export function newPeriod(fromStr: string, toStr: string): Period {
    const f = fromStr.split(':');
    const t = toStr.split(':');

    const fH = parseInt(f[0]);
    const fM = parseInt(f[1]);

    const tH = parseInt(t[0]);
    const tM = parseInt(t[1]);

    const from = moment()
        .hour(fH)
        .minute(fM);

    const to = moment()
        .hour(tH)
        .minute(tM);

    return new Period(from, to);
}
