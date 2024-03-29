import config from "../../../../config.json";
import { ApiType } from "../../../types";

export const API: ApiType = {
  url: {
    part1: config.apiUrlV1,
    part2: config.apiUrlV2,
    news: config.apiUrl,
  },
  testKey: config.apiKeyTest,
  key: config.apiKey,
};
