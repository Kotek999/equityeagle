import * as React from "react";
import textData from "../../../textData.json";
import { TrendIcon } from "../../components/Atoms/TrendIcon";
import { Text } from "react-native";
import { COLORS } from "../../colors";
import { JSX } from "../../types";

export const trendUpdate = (data: any): JSX => {
  let prevHighValue: number | null = null;
  let prevLowValue: number | null = null;

  for (let key in data) {
    const high: number = parseFloat(data[key]["2. high"]);
    const low: number = parseFloat(data[key]["3. low"]);

    if (prevHighValue !== null && high > prevHighValue) {
      return <TrendIcon name="trending-up" color={COLORS.lime} />;
    } else if (prevLowValue !== null && low < prevLowValue) {
      return <TrendIcon name="trending-down" color={COLORS.red} />;
    }

    prevHighValue = high;
    prevLowValue = low;
  }

  return (
    <Text style={{ color: COLORS.white }}>{textData.value.notAvailable}</Text>
  );
};
