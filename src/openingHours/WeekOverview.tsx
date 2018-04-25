import React from "react";
import { OpeningHours, Day, week } from "./types";

interface DayProps {
  name: string;
  isOpen: boolean;
}

function Day(props: DayProps) {
  if (props.isOpen) {
    return <p className="open">{props.name}</p>;
  }

  return <p className="closed">{props.name}</p>;
}

interface OverviewProps {
  hours: OpeningHours;
}

function WeekOverview(props: OverviewProps) {
  return week(props.hours).map(({ day, name }) => {
    return (
      <Day key={name} name={name} isOpen={day.length === 0 ? false : true} />
    );
  });
}
export default WeekOverview;
