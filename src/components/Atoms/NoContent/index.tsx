import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";
import { JSX, NoContentProps } from "../../../types";

export const NoContent = (props: NoContentProps): JSX => {
  return (
    <Text style={styles.noContentValue}>
      {`No content for ${props.symbol}.`}
    </Text>
  );
};

const styles = StyleSheet.create({
  noContentValue: {
    textAlign: "center",
    color: COLORS.white,
    fontFamily: "Lato",
    fontSize: 16,
    letterSpacing: 1.1,
  },
});
