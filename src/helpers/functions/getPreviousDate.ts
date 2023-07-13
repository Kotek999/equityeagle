import { monthValue } from "../../components/Data/MonthData/data";

export const getPreviousDate = (day: number): string => {
  const getCurrentYear: number = new Date().getFullYear();
  const date: Date = new Date();

  date.setDate(date.getDate() - day);

  const getPreviousDay: number = date.getDate();
  const getPreviousMonth: number = date.getMonth();

  return getPreviousDay < 10
    ? `${getCurrentYear}-${monthValue[getPreviousMonth]}-0${getPreviousDay}`
    : `${getCurrentYear}-${monthValue[getPreviousMonth]}-${getPreviousDay}`;
};
