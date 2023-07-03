export const convertOpenToNumber = (
  openForDateCurrent: number | undefined,
  defaultValue: number = 0,
  openForDay: string | number
): number => {
  return Number(openForDateCurrent === 0 ? defaultValue : openForDay);
};
