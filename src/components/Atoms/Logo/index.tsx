import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { logo, logoTitle } from "../../../helpers/imageRequirements";
import { JSX } from "../../../types";

export const Logo = (): JSX => {
  return (
    <View>
      <Image style={styles.img} source={logo} alt="logo" />
      <Image
        resizeMode="center"
        style={styles.imgTitle}
        source={logoTitle}
        alt="titleOfLogo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 140,
    alignSelf: "center",
  },
  imgTitle: {
    width: screenWidth,
  },
});
