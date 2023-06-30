import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const trendUpdate = (data: any): string => {
  let prevHighValue: number | null = null;
  let prevLowValue: number | null = null;

  for (let key in data) {
    const high: number = parseFloat(data[key]["2. high"]);
    const low: number = parseFloat(data[key]["3. low"]);

    const up: any = () => (
      <MaterialCommunityIcons name="trending-up" size={32} color="lime" />
    );

    const down: any = () => (
      <MaterialCommunityIcons name="trending-down" size={32} color="red" />
    );

    if (prevHighValue !== null && high > prevHighValue) {
      return up;
    } else if (prevLowValue !== null && low < prevLowValue) {
      return down;
    }

    prevHighValue = high;
    prevLowValue = low;
  }

  return "N/A";
};
