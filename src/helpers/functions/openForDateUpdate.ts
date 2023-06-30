import { Data } from "../../interfaces";
import { getPreviousDate } from "./getPreviousDate";

export const openForDateUpdate = (
  timeSeriesData: Data["Time Series (5min)"],
  previousDate: number
) => {
  let openForDate: number | null = null;

  const previousDateSwitcher = (): any => {
    switch (previousDate) {
      case 7:
        return getPreviousDate(7);
      case 14:
        return getPreviousDate(14);
      case 21:
        return getPreviousDate(21);
      case 28:
        return getPreviousDate(28);
      default:
        console.log("N/A");
        break;
    }
  };

  for (let key in timeSeriesData) {
    // 2023-05-09 20:00:00
    let date: string = `${previousDateSwitcher()} 16:00:00`;

    key = date;

    const openForDateData: number =
      parseFloat(timeSeriesData[key]["1. open"]) ?? undefined;

    openForDate = openForDateData;

    if (openForDateData != null) {
      console.log(openForDateData);
      break;
    } else {
      console.log(`No data found for the date ${date}`);
    }
  }
  return openForDate;
};
