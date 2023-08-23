import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";
import { InterestingFactsDataProps } from "../../../interfaces";
import { JSX, FactsData } from "../../../types";
import { AnimateText } from "../AnimateText";

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
        <AnimateText left style={styles.labelValue}>
          {label}
        </AnimateText>
      </View>
      <View style={styles.contentContainer}>
        <AnimateText left={false} style={styles.contentValue}>
          {content}
        </AnimateText>
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
    top: 20,
    marginBottom: 10,
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
    marginBottom: 20,
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
