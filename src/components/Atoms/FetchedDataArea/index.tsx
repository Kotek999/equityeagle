import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SymbolIcon } from "../../../components/Atoms/SymbolIcon";
import { COLORS } from "../../../colors";
import { FetchedDataAreaProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const FetchedDataArea = (props: FetchedDataAreaProps): JSX => {
  const styleForTrend: string =
    props.trendValue === "low"
      ? COLORS.red
      : props.trendValue === "N/A"
      ? COLORS.white
      : COLORS.lime;

  return (
    <View style={styles.elementsOfBoxContainer}>
      <Text style={styles.value}>{`${props.placeValue}.`}</Text>
      {props.isInfoIcon ? (
        <Fragment>
          <MaterialCommunityIcons
            name="information"
            size={20}
            color={COLORS.iconGold}
            onPress={props.onPress}
            style={{ marginRight: 10 }}
          />
          <SymbolIcon symbol={props.symbol} />
          <Text style={styles.value}>{props.symbol}</Text>
        </Fragment>
      ) : (
        <Fragment>
          <Text style={{ flex: 1, textAlign: "center" }}>
            <SymbolIcon symbol={props.symbol} />
          </Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: COLORS.white }}>{props.symbolValue}</Text>
          </View>
        </Fragment>
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
    color: COLORS.white,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
  trendValue: {
    flex: 1,
    textAlign: "center",
  },
});
