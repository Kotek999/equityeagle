import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

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
    color: COLORS.lightGray,
  },
});
