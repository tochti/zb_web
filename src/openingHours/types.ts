import moment, { Moment } from "moment";

export interface Period {
  from: Moment;
  to: Moment;
}

export type Day = Period[];

export interface OpeningHours {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
}

export function newPeriod(fromStr: string, toStr: string): Period {
  const f = fromStr.split(":");
  const t = toStr.split(":");

  const fH = parseInt(f[0]);
  const fM = parseInt(f[1]);

  const tH = parseInt(f[0]);
  const tM = parseInt(f[1]);

  const from = moment()
    .hour(fH)
    .minute(fM);

  const to = moment()
    .hour(tH)
    .minute(tM);

  return { from, to };
}

export function week(hours: OpeningHours): { day: Day; name: string }[] {
  return [
    { day: hours.monday, name: "Monday" },
    { day: hours.tuesday, name: "Tuesday" },
    { day: hours.wednesday, name: "Wednesday" },
    { day: hours.thursday, name: "Thursday" },
    { day: hours.friday, name: "Friday" },
    { day: hours.saturday, name: "Saturday" }
  ];
}
