import * as React from "react";
import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../colors";
import { JSX, ChildProps } from "../../../types";

export const Screen = (props: ChildProps): JSX => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {props.children}
      </ScrollView>
      <StatusBar
        hidden={false}
        backgroundColor={COLORS.dark}
        style={isIOS() ? "dark" : "light"}
      />
    </SafeAreaView>
  );
};
