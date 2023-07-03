import { getDate } from "../../../helpers/functions/getDate";
import { DateForType, ChipDataType } from "../../../types";

export const dateForDay: DateForType = {
  day7: getDate(7),
  day14: getDate(14),
  day21: getDate(21),
  day28: getDate(28),
  day0: getDate(0),
};

export const chipData: ChipDataType[] = [
  {
    label: "7 days",
    day: 7,
  },
  {
    label: "14 days",
    day: 14,
  },
  {
    label: "21 days",
    day: 21,
  },
  {
    label: "28 days",
    day: 28,
  },
];
