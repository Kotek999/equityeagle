export const calculateOpenForDate = (openForDate: number[]) =>
  openForDate.reduce((value, open) => value + open, 0);
