export const getAverage = (openValues: number, count: number) => {
  const avg: number | string = Number((openValues / count).toFixed(2));

  return avg;
};
