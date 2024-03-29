import * as React from "react";
import { StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { Divider as ModalDivider } from "@react-native-material/core";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const Divider = (): JSX => {
  return <ModalDivider style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: "center",
    width: screenWidth,
    backgroundColor: COLORS.dividerLightGray,
    height: 1.5,
  },
});
