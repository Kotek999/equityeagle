export const formatOpen = (
  open: number,
  maxOpenValue: number
): string | number => {
  return open < maxOpenValue ? open.toFixed(2) : maxOpenValue.toFixed(2);
};
