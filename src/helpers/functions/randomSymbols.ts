import { getRandomValues } from "./getRandomValues";

const symbols: string[] = [
  "AAPL",
  "MSFT",
  "LMT",
  "TSLA",
  "NVDA",
  "DPZ",
  "CAT",
  "EA",
  "NFLX",
  "SPCE",
];

export const randomSymbols: string[] = getRandomValues(symbols);
