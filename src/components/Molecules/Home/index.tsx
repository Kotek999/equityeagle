import * as React from "react";
import textData from "../../../../textData.json";
import { View, StyleSheet } from "react-native";
import { Stack } from "@react-native-material/core";
import { screenWidth, screenHeight } from "../../../helpers/dimensions";
import { Slogan } from "../../Atoms/Slogan";
import { Logo } from "../../Atoms/Logo";
import { CustomButton } from "../../Atoms/Button";
import { JSX, OnPress } from "../../../types";
import { SCREEN } from "../../../../routes";
import { NavigationScreenProps } from "../../../../rootTypeList";

export const Home = ({
  navigation,
}: NavigationScreenProps<SCREEN.Home>): JSX => {
  const onClickGoToMainScreen: OnPress = (): void =>
    navigation.replace(SCREEN.Main);

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
          title={textData.value.button}
          onPress={onClickGoToMainScreen}
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
