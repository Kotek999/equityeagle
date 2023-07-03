import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { JSX } from "../../../types";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";

export const ModalStatusDivider = (): JSX => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <MaterialCommunityIcons
        style={{ marginHorizontal: 10 }}
        name="security"
        size={24}
        color={COLORS.iconLightGreenColor}
      />
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.whiteColor,
  },
});
