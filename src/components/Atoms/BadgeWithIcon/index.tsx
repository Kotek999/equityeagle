import * as React from "react";
import textData from "../../../../textData.json";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, StyleSheet } from "react-native";
import { Badge } from "@react-native-material/core";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const BadgeWithIcon = (): JSX => {
  return (
    <View style={styles.badgeContainer}>
      <Badge
        style={{ marginLeft: 10 }}
        labelStyle={styles.badgeLabel}
        label={textData.value.badge}
        color={COLORS.mainGray}
      />
      <MaterialCommunityIcons
        name="database-eye"
        size={20}
        color={COLORS.iconDataGreen}
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
    color: COLORS.textGray,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
