import textData from "../../../textData.json";
import { getPreviousDate } from "./getPreviousDate";
import { Data } from "../../interfaces";

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
        console.log(textData.value.notAvailable);
        break;
    }
  };

  for (let key in timeSeriesData) {
    let date: string = `${previousDateSwitcher()} ${textData.value.time}`;

    key = date;

    const openForDateData: number =
      parseFloat(timeSeriesData[key]["1. open"]) ?? undefined;

    openForDate = openForDateData;

    if (openForDateData != null) {
      console.log(openForDateData);
      break;
    } else {
      console.log(`${textData.value.noDataForDate}${date}`);
    }
  }
  return openForDate;
};
