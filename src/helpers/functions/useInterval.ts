export const useInterval = (callback: () => void, timeOut: number) => {
  const interval = setInterval(callback, timeOut);
  return () => clearInterval(interval);
};
