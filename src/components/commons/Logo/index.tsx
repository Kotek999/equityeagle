import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { JSX } from "../../../types";
import { screenWidth } from "../Dimensions";
import { logo, logoTitle } from "../ImageRequirements";

export default function Logo(): JSX {
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
}

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
