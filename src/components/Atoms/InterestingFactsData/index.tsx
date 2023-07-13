import * as React from "react";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";
import { InterestingFactsDataProps } from "../../../interfaces";
import { JSX, FactsData } from "../../../types";

export const InterestingFactsData = (props: InterestingFactsDataProps): JSX => {
  if (!props.data || !props.data.length) {
    return <Text>Loading...</Text>;
  }
  const currentData: FactsData = props.data[props.index];
  const label: string = currentData.label;
  const content: string = currentData.content;

  return (
    <View style={styles.factsContainer}>
      <View style={styles.labelContainer}>
        <Animated.Text
          entering={FadeInLeft.duration(1000)}
          style={styles.labelValue}
        >
          {label}
        </Animated.Text>
      </View>
      <View style={styles.contentContainer}>
        <Animated.Text
          entering={FadeInRight.duration(1000)}
          style={styles.contentValue}
        >
          {content}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  factsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "90%",
    top: 10,
  },
  labelContainer: {
    top: 10,
  },
  labelValue: {
    textAlign: "center",
    color: COLORS.yellow,
    fontFamily: "Lato",
    fontSize: 16,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  contentContainer: {
    top: 20,
    marginBottom: 40,
    height: 100,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  contentValue: {
    width: "100%",
    textAlign: "center",
    color: COLORS.white,
    fontFamily: "Lato",
    fontSize: 14,
    letterSpacing: 1.1,
  },
});
