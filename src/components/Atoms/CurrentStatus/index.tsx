import * as React from "react";
import textData from "../../../../textData.json";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { statusIconDataMap } from "../../Data/MapsData";
import { COLORS } from "../../../colors";
import { JSX, IconType, CurrentStatusProps } from "../../../types";

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
          color: COLORS.textGray,
        }}
      >
        {textData.value.statusTitle}
      </Text>
      <Text
        style={{
          ...styles.statusValue,
          color: COLORS.white,
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
