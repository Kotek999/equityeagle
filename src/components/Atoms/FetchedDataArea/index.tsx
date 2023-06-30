import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { JSX } from "../../../types";
import { SymbolIcon } from "../../../components/Atoms/SymbolIcon";
import { FetchedDataAreaProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const FetchedDataArea = (props: FetchedDataAreaProps): JSX => {
  const styleForTrend: string =
    props.trendValue === "low"
      ? COLORS.redColor
      : props.trendValue === "N/A"
      ? COLORS.whiteColor
      : COLORS.limeColor;

  return (
    <View style={styles.elementsOfBoxContainer}>
      <Text style={styles.value}>{`${props.placeValue}.`}</Text>
      {props.isInfoIcon ? (
        <>
          <MaterialCommunityIcons
            name="information"
            size={20}
            color={COLORS.iconGoldColor}
            onPress={props.onPress}
            style={{ marginRight: 10 }}
          />
          <SymbolIcon symbol={props.symbol} />
          <Text style={styles.value}>{props.symbol}</Text>
        </>
      ) : (
        <>
          <Text style={{ flex: 1, textAlign: "center" }}>
            <SymbolIcon symbol={props.symbol} />
          </Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: COLORS.whiteColor }}>
              {props.symbolValue}
            </Text>
          </View>
        </>
      )}
      <Text style={styles.value}>
        {props.maxOpenValue !== null ? props.maxOpenValue.toFixed(2) : "N/A"}
      </Text>
      <Text
        style={{
          ...styles.trendValue,
          color: styleForTrend,
        }}
      >
        {props.trendValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  elementsOfBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    flex: 1,
    textAlign: "center",
    color: COLORS.whiteColor,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
  trendValue: {
    flex: 1,
    textAlign: "center",
  },
});
