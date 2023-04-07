import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ChildProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const Gradient = ({ children }: ChildProps): JSX => {
  return (
    <LinearGradient
      colors={["#263238", "#d32f2f"]}
      style={styles.gradient}
      start={{ x: 0.8, y: 0.8 }}
      end={{ x: 0.6, y: 1 }}
    >
      {children}
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
