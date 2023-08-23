export const getTime = (): string => {
  const currentDate: Date = new Date();
  currentDate.setMinutes(currentDate.getMinutes() - 30);

  const hours: string = String(currentDate.getHours()).padStart(2, "0");
  const minutes: string = String(currentDate.getMinutes()).padStart(2, "0");

  return `Last refresh: ${hours}:${minutes}`;
};
