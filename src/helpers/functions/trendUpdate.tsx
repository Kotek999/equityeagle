import * as React from "react";
import { COLORS } from "../../colors";
import { TrendIcon } from "../../components/Atoms/TrendIcon";
import { JSX } from "../../types";
import { Text } from "react-native";

export const trendUpdate = (data: any): JSX => {
  let prevHighValue: number | null = null;
  let prevLowValue: number | null = null;

  for (let key in data) {
    const high: number = parseFloat(data[key]["2. high"]);
    const low: number = parseFloat(data[key]["3. low"]);

    if (prevHighValue !== null && high > prevHighValue) {
      return <TrendIcon name="trending-up" color={COLORS.limeColor} />;
    } else if (prevLowValue !== null && low < prevLowValue) {
      return <TrendIcon name="trending-down" color={COLORS.redColor} />;
    }

    prevHighValue = high;
    prevLowValue = low;
  }

  return <Text style={{ color: COLORS.whiteColor }}>N/A</Text>;
};
