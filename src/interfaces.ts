import { ReactNode } from "react";
import { Symbols, Products } from "./enums";

export interface ChildProps {
  children: ReactNode;
}

export interface NoContentProps {
  symbol: Symbols | Products;
}

export interface Data {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
  };
  "Time Series (5min)": Record<
    string,
    { "1. open": string; "2. high": string; "3. low": string }
  >;
}


