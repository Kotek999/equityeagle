import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { getTime } from "../../../helpers/functions/getTime";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const LastRefreshedItem = (): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{getTime()}</Text>
      <MaterialCommunityIcons
        style={{ marginHorizontal: 8, margin: 10 }}
        name="clock-check"
        size={24}
        color={COLORS.yellow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    left: 10,
  },
  time: {
    alignSelf: "center",
    color: COLORS.textGray,
    fontSize: 12,
    letterSpacing: 1.1,
    fontFamily: "Lato",
  },
});
