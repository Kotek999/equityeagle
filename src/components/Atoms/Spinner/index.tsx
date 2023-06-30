import * as React from "react";
import { Text } from "@react-native-material/core";
import { View, ActivityIndicator } from "react-native";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const Spinner = (): JSX => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={COLORS.limeColor} />
      <Text style={{ margin: 20 }}>Loading...</Text>
    </View>
  );
};
