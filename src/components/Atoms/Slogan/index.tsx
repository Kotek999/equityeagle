import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@react-native-material/core";
import { JSX } from "../../../types";

export const Slogan = (): JSX => {
  const slogan: string = "Maximize your profits with our stock analysis tools!";

  return (
    <Text style={styles.sloganTitle} variant="h5">
      {slogan}
    </Text>
  );
};

const styles = StyleSheet.create({
  sloganTitle: {
    textAlign: "center",
    justifyContent: "flex-start",
    fontWeight: "600",
    fontFamily: "Lato",
    color: "white",
  },
});
