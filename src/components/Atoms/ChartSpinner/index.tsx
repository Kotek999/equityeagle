import * as React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { screenHeight } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";

export const ChartSpinner = (): JSX => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={COLORS.yellowColor} />
        <Text style={styles.spinnerValue}>Data Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight / 2.5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerValue: {
    margin: 20,
    color: COLORS.whiteColor,
    fontSize: 16,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
