import * as React from "react";
import textData from "../../../../textData.json";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { screenHeight } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const ChartSpinner = (): JSX => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={COLORS.yellow} />
        <Text style={styles.spinnerValue}>{textData.value.dataLoading}</Text>
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
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
