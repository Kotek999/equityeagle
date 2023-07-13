import { months } from "../../components/Data/MonthData/data";

export const getDate = (day: number): string => {
  const date: Date = new Date();

  date.setDate(date.getDate() - day);

  const getDay: number = date.getDate();
  const getMonth: number = date.getMonth();

  return getDay < 10
    ? `0${getDay} ${months[getMonth]}`
    : `${getDay} ${months[getMonth]}`;
};
