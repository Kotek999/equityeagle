import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const label = (titleOfLabel: string): JSX => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={styles.label}>{titleOfLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontFamily: "Lato",
    color: COLORS.lightGrayColor,
  },
});
