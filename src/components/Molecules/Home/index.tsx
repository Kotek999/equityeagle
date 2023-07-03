import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationScreenProps } from "../../../../rootTypeList";
import { SCREEN } from "../../../../routes";
import { Stack } from "@react-native-material/core";
import { JSX } from "../../../types";
import { screenWidth, screenHeight } from "../../../helpers/dimensions";
import { Slogan } from "../../Atoms/Slogan";
import { Logo } from "../../Atoms/Logo";
import { CustomButton } from "../../Atoms/Button";

export const Home = ({
  navigation,
}: NavigationScreenProps<SCREEN.Home>): JSX => {
  return (
    <View style={styles.container}>
      <Stack center style={styles.imgWithSloganContainer}>
        <Logo />
        <View style={{ width: screenWidth - 10 }}>
          <Slogan />
        </View>
      </Stack>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Let's begin!"
          onPress={() => navigation.replace(SCREEN.Main)}
        />
      </View>
    </View>
  );
};

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
