import { newPeriod, OpeningHours } from "./types";

const weekDefault = [newPeriod("15:30", "18:30")];

const openingHours: OpeningHours = {
  monday: [],
  tuesday: weekDefault,
  wednesday: [],
  thursday: weekDefault,
  friday: weekDefault,
  saturday: [newPeriod("9:00", "13:00")]
};

export default openingHours;
