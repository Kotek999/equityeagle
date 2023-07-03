import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, StyleSheet } from "react-native";
import { Badge } from "@react-native-material/core";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const BadgeWithIcon = (): JSX => {
  return (
    <View style={styles.badgeContainer}>
      <Badge
        style={{ marginLeft: 10 }}
        labelStyle={styles.badgeLabel}
        label="Data refreshed every 5 minutes"
        color={COLORS.mainGrayColor}
      />
      <MaterialCommunityIcons
        name="database-eye"
        size={20}
        color={COLORS.iconDataGreenColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  badgeLabel: {
    color: COLORS.textGrayColor,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
