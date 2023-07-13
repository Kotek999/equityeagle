import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../../colors";
import { JSX, ChildProps } from "../../../types";

export const Gradient = (props: ChildProps): JSX => {
  return (
    <LinearGradient
      colors={[COLORS.dark, COLORS.yellow]}
      style={styles.gradient}
      start={{ x: 0.8, y: 0.8 }}
      end={{ x: 0.6, y: 1 }}
    >
      {props.children}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
