export const getDate = (day: number): string => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date: Date = new Date();

  date.setDate(date.getDate() - day);

  const getDay: number = date.getDate();
  const getMonth: number = date.getMonth();

  return getDay < 10
    ? `0${getDay} ${months[getMonth]}`
    : `${getDay} ${months[getMonth]}`;
};
