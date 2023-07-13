import * as React from "react";
import textData from "../../../../textData.json";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const NoDataForChart = (): JSX => {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.value}>{textData.value.noData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    width: "90%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.dark,
  },
  value: {
    fontSize: 18,
    textAlign: "center",
    color: COLORS.white,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
