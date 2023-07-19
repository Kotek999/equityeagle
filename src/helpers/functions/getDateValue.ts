import { DateValueType } from "../../interfaces";

export const getDateValue: DateValueType = (
  time,
  subFirst,
  subSecond,
  maxLength = 2,
  fill = "0"
): string => {
  const timePublished: string = `${time}`;

  const dateValue: string = timePublished
    .substring(subFirst, subSecond)
    .padStart(maxLength, fill);
  return dateValue;
};
