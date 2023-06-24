import * as React from "react";
import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import { SafeAreaView, ScrollView } from "react-native";
import { ChildProps } from "../../../interfaces";
import { JSX } from "../../../types";
import { StatusBar } from "expo-status-bar";

export const Screen = ({ children }: ChildProps): JSX => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
      <StatusBar hidden={false} backgroundColor="#152127" style={isIOS() ? "light" : "light"} />
    </SafeAreaView>
  );
};
