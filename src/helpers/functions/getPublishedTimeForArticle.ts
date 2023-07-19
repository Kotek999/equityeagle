import { TimeValuesType } from "../../types";
import { getDateValue } from "./getDateValue";

export const getPublishedTimeForArticle = (
  time: string | undefined
): string => {
  const publishedValue: TimeValuesType = {
    time: {
      hour: getDateValue(time, 9, 11),
      minutes: getDateValue(time, 11, 13),
    },
  };

  const publishedTime: string = `${publishedValue.time.hour}:${publishedValue.time.minutes}`;

  return `Today ${publishedTime}`;
};
