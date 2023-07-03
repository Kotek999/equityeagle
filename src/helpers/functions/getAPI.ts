import { Symbols } from "../../enums";
import { API } from "../../components/Data/EndPointData";

export const getAPI = (symbol: Symbols): string => {
  const endPoint: string = `${API.url.part1}${symbol}${API.url.part2}${API.key}`;

  return endPoint;
};
