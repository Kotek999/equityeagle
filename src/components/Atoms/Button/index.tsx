import * as React from "react";
import { StyleSheet } from "react-native";
import { ButtonProps } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { Button } from "@react-native-material/core";
import { JSX } from "../../../types";

export const CustomButton = ({ title, onPress }: ButtonProps): JSX => {
  return (
    <Button
      titleStyle={{ fontSize: 15 }}
      color="black"
      title={title}
      variant="contained"
      style={styles.button}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: screenWidth / 2,
    backgroundColor: "#b6843a",
  },
});
