import * as React from "react";
import textData from "../../../../textData.json";
import { Text } from "@react-native-material/core";
import { View, ActivityIndicator } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const Spinner = (): JSX => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={COLORS.lime} />
      <Text style={{ margin: 20 }}>{textData.value.loading}</Text>
    </View>
  );
};
