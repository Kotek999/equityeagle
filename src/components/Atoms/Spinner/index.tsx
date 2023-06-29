import * as React from "react";
import { Text } from "@react-native-material/core";
import { View, ActivityIndicator } from "react-native";
import { JSX } from "../../../types";

export const Spinner = (): JSX => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="lime" />
      <Text style={{ margin: 20 }}>Loading...</Text>
    </View>
  );
};
