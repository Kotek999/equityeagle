import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const NoDataForChart = (): JSX => {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.value}>
        {`No data available right now, please try again later...`}
      </Text>
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
    backgroundColor: COLORS.darkColor,
  },
  value: {
    fontSize: 18,
    textAlign: "center",
    color: COLORS.whiteColor,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
