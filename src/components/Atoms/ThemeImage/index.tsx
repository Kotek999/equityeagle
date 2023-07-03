import * as React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { JSX, SymbolProps } from "../../../types";
import { SymbolIcon } from "../../../components/Atoms/SymbolIcon";
import { NameOfCompany } from "../../../components/Atoms/NameOfCompany";
import { themeImageDataMap } from "../../Data/MapsData";
import { COLORS } from "../../../colors";
import Animated, { FadeInUp } from "react-native-reanimated";

export const ThemeImage = (props: SymbolProps): JSX => {
  const themeSource = themeImageDataMap[props.symbol];

  return (
    <View style={styles.themeContainer}>
      <Animated.View entering={FadeInUp.delay(100)}>
        <ImageBackground
          resizeMode="cover"
          resizeMethod="auto"
          style={styles.image}
          source={themeSource}
          alt="titleOfLogo"
        >
          <View style={styles.nameOfCompanyContainer}>
            <NameOfCompany symbol={props.symbol} />
          </View>
          <View style={styles.positionOfsymbolIconContainer}>
            <View style={styles.symbolIconContainer}>
              <SymbolIcon symbol={props.symbol} />
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  themeContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    justifyContent: "center",
    width: screenWidth,
    height: screenHeight / 2.5,
  },
  nameOfCompanyContainer: {
    position: "absolute",
    bottom: 20,
    right: 10,
    margin: 0,
  },
  positionOfsymbolIconContainer: {
    position: "absolute",
    bottom: screenHeight / 3.4,
    left: 10,
    margin: 0,
  },
  symbolIconContainer: {
    width: screenWidth / 6,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.mainGrayColor,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
