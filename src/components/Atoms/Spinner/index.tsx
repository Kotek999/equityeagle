import * as React from "react";
import textData from "../../../../textData.json";
import { Text } from "@react-native-material/core";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const Spinner = (): JSX => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.lime} />
      <Text style={styles.value}>{textData.value.loading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.mainGray,
  },
  value: {
    margin: 20,
    color: COLORS.white,
  },
});
