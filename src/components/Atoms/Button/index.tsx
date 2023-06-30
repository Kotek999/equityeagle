import * as React from "react";
import { StyleSheet } from "react-native";
import { ButtonProps } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { Button } from "@react-native-material/core";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const CustomButton = (props: ButtonProps): JSX => {
  return (
    <Button
      titleStyle={{ color: COLORS.yellowColor, fontSize: 15 }}
      title={props.title}
      variant="contained"
      style={styles.button}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: screenWidth / 2,
    backgroundColor: COLORS.darkColor,
  },
});
