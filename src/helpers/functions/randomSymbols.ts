import { getRandomValues } from "./getRandomValues";
import { Symbols } from "../../enums";

const symbols: string[] = [
  Symbols.AAPL,
  Symbols.MSFT,
  Symbols.LMT,
  Symbols.TSLA,
  Symbols.NVDA,
  Symbols.DPZ,
  Symbols.CAT,
  Symbols.EA,
  Symbols.NFLX,
  Symbols.SPCE,
];

export const randomSymbols: string[] = getRandomValues(symbols);
