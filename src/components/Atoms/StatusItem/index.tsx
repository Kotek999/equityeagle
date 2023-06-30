import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { StatusItemProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const StatusItem = (props: StatusItemProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusValue}>{`Status: ${props.status}`}</Text>
      <MaterialCommunityIcons
        style={{ marginHorizontal: 8, margin: 10 }}
        name="security"
        size={24}
        color={COLORS.iconLightGreenColor}
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  statusValue: {
    alignSelf: "center",
    color: COLORS.textGrayColor,
    fontSize: 12,
    letterSpacing: 1.1,
    fontFamily: "Lato",
  },
});
