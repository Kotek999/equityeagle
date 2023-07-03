export const getPreviousDate = (day: number): string => {
  const monthValue: string[] = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const getCurrentYear: number = new Date().getFullYear();
  const date: Date = new Date();

  date.setDate(date.getDate() - day);

  const getPreviousDay: number = date.getDate();
  const getPreviousMonth: number = date.getMonth();

  return getPreviousDay < 10
    ? `${getCurrentYear}-${monthValue[getPreviousMonth]}-0${getPreviousDay}`
    : `${getCurrentYear}-${monthValue[getPreviousMonth]}-${getPreviousDay}`;
};
