import * as React from "react";
import Logo from "../../commons/Logo";
import Slogan from "../../commons/Slogan";
import CustomButton from "../../commons/Button";
import { View, StyleSheet } from "react-native";
import { HomeProps } from "../../../../rootTypeList";
import { SCREEN } from "../../../../routes";
import { Stack } from "@react-native-material/core";
import { JSX } from "../../../types";
import { screenWidth, screenHeight } from "../../commons/Dimensions";

export default function Home({ navigation }: HomeProps): JSX {
  return (
    <View style={styles.container}>
      <Stack center style={styles.imgWithSloganContainer}>
        <Logo />
        <Slogan />
      </Stack>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Let's begin!"
          onPress={() => navigation.push(SCREEN.Main)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    width: screenWidth,
    height: screenHeight,
  },
  imgWithSloganContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
