import * as React from "react";
import textData from "../../../../textData.json";
import Animated, { FadeInDown } from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { Text } from "@react-native-material/core";
import { screenWidth } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const Slogan = (): JSX => {
  return (
    <Animated.Text
      style={{ textAlign: "center" }}
      entering={FadeInDown.duration(3000).springify()}
    >
      <Text style={styles.sloganTitle} variant="h5">
        {textData.value.slogan}
      </Text>
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  sloganTitle: {
    width: screenWidth - 10,
    textAlign: "center",
    justifyContent: "flex-start",
    fontWeight: "600",
    fontFamily: "Lato",
    color: COLORS.white,
  },
});
