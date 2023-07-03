import { Data } from "../../interfaces";

export const maxOpenUpdate = (timeSeriesData: Data["Time Series (5min)"]) => {
  let maxOpen: number | null = null;
  for (let key in timeSeriesData) {
    const open: number = parseFloat(timeSeriesData[key]["1. open"]);
    if (maxOpen === null || open > maxOpen) {
      maxOpen = open;
    }
  }
  return maxOpen;
};
