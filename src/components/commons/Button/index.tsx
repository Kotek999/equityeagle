import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { ButtonProps } from "../../../types";
import { Button } from "@react-native-material/core";
import { JSX } from "../../../types";

export default function CustomButton({ title, onPress }: ButtonProps): JSX {
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
}

const windowWidth: number = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    width: windowWidth / 2,
    backgroundColor: "#b6843a",
  },
});
