import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { statusIconDataMap } from "../../Data/MapsData";
import { IconType, CurrentStatusProps } from "../../../types";
import { COLORS } from "../../../colors";

export const CurrentStatus = (props: CurrentStatusProps): JSX => {
  const statusIconChecker = (status: number): JSX | null => {
    const icon: IconType = statusIconDataMap[status];

    if (icon) {
      return (
        <MaterialCommunityIcons
          style={{ marginHorizontal: 8 }}
          name={icon.name as any}
          size={18}
          color={icon.color}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.statusContainer}>
      <Text
        style={{
          ...styles.statusValue,
          color: COLORS.textGrayColor,
        }}
      >
        {`Status: `}
      </Text>
      <Text
        style={{
          ...styles.statusValue,
          color: COLORS.whiteColor,
        }}
      >
        {props.status}
      </Text>
      {statusIconChecker(props.status)}
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "flex-start",
  },
  statusValue: {
    alignSelf: "center",
    fontSize: 14,
    letterSpacing: 1.1,
    fontFamily: "Lato",
  },
});
