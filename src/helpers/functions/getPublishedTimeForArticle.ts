import { DateValueType } from "../../interfaces";
import { PublishedValueType } from "../../types";

export const getPublishedTimeForArticle = (
  time: string | undefined
): string => {
  const getDateValue: DateValueType = (
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

  const publishedValue: PublishedValueType = {
    date: {
      year: getDateValue(0, 4),
      month: getDateValue(4, 6),
      day: getDateValue(6, 8),
    },
    time: {
      hour: getDateValue(9, 11),
      minutes: getDateValue(11, 13),
    },
  };

  const publishedDate: string = `${publishedValue.date.day}.${publishedValue.date.month}.${publishedValue.date.year}`;
  const publishedTime: string = `${publishedValue.time.hour}:${publishedValue.time.minutes}`;

  return `${publishedDate} ${publishedTime}`;
};
