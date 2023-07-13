import { API } from "../../components/Data/EndPointData";
import { Symbols } from "../../enums";

const getStockAPI = (symbol: Symbols): string => {
  const endPoint: string = `${API.url.part1}${symbol}${API.url.part2}${API.testKey}`;

  return endPoint;
};

const getNewsAPI = (): string => {
  const endPoint: string = `${API.url.news}${API.key}`;

  return endPoint;
};

export { getStockAPI, getNewsAPI };
