import { Day } from "./types";

interface Props {
  day: Day;
}

function DayOverview(props: Props) {
  const now = moment();

  return props.day.map(period => {
    period.to.isBefore(now);
  });
}
export default DayOverview;
