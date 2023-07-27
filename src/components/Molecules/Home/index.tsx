import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "@react-native-material/core";
import { screenWidth, screenHeight } from "../../../helpers/dimensions";
import { Slogan } from "../../Atoms/Slogan";
import { Logo } from "../../Atoms/Logo";
import { JSX } from "../../../types";
import { SCREEN } from "../../../../routes";
import { NavigationScreenProps } from "../../../../rootTypeList";

export const Home = ({
  navigation,
}: NavigationScreenProps<SCREEN.Home>): JSX => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(SCREEN.Main);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Stack center style={styles.imgWithSloganContainer}>
        <Logo />
        <View style={{ width: screenWidth - 10 }}>
          <Slogan />
        </View>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight / 1.5,
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
